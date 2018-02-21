<template>
  <div class="footer">
    <button class="dial-btn" @click="routeNew">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    routeNew() {
      this.$router.push('new');
    }
  }
}
</script>

<style>
.footer {
  height: 50px;
  text-align: right;
  margin-right: 0.6rem;
}

.dial-btn {
  /* for icon */
  font-size:1.2em; 
  color:white;

  box-sizing: border-box;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: #FF5256;
  padding: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
  outline: none;
  border: 0;
  border-radius: 0;
  transition: .4s cubic-bezier(.4,0,.2,1);
  font-family: inherit;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  
  border-radius: 50%;
  z-index: 1;

  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  width: 56px;
  height: 56px;
  min-width: 0;
  overflow: hidden;
}

/* ripple effect */
.dial-btn:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, .5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}

button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}
</style>
