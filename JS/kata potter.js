describe('mocha + assert', () => {

  it('discount for 1 book', () => {
    let numberOfBooks = 1;
    
    let res = calculatePrice(numberOfBooks);
    
    assert.equal('8.00€', res)});
    
    it('discount for 2 different books', () => {
    let numberOfBooks = 2;
    
    let res = calculatePrice(numberOfBooks);
    
    assert.equal('15.20€', res)});
    
    it('discount for 3 different books', () => {
    let numberOfBooks = 3;
    
    let res = calculatePrice(numberOfBooks);
    
    assert.equal('21.60€', res)});
    
    it('discount for 4 different books', () => {
    let numberOfBooks = 4;
    
    let res = calculatePrice(numberOfBooks);
    
    assert.equal('25.60€', res)});
    
    it('discount for 5 different books', () => {
    let numberOfBooks = 5;
    
    let res = calculatePrice(numberOfBooks);
    
    assert.equal('30.00€', res)});
    
    it('discount for 2 different books and 1 equal', () => {
    let numberOfDifferentBooks = 2;
    let numberOfEqualBooks = 1;
    
    let res = calculatePrice( numberOfDifferentBooks, numberOfEqualBooks );
    
    assert.equal('23.20€', res)});

});

function calculatePrice( numberOfDifferentBooks ){
  return calculatePrice( numberOfDifferentBooks, 0);
}

function calculatePrice( numberOfDifferentBooks, numberOfEqualBooks ){
  let valueOfBook = 8;
  let discountDifferentBooks = getDiscount( numberOfDifferentBooks );
  let discountEqualBooks = getDiscount( numberOfEqualBooks );
  
  
  let grossPriceDifferentBooks = (numberOfDifferentBooks * valueOfBook);
  let grossPriceEqualBooks = (discountEqualBooks * valueOfBook);
  let priceDifferentBooks = grossPriceDifferentBooks - grossPriceDifferentBooks * discountDifferentBooks;  
    let priceEqualDifferentBooks = grossPriceEqualBooks - grossPriceEqualBooks * discountEqualBooks;  
  let price = priceDifferentBooks + priceEqualDifferentBooks;
  let formattedPrice = price.toFixed(2);
  return `${formattedPrice}€`;
}

function getDiscount( numberOfDifferentBooks ){
  let discount = 0;
  if ( numberOfDifferentBooks == 2 ){
    discount = 0.05;
  }
  if ( numberOfDifferentBooks == 3 ){
    discount = 0.10;
  }
  if ( numberOfDifferentBooks == 4 ){
    discount = 0.20;
  }
  if ( numberOfDifferentBooks == 5 ){
    discount = 0.25;
  }
  return discount;
}
