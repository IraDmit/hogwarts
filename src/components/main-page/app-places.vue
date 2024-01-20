<template>
  <section class="places container">
    <div class="place_block">
      <img src="@/assets/img/khogvarts-zal.jpg" alt="" />
      <p class="place_text">
        The Hogwarts Great Hall is where the entire school gathers during important events and
        occasions. The grand hall, adorned with floating candles, impresses with its magnificence.
        Large tables laden with delicacies are arranged on both sides, and a raised platform at the
        end of the hall is reserved for teachers and school guests. Solemn receptions and
        celebrations take place here, and spirited house rivalries come to life at every festive
        gathering.
      </p>
    </div>
    <div class="place_block revert">
      <img src="@/assets/img/library.jpg" alt="" />
      <p class="place_text">
        Hogwarts Library, located in the eastern wing of the castle, is a true haven for enthusiasts
        of magical and non-magical volumes alike. Massive wooden shelves bend under the weight of
        thousands of ancient books. Candles float in the air, illuminating ancient parchments and
        long corridors of shelves. Students, captivated by their studies, would venture into this
        place to delve into the world of wisdom and discoveries.
      </p>
    </div>
    <div class="place_block">
      <img src="@/assets/img/khogsmid.jpg" alt="" />
      <p class="place_text">
        Hogsmeade, the mystical village located near Hogwarts, is shrouded in an enchanting
        ambiance. The streets, seemingly covered in a thick mist from the cauldron shop, also gleam
        with the windows of charm-filled shops and apothecaries with bewitched potions. Students
        come here for various magical items that assist them in their studies and everyday life.
      </p>
    </div>
    <div class="place_block revert">
      <img src="@/assets/img/alley.jpeg" alt="" />
      <p class="place_text">
        Diagon Alley, accessed through the Leaky Cauldron, is a bustling magical marketplace for
        wizards and witches. Lined with eccentric shops like Ollivanders and Flourish and Blotts, it
        offers a variety of magical supplies and artifacts. Weasleys' Wizard Wheezes adds a touch of
        whimsy with its colorful pranks and gadgets, creating an exciting atmosphere. The Leaky
        Cauldron serves as the mysterious entrance, making Diagon Alley an essential stop for
        Hogwarts students on their magical journeys.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.places {
  display: grid;
  grid-gap: 100px;
  .place_block {
    display: flex;
    grid-gap: 100px;
    align-items: center;
    &.revert {
      flex-direction: row-reverse;
    }
    img {
      width: 48%;
    }
    .place_text {
      font-family: 'Sofia Pro';
      font-size: 24px;
      color: #fff;
    }
  }
}
</style>
