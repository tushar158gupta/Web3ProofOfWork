import { createPublicClient, http } from "viem";

import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const App = () => {
  async function getbalance() {
    const res = await client.getBalance({
      address: "0xa3fb5faC25Ede1C1587f0Ee0a2af04fB6b3D5B5b",
    });
    console.log(res);
  }

  return <button onClick={getbalance}>jai shree ram</button>;
};

export default App;
