
const userListDiv = document.getElementById('user-list');
const paginationButtonsDiv = document.getElementById('pagination-buttons');
const errorMessageDiv = document.getElementById('error-message');

const usersPerPage = 6;
let currentPage = 1;
let totalUsers = 0;


async function fetchUsers(page) {
    try {
        errorMessageDiv.textContent = ''; 
        const apiUrl = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${usersPerPage}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        const totalCountHeader = response.headers.get('X-Total-Count');
        totalUsers = totalCountHeader ? parseInt(totalCountHeader) : 0;
        currentPage = page;
        displayUsers(users);
        renderPaginationButtons();

    } catch (error) {
        console.error('Error fetching users:', error);
        errorMessageDiv.textContent = 'Failed to fetch user data. Please try again later.';
        userListDiv.innerHTML = ''; 
        paginationButtonsDiv.innerHTML = ''; 
    }
}


function displayUsers(users) {
    userListDiv.innerHTML = ''; 
    if (users.length === 0) {
        userListDiv.textContent = 'No users found on this page.';
        return;
    }
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
        `;
        userListDiv.appendChild(userCard);
    });
}


function renderPaginationButtons() {
    paginationButtonsDiv.innerHTML = ''; 
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            fetchUsers(i);
        });
        if (i === currentPage) {
            button.classList.add('active');
        }
        paginationButtonsDiv.appendChild(button);
    }
}


fetchUsers(currentPage);
