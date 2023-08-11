import React from "react";
import "./AddUser.css";


const AddUser = () => {
  function displayUsers(users) {
    userList.innerHTML = "";
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
            <strong>Имя:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Город:</strong> ${user.address.city}<br><br>
          `;
      userList.appendChild(listItem);
    });
  }

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => displayUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }

  fetchUsers();

  function searchInput(e) {
    const searchText = e.target.value;
    const displayedUsers = [];

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((user) => {
          if (user.name.toLowerCase().includes(searchText.toLowerCase())) {
            displayedUsers.push(user);
          }
        });
        displayUsers(displayedUsers);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <div className="adduser">
      <h1>Список пользователей</h1>
      <input onChange={(e)=>{searchInput(e)}}type="text" id="searchInput" placeholder="Поиск по имени" />
      <ul id="userList"></ul>
    </div>
  );
};

export default AddUser;
