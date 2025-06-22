async function fetchUserData() {
    // We'll add the rest here
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);           // fetch from the API
        const users = await response.json();            // convert response to JSON
       
        dataContainer.innerHTML = '';   // clear "Loading user data..."

        const userList = document.createElement('ul');   // create the list

        users.forEach(user => {
            const li = document.createElement('li');       // make a list item
            li.textContent = user.name;                    // set text to user's name
            userList.appendChild(li);                      // add it to the <ul>
        });

        dataContainer.appendChild(userList);             // add the whole list to the page
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);