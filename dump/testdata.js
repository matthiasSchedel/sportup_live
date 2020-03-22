var checkDB = typeof databaseName
if (checkDB == "undefined") {
    let databaseName = "sportupdb"  // failsafe
}
db = db.getSiblingDB(databaseName)
db.events.remove({})
db.users.remove({})
db.trainers.remove({})
db.participants.remove({})
db.groups.remove({})

db.events.insert({
    _id: new ObjectId("000000000000000000000100"),
    name: "Workout 1",
    startDate: new Date("2020-03-22T15:00:00"),
    startDate: new Date("2020-03-22T16:00:00"),
    tags: ["Tanzen",],
    categories: ["Beweglichkeit"],
    difficulty: "Leicht",
    location: "Frankfurt",
    trainer: new ObjectId("000000000000000000000001"),
    language: "de",
    participants: [{
            user: new ObjectId("000000000000000000000002"),
            name: "Janine"
        }, {
            user: new ObjectId("000000000000000000000004"),
            name: "Ryan"
        }
    ],
    comments: [],
    description: "Workout number 1",
    sessionLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    paymentLink: "https://paypal.me",
    ratings: [{
        user: new ObjectId("000000000000000000000002"),
        rating: 5,
        comment: "Super training"
    }, {
        user: new ObjectId("000000000000000000000002"),
        rating: 2,
        comment: "Geht so"
    }],
    picture: "https://upload.wikimedia.org/wikipedia/en/7/76/Expendablesposter.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000101"),
    name: "Workout 2",
    startDate: new Date("2020-03-22T17:30:00"),
    startDate: new Date("2020-03-22T19:00:00"),
    tags: ["Tanzen",],
    categories: ["Kraft", "Yoga"],
    difficulty: "Profis",
    location: "Frankfurt",
    trainer: 5,
    language: "de",
    participants: [{
            user: new ObjectId("000000000000000000000001"),
            name: "Peter",
        }, {
            user: new ObjectId("000000000000000000000002"),
            name: "Janine",
        }, {
            user: new ObjectId("000000000000000000000003"),
            name: "Kerstin",
        }
    ],
    comments: [],
    description: "Workout number 2",
    sessionLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    paymentLink: "https://paypal.me",
    ratings: [{
        user: new ObjectId("000000000000000000000002"),
        rating: 4,
        comment: "Geht besser"
    }, {
        user: new ObjectId("000000000000000000000003"),
        rating: 4,
        comment: "Top"
    }],
    picture: "https://upload.wikimedia.org/wikipedia/en/7/76/Expendablesposter.jpg",
})


db.users.insert({
    _id: new ObjectId("000000000000000000000001"),
    name: "Peter",
    email: "peter_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg/395px-Peter_Dinklage_by_Gage_Skidmore.jpg",
    passwordHash: "$2b$10$bN3D/ljjc06aM2u3iLtt5OtaA05ZZABBmzneJQVKgc6OX95dDa97y"
})

db.users.insert({
    _id: new ObjectId("000000000000000000000002"),
    name: "Janine",
    email: "janine_sul@mailinator.com",
    friends: [ {
        user: new ObjectId("000000000000000000000001"),
        name: "Peter"
    }

    ],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "",
    passwordHash: "$2b$10$bN3D/ljjc06aM2u3iLtt5OtaA05ZZABBmzneJQVKgc6OX95dDa97y"
})

db.users.insert({
    _id: new ObjectId("000000000000000000000003"),
    name: "Kerstin",
    email: "kerstin_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "",
    passwordHash: "$2b$10$bN3D/ljjc06aM2u3iLtt5OtaA05ZZABBmzneJQVKgc6OX95dDa97y"
})

db.users.insert({
    _id: new ObjectId("000000000000000000000004"),
    name: "Ryan",
    email: "ryan_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "",
    passwordHash: "$2b$10$bN3D/ljjc06aM2u3iLtt5OtaA05ZZABBmzneJQVKgc6OX95dDa97y"
})

db.users.insert({
    _id: new ObjectId("000000000000000000000005"),
    name: "Arnold",
    email: "Arnie_sul@mailinator.com",
    friends: [],
    acceptedGDPR: [{
        acceptedDate: new Date(),
        acceptedVersion: "1.0"
    }],
    profilePic: "",
    passwordHash: "$2b$10$bN3D/ljjc06aM2u3iLtt5OtaA05ZZABBmzneJQVKgc6OX95dDa97y"
})

db.trainers.insert({
    user: new ObjectId("000000000000000000000001"),
    bio: "From England, expert in drinking and knowing things",
    location: "Frankfurt",
    socialLinks: [{
        network: "facebook",
        link: "https://facebook.com/"
    }, {
        network: "instagram",
        link: "https://instagram.com/"
    }],
    languages: ["de"],
    paymentLink: "https://paypal.me"
})
db.trainers.insert({
    user: new ObjectId("000000000000000000000005"),
    bio: "Österreicher, full body workouts",
    location: "Frankfurt",
    socialLinks: [{
        network: "facebook",
        link: "https://facebook.com/"
    }, {
        network: "instagram",
        link: "https://instagram.com/"
    }],
    languages: ["de", "at"],
    paymentLink: "https://paypal.me"
})

db.participants.insert({
    user: new ObjectId("000000000000000000000002"),
    events: [{
        event: new ObjectId("000000000000000000000100"),
        name: "Workout 1",
        startDate: new Date("2020-03-22T15:00:00")
    }, {
        event: new ObjectId("000000000000000000000101"),
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")
    }],
    groups: [{
        group: new ObjectId("000000000000000000000200"),
        name: "Frühsportis"
    }]

})

db.participants.insert({
    user: new ObjectId("000000000000000000000001"),
    events: [{
        event: new ObjectId("000000000000000000000101"),
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")
    }]
})

db.participants.insert({
    user: new ObjectId("000000000000000000000003"),
    events: [{
        event: new ObjectId("000000000000000000000101"),
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")
    }]
})

db.participants.insert({
    user: new ObjectId("000000000000000000000004"),
    events: [{
        event: new ObjectId("000000000000000000000100"),
        name: "Workout 1",
        startDate: new Date("2020-03-22T15:00:00")
    }]
})

db.groups.insert({
    _id: new ObjectId("000000000000000000000200"),
    name: "Frühsportis",
    trainers: [{
        user: new ObjectId("000000000000000000000001"),
        name: "Peter"
    }],
    participants: [{
        user: new ObjectId("000000000000000000000002"),
        name: "Janine"
    }, {
        user: new ObjectId("000000000000000000000005"),
        name: "Arnold"
    }],
    description: "Gruppe für Sport ab 6",
    picture: "https://upload.wikimedia.org/wikipedia/en/7/76/Expendablesposter.jpg",
    categories: ["PowerYoga", "Crossfit"],
    events: [{
        event: new ObjectId("000000000000000000000100"),
        name: "Workout 1",
        startDate: new Date("2020-03-22T15:00:00")
    }, {
        event: new ObjectId("000000000000000000000101"),
        name: "Workout 2",
        startDate: new Date("2020-03-22T17:30:00")
    }],


})