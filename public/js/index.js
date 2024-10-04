let a = true;

if(a == true){
function colorchange(e){
    e.style.backgroundColor = "green";
    e.innerHTML = "Done";
    
    a = false
}


}else{
    function colorchange(e){
        e.style.backgroundColor = "black";
        e.innerHTML = "vote HIm";
        a = true;
    }
    

}