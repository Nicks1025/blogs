const express = require('express')
const pool = require('./db')
const app = express()

app.use(express.json())

// users

app.get("/getUser/:email", async(req,res) => {
    try {
        const user = await pool.query("select * from users where email = $1", [req.params.email])
        res.json(user.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.post("/addUser", async(req,res) => {
    const {username, email, password} = req.body
    const newUser = await pool.query("insert into users(username, email, password) values($1, $2, $3)", [username, email, password])
    res.json(newUser)
})

// delete user
app.delete("/deleteUser/:email", async(req,res) => {
    try {
        const user = await pool.query("delete from users where email = $1", [req.params.email])
        res.json(user)
    } catch (error) {
        console.error(error.message)
    }
})


// blogs
app.post("/addBlog", async(req,res) => {
    try {
        const {title, email, author, date, description} = req.body
        const newBlog = await pool.query("insert into blogs(title, email, author, date, description) values($1, $2, $3, $4, $5)",[title, email, author, date, description])
        res.json(newBlog)
    } catch (error) {
        console.error(error.message)
    }
})

// blog using id
app.get("/getBlog/:id", async(req,res) => {
    try {
        const blog = await pool.query("select * from blogs where id = $1", [req.params.id])
        res.json(blog.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// blog using date
app.get("/getCreatedBlog/:date", async(req,res) => {
    try {
        const blog = await pool.query("select * from blogs where date = $1", [req.params.date])
        res.json(blog.rows)
    } catch (error) {
        console.error(error.message)
    }
})


// delete blog using id
app.delete("/deleteBlog/:id", async(req,res) => {
    try {
         const blog = await pool.query("delete from blogs where id = $1", [req.params.id])
        res.json(blogemail, )
    } catch (error) {
        console.error(error.message)
    }
})

app.delete("/deleteblogs/:email", async(req,res) => {
    try {
         const blog = await pool.query("delete from blogs where email = $1", [req.params.email])
        res.json(blogemail)
    } catch (error) {
        console.error(error.message)
    }
})


// all blogs
app.get("/getBlogs", async(req,res) => {
    try {
        const blogs = await pool.query("select * from blogs")
        res.json(blogs.rows)
    } catch (error) {
        console.error(error.message)
    }
})










const PORT = 5000
app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})