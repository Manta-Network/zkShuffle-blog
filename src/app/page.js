/**
 * This is Home page
 */
// TODO:  update home page info
export default function Home() {
  return (
    <div id="content">
      <div id="home-jumbotron" className="jumbotron">
        <h1 className="title">
          <u>Personae Labs</u>
        </h1>
        <div className="description">
          <p>
            We are <strong>Personae Labs</strong>, an R&amp;D lab investigating
            the future of human expression online. We believe that the
            availability of advanced cryptography in consumer devices and the
            rise of public social networks will completely alter the shape of
            digital society. Read our
            <a href="/posts/personae">introductory post</a>.
          </p>
          <p>
            If you’re excited by advanced cryptography, digital identity where
            you control your own data, or personable social design, please reach
            out by Discord: we are especially excited to hear from traditionally
            underrepresented groups to ensure that everyone is included in the
            future of digital expression.
          </p>
        </div>
      </div>
    </div>
  );
}
