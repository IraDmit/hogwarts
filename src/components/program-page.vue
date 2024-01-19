<template>
  <section class="training-wrp container">
    <h1 class="title">Training program</h1>
    <ul class="upPanel">
      <li
        class="course-link"
        :class="{ active: route.query.year === 'firstYear' }"
        @click="changeYear('firstYear')"
      >
        First Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'secondYear' }"
        @click="changeYear('secondYear')"
      >
        Second Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'thirdYear' }"
        @click="changeYear('thirdYear')"
      >
        Third Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'fourthYear' }"
        @click="changeYear('fourthYear')"
      >
        Fourth Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'fifthYear' }"
        @click="changeYear('fifthYear')"
      >
        Fifth Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'sixthYear' }"
        @click="changeYear('sixthYear')"
      >
        Sixth Year
      </li>
      <li
        class="course-link"
        :class="{ active: route.query.year === 'seventhYear' }"
        @click="changeYear('seventhYear')"
      >
        Seventh Year
      </li>
    </ul>

    <ul class="content-wrp">
      <li class="subject" v-for="(subject, idx) in getProgram" :key="'subj' + idx">
        <img :src="subject.image" alt="cart" />
        <h3 class="title">{{ subject.subject }}</h3>
        <div class="desc">{{ subject.desc }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useProgramStore } from '../stores/training-program'

const programStore = useProgramStore()

const route = useRoute()
const router = useRouter()

const getProgram = computed(() => {
  return programStore[route.query.year]
})

const changeYear = (key) => {
  router.replace({
    name: 'training-program',
    query: {
      year: key
    }
  })
}
</script>

<style lang="scss" scoped>
.training-wrp {
  margin-top: 90px;
  color: #fff;
  font-family: 'Sofia Pro';
  padding-top: 35px;
  padding-bottom: 35px;
  .title {
    font-size: 40px;
    @media (max-width: 1220px) {
      font-size: 30px;
    }
    @media (max-width: 1100px) {
      font-size: 24px;
    }
  }
  .upPanel {
    margin-top: 20px;
    padding: 15px;
    list-style: none;
    padding: 0;
    color: #888888;
    display: flex;
    overflow-x: scroll;
    .course-link {
      cursor: pointer;
      font-size: 25px;
      padding: 10px;
      padding-bottom: 0;
      margin-bottom: 10px;
      white-space: nowrap;
      &.active {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
      @media (max-width: 1220px) {
        font-size: 18px;
      }
      @media (max-width: 825px) {
        font-size: 14px;
      }
    }
  }
  .content-wrp {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 10px;
    .subject {
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      @media (max-width: 800px) {
        .title {
          font-size: 18px;
        }
        .desc {
          font-size: 14px;
        }
      }
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
