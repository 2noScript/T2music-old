const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navmenu_tabs = $$(".navmenu__tab");
const navmenu_select = $(".navmenu__tab-select");
const navmenu = {
 

  tabActive: function (tab = navmenu_tabs[1]) {
    tab.classList.add('navmenu__tab--active')
    navmenu_select.style.top=tab.offsetTop+'px'
    navmenu_select.style.height=tab.offsetHeight+'px'
  },
  eventHandle: function () {
     
     this.tabActive()// default select tab
     var currentIndex=1;
     navmenu_tabs.forEach((tab,index) => {
        tab.addEventListener('click',function(){
            navmenu_tabs[currentIndex].classList.remove('navmenu__tab--active')
            navmenu.tabActive(tab)
            currentIndex=index
        })
     });

  },
  start: function () {
    this.eventHandle();
  },
};

export { navmenu };
