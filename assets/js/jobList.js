// 오늘 날짜
const today = new Date();

// 기존 jobs 데이터
const jobsList = [
  {
    title: "경기_경리(경력)",
    region: "경기 > 하남시",
    jobType: "경리",
    salary: "월 4,686,350",
    company: "압구정신현대",
    apartmentSize: "1,942",
    endDate: "2025-09-01",
    detailUrl: "detailPage.html?no=1",
  },
  {
    title: "서울_사무직",
    region: "서울 > 강남구",
    jobType: "사무직",
    salary: "월 3,200,000",
    company: "현대아파트",
    apartmentSize: "214",
    endDate: "2025-09-01",
    detailUrl: "detailPage.html?no=2",
  },
  {
    title: "시설주임 구인",
    region: "충남 > 당진시",
    jobType: "시설주임",
    salary: "월 3,400,000",
    company: "신평미소지움",
    apartmentSize: "409",
    endDate: "2025-09-10",
    detailUrl: "detailPage.html?no=3",
  },
  {
    title: "경리과장 모집",
    region: "세종 > 세종시",
    jobType: "경리",
    salary: "월 2,850,000",
    company: "광모닝스카이",
    apartmentSize: "734",
    endDate: "2025-09-10",
    detailUrl: "detailPage.html?no=4",
  },
  {
    title: "전기과장 구인",
    region: "인천 > 계양구",
    jobType: "전기과장",
    salary: "월 3,678,000",
    company: "계양센트레빌2단지",
    apartmentSize: "256",
    endDate: "2025-09-25",
    detailUrl: "detailPage.html?no=5",
  },
  {
    title: "전기팀장 모집",
    region: "경기 > 광명시",
    jobType: "전기팀장",
    salary: "월 4,190,000",
    company: "하안주공1단지",
    apartmentSize: "1,980",
    endDate: "2025-09-30",
    detailUrl: "detailPage.html?no=6",
  },
  {
    title: "기전대리 채용",
    region: "경기 > 양주시",
    jobType: "기전대리",
    salary: "월 3,250,000",
    company: "양주옥정센터",
    apartmentSize: "500",
    endDate: "2025-09-30",
    detailUrl: "detailPage.html?no=7",
  },
  {
    title: "경비원 채용",
    region: "충북 > 청주시",
    jobType: "경비원",
    salary: "월 2,350,000",
    company: "가경뜨란채7단지",
    apartmentSize: "370",
    endDate: "2025-09-30",
    detailUrl: "detailPage.html?no=8",
  },
  {
    title: "격일제 기전주임 채용(2인1조)_즉시근무가능자 우대",
    region: "인천 > 남동구",
    jobType: "기전주임",
    salary: "월 3,284,830",
    company: "힐스테이트인천역",
    apartmentSize: "746",
    endDate: "2025-09-30",
    detailUrl: "detailPage.html?no=9",
  },
  {
    title: "기전직 직원",
    region: "서울 > 서초구",
    jobType: "기전직",
    salary: "월 3,120,000",
    company: "서초진흥",
    apartmentSize: "615",
    endDate: "2025-09-30",
    detailUrl: "detailPage.html?no=10",
  },
  {
    title: "시설주임 채용",
    region: "경기 > 성남시",
    jobType: "시설주임",
    salary: "월 3,500,000",
    company: "분당힐스아파트",
    apartmentSize: "520",
    endDate: "2025-10-05",
    detailUrl: "detailPage.html?no=11",
  },
  {
    title: "전기팀 모집",
    region: "경기 > 수원시",
    jobType: "전기팀장",
    salary: "월 4,000,000",
    company: "수원센트럴아파트",
    apartmentSize: "800",
    endDate: "2025-10-10",
    detailUrl: "detailPage.html?no=12",
  },
  {
    title: "사무직 직원",
    region: "서울 > 마포구",
    jobType: "사무직",
    salary: "월 3,100,000",
    company: "마포래미안",
    apartmentSize: "300",
    endDate: "2025-10-15",
    detailUrl: "detailPage.html?no=13",
  },
  {
    title: "경리 대리 모집",
    region: "부산 > 해운대구",
    jobType: "경리",
    salary: "월 2,950,000",
    company: "해운대블루아파트",
    apartmentSize: "400",
    endDate: "2025-10-20",
    detailUrl: "detailPage.html?no=14",
  },
  {
    title: "시설팀 채용",
    region: "대구 > 수성구",
    jobType: "시설주임",
    salary: "월 3,300,000",
    company: "수성그린아파트",
    apartmentSize: "620",
    endDate: "2025-10-25",
    detailUrl: "detailPage.html?no=15",
  },
  {
    title: "경비원 모집",
    region: "경기 > 고양시",
    jobType: "경비원",
    salary: "월 2,400,000",
    company: "고양센트럴",
    apartmentSize: "350",
    endDate: "2025-10-28",
    detailUrl: "detailPage.html?no=16",
  },
  {
    title: "전기과장 채용",
    region: "인천 > 부평구",
    jobType: "전기과장",
    salary: "월 3,600,000",
    company: "부평센트럴",
    apartmentSize: "400",
    endDate: "2025-11-01",
    detailUrl: "detailPage.html?no=17",
  },
  {
    title: "기전팀 모집",
    region: "경남 > 창원시",
    jobType: "기전대리",
    salary: "월 3,300,000",
    company: "창원블루아파트",
    apartmentSize: "480",
    endDate: "2025-11-05",
    detailUrl: "detailPage.html?no=18",
  },
  {
    title: "사무직 채용",
    region: "서울 > 송파구",
    jobType: "사무직",
    salary: "월 3,050,000",
    company: "송파리버뷰",
    apartmentSize: "210",
    endDate: "2025-11-10",
    detailUrl: "detailPage.html?no=19",
  },
  {
    title: "경리과장 모집",
    region: "대전 > 유성구",
    jobType: "경리",
    salary: "월 2,900,000",
    company: "유성타워아파트",
    apartmentSize: "580",
    endDate: "2025-11-15",
    detailUrl: "detailPage.html?no=20",
  },
  {
    title: "전기팀장 모집",
    region: "충북 > 청주시",
    jobType: "전기팀장",
    salary: "월 4,100,000",
    company: "청주모닝아파트",
    apartmentSize: "650",
    endDate: "2025-11-20",
    detailUrl: "detailPage.html?no=21",
  },
  {
    title: "시설주임 모집",
    region: "충남 > 천안시",
    jobType: "시설주임",
    salary: "월 3,420,000",
    company: "천안블루아파트",
    apartmentSize: "530",
    endDate: "2025-11-25",
    detailUrl: "detailPage.html?no=22",
  },
  {
    title: "경비원 채용",
    region: "경기 > 안양시",
    jobType: "경비원",
    salary: "월 2,360,000",
    company: "안양센트럴",
    apartmentSize: "420",
    endDate: "2025-11-30",
    detailUrl: "detailPage.html?no=23",
  },
  {
    title: "사무직 모집",
    region: "서울 > 강서구",
    jobType: "사무직",
    salary: "월 3,100,000",
    company: "강서그린아파트",
    apartmentSize: "310",
    endDate: "2025-12-05",
    detailUrl: "detailPage.html?no=24",
  },
  {
    title: "전기과장 모집",
    region: "경기 > 용인시",
    jobType: "전기과장",
    salary: "월 3,700,000",
    company: "용인센트럴",
    apartmentSize: "560",
    endDate: "2025-12-10",
    detailUrl: "detailPage.html?no=25",
  },
  {
    title: "기전대리 채용",
    region: "충북 > 제천시",
    jobType: "기전대리",
    salary: "월 3,280,000",
    company: "제천블루아파트",
    apartmentSize: "490",
    endDate: "2025-12-15",
    detailUrl: "detailPage.html?no=26",
  },
  {
    title: "경비원 모집",
    region: "경남 > 김해시",
    jobType: "경비원",
    salary: "월 2,380,000",
    company: "김해센트럴",
    apartmentSize: "360",
    endDate: "2025-12-20",
    detailUrl: "detailPage.html?no=27",
  },
  {
    title: "시설팀 모집",
    region: "울산 > 남구",
    jobType: "시설주임",
    salary: "월 3,410,000",
    company: "남구블루아파트",
    apartmentSize: "600",
    endDate: "2025-12-25",
    detailUrl: "detailPage.html?no=28",
  },
  {
    title: "사무직 직원 모집",
    region: "서울 > 성동구",
    jobType: "사무직",
    salary: "월 3,050,000",
    company: "성동리버뷰",
    apartmentSize: "230",
    endDate: "2025-12-30",
    detailUrl: "detailPage.html?no=29",
  },
  {
    title: "전기팀장 채용",
    region: "대구 > 달서구",
    jobType: "전기팀장",
    salary: "월 4,050,000",
    company: "달서센트럴",
    apartmentSize: "700",
    endDate: "2026-01-05",
    detailUrl: "detailPage.html?no=30",
  },
  {
    title: "경리과장 모집",
    region: "서울 > 노원구",
    jobType: "경리",
    salary: "월 2,950,000",
    company: "노원타워아파트",
    apartmentSize: "400",
    endDate: "2026-01-10",
    detailUrl: "detailPage.html?no=31",
  },
  {
    title: "전기팀 모집",
    region: "경기 > 부천시",
    jobType: "전기팀장",
    salary: "월 4,020,000",
    company: "부천센트럴",
    apartmentSize: "550",
    endDate: "2026-01-15",
    detailUrl: "detailPage.html?no=32",
  },
  {
    title: "기전직 채용",
    region: "인천 > 연수구",
    jobType: "기전직",
    salary: "월 3,300,000",
    company: "연수블루아파트",
    apartmentSize: "480",
    endDate: "2026-01-20",
    detailUrl: "detailPage.html?no=33",
  },
  {
    title: "경비원 모집",
    region: "서울 > 동대문구",
    jobType: "경비원",
    salary: "월 2,360,000",
    company: "동대문센트럴",
    apartmentSize: "340",
    endDate: "2026-01-25",
    detailUrl: "detailPage.html?no=34",
  },
  {
    title: "시설주임 채용",
    region: "경기 > 평택시",
    jobType: "시설주임",
    salary: "월 3,420,000",
    company: "평택블루아파트",
    apartmentSize: "520",
    endDate: "2026-01-30",
    detailUrl: "detailPage.html?no=35",
  },
  {
    title: "사무직 직원 모집",
    region: "서울 > 은평구",
    jobType: "사무직",
    salary: "월 3,080,000",
    company: "은평센트럴",
    apartmentSize: "250",
    endDate: "2026-02-05",
    detailUrl: "detailPage.html?no=36",
  },
  {
    title: "전기과장 채용",
    region: "부산 > 사상구",
    jobType: "전기과장",
    salary: "월 3,720,000",
    company: "사상센트럴",
    apartmentSize: "580",
    endDate: "2026-02-10",
    detailUrl: "detailPage.html?no=37",
  },
  {
    title: "기전팀 모집",
    region: "대전 > 동구",
    jobType: "기전대리",
    salary: "월 3,310,000",
    company: "동구블루아파트",
    apartmentSize: "460",
    endDate: "2026-02-15",
    detailUrl: "detailPage.html?no=38",
  },
  {
    title: "경리과장 모집",
    region: "서울 > 강북구",
    jobType: "경리",
    salary: "월 2,970,000",
    company: "강북타워아파트",
    apartmentSize: "420",
    endDate: "2026-02-20",
    detailUrl: "detailPage.html?no=39",
  },
  {
    title: "전기팀장 모집",
    region: "경기 > 의정부시",
    jobType: "전기팀장",
    salary: "월 4,080,000",
    company: "의정부센트럴",
    apartmentSize: "610",
    endDate: "2026-02-25",
    detailUrl: "detailPage.html?no=40",
  },
  {
    title: "시설주임 채용",
    region: "인천 > 서구",
    jobType: "시설주임",
    salary: "월 3,430,000",
    company: "서구블루아파트",
    apartmentSize: "540",
    endDate: "2026-03-01",
    detailUrl: "detailPage.html?no=41",
  },
  {
    title: "경비원 모집",
    region: "충남 > 아산시",
    jobType: "경비원",
    salary: "월 2,380,000",
    company: "아산센트럴",
    apartmentSize: "370",
    endDate: "2026-03-05",
    detailUrl: "detailPage.html?no=42",
  },
  {
    title: "사무직 직원 모집",
    region: "서울 > 용산구",
    jobType: "사무직",
    salary: "월 3,120,000",
    company: "용산그린아파트",
    apartmentSize: "260",
    endDate: "2026-03-10",
    detailUrl: "detailPage.html?no=43",
  },
  {
    title: "전기과장 모집",
    region: "경북 > 구미시",
    jobType: "전기과장",
    salary: "월 3,740,000",
    company: "구미센트럴",
    apartmentSize: "590",
    endDate: "2026-03-15",
    detailUrl: "detailPage.html?no=44",
  },
  {
    title: "기전대리 채용",
    region: "경남 > 진주시",
    jobType: "기전대리",
    salary: "월 3,320,000",
    company: "진주블루아파트",
    apartmentSize: "470",
    endDate: "2026-03-20",
    detailUrl: "detailPage.html?no=45",
  },
  {
    title: "시설팀 모집",
    region: "울산 > 북구",
    jobType: "시설주임",
    salary: "월 3,440,000",
    company: "북구블루아파트",
    apartmentSize: "560",
    endDate: "2026-03-25",
    detailUrl: "detailPage.html?no=46",
  },
  {
    title: "경비원 채용",
    region: "경기 > 김포시",
    jobType: "경비원",
    salary: "월 2,390,000",
    company: "김포센트럴",
    apartmentSize: "380",
    endDate: "2026-03-30",
    detailUrl: "detailPage.html?no=47",
  },
  {
    title: "사무직 모집",
    region: "서울 > 중랑구",
    jobType: "사무직",
    salary: "월 3,140,000",
    company: "중랑그린아파트",
    apartmentSize: "270",
    endDate: "2026-04-05",
    detailUrl: "detailPage.html?no=48",
  },
  {
    title: "전기팀장 채용",
    region: "경기 > 시흥시",
    jobType: "전기팀장",
    salary: "월 4,090,000",
    company: "시흥센트럴",
    apartmentSize: "630",
    endDate: "2026-04-10",
    detailUrl: "detailPage.html?no=49",
  },
  {
    title: "기전직 직원",
    region: "서울 > 강동구",
    jobType: "기전직",
    salary: "월 3,330,000",
    company: "강동타워아파트",
    apartmentSize: "500",
    endDate: "2026-04-15",
    detailUrl: "detailPage.html?no=50",
  },
];

