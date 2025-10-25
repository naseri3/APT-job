// ===============================
// 오늘 날짜 가져오기
// ===============================
const today = new Date();

// =========================
// 프리미엄 채용 공고 JSON 데이터
// =========================
const premiumJobs = [
   {
      company: '하남호반써밋에듀파크',
      title: '경기_경리(경력)',
      location: { city: '경기', district: '하남시' },
      position: '경리(회계)',
      experience: '경력 3년 이상',
      education: '학력 무관',
      salary: { amount: 2990000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=1' },
   },
   {
      company: '신평신성미소지움아파트',
      title: '시설주임 구인합니다.',
      location: { city: '충남', district: '당진시' },
      position: '시설관리',
      experience: '경력 무관',
      education: '고졸 이상',
      salary: { amount: 3300000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=2' },
   },
   {
      company: '강서동광모닝스카이',
      title: '경리과장(회계)모집',
      location: { city: '세종', district: '세종시' },
      position: '경리과장',
      experience: '경력 5년 이상',
      education: '학력 무관',
      salary: { amount: 2850000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=3' },
   },
   {
      company: '계양센트레빌2단지아파트',
      title: '전기과장(격일제)구인',
      location: { city: '인천', district: '계양구' },
      position: '전기과장',
      experience: '경력 무관',
      education: '학력 무관',
      salary: { amount: 3678000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=4' },
   },
   {
      company: '하안주공1단지',
      title: '전기팀장님을 모십니다(급구)',
      location: { city: '경기', district: '광명시' },
      position: '전기팀장',
      experience: '경력 10년 이상',
      education: '학력 무관',
      salary: { amount: 4190000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=5' },
   },
   {
      company: '양주옥정메타엑스지식산업센터',
      title: '기전대리 구인',
      location: { city: '경기', district: '양주시' },
      position: '기전대리',
      experience: '경력 무관',
      education: '고졸 이상',
      salary: { amount: 3250000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=6' },
   },
   {
      company: '가경뜨란채7단지',
      title: '경비원 채용',
      location: { city: '충북', district: '청주시' },
      position: '경비원',
      experience: '경력 무관',
      education: '학력 무관',
      salary: { amount: 2350000, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=7' },
   },
   {
      company: '힐스테이트인천시청역',
      title: '격일제 기전주임 채용(2인1조)_즉시근무가능자 우대',
      location: { city: '인천', district: '남동구' },
      position: '기전주임',
      experience: '경력 3년 이상',
      education: '학력 무관',
      salary: { amount: 3284830, currency: 'KRW', tax_included: false },
      period: '09.01 ~ 12.30',
      button: { text: '상세보기', url: 'detailPage.html?no=8' },
   },
];

// ===============================
// 날짜 지난 카드 제거 함수
// ===============================
function isExpired(periodText) {
    if (!periodText) return true;
    const today = new Date();
    const currentYear = today.getFullYear();
  
    const [start, end] = periodText.split("~").map((d) => d.trim());
    if (!end) return true;
  
    const [endMonth, endDay] = end.split(".").map(Number);
    const endDate = new Date(currentYear, endMonth - 1, endDay, 23, 59, 59);
  
    return today > endDate;
  }
  
  // =========================
  // 랜덤 N개 선택 함수
  // =========================
  function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  
  // =========================
  // 카드 렌더링 함수
  // =========================
  function renderPremiumCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
  
    const validJobs = premiumJobs.filter((job) => !isExpired(job.period));
    let jobsToShow = [];
  
    // ----------------------------
    // 데이터 개수에 따른 표시 규칙
    // ----------------------------
    if (validJobs.length === 0) {
      // 데이터 없음 → 준비중 8개
      jobsToShow = Array.from({ length: 8 }, () => ({ preparation: true }));
    } else if (validJobs.length < 4) {
      // 데이터 1~3개 → 그대로 표시 + 준비중 없이 한 줄
      jobsToShow = validJobs;
    } else if (validJobs.length === 4) {
      // 정확히 4개면 그대로 한 줄 표시
      jobsToShow = validJobs;
    } else if (validJobs.length < 8) {
      // 5~7개 → 남은 칸을 준비중으로 채움
      const missing = 8 - validJobs.length;
      jobsToShow = [...validJobs, ...Array.from({ length: missing }, () => ({ preparation: true }))];
    } else {
      // 8개 이상 → 랜덤으로 8개만 표시
      jobsToShow = getRandomItems(validJobs, 8);
    }
  
    // ----------------------------
    // 카드 생성
    // ----------------------------
    jobsToShow.forEach((job) => {
      const card = document.createElement("div");
  
      if (job.preparation) {
        card.className = "premium-card-preparation";
        card.textContent = "준비중";
      } else {
        card.className = "premium-card";
        card.innerHTML = `
          <a href="${job.button.url}" class="premium-card-link">
            <div>
              <div class="premium-card-header">${job.company}</div>
              <div class="premium-card-title">${job.title}</div>
              <div class="premium-card-info">
                <ul>
                  <li class="region">${job.location.city} &gt; ${job.location.district}</li>
                  <li class="job-type">${job.position}</li>
                  <li class="career">${job.experience} | <span class="education">${job.education}</span></li>
                  <li class="salary">월 ${job.salary.amount.toLocaleString()}원(${job.salary.tax_included ? "세후" : "세전"})</li>
                </ul>
              </div>
            </div>
            <div class="premium-card-footer">
              <button class="premium-apply-btn">${job.button.text}</button>
              <div class="premium-date">${job.period}</div>
            </div>
          </a>
        `;
      }
  
      fragment.appendChild(card);
    });
  
    container.appendChild(fragment);
  }
  
  // ===============================
  // 준비중 애니메이션
  // ===============================
  let premiumPrepInterval;
  function startPremiumPreparationAnimation() {
    if (premiumPrepInterval) clearInterval(premiumPrepInterval);
    const prepCards = document.querySelectorAll(".premium-card-preparation");
    let dots = 0;
    premiumPrepInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      prepCards.forEach(
        (card) => (card.textContent = "준비중" + ".".repeat(dots))
      );
    }, 500);
  }
  
  // =========================
  // 초기 실행 (2분마다 갱신)
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    renderPremiumCards("premium-card-container");
    startPremiumPreparationAnimation();
    setInterval(() => {
      renderPremiumCards("premium-card-container");
      startPremiumPreparationAnimation();
    }, 2 * 60 * 1000);
  });




// ===============================
// 공고 데이터 (no 삭제 버전)
// ===============================
const jobs = [
   {
      title: '경기_경리(경력)',
      region: '경기 > 하남시',
      jobType: '경리',
      salary: '월 4,686,350 (세전)',
      company: '압구정신현대',
      apartmentSize: '1,942',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=1',
   },
   {
      title: '서울_사무직',
      region: '서울 > 강남구',
      jobType: '사무직',
      company: '현대아파트',
      salary: '월 3,200,000 (세전)',
      apartmentSize: '214',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=2',
   },
   {
      title: '시설주임 구인합니다.',
      region: '충남 > 당진시',
      jobType: '시설주임',
      company: '신평신성미소지움아파트',
      salary: '월 3,400,000 (세전)',
      apartmentSize: '409',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=3',
   },
   {
      title: '경리과장(회계)모집',
      region: '세종 > 세종시',
      jobType: '경리',
      company: '강서동광모닝스카이',
      salary: '월 2,850,000 (세전)',
      apartmentSize: '734',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=4',
   },
   {
      title: '전기과장(격일제)구인',
      region: '인천 > 계양구',
      jobType: '전기과장',
      company: '계양센트레빌2단지아파트',
      salary: '월 3,678,000 (세전)',
      apartmentSize: '256',
      endDate: '2025-09-25',
      detailUrl: 'detailPage.html?no=5',
   },
   {
      title: '전기팀장님을 모십니다(급구)',
      region: '경기 > 광명시',
      jobType: '전기팀장',
      company: '하안주공1단지',
      salary: '월 4,190,000 (세전)',
      apartmentSize: '1,980',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=6',
   },
   {
      title: '기전대리 구인',
      region: '경기 > 양주시',
      jobType: '기전대리',
      company: '양주옥정메타엑스지식산업센터',
      salary: '월 3,250,000 (세전)',
      apartmentSize: '500',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=7',
   },
   {
      title: '경비원 채용',
      region: '충북 > 청주시',
      jobType: '경비원',
      company: '가경뜨란채7단지',
      salary: '월 2,350,000 (세전)',
      apartmentSize: '370',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=8',
   },
   {
      title: '격일제 기전주임 채용(2인1조)_즉시근무가능자 우대',
      region: '인천 > 남동구',
      jobType: '기전주임',
      company: '힐스테이트인천시청역',
      salary: '월 3,284,830 (세전)',
      apartmentSize: '746',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=9',
   },
   {
      title: '기전직 직원구인',
      region: '서울 > 서초구',
      jobType: '기전직',
      company: '서초진흥',
      salary: '월 3,120,000 (세전)',
      apartmentSize: '615',
      endDate: '2025-12-30',
      detailUrl: 'detailPage.html?no=10',
   },
];

// ===============================
// 테이블 데이터 생성
// ===============================
const tableBody = document.getElementById('jobTable');

// 1️⃣ 마감일 지난 공고 제거
let validJobs = jobs.filter((job) => {
   const end = new Date(job.endDate);
   end.setHours(23, 59, 59, 999);
   return today <= end;
});

// 2️⃣ 즐겨찾기 상태 가져오기 (title 기준)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 3️⃣ 데이터 출력
if (validJobs.length === 0) {
   const tr = document.createElement('tr');
   tr.innerHTML = `
    <td colspan="9" style="text-align:center; padding:20px; color:#333; font-size:16px">
      해당 공고가 없습니다.
    </td>
  `;
   tableBody.appendChild(tr);
} else {
   validJobs.forEach((job) => {
      const tr = document.createElement('tr');

      // 클릭 시 상세페이지 이동
      tr.addEventListener('click', (e) => {
         if (e.target.classList.contains('favorite-star')) return; // 별 클릭 시 이동 방지
         window.location.href = job.detailUrl;
      });

      const isFavorite = favorites.includes(job.title);

      tr.innerHTML = `
      <td class="favorite" style="text-align:center;">
        <span class="favorite-star ${
           isFavorite ? 'active' : ''
        }" title="즐겨찾기">
          ${isFavorite ? '★' : '★'}
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
        <button class="btn ${
           today > new Date(job.endDate) ? 'btn-expired' : 'btn-apply'
        }">
          ${today > new Date(job.endDate) ? '마감' : '상세보기'}
        </button>
      </td>
    `;

      tableBody.appendChild(tr);
   });

   // 4️⃣ 즐겨찾기 클릭 이벤트
   tableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('favorite-star')) {
         e.stopPropagation();
         const star = e.target;
         const row = star.closest('tr');
         const title = row.querySelector('.title').textContent;

         // 토글
         star.classList.toggle('active');
         if (star.classList.contains('active')) {
            star.textContent = '★';
            favorites.push(title);
         } else {
            star.textContent = '★';
            favorites = favorites.filter((f) => f !== title);
         }

         localStorage.setItem('favorites', JSON.stringify(favorites));
      }
   });

   // 5️⃣ "마감" 버튼 행 제거
   const rows = tableBody.querySelectorAll('tr');
   rows.forEach((row) => {
      const btn = row.querySelector('.btn-expired');
      if (btn) {
         row.remove();
      }
   });
}
