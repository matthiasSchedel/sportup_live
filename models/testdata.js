db = db.getSiblingDB("sportup")
db.events.remove({})
db.users.remove({})
db.trainers.remove({})
db.participants.remove({})
db.groups.remove({})

db.events.insert({
    _id: 100,
    name: "Workout 1",
    startDate: new Date("2020-03-22T15:00:00"),
    startDate: new Date("2020-03-22T16:00:00"),
    tags: ["Tanzen",],
    category: "Beweglichkeit",
    difficulty: "Leicht",
    location: "Frankfurt",
    trainer: 1,
    language: "de",
    participants: [{
            user: 2,
            name: "Janine",
            hasPayed: true
        }, {
            user: 4,
            name: "Ryan",
            hasPayed: false
        }
    ],
    comments: [],
    description: "Workout number 1",
    sessionLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    paymentLink: "https://paypal.me"
})

db.events.insert({
    _id: 101,
    name: "Workout 2",
    startDate: new Date("2020-03-22T17:30:00"),
    startDate: new Date("2020-03-22T19:00:00"),
    tags: ["Tanzen",],
    category: "Kraft",
    difficulty: "Profis",
    location: "Frankfurt",
    trainer: 5,
    language: "de",
    participants: [{
            user: 1,
            name: "Peter",
            hasPayed: true
        }, {
            user: 2,
            name: "Janine",
            hasPayed: true
        }, {
            user: 3,
            name: "Kerstin",
            hasPayed: false
        }
    ],
    comments: [],
    description: "Workout number 2",
    sessionLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    paymentLink: "https://paypal.me"
})


db.users.insert({
    _id: 1,
    name: "Peter",
    email: "peter_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg/395px-Peter_Dinklage_by_Gage_Skidmore.jpg"
})

db.users.insert({
    _id: 2,
    name: "Janine",
    email: "janine_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: ""
})

db.users.insert({
    _id: 3,
    name: "Kerstin",
    email: "kerstin_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: ""
})

db.users.insert({
    _id: 4,
    name: "Ryan",
    email: "ryan_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: ""
})

db.users.insert({
    _id: 5,
    name: "Arnold",
    email: "Arnie_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: ""
})

db.trainers.insert({
    user: 1,
    bio: "From England, expert in drinking and knowing things",
    location: "Frankfurt",
    socialLinks: [{
        network: "facebook",
        link: "https://facebook.com/"
    }, {
        network: "instagram",
        link: "https://instagram.com/" 
    }],
    language: "de",
    ratings: [{
        user: 2,
        rating: 5,
        comment: "Super training"
    }, {
        user: 3,
        rating: 2,
        comment: "Geht so"
    }],
    paymentLink: "https://paypal.me"
})
db.trainers.insert({
    user: 5,
    bio: "Österreicher, full body workouts",
    location: "Frankfurt",
    socialLinks: [{
        network: "facebook",
        link: "https://facebook.com/"
    }, {
        network: "instagram",
        link: "https://instagram.com/" 
    }],
    language: "de",
    ratings: [{
        user: 2,
        rating: 4,
        comment: "Geht besser"
    }, {
        user: 4,
        rating: 4,
        comment: "Top"
    }],
    paymentLink: "https://paypal.me"
})

db.participants.insert({
    user: 2,
    events: [{
        event: 100,
        name: "Workout 1",
        startDate: new Date("2020-03-22T15:00:00")
    }, {
        event: 101,
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")        
    }]
})

db.participants.insert({
    user: 1,
    events: [{
        event: 101,
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")        
    }]
})

db.participants.insert({
    user: 3,
    events: [{
        event: 101,
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")        
    }]
})

db.participants.insert({
    user: 4,
    events: [{
        event: 100,
        name: "Workout 1",
        startDate: new Date("2020-03-22T15:00:00")       
    }]
})

db.groups.insert({
    name: "Frühsportis",
    trainer: [{
        user: 1,
        name: "Peter"
    }],
    participants: [{
        user: 2,
        name: "Janine"
    }, {
        user: 5,
        name: "Arnold"
    }]
})