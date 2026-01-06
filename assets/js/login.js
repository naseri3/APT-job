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


/** 네이버 로그인 API */
var naver_login = new naver_login("hLO6jennO8FmeKMz2ntZ", "https://aptjob.netlify.app/login.html");
var state = naver_login.getUniqState();
naver_login.setButton("white", 2, 40);
naver_login.setDomain("https://aptjob.netlify.app");
naver_login.setState(state);
naver_login.setPopup();
naver_login.init_naver_login();
naver_login.getLoginStatus(function (status) {
    if (status) {
        console.log(naver_login.user);
    } else {
        console.log("네이버 로그인 실패");
    }
});