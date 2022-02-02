Vue.createApp({
    data() {
        return {
            message: "",
            todos: []
        }
    },
    methods: {
        addTodo() {
            // if message is not empty
            if (this.message !== "") {
                // update list and set message to blank
                this.todos = [...this.todos,this.message];
                this.message = "";
            }                                      
        },
        handleClose(index) {
            // remove selected todo from list
            this.todos.splice(index,1);
        }
    }
 
}).mount("#root");