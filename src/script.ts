// grab elements in our DOM using DOM Type casting
const inputField = document.getElementById('amount') as HTMLInputElement;
const button = document.getElementById('generate') as HTMLButtonElement;
const output = document.getElementsByTagName('output')[0] as HTMLOutputElement;

// add Event Types to our event listeners
button.addEventListener("click", (e: MouseEvent) => {
    console.log(e.button);
    buildBoxes();
})


inputField.addEventListener("keydown", (e: KeyboardEvent) => {
    console.log(e.key);
    if(e.key === "Enter"){
        buildBoxes();
    }
})

function buildBoxes() {

}