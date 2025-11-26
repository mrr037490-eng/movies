// بيانات تجريبية لأفلام مشابهة
const similarMovies = [
    { title: "فيلم أكشن 2", image: "https://via.placeholder.com/200x300?text=فيلم+2" },
    { title: "فيلم مغامرة", image: "https://via.placeholder.com/200x300?text=فيلم+3" },
    { title: "فيلم تشويق", image: "https://via.placeholder.com/200x300?text=فيلم+4" }
];

// عرض الأفلام المشابهة
const similarGrid = document.getElementById("similar-grid");

similarMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    similarGrid.appendChild(card);
});

// وظيفة تشغيل الفيلم
function playMovie(version) {
    alert(`تشغيل الفيلم: ${version}`);
    // لاحقًا يمكن استبدال هذا alert بمشغل فيديو حقيقي
}
