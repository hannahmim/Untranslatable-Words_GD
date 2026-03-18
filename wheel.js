document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word-item");
    const container = document.querySelector(".wheel-container");

    /**
     * IntersectionObserver 설정
     * rootMargin: 상단 -45%, 하단 -45%를 주어 화면의 정중앙 10% 영역만 감지하도록 제한합니다.
     * 이 영역에 단어가 들어오면 'active' 클래스가 추가됩니다.
     */
    const observerOptions = {
        root: container,
        rootMargin: "-45% 0px -45% 0px", 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 중앙 영역에 들어온 단어 활성화
                entry.target.classList.add("active");
            } else {
                // 중앙 영역을 벗어난 단어 비활성화
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    // 모든 단어 아이템을 감시 대상으로 등록
    words.forEach(word => observer.observe(word));

    // 클릭 시 해당 단어로 부드럽게 이동하는 기능 (선택 사항)
    words.forEach(word => {
        word.addEventListener("click", (e) => {
            if (!word.classList.contains("active")) {
                e.preventDefault();
                word.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});