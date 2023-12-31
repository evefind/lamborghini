function ricerca() 
{
    var search = document.getElementById("search").value;
    var sumbit = document.getElementById("submit");

    var urus = "urus";
    var revuelto = "revuelto";
    var huracan = "huracan";

    if(search.toLowerCase() === urus.toLowerCase())
    {
        window.location.href = "urus.html";
    }

    if(search.toLowerCase() === revuelto.toLowerCase())
    {
        window.location.href = "revuelto.html";
    }

    if(search.toLowerCase() === huracan.toLowerCase())
    {
        window.location.href = "huracan.html";
    }

}