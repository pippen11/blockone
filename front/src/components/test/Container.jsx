import TestComponent from "./Component";
import { useState } from "react";
import axios from "axios";
import { useWeb3 } from "../utility/useWeb3.js";

function TestContainer() {
  const [list, setList] = useState("");
  const [generate, setGenerate] = useState("");
  const { account, logIn, web3, chainId } = useWeb3();

  const clickgenerate = async () => {
    console.log(generate);
    const result = (
      await axios.post("http://localhost:8080/api/mint/minting", {
        // prompt: generate,
        prompt:
          "https://oaidalleapiprodscus.blob.core.windows.net/private/org-lCcLuFW4wFq08AkrsMJtkzua/user-4ulW7oTEgfCHUvnWkP2O2gHg/img-0q1ysqoT7Vo6O5Cm8nHh6nVp.png?st=2023-06-07T01%3A52%3A18Z&se=2023-06-07T03%3A52%3A18Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-06T22%3A17%3A01Z&ske=2023-06-07T22%3A17%3A01Z&sks=b&skv=2021-08-06&sig=1b0TBnnbBGMAdEfPeixyqhn8zDMHpb7nWCfhDvejzJs%3D",
      })
    ).data;
    // setList(result[0].url);
    setList(result);
    // console.log(result);
  };

  if (list) {
    console.log(list);
    console.log(account);
  }

  return (
    <>
      <TestComponent
        generate={generate}
        clickgenerate={clickgenerate}
        setGenerate={setGenerate}
        list={list}
      />
    </>
  );
}

export default TestContainer;
