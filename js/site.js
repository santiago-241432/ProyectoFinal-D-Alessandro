const d = document;

function searchFilters(input,selector){
    d.addEventListener("keyup",(e) => {
        if(e.target.matches(input)){
        console.log(e.target.value);
    d.querySelectorAll(selector).forEach((el) => 
        el.textContent.toLowerCase().includes(e.target.value)
        ?el.classList.remove("filter")
        :el.classList.add("filter")
        );
    }
});

}

searchFilters(".card-filter", ".descripcion");