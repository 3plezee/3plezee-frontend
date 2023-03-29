import { Card, Grid, Text, Input, Spacer, useTheme } from "@nextui-org/react";
import DasboardLayout from "../../components/Layout/layout";
import SelectDesktop from "../../components/Select/SelectCountries";
import { useState, useEffect } from "react";
import SelectState from "../../components/Select/SelectState";
import { getCountries, getStates } from "country-state-picker";
import { MyStyledButton } from "../../components/Buttons/myStyledButton";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardSettings() {
  const [user, setUser] = useState(undefined);
  const [value, setValue] = useState({ name: "Nigeria", code: "ng" });
  let states = getStates(value.code);
  const [value2, setValue2] = useState(states[0]);
  const { isDark } = useTheme();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      return signIn();
    } else {
      getProfile();
    }
  }, []);

  // console.log("lk", session.accessToken)
  const getProfile = async () => {
    let res = await fetch("/api/profile/", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
    });
    let response = await res.json();
    if (res.ok) {
      toast(" Profile data retrieved", {
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
      toast(" Failed to get profile data", {
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

  const updateProfile = async (params) => {
    let res = await fetch("/api/profile/", {
      method: "PATCH",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
      body: JSON.stringify(params),
    });
    let response = await res.json();
    if (res.ok) {
      toast(" Profile data updated", {
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
      toast(" Failed to update profile data", {
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

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    updateProfile(form_values);
  };

  let countries = getCountries();

  const changeCountry = (param) => {
    setValue(param);
    let states = getStates(param.code);
    setValue2(states[0]);
  };
  const data = {
    options: countries,
    name: "country",
    defaultValue: value.name,
    value: value,
    setValue: setValue,
    changeCountry: changeCountry,
  };

  const data2 = {
    options: states,
    name: "states",
    defaultValue: value2,
    value: value2,
    setValue: setValue2,
  };

  return (
    <DasboardLayout>
      <Text className="h1" h1>
        Profile
      </Text>
      <Grid.Container>
        <Card css={{ background: isDark && "transparent" }}>
          <Card.Image
            css={{
              height: "80px",
              width: "40px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            // css={{"height": mq ? "40vh":"75vh"}}
            src={session?.user.image}
            //   width="100%"
            showSkeleton
            placeholder="/images/img1.jpg"
            // objectFit="cover"
            alt="Card example background"
            maxDelay={10000}
          ></Card.Image>
          <Card.Body>
            <form className="row" onSubmit={submitHandler}>
              {/* <div className="col-12 mt-1 mb-1">
            <label style={{color:"var(--nextui-colors-text)"}} >Name</label>
            <Input name="name" disabled  value={session.user.name} css={{width:'100%', color:'var(--nextui-colors-text)'}} type={'text'} placeholder="Name" /> 
            </div> */}

              <div className="col-12 mt-1 mb-1">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Email:{" "}
                </label>
                <input
                  name="email"
                  style={{ borderRadius: "10px", padding: "5px" }}
                  disabled
                  value={session?.user.email}
                />
                {/* <Input disabled value={session.user.email} name="email" required css={{width:'100%'}} type={'email'} placeholder="Email" />  */}
              </div>
              <div className="col-12 mt-1 mb-1">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Phone Number
                </label>
                <Input
                  value={user?.phone_number}
                  name="phone_number"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="Phone number"
                />
              </div>
              <Spacer />
              <Text css={{ fontSize: "x-large" }} h2>
                Shipping Address
              </Text>
              <div className="col-12 mt-1 mb-1">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Country
                </label>
                <SelectDesktop data={data} />
              </div>
              <Spacer />
              <div className="col-6">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  First name
                </label>
                <br />
                <Input
                  value={user?.first_name}
                  name="first_name"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="First name"
                />
              </div>
              <div className="col-6">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Last name
                </label>
                <Input
                  value={user?.last_name}
                  name="last_name"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="Last name"
                />
              </div>
              <div className="col-12 mt-1 mb-1">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Address
                </label>
                <Input
                  value={user?.address}
                  name="address"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="Address"
                />
              </div>

              <div className="col-4">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  City
                </label>
                <Input
                  value={user?.city}
                  name="city"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="City"
                />
              </div>

              <div className="col-4">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  State
                </label>
                <SelectState data={data2} />
              </div>

              {/* <div className="col-4">
                <label style={{ color: "var(--nextui-colors-text)" }}>
                  Postal Code
                </label>
                <Input
                  value={user?.postal_code}
                  name="postal_code"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="Postal code"
                />
              </div> */}
              <input value={value.name} type={"hidden"} name="country" />
              <input value={value2} type={"hidden"} name="state" />

              <Spacer />
              <div className="d-flex justify-content-end">
                <MyStyledButton
                  type={"submit"}
                  // disabled= {params.disabled ?? false}
                  auto
                  css={{ height: "30px", width: "auto", fontSize: "auto" }}
                  size="mysize"
                  color="mycolor"
                >
                  Update profile
                </MyStyledButton>
              </div>
              <Spacer />
            </form>
            <Spacer />
          </Card.Body>
        </Card>
      </Grid.Container>
    </DasboardLayout>
  );
}
