const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      //event.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
