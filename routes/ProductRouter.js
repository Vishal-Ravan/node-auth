const ensureAuthenticated = require("../middleware/Auth");

const router = require("express").Router();

router.get("/",ensureAuthenticated, (req,res)=>{
    res.status(200).json([

        {
            name:"mobile",
            price : 10000
        },
        {
            name:"Tv",
            price : 20000
        },

    ])
})


module.exports = router;
