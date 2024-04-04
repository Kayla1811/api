async function getQuote() {
 
 
    const response = await fetch('https://animechan.xyz/api/quotes/anime?title=naruto&page=2');
 
    var data = await response.json();
 
    console.log(data)
 
    document.getElementById('quote').innerHTML = data[4]['quote'];
}
getQuote();  