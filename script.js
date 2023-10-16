// Initialize an empty array to store user details
const users = [];

// Variable to track the index of the user being edited
let editingIndex = -1;

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

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";

    // Display all user details on the screen
    displayUserDetails();
});

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
    displayUserDetails();
}
