function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = {name: name, email: email}

    return fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body:JSON.stringify(data)

    })
    .then (response => response.json())
    .then(data => {
        const id = data.id;
        console.log('New ID:', id);
        document.body.innerHTML += `<p>New ID: ${id} <p>`
    })
    .catch(error => {
        console.log('Error', error);
        document.body.innerHTML += `<p>Error: ${error.message}</p>`
    });
}