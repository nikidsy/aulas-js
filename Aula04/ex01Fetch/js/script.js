fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => response.json())

    .then(users => {
        const allUsers = document.getElementById('users-lista');
        users.forEach(user => {
            const oneUser = document.createElement('li');
            oneUser.textContent = user.name + ' (' + user.email + ')';
            allUsers.appendChild(oneUser);
        });
    })
.catch(error => console.log(error));