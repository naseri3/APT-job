// 로그인 상태 확인 및 UI 갱신
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const loginBtn = document.querySelector(".userNav-item.login");
  const joinBtn = document.querySelector(".userNav-item.join");
  const logoutBtn = document.querySelector(".userNav-item.logout");
  const myPageBtn = document.querySelector(".userNav-item.mypage");
  const corpBtn = document.querySelector(".userNav-item.corp");

  if (isLoggedIn) {
    // ✅ 로그인 상태 → 로그아웃, 마이페이지, 관리소서비스 표시
    loginBtn.style.display = "none";
    joinBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    myPageBtn.style.display = "inline-block";
    corpBtn.style.display = "inline-block";
  } else {
    // ✅ 로그아웃 상태 → 로그인, 회원가입, 마이페이지, 관리소서비스 표시
    loginBtn.style.display = "inline-block";
    joinBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    myPageBtn.style.display = "inline-block";
    corpBtn.style.display = "inline-block";
  }
}

// DOM 로드 후 이벤트 등록
document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();

  // 로그인 버튼 클릭 시
  document.querySelector(".userNav-item.login").addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true");
    checkLoginStatus();
  });

  // 로그아웃 버튼 클릭 시
  document.querySelector(".userNav-item.logout").addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    checkLoginStatus();
  });
});
