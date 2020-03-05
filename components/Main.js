import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            {/* <img src="/static/images/pic.png" alt="" /> */}
          </span>
          <p>
            With thread-ed we try some of our life experiences to find a perfect
            friend for you and for this purpose we made an algorithm that
            calculates 10 to 15 people who we think are best match for you, We
            take gender as a consideration because we think people are
            independent to chose who they want to be friend With though we
            believe friendship goes way beyond any barrier humans can create. We
            hope you enjoy our services. P.S. we wont share any data without
            asking you
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            {/* <img src="/static/images/pic02.jpg" alt="" /> */}
          </span>
          <p>
            Thread-ed tries to match everything that a person could and we hope
            would like about another person and thus generates a list of
            credentials for a particular user and then every other person is
            judged on the baisis of those credentials and we make a strict
            criteria for these test which are re-run from the start thus
            everytime you use the website we re-check our database to find the
            right person for you so if you get the same person in more than 3
            tries there must be something special
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            {/* <img src="/static/images/pic03.jpg" alt="" /> */}
          </span>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way and no machine ever could match the love or friendship that
            grows with time and stands the test of situations of an individual's
            life. We wish you all stay happy and hope we can help you find some
            friends :)
          </p>
          {close}
        </article>

        <article
          id="Start"
          className={`${this.props.article === "Start" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Start</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">First Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half last">
              <label htmlFor="name">Last Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="email">Field-1</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="email">Field-2</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Introductory Message</label>
              <textarea name="message" id="message" rows="1"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Submit" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="Suggestions"
          className={`${this.props.article === "Suggestions" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Suggestions</h2>
          <h3>Name here</h3>
          <span className="image main">
            <img src="/static/images/pic.jpg" alt="" />
          </span>
          <h3>BIO</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <h3>details</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
          <h2 className="major">Suggestions</h2>
          <h3>Name here</h3>{" "}
          <span className="image main">
            <img src="/static/images/pic.jpg" alt="" />
          </span>
          <h3>BIO</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <h3>details</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
          <h2 className="major">Suggestions</h2>
          <h3>Name here</h3>{" "}
          <span className="image main">
            <img src="/static/images/pic.jpg" alt="" />
          </span>
          <h3>BIO</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <h3>details</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
          <h2 className="major">Suggestions</h2>
          <h3>Name here</h3>{" "}
          <span className="image main">
            <img src="/static/images/pic.jpg" alt="" />
          </span>
          <h3>BIO</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <h3>details</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
          <h2 className="major">Suggestions</h2>
          <h3>Name here</h3>{" "}
          <span className="image main">
            <img src="/static/images/pic.jpg" alt="" />
          </span>
          <h3>BIO</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          <h3>details</h3>
          <p>
            Though we make an honest effort we still would like to request to
            you to never judge your own self or any one else on the baisis of
            apps like these for every person is unique and beautiull in their
            own way{" "}
          </p>
          {/* <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div> */}
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Main;
