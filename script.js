document.addEventListener('DOMContentLoaded', () => {
    const adElement = document.getElementById('ad')
    const textoElement = document.getElementById('texto')
    const gerarButton = document.getElementById('gerar')
    const url = 'https://api.adviceslip.com/advice'
  
    async function advice() {
      const res = await fetch(url)
      const { slip: { ad, advice } } = await res.json()
      adElement.innerText = `#${ad}`
      textoElement.innerText = `"${advice}"`
    }
  
    advice()
  
    gerarButton.addEventListener("click", advice)
  });
  