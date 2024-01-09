<template>
  <section class="faculties_wrp" id="faculties" >
    <h2 class="title">Study in the best houses at Hogwarts</h2>
    <div class="faculties">
      <img src="@/assets/img/800px-Hogwarts-coat.svg.png" alt="logo" class="hogwarts" />
      <div class="faculty griffindor">
        <img src="@/assets/img/371b575fd2db2897b1b98b70702f6e68.png" alt="" />
        <p>
          "Perhaps Gryffindor awaits you, illustrious one,<br />
          Among those who study there, the brave and the bold. <br />
          Their hearts are full of courage and strength, <br />
          And noble they are as well. "
        </p>
      </div>
      <div class="faculty slytherin">
        <p>
          "Or maybe you're destined for Slytherin<br />

          Find your best friends.<br />

          There the cunning people go towards their goal,<br />

          No hesitating ways."
        </p>
        <img src="@/assets/img/il_1588xN.3002239456_bmyq-PhotoRoom.png-PhotoRoom.png" alt="" />
      </div>
      <div class="faculty hufflepuf">
        <img src="@/assets/img/huf.png" alt="" />
        <p>
          "Or maybe Hufflepuff is your destiny,<br />

          Where no one is afraid of work.<br />

          Where everyone is desperate and faithful,<br />

          And all patience and perseverance are complete."
        </p>
      </div>
      <div class="faculty ravenclaw">
        <p>
          "Ravenclaw, cheerful and wise, is waiting for you. <br />
          The most savvy people are gathered here. <br />
          Agile, resourceful and witty, <br />
          he will find a good friend in anyone here."
        </p>
        <img src="@/assets/img/ravenclaw-PhotoRoom.png-PhotoRoom.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.faculties_wrp {
  margin: 120px 0;
  .title {
    font-family: 'Sofia Pro';
    font-size: 30px;
    margin: 40px 0;
    color: #fff;
    text-align: center;
  }
}
.faculties {
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
    grid-gap: 30px;
    cursor: pointer;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      height: 42vh;
      object-fit: contain;
    }
    p {
      color: #fff;
      font-family: 'Sofia Pro';
      font-size: 20px;
    }
    &.griffindor {
      // // background-color: #7c1621;
      // p{
      //   max-width: 400px;
      // }
    }
    &.slytherin {
      // background-color: #3e8736;
      img {
        margin-bottom: 60px;
      }
    }
    &.hufflepuf {
      // background-color: #b5921c;
    }
    &.ravenclaw {
      // background-color: #10153d;
      img {
        height: 45vh;
      }
    }
  }
}
</style>
//#AE8C1B huf //#7C1621 grif //#3C8234 sliz //#0F143B rav
