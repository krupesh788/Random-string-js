function stringen(){

    let length = document.getElementById("str1").value;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    let result = ' ';

    let charlen = characters.length;

    for(let i = 0 ; i < length; i++ )
    {

        result += characters.charAt(Math.floor(Math.random() * charlen));
    }

    document.getElementById("p1").innerHTML = `Random String: ${result}`;


}