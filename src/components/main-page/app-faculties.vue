<template>
  <section class="faculties">
    <img src="@/assets/img/800px-Hogwarts-coat.svg.png" alt="logo" class="hogwarts" />
    <div class="faculty griffindor">
      <p>
        it takes a great deal of bravery to stand up to out enemies but just as much to stand up to
        our friends
      </p>
      <img src="@/assets/img/griffindor.jpg" alt="" />
    </div>
    <div class="faculty slytherin">
      <img src="@/assets/img/slytherin.jpg" alt="" />
      <p>
        it takes a great deal of bravery to stand up to out enemies but just as much to stand up to
        our friends
      </p>
    </div>
    <div class="faculty hufflepuf">
      <p>
        it takes a great deal of bravery to stand up to out enemies but just as much to stand up to
        our friends
      </p>
      <img src="@/assets/img/hufflepuf.jpg" alt="" />
    </div>
    <div class="faculty ravenclaw">
      <img src="@/assets/img/ravenclaw.jpg" alt="" />
      <p>
        it takes a great deal of bravery to stand up to out enemies but just as much to stand up to
        our friends
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.faculties {
  margin: 120px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  position: relative;
  .hogwarts {
    position: absolute;
    top: 55.5%;
    left: 50%;

    height: 50vh;
    transform: translate(-50%, -50%);
  }
  .faculty {
    cursor: pointer;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      height: 50vh;
      object-fit: contain;
    }
    &.griffindor {
      background-color: #7c1621;
    }
    &.slytherin {
      background-color: #3e8736;
      img {
        margin-bottom: 60px;
      }
    }
    &.hufflepuf {
      background-color: #b5921c;
    }
    &.ravenclaw {
      background-color: #10153d;
    }
  }
}
</style>
//#AE8C1B huf //#7C1621 grif //#3C8234 sliz //#0F143B rav
