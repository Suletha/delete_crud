// Include the Axios library
const axios = require('axios');

// Initialize an empty array to store user details
let users = [];

// Load user details from local storage on page load
if (localStorage.getItem("userDetails")) {
    users = JSON.parse(localStorage.getItem("userDetails"));
    displayUserDetails();
}

// CrudCrud API Endpoint
const crudCrudApiUrl = 'https://crudcrud.com/api/0a36e5dd856a443c8b0d6f4028667d19'; // Replace with your actual API endpoint

// Function to handle form submission
document.getElementById("submitButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    if (editingIndex === -1) {
        // Add a new user if not in edit mode
        const user = { name, email, phone };
        users.push(user);
    } else {
        // Update user details if in edit mode
        users[editingIndex] = { name, email, phone };
        editingIndex = -1;
    }

    // Make a POST request to save the user details on crudcrud.com
    axios.post(crudCrudAphttps://crudcrud.com/api/0a36e5dd856a443c8b0d6f4028667d19iUrl, users)
        .then(response => {
            console.log('Data was successfully saved:', response.data);
            users = response.data; // Update local data with the response from the server
            localStorage.setItem("userDetails", JSON.stringify(users));
            displayUserDetails();
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";
});

// Function to delete a user by ID
function deleteUser(id) {
    // Make a DELETE request to the API to delete the user by their unique ID
    axios.delete(`${https://crudcrud.com/api/0a36e5dd856a443c8b0d6f4028667d19}/${0a36e5dd856a443c8b0d6f4028667d19}`)
        .then(response => {
            console.log('User deleted successfully:', response.data);
            
            // Remove the deleted user from the local data
            users = users.filter(user => user._id !== id);
            
            // Update local storage with the modified data
            localStorage.setItem("userDetails", JSON.stringify(users));
            
            // Display the updated user details
            displayUserDetails();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function displayUserDetails() {
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = '';

    users.forEach((user, index) => {
        const userDetailElement = document.createElement('div');
        userDetailElement.innerHTML = `
            <p>Name: ${user.name} - email: ${user.email} - phone:${user.phone} - <button onclick="editUser(${index})">Edit</button>  <button onclick="deleteUser(${index})">Delete</button></p>
            
            
           
        `;
        userDetailsDiv.appendChild(userDetailElement);
    });
}




// Rest of your code (editUser, load user data) remains the same
// Function to edit a user
function editUser(index) {
    const user = users[index];
    document.getElementById("nameInput").value = user.name;
    document.getElementById("emailInput").value = user.email;
    document.getElementById("phoneInput").value = user.phone;
    editingIndex = index;
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1);
    editingIndex = -1;
    localStorage.setItem("userDetails", JSON.stringify(users)); // Update local storage after deletion
    displayUserDetails();
}