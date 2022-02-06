<template>
  <div>
    <v-app-bar>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>



      <v-app-bar-title to= "/">Tineda de Juegos</v-app-bar-title>

      <v-spacer></v-spacer>


    </v-app-bar>
  </div>
</template>
