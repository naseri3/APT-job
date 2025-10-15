// =========================
// 전역 변수
// =========================
let selectedRegions = [];
let selectedJobs = [];

// =========================
// DOMContentLoaded 이벤트로 초기화
// =========================
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 지역 "전국" 디폴트 선택
  // =========================
  const allRegionBtn = document.querySelector('.region-options .btn[data-district="all"]');
  if (allRegionBtn) {
    allRegionBtn.classList.add("active"); // 버튼 시각적 강조
    selectedRegions = ["전국"];           // 선택 배열 초기값
  }

  // 선택 박스 초기 업데이트
  updateSelectedBox();

  // =========================
  // 지역 버튼 이벤트
  // =========================
  const regionButtons = document.querySelectorAll(".region-options .btn");
  const allDistricts = document.querySelectorAll(".district-options .district");
  const districtContainer = document.querySelector(".district-options");
  const selectedBox = document.querySelector(".selected-box");

  regionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetDistrict = button.dataset.district;

      // 다른 지역 버튼 active 해제
      regionButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      if (targetDistrict === "all") {
        allDistricts.forEach((d) => (d.style.display = "none"));
        districtContainer.style.display = "none";
        selectedRegions = ["전국"];
        updateSelectedBox();
        return;
      }

      selectedRegions = selectedRegions.filter((r) => r !== "전국");
      allDistricts.forEach((d) => (d.style.display = "none"));
      districtContainer.style.display = "grid";

      const activeDistrict = document.querySelector(`.district.${targetDistrict}`);
      if (activeDistrict) activeDistrict.style.display = "grid";

      const allDistrictButtons = document.querySelectorAll(`.district.${targetDistrict} button`);
      allDistrictButtons.forEach((btn) => {
        btn.onclick = () => {
          const regionName = `${button.textContent} > ${btn.textContent}`;
          const defaultBtn = document.querySelector(`.district.${targetDistrict} button[data-district="${targetDistrict}-all"]`);

          if (defaultBtn && btn !== defaultBtn) {
            defaultBtn.classList.remove("active");
            const defaultRegionName = `${button.textContent} > ${defaultBtn.textContent}`;
            selectedRegions = selectedRegions.filter((r) => r !== defaultRegionName);
          }

          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            selectedRegions = selectedRegions.filter((r) => r !== regionName);
          } else {
            if (selectedRegions.length < 8) {
              btn.classList.add("active");
              selectedRegions.push(regionName);
            } else {
              alert("총 8개까지만 선택 가능합니다.");
            }
          }

          updateSelectedBox();
          button.classList.add("active"); // 상위 지역 focus 유지
        };
      });

      // "○○ 전체" 버튼 디폴트 선택
      const defaultBtn = document.querySelector(`.district.${targetDistrict} button[data-district="${targetDistrict}-all"]`);
      if (defaultBtn) {
        defaultBtn.classList.add("active");
        const regionName = `${button.textContent} > ${defaultBtn.textContent}`;
        if (!selectedRegions.includes(regionName)) selectedRegions.push(regionName);
        updateSelectedBox();
      }
    });
  });

  // =========================
  // 직무 버튼 이벤트 (최대 3개)
  // =========================
  const occupationBtns = document.querySelectorAll(".occupation-options .btn");
  const MAX_SELECTION = 3;

  occupationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const jobName = btn.textContent;

      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        selectedJobs = selectedJobs.filter((j) => j !== jobName);
      } else {
        if (selectedJobs.length < MAX_SELECTION) {
          btn.classList.add("active");
          selectedJobs.push(jobName);
        } else {
          btn.classList.remove("active");
          btn.blur();
          alert(`직무는 최대 ${MAX_SELECTION}개까지만 선택 가능합니다.`);
        }
      }

      updateSelectedBox();
    });
  });

  // =========================
  // 경력 input 활성/비활성
  // =========================
  const careerRadios = document.querySelectorAll('input[name="career"]');
  const yearInput = document.getElementById("year");
  yearInput.disabled = true;

  careerRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "경력" && radio.checked) {
        yearInput.disabled = false;
        yearInput.focus();
      } else {
        yearInput.disabled = true;
        yearInput.value = "";
      }
    });
  });

  // =========================
  // 검색 버튼 / 초기화 버튼 이벤트
  // =========================
  document.getElementById("searchBtn").addEventListener("click", updateSelectedBox);
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("amount").value = "";
    yearInput.value = "";
    careerRadios.forEach((r) => (r.checked = false));
    document.querySelectorAll('input[name="status"]').forEach((r) => (r.checked = r.value === "전체"));
    selectedRegions = [];
    selectedJobs = [];
    document.querySelectorAll(".region-options .btn").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".district-options button").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".occupation-options .btn").forEach((btn) => btn.classList.remove("active"));
    yearInput.disabled = true;
    updateSelectedBox();
  });
});

