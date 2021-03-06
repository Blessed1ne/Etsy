// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0
  let avg
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price
      //total += data[i].proce
  }
      avg = (total/data.length).toFixed(2)
      console.log("The average price is $" + avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let value = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      value.push (data[i].title)
    }
  }
  console.log(value);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbp = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbp.push (data[i].title)
    }
  }
  console.log(gbp + "costs 18 pounds." );
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer: //second looop for the arrays
  let wood = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes ("wood")) {
      wood.push(data[i].title)
    }
  }
  console.log(wood);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let value = []
  let materials = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      value.push(data[i].title)
      materials.push (data[i].materials)
      console.log("materials", data[i].materials.length);
    }
  }
  console.log(value);
  console.log(materials);

}




// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let sellerMade = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].who_made === "i_did") {
            sellerMade.push(data[i].title)
        }
    }
    console.log(sellerMade.length + " items were made by their sellers.");
}
