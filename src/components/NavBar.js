import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElem = links.map((link) => <a key={link} href={"#" + link}>{link}</a>)
  return <nav>{linksElem}</nav>;
}

export default NavBar;
