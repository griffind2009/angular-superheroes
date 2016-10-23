angular
  .module("superheroApp", [])
  .controller("superheroesCtrl", [ superheroController ])

  function superheroController() {
    this.superheroes = superheroData
  }

let superheroData = [
  {name: "Spiderman", number: "555-WEBS", affiliation: "Marvel", img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTA1ZGVmYzAtNjY1Yi00OTY3LWIxODItMTBhMjU3OTM2OGRmXkEyXkFqcGdeQXVyNjYzNjI1Njc@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {name: "Batman", number: "555-DARK", affiliation: "DC", img: "https://s-media-cache-ak0.pinimg.com/236x/43/4b/c1/434bc1fa72cb6da2674baf9cd31de35b.jpg"},
  {name: "Green Arrow", number: "555-GREN", affiliation: "DC", img: "http://img.cinemablend.com/cb/d/2/f/f/4/a/d2ff4a4b810264b39408e2c6d81b28b4f95225a1703be33db5ed9dbd27551930.jpg"},
  {name: "Wonder Woman", number: "555-GOLD", affiliation: "DC", img: "https://s-media-cache-ak0.pinimg.com/236x/9a/1b/2b/9a1b2bd8e595c1c8ee497547dda53db5.jpg"},
  {name: "Wolverine", number: "555-XMEN", affiliation: "Marvel", img: "https://i.annihil.us/u/prod/marvel//universe3zx/images/d/df/Jstephens--Wolverine_James_detail.jpg"},
  {name: "Nightcrawler", number: "555-XMEN", affiliation: "Marvel", img: "http://cdn.hitfix.com/photos/6024238/Nightcrawler-X-Men_article_story_large.png"},
]
