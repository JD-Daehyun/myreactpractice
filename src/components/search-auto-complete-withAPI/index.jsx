import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import "./styles.css";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        //to simplify, only retrieve first name from data.users
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);
  if (loading) {
    return <h1>Loading...Please Wait!</h1>;
  }
  if (error) {
    return <h1>Error...{`${error}`}</h1>;
  }
  return (
    <div className="search-autocomplete-container">
      <input
        name="search-users"
        placeholder="Search users here"
        value={searchParam}
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}
