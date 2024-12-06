//import out custom modules
import { BoxSizes, createBox } from "./modules/box";

// grab elements in our DOM using DOM Type casting
const inputField = document.getElementById('amount') as HTMLInputElement;
const button = document.getElementById('generate') as HTMLButtonElement;
// const output = document.getElementsByTagName('output')[0] as HTMLOutputElement;

// add Event Types to our event listeners
button.addEventListener("click", (e: MouseEvent) => {
    // console.log(e.button);
    buildBoxes();
})


inputField.addEventListener("keydown", (e: KeyboardEvent) => {
    // console.log(e.key);
    if(e.key === "Enter"){
        // console.log("nu start de functie: ")
        buildBoxes();
    }
})

let boxes: ReturnType<typeof createBox<number>>[] = []

function buildBoxes(): void {
    //grab input value
    let boxAmount: number = Number(inputField.value);
    // console.log("hier", boxAmount)
    if(!boxAmount || boxAmount <= 0){
        alert("Please insert a positive number");
        return;
    }

    //start box counter
    let i = 0;

    //start generating boxees
    boxGen();

    function boxGen(): void {
        //lag between each box generation
        setTimeout(() => {
            //create array of all allowed enum types for the box sizes
            // const boxSizesArray: BoxSizes[] = Object.values(BoxSizes).filter(value => typeof value === 'number' || value === BoxSizes.BOMB)
            const boxSizesArray: BoxSizes[] = Object["values"](BoxSizes).filter(value => typeof value === 'number' || value === BoxSizes.BOMB)


            console.log(boxSizesArray); // Output: [40, 80, 120, "BOMB"]

            const boxSizesArrayLength: number = boxSizesArray.length;

            //randomly select one size
            let randomNum: number = Math.floor(Math.random() * boxSizesArrayLength);
            let oneBoxSize: BoxSizes = boxSizesArray[randomNum];

            //check BOMB
            if(oneBoxSize === BoxSizes.BOMB) {
                //logic for bomb
                alert("BOMB")
                return
            } // end of check BOMB

            //create box
            let box = createBox({id: i, size: oneBoxSize as number});
            i++;            //increase counter
            //push box in global array
            boxes.push(box)

            if (i < boxAmount) {
                boxGen();       //generate next box
            }
        }, 100)
    }
}