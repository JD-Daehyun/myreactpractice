import MenuItem from "./menu-item";
import "./styles.css";

export default function MenuList({ list = [] }) {
  return (
    //instead of div, render ul here and li in menu item
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}