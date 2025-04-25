function searchAndScroll() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    const divs = document.getElementsByClassName('custom-block bg-white shadow-lg');
    let found = false;

    for (let div of divs) {
        const divName = div.getAttribute('data-name');
        if (divName === searchTerm) {
            div.scrollIntoView({ behavior: 'smooth' });
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`No div found with name "${searchTerm}"`);
    }
}

// Add enter key support
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchAndScroll();
    }
});