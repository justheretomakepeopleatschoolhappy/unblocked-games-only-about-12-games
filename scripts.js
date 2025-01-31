function searchGames() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const gameLinks = document.querySelectorAll("#games-list li");

    gameLinks.forEach((gameLink) => {
        const gameName = gameLink.textContent.toLowerCase();
        if (gameName.includes(searchQuery)) {
            gameLink.style.display = "block";
        } else {
            gameLink.style.display = "none";
        }
    });
}
