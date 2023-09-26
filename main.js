// Initialize an empty array to store user details
const users = [];

// Function to handle form submission
document.getElementById("submitButton").addEventListener("click", function () {
    // Get user details from input fields
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        phone: phone,
    };

    // Add the user object to the array
    users.push(user);

    // Create del button element
   var deleteBtn = document.createElement('button');

// Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm';

// Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
    li.appendChild(deleteBtn);

// Append li to list
   itemList.appendChild(li);

    // Display all user details on the screen
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = '';

    users.forEach((user, index) => {
        userDetailsDiv.innerHTML += `
            
            <p>${user.name} - ${user.email} - ${user.phone} </p>

            
            
            

    
            
        `;
    });
});

function deleteUser(index) {
    users.splice(index, 1);
    // Re-display user details after deletion
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = '';

    users.forEach((user, newIndex) => {
        const userDetailElement = document.createElement('div');
        userDetailElement.innerHTML = `
            <h2>User ${newIndex + 1} Details:</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <button onclick="deleteUser(${newIndex})">Delete</button>
        `;
        userDetailsDiv.appendChild(userDetailElement);
    });
}
