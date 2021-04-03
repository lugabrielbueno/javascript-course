/* função AJAX ou AJAJ para requisitar informacoes, um substituto para XMLHttpRequest */
function getDados(url){

  fetch(url)
      .then(res => {
        return res.json()        
      })
      .then(data => {
        console.log(data.ticker.price)
        
      })
      .catch(e => {
        console.log("ERROR",e)
      })


}



function getDados2(url,divInner){
  try{

    const fetchBitcoinPrice = async () => {
      const res = await fetch(url)
      const data = await res.json()
      
      document.getElementById(divInner).innerText = document.getElementById(divInner).innerText+data.email;
    }
    fetchBitcoinPrice()
  }catch(err){
    console.log("Ocorreu um erro: ",err);
  }
  
}
getDados2('file.php?q=2','divInf')