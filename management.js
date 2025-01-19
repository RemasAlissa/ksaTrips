function loadUserData() {
    const users = JSON.parse(localStorage.getItem('clients')) || [];
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = ''; 

    if (users.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8">No registrations found.</td></tr>';
        return;
    }

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.tripDate }</td>
            <td>${user.city}</td>
            <td>${user.numberOfPeople }</td>
            <td>${user.budgetLevel }</td>
            <td>${user.cost } SAR</td>
        `;
        tableBody.appendChild(row);
    });
}

function filterTable() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('userTableBody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        for (let j = 1; j < cells.length; j++) { 
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                found = true;
                break;
            }
        }
        rows[i].style.display = found ? '' : 'none';
    }
}

function deleteClient() {
    let id = parseInt(document.getElementById('ID').value) - 1; // Convert to zero-based index
    let users = JSON.parse(localStorage.getItem('clients')) || [];
    
    if (id >= 0 && id < users.length) {
        users.splice(id, 1); // Remove the user at the given index
        localStorage.setItem('clients', JSON.stringify(users)); // Update local storage
        loadUserData(); // Reload the user data in the table
        alert('User deleted successfully!');
    } else {
        alert('Invalid ID!');
    }

    document.getElementById('ID').value = ''; // Clear the input field
}

window.onload = loadUserData;