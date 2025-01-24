async function fetchUsers() {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const tbody = document.querySelector('#usertable'); 
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>
                    ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
                </td>
                <td>${user.phone}</td>
                <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
                <td>${user.company.name}</td>
            `;
            tbody.appendChild(row);
        });
    
}
fetchUsers();