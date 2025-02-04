import load  from "./assets/loader.png";

const image_load = document.createElement("img");
image_load.src = load;
image_load.alt = "loader";
image_load.width = 25;
image_load.height = 25;
class Loader {
    image = image_load

    charge(){
        const form_loader = document.querySelector(".form__loader")
        form_loader.appendChild(this.image) 
    }
    uncharge() {
        const form_loader = document.querySelector(".form__loader");
        if (form_loader && form_loader.contains(this.image)) {
            setTimeout(() => {
                form_loader.removeChild(this.image);
            }, 250); // ⏳ Attente de 2 secondes avant suppression
        } else {
            console.error("L'image n'est pas présente dans .form__loader !");
        }
    }
}

export { Loader };
