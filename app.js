const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./model/blogSchema')


//express app
const app = express();
const db = 'mongodb+srv://****:****@cluster0.1wrpd.mongodb.net/Node?retryWrites=true&w=majority';
mongoose.connect(db)
.then((result) => app.listen(5000), console.log('Listening to port 5000'))
.catch((err) => console.log(err));


//set veiw engine
app.set('view engine', 'ejs');

    
app.use(express.static('public'))


app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('host:', req.hostname)
    next()
})

app.use((req, res, next) => {
    console.log(res.locals.path = req.path)
    next()
})

app.use((req, res, next) => {
    console.log('morgan')
    next()
})
/////////======testing db======/////////

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'About new blog',
//         body: 'More about blog'
//     })
//     blog.save()
//     .then(result => {
//         res.send(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// });

// app.get('/all-blogs', (req, res) =>{
//     Blog.find().then(result => {
//         res.send(result);
//     }).catch(err => {
//         console.log(err)
//     })
// })

////////======================////////


app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    // const blogs =[
    //     {title: 'Timothy finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sequi.'},
    //     {title: 'Grace finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sequi.'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sequi.'},
    // ];

    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.send('<p>About Us</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.status(200).render('about', {title: 'About Page'})
});

app.get('/about-us', (req, res) => {
    res.redirect('/about', {title: 'About'})
});

app.get('/blogs/create', (req, res) => {
    res.status(200).render('create', {title: 'Create Page'})
});

app.get('/blogs', (req, res) =>{
    Blog.find().then(result => {
        res.render('index', {blogs: result, title: 'All Blogs'} )
    }).catch(err => {
        console.log(err)
    })
})

app.post('/blogs', (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/blogs/:id', (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {blog: result, title: 'Blog Detail'})
    })
    .catch(err => {
        console.log(err);
    })
})

app.delete('/blogs/:id', (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => res.json({redirect: '/blogs'}))
    .catch(err => console.log(err))
})

// app.get('/single-blog', (req, res) =>{
//     Blog.findById('655342a8ad8ffdc04f65fa2e').then(result => {
//         res.send(result)
//     }).catch(err => {
//         console.log(err)
//     })
// })

//404 page
app.all('*', (req,res) => {
    // res.send('<p>Page not found</p>')
    res.status(404).render('404', {title: '404 Page'});
})