<template>
  <div class="text">
    Among magical corridors and mysterious towers, you'll find not only lessons in magic but also
    unique encounters with our outstanding professors. They are the key to great adventures and the
    secrets of the magical world. Meet the professors whose knowledge and wisdom fill the walls of
    Hogwarts. Get ready for exciting lessons and magical discoveries with them!
  </div>
  <section class="teacher_section">
    <div class="leftCol">
      <h3 class="desc">
        Hogwarts Professors are outstanding experts in their fields, ready to share their knowledge
        and experience. Your training will be under the watchful eye of those who are sincerely
        committed to helping you become a true wizard.
      </h3>
    </div>
    <div class="rightCol">
      <app-CharacterSlider :teachers="teachers"/>
    </div>
  </section>
</template>

<script setup>
import appCharacterSlider from '@/components/app-characterSlider.vue'
import { onMounted, ref } from 'vue'
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()
const teachers = ref(null)

onMounted(async () => {
  await charactersStore.fetchTeachers()
  const getTeachers = charactersStore.getTeachers
  teachers.value = getTeachers.filter((teacher) => teacher.image)
  console.log(getTeachers)
})
</script>

<style lang="scss" scoped>
.text {
  padding: 70px 0;
  font-family: 'Sofia pro';
  font-size: 28px;
  color: #fff;
  max-width: 60%;
  text-align: center;
  margin: 100px auto;
}
.teacher_section {
  padding: 70px 0;
  display: flex;

  .leftCol {
    width: calc(35% - 40px);
    margin-right: 40px;
    .desc {
      font-family: 'Sofia pro';
      font-size: 25px;
      color: #fff;
    }
  }
  .rightCol {
    width: 65%;
  }
}
</style>
