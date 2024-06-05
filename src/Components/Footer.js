import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Conçu et codé avec
        <span className="text-gradient font-medium"> Amour</span> &
        <span className="text-gradient font-medium"> Café</span>
      </p>
    </footer>
  );
}
export default Footer;
