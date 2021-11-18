var app = new Vue({
    el: '#canvas',
    data: {
        newContent: "",
        unchecked: [],
        checked: []
    },
    methods: {
        addItem() {
            if (this.newContent) {
				this.unchecked.push({
                    id: newid(), 
                    done: false, 
                    content: this.newContent
                });
				this.newContent = "";
			}
        },

        delItem() {
            //
        },

        checkItem() {
            //
        },

        unchkItem() {
            //
        }
    },
    computed: {
        //
    }
})