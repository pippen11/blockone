import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useWeb3 } from "./components/utility/useWeb3";
import TestContainer from "./components/test/Container";

function App() {
  const { account, logIn, web3, chainId } = useWeb3();
  const [firstaccount, setFirstaccount] = useState("");
  const [secondaccount, setSecondaccount] = useState("");

  const accounttest = account.slice(0, 3);

  const accounttesttwo = account.slice(39, 42);

  const useraccount = accounttest + "..." + accounttesttwo;

  useEffect(() => {
    logIn();
  }, []);

  return (
    <>
      <Header>
        <>
          <MenuTitle>
            <img
              src="https://media1.giphy.com/media/dt1GOk4LEoZRfE4AqW/giphy.gif?cid=ecf05e47xjsgp0hzovi507s85xx8gmsxscin2qota6kujcl3&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              width="70"
              height="70"
            ></img>
            <div>cripto ocean</div>
          </MenuTitle>
          <Menubar>
            <Menu>
              <div>Trade</div>
              <DropDown>
                <Link to={`/main`}>
                  <div>Minting</div>
                </Link>
                <div>Swap</div>
              </DropDown>
            </Menu>
            <div>Earn</div>
            <div>Staking</div>
          </Menubar>
          <LauncheDapp>
            <button>Launch dApp</button>
          </LauncheDapp>
          <ConnectWallet>
            <button
              onClick={() => {
                logIn();
              }}
            >
              connect wallet
            </button>
          </ConnectWallet>
          <div>
            <div>{useraccount}</div>
          </div>
        </>
      </Header>

      <Routes>
        <Route path="/main" element={<TestContainer />} />
      </Routes>
    </>
  );
}

const Header = styled.div`
  background-color: rgba(0, 0, 51, 1);
  padding: 10px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    color: rgba(255, 255, 255, 1);
    font-size: 30px;
    font-weight: 500;
  }
`;

const MenuTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 60, 1);
  min-width: 200px;
  /* height: 100px; */
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  padding: 10px;

  z-index: 1;
  & > a {
    text-decoration: none;
    color: inherit;
  }

  & > div:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  /* position: relative; */
  /* display: inline-block; */

  &:hover ${DropDown} {
    display: block;
  }
`;

const Menubar = styled.div`
  display: flex;

  width: 30%;
  justify-content: space-around;

  & > div {
    font-size: 20px;
  }
`;

const LauncheDapp = styled.div`
  & > button {
    background: linear-gradient(to bottom left, #cc0000 0%, #ff9933 100%);
    color: white;
    padding: 10px 30px;
    font-weight: 800;
    border-radius: 10px;
  }
  width: 10%;
  display: flex;
  justify-content: right;
`;

const ConnectWallet = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-around;
  & > button {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 66, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color: white;
    padding: 10px;
    border-radius: 10%;
  }
`;

export default App;
