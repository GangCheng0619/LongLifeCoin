import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CircleProgress } from "react-gradient-progress";
import mainLogo from "../components/assets/img/mainlogo.png";
import { Accordion, Col, Row, Button } from "react-bootstrap";
import { Hone, ImageRepo, Htwo, Hfour, Hthr, Repo } from "./pages.styled";
import { Zoom } from "react-reveal";
import { Reposit } from "./pages.styled";
import johnny from "../components/assets/img/johnny.png";
import team1 from "../assests/images/team1.png";
import team2 from "../assests/images/team2.png";
import team3 from "../assests/images/team3.png";
import team4 from "../assests/images/team4.png";
import icon1 from "../components/assets/img/icon_1.png";
import icon2 from "../components/assets/img/icon_2.png";
import icon3 from "../components/assets/img/icon_3.png";
import icon4 from "../components/assets/img/icon_4.png";
import Integration from "../assests/images/total.svg";
import Decentralize from "../assests/images/decentraliz.svg";
import Safe from "../assests/images/safe.svg";
import twopart from "../assests/images/twopart.svg";
import "../components/assets/css/mobile.css";

import Header from "../components/header";
import InfoText from "../components/infoText";

import { ScrollingProvider } from "react-scroll-section";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "transparent",
  boxShadow: "none",
}));

