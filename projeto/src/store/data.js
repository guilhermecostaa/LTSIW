module.exports = {
    users: [
        { id: 1, name: "Guilherme", number: "9170193", password: "1234", userType: "admin", ucs: [], activities: [] },
        { id: 2, name: "Nuno", number: "9170197", password: "1234", userType: "student", ucs: [1, 2, 3], activities: [] },
        { id: 3, name: "Gustavo", number: "9170196", password: "1234", userType: "teacher", ucs: [], activities: [] }
    ],
    ucs: [
        { id: 1, name: "Programação Web I", abbreviation: "PWI", teacher: 3, year: 2, semester: 1},
        { id: 2, name: "Computação Móvel e Ubíqua", abbreviation: "CMU", teacher: 3, year: 3 , semester: 1},
        { id: 3, name: "Programação Web II", abbreviation: "PWII", teacher: 3, year: 2, semester: 2},
    ],
    grades: [
        { id: 1, idStudent: 2, idUc: 3, grade: 12 },
        { id: 2, idStudent: 2, idUc: 1, grade: 11 },
        { id: 3, idStudent: 2, idUc: 2, grade: 10 }
    ],
    activities: [
        {
            id: 1,
            name: "Vue CLI 3",
            type: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            photo: "https://eventos.esmad.ipp.pt/plug-in/img/bg-masthead.jpg"
        },
        {
            id: 2,
            name: "Plug-in",
            type: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            photo: "https://eventos.esmad.ipp.pt/plug-in/img/bg-masthead.jpg"
        },
        {
            id: 3,
            name: "Vue CLI 3",
            type: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            classroom: "B203",
            hourStart: "09:30",
            hourEnd: "11:00",
            dateStart: "2018-11-20",
            durationDays: 1,
            photo: "https://eventos.esmad.ipp.pt/plug-in/img/bg-masthead.jpg"
        }
    ],
    typeActivities: [
        {
            id: 1,
            name: "Projeto Interdisciplinar"
        },
        {
            id: 2,
            name: "Outros Projetos"
        },
        {
            id: 3,
            name: "Eventos"
        },
        {
            id: 4,
            name: "Outras atividades"
        }
    ]
}