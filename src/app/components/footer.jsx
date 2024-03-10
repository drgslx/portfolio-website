const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-800 text-white p-4 text-center relative bottom-0 w-full">
        <p>&copy; {currentYear} Dragos Alexa</p>
      </footer>
    );
  };
  
  export default Footer;