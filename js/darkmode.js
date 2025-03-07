if (localStorage.getItem('darkmode') === 'sim') {
    document.getElementsByTagName("head")[0].innerHTML += `
        <link rel="stylesheet" href="../css/darkmode.css">
    `;
}