document.querySelector('#btnFindEpisode').addEventListener('click', getFetch)
document.querySelector('#flower1').addEventListener('click', flowerClick)
document.querySelector('#flower2').addEventListener('click', flowerClick)

const url = 'https://imdb-api.com/en/API/SeasonEpisodes/k_pspnf3ca/tt8910922/'
let flowerCount = 0

function getFetch(){
    let season = document.querySelector('#inputSeason').value
    fetch(url + season)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let episode =  document.querySelector('#inputEpisode').value 
      episode -= 1
      

      document.querySelector('#seasonNumber').innerText = season
      document.querySelector('#episodeName').innerText = data.episodes[episode].title
      document.querySelector('#episodePlot').innerText = data.episodes[episode].plot
      document.querySelector('#imgEpisode').src = data.episodes[episode].image
      setTimeout(document.querySelector('#episodePlot').classList.remove('hidden'), 400)
      setTimeout(document.querySelector('#episodeName').classList.remove('hidden'), 400)
      setTimeout(document.querySelector('#imgEpisode').classList.remove('hidden'), 400)
      setTimeout(document.querySelector('#seasonNumber').classList.remove('hidden'), 1000)


      

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
}

function flowerClick(){
    flowerCount++
    if (flowerCount > 10){
        document.querySelector('#imgRick').classList.remove('hidden')
    }    

}