const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp)


  

    const tempSelected = document.getElementById('dropdid');
    const valueTemp = dropdid.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);

    const celToFah = (cel) =>
    {
        let fahrenheit =parseFloat((cel*9/5)+32).toFixed(2);
        return fahrenheit;
    } 
    const fahToCel  = (fah) =>
    {
        let celsius =parseFloat((fah-32)* 5/9).toFixed(2);
        return celsius;
    } 
    let result;


   
    if (isNaN(numberTemp))
    {  
        document.getElementById("numloc").innerHTML="*Enter Numeric value only";  
        return false;  
    }
      else
        {  
            if(valueTemp == 'Cel')
            {
                result = celToFah(numberTemp);
                //document.getElementById('resultContainer').innerHTML= `= ${result} Fahrenheit`;
                document.getElementById('rest').value = result+ ` Fahrenheit` ;
            }
            else
            { 
                
                result = fahToCel(numberTemp);
                document.getElementById('rest').value= result+ ` Celsius`;



            } 
            return true;  
    }  
}