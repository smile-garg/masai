const deleteUser = (key) => {
    
    fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
        method: 'DELETE',
    })
    .then(response => {
       
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response;
    })
    .then(() => {
        console.log("User deleted successfully");
       
        removeUserFromTable(key); 
    })
    .catch(error => console.error("Error deleting user:", error));
};

function removeUserFromTable(key) {
    const userRow = document.querySelector(`tr[data-key="${key}"]`);
    if (userRow) {
        userRow.remove();
    }
}



function displayUsers(users) {
    userTableBody.innerHTML = "";
    for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
            const user = users[userId];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button class="delete-button" data-key="${userId}">Delete</button></td>
            `;
           
            row.setAttribute("data-key", userId);
            userTableBody.appendChild(row);
        }
    }
    
    addDeleteEventListeners();
}

function addDeleteEventListeners() {
    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", () => {
            const userId = button.dataset.key;
            deleteUser(userId);
        });
    });
}

