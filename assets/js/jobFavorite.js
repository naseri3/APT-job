document.addEventListener("DOMContentLoaded", () => {
  const favoriteBtns = document.querySelectorAll(".job-action-favorite");
  const printBtns = document.querySelectorAll(".job-action-print");
  const jobTitle = document.querySelector(".job-summary h3")?.textContent.trim();
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // -----------------------------
  // ① 즐겨찾기 초기 상태 반영
  // -----------------------------
  favoriteBtns.forEach(btn => {
    if (favorites.includes(jobTitle)) {
      btn.classList.add("active");
    }

    // 클릭 이벤트
    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle("active");

      if (isActive) {
        favorites.push(jobTitle);
      } else {
        favorites = favorites.filter(f => f !== jobTitle);
      }

      // 상·하단 버튼 동기화
      favoriteBtns.forEach(b => b.classList.toggle("active", isActive));
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });

  // -----------------------------
  // ② 인쇄하기 버튼 기능
  // -----------------------------
  printBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // 인쇄 전에 필요한 알림을 띄울 수도 있음
      // alert("현재 페이지를 인쇄합니다.");
      window.print();
    });
  });
});

// ===============================
// 목록보기 버튼 → 이전 페이지로 이동
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const listButtons = document.querySelectorAll(".job-action-list"); // ✅ 모든 목록보기 버튼 선택
  listButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.referrer) {
        history.back();
      } else {
        window.location.href = "/recruit_search.html"; // 기본 fallback 페이지
      }
    });
  });
});
