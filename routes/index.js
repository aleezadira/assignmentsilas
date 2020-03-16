const router = require('express').Router();

const students = [
    {
        name: "Abigail Klu",
        DOB: "12/04/1992",
        program: "BSC CS",
        level: "400",
        image:"/images/Abigail Klu.jpeg"
    },
    {
        name: "Eric Agleode",
        DOB: "25/11/1996",
        program: "BSC CS",
        level: "400",
        image:"/images/Eric Agleode.jpeg"
    },
    {
        name: "Lola Jenner",
        DOB: "19/02/1992",
        program: "BSC CS",
        level: "400",
        image :"/images/lola Jenner.jpeg"
    },
    {
        name: "Vivian Dunuo",
        DOB: "05/08/1992",
        program: "BSC CS",
        level: "400",
        image:"/images/Vivian Dunuo.jpeg"
    },
    {
        name: "Lili Couper",
        DOB: "27/10/1994",
        program: "BSC CS",
        level: "400",
        image:"/images/Lili Couper.jpeg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;