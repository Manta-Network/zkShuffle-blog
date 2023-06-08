/**
 * this is a demo page, you can follow this file to create a new page
 *
 */
function page() {
  return (
    <div id="content">
      <h1>Efficient ECDSA &amp; the case for client-side proving</h1>
      <span>
        {' '}
        by <b> Personae </b> on{' '}
      </span>
      <i data-feather="calendar"></i>
      <time dateTime="2022-11-30">Nov 30, 2022</time>
      <i data-feather="tag"></i>
      <a
        className="btn btn-sm btn-outline-dark tag-btn"
        href="https://personaelabs.org/tags/cryptography"
      >
        cryptography
      </a>
      <br></br>
      <br></br>
      <p>
        In this post, we introduce our research improving private ECDSA
        signature verification, stemming from this{' '}
        <a href="https://ethresear.ch/t/efficient-ecdsa-signature-verification-using-circom/13629">
          ETHResearch post
        </a>{' '}
        and implemented in this{' '}
        <a href="https://github.com/personaelabs/efficient-zk-ecdsa">
          repository
        </a>
        . We also introduce the importance of{' '}
        <strong>client-side proving</strong> to unlock the full potential of
        zero-knowledge cryptography.
      </p>
      <p>
        There will be some math in this post! It might look scary! But the key
        insights of the method are simple and should teach you some fun
        cryptography.
      </p>
      <div></div>
      <h1 id="motivation">Motivation</h1>
      <h2 id="ecdsa--ring-signatures">ECDSA &amp; ring signatures</h2>
    </div>
  );
}
export default page;
