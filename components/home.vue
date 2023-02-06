<template>
    <div>
            <navbar></navbar>
        <div id = "home">
            <div id = "content" >
                <div id = "blog" v-for = "blog in blogs">
                    <div @click.prevent = "showBlog(blog.author)">
                        <div id = "image">
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

            <div id = "about">
                <h1>About me</h1>
            </div>
        </div>
    </div>
</template>

<script>
const API = "http://localhost:5000"
import navbar from "./navbar.vue"
export default{
    components : {
        navbar : navbar
    },
    beforeCreate : function(){
        
    },
    data(){
        return{
            blogs : []
        }
    },
    methods : {
    }
}
</script>


<style>

#home{
    display:flex;
    margin-top:8vh;
    width:100vw;
}

#content{
    box-sizing: border-box;
    width:70vw;
    padding:20px;
}

#about{
    box-sizing: border-box;
    width:30vw;
    text-align:center;
    padding:10px 30px;
}

#blog{
    display: inline-block;
    width:30vw;
    border:1px solid black;
    padding:20px;
    margin-right:30px;
    margin-bottom:20px
}

#blog:hover{
    cursor : pointer;
}

#blog #image{
    width:100%;
    height:40vh;
}

#about h1::before{
    content : '';
    display:block;
    width: 60%;
    height:2px;
    margin-left:70px;
    background-color:red;
}
#about h1::after{
    content : '';
    display:block;
    width: 60%;
    height:2px;
    margin-left:70px;
    background-color:red;
}
</style>