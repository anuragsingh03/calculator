let result=document.getElementById("answer");
function sinvalue()
{
    
    result.value=Math.sin(result.value);
}
function cosvalue()
{
   
    result.value=Math.cos(result.value);
}
function tanvalue()
{
    
    result.value=Math.tan(result.value);
}
function logbase10(){
    result.value=Math.log10(result.value);


}
function naturallog()
{
    result.value=Math.log(result.value);

}
function pivalue()
{
    result.value+=3.14159265359;

}
function evalue()
{
    result.value+=2.71828182846;

}
function factorialvalue()
{
    let fact=1;
    if(result.value%2===0 || result.value%2===1)
    {
    while(result.value!=1)
    {
        fact=fact*result.value;
        result.value--;

    }
    result.value=fact;
}
}
function squareroot()
{
    result.value=result.value**(0.5);
}