const object = {};

function printMyName(){
    console.log("I am Tzetzo")
}

object.printMyName = printMyName;

console.log(object.printMyName());