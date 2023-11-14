// let a = +prompt('a')
// let m = prompt('+ - * /')
// let b = +prompt('b')
// if(m === '+') {
//   alert(a + b)
// } else if(m === '-') {
//   alert(a - b)
// } else if(m === '*') {
//   alert(a * b)
// } else if(m === '/') {
//   alert(a / b)
// }
// let nameTwo = prompt('Whats your name?').toLowerCase().trim() 

// let month = prompt('month number')
// if(month === 12 || month === 1 || month === 2) {
//   alert('winter')
// } else if(month === 3 || month === 4 || month === 5) {
//   alert('spring')
// }  else if(month === 6 || month === 7 || month === 8) {
//   alert('summer')
// }  else if(month === 9 || month === 10 || month === 11) {
//   alert('autumn')
// } else{
//   alert('not a season')
// }


// let intheclub = +prompt('how many people there?') 
// if(intheclub <= 10) {
//     let name = prompt('what is your name?').toLowerCase().trim()


//     if(name.charAt().toLowerCase() === "a") {
//        let age = +prompt('enter your age')
//        if(age <= 40) {
//            let money = +prompt('money is available')
//        } else {
//            alert('leave')
//            if(money >= 100) {
//                alert('welcome')
//            } else {
//            alert('not enough money')
//            }
//         }
//     } else {
//         alert('too old')
//     }
// } else {
//     alert("isnt free")
// }



// // let users = ['everybody calls', 'hello my name is', 'rusya', ['ruslan but', 'me artyom'], 'come on i am not artyom', 'i am']
// // console.log(
// //     users[1] + ' ' + users[3][0] + ' ' + users[0] + ' ' + users[3][1] + ' ' + users[0] + ' ' + users[4] + ' ' + users[5] + users[2]
// // );


// // let arr = ['amira', 'tangir', 'dilrukh', 'alex', 'jordan']
// // let name = prompt("enter your name")
// // let idx = arr.indexOf(name)
// // if(idx === -1) {
// //     alert('takogo v spicke net')
// // } else {
// //     arr.splice(idx, 1)
// //     console.log();
// // }


// let arr = ['amira', 'tangir', 'dilrukh', 'alex', 'jordan']
// let name = prompt('your name')
// let indx = arr.indexOf(name)
// if(indx.lenght % 2 === 0) {
//     alert("welcome")
// } else {
//     alert('odd')
// }
// console.log(arr); 


// let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'alla', 'tangir', 'daler']
// let evenNames = arr.filter(arr => arr.length % 2 === 0)
// console.log(evenNames);        

// let arr = [ 1, 345, 52, 76, 11, 31, 324, 8]
// let total = 0
// arr.forEach(num => total = total + num)
// console.log(total);

// let carPrices = [16000, 1000, 3500, 10000, 11000, 33000, 18000, 40000, 35000, 25000, 45000, 100000]
// let from = prompt('from')
// let up = prompt('up')
// let results = carPrices.filter((car) => {
// if(car >= from && car <= up) 
//     return carPrices
// }
// )
// console.log(results);


// let cars =
//     {
//         model: 'equinox',
//         company: 'chevrolet',
//         color: "black",
//         engine: 3.3,
//         price: 34.995,
//         beaten: false,
//         year: 2023,
//         mileage: 319,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2032
//         }

//     }


