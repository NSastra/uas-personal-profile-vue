<template>
    <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Personal Profile</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"> 
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pendidikan">Riwayat Pendidikan</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kerja">Pengalaman Kerja</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kontak">Kontak</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b> Dashboard Data </b>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <router-link class="nav-link" to="/aboutback">About Me</router-link> </li>
              <li> <router-link class="nav-link" to="/pendidikanback">Riwayat Pendidikan</router-link> </li>
              <li> <router-link class="nav-link" to="/kerjaback">Pengalaman Kerja</router-link> </li>
              <li> <router-link class="nav-link" to="/kontakback">Kontak</router-link> </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>