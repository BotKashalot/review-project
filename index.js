
//const string = "tzetzo";
//const number = 8;
//const boolean = true;
//
//const array = [string, number, boolean];
//
//const object = {string, number, boolean};
//const object2={
//    stringValue: string,
//    numberValue: number,
//    booleanValue: boolean,
//};
//
//console.log("logging object", object);
//console.log((object));
//console.log(object2);
//
//const roundNumber = Math.floor(Math.random() * 10);
//
//if (roundNumber >5){
//    console.log("I am hungry");
//} else {
//    console.log("I am not hungry")
//}
//
//const names = ["Tzetzo", "Elka", "Rubens"];
//const vip = []
//console.log(names[0])   // calls out "Tzetzo"
//
////for (i=0; i< names.length; i++){
////    if(names[i] === "Rubens"){vip.push(names[i])}
////}
////``console.log(vip)
//
//const scores = {
//    Tzetzo: 8,
//    Elka: 9,
//    Rubens: 4,
//}
//
//console.log(scores["Tzetzo"])
//console.log(scores.Tzetzo)
//
//console.log(Object.keys(scores))
//console.log(Object.values(scores))
//
//for (i = 0; i < Object.keys(scores).length; i++){
//    console.log(Object.values(scores)[i]);
//    console.log(scores[Object.keys(scores)[i]])
//    if (scores[Object.keys(scores)[i]] > 7){
//        const key = Object.keys(scores)[i];
//        const value = scores[Object.keys(scores)[i]];
//        const object = {};
//        object[key] = value;
//        vip.push(object)
//    }
//}
//console.log(vip)

const image = document.querySelector("img")
console.log(image)

const div = document.querySelector("div")
console.log(div)

//const imagesData=[{
//    title = "image1"
//    src = "http://google.com"
//}]


const body = document.querySelector('body')
console.log(body)

const newDiv = document.createElement("div");
newDiv.textContent = "new div experiement";
console.log(newDiv);
newDiv.style.color = "white";
body.appendChild(newDiv)


const body2 = {};
function appendChild(){
    console.log("I am David");
}

body2.appendChild = append.Child;

console.log(body2.appendChild());

const body3 = {
    element: [],
    style: {
        color: "",
    },
    appendChild: function appendChild2(){
        console.log("I am David");
    },
};


body3.appendChild2 = append.Child2;

console.log(body3.appendChild2());

body3.element.push("div");
body.style.color = "red";
console.log(body.element);