// let cars = [{
//     model: 'cobalt',
//     company: 'general motors',
//     engine: 1.5,
//     price: 15000,
//     beatan: true,
//     year: 2022,
//     mileage: 13000,
//     tech_passport: {
//         date: 2022,
//         exp_date: 2032,
//     }
// },
// {
//     model: "malibu",
//     company: "general motors",
//     color: "dry asphalt",
//     engine: 2.4,
//     price: 30000,
//     beaten: false,
//     year: 2022,
//     mileage: 1000,
//     tech_passport: {
//         date: 2022,
//         exp_date: 2032,
//     }
// },
// {
//     model: "tracker",
//     company: "general motors",
//     color: "black",
//     engine: "2.2",
//     price: 22000,
//     beaten: false,
//     year: 2021,
//     mileage: 2000,
//     tech_passport: {
//         date: 2021,
//         exp_date: 3031
//     }
// },
// {
//     model: "gentra",
//     company: "general motors",
//     color: "black",
//     engine: 1.5,
//     price: 17000,
//     beaten: false,
//     year: 2021,
//     mileage: 6000,
//     tech_passport: {
//         date: 2021,
//         exp_date: 2031,
//     }
// },
// {
//     model: 'Damas',
//     company: 'Chevrolet',
//     color: 'White',
//     engine: 2.4,
//     price: 10000,
//     beaten: false,
//     year: 2023,
//     mileage: 100,
//     tech_pasport: {
//         date: 2023,
//         exp_date: 2033
//     }
// },
// {
//     model: "Spark",
//     company: "general motors",
//     color: "dirtygreen",
//     engine: 1.250,
//     price: 7000,
//     beaten: true,
//     year: 2008,
//     mileage: 328000,
//     tech_passport: {
//         date: 2008,
//         exp_date: 2023,
//     }
// },
// {
//     model: "Labo",
//     company: "GM ",
//     color: "white",
//     engine: 0.8,
//     price: 10000,
//     beaten: false,
//     year: 2023,
//     mileage: 0,
//     tech_passport: {
//         date: 2023,
//         exp_date: 2033,
//     }
// },
// {
//     model: "tico",
//     company: "daewoo",
//     color: "black",
//     engine: 1.5,
//     price: 10000,
//     beaten: true,
//     year: 2010,
//     mileage: 1000,
//     tech_passport: {
//         date: 2022,
//         exp_date: 2025,
//     }
// }, {
//     model: 'traverse',
//     company: 'chevrolet',
//     color: 'black',
//     engine: 3.6,
//     price: 60000,
//     beaten: false,
//     year: 2023,
//     mileage: 500,
//     tech_passport: {
//         date: 2023,
//         exp_date: 2033
//     }
// }, {
//     model: "volga",
//     company: "uaz",
//     color: "white",
//     engine: 0.4,
//     price: 700000,
//     beaten: true,
//     year: 1964,
//     mileage: 3000000,
//     tech_passport: {
//         date: 1964,
//         exp_date: 2023,
//     }
// }, {
//     model: "velik",
//     company: "Philips",
//     color: "red",
//     engine: "v12",
//     price: 12000,
//     beaten: false,
//     year: 2009,
//     mileage: 0,
//     tech_passport: {
//         date: 2022,
//         exp_date: 2032,
//     }
// }, {
//     model: "Porter",
//     company: "Hyundai",
//     color: "black",
//     engine: 2.5,
//     hp: 145,
//     price: 31000,
//     beaten: false,
//     fuel_comsumption: 10.2,
//     year: 2023,
//     mileage: 100,
//     tech_passport: {
//         date: 2023,
//         exp_date: 2033,
//     }
// }, {
//     model: 'Tahoe',
//     company: 'CHEVROLET',
//     color: 'black',
//     engine: {
//         capacity: '5.3',
//         horsePower: '343hp'
//     },
//     price: 110000,
//     beaten: false,
//     year: 2022,
//     mileage: 0,
//     tech_passport: {
//         date: 2022,
//         expDate: 2032
//     }
// }, {
//     model: "Mercedes-Benz CLS",
//     company: "Mercedes-Benz",
//     color: "black",
//     engine: 3.0,
//     price: 110000,
//     beaten: false,
//     year: 2023,
//     mileage: 200,
//     tech_passport: {
//         date: 2023,
//         exp_date: 2033,
//     }
// }, {
//     model: "malibu",
//     company: "Chevrolet",
//     color: "sky rim",
//     engine: 2.4,
//     price: 15000,
//     year: 2022,
//     clash: false,
//         mileage: 1500,
//         tech_passport: {
//             date: 2022,
//             exp_date: 2054
//         }
//     }, {
//         model: "matiz",
//         company: "general motors",
//         color: "yellow",
//         engine: 0.8,
//         price: 4000,
//         beaten: false,
//         year: 2018,
//         mileage: 5000,
//         tech_passport: {
//             date: 2018,
//             exp_date: 2028,
//         }
//     }, {
//         model: "porter",
//         company: "hyundai",
//         color: "black",
//         engine: 2.5,
//         hp: 145,
//         price: 31000,
//         beaten: false,
//         fuel_comsumption: 10.2,
//         year: 2023,
//         mileage: 100,
//         tech_passport: {
//             date: 2023,
//             exp_date: 2033,
//         }
//     }, {
//         model: 'bmw_x7',
//         year: 2023,
//         price: 85000,
//         engine: 6.5,
//         Drivetrain: "All Wheel Drive",
//         Transmission_Order_Code: "2TB",
//         engine: "3000cc",
//         power: "375Bhp",
//         Seating_Capacity: 6,
//         Mileage: "11.29 - 14 kmpl",
//         Fuel: "diesel",
//         horsepower: 1000,
//         beaten: false,
//         color: "black"
//     }
// ]

