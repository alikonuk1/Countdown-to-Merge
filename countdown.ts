import { providers } from "ethers";

const CHAIN_ID = 5;
const provider = new providers.InfuraProvider(CHAIN_ID)

async function main() {
    provider.on('block', (blockNumber) => {
        console.log(( 7604407 ) - blockNumber)
    })
}

main();