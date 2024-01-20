<template>
  <section class="history">
    <div class="text">
      <h1>History of Hogwarts</h1>
      <div>
        <p>
          Over a thousand years ago, the four greatest witches and wizards of the age shared a
          dream, to create a school where young people of the wizarding world could study and be
          trained in the magical arts they needed to become skilled, fully-trained wizards. These
          four great wizards each founded one of the Houses of the school that they worked together
          to form: Hogwarts School of Witchcraft and Wizardry. They have been referred to as ‘The
          Hogwarts Four.’
        </p>
        <p>
          Each of the Founders contributed to the character of not just their houses but the whole
          school, but it was Helga Hufflepuff who perhaps did more than the others. Hufflepuff was
          particularly famous for her dexterity at food-related Charms. Many recipes traditionally
          served at Hogwarts feasts originated with Hufflepuff. She “brought people from different
          walks of life together to help build Hogwarts and was loved for her charming ways”.
          Another accomplishment of Hufflepuff’s was her concern for the treatment of House-elves in
          the Wizarding world. She made Hogwarts a refuge for them, and as a result they were
          treated more kindly there than elsewhere in the world at that time.
        </p>
        <p>
          For a number of years, the four founders worked together in harmony. Each of the founders
          took a group of students to be in their own house and even though they had differences of
          opinion about who should be trained, the house system helped them all to work together.
          However, as the years went by, the differences between Gryffindor and Slytherin became a
          serious rift.
        </p>
        <p>
          Salazar Slytherin believed that only pure-blood witches and wizards should be allowed to
          attend Hogwarts. He got into an argument with Godric Gryffindor about this and eventually
          left the school. There was a legend that Slytherin built a secret chamber somewhere in
          Hogwarts that only his true heir would be able to open. This chamber, called the Chamber
          of Secrets, contained a monster that would finish his “noble purpose” of killing all the
          Muggle-born students at Hogwarts.
        </p>
        <p>
          The school flourished over the centuries which followed. Nearly all witches and wizards in
          Britain for a thousand years have passed through the school, being taught the skills and
          control needed to become a fully qualified wizard and the fill a productive role in
          magical society.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.history {
  background: url('../assets/img/hogwarts.jpg') center / cover no-repeat fixed;
  height: 100vh;
  position: relative;
  color: #fff;
  font-family: 'Sofia Pro';
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    background-image: linear-gradient(180deg, rgba(7, 15, 23, 0) 0%, #070f17 100%);
    z-index: 2;
  }
  .text {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 80px;
    left: 15%;
    max-width: 70%;
    z-index: 3;
    h1 {
      font-size: 30px;
      @media (max-width: 1680px) {
        font-size: 27px;
      }
    }
    div {
      p {
        font-size: 20px;
        text-indent: 40px;

        margin-top: 20px;
        @media (max-width: 1680px) {
          font-size: 17px;
        }
        @media (max-width: 1060px) {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 1300px) {
     max-width: 80%;
     left: 10%;
    }
    @media (max-width: 800px) {
     max-width: 90%;
     left: 5%;
    }
  }
  @media (max-width: 950px){
    margin-bottom: 150px;
  }
  @media (max-width: 800px){

    margin-bottom: 160px;
  }
  @media (max-width: 700px){
    margin-bottom: 400px;
  }
  @media (max-width: 576px){
    margin-bottom: 500px;
  }
  @media (max-width: 524px){
    margin-bottom: 600px;
  }
  @media (max-width: 476px){
    margin-bottom: 700px;
  }
  @media (max-width: 434px){
    margin-bottom: 800px;
  }
  @media (max-width: 400px){
    margin-bottom: 900px;
  }
  @media (max-width: 378px){
    margin-bottom: 1000px;
  }
  @media (max-width: 378px){
    margin-bottom: 1000px;
  }
  @media (max-width: 360px){
    margin-bottom: 1100px;
  }
}
</style>
