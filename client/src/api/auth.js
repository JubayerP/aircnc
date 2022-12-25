export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }
    // Save user in db and get token
    fetch(`http://localhost:8000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json()).then(data => {
        // Save token in localStorage
        localStorage.setItem('aircnc-token', data.token)
    })
}