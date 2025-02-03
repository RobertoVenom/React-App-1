import { useState, useCallback, Component } from "react"

return Component

export default function Sidebar() {
    let [newMenuItem, setNewMenuItem] = useState(initialMenuItems)

    let [filter, setFilter] = useState("menuItem")

    let addMenuItem = useCallback((_item) => {
        console.log("Added menu item")

        setNewMenuItems([addMenuItem,...addMenuItems])
    }, [])

    const FilterOptions = {
        type: 'term'
    }


    return (
        <div>
            <input
                type="text"
                id="newMenuItemValue"
                value={newMenuItem}
                onChange={(event) => setNewMenuItem(event.target.value)}
            ></input>
            <br />
            <button
                onClick={(_addMenuItem) => {

                }}
            >
                Add Item
            </button>
            <input
                id="filter"
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Filter by..."
            ></input>
        </div>
    )
}