// 요소 선택
const tableBody = document.getElementById("jobTableBody");
const pagination = document.querySelector(".pagination");
const pageSizeSelect = document.getElementById("pageSize");
const statusRadios = document.querySelectorAll('input[name="status"]');

// 설정
let pageSize = pageSizeSelect ? parseInt(pageSizeSelect.value) : 10;
let currentPage = 1;
let currentStatus = "전체"; // 초기값
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ===================================
// 필터 적용 함수 (3개월 노출 제한 포함)
// ===================================
function getFilteredJobs() {
  return jobsList.filter(job => {
    if (!job.endDate) return true;

    const end = new Date(job.endDate);
    end.setHours(23, 59, 59, 999);
    const expired = today > end;

    // 🔹 마감된 공고라도 마감일 + 3개월 이내면 유지
    const visibleUntil = new Date(end);
    visibleUntil.setMonth(end.getMonth() + 3);

    const isVisible = today <= visibleUntil;

    // 상태별 필터
    if (!isVisible) return false;
    if (currentStatus === "채용중") return !expired;
    if (currentStatus === "마감") return expired;
    return true;
  });
}

// ===================================
// 렌더링 함수
// ===================================
function renderJobs() {
  tableBody.innerHTML = "";

  const filtered = getFilteredJobs();

  // ✅ 정렬 제거 → JSON 순서 그대로 유지
  const pageData = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (filtered.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="9" style="text-align:center; padding:20px; color:#333; font-size:16px">
        해당 공고가 없습니다.
      </td>
    `;
    tableBody.appendChild(tr);
    pagination.innerHTML = "";
    return;
  }

  pageData.forEach((job) => {
    const end = new Date(job.endDate);
    end.setHours(23, 59, 59, 999);
    const expired = today > end;
    const isFavorite = favorites.includes(job.title);

    const tr = document.createElement("tr");

    // 🔹 마감된 공고도 클릭 가능
    tr.addEventListener("click", (e) => {
      if (e.target.classList.contains("favorite-star")) return;
      window.location.href = job.detailUrl;
    });

    // 🔹 날짜 색상 유지
    const endDateHtml = expired
      ? `<span style="color:#999;">${job.endDate}</span>`
      : `<span style="color:red; font-weight:bold;">${job.endDate}</span>`;

    // 🔹 마감 여부에 따라 버튼만 다르게 표시
    const buttonHtml = expired
      ? `<button class="btn btn-expired">마감</button>`
      : `<button class="btn btn-apply">상세보기</button>`;

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
      <td>${endDateHtml}</td>
      <td>${buttonHtml}</td>
    `;

    // 버튼 클릭 시 tr 이벤트 막기 + 이동
    const button = tr.querySelector("button");
    if (button) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = job.detailUrl;
      });
    }

    // 즐겨찾기 클릭
    const star = tr.querySelector(".favorite-star");
    star.addEventListener("click", (e) => {
      e.stopPropagation();
      star.classList.toggle("active");

      if (star.classList.contains("active")) {
        star.textContent = "★";
        favorites.push(job.title);
      } else {
        star.textContent = "★";
        favorites = favorites.filter(f => f !== job.title);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    tableBody.appendChild(tr);
  });

  renderPagination(filtered.length);
}

