<template>
  <section class="faculty" v-if="facultiesStore[slug]" :style="{ '--bg-color': info?.color }">
    <div class="faculty-wrp">
      <h1 class="name">{{ info?.title }}</h1>

      <div v-html="info?.desc" class="desc"></div>
    </div>
    <div class="studentsHouse">
      <div class="upPanel">
        <h2>Our students and graduates</h2>
        <router-link to="/" class="linkStud">View all students</router-link>
      </div>
      <ul class="students" v-if="students">
        <li class="student" v-for="idx in imagesCountOnPage" :key="'student' + idx">
          <img :src="students[idx - 1].image" alt="img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFacultiesStore } from '@/stores/faculties'

const facultiesStore = useFacultiesStore()
const students = ref(null)
const route = useRoute()
const slug = ref(route.params.slug)
const imageWidth = ref(340)
const info = ref(facultiesStore[slug.value])

const fetchHouseStudents = async () => {
  await fetch(`https://hp-api.onrender.com/api/characters/house/${slug.value}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((response) => {
      students.value = response
    })
}

const imagesCountOnPage = computed(() => {
  return Math.floor(window.innerWidth / imageWidth.value)
})

onMounted(async () => {
  await fetchHouseStudents()
  console.log(facultiesStore[slug.value])
})
</script>

<style lang="scss" scoped>
.faculty {
  background: -webkit-linear-gradient(180deg, var(--bg-color) 61%, rgb(7, 15, 23) 100%);
  background: -moz-linear-gradient(180deg, var(--bg-color) 61%, rgb(7, 15, 23) 100%);
  background: linear-gradient(180deg, var(--bg-color) 61%, rgb(7, 15, 23) 100%);

  padding-top: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  grid-gap: 120px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 35px;
  .desc::v-deep {
    .image {
      float: right;
      height: 500px;
    }
    div,
    p {
      margin-top: 30px;
      font-size: 22px;
    }
  }
  .faculty-wrp {
    margin-top: 30px;
    // display: flex;
    // flex-direction: column;
    h1 {
      font-size: 40px;
    }
    div,
    p {
      margin-top: 30px;
      font-size: 22px;
    }
  }
  .studentsHouse {
    .upPanel {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      align-items: center;
      h2 {
        font-size: 32px;
      }
      .linkStud {
        color: #fff;
        font-size: 24px;
        text-decoration: none;
      }
    }
    .students {
      list-style: none;
      display: flex;
      justify-content: space-between;
      grid-gap: 30px;
      padding: 0;
      .student {
        img {
          height: 450px;
          max-width: 340px;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
