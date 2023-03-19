const categorySort = (button) =>{
    let category = document.querySelectorAll(".wallpaper");
    let btnCategory = button.getAttribute("data-category");
    
    category.forEach((item) => {
        item.style.display = "none";
    });

    if(btnCategory === "All"){
        category.forEach((item) => {
            item.style.display = "flex";
        });
    }

    category.forEach((item) => {
        if(item.getAttribute("data-category").includes(btnCategory)){
            item.style.display = "flex";
        }
    });
}