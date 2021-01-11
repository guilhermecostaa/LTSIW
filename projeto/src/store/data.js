module.exports = {
    users: [
        { id: 1, name: "Guilherme", number: "9170193", password: "1234", userType: "admin" },
        { id: 2, name: "Nuno", number: "9170197", password: "1234", userType: "student" },
        { id: 3, name: "Gustavo", number: "9170196", password: "1234", userType: "teacher" }
    ],
    ucs: [
        { id: 1, name: "Programação Web I", abbreviation: "PWI", teacher: 3},
        { id: 2, name: "Computação Móvel e Ubíqua", abbreviation: "CMU", teacher: 3},
        { id: 3, name: "Programação Web II", abbreviation: "PWII", teacher: 3},
    ],
    activities: [
        {
            id: 1,
            name: "Vue CLI 3",
            category: "Seminário",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            dateEnd: "2018-11-20"
        },
        {
            id: 2,
            name: "Plug-in",
            category: "Seminário",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            dateEnd: "2018-11-20"
        },
        {
            id: 3,
            name: "Vue CLI 3",
            category: "Seminário",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            dateEnd: "2018-11-20"
        }
    ]
}