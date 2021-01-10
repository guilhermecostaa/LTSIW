module.exports = {
    users: [
        { id: 1, name: "Guilherme", number: "9170193", password: "1234", userType: "admin" },
        { id: 2, name: "Nuno", number: "9170197", password: "1234", userType: "student" },
        { id: 3, name: "Gustavo", number: "9170196", password: "1234", userType: "teacher" }
    ],
    ucs: [
        { id: 1, name: "Programação Web I", abbreviation: "PWI" },
        { id: 2, name: "Base de Dados", abbreviation: "BD" },
        { id: 3, name: "Sistemas Gráficos", abbreviation: "SG" },
        { id: 4, name: "Serviços Interface para a Cloud", abbreviation: "SIC" },
        { id: 5, name: "Prototipagem Avançada em Plataformas Digitais", abbreviation: "PAPD" },
        { id: 6, name: "Inovação e Empreendorismo", abbreviation: "IE" },
        { id: 7, name: "Computação Móvel e Ubíqua", abbreviation: "CMU" }
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
            dateEnd: "2018-11-20",
            picture: {
                thumbnail: "https://i.imgur.com/9kTBtgg.jpg",
                poster: {
                    url: "https://i.imgur.com/MXuI7WL.jpg",
                    orientation: "Vertical"
                },
                gallery: [
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_10.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_07.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_08.jpg"
                ]
            }
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
            dateEnd: "2018-11-20",
            picture: {
                thumbnail: "https://i.imgur.com/9kTBtgg.jpg",
                poster: {
                    url: "https://i.imgur.com/MXuI7WL.jpg",
                    orientation: "Vertical"
                },
                gallery: [
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_10.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_07.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_08.jpg"
                ]
            }
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
            dateEnd: "2018-11-20",
            picture: {
                thumbnail: "https://i.imgur.com/9kTBtgg.jpg",
                poster: {
                    url: "https://i.imgur.com/MXuI7WL.jpg",
                    orientation: "Vertical"
                },
                gallery: [
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_10.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_07.jpg",
                    "http://eventos.esmad.ipp.pt/plug-in/img/galeria/gal_08.jpg"
                ]
            }
        }
    ]
}