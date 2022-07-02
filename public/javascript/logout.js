async function logout() {
    const response = await fetch('/apiu/users/logout', {
        method: 'post',
        headers: { 'Connect-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);