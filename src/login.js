const login = new Vue({
  el: '#login',
  data: {
  	email: null,
  	password: null,
    message: 'Do you wanna build a Vue app?',
    success: false,
    error: false,
    loading: false
  },
  methods: {
  	submit: function() {
      this.loading = true;
      axios.post('/login')
        .then(res => {
          console.log(res.data)
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false;
        }) 
  		console.log(this.email, this.password)
  	}
  }
})