export default function Main(props) {
  return (
    <ScrollingProvider>
      {/* -- header part */}
      <div className="header_container">
        <Header />
      </div>
      <Container
        style={{
          display: "flex",
          padding: "50px",
        }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div className="space-double"></div>
          <div className="space-double"></div>
          <Col>
            <Zoom>
              <Repo>
                <span className="x_font_w_2">
                  Why people wanna purchase this LLC
                </span>
                <div className="space-double"></div>
                <span className="x_font_w_4">
                  You can get one of the world's most valuable health knowledge
                  for Free.
                </span>
                <div className="space-single"></div>
                <span className="x_font_w_4">For the benefit of mankind!</span>
                <div className="space-double"></div>
                <Button variant="outline-primary">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/whitepaper.pdf"
                    target="_blank"
                    download
                  >
                    DOWNLOAD WHITEPAPER
                  </Link>
                </Button>
              </Repo>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <Reposit border="3px dashed #f0f0f0">
                <div className="space-single"></div>
                <span className="x_font_w_3">1 BNB = 400 LLC</span>
                <div style={{ width: 200, height: 200 }}>
                  <CircleProgress
                    percentage={70}
                    strokeWidth={10}
                    primaryColor={["#009344", "#009345"]}
                    secondaryColor="#f0f0f0"
                    fontSize={"20px"}
                    fontColor={"#1CC0FC"}
                  />
                </div>
                <div className="space-single"></div>
                <span className="x_font_w_2">
                  <Link
                    to="/presale"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      background: "#1A73E8",
                      padding: "10px",
                    }}
                  >
                    Pre-sale is Live
                  </Link>
                </span>
              </Reposit>
            </Zoom>
          </Col>
        </Row>
      </Container>
      <div className="space-double"></div>
      <Container>
        <Row style={{ margin: "0px 0px" }}>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={Integration} width="100px" height="100px" alt="img" />
              </ImageRepo>
              <Hthr>Easy Token Integration</Hthr>
              <Hthr>
                Simple Token is the bridge between cryptocurrencies and
                mainstream consumer apps.
              </Hthr>
            </Reposit>
          </Col>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={Safe} width="100px" height="100px" />
              </ImageRepo>
              <Hthr>Advanced Security</Hthr>
              <Hthr>
                Cryptocurrency received its name it uses encryption to verify
                transactions.
              </Hthr>
            </Reposit>
          </Col>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={Decentralize} width="100px" height="100px" />
              </ImageRepo>
              <Hthr>Decentralized</Hthr>
              <Hthr>
                Decentralized blockchains are immutable, which means that the
                data entered is irreversible.
              </Hthr>
            </Reposit>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0px",
          }}
        >
          <Col lg={6} md={12}>
            <Hone color="#4688F1">A compelling value proposition.</Hone>
            <Hthr>
              LongLifeCoin (LLC) is an open source, Bitcoin-like digital
              currency which uses a proof of work script algorithm.
            </Hthr>
            <Hthr>
              The genesis block was mined on March 1st, 2014. The total number
              of mineable LLC is 1,000,000,000. The mining of LLC is divided
              into Epochs: each Epoch mines 36000 blocks of coins and is
              targeted to last approximately 25 days.
            </Hthr>
            <Button variant="outline-primary">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/whitepaper.pdf"
                target="_blank"
                download
              >
                DOWNLOAD WHITEPAPER
              </Link>
            </Button>
          </Col>
          <Col lg={6} md={12}>
            <ImageRepo width="520px">
              <img src={twopart} />
            </ImageRepo>
          </Col>
        </Row>
      </Container>
      <Container>
        <Reposit>
          <span
            className="x_font_y_4"
            style={{ fontSize: "40px", letterSpacing: "10px" }}
          >
            TEAM
          </span>
          <Hone color="white">
            please contact our MGRM / token own by long life coin llc
          </Hone>
        </Reposit>
        <Row>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={johnny} width="150px" height="150px" alt="CEO" />
              </ImageRepo>
              <Htwo>Johnny Chiang</Htwo>
              <Hthr align="center">MGRM</Hthr>
            </Reposit>
          </Col>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={team2} width="150px" height="150px" />
              </ImageRepo>
              <Htwo>Gang Cheng</Htwo>
              <Hthr align="center">Blockchain Leader</Hthr>
            </Reposit>
          </Col>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={team3} width="150px" height="150px" />
              </ImageRepo>
              <Htwo>Bhargav Patel</Htwo>
              <Hthr align="center">UI Designer</Hthr>
            </Reposit>
          </Col>
          <Col>
            <Reposit>
              <ImageRepo border="4px dashed #6f8ba4">
                <img src={team4} width="150px" height="150px" />
              </ImageRepo>
              <Htwo>Morita Amaya</Htwo>
              <Hthr align="center">CMO</Hthr>
            </Reposit>
          </Col>
        </Row>
      </Container>
      {/* -- bottom part */}
      <div className="space-double"></div>
      <div className="footer_Container">
        <Container>
          <Item>
            <div className="space-double"></div>
            <div className="space-double"></div>
            <span className="x_font_g_4">BENEFITS</span>
            <br />
            <span className="x_font_y_3">
              <b>Features</b>
            </span>
          </Item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={3} md={3} sm={12}>
              <div className="img-container">
                <img src={icon1} alt="NoImg" />
              </div>
              <InfoText
                ICON=""
                title="WHY PEOPLE CHOOSE LLC"
                content="LLC reflects people's wishes for longevity."
              />
              <div className="space-double"></div>
              <div className="img-container">
                <img src={icon2} alt="NoImg" />
              </div>
              <InfoText
                ICON=""
                title="HIGH RETURN INVESTMENT"
                content="The greatest wish of people is long life.
                Therefore people have interest in our tokens.
                Lead and rule the world that want longevity."
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <Item>
                <img src={mainLogo} alt="NoImg" className="coinlogo" />
              </Item>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="img-container">
                <img src={icon3} alt="NoImg" />
              </div>
              <InfoText
                ICON=""
                content="A transparent and secure approach to ownership management solutions - LLC makes great features."
              />
              <div className="space-double"></div>
              <div className="img-container">
                <img src={icon4} alt="NoImg" />
              </div>
              <InfoText
                ICON=""
                title="ART FOR NEW BLOCKCHAIN ERA"
                content="You will see the new Blockchain era by own LLC token."
              />
            </Grid>
          </Grid>
        </Container>
        <>
          <Reposit>
            <span className="x_font_y_3">
              <b>F A Q</b>
            </span>
            <div className="space-double"></div>
          </Reposit>
          <Container>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are the benefits of digital currenct?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    As payments in digital currencies are made directly between
                    the transacting parties without the need for any
                    intermediaries, the transactions are usually instantaneous
                    and low-cost.
                  </p>
                  <p>
                    This fares better compared to traditional payment methods
                    that involve banks or clearinghouses.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How long has digital currenct existed?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In 2009, the first decentralized cryptocurrency, Bitcoin,
                    was created by presumably pseudonymous developer Satoshi
                    Nakamoto.
                  </p>
                  <p>
                    It used SHA-256, a cryptographic hash function, in its
                    proof-of-work scheme.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How will digital currency affect daily life in the US and
                  around the world?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Using digital currency, targeted social assistance will also
                    become truly targeted, and commercial banks and payment
                    systems will not be able to receive their percentage from
                    such payments.
                  </p>
                  <p>
                    Digital currencies offer even more opportunities if they are
                    freely convertible.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Why should I use LLC currency and how is it different from
                  other currencies?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our tokens are not meant to make money like other tokens.
                  </p>
                  <p>
                    Our tokens are designed to help people live longer and enjoy
                    life.
                  </p>
                  <p>
                    As everyone knows, without life, what do you need money for?
                  </p>
                  <p>
                    Above all, life is the most precious thing. Let's enjoy our
                    life.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How is LLC helping entrepreneurs?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Long Life Coin attracts the attention of entrepreneurs,
                    philanthropists and investors because of its ideas and
                    vitality.
                  </p>
                  <p>
                    They keep in contact with owner to become the owner of this
                    token.
                  </p>
                  <p>
                    The owner is 76 years old Gentleman, he do not want to show
                    of to public, but all idea is from him.
                  </p>
                  <p>
                    There is no doubt that LongLifeCoin will become a global
                    token.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                {/* <Accordion.Header>
                  What benefits can I get from joining the LLC crowd funding
                  platform?
                </Accordion.Header>
                <Accordion.Body>

                </Accordion.Body> */}
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  How do I convert my LLC currency into US dollars or other
                  currencies?
                </Accordion.Header>
                <Accordion.Body>
                  <p>How do you convert one currency to another on crypto?</p>
                  <p>
                    Here's how to swap tokens: Open DeFi Wallet and go to the
                    'Swap' tab.
                  </p>
                  <p>
                    Acknowledge that you're not a resident/citizen of a
                    geo-restricted region.
                  </p>
                  <p>
                    Select the 'From/To' networks and tokens to view the
                    estimated exchange price.
                  </p>
                  <p>
                    Enter either the 'From' or 'To' token amount and tap 'Swap'.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </>
        <div className="space-double"></div>
        <div className="space-double"></div>
        <div className="space-double"></div>
        <div className="space-double"></div>
        <Container>
          <Reposit>
            <span className="x_font_y_5" style={{ color: "white" }}>
              P O box 210387
            </span>
            <span className="x_font_y_5" style={{ color: "white" }}>
              S. F. Ca. 94121 USA
            </span>
            <span className="x_font_y_5" style={{ color: "white" }}>
              longlifecoin@yahoo.com
            </span>
            <span className="x_font_y_5" style={{ color: "white" }}>
              Phone: 650-757-1678
            </span>
            <span className="x_font_y_5" style={{ color: "white" }}>
              Fax: 650-284-2138
            </span>
            <span className="x_font_y_4">
              2022 @ LongLife Coin - Bitcoin and Cryptocurrency ICO System
            </span>
            <span className="x_font_y_4">
              Above Information is not guaranteed. And subject to change without
              notice.
            </span>
          </Reposit>
        </Container>
      </div>
    </ScrollingProvider>
  );
}