// let from = prompt('from')
// let up = prompt('up')


// let result = []

// cars.forEach(car => {
//     if (car.price >= from && car.price <= up) {
//         result.push(`model: ${car.model}, price: ${car.price} \n`)
//     }
// })

// let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")
// let findedCar = cars.find(car => car.model === oneOfThem)
// let info = confirm(
//     `model: ${findedCar.model},
//     company: ${findedCar.company},
//     color: ${findedCar.color},
//     year: ${findedCar.year},
//     price: ${findedCar.price},
//     engine: ${findedCar.engine},
//    beaten: ${findedCar.beaten},
//    mileage: ${findedCar.mileage},
//    tech_passport: { date: ${findedCar.date},
//     experied: ${findedCar.exp_date}, }
// `)

// let cash = +prompt("Сколько у вас на счету?")
// if( findedCar.price === cash ) {
//     alert("Поздравляем вас с покупкой!") 
// } else if(findedCar.price > cash) {
//     alert("У вас нехватка денег")
// } else if(cash > findedCar.price) {
//     let payment = cash - findedCar.price
//     alert(`Ваш остаток от оплаченной суммы: ${payment}`)
// }




// let currYear = 2023


// let yearResults = cars.filter((car) => {
//     if(currYear - car.year <= 2 ) {
//         return car
//     } 
// })
// console.log(yearResults);










