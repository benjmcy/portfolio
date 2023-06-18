const menu = document.querySelector(".hamburger");
const top_menu = document.querySelectorAll(".top-menu");
const topic_menu = document.querySelectorAll(".topic-menu");
const mobile_nav = document.querySelector(".mobile-nav");
const mobile_nav_menu = document.querySelectorAll(".mobile-nav-menu");
const submenu = document.querySelectorAll(".submenu-header");
const company = document.querySelectorAll(".company");
const skills = document.querySelectorAll(".skills");

menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobile_nav.classList.toggle('mobile-nav-active');
})

for (i = 0; i < topic_menu.length; i++) {
        topic_menu[i].addEventListener('click', function () {
                this.classList.toggle('top-menu-active');
        })
}


for (i = 0; i < mobile_nav_menu.length; i++) {
        mobile_nav_menu[i].addEventListener('click', function () {
                menu.classList.remove('active');
                mobile_nav.classList.remove('mobile-nav-active');
                var key_button = this.getAttribute('href');
                document.querySelector(key_button).classList.add('top-menu-active');
                if (key_button == '#WorkExperience') {
                        for (j = 0; j < company.length; j++) {
                                company[j].classList.add('top-menu-active');
                        }
                }
                else if (key_button == '#Skills') {
                        for (j = 0; j < skills.length; j++) {
                                skills[j].classList.add('top-menu-active');
                        }
                }
        })
}

for (i = 0; i < top_menu.length; i++) {
        top_menu[i].addEventListener('click', function () {
                this.classList.toggle('top-menu-active');
                var key = this.getAttribute('id');
                if (key == 'WorkExperience') {
                        for (j = 0; j < company.length; j++) {
                                company[j].classList.toggle('top-menu-active');
                        }
                }
                else if (key == 'Skills') {
                        for (j = 0; j < skills.length; j++) {
                                skills[j].classList.toggle('top-menu-active');
                        }
                }
        })
}

for (i = 0; i < submenu.length; i++) {
        submenu[i].addEventListener('click', function () {
                this.classList.toggle('submenu-header-active');
                this.nextElementSibling.classList.toggle('submenu-header-active');
        })
}