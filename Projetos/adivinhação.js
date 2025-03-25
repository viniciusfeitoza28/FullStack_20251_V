function number(){
    let num = parseInt(document.getElementById("number1").value)
    let r = Math.random()*100
    let i = Math.floor(r)
    console.log(i)
    if (num >= i){
        document.getElementById('h2_1').style.setProperty("background-color","green")
    }
    else if(num <= i){
        document.getElementById('h2_1').style.setProperty("background-color","red")
    }
       
    
        
    
}