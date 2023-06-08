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
            starting from Ethereum. We think zero-knowledge proof + blockchain brings trustless coordination 
            to human society. And one of some the key infrastructure is to scale ZKP verfication and make ZKP composable.
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
