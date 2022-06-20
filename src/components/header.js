import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "use-wallet";
import coinLogo from "../components/assets/img/logoCoin.png";
import { ethers } from "ethers";
import imgMetamask from "../components/assets/metamask.svg";
import "./assets/css/fontStyle.css";
import { useScrollSection } from "react-scroll-section";
import { NotificationManager } from "react-notifications";
import {
  Repo2,
  Hone,
  NavBar,
  SubNav,
  SubNav1,
  SubNav2,
  ImageRepo,
  SideBar,
} from "../pages/pages.styled";
import "../App.css";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "transparent",
  boxShadow: "none",
}));

export default function Header() {
  const [stateSide, setStateSide] = useState(false);
  const showSideBar = () => {
    setStateSide(!stateSide);
  };
  const [flag, setFlag] = useState(false);
  const [wallet, setWallet] = useState("");

  const useConnection = useWallet();

  useEffect(() => {
    const refreshWallet = async () => {
      if (typeof window !== "undefined") {
        if (window.ethereum) {
          const account = window.sessionStorage.getItem("address");
          if (account) {
            const chainId = await window.ethereum.request({
              method: "eth_chainId",
            });
            if (!flag && chainId === "0x38")
              window.ethereum
                .enable()
                .then(async (res) => {
                  window.sessionStorage.setItem("address", res[0]);
                  setWallet(res[0]);
                  setFlag(true);
                  window.sessionStorage.setItem("connected", "true");
                })
                .catch((err) => {
                  setFlag(false);
                  window.sessionStorage.removeItem("address");
                  window.sessionStorage.removeItem("connected");
                  window.sessionStorage.removeItem("balance");
                  window.location.reload();
                });
          }
        }
      }
    };
    refreshWallet();
  }, [flag]);

  const handleConnect = async () => {
    if (typeof window !== "undefined") {
      if (window.ethereum) {
        console.log("Exsist metamask");
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (!flag && chainId === "0x61")
          window.ethereum
            .enable()
            .then(async (res) => {
              window.sessionStorage.setItem("address", res[0]);
              setWallet(res[0]);
              setFlag(true);
              window.sessionStorage.setItem("connected", "true");
              const provider = new ethers.providers.Web3Provider(
                window.ethereum
              );
              const balance = await provider.getBalance(res[0]);
              const bal = ethers.utils.formatEther(balance);
              window.sessionStorage.setItem("balance", bal);
              //   window.location.reload();
              if (res) {
                NotificationManager.success(
                  "Connected Metamask successfully.",
                  "Success",
                  3000
                );
              }
            })
            .catch((err) => {
              NotificationManager.error(err.message, "Error", 3000);
              setFlag(false);
              window.sessionStorage.removeItem("address");
              window.sessionStorage.removeItem("connected");
              window.sessionStorage.removeItem("balance");
              window.location.reload();
            });
        if (chainId !== "0x61") {
          NotificationManager.warning(
            "Please change network to BSC main net.",
            "Action required",
            3000
          );
        }
      } else {
        NotificationManager.warning(
          "You must install metamask.",
          "Action required",
          3000
        );
      }
    }
  };

  const checkConnection = async () => {
    let { ethereum } = window;
    if (ethereum !== undefined) {
      const chainId = await ethereum.request({ method: "eth_chainId" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length !== 0 && Number(chainId) === 97) {
        onConnect();
      }
      // ethereum.on("chainChanged", handleChainChanged);
    }
  };

  const onConnect = () => {
    if (useConnection.status !== "connected") {
      useConnection.connect().catch((err) => {
        alert("please check metamask!");
      });
      flag = true;
    }
  };

  const disconnect = () => {
    if (useConnection.status === "connected") {
      useConnection.reset();
      flag = false;
    }
  };
  return (
    <NavBar>
      <SubNav float="left">
        <img src={coinLogo} width="65px" height="65px" alt="Logo" />
      </SubNav>
      <SubNav float="left">
        <Link to="" style={{ textDecoration: "none" }}>
          <span className="x_font_w_3">
            <b>Home</b>
          </span>
        </Link>
      </SubNav>
      <SubNav float="left">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <span className="x_font_w_3">
            <b>About</b>
          </span>
        </Link>
      </SubNav>
      <SubNav float="left">
        <Link to="" style={{ textDecoration: "none" }}>
          <span className="x_font_w_3">
            <b>Feature</b>
          </span>
        </Link>
      </SubNav>
      <SubNav float="left">
        <Link to="/presale" style={{ textDecoration: "none" }}>
          <span className="x_font_w_3">
            <b>Presale</b>
          </span>
        </Link>
      </SubNav>
      <SubNav2 dp="none" float="left" onClick={showSideBar}>
        <img src={coinLogo} width="65px" height="65px" alt="Logo" />
      </SubNav2>
      <SubNav1 float="right" mr="30px">
        <button
          variant="contained"
          className="x-nav-button"
          onClick={handleConnect}
        >
          {flag ? disconnect() : onConnect}
          {flag ? wallet.slice(0, 4) + "..." + wallet.slice(-3) : "connect"}
        </button>
      </SubNav1>
      {stateSide ? (
        <SideBar>
          <SubNav1 onClick={showSideBar}>
            <Link to="" style={{ textDecoration: "none" }}>
              <span className="x_font_w_30">
                <b>Home</b>
              </span>
            </Link>
          </SubNav1>
          <SubNav1 onClick={showSideBar}>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <span className="x_font_w_30">
                <b>About</b>
              </span>
            </Link>
          </SubNav1>
          <SubNav1 onClick={showSideBar}>
            <Link to="" style={{ textDecoration: "none" }}>
              <span className="x_font_w_30">
                <b>Feature</b>
              </span>
            </Link>
          </SubNav1>
          <SubNav1 onClick={showSideBar}>
            <Link to="/presale" style={{ textDecoration: "none" }}>
              <span className="x_font_w_30">
                <b>Presale</b>
              </span>
            </Link>
          </SubNav1>
        </SideBar>
      ) : (
        ""
      )}
    </NavBar>
  );
}
