import { Grid, Text, useTheme, Table } from "@nextui-org/react";
import DasboardLayout from "../../../components/Layout/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { sum } from "lodash";
import { EyeIcon } from "../../../components/Navbar/EyeIcon";
import Link from "next/link";

export default function DashboardOrders() {
  const [data, setData] = useState(undefined);
  const { data: session } = useSession();
  const { isDark } = useTheme();

  // if(session){
  const getOrders = async () => {
    let res = await fetch("/api/orders/", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
    });
    let response = await res.json();

    if (res.ok) {
      // toast.info("Order list retrieved", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: isDark ? "dark" : "light",
      // });

      setData(response.data);
    } else {
      toast(" Failed to get order list", {
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
    if (!session) {
      return signIn();
    } else {
      getOrders();
    }
  }, []);

  function getTotal(params) {
    let total = params.map((item) => item.product_price * item.quantity);

    total = sum(total);
    return total;
  }
  function getQuantity(params) {
    let total = params.map((item) => item.quantity);

    total = sum(total);
    return total;
  }
  return (
    <DasboardLayout>
      <Text h1>Orders</Text>
      <Grid.Container>
        <Table
          hoverable
          shadow
          color={"warning"}
          aria-label="Example static collection table"
          css={{
            height: "auto",
            minWidth: "100vw",
          }}
          selectionMode="single"
        >
          <Table.Header css={{ gap: "$10" }}>
            {/* <Table.Column>Action</Table.Column> */}
            <Table.Column>ORDER_ID</Table.Column>
            <Table.Column>TRANSACTION_REF</Table.Column>
            <Table.Column>QUANTITY</Table.Column>
            <Table.Column>TOTAL</Table.Column>
            <Table.Column>PAYMENT</Table.Column>
            <Table.Column>DELIVERY STATUS</Table.Column>
          </Table.Header>
          <Table.Body loadingState={"sorting"}>
            {data?.map((item, index) => {
              return (
                <Table.Row css={{ gap: "$2" }} key={index}>
                  {/* <Table.Cell>
                    <Link href={`/dashboard/orders/${item.order_id}`}>
                      <EyeIcon size={20} fill="#b59677" />
                    </Link>
                  </Table.Cell> */}
                  <Table.Cell>
                    <Link href={`/dashboard/orders/${item.order_id}`}>
                      {item.order_id}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{item.transaction_ref}</Table.Cell>
                  <Table.Cell>{getQuantity(item.order_items)}</Table.Cell>
                  <Table.Cell>{getTotal(item.order_items)}</Table.Cell>
                  <Table.Cell>
                    {item.confirm_payment ? "paid" : "pending"}
                  </Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Grid.Container>
    </DasboardLayout>
  );
  // }
  // else{
  //   signIn()
  // }
}
