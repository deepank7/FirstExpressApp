var express = require("express");
var app = express();

app.get("/", (req, res) => {
    //res.send("Hi There, Welcome to Express")
    res.send({object:['red','green']});
});

app.get("/speak/:animal", (req, res) => {
    speak = {
        dog: "Woof! Woof",
        cat: "Meow! Meow",
        cow: "Mow! Mow"
    }
    var animal = req.params.animal;
    var speak = speak[animal];
    res.send("The " + animal + " says " + speak);

});

app.get("/repeat/:message/:num", (req, res) => {
    var msg = req.params.message;
    var times = Number(req.params.num);
    var result = "";
    for (var i = 0; i < times; i++) {
        result += msg + " ";
    }
    res.send(result);
});

app.get("*", (req, res) => {
    res.send("You've entered a wrong url")
})
app.get("/r/:subredditName", (req, res) => {
    var subred = req.params.subredditName;
    res.send("Welcome to " + subred);
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});