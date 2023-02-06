<template>
    <div>
        <div id = "blog">
            <!-- <div id = "circle">
                <span class = "fa fa-image"></span>
            </div> -->


            <input type = "image">

            <input type = "text" class = "form-control" placeholder = "title" v-model = "blog.title" style = "margin : 10px 0; width:300px" required>
            <textarea placeholder ="description" v-model = "blog.description" class = "form-control" style = "width : 300px;" required></textarea>
            <p v-show = "showErr" style = "color:red">{{ ErrMsg }}</p>
            <button @click.prevent = "addBlog">add blog</button>
        </div>
    </div>
</template>

<script>
const API = "http://localhost:5000"
export default{
    beforeCreate : function(){
        if(this.$session.exists()){
            this.$http.get(API + "/getUser/" + this.$session.get("email"))
            .then(data => {
                this.blog.author = data.body[0].username
                this.blog.email = data.body[0].email
            })
        }
        else{
            this.$router.push("/login")
        }
    },
    data(){
        return{

            blog : {
                title : '',
                description : '',
                author : '',
                email : '',
                date : "" +  new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() + 
                    "::" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
            },
            ErrMsg : '',
            showErr : false
        }
    },
    methods : {
        addBlog : function(){
            if(this.blog.title && this.blog.description) {
                this.$session.set("date", this.blog.date)
                this.$http.post(API + "/addBlog", this.blog)
                .then(data => {
                    console.log(data)
                    this.$router.push("/blog")
                })
            }
            else{
                this.ErrMsg = "above fields are required"
                this.showErr = true
            }
        }
    }
}
</script>


<style scoped>
#circle{
    width:4vh;
    height:4vh;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content:center;
    border:1px solid black;
}

#blog{
    padding:30px;
}

button{
    padding:5px 10px;
    border-radius : 10px;
    margin-top : 5px;
    background-color : yellow
}
</style>