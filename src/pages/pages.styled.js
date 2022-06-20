import styled from "styled-components";
import "../App.css";
export const Hone = styled.div`
  font-size: 30px;
  padding: 10px 0px;
  color: ${(props) => props.color};
  letter-spacing: ${(props) => props.ls};
`;
export const Htwo = styled.div`
  font-size: 26px;
  color: ${(props) => (props.color === "black" ? "black" : "white")};

  padding: 10px 0px;
`;
export const Hthr = styled.div`
  font-size: 23px;
  color: ${(props) => (props.color === "black" ? "black" : "white")};
  f
  text-align: ${(props) => props.align};
  padding: 10px 0px;
  @media only screen and (max-width: 600px) {
    // text-align:center;
  }
`;
export const Hfour = styled.div`
  font-size: 20px;

  padding: 10px 0px;
  color: ${(props) => props.color};
`;
export const Hfive = styled.div`
  font-size: 24px;
  color: white;
  padding: ${(props) => props.pad};
`;
export const Hsix = styled.div`
  font-size: 16px;
  padding: 10px 0px;
  color: white;
`;
export const Reposit = styled.div`
  padding: 20px;
  border: ${(props) => props.border};
  background: ${(props) => props.back};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Repo = styled.div`
  padding: 30px 0px;
`;
export const ImageRepo = styled.div`
  padding: ${(props) => (props.pad === "0px" ? "0px 20px" : "20px")};
  margin: 10px 0px;
  border: ${(props) => props.border};
  @media only screen and (max-width: ${(props) => props.width}) {
    display: none;
  }

  color: white !important;
`;
export const Part = styled.div`
  padding: 100px 0px;
  background-color: ${(props) => props.bg};
`;
export const RoadMap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.pad};
  border: ${(props) => props.border};
  margin: ${(props) => props.mar};
`;
export const AppsLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Repo2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Repo3 = styled.div`
  border: ${(props) => props.border};
`;
export const SideBar = styled.div`
  height: 100%;
  width: 200px;
  background: rgb(255, 255, 255, 0.6);
  position: fixed;
  z-index: 1;
  top: 86px;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  padding-left: 20px;
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const NavBar = styled.div`
  background-color: rgb(255, 255, 255, 0.3);
  padding: 0px 20px;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;
export const SubNav = styled.div`
  float: ${(props) => props.float};
  color: white;
  padding: 10px 20px;
  font-size: 36px;
  // font-family: "Modak";
  display: ${(props) => props.dp};
  margin-right: ${(props) => props.mr};
  a {
    color: white;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const SubNav1 = styled.div`
  float: ${(props) => props.float};
  color: white;
  padding: 10px 20px;
  font-size: 36px;
  // font-family: "Modak";
  display: ${(props) => props.dp};
  margin-right: ${(props) => props.mr};
  a {
    color: #2e2a2a;
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;
export const SubNav2 = styled.div`
  float: ${(props) => props.float};
  color: white;
  padding: 10px 20px;
  font-size: 36px;
  // font-family: "Modak";
  display: ${(props) => props.dp};
  margin-right: ${(props) => props.mr};
  @media screen and (max-width: 1100px) {
    display: block;
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 250px;
  line-height: 44px;
  margin: 20px;
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #d3d3d3;
    transition: 0.2s all;
    cursor: text;
  }
  input {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 0.5rem 0;
    border-bottom: 2px solid #d3d3d3;
    box-shadow: none;
    color: #111;
  }
  input:invalid {
    outline: 0;
  }
  input:focus,
  input:valid {
    border-color: #00aaee;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus ~ label,
  input:valid ~ label {
    font-size: 20px;
    top: -24px;
    color: #00aaee;
  }
`;
