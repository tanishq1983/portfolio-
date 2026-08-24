export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Designed & Built with <span className="heart">♥</span> and lots of ☕
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
