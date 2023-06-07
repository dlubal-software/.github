const { auto } = require("async");

module.exports = {
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: 'Dlubal Dev Docs',
    base: '/.github/',
    plugins: ['@vuepress/back-to-top', ['vuepress-plugin-code-copy', {align: 'top'}]],
    themeConfig: {
        logo: '/images/dev_docs.png',
        nav: [
            { text: 'Home', link: '/'},
            { text: 'User Guide',
              items: [
                {text: 'Quick Start', link: '/guide/'},
                {text: 'RFEM Python HLF', link: '/guide/ready'},
                {text: 'RSTAB Python HLF', link: '/guide/RSTAB.BasicObjects'},
                {text: 'RSECTION Python HLF', link: '/guide/RSECTION.BasicObjects'},
                {text: '.NET', link: '/guide/netintro'},
                {text: 'JavaScript HLF', link: '/guide/MD/AnalysisSettings'},
                {text: 'Articles', link: '/guide/Articles'},
                {text: 'Tutorials', link: '/guide/tutorialintro'},
              ]
            },
            { text: 'About', link: 'https://www.dlubal.com/en'},
            { text: 'Github', link: 'https://github.com/Dlubal-Software/RFEM_Python_Client'}
        ],
        sidebar: {
            "/guide/": [
              {
                title: "Quick Start",
                collapsable: false,
                children: ["", "getStarted"]
              },
              {
                title: "RFEM Python HLF",
                collapsable: true,
                children: ["ready", "init", "RFEM.BasicObjects", "RFEM.ConcreteDesign", "RFEM.DynamicLoads", "RFEM.GuideObjects", "RFEM.Imperfections", "RFEM.LoadCasesAndCombinations", "RFEM.Loads", "RFEM.SpecialObjects", "RFEM.SteelDesign", "RFEM.TimberDesign", "RFEM.TypesForAluminumDesign", "RFEM.TypesforConcreteDesign", "RFEM.TypesForLines", "RFEM.TypesForMembers", "RFEM.TypesForNodes", "RFEM.TypesForSolids", "RFEM.TypesForSpecialObjects", "RFEM.TypesForSteelDesign", "RFEM.TypesForSurfaces", "RFEM.TypesForTimberDesign"]
              },
              {
                title: "RSTAB Python HLF",
                collapsable: true,
                children: ["RSTAB.BasicObjects", "RSTAB.ConcreteDesign", "RSTAB.DynamicLoads", "RSTAB.GuideObjects", "RSTAB.Imperfections", "RSTAB.LoadCasesAndCombinations", "RSTAB.Loads", "RSTAB.SpecialObjects", "RSTAB.SteelDesign", "RSTAB.TimberDesign", "RSTAB.TypesForAluminumDesign", "RSTAB.TypesforConcreteDesign", "RSTAB.TypesForMembers", "RSTAB.TypesForNodes", "RSTAB.TypesForSpecialObjects", "RSTAB.TypesForSteelDesign", "RSTAB.TypesForTimberDesign"]
              },
              {
                title: "RSECTION Python HLF",
                collapsable: true,
                children: ["RSECTION.BasicObjects", "RSECTION.LoadCasesAndCombinations"]
              },
              {
                title: ".NET HLF",
                collapsable: true,
                children: ["net/netArticle"]
              },
              {
                title: "JavaScript Commands",
                collapsable: true,
                children: ["MD/AnalysisSettings", "MD/BasicObjects", "MD/GuideObjects", "MD/Imperfections", "MD/InternalForces", "MD/Loading", "MD/Loads", "MD/LoadWizards", "MD/SpecialObjects", "MD/TypesForLines", "MD/TypesForMembers", "MD/TypesForNodes", "MD/TypesForSolids", "MD/TypesForSurfaces"]
              },
              {
                title: "Articles",
                collapsable: true,
                children: ["Articles", "MD/JSarticles", "MD/introblock", "MD/functionforBlocks"]
              },
              {
                title: "Tutorials",
                collapsable: true,
                children: ["tutorialintro"]
              },
            ]
        },
        searchPlaceholder: 'Search...',
        searchMaxSuggestions: 10,
        smoothScroll: true
    }
}
