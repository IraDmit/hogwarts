<template>
  <section class="form">
    <div class="field">
      <p class="field_name">First Name</p>
      <input type="text" placeholder="First Name" class="custom-input" />
    </div>
    <div class="field">
      <p class="field_name">Last Name</p>
      <input type="text" placeholder="Last Name" class="custom-input" />
    </div>
    <div class="field">
      <p class="field_name">Father Name</p>
      <input type="text" placeholder="Father Name" class="custom-input" />
    </div>
    <div class="field">
      <p class="field_name">Email</p>
      <input type="text" placeholder="Email" class="custom-input" />
    </div>
    <div class="field">
      <p class="field_name">Phone</p>
      <input type="text" placeholder="Phone" class="custom-input" />
    </div>
    <div class="btn">Send an application</div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 495px;
  width: 100%;
  padding: 48px 40px;
  background-color: #070f17;
  border-radius: 7px;
  gap: 20px;
  color: #fff;
  font-family: 'Sofia Pro';
  .field {
    width: 100%;
    .field_name {
      font-size: 18px;
    }
    .custom-input {
      padding: 11px 16px 12px 16px;
      width: 100%;
      border-radius: 6px;
      background-color: #404345;
      border: none;
      font-size: 14px;
      color: #fff;
      &:focus {
        outline: none;
        box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
      }
      &::placeholder {
        color: #A7A7A7;
        font-family: 'Sofia Pro';
      }
    }
  }
  .btn {
    margin-top: 20px;
    padding: 12px 0;
    max-width: 230px;
    width: 100%;
    text-align: center;
    background-color: #fff;
    color: #070f17;
    cursor: pointer;
    border-radius: 6px;
  }
}
</style>
