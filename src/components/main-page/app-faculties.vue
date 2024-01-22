<template>
  <section class="faculties_wrp" id="faculties">
    <h2 class="title">Study in the best houses at Hogwarts</h2>
    <div class="faculties">
      <img src="@/assets/img/800px-Hogwarts-coat.svg.png" alt="logo" class="hogwarts" />
      <router-link
        :to="{ name: 'house', params: { slug: 'gryffindor' } }"
        class="faculty griffindor"
      >
        <img src="@/assets/img/371b575fd2db2897b1b98b70702f6e68.png" alt="" class="image" />
        <p class="text">
          "Perhaps Gryffindor awaits you, illustrious one,<br />
          Among those who study there, the brave and the bold. <br />
          Their hearts are full of courage and strength, <br />
          And noble they are as well. "
        </p>
      </router-link>
      <router-link :to="{ name: 'house', params: { slug: 'slytherin' } }" class="faculty slytherin">
        <p class="text">
          "Or maybe you're destined for Slytherin<br />

          Find your best friends.<br />

          There the cunning people go towards their goal,<br />

          No hesitating ways."
        </p>
        <img
          src="@/assets/img/il_1588xN.3002239456_bmyq-PhotoRoom.png-PhotoRoom.png"
          alt=""
          class="image"
        />
      </router-link>
      <router-link
        :to="{ name: 'house', params: { slug: 'hufflepuff' } }"
        class="faculty hufflepuf"
      >
        <img src="@/assets/img/huf.png" alt="" class="image" />
        <p class="text">
          "Or maybe Hufflepuff is your destiny,<br />

          Where no one is afraid of work.<br />

          Where everyone is desperate and faithful,<br />

          And all patience and perseverance are complete."
        </p>
      </router-link>
      <router-link :to="{ name: 'house', params: { slug: 'ravenclaw' } }" class="faculty ravenclaw">
        <p class="text">
          "Ravenclaw, cheerful and wise, is waiting for you. <br />
          The most savvy people are gathered here. <br />
          Agile, resourceful and witty, <br />
          he will find a good friend in anyone here."
        </p>
        <img src="@/assets/img/ravenclaw-PhotoRoom.png-PhotoRoom.png" alt="" class="image" />
      </router-link>
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
    @media (max-width: 1000px) {
      font-size: 24px;
    }
  }
}
.faculties {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  position: relative;
  .hogwarts {
    position: absolute;
    top: 51.5%;
    left: 50%;
    height: 40vh;
    transform: translate(-50%, -50%);
    @media (max-width: 900px) {
      height: 35vh;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
  .faculty {
    grid-gap: 30px;
    cursor: pointer;
    height: 40vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    img {
      transition: 0.3s;
      height: 30vh;
      object-fit: contain;
      @media (max-width: 1780px) {
        height: 38vh;
      }
      @media (max-width: 900px) {
        height: 30vh;
      }
      @media (max-width: 550px) {
        height: 23vh;
      }
      @media (max-width: 500px) {
        height: 20vh;
      }
    }
    .text {
      color: #fff;
      font-family: 'Sofia Pro';
      font-size: 20px;
      @media (max-width: 1715px) {
        font-size: 18px;
      }
      @media (max-width: 1780px) {
        display: none;
      }
      @media (max-width: 700px) {
        display: block;
      }
      @media (max-width: 500px) {
        display: block;
        font-size: 16px;
      }
      @media (max-width: 450px) {
        text-align: center;
      }
    }
    &.griffindor {
      // // background-color: #7c1621;
      // p{
      //   max-width: 400px;
      // }
    }
    &.slytherin {
      text-align: right;
      justify-content: flex-end;
      // background-color: #3e8736;
      img {
        margin-bottom: 60px;
        @media (max-width: 700px) {
          margin-bottom: 0px;
        }
      }
      @media (max-width: 1780px) {
        justify-content: center;
      }
      @media (max-width: 1200px) {
        justify-content: flex-end;
      }
      @media (max-width: 450px) {
        flex-direction: column-reverse;
        text-align: center;
      }
    }
    &.hufflepuf {
      // background-color: #b5921c;
    }
    &.ravenclaw {
      // background-color: #10153d;
      justify-content: flex-end;
      text-align: right;
      img {
        height: 32vh;
        @media (max-width: 1780px) {
          height: 40vh;
        }
        @media (max-width: 900px) {
          height: 30vh;
        }
        @media (max-width: 550px) {
          height: 25vh;
        }
        @media (max-width: 500px) {
          height: 22vh;
        }
      }
      @media (max-width: 1780px) {
        justify-content: center;
      }
      @media (max-width: 1200px) {
        justify-content: flex-end;
      }
      @media (max-width: 450px) {
        flex-direction: column-reverse;
        text-align: center;
      }
    }
    &:hover {
      img {
        height: 38vh;
        @media (max-width: 1780px) {
          height: 43vh;
        }
        @media (max-width: 700px) {
          height: 38vh;
        }
      }
    }
    @media (max-width: 1780px) {
      justify-content: center;
    }
    @media (max-width: 1200px) {
      justify-content: flex-start;
    }
    @media (max-width: 700px) {
      height: 30vh;
      grid-gap: 10px;
    }
    @media (max-width: 450px) {
      flex-direction: column;
      height: auto;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>
//#AE8C1B huf //#7C1621 grif //#3C8234 sliz //#0F143B rav
