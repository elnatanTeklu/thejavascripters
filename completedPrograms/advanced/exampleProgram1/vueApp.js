new Vue({
    el: "#app",
    data: {
        msg: "Your Text Will Display Here"
    },
    methods: {
        changeMsg: function(event){
            this.msg = event.target.value;
        }
    }
})