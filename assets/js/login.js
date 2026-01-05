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


/** 구글 로그인 API */
const GOOGLE_CLIENT_ID = "24355175704-aviumsce0orbnutandgjjsruphqca8g5.apps.googleusercontent.com";
const REDIRECT_URI = "https://aptjob.netlify.app/login.html";

const GOOGLE_AUTH_URL =
  "https://accounts.google.com/o/oauth2/v2/auth" +
  "?client_id=" + GOOGLE_CLIENT_ID +
  "&redirect_uri=" + encodeURIComponent(REDIRECT_URI) +
  "&response_type=code" +
  "&scope=openid email profile";

const googleBtn = document.querySelector(".google_login");

googleBtn.addEventListener("click", () => {
  window.location.href = GOOGLE_AUTH_URL;
});
const params = new URLSearchParams(window.location.search);
const authCode = params.get("code");

if (authCode) {
  console.log("구글 로그인 성공, code:", authCode);
  alert("구글 로그인 성공!");
}
