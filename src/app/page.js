/**
 * This is Home page
 */
export default function Home() {
  return (
    <div id="content">
      <div id="home-jumbotron" className="jumbotron">
        <h1 className="title">
          <u>Nebra</u>
        </h1>
        <div className="description">
          <p>
            We are <strong>Nebra</strong>, a research
            and community driven project. Our vision is to scale and compose
            applications of zero-knowledge proofs (ZKP) on blockchains, starting with Ethereum.
            We think zero-knowledge proofs + blockchains bring better 
            coordination to human society, and one of the remaining
            big problems is how to make ZKP proving and verification scalable and composable on
            blockchains. We are building the first proof aggregation service on
            Ethereum, which uses our{' '}
            <strong> Universal ZK-ZK Proof Aggregation</strong> construction to
            aggregate ZKPs for all kinds of applications, including but not limited to privacy
            preserving identities, storage proofs, ZKML, zkEVM proofs. This
            proof aggregation service could:
            <ol>
              <li>
                Multiply the bandwith and lower the cost (by orders of magnitude) of ZKP verfication on Ethereum (and its L2s)
              </li>
              <li> <a href="https://dspace.mit.edu/handle/1721.1/61151">Composing ZKPs</a> from different parties </li>
            </ol>
          </p>
          <p>
            If you’re excited by advanced cryptography, distributed systems,
            protocol design or public goods, please reach out by twitter DM: we
            are excited to hear from you, regardless of education level, experiences
            or cultural background.
          </p>
        </div>
      </div>
    </div>
  );
}
