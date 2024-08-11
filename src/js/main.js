document.addEventListener("DOMContentLoaded", function () {
  const tabs_buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-question]");

  
  const hero_section = document.querySelector('.hero');
  const hero_y = hero_section.clientHeight;
  
  window.addEventListener("scroll", function (){
    let logo = document.querySelector(".header__logo");
    let buy_btn = document.querySelector(".button__buy");
    let header = document.querySelector(".header");

    if(this.window.scrollY > hero_y){
      header.classList.remove("header--is-hidden");
      buy_btn.classList.remove("button--is-hidden");
      logo.classList.remove("header__logo--is-hidden");
      
    }else{
      header.classList.add("header--is-hidden");
      buy_btn.classList.add("button--is-hidden");
      logo.classList.add("header__logo--is-hidden");

    }
  } )

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

  for(let i=0; i<questions.length; i++) {
    questions[i].addEventListener('click', toggle_question);
  }
});

function toggle_question(element){
  const parent = element.target.parentNode;
  parent.classList.toggle('faq__questions__item--is-open');
}

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
