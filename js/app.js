// START-GLOBAL-VARIABLE

let main = document.querySelector('main'),
    header = document.querySelector('.page__header'),
    nav = document.querySelector('#navbar__list'),
    section,
    genDiv = document.querySelector('#generate'),
    secNum = document.querySelector('#sec-num'),
    genBtn = document.getElementById('gen-btn'),
    upBtn = document.querySelector('#up-btn');

// END-GLOBAL-VARIABLE

// START-HELPER-FUNCTIONS

genBtn.addEventListener('click', () => {
    if (secNum.value >= 3) {
        let fragment = document.createDocumentFragment();
        for (let i = 1; i <= secNum.value; i++) {
            // CREATE ELEMENTS
            section = document.createElement('section');
            let item = document.createElement('li'),
                link = document.createElement('a'),
                div = document.createElement('div'),
                h2 = document.createElement('h2'),
                p1 = document.createElement('p'),
                p2 = document.createElement('p'),
                content = [h2, p1, p2];
            // ELEMENTS CONTENT
            link.textContent = h2.textContent = `Section ${i}`;
            p1.textContent = 'A paragraph (from the Ancient Greek , , "to write beside") is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.';
            p2.textContent = 'A paragraph (from the Ancient Greek , , "to write beside") is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.';
            // APPEND ELEMENTS
            item.appendChild(link);
            nav.appendChild(item);
            content.forEach(ele => {
                div.appendChild(ele);
            })
            section.appendChild(div);
            fragment.appendChild(section);
            // ELEMENTS ATTRIBUTES
            link.setAttribute('data-nav', `section${i}`);
            link.className = 'menu__link';
            // link.setAttribute('href', `#section${i}`);
            section.setAttribute('id', `section${i}`);
            // section.setAttribute('data-nav', `section${i}`);
            div.className = 'landing__container';
        }
        // APPEND-FRAGMENT-TO-THE-MAIN
        main.appendChild(fragment);
        // ADD-ACTIVE-CLASS-TO-VIEWABLE-SECTION
        window.addEventListener('scroll', () => {
            section.parentElement.querySelectorAll('section').forEach(ele => {
                if (scrollY >= ele.offsetTop - 115) {
                    ele.classList.add('active');
                } else {
                    ele.classList.remove('active');
                }
            })
        })
    }
})

// END-HELPER-FUNCTIONS

// START-HIDE-UL

window.addEventListener('scroll', () => {
    let sY = window.scrollY;
    header.classList.remove('hide');
    this.setTimeout(() => {
        if (sY == window.scrollY) {
            header.classList.add('hide');
        }
    }, 2000);
})

// /START-HIDE-UL

// START-MAIN-FUNCTIONS

// START-SCROLL-TO

window.addEventListener('scroll', function() {
    if (this.scrollY > 100) {
        upBtn.classList.remove('hide');
    } else {
        upBtn.classList.add('hide');
    }
});

upBtn.addEventListener('click', () => {
    scrollTo(0, 0);
})

// SCROLL-TO-SECTION-WHEN-LI-CLICKED
function scrollToElement(event) {
    if (event.target.nodeName === 'A') {
        const sectionId = event.target.getAttribute('data-nav');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }
}
nav.addEventListener('click', function(event) {
    scrollToElement(event)
})

// END-SCROLL-TO

// END-MAIN-FUNCTIONS