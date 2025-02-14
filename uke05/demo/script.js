const heroImage = document.getElementById("char-img");
const valg = ["Bilde 1", "Bilde 2", "Bilde 3"];

const imageMap = {
    "Bilde 1": "assets/drage.jpg",
    "Bilde 2": "assets/jeger.jpg",
    "Bilde 3": "assets/monster.jpg",
};

heroImage.src = imageMap[valg[1]];
