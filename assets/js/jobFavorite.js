document.addEventListener("DOMContentLoaded", () => {
  const favoriteBtn = document.querySelector(".job-action-favorite");
  const jobTitle = document.querySelector(".job-summary h3")?.textContent.trim();
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // 초기 상태 확인
  if (favorites.includes(jobTitle)) {
    favoriteBtn.classList.add("active");
  }

  // 버튼 클릭 이벤트
  favoriteBtn.addEventListener("click", () => {
    favoriteBtn.classList.toggle("active");

    if (favoriteBtn.classList.contains("active")) {
      favorites.push(jobTitle);
    } else {
      favorites = favorites.filter(f => f !== jobTitle);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
});