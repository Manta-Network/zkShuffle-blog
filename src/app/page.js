/**
 * This is Home page
 */
export default function Home() {
  return (
    <div id="content">
      <div id="home-jumbotron" className="jumbotron">
        <h1 className="title">
          <u>Zug ZK</u>
        </h1>
        <div className="description">
          <p>
            We are <strong>Zug</strong> (can be also called Zug ZK), an research 
            and community driven project. Our vision is to scale and compose zero-knowledge proof (ZKP) on blockchains,
            starting from Ethereum. We think zero-knowledge proof + blockchain brings better and more trustless coordination 
            to human society. And one of the remaining big problems is how to make ZKP scalable and composable on blockchains. 
            We are building the first proof aggregation service on Ethereum which uses our 
              <strong>Universal ZK-ZK Proof Aggregation</strong> construction to aggregate all kinds of ZKPs, 
            including but not limited to as privacy preserving identities, storage proofs, ZKML, zkEVM proofs. 
            This proof aggregation service could:
            <ol>
              <li>Multiply the bandwith (by orders of magnitude) of ZKP verfication on Ethereum (and its L2s)</li>
              <li>Make composable ZKP proofs from different parties possible </li>
          </ol>  
          </p>
          <p>
            If you’re excited by advanced cryptography, distributed systems, protocol design or developer relationships, please reach
            out by twitter DM: we are excited to hear from anyone, regardless of education, experiences or culture.
          </p>
        </div>
      </div>
    </div>
  );
}
