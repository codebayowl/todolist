const App = {
    data() {
        return {
            newContent: "",
            unchecked: [],
            checked: []
        }        
    },
    methods: {
        addItem(index) {
            if (this.newContent) {
                let newDate = new Date().toLocaleString("lt-LT");
                
                let newElement = {
                    content: this.newContent,
                    datetime: newDate
                }
				this.unchecked.push(newElement);
				this.newContent = "";
			}
        },

        delItemChecked(index) {
            this.checked.splice(index,1);
        },

        delItemUnchecked(index) {
            this.unchecked.splice(index,1);
        },

        checkItem(index) {
            currentEl = this.unchecked[index];
            this.checked.push(currentEl);
            this.delItemUnchecked(index);
        },

        unchkItem(index) {
            currentEl = this.checked[index];
            this.unchecked.push(currentEl);
            this.delItemChecked(index);
        }
    },
    computed: {
        //
    }
}
Vue.createApp(App).mount("#canvas");
