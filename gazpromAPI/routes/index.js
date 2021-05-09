var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let towerIndicator = [
        {
            "id": "1",
            "title": "Уровень карналитав силосной башне №1",
            "value": 1065,
            "minValue": 800,
            "maxValue": 1086
        },
        {
            "id": "2",
            "title": "Уровень карналитав силосной башне №2",
            "value": 998,
            "minValue": 800,
            "maxValue": 1663
        },
        {
            "id": "3",
            "title": "Уровень карналитав силосной башне №3",
            "value": 578,
            "minValue": 800,
            "maxValue": 1521
        },
        {
            "id": "4",
            "title": "Уровень карналитав силосной башне №4",
            "value": 600,
            "minValue": 650,
            "maxValue": 1200
        },
        {
            "id": "5",
            "title": "Уровень карналитав силосной башне №5",
            "value": 1040,
            "minValue": 650,
            "maxValue": 1200
        }
    ];
    console.log("SUKA")
    res.json({
        towerIndicator,
        status: 'success'
    })
});

module.exports = router;
