<template>
  <section class="modal-overlay" v-if="person" @click.self="$emit('close')">
    <div class="modal">
      <div class="closeModal" @click="$emit('close')"></div>
      <h3 class="name">{{ person[0]?.name }}</h3>

      <img
        :src="person[0]?.image ? person[0]?.image : '@/assets/img/wizard.png '"
        alt="photo"
        class="image"
      />

      <div class="rightCol">
        <div class="desc" v-if="person[0]?.gender">
          <div class="text">Gender</div>
          <div class="value">{{ person[0]?.gender }}</div>
        </div>
        <div class="desc" v-if="person[0]?.house">
          <div class="text">House</div>
          <div class="value">{{ person[0]?.house }}</div>
        </div>
        <div class="desc" v-if="person[0]?.species">
          <div class="text">Spiece</div>
          <div class="value">{{ person[0]?.species }}</div>
        </div>
        <div class="desc" v-if="person[0]?.dateOfBirth">
          <div class="text">Date of birth</div>
          <div class="value">{{ person[0]?.dateOfBirth }}</div>
        </div>
        <div class="desc" v-if="person[0]?.ancestry">
          <div class="text">Ancestry</div>
          <div class="value">{{ person[0]?.ancestry }}</div>
        </div>
        <div class="desc wand" v-if="person[0]?.wand.length">
          <div class="text">Wand Core:</div>
          <div class="value">{{ person[0]?.wand.core }}</div>
          <div class="text">Wand Length:</div>
          <div class="value">
            {{ person[0]?.wand.length }}
          </div>
          <div class="text">Wand Wood:</div>
          <div class="value">{{ person[0]?.wand.wood }}</div>
        </div>
        <div class="desc" v-if="person[0]?.patronus">
          <div class="text">Patronus:</div>
          <div class="value">{{ person[0]?.patronus }}</div>
        </div>
      </div>
      <div class="desc alternate" v-if="person[0]?.alternate_names.length">
        <div class="text">Alternate name:</div>
        <div class="value">
          <div
            class="value-item"
            v-for="(name, idx) in person[0]?.alternate_names"
            :key="'alterName' + idx"
          >
            {{ name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { idPerson } = defineProps(['idPerson'])
const person = ref(null)
const id = ref(idPerson)

defineEmits(['close'])

onMounted(async () => {
  id.value = idPerson
  await fetchPerson()
  // document.body.style.overflow = 'hidden'
})

const fetchPerson = async () => {
  await fetch(`https://hp-api.onrender.com/api/character/${idPerson}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((response) => {
      person.value = response
    })
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.modal {
  max-width: 60%;
  width: 100%;
  padding: 40px;
  background: #16222a;
  background: -webkit-linear-gradient(to right, #3a6073, #16222a);
  background: linear-gradient(to right, #3a6073, #16222a);
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 20px;
  border-radius: 8px;
  z-index: 10000;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80%;
  }
  @media (max-width: 870px) {
    max-width: 95%;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
    height: 90%;
    padding: 20px;
  }
  .closeModal {
    position: absolute;
    top: 24px;
    right: 20px;
    width: 24px;
    height: 24px;
    opacity: 0.2;
    cursor: pointer;
    transition: opacity ease 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  .closeModal::before,
  .closeModal::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: #fff;
  }

  .closeModal::before {
    transform: rotate(45deg);
  }

  .closeModal::after {
    transform: rotate(-45deg);
  }
  .name {
    grid-column: 1 / span 2;
    font-size: 30px;
    @media (max-width: 720px) {
      grid-column: unset;
    }
  }
  .image {
    height: 400px;

    @media (max-width: 720px) {
      height: 250px;
    }
  }
  .desc {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 10px;
    .text,
    .value {
      font-size: 20px;
      @media (max-width: 1200px) {
        font-size: 18px;
      }
    }
    .value {
      display: flex;
      flex-direction: column;
      .subdesc {
        display: flex;
        justify-content: space-between;
        .subtext {
          margin-right: 15px;
        }
      }
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid #000;
    }
  }
  .alternate {
    grid-column: 1 / span 2;
    @media (max-width: 720px) {
      grid-column: unset;
    }
    @media (max-width: 680px) {
      flex-wrap: wrap;
    }
    .text {
      white-space: nowrap;
      margin-right: 10px;
    }
    .value {
      flex-wrap: wrap;
      flex-direction: row;
      .value-item:not(:last-of-type):after {
        content: ', ';
        margin-right: 10px;
      }
    }
  }
  .wand {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .value{
      text-align: right;
    }
  }
}
</style>
