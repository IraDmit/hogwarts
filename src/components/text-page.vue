<template>
  <section class="list-wrp container">
    {{}}
    <div class="upPanel">
      <h1>{{ slug }}</h1>
      <div class="filter">
        <p>Filter by {{ currentFaculty }}</p>
        <div class="popup-filter">
          <div class="faculty" @click="filterPerson()">All</div>
          <div class="faculty" @click="filterPerson()">Gryffindor</div>
          <div class="faculty" @click="filterPerson()">Slytherin</div>
          <div class="faculty" @click="filterPerson()">Hufflepuff</div>
          <div class="faculty" @click="filterPerson()">Ravenclaw</div>
        </div>
      </div>
    </div>
    <ul class="list">
      <li
        v-for="(item, idx) in data"
        :key="'people' + idx"
        class="listItem"
        @click="openModal(item.id)"
      >
        <img :src="item.image" alt="photo" v-if="item.image" @click="idPerson = item.id" />
        <img src="@/assets/img/wizard.png" alt="wizard" v-else @click="idPerson = item.id" />
        <div class="name">
          <span>
            {{ item.name }}
          </span>
        </div>
      </li>
    </ul>
    <app-model
      :idPerson="idPerson"
      v-if="idPerson && isOpen"
      class="model-person"
      @close="isOpen = false"
    />
  </section>
</template>

<script setup>
import appModel from './app-model.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref(null)
const slug = ref(route.name)
const idPerson = ref(null)
const isOpen = ref(false)
const currentFaculty = ref('All')
const allPerson = ref()
const openPopUp = ref(false)
const openModal = (id) => {
  idPerson.value = id
  isOpen.value = true
}

const filterPerson = () => {
  currentFaculty.value = event.target.innerHTML
  if (event.target.innerHTML === 'All') {
    return (data.value = allPerson.value)
  } else {
    data.value = allPerson.value.filter((person) => {
      if (person.house === event.target.innerHTML) return person
    })
  }
}

const fetchData = async () => {
  await fetch(`https://hp-api.onrender.com/api/characters/${slug.value}`)
    .then((res) => res.json())
    .then((response) => {
      data.value = response
      allPerson.value = response
    })
}

onMounted(async () => {
  await fetchData()
})
</script>

<style lang="scss" scoped>
.list-wrp {
  margin-top: 95px;

  color: #fff;
  font-family: 'Sofia Pro';
  .upPanel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    position: relative;
    h1 {
      font-size: 40px;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    @media (max-width: 578px) {
      h1 {
        font-size: 30px;
      }
      .filter {
        font-size: 24px;
      }
    }
    .filter {
      font-size: 30px;
      .popup-filter {
        position: absolute;
        top: 88%;
        right: 0;
        z-index: 20;
        opacity: 0;
        visibility: hidden;
        background-color: #172f45;
        padding: 10px;
        font-size: 22px;
        max-width: 160px;
        border-radius: 10px;
        .faculty {
          padding: 7px;
          cursor: pointer;
        }
        @media (max-width: 490px) {
          font-size: 18px;
        }
      }
      &:hover {
        .popup-filter {
          opacity: 1;
          visibility: visible;
        }
      }
      @media (max-width: 490px) {
        font-size: 22px;
      }
    }
  }
  .list {
    list-style: none;
    padding-left: 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
    .listItem {
      max-height: 400px;
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 100%;
        max-width: 100%;
        width: 100%;
        object-fit: cover;
        pointer-events: none;
      }
      .name {
        position: absolute;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        bottom: -75px;
        width: 100%;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        @media (max-width: 1050px) {
          bottom: -120px;
        }
      }
      &:hover {
        .name {
          bottom: 0px;
        }
      }
    }
    @media (max-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 630px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .model-person {
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
