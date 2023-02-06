<template>
    <div>
        <!-- <div id = "nav">
            <a href = "/">Home</a>
            <a href = "/login">Login</a>
            <a href = "/register">Register</a>
        </div>
     -->
     <navbar></navbar>
        <div id = "blog">
            <div id = "image"></div>
            <div style = "display:flex; align-items:center; justify-content:space-around">
                <h1 style = "margin-left:300px">{{ blog.title }}</h1>
                <div style = "margin-left:300px" v-show = "show">
                    <span class = "fa fa-edit" style = "margin : 0 10px"></span>
                    <button @click.prevent = "deleteBlog(blog.id)">
                        <span class = "fa fa-trash"></span>
                    </button>
                </div>
            </div>
    
            <div style = "display:flex; align-items:center; justify-content: space-between;">
                <h5><b>Author : </b>{{ blog.author }} </h5>
                <p><b>Date : </b> {{ blog.date }}</p>
            </div>
            <p><b>Description :</b> {{ blog.description }}</p>
    
        </div>
    </div>
</template>

<script>
const API = "http://localhost:5000"
import navbar from "./navbar2.vue"
export default{
    components : {
        navbar : navbar
    },
    
    beforeCreate : function(){
        if(this.$session.get("blogemail") === this.$session.get("email")){
            this.$http.get(API + "/getUser/" + this.$session.get("email"))
            .then(data => {
                this.show = true
            })
        }
        if(this.$session.get("date")) {
            this.$http.get(API + "/getCreatedBlog/" + this.$session.get("date"))
            .then(data => {
                this.blog = data.body[0]
                this.show = true
                console.log("date")
            })
        }
        else{
            this.$http.get(API + "/getBlog/" + this.$session.get("id"))
            .then(data => {
                this.blog = data.body[0]
            })
        }
    },
    data(){
        return{
            blog : [

            ],
            show : false
        }
    },
    methods : {
        deleteBlog : function(id) {
            this.$http.delete(API + "/deleteBlog/" + id)
            .then(data => {
                if(this.show == true) {
                    this.$router.push("/blogPage")
                }
                else{
                    this.$router.push("/")
                }
            })
        }
    }
}
</script>


<style>
#nav{
    width:100%;
    height:50px;
    background-color:lightgrey;
    display: flex;
    align-items:center;
    justify-content: center;
}
a{
    text-decoration:none;
    color:grey;
    margin:0 10px;
}
#blog{
    padding: 10px 20px;
}
#image{
    width:100%;
    height:50vh;
    background-color:yellow
}
</style>