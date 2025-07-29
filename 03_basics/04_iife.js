// Immediately Invoked Functions Expressions 

(function chai() {
    //named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB Connected Two ${name}`);
    
})('Hitesh')