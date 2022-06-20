import React, { useState } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../components/assets/css/mobile.css";
import { NotificationManager } from "react-notifications";
import Header from "../components/header";
import { useBlockchainContext } from "../context";
import { ScrollingProvider } from "react-scroll-section";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "transparent",
  boxShadow: "none",
}));

export default function Presale(props) {
  const [state, { buy, checkBalance }] = useBlockchainContext();
  const [BNBamount, setBNBamount] = useState(0);
  const [QEamount, setQEamount] = useState(0);
  const [buy_loading, setBuyLoading] = useState(false);
  const buyHandle = async () => {
    if (BNBamount !== 0) {
      setBuyLoading(true);
      await buy(BNBamount);
      setBuyLoading(false);
    } else {
      setBuyLoading(false);
      NotificationManager.error("Input BNB amount");
    }
  };

  const onChangeBNB = (e) => {
    if (e.target.value === "") {
      setBNBamount(0);
      setQEamount(0);
    } else {
      setQEamount(e.target.value * state.price);
      setBNBamount(e.target.value);
    }
  };

  const onChangeQE = (e) => {
    if (e.target.value === "") {
      setBNBamount(0);
      setQEamount(0);
    } else {
      setBNBamount(e.target.value / state.price);
      setQEamount(e.target.value);
    }
  };

  return (
    <ScrollingProvider>
      {/* -- header part */}
      <Header />
      <div className="space-third"></div>
      {/* -- bottom part */}
      <div className="footer_Container">
        <Container>
          {/* <Item>
						<span className="x_font_y_3">
							<b>Presale</b>
						</span>
						<br />
						<span className="x_font_w_3">
							Presale period
						</span>
					</Item> */}

          <div className="space-third"></div>
          <div className="space-third"></div>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={6} md={6} sm={12}>
              <div className="saleBlock">
                <span className="x_font_y_3">
                  <b>Presale</b>
                </span>
                <p style={{ color: "white" }}>
                  LLC Token Balance : {state.tokenBalance}
                </p>
                <p style={{ color: "white" }}>
                  BNB Balance : {state.ethBalance}
                </p>
                <p style={{ color: "white" }}>1 BNB = 400 LLC</p>

                <Grid container>
                  <Grid item lg={3} md={3} xs={12}>
                    <div className="space-single"></div>
                    <span className="x_font_f_5">BNB</span>
                  </Grid>
                  <Grid item lg={9} md={9} xs={12}>
                    <Item>
                      <div className="contactSet">
                        <input
                          type="number"
                          onChange={onChangeBNB}
                          value={Number(BNBamount).toFixed(6)}
                          className="contactAddress"
                          placeholder="Enter ETH"
                        />
                      </div>
                    </Item>
                  </Grid>
                </Grid>
                <div className="space-double"></div>
                <Grid container>
                  <Grid item lg={3} md={3} xs={12}>
                    <div className="space-single"></div>
                    <span className="x_font_f_5">LLC</span>
                  </Grid>
                  <Grid item lg={9} md={9} xs={12}>
                    <Item>
                      <div className="contactSet">
                        <input
                          type="number"
                          onChange={onChangeQE}
                          value={QEamount}
                          className="contactAddress"
                          placeholder="Enter QE"
                        />
                      </div>
                    </Item>
                  </Grid>
                </Grid>
                <div className="space-double"></div>

                <Item>
                  <div
                    className="buyButton noselect align_center"
                    onClick={buyHandle}
                  >
                    <span
                      className="spinner-border"
                      role="status"
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: 10,
                      }}
                      hidden={!buy_loading}
                    ></span>
                    Buy Token
                  </div>
                </Item>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="space-third"></div>
      </div>
    </ScrollingProvider>
  );
}
