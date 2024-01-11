<template>
  <section class="faculty">
    <div class="faculty-wrp">
      <h1 class="name">Griffindor house</h1>
      <p>
        <img src="@/assets/img/griffindor.jpg" alt="coat of arms" class="image" />
        Gryffindor House is one of the four houses at Hogwart into which the students are Sorted
        when they start their first year. Gryffindor is the Hogwarts house of founder Godric
        Gryffindor. Gryffindor House places high value on traits such as courage, chivalry, and
        nerve. During Harry’s time at Hogwarts, the head of Gryffindor House was Minerva McGonagall.
      </p>

      <p>
        <b>Blazon:</b> gules, a lion rampant or (that is, a golden lion on a red field, hence the
        Gryffindor colours of scarlet and gold)
      </p>
      <p><b>House Ghost:</b> Sir Nicholas de Mimsy-Porpington ("Nearly Headless Nick")</p>
      <p><b>Location:</b> Gryffindor Tower, entrance on the seventh floor</p>

      <p>
        The entrance to the Gryffindor common room (which, in turn, lead to the Gryffindor
        dormitories) is located behind a large painting of a Fat Lady in a pink silk dress. If you
        know the right password to tell her, she swings open to reveal a round opening in the wall.
        The common room contains a lot of squashy armchairs, a fireplace, and tables. The fireplace
        is connected to the Floo Network, but as it is extremely public except in the dead of night,
        Gryffindors usually use owls to communicate with their families instead. There's also a
        notice board, for public announcements such as the date of the next Hogsmeade weekend, but
        also for notices from individual students seeking to buy or sell secondhand books, or trade
        Chocolate Frog cards, or similar, as in any school.
      </p>
      <p>
        There are two staircases opening off the common room into the Tower itself: the boys'
        staircase, on which the seven boys' dormitories are located (one for each year) and the
        girls' staircase, on which the seven girls' dormitories are located (one for each year). The
        girls' staircase is under a spell so that if a boy sets foot on it and persists for a few
        steps, a wailing klaxon goes off and the staircase temporarily Transfigures itself into a
        stone slide, sending him and anyone else on the stairs sailing to the bottom. According to
        Hogwarts: A History, the founders believed that girls were more trustworthy than boys, so
        that while the girls' staircase is enchanted to prevent boys from getting in, the boys'
        staircase does not carry a reciprocal enchantment . Each dormitory is a round room with
        windows looking out onto the grounds, and containing four-poster beds.
      </p>
      <p>
        The Gryffindor team won the Quidditch Cup during the 1993 - 1994 season - the first time
        since 1984 - and again during the 1995 - 1996 season. They wear robes of scarlet.
      </p>
      <p>Gryffindor House's hourglass for tracking house points contains rubies.</p>
    </div>
    <div class="studentsHouse">
      <h2>Our students</h2>
      <app-characterSlider :students="students" />
    </div>
  </section>
</template>

<script setup>
import appCharacterSlider from '@/components/app-characterSlider.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const students = ref(null)
const route = useRoute()
const slug = ref(route.params.slug)
console.log(slug.value)
const fetchHouseStudents = async () => {
  const data = await fetch(`https://hp-api.onrender.com/api/characters/house/${slug.value}`, {
    method: 'GET'
  }).then((res) => res.json)
  students.value = data
}
fetchHouseStudents()
console.log(students.value)
</script>

<style lang="scss" scoped>
.faculty {
  background-color: #7c1621;

  padding-top: 100px;
  color: #fff;
  display: flex;
  padding-left: 35px;
  .image {
    float: right;
    height: 500px;
  }
  .faculty-wrp {
    margin-top: 30px;
    // display: flex;
    // flex-direction: column;
    h1 {
      font-size: 32px;
    }
    div,
    p {
      margin-top: 30px;
      font-size: 22px;
    }
  }
}
</style>
