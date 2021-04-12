function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <p>{currentYear} &copy; Gymondo</p>

      <p>
        <span>Privacy</span>
        <span>|</span>
        <span>Terms & Conditions</span>
        <span>|</span>
        <span>Contact</span>
      </p>
    </footer>
  );
}

export default Footer;