// let users = [
//  {
//  "id": 1,
//  "name": "Leanne Graham",
//  "username": "Bret",
//  "email": "Sincere@april.biz",
//  "address": {
//  "street": "Kulas Light",
//  "suite": "Apt. 556",
//  "city": "Gwenborough",
//  "zipcode": "92998-3874",
//  "geo": {
//  "lat": "-37.3159",
//  "lng": "81.1496"
//  }
//  },
//  "phone": "1-770-736-8031 x56442",
//  "website": "hildegard.org",
//  "company": {
//  "name": "Romaguera-Crona",
//  "catchPhrase": "Multi-layered client-server neural-net",
//  "bs": "harness real-time e-markets"
//  }
//  },
//  {
//  "id": 2,
//  "name": "Ervin Howell",
//  "username": "Antonette",
//  "email": "Shanna@melissa.tv",
//  "address": {
//  "street": "Victor Plains",
//  "suite": "Suite 879",
//  "city": "Wisokyburgh",
//  "zipcode": "90566-7771",
//  "geo": {
//  "lat": "-43.9509",
//  "lng": "-34.4618"
//  }
//  },
//  "phone": "010-692-6593 x09125",
//  "website": "anastasia.net",
//  "company": {
//  "name": "Deckow-Crist",
//  "catchPhrase": "Proactive didactic contingency",
//  "bs": "synergize scalable supply-chains"
//  }
//  },
//  {
//  "id": 3,
//  "name": "Clementine Bauch",
//  "username": "Samantha",
//  "email": "Nathan@yesenia.net",
//  "address": {
//  "street": "Douglas Extension",
//  "suite": "Suite 847",
//  "city": "McKenziehaven",
//  "zipcode": "59590-4157",
//  "geo": {
//  "lat": "-68.6102",
//  "lng": "-47.0653"
//  }
//  },
//  "phone": "1-463-123-4447",
//  "website": "ramiro.info",
//  "company": {
//  "name": "Romaguera-Jacobson",
//  "catchPhrase": "Face to face bifurcated interface",
//  "bs": "e-enable strategic applications"
//  }
//  },
//  {
//  "id": 4,
//  "name": "Patricia Lebsack",
//  "username": "Karianne",
//  "email": "Julianne.OConner@kory.org",
//  "address": {
//  "street": "Hoeger Mall",
//  "suite": "Apt. 692",
//  "city": "South Elvis",
//  "zipcode": "53919-4257",
//  "geo": {
//  "lat": "29.4572",
//  "lng": "-164.2990"
//  }
//  },
//  "phone": "493-170-9623 x156",
//  "website": "kale.biz",
//  "company": {
//  "name": "Robel-Corkery",
//  "catchPhrase": "Multi-tiered zero tolerance productivity",
//  "bs": "transition cutting-edge web services"
//  }
//  },
// {
//  "id": 5,
//  "name": "Chelsey Dietrich",
//  "username": "Kamren",
//  "email": "Lucio_Hettinger@annie.ca",
//  "address": {
//  "street": "Skiles Walks",
//  "suite": "Suite 351",
//  "city": "Roscoeview",
//  "zipcode": "33263",
//  "geo": {
//  "lat": "-31.8129",
//  "lng": "62.5342"
//  }
//  },
//  "phone": "(254)954-1289",
//  "website": "demarco.info",
//  "company": {
//  "name": "Keebler LLC",
//  "catchPhrase": "User-centric fault-tolerant solution",
//  "bs": "revolutionize end-to-end systems"
//  }
//  },
//  {
//  "id": 6,
//  "name": "Mrs. Dennis Schulist",
//  "username": "Leopoldo_Corkery",
//  "email": "Karley_Dach@jasper.info",
//  "address": {
//  "street": "Norberto Crossing",
//  "suite": "Apt. 950",
//  "city": "South Christy",
//  "zipcode": "23505-1337",
//  "geo": {
//  "lat": "-71.4197",
//  "lng": "71.7478"
//  }
//  },
//  "phone": "1-477-935-8478 x6430",
//  "website": "ola.org",
//  "company": {
//  "name": "Considine-Lockman",
//  "catchPhrase": "Synchronised bottom-line interface",
//  "bs": "e-enable innovative applications"
//  }
//  },
//  {
//  "id": 7,
//  "name": "Kurtis Weissnat",
//  "username": "Elwyn.Skiles",
//  "email": "Telly.Hoeger@billy.biz",
//  "address": {
//  "street": "Rex Trail",
//  "suite": "Suite 280",
//  "city": "Howemouth",
//  "zipcode": "58804-1099",
//  "geo": {
//  "lat": "24.8918",
//  "lng": "21.8984"
//  }
//  },
//  "phone": "210.067.6132",
//  "website": "elvis.io",
//  "company": {
//  "name": "Johns Group",
//  "catchPhrase": "Configurable multimedia task-force",
//  "bs": "generate enterprise e-tailers"
//  }
//  },
//  {
//  "id": 8,
//  "name": "Nicholas Runolfsdottir V",
//  "username": "Maxime_Nienow",
//  "email": "Sherwood@rosamond.me",
//  "address": {
//  "street": "Ellsworth Summit",
//  "suite": "Suite 729",
//  "city": "Aliyaview",
//  "zipcode": "45169",
//  "geo": {
//  "lat": "-14.3990",
//  "lng": "-120.7677"
//  }
//  },
//  "phone": "586.493.6943 x140",
//  "website": "jacynthe.com",
//  "company": {
//  "name": "Abernathy Group",
//  "catchPhrase": "Implemented secondary concept",
//  "bs": "e-enable extensible e-tailers"
//  }
//  },
//  {
//  "id": 9,
//  "name": "Glenna Reichert",
//  "username": "Delphine",
//  "email": "Chaim_McDermott@dana.io",
//  "address": {
//  "street": "Dayna Park",
//  "suite": "Suite 449",
//  "city": "Bartholomebury",
//  "zipcode": "76495-3109",
//  "geo": {
//  "lat": "24.6463",
//  "lng": "-168.8889"
//  }
//  },
//  "phone": "(775)976-6794 x41206",
//  "website": "conrad.com",
//  "company": {
//  "name": "Yost and Sons",
//  "catchPhrase": "Switchable contextually-based project",
//  "bs": "aggregate real-time technologies"
//  }
//  },
// {
//  "id": 10,
//  "name": "Clementina DuBuque",
//  "username": "Moriah.Stanton",
//  "email": "Rey.Padberg@karina.biz",
//  "address": {
//  "street": "Kattie Turnpike",
//  "suite": "Suite 198",
//  "city": "Lebsackbury",
//  "zipcode": "31428-2261",
//  "geo": {
//  "lat": "-38.2386",
//  "lng": "57.2232"
//  }
//  },

