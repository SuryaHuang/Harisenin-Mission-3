const arrowleft1 = document.querySelectorAll(".arrow1"); // tombol kiri
const arrowleft2 = document.querySelectorAll(".arrow3"); // tombol kiri (Potrait)
const arrowright1 = document.querySelectorAll(".arrow2"); // tombol kanan
const arrowright2 = document.querySelectorAll(".arrow4"); // tombol kanan (Potrait)
const movieLists = document.querySelectorAll(".movie-list");

const step = 315;
const animationDuration = 800; // milidetik, cocok dengan transition CSS

let isAnimating = [];

movieLists.forEach((list, i) => {
  isAnimating[i] = false; // inisialisasi flag
});

arrowright1.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    if (isAnimating[i]) return; // jangan eksekusi kalau animasi masih jalan

    const movieList = movieLists[i];
    const itemCount = movieList.querySelectorAll("img").length;
    const visibleCount = Math.floor(window.innerWidth / step);
    const maxTranslate = (itemCount - visibleCount) * step;

    const currentX =
      new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;

    if (Math.abs(currentX) < maxTranslate) {
      isAnimating[i] = true;
      movieList.style.transform = `translateX(${currentX - step}px)`;

      setTimeout(() => {
        isAnimating[i] = false;
      }, animationDuration);
    }
  });
});

arrowleft1.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    if (isAnimating[i]) return;

    const movieList = movieLists[i];
    const currentX =
      new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;

    if (currentX < 0) {
      isAnimating[i] = true;
      movieList.style.transform = `translateX(${currentX + step}px)`;

      setTimeout(() => {
        isAnimating[i] = false;
      }, animationDuration);
    }
  });
});

const step2 = 225;
const animationDuration2 = 800; // milidetik, cocok dengan transition CSS

let isAnimating2 = [];

movieLists.forEach((list, i) => {
  isAnimating2[i] = false; // inisialisasi flag
});

arrowright2.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    if (isAnimating2[i]) return; // jangan eksekusi kalau animasi masih jalan

    const movieList = movieLists[i + 1];
    const itemCount = movieList.querySelectorAll("img").length;
    const visibleCount = Math.floor(window.innerWidth / step2);
    const maxTranslate = (itemCount - visibleCount) * step2;

    const currentX =
      new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;

    if (Math.abs(currentX) < maxTranslate) {
      isAnimating2[i] = true;
      movieList.style.transform = `translateX(${currentX - step2}px)`;

      setTimeout(() => {
        isAnimating2[i] = false;
      }, animationDuration2);
    }
  });
});

arrowleft2.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    if (isAnimating2[i]) return;

    const movieList = movieLists[i + 1];
    const currentX =
      new DOMMatrixReadOnly(getComputedStyle(movieList).transform).m41 || 0;

    if (currentX < 0) {
      isAnimating2[i] = true;
      movieList.style.transform = `translateX(${currentX + step2}px)`;

      setTimeout(() => {
        isAnimating2[i] = false;
      }, animationDuration2);
    }
  });
});

// White-Mode-Theme
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.profile-text,.profile-text-container,.navbar,.menu-list-item,.drop-icon,.movie-list-item-title,.movie-list-item-description,.footer-content,.footer,.toggle,.toggle-ball"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
