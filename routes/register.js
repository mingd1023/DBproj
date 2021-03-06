const express = require('express');
let models = require('../models');
let router = express.Router();

router.post("/", (req, res) => {
    let data = req.body;
    let createMember = (em, pw, utype) => {
        models.Users.create({
            email: em,
            password: pw,
            type: utype
        }).then(result => {
            res.json({"result": "success"});
        }).catch(error => {
            console.error(error);
            res.json({"result": "failed"});
        })
    }

    if(!data.email || !data.pw || !data.type) {
        console.log(data);
        res.json({"result": "short"});
        return;
    }

    models.Users.findOne({     // 같은 아이디가 있는지 확인 
        where: {
            email: data.email
        }
    }).then(result => {
        if(!result) {  // 없다는 뜻
            createMember(data.email, data.pw, data.type);
        } else {
            res.json({"result": "occupied"});
        }
    }).catch(error => {
        console.error(error);
        res.json({"result": "failed"});
    })
});

module.exports = router;