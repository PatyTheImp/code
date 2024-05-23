const the_animation = document.querySelectorAll('.anim')
const char_title = document.querySelector('#char-title')
const char_text = document.querySelector('#char-text')
const char_img = document.querySelector('#char-img')
// Get the modal
const modal = document.querySelector('#myModal');
// Get the button that opens the modal
const btn = document.querySelector('#modal-btn');
// Get the <span> element that closes the modal
const span = document.querySelector('#close');
const modalVid = document.querySelector('#modal-vid');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-anim');
        }
    })
},
    {
        threshold: 0.5
    });

for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}

function charClick(element, charName) {
    let actives = document.querySelectorAll('.active');
    for (let i = 0; i < actives.length; i++) {
        actives[i].classList.remove("active");
    }
    element.classList.add("active");

    switch (charName) {
        case 'paty':
            char_title.innerHTML = "A lider";
            char_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum quod voluptatibus obcaecati possimus deserunt aspernatur eum amet quidem eius similique, odit molestias, nam minus quis? Modi obcaecati error qui?";
            break;
        case 'neko':
            char_title.innerHTML = "O gato";
            char_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt quia quidem, ex voluptas laudantium vel excepturi ipsam deserunt facere explicabo eveniet praesentium. Dolores aliquam doloremque atque veniam tempora ut!";
            break;
        case 'kiku':
            char_title.innerHTML = "A rival";
            char_text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus, itaque deleniti quo obcaecati libero odit asperiores tempora incidunt suscipit in voluptates molestias. Explicabo sapiente molestias facere ducimus praesentium est?";
            break;
        case 'ken':
            char_title.innerHTML = "O crush";
            char_text.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam dignissimos placeat minima maxime? Deserunt dicta magni necessitatibus, molestiae, tempore possimus libero officiis dolor consequatur doloribus sapiente unde alias dolores?";
            break;
        case 'rei':
            char_title.innerHTML = "A chata";
            char_text.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio autem in architecto deleniti dolor facilis incidunt vitae officiis est! Accusamus excepturi quod eum voluptatem deserunt delectus repellat, sint atque?";
            break;
        case 'kakashi':
            char_title.innerHTML = "O velhote";
            char_text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem a minus vitae eveniet quasi doloribus eaque ab ex error itaque cupiditate, ullam laboriosam voluptatum possimus architecto nesciunt veniam soluta eius?";
            break;

        default:
            break;
    }

    char_img.src = "./media/imgs/chars/" + charName + ".png";
}

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    modalVid.pause();
}