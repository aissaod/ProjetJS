<template>
    <header>
      
    </header>

    <div class="bg-blue"></div>
      <div id="TitleSite">
        <h1>FRENCH HARDWARE</h1>
      </div>

      <div id="TitleCitation">
        <p>Votre config PC Gamer au prix le plus bas !</p>
      </div>
      
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-block w-100">
                  <img src="../assets/home.png" alt="..." class="img-size">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100">
                  <img src="../assets/pc.png" alt="..." class="img-size">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100">
                  <img src="../assets/search.png" alt="..." class="img-size">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/pc1000.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RTX 3060 TI 1000€</h5>
              <p class="card-text">Offre des performances exceptionnelles grâce à sa carte graphique haut de gamme. Avec une configuration optimisée, il garantit une expérience de jeu immersive. </p>
              <a href="../components/pc1000.vue" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/pc1200.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RTX 4060 TI 1200€</h5>
              <p class="card-text"> Profitez d'une expérience de jeu optimisée. Doté de composants performants, ce PC offre des performances fiables pour répondre aux exigences des jeux modernes.</p>
              <a href="../components/pc1200.vue" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/PC1500.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RTX 4070 TI 1500€</h5>
              <p class="card-text">Offre une expérience de jeu exceptionnelle. Équipé d'une carte graphique puissante et d'une configuration robuste, ce PC vous permet de profiter de jeux gourmands en ressources avec une qualité visuelle remarquable.</p>
              <a href="../components/pc1500.vue" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/pc1900.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RTX 7900 XT 1900€</h5>
              <p class="card-text">Conçu pour les gamers exigeants. </p>
              <a href="#" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/pc2000.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RTX 4090 TI 2000€</h5>
              <p class="card-text">Doté de composants de pointe, ce PC offre des performances extrêmes pour les jeux les plus exigeants. </p>
              <a href="#" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="../assets/pc2500.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PC GAMER RX 4070 TI 2500€</h5>
              <p class="card-text">Ce PC est un monstre de puissance. Sa carte graphique performante et sa configuration haut de gamme garantissent des performances exceptionnelles.</p>
              <a href="#" class="btn btn-primary">Voir la config</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeVue',
};
</script>



<style scoped>
.navbar {
  background: #333;
  padding: 10px 0;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.navbar li {
  display: inline;
  margin-right: 20px;
}

.navbar a {
  text-decoration: none;
  color: black; /* Change text color to black */
  font-weight: bold;
}

#TitleSite {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

#TitleSite h1 {
  font-size: 3em;
  font-family: 'Roboto Condensed', sans-serif;
}

#TitleCitation {
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  font-family: 'Roboto Condensed', sans-serif;
  margin-bottom: 40px;
}

/* Your styles here */

.slider-container {
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 300%;
}

.slide {
  flex: 1;
  transition: transform 0.5s ease-in-out;
}

.slide img {
  width: 100%;
}

.slide-input {
  opacity: 0;
}

[id^="slide"]:checked + .slide {
  transform: translateX(-100%);
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.controls label {
  cursor: pointer;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #000000;
  border-radius: 50%;
  margin: 0 5px;
}

.controls label:hover,
.controls label:focus {
  background: #1c87c9;
}

.img-size {
  width: 100%;
  height: 90vh;
}
.bg-blue {
  background-color: rgb(60, 60, 222); /* ou toute autre nuance de bleu de votre choix */
}
</style>