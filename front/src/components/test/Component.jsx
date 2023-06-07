import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function TestComponent({ clickgenerate, setGenerate, generate, list }) {
  return (
    <div>
      <MintingNft>
        <div>
          <input
            value={generate}
            onInput={(e) => {
              setGenerate(e.target.value);
            }}
            placeholder="Please provide a detailed description of the image you would like to create. The more specific you are, the more detailed the image will be."
          ></input>
        </div>
        <div>
          <button onClick={clickgenerate}>Minting</button>
          <button
            onClick={() => {
              console.log({ list });
            }}
          ></button>
        </div>
      </MintingNft>
      <div>
        <img src={list}></img>
      </div>
    </div>
  );
}

const MintingNft = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;

  width: 70%;

  & > div input {
    width: 1000px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid red;
    padding: 10px;
  }

  & > div button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid red;
    background-color: #d0d018;
    color: white;
    font-size: 20px;
  }
`;

export default TestComponent;
