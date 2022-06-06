import { Items } from "./Items.js";
import MenuItems from "./MenuItems.js";

//function Navbar

function Navbar() {
  return (
    <nav>
      <ul className="menus">
        {Items.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
