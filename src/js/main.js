document.addEventListener("DOMContentLoaded", function () {
  const tabs_buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < tabs_buttons.length; i++) {
    tabs_buttons[i].addEventListener("click", function (e) {
      let target_tab = e.target.getAttribute("data-tab-button");
      target_tab = document.querySelector(`[data-tab-id=${target_tab}]`);
      hide_tabs();
      remove_btn_state();
      target_tab.classList.add("shows__list--is-active");
      e.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function hide_tabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("shows__list--is-active");
  }
}

function remove_btn_state(){
    const tabs_buttons = document.querySelectorAll("[data-tab-button]");
    
    for(let i=0; i<tabs_buttons.length; i++) {
        tabs_buttons[i].classList.remove("shows__tabs__button--is-active");
    }
}
