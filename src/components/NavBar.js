import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksmap = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{linksmap}</nav>;
}

export default NavBar;
