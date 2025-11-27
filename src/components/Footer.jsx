const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-primary-content py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base opacity-80 tracking-wide">
          © {year} - Developed by Bryan Suguitan using MERN stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
