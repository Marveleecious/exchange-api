function sub(){
    document.getElementById('text').innerHTML= `<p id="pp"><b>Currency</b></p> <p id="pp"><b>Rate</b></p>`
    let select = document.getElementById('select');
let rate = select.value;
axios(`https://v6.exchangerate-api.com/v6/1686e513b42112194982dddb/latest/${rate}`)
.then(serverData =>{
let ratee = serverData.data;
let conv = ratee.conversion_rates;
for (let key in conv){
if (key){
document.getElementById('out').innerHTML += key  + '<br></br>';
// i++;
}
}
for (let i in conv){
if (i){
document.getElementById('outt').innerHTML += conv[i] + '<br></br>';

}
}
}
)
}
