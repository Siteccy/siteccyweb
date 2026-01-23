// js/main.js
fetch('partials/header.html')
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("#header-container").innerHTML = data;
});

fetch('partials/footer.html')
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("#footer-container").innerHTML = data;
});

fetch('partials/clients_say.html')
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("#clients-say-container").innerHTML = data;
});