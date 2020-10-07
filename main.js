const options = {
    threshold: 0.2,
};

const addActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            let currentActive = document.querySelector(".desk-nav a.active")
            
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            
            let newActive = document.querySelector(
                `.desk-nav a[href="#${entry.target.getAttribute("id")}"]`
            );
            
            newActive.classList.add("active");
        } 
    });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});