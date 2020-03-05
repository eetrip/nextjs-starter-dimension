import PropTypes from "prop-types";

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    {/* <p className="copyright">
      &copy; this is edited: <a href="https://html5up.net">extremely</a> edited:{" "}
      <a href="https://github.com/zeit/next.js">u will see</a>
    </p> */}
    <p className="copyright">made by eeshan tripathi</p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
