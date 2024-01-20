<template>
  <section
    class="faculty container"
    v-if="facultiesStore[slug]"
    :style="{ '--bg-color': info?.color }"
  >
    <div class="faculty-wrp">
      <h1 class="name">{{ info?.title }}</h1>
      <div v-html="info?.desc" class="desc"></div>
    </div>
    <div class="studentsHouse">
      <div class="upPanel">
        <h2>Our students and graduates</h2>
        <router-link to="/students" class="linkStud">View all students</router-link>
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
  .desc:deep {
    .image {
      float: right;
      height: 500px;
      @media (max-width: 1500px) {
        height: 400px;
      }
      @media (max-width: 676px) {
        height: 320px;
        width: 100%;
        object-fit: contain;
        // float: unset;
      }
    }
    div,
    p {
      margin-top: 30px;
      font-size: 22px;
      @media (max-width: 1000px) {
        font-size: 18px;
      }
      @media (max-width: 676px) {
        margin-top: 12px;
      }
    }
  }
  .faculty-wrp {
    margin-top: 30px;
    h1 {
      font-size: 40px;
      @media (max-width: 1000px) {
        font-size: 32px;
      }
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
        @media (max-width: 1000px) {
          font-size: 26px;
        }
      }
      .linkStud {
        color: #fff;
        font-size: 24px;
        text-decoration: none;
        @media (max-width: 1000px) {
          font-size: 20px;
        }
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
          @media (max-width: 1000px) {
            height: 400px;
          }
        }
      }
    }
  }
}
</style>
