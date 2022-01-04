const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const progress_input = $(".footer__control-progress input");
const progress_volume = $(".footer__option-volume input");
const footer = {
  getBackgroundSize: function (progress_input) {
    var min = +progress_input.min || 0;
    var max = +progress_input.max || 100;
    var value = +progress_input.value;
    return ((value - min) / (max - min)) * 100;
  },
  setBackgroundSize: function (progress_input) {
    progress_input.style.setProperty(
      "--background-size",
      `${this.getBackgroundSize(progress_input)}%`
    );
  },

  eventHandle: function () {
    console.log(progress_input);
    this.setBackgroundSize(progress_input);
    progress_input.addEventListener("input", () =>
      this.setBackgroundSize(progress_input)
    );
    this.setBackgroundSize(progress_volume);
    progress_volume.addEventListener("input", () =>
      this.setBackgroundSize(progress_volume)
    );
  },
  start: function () {
    this.eventHandle();
  },
};
export { footer };
