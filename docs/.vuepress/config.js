// const { auto } = require("async");

module.exports = {
    title: 'Dlubal Dev Docs',
    base: '/.github/',
    themeConfig: {
        logo: '/images/dev_docs.png',
        nav: [
            { text: 'Home', link: '/'},
            { text: 'User Guide',
              items: [
                {text: 'Quick Start', link: '/guide/'},
                {text: 'Python', link: '/guide/ready'},
                {text: 'Articles', link: '/guide/Articles'},
                {text: '.NET', link: '/guide/netintro'},
                {text: 'JavaScript', link: '/guide/MD/AnalysisSettings'},
                {text: 'Tutorials', link: '/guide/tutorialintro'},
              ]
            },
            { text: 'About', link: 'https://www.dlubal.com/en'},
            { text: 'Github', link: 'https://github.com/Dlubal-Software/RFEM_Python_Client'}
        ],
        sidebar: {
            "/guide/": [
              {
                title: "Quick Start 🏃‍♀️",
                collapsable: false,
                children: ["", "getStarted"]
              },
              {
                title: "Python HLF 🐍",
                collapsable: false,
                children: ["ready", "init", "RFEM.BasicObjects", "RFEM.ConcreteDesign", "RFEM.Imperfections", "RFEM.LoadCasesAndCombinations", "RFEM.Loads", "RFEM.SpecialObjects", "RFEM.TypesforConcreteDesign", "RFEM.TypesForLines", "RFEM.TypesForMembers", "RFEM.TypesForNodes", "RFEM.TypesForSolids", "RFEM.TypesForSpecialObjects", "RFEM.TypesForSteelDesign", "RFEM.TypesForSurfaces", "Articles"]
              },
              {
                title: ".NET HLF 🕸️",
                collapsable: false,
                children: ["netintro"]
              },
              {
                title: "JavaScript Commands 📜",
                collapsable: false,
                children: ["MD/AnalysisSettings", "MD/BasicObjects", "MD/GuideObjects", "MD/Loading", "MD/Loads", "MD/LoadWizards", "MD/SpecialObjects", "MD/TypesForLines", "MD/TypesForMembers", "MD/TypesForNodes", "MD/TypesForSolids", "MD/TypesForSurfaces"]
              },
              {
                title: "Tutorials 🗼",
                collapsable: false,
                children: ["tutorialintro"]
              },
            ]
        },
        searchPlaceholder: 'Search...',
        smoothScroll: true
    }
}
