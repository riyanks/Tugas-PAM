// Assigning
const Nama = ()=>{
    console.log("Riyan");
}
Nama();

// Argument

function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  
  greeting(sayHello, "Riyan");

// Returning
function Sapa (){
    return ()=> {
        console.log("Halo semua!");
    };
}