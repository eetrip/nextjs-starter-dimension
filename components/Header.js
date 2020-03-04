import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faheart from "@fortawesome/fontawesome-free-regular/faHeart";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faheart} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Welcome to thread-ed</h1>
        {/* <p>Welcome to --XXX--</p> */}
        {/* <p>
          developer at <a href="https://html5up.net">Xelpmoc design and tech</a>
        </p> */}
        {/* <p>developer at Xelpmoc design and tech</p> */}
        <p>everyone needs a friend :)</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("Start");
            }}
          >
            Start
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
