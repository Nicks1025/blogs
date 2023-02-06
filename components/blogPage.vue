<template>
    <div id = "blogPage">
        <navbar></navbar>
        <div id = "body">
            <h1 id = "h1">BLOG</h1>
            <div id = "image"></div>

            <div id = "blogs">
                <div id = "blog" v-for = "blog,index in blogs" >

                    <div @click.prevent = "showBlog(blog.email, blog.id, blog.date)">
                        <p>{{blog.author}}</p>
                        <div id = "image1">
                            <img src = "https://thumbs.dreamstime.com/z/blog-top-view-hands-keyboard-62012825.jpg">
                        </div>
                        <div id = "blog-content">
                            <div style = "display:flex; align-items:center; justify-content: space-between;">
                                <h1 id = "title">{{ blog.title }}</h1>
                                <p id = "date">{{ blog.date }}</p>
                            </div>
                            <p id = "Desc">{{blog.des}}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
const API = "http://localhost:5000"
import navbar2 from "./navbar2.vue"
export default{
    components : {
        navbar : navbar2
    },
    beforeCreate : function(){
        if(this.$session.exists()) {
            this.$http.get(API + "/getBlogs")
            .then(data => {
                this.blogs = data.body
            })
        }
        else{
            this.$router.push("/login")
        }
    },
    data(){
        return{
            blogs : []
        }
    },
    methods : {
        showBlog : function(email, id, date){
            this.$session.remove("date")
            // console.log(id)
            this.$session.set("blogemail", email)
            this.$session.set("id", id)
            this.$router.push("/blog")
        }
    }
}
</script>


<style>
#body{
    position:relative;
    top:13vh;
    width:100%;
    border:1px solid grey;
}


#image{
    width:100%;
    height:50vh;
    background-image: url("https://thumbs.dreamstime.com/z/blog-top-view-hands-keyboard-62012825.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: yellow;
    border:1px solid;
}

img{
    width:100%;
    height:100%;
    background-size: cover;
}
#h1{
    position:absolute;
    top:-50px;
    left:50%;
    transform: translate(-50%,0);
    font-size:80px;
}


#blogs{
    /* margin-top:20px; */
    padding:20px 30px;
}

#blog{
    display: inline-block;
    width:30vw;
    border:1px solid black;
    padding:20px;
    margin-right:30px;
    margin-bottom:20px;
}

#blog:hover{
    cursor : pointer;
}

#blog #image1{
    width:100%;
    height:40vh;
    /* background-color:yellow; */

}

</style>