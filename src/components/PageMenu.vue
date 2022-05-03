<template>
  <nav class="collapse d-lg-block" id="menu">
      <div class="card ">
        <div class="card-body">
          <ul class="nav flex-column nav-pills">
            <li><router-link class="nav-link" to="/"><svg><use xlink:href="../assets/img/icons.svg#list"></use></svg> Lista</router-link></li>
            <li><router-link class="nav-link" to="/kedvencek"><svg><use xlink:href="../assets/img/icons.svg#star"></use></svg> Kedvencek</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
</template>