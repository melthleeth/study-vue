const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      toggle: false,
      inputBackgroundColor: ''
    };
  },
  computed: {
    paragraphClasses() {
      return {
          user1: this.inputClass === 'user1',
          user2: this.inputClass === 'user2',
          visible: this.toggle,
          hidden: !this.toggle 
        };
    },
  },
  methods: {
    toggleParagraph() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
