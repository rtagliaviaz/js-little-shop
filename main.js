const boton = document.getElementsByClassName('add');
const total = document.getElementById('total')
const totala = document.getElementById('totala')
const detail = document.getElementById('detail')
const detaila = document.getElementById('detaila')

const precios = []
const itemPrice = []

for (let i = 0; i < boton.length; i++) {
  boton[i].onclick = () => {
    const item = boton[i].parentElement.getElementsByClassName('item')[0].textContent
    console.log(item)

    const price = boton[i].parentElement.getElementsByClassName('price')[0].textContent.substring(7);
    const priceNumber = parseInt(price.slice(0, price.length - 1));
    // console.log(priceNumber);
    precios.push(priceNumber)
    // console.log(precios)
    // console.log(precios.length)
    itemPrice.push({item, price})
    console.log(itemPrice)
    itemPrice.map(function(itemp){
      const det = itemp.item
      console.log(det)
      // detail.appendChild(document.createElement("LI").appendChild(document.createTextNode(det)))

      detail.appendChild(document.createElement("LI")).appendChild(document.createTextNode(itemp.item + ' ' + itemp.price)
      )
      console.log(detail.getElementsByTagName('LI')[0].textContent)
      detaila.appendChild(document.createElement("LI")).appendChild(document.createTextNode(itemp.item + ' ' + itemp.price)
      )
      itemPrice.shift()
    })
    getTotal()
  };
}


getTotal = () => {
  var sum = precios.reduce(function(tot, amount){
    return tot + amount
  });
  total.innerHTML = sum.toString()+'$'
  totala.innerHTML = sum.toString()+'$'
}


