import {
  Grid,
  Input,
  Popover,
  Spacer,
  Text,
  useTheme,
  Modal,
  useModal,
  Button,
} from "@nextui-org/react";
import { usePaystackPayment } from "react-paystack";
import { MyStyledButton } from "../Buttons/myStyledButton";
import { storeContext } from "../context/Store";
import { useContext, useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import SubTotalCalculator from "../cartController/subTotalCalculator";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_071281aa8222388e59425233f83b36d62d317c72",
};

function Payment() {
  const { setVisible, bindings } = useModal();
  const { isDark } = useTheme();
  const [user, setUser] = useState(undefined);
  const { state, dispatch } = useContext(storeContext);
  const { data: session } = useSession();
  const router = useRouter();

  console.log(state);
  const confirmOrder = async (params) => {
    let res = await fetch("/api/orders/confirm-order/", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
      body: JSON.stringify(state?.cart?.content),
    });
    const response = await res.json();

    if (response.data.length > 0) {
      toast.error(
        `The following items: ${response.data.map(
          (item) => item
        )} are out of stock, please remove them from your cart `,
        {
          position: "top-right",
          // autoClose: 5000,
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isDark ? "dark" : "light",
        }
      );
      //if any of the cart items is out of stock, return to cart page
      router.push("/cart");
    } else {
      toast.success(
        "Order items confirmation was successfull, you can proceed to payment ",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isDark ? "dark" : "light",
        }
      );
    }
  };

  const getProfile = async () => {
    let res = await fetch("/api/profile/", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
    });
    let response = await res.json();
    if (res.ok) {
      toast.info(" Profile data retrieved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });

      setUser(response.data);
    } else {
      toast.error(" Failed to get profile data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });
    }
  };
  useEffect(() => {
    if (state?.cart?.content.length > 0) {
      if (!session) {
        return signIn();
      } else {
        confirmOrder();
        getProfile();
      }
    }
  }, [state.cart?.content]);

  const cartTotal = SubTotalCalculator(state?.cart?.content);
  const makeOrder = async (param) => {
    let body = {
      cart: state?.cart?.content,
      payment_method: param,
      shipping_det: {
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        address: user?.address,
        city: user?.city,
        state: user?.state,
        country: user?.country,
        phone_number: user?.phone_number,
        postal_code: user?.postal_code ?? "102020",
      },
      total: cartTotal,
      quantity: state?.cart?.amount,
    };
    let res = await fetch("/api/orders/create-order/", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
      body: JSON.stringify(body),
    });
    let response = await res.json();

    if (res.ok) {
      let page;
      if (param === "WhatsApp") {
        let url = `https://wa.me/2348062257480/?text=Hi my name is ${user?.first_name} ${user?.last_name}, I am interested in buying product(s) from your store. My order has already been placed with order ID = ${response.data}, pls check your dashboard for my order details and provide me with a bank account for payment`;
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      }
      toast.success(
        "Your Order has been created successfully. You will be redirected to your dashboard to track your order details",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isDark ? "dark" : "light",
        }
      );
      dispatch({ type: "RESET_CART" });
      router.push("/dashboard/orders");
    } else {
      toast.error("Error: order was not created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });
    }
  };

  //paystack
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    dispatch({ type: "RESET_CART" });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    try {
      const initializePayment = usePaystackPayment(config);
      return (
        <MyStyledButton
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          css={{
            fontSize: "large",
            background: "#b59677",
          }}
        >
          Paystack
        </MyStyledButton>
      );
    } catch (err) {
      return (
        <MyStyledButton
          css={{
            fontSize: "large",
            background: "#b59677",
          }}
        >
          Loading Paystack
        </MyStyledButton>
      );
    }
  };

  return (
    <Grid direction="column" className="p-0 m-0" xs={"6"}>
      <div className="row w-100">
        <div className="col-12 col-md-7 ">
          <Text css={{ fontSize: "x-large" }} h1>
            Order Details
          </Text>
        </div>
      </div>
      <Grid.Container
        direction="row"
        css={{
          border: "2px solid var(--nextui-colors-text)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Grid.Container>
          <Grid xs={3}>
            <Text>Email</Text>
          </Grid>
          <Grid>
            <Text>{user?.email}</Text>
          </Grid>
        </Grid.Container>

        <Grid.Container>
          <Grid xs={3}>
            <Text>Phone Number</Text>
          </Grid>
          <Grid>
            <Text>{user?.phone_number}</Text>
          </Grid>
        </Grid.Container>

        <Grid.Container>
          <Grid xs={3}>
            <Text>Name</Text>
          </Grid>
          <Grid>
            <Text>
              {user?.first_name} {user?.last_name}
            </Text>
          </Grid>
        </Grid.Container>

        <Grid.Container>
          <Grid xs={3}>
            <Text>Ship to</Text>
          </Grid>
          <Grid>
            <Text>
              {user?.address}, {user?.city} {user?.state}
            </Text>
          </Grid>
        </Grid.Container>

        <Grid.Container>
          <Grid xs={3}>
            <Text>Quantity</Text>
          </Grid>
          <Grid>
            <Text>{state?.cart?.amount}</Text>
          </Grid>
        </Grid.Container>

        <Grid.Container>
          <Grid xs={3}>
            <Text>Total</Text>
          </Grid>
          <Grid>
            <Text>&#8358; {SubTotalCalculator(state.cart.content)}</Text>
          </Grid>
        </Grid.Container>
      </Grid.Container>
      <Spacer />
      <Spacer />
      <Text css={{ fontSize: "x-large" }} h1>
        Payment
      </Text>
      <Text css={{ fontSize: "large" }} h2>
        Select A Payment Method
      </Text>
      <Spacer />
      <Grid.Container direction={"column"} css={{ gap: "10px" }}>
        {/* <PaystackHookExample />  */}
        <MyStyledButton
          css={{
            fontSize: "large",
            background: "#b59677",
          }}
        >
          Flutterwave
        </MyStyledButton>
        <MyStyledButton
          css={{
            fontSize: "large",
            background: "#b59677",
          }}
        >
          PayPal
        </MyStyledButton>

        <MyStyledButton
          onPress={() => setVisible(true)}
          css={{
            fontSize: "large",
            background: "green",
          }}
        >
          Custom(WhatsApp)
        </MyStyledButton>
        <Spacer />
      </Grid.Container>
      {/* start of modal */}
      <div>
        {/* <Button auto shadow color="secondary" onPress={() => setVisible(true)}>
        Open modal
      </Button> */}
        <Modal
          scroll
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              WhatsApp payment method
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-description">
              This method requires that have WhatsApp installed on your device,
              as it will redirect you to the WhatsApp platform with your order
              details for direct communication with us for shipping and payment
              logistics. Click the button below to continue.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <MyStyledButton
              onPress={() => makeOrder("WhatsApp")}
              css={{
                fontSize: "large",
                background: "#b59677",
              }}
            >
              Continue
            </MyStyledButton>
          </Modal.Footer>
        </Modal>
      </div>
    </Grid>
  );
}
export default Payment;
