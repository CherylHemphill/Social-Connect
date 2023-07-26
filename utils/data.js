const names = [
'Oliver',
'Ava',
'Ethan',
'Mia',
'Noah',
'Isabella',
'Liam',
'Sophia',
'Aiden',
'Harper',
'Lucas',
'Amelia',
'Benjamin',
'Evelyn',
'Elijah',
'Abigail',
'Alexander',
'Emily',
'James',
'Charlotte',
'William',
'Scarlett',
'Michael',
'Grace',
'Samuel',
'Chloe',
'Jackson',
'Zoey',
'Daniel',
'Lily',
];



const thoughts = [
    "Just had the best meal of my life!",
    "Feeling grateful for all the wonderful people in my life.",
    "Had an amazing time at the beach today. 🏖️",
    "Life is short, so make the most of every moment!",
    "Enjoying a relaxing weekend at home.",
    "Excited about my upcoming vacation! ✈️",
    "Remember to always be kind to others.",
    "Spent the day exploring a new city.",
    "Sending positive vibes to everyone today. 🌟",
    "Feeling motivated to achieve my goals!",
    "A good book and a cup of tea - the perfect way to unwind.",
    "Grateful for the little things that bring joy to my life.",
    "Enjoying the beautiful sunset. 🌅",
    "Making memories with friends that will last a lifetime.",
    "Life is an adventure - embrace it!",
    "Trying out a new hobby and loving it.",
    "Reflecting on the past year and looking forward to the future.",
    "Life's challenges make us stronger and wiser.",
    "Surrounded by nature and feeling at peace.",
    "Spreading positivity and love wherever I go.",
    "Appreciating the simple joys of life.",
    "Cherishing moments spent with family.",
    "Taking a break from technology and enjoying the outdoors.",
    "Trying to live a more sustainable lifestyle.",
    "Happiness is found in the little things.",
    "Being present in the moment and savoring it.",
    "Life is a journey - enjoy the ride!",
    "Trying out new recipes in the kitchen.",
    "Feeling grateful for the support of my friends.",
    "Learning something new every day.",
  ];
  
// Get Random item in array
const getRandomArr = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random username
const getRandomuser = () => 
`${getRandomArr(names)}`;

// Get random thoughts
const getRandomThoughts = () => {
    const results = [];
    for (let i = 0; i < 4; i++) {
        results.push({
            thoughtText: getRandomArr(thoughts)
        });  
    }
    return results;
};

module.exports = { getRandomuser, getRandomThoughts };

//   const emails = [
//     'oliver@example.com',  
//     'ava@example.com',  
//     'ethan@example.com',  
//     'mia@example.com',  
//     'noah@example.com',  
//     'isabella@example.com',  
//     'liam@example.com',  
//     'sophia@example.com',  
//     'aiden@example.com',  
//     'harper@example.com',  
//     'lucas@example.com',  
//     'amelia@example.com',  
//     'benjamin@example.com', 
//     'evelyn@example.com',  
//     'elijah@example.com',  
//     'abigail@example.com',  'alexander@example.com',  
//     'emily@example.com',  
//     'james@example.com',  
//     'charlotte@example.com',  'william@example.com',  'scarlett@example.com',  'michael@example.com',  
//     'grace@example.com',  
//     'samuel@example.com',  
//     'chloe@example.com',  
//     'jackson@example.com',  
//     'zoey@example.com',  
//     'daniel@example.com',  
//     'lily@example.com'
// ];