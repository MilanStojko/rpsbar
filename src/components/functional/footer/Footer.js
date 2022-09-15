import morra from "../../../assets/media/img/morra.png";
import "./footer.css";

function Footer() {
  return (
    <div className="containerF">
      <footer className="footer">
        <div className="Dflex">
          <span className="white space">Realizzato da:</span>
          <span className="white">
            Milan Stojkovic <a href="#">GitHub</a>
          </span>
          <span className="white">
            Simone Brevetti <a href="#">GitHub</a>
          </span>
        </div>
        <img src={morra} className="logo"></img>
      </footer>
    </div>
  );
}
export default Footer;
