function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-5 text-center absolute bottom-0 w-full text-sm text-gray-600">
      <p>Copyright &copy; {year} Ahmed Wagih</p>
    </div>
  );
}

export default Footer;
