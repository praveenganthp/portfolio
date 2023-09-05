import '../styles_s/Footer.css';




function Footer(){
    return(
        <footer className="footer">
        <div className="copyright">
          &copy; 2023 automios
        </div>
        <div className="social-icons">
          <a href="/home" className="icon"><i className="fab fa-facebook"></i>facebook</a>
          <a href="/home" className="icon"><i className="fab fa-twitter"></i>twitter</a>
          <a href="/home" className="icon"><i className="fab fa-instagram"></i>instagram</a>
        </div>
      </footer>
    )
}

export default Footer;