"use client";

import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { HamburgerIcon } from "../HamburgerIcon/HamburgerIcon";
import { Links } from "../Links/Links";

export function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const handleOnClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative p-half">
      <Menu
        customBurgerIcon={<HamburgerIcon />}
        width="auto"
        className="absolute right-0 top-0 bg-moanackGrey"
        right
        isOpen={isMenuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Links onClick={handleOnClick} />
      </Menu>
    </div>
  );
}
