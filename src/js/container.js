const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header_serach_btn = $(".header__search-btn");
const header_search = $(".header__search");
const header_search_text = $(".header__search-text");
const header_serch_clear = $(".header__search-clear");

const container = {
  eventHandle: function () {
    header_serach_btn.addEventListener("click", function () {
      header_search.classList.toggle("header__search--display");
    });
    header_serch_clear.addEventListener("click", function () {
      header_search_text.value = "";
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { container };
