const favoriteFoods = ["Cheese", "Chocolate", "Olives", "Anchovies"];

let favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses",];

let socProfit = [1, 2, 4, 8, 16, 32, 64];

// would it be possible to have each value in the array exist as (their position in the array)^2?

let soc_profit_2 = [1]

for (let x = 1; x < 7; x++){
    soc_profit_2.push(2**x)
}

/*
with help from my dad and an explanation of for loops, I DID IT
the for loop increases the value in the array by 1, and then i push a new value on top of the array,
raising 2 to the power of the new value each time, up to a maximum of 6
 */

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(options[8])
  console.log(options[7])
  console.log(options[11])


  let englishNumbers = ["one", "two", "three", "four", "five"];

  let i = 0
  while (i <= 4){
    console.log(englishNumbers[i++])
  }

// i tried using i <= englishNumbers.length, however i ended up console.logging every number from 1 to infinity and crashed my browser, so gave up


  for (let i = 0; i <= 4; i++){
    console.log(englishNumbers[i])
  }


  let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

  for (let i = 0; i <= 5; i++){
    console.log(words[i] + "t")
  }