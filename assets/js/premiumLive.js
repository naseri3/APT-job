// ===============================
// 오늘 날짜 가져오기
// ===============================
const today = new Date();

// ===============================
// premium-card 영역 날짜 지난 카드 제거
// ===============================
const cards = document.querySelectorAll('.premium-card');

cards.forEach(card => {
  const dateDiv = card.querySelector('.premium-date');
  if (!dateDiv) return;

  // "09.01 ~ 09.30" 형태
  const dateText = dateDiv.textContent.trim();
  const [start, end] = dateText.split('~').map(d => d.trim());

  // 연도 붙이기 (현재 연도 기준)
  const currentYear = new Date().getFullYear();
  const endDateParts = end.split('.');
  const endDate = new Date(currentYear, parseInt(endDateParts[0]) - 1, parseInt(endDateParts[1]));

  // 종료일 지났으면 카드 제거
  if (today > endDate) {
    card.remove();
  }
});

// ===============================
// 공고 데이터 (no 삭제 버전)
// ===============================
const jobs = [
  {
    title: "경기_경리(경력)",
    region: "경기 > 하남시",
    jobType: "경리",
    salary: "월 4,686,350 (세전)",
    company: "압구정신현대",
    apartmentSize: "1,942",
    endDate: "2025-12-30",
    detailUrl: "detail1.html",
  },
  {
    title: "서울_사무직",
    region: "서울 > 강남구",
    jobType: "사무직",
    company: "현대아파트",
    salary: "월 3,200,000 (세전)",
    apartmentSize: "214",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "시설주임 구인합니다.",
    region: "충남 > 당진시",
    jobType: "시설주임",
    company: "신평신성미소지움아파트",
    salary: "월 3,400,000 (세전)",
    apartmentSize: "409",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "경리과장(회계)모집",
    region: "세종 > 세종시",
    jobType: "경리",
    company: "강서동광모닝스카이",
    salary: "월 2,850,000 (세전)",
    apartmentSize: "734",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "전기과장(격일제)구인",
    region: "인천 > 계양구",
    jobType: "전기과장",
    company: "계양센트레빌2단지아파트",
    salary: "월 3,678,000 (세전)",
    apartmentSize: "256",
    endDate: "2025-09-25",
    detailUrl: "detail2.html",
  },
  {
    title: "전기팀장님을 모십니다(급구)",
    region: "경기 > 광명시",
    jobType: "전기팀장",
    company: "하안주공1단지",
    salary: "월 4,190,000 (세전)",
    apartmentSize: "1,980",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "기전대리 구인",
    region: "경기 > 양주시",
    jobType: "기전대리",
    company: "양주옥정메타엑스지식산업센터",
    salary: "월 3,250,000 (세전)",
    apartmentSize: "500",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "경비원 채용",
    region: "충북 > 청주시",
    jobType: "경비원",
    company: "가경뜨란채7단지",
    salary: "월 2,350,000 (세전)",
    apartmentSize: "370",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "격일제 기전주임 채용(2인1조)_즉시근무가능자 우대",
    region: "인천 > 남동구",
    jobType: "기전주임",
    company: "힐스테이트인천시청역",
    salary: "월 3,284,830 (세전)",
    apartmentSize: "746",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  },
  {
    title: "기전직 직원구인",
    region: "서울 > 서초구",
    jobType: "기전직",
    company: "서초진흥",
    salary: "월 3,120,000 (세전)",
    apartmentSize: "615",
    endDate: "2025-12-30",
    detailUrl: "detail2.html",
  }
];

// ===============================
// 테이블 데이터 생성
// ===============================
const tableBody = document.getElementById("jobTable");

// 1️⃣ 마감일 지난 공고 제거
let validJobs = jobs.filter(job => {
  const end = new Date(job.endDate);
  end.setHours(23, 59, 59, 999);
  return today <= end;
});

// 2️⃣ 즐겨찾기 상태 가져오기 (title 기준)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// 3️⃣ 데이터 출력
if (validJobs.length === 0) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td colspan="9" style="text-align:center; padding:20px; color:#333; font-size:16px">
      해당 공고가 없습니다.
    </td>
  `;
  tableBody.appendChild(tr);
} else {
  validJobs.forEach((job) => {
    const tr = document.createElement("tr");

    // 클릭 시 상세페이지 이동
    tr.addEventListener("click", (e) => {
      if (e.target.classList.contains("favorite-star")) return; // 별 클릭 시 이동 방지
      window.location.href = job.detailUrl;
    });

    const isFavorite = favorites.includes(job.title);

    tr.innerHTML = `
      <td class="favorite" style="text-align:center;">
        <span class="favorite-star ${isFavorite ? "active" : ""}" title="즐겨찾기">
          ${isFavorite ? "★" : "★"}
        </span>
      </td>
      <td class="title">${job.title}</td>
      <td>${job.region}</td>
      <td>${job.jobType}</td>
      <td>${job.salary}</td>
      <td class="company">${job.company}</td>
      <td>${job.apartmentSize}</td>
      <td class="end-date">${job.endDate}</td>
      <td>
        <button class="btn ${today > new Date(job.endDate) ? "btn-expired" : "btn-apply"}">
          ${today > new Date(job.endDate) ? "마감" : "상세보기"}
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  // 4️⃣ 즐겨찾기 클릭 이벤트
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("favorite-star")) {
      e.stopPropagation();
      const star = e.target;
      const row = star.closest("tr");
      const title = row.querySelector(".title").textContent;

      // 토글
      star.classList.toggle("active");
      if (star.classList.contains("active")) {
        star.textContent = "★";
        favorites.push(title);
      } else {
        star.textContent = "★";
        favorites = favorites.filter(f => f !== title);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });

  // 5️⃣ "마감" 버튼 행 제거
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach(row => {
    const btn = row.querySelector(".btn-expired");
    if (btn) {
      row.remove();
    }
  });
}
