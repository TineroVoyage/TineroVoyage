function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@tinero_voyage"
            data-unique-id="tinero_voyage"
            data-embed-type="creator"
            style={{ maxWidth: "330px", margin: "0" }}
          >
            <section>
              <a
                target="_blank"
                href="https://www.tiktok.com/@tinero_voyage?refer=creator_embed"
                rel="noreferrer"
              >
                @tinero_voyage
              </a>
            </section>
          </blockquote>

          <iframe
            src="https://www.instagram.com/tinero.voyage/embed"
            width="330px"
            height="388px"
            frameBorder="0"
            scrolling="no"
            allow="transparent"
          ></iframe>
        </div>
        <div className="footer__group">
          <span className="footer__copy">
            &#169; Copyright Tinero Voyage. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
