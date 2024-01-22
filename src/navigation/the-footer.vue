<template>
  <footer>
    <div class="advert">
      <p>Made by</p>
      <div class="content">
        <ul class="contacts">
          <li class="contact">
            <a href="https://t.me/nfllex"
              ><img src="@/assets/img/icons8-телеграм.svg" alt="telegram"
            /></a>
          </li>
          <li class="contact">
            <a href="https://github.com/IraDmit"
              ><img src="@/assets/img/icons8-github.svg" alt="github"
            /></a>
          </li>
        </ul>
        <p>Ira Dmitriewa</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  background-color: #070f17;
  color: #fff;
  padding: 35px;
  font-family: 'Sofia Pro';
  .content{
    display: flex;
    align-items:center ;
    grid-gap: 20px;
    img{
      height: 25px;
      width: 25px;
    }
  }
  .contacts {
    list-style: none;
    text-decoration: none;
    color: transparent;
    display: flex;
    grid-gap: 20px;
    .contact a{
      display: flex;
      align-items: center;
    }
  }
  .advert {
    display: flex;
    justify-content: space-between;
  }
}
</style>
