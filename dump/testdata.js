var checkDB = typeof databaseName
if (checkDB == "undefined") {
    databaseName = "sportupdb"  // failsafe
}
db = db.getSiblingDB(databaseName)
db.events.remove({})
db.users.remove({})
db.trainers.remove({})
db.participants.remove({})
db.groups.remove({})

db.events.insert({
    _id: new ObjectId("000000000000000000000100"),
    name: "Schwitz-Fit",
    startDate: new Date("2020-03-22T15:00:00"),
    endDate: new Date("2020-03-22T16:00:00"),
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
    description: "Ich bring dich zuhause so richtig ins Schwitzen, ganz ohne große Ausrüstung.",
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
    picture: "img/demo/events/bruce-mars-WGN6ZEFEZbs-unsplash.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000101"),
    name: "The next Arnie",
    startDate: new Date("2020-03-22T17:30:00"),
    endDate: new Date("2020-03-22T19:00:00"),
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
    description: "Power-Workout für die nächsten Arnies! Schnapp dir die Hantel und mach mit!",
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
    picture: "img/demo/events/man-holding-black-dumbbell-1229356.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000102"),
    name: "Rückenschule",
    startDate: new Date("2020-03-22T20:00:00"),
    endDate: new Date("2020-03-22T21:00:00"),
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
    description: "Kerstin schaut sich live deine Übungen an und hilft dir die richtige Pose zu finden!",
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
    picture: "img/demo/events/event3.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000103"),
    name: "Tatort-Yoga",
    startDate: new Date("2020-03-22T20:15:00"),
    endDate: new Date("2020-03-22T21:45:00"),
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
    description: "Lasst uns gemeinsam Tatort schauen und Yoga machen! Perfect Sunday evening 😊",
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
    picture: "img/demo/events/event4.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000104"),
    name: "Get on your knees",
    startDate: new Date("2020-03-23T08:00:00"),
    endDate: new Date("2020-03-23T08:45:00"),
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
    description: "Montagsworkout zum Niederknien! Für Power die ganze Woche!",
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
    picture: "img/demo/events/event5.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000105"),
    name: "Full Body Workout",
    startDate: new Date("2020-03-23T10:00:00"),
    endDate: new Date("2020-03-23T11:00:00"),
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
    description: "Abwechslung beim Full Body Workout mit Steffi. Spaß garantiert!",
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
    picture: "img/demo/events/event6.jpg",
})

db.events.insert({
    _id: new ObjectId("000000000000000000000106"),
    name: "X-Fit at Home",
    startDate: new Date("2020-03-23T13:30:00"),
    endDate: new Date("2020-03-23T15:00:00"),
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
    description: "Wir zeigen dir wie du mit allem was der Hamster gekauft hat so richtig powern kannst.",
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
    picture: "img/demo/events/event7.jpg",
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
    description: "Workouts die den Tag so richtig zum Starten bringen. Immer um 6 Uhr.",
    picture: "img/demo/nik-macmillan-myhNbM3PCg4-unsplash.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000201"),
    name: "MittagsPOWER",
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
    description: "Bring deine Muskeln zum Brennen, jeden Mittag mit Max und Tina!",
    picture: "img/demo/jonathan-borba-R0y_bEUjiOM-unsplash.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000203"),
    name: "Capoeira de Luz",
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
    description: "Halte deine Capoeira-Skills fit! Jeden Mo, Mi und Fr ab 20 Uhr.",
    picture: "img/demo/people-dancing-in-gym-3340318.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000205"),
    name: "Ruderclub Rödelheim e.V.",
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
    description: "'s lebbe geht weida, und wenn wir drinnen rudern!",
    picture: "img/demo/man-using-stationary-bike-897064.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000206"),
    name: "Hip Hop Hamburg Klub",
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
    description: "Die besten Moves zu den fettsten Beats! Jeden Tag!",
    picture: "img/demo/dancing-dance-people-hip-hop-12312.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000202"),
    name: "Max Plan(c)k Challenge",
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
    description: "Max Planks für alle vom Max Planck. Und Gäste.",
    picture: "img/demo/woman-doing-push-ups-2780762.jpg",
    categories: ["PowerYoga", "Crossfit"]

})

db.groups.insert({
    _id: new ObjectId("000000000000000000000204"),
    name: "Geräteschule",
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
    description: "Wir zeigen euch den richtigen Einsatz aller Heimsportgeräte!",
    picture: "img/demo/color-colour-fitness-health-39671.jpg",
    categories: ["PowerYoga", "Crossfit"]

})