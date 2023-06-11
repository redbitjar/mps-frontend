import MenuItems from "./MenuItems";
import { menuItems } from "./data/menuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      {/* <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
};

export default Navbar;