// ===================================
// 페이지네이션 렌더링
// ===================================
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / pageSize);
  pagination.innerHTML = "";

  const prev = document.createElement("li");
  prev.classList.add("page-item");
  if (currentPage === 1) prev.classList.add("disabled");
  prev.innerHTML = `<a class="page-link" href="#" aria-label="Previous">&laquo;</a>`;
  prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderJobs();
    }
  });
  pagination.appendChild(prev);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    if (i === currentPage) li.classList.add("active");
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderJobs();
    });
    pagination.appendChild(li);
  }

  const next = document.createElement("li");
  next.classList.add("page-item");
  if (currentPage === totalPages) next.classList.add("disabled");
  next.innerHTML = `<a class="page-link" href="#" aria-label="Next">&raquo;</a>`;
  next.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderJobs();
    }
  });
  pagination.appendChild(next);
}

// ===================================
// 상태 라디오 변경 이벤트
// ===================================
statusRadios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    currentStatus = e.target.value;
    currentPage = 1;
    renderJobs();
  });
});

// ===================================
// 페이지 크기 변경
// ===================================
if (pageSizeSelect) {
  pageSizeSelect.addEventListener("change", (e) => {
    pageSize = parseInt(e.target.value);
    currentPage = 1;
    renderJobs();
  });
}

// 초기 렌더링
renderJobs();