//  "phone": "024-648-3804",
//  "website": "ambrose.net",
//  "company": {
//  "name": "Hoeger LLC",
//  "catchPhrase": "Centralized empowering task-force",
//  "bs": "target end-to-end models"
//  }
//  }
// ]
//  let emails = {
//     org: [],
//     net: [], 
//     info: [] 
//     }
//     let other = []

// for (let person of users) {
//     let email = person.email
//     if (email.includes('.org')) {
//       emails.org.push(person)
//     } else if (email.includes('.net')) {
//       emails.net.push(person)
//     } else if (email.includes('.info')) {
//       emails.info.push(person)
//     } else {
//       other.push(person)
//     }
//   }
//   console.log(emails, other)
 
// for (let i = 0; i < users.length; i++) {
//     let email = person.email
//     if (email.includes('.org')) {
//       emails.org.push(person)
//     } else if (email.includes('.net')) {
//       emails.net.push(person)
//     } else if (email.includes('.info')) {
//       emails.info.push(person)
//     } else {
//       other.push(person)
//     }
// }
// console.log(emails, other)












// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": 
// true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// arr.filter((item) => {
//     if (item.completed === true) {
//         a.arr.push(item)
//         a.count++
//     } else if(item.completed === false) {
//         b.arr.push(item)
//         b.count++
//     }
// })
// console.log(a, "completed");
// console.log(b, "not completed");


// let products = [
//   {
//       name: "soda",
//       price: 10000,
//       godno: 2040
//   },
//   {
//       name: "chocolate",
//       price: 8000,
//       godno: 2024
//   },
//   {
//       name: "ice cream",
//       price: 13000,
//       godno: 2023
//   },
//   {
//       name: "yogurt",
//       price: 9000,
//       godno: 2023
//   },
//   {
//       name: "lienergy",
//       price: 21000,
//       godno: 2024
//   },
//   {
//       name: "fusetea",
//       price: 7000,
//       godno: 2024
//   },
//   {
//       name: "lays",
//       price: 18000,
//       godno: 2023
//   },
//   {
//       name: "18+",
//       price: 8000,
//       godno: 2024
//   },
//   {
//       name: "namak",
//       price: 2000,
//       godno: 2024
//   },
//   {
//       name: "orange juice",
//       price: 10000,
//       godno: 2024
//   },
//   {
//       name: "clear man",
//       price: 50000,
//       godno: 2025
//   },
//   {
//       name: "saxar",
//       price: 12000,
//       godno: 2025
//   },
//   {
//       name: "moloko",
//       price: 11000,
//       godno: 2023
//   },
//   {
//       name: "pechenki",
//       price: 15000,
//       godno: 2024
//   },
//   {
//       name: "muka",
//       price: 150000,
//       godno: 2024

//   },
// ]

// let discount = +prompt('discount %')
// let result
// let table

// for(let item of products) {
  
    //  result = item.price / 100
    //  table = result * discount
    //  console.log(table);
  
    // result = item.price - (item.price / 100 * discount) 
    // console.log(result);
// }



let people = [
  {
      name: "bobur",
      age: 43,
      isMarried: false,
      wifes: ['kamila', 'safir', 'allayor']
  },
  {
      name: "ismail",
      age: 12,
      isMarried: true,
      wifes: ['nikita', 'malika']
  },
  {
      name: "allayor",
      age: 14,
      isMarried: true,
      wifes: ['denis', 'dima', 'dimon', 'xbegim']
  },
  {
      name: "sarodr ml",
      age: 18,
      isMarried: false,
      wifes: ['safiya']
  },
]
let guilties = []
let adolcens = []
 for (let person of people) 
  if (person.wifes.length > 1) {
    guilties.push(person)
  } else if (person.isMarried === true && person.age < 18) {
adolcens.push(person)
  }

  console.table(guilties);
  console.table(adolcens);

  
  // if(person.isMarried  && person.age < 18) {
  // //   adolcens.push(person);
  // }

