<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">PORTAFOLIO |</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/mi">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/intro"> Introduccion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/guia">Calendario</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Computos
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" to="/uno">Computo I</router-link></li>
            <li><router-link class="dropdown-item" to="/dos">Computo II</router-link></li>
            <li><router-link class="dropdown-item" to="/tres">Computo III</router-link></li>
          
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="background-image">
    <!-- Contenido de tu vista aquí -->
    <router-view/>
  </div>



</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #545353;
}


.background-image {
  background-image: url('../src/assets/img/fondo.png');
  background-attachment: fixed;
  background-size: cover;
}


</style>
