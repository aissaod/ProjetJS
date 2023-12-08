<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Accueil</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <router-link to="/categorie" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catégorie</router-link>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Souris Gamer</a></li>
                  <li><a class="dropdown-item" href="#">Clavier Gamer</a></li>
                  <li><a class="dropdown-item" href="#">Casque Gamer</a></li>
                  <li><a class="dropdown-item" href="#">Écran Gamer</a></li>
                  <li><a class="dropdown-item" href="#">Tapis de souris</a></li>
                  <li><a class="dropdown-item" href="#">Chaise Gamer</a></li>
                  <li><a class="dropdown-item" href="#">PC Gamer assemblé</a></li>
                  <li><a class="dropdown-item" href="#">PC Portable gamer</a></li>
                </ul>
              </li>
                <!-- Liens de catégorie ici -->
        
            <li class="nav-item dropdown">
              <router-link to="/prix" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Prix</router-link>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">PC GAMER 1000€</a></li>
                  <li><a class="dropdown-item" href="#">PC GAMER 1200€</a></li>
                  <li><a class="dropdown-item" href="#">PC GAMER 1500€</a></li>
                  <li><a class="dropdown-item" href="#">PC GAMER 1700€</a></li>
                  <li><a class="dropdown-item" href="#">PC GAMER 2000€</a></li>
                  <li><a class="dropdown-item" href="#">PC GAMER 2500€</a></li>
                </ul>
              </li>
            
            <li class="nav-item dropdown">
              <router-link to="/dropdown" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</router-link>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Search bar and buttons -->
        <div class="d-flex">
          <form class="d-flex me-auto">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <router-link to="/Connection" class="btn btn-outline-info">Se connecter</router-link>
          <router-link to="/panier" class="btn btn-outline-primary">Panier</router-link>
        </div>
      </div>
    </nav>
        
    <!-- Autres composants Vue ici -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
}
</style>
