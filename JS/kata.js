describe('mocha + assert', () => {

  it('returns a empty string when receives 0 euros', () => { 
    let euroCoins = 0
    
    let result = exchange(euroCoins)
    
    assert.equal(result, "")
    
  });
  
  it('returns the change for 1 euro', () => { 
    let euroCoins = 1
    
    let result = exchange(euroCoins)
    
    assert.equal(result, "1 moneda de 1€")
    
  });
  
  it('returns the change for 2 euros', () => { 
    let euroCoins = 2
    
    let result = exchange(euroCoins)
    
    assert.equal(result, "1 moneda de 2€")
    
  });
  
  it('returns the change for 3 euros', () => { 
    let euroCoins = 3
    
    let result = exchange(euroCoins)
    
    assert.equal(result, "1 moneda de 2€ y 1 moneda de 1€")
    
  });

});

function exchange(cash) {
  const coinTypes = [2, 1]
  if  (cash <= 0){
    return ""
  }
  
  let nCoins = []
  
  nCoins[0] = Math.floor(cash / coinTypes[0])
  let remainingCoins = cash % coinTypes[0]
  
  nCoins[1] = Math.floor(remainingCoins / coinTypes[1])
  remainingCoins = remainingCoins % coinTypes[1]
  
  console.log(nCoins)
  
  let message = ""
  let moreThan1Coin = false
  if( nCoins[0] > 0){
    moreThan1Coin = true
    message += nCoins[0]  + " moneda de " + coinTypes[0] +"€"
  } 
  
  if( nCoins[1] > 0){
    if (moreThan1Coin) message += " y "
    message += nCoins[1]  + " moneda de " + coinTypes[1] +"€"
  } 
  return message
  
}
