import {
  Card,
  Container,
  Grid,
  Input,
  Popover,
  Spacer,
  Text,
  Textarea,
  useTheme,
} from "@nextui-org/react";
import Button1 from "../../components/Buttons/Button1";
import styles from "./styles.module.css";
import Link from "next/link";
import { getCountries, getStates } from "country-state-picker";
import SelectCountry from "../Select/SelectCountries";
import { useState, useEffect } from "react";
import SelectState from "../Select/SelectState";
import { MyStyledButton } from "../Buttons/myStyledButton";
import { useRouter } from "next/router";
import { Zoom } from "react-awesome-reveal";
import { useSession, signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Information() {
  const router = useRouter();
  const { isDark } = useTheme();
  const [user, setUser] = useState(undefined);
  const [value, setValue] = useState({ name: "Nigeria", code: "ng" });
  let states = getStates(value.code);
  const [value2, setValue2] = useState(states[0]);

  const { data: session } = useSession();

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
  useEffect(() => {
    if (!session) {
      return signIn();
    } else {
      getProfile();
    }
  }, []);

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
    options: states ?? undefined,
    name: "states",
    defaultValue: value2,
    value: value2,
    setValue: setValue2,
  };

  const updateProfile = async (params) => {
    let res = await fetch("/api/profile/", {
      method: "PATCH",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
      body: JSON.stringify(params),
    });

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
      // setUser(response.data)
      router.push("/checkout/payment");
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
  if (session?.user) {
    return (
      <Zoom triggerOnce cascade>
        <Grid direction="column" className="p-0 m-0" xs={"6"}>
          <form onSubmit={submitHandler}>
            <div className="row w-100">
              <div className="col-12 col-md-7 ">
                <Text css={{ fontSize: "x-large" }} h1>
                  Contact Information
                </Text>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-1 mb-1">
                <Text>{session?.user.email}</Text>
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
                {user ? (
                  <>
                    <Input
                      value={user?.country}
                      name="country"
                      required
                      css={{ width: "100%" }}
                      type={"text"}
                      placeholder="Country"
                    />
                  </>
                ) : (
                  <SelectCountry data={data} />
                )}
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

                {user ? (
                  <>
                    <Input
                      value={user?.state}
                      name="state"
                      required
                      css={{ width: "100%" }}
                      type={"text"}
                      placeholder="State"
                    />
                  </>
                ) : (
                  <SelectState data={data2} />
                )}
              </div>

              {/* <div className="col-4">
                <label
                  style={{ color: "var(--nextui-colors-text)" }}
                  htmlFor="postal_code"
                >
                  Postal Code
                </label>
                <Input
                  value={user?.postal_code}
                  id="postal_code"
                  name="postal_code"
                  required
                  css={{ width: "100%" }}
                  type={"text"}
                  placeholder="Postal code"
                />
              </div> */}
            </div>
            <Spacer />
            <div className="d-flex justify-content-end">
              <MyStyledButton
                type={"submit"}
                // disabled= {params.disabled ?? false}
                auto
                css={{ height: "50px", width: "40%", fontSize: "auto" }}
                size="mysize"
                color="mycolor"
              >
                Continue to Payment
              </MyStyledButton>
            </div>
            <Spacer />
          </form>
        </Grid>
      </Zoom>
    );
  }
}
export default Information;
