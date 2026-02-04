function Sidebar({ initialMenuItems }) {
  const [menuItems, setMenuItems] = React.useState(initialMenuItems);
  const [newItem, setNewItem] = React.useState("");
  const [filterText, setFilterText] = React.useState("");

  const addMenuItem = () => {
    if (newItem.trim() === "") return;
    setMenuItems([...menuItems, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <input
        placeholder="Filter menu"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <input
        placeholder="Add menu item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addMenuItem}>Add</button>

      <ul>
        {menuItems
          .filter((item) => new RegExp(filterText, "i").test(item))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

