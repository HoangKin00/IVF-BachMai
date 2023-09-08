const menuItem = document.querySelectorAll(".header_ivf_1_0_0__item");
// console.log(menuItem);
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("open");
    });
    item.classList.add("open");
  });
});

const menuItemDrop = document.querySelectorAll(
  ".header_ivf_1_0_0__dropItemTitle"
);
// console.log(menuItem);
menuItemDrop.forEach((item) => {
  item.addEventListener("click", () => {
    menuItemDrop.forEach((item) => {
      item.classList.remove("drop");
    });
    item.classList.add("drop");
  });
});

document.getElementById("headerMenuBtn").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.add("show");
  document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.remove("show");
  document.getElementById("headerBg").style.display = "none";
  menuItem.forEach((item) => {
    item.classList.remove("open");
  });
});

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document
      .getElementsByClassName("header_ivf_1_0_0")[0]
      .classList.add("header_ivf_1_0_0--active");
  } else {
    document
      .getElementsByClassName("header_ivf_1_0_0")[0]
      .classList.remove("header_ivf_1_0_0--active");
  }
};