// =========================
// Enter 입력 시 검색 실행
// =========================
const searchInputs = document.querySelectorAll(
  '#amount, #year, input[name="career"], input[name="status"]'
);

searchInputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 방지
      updateSelectedBox();

      // 필요하면 실제 검색 엔진 등록 함수 호출
      // searchJobs(); 
    }
  });
});


// =========================
// 선택 박스 업데이트
// =========================
function updateSelectedBox() {
  const selectedBox = document.querySelector(".selected-box");
  selectedBox.innerHTML = "";

  let hasValue = selectedRegions.length > 0 || selectedJobs.length > 0;

  const amountInput = document.getElementById("amount");
  if (amountInput && amountInput.value.trim() !== "") hasValue = true;

  const careerRadios = document.querySelectorAll('input[name="career"]');
  const yearInput = document.getElementById("year");
  let careerValue = "";
  careerRadios.forEach((radio) => {
    if (radio.checked) {
      careerValue = radio.value;
      if (radio.value === "경력") {
        const years = yearInput && yearInput.value.trim() !== "" ? yearInput.value : "1";
        careerValue += " " + years + "년 이상";
      }
    }
  });
  if (careerValue !== "") hasValue = true;

  const statusRadios = document.querySelectorAll('input[name="status"]');
  let statusValue = "";
  statusRadios.forEach((radio) => {
    if (radio.checked) statusValue = radio.value;
  });
  if (statusValue && statusValue !== "전체") hasValue = true;

  if (!hasValue) {
    selectedBox.innerHTML = `
      <p class="condition-guide">
        <img src="./assets/img/Vector.png" alt=""> 검색 조건을 설정해주세요.
      </p>`;
    return;
  }

  // --- 지역 표시 ---
  if (selectedRegions.length > 0) {
    const div = document.createElement("div");
    div.className = "selected-line";
    const label = document.createElement("strong");
    label.textContent = "지역 :";
    div.appendChild(label);

    selectedRegions.forEach((region) => {
      const span = document.createElement("span");
      span.textContent = region;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => {
        selectedRegions = selectedRegions.filter((r) => r !== region);
        document.querySelectorAll(".district-options button, .region-options .btn").forEach((btn) => {
          if (`${btn.closest(".district")?.previousElementSibling?.textContent || btn.textContent} > ${btn.textContent}` === region || btn.textContent === region) {
            btn.classList.remove("active");
          }
        });
        updateSelectedBox();
      };

      span.appendChild(removeBtn);
      div.appendChild(span);
    });

    selectedBox.appendChild(div);
  }

  // --- 직무 표시 ---
  if (selectedJobs.length > 0) {
    const div = document.createElement("div");
    div.className = "selected-line";
    const label = document.createElement("strong");
    label.textContent = "직무 :";
    div.appendChild(label);

    selectedJobs.forEach((job) => {
      const span = document.createElement("span");
      span.textContent = job;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => {
        selectedJobs = selectedJobs.filter((j) => j !== job);
        document.querySelectorAll(".occupation-options .btn").forEach((btn) => {
          if (btn.textContent === job) btn.classList.remove("active");
        });
        updateSelectedBox();
      };

      span.appendChild(removeBtn);
      div.appendChild(span);
    });

    selectedBox.appendChild(div);
  }

  // --- 급여 표시 ---
  if (amountInput && amountInput.value.trim() !== "") {
    const div = document.createElement("div");
    div.className = "selected-line";
    const label = document.createElement("strong");
    label.textContent = "급여 :";
    div.appendChild(label);

    const span = document.createElement("span");
    span.textContent = amountInput.value + "만원 이상";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => {
      amountInput.value = "";
      updateSelectedBox();
    };

    span.appendChild(removeBtn);
    div.appendChild(span);
    selectedBox.appendChild(div);
  }

  // --- 경력 표시 ---
  if (careerValue !== "") {
    const div = document.createElement("div");
    div.className = "selected-line";
    const label = document.createElement("strong");
    label.textContent = "경력 :";
    div.appendChild(label);

    const span = document.createElement("span");
    span.textContent = careerValue;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => {
      yearInput.value = "";
      yearInput.disabled = true;
      careerRadios.forEach((r) => (r.checked = false));
      updateSelectedBox();
    };

    span.appendChild(removeBtn);
    div.appendChild(span);
    selectedBox.appendChild(div);
  }
}
