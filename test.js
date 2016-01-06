var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var jsmap = {};
var cssmap = {};
var path = "./front-ejs/"

app.set("view engine","ejs");
app.use(bodyParser());

app.get("/main/",function(req,res){
	app.use("/views/front-css", express.static(__dirname + '/views/front-css/main/'));
	app.use("/views/front-js", express.static(__dirname + '/views/front-js/main/'));
    res.render(path + "main/index", {
    	"title":"test",
    	"layout":false,
    	"users":[
    		{
    			"name" : "liuhujia",
    			"email" : "liuyouzhao@hotmail.com",
    			"jump" : "./#haha"
    		},
    		{
    			"name" : "kaka",
    			"email" : "kaka@gmail.com",
    			"jump"  : "./#houhou"
    		},
    		{
    			"name" : "messi",
    			"email" : "messi@gmail.com",
    			"jump"  : "./#hehe"
    		}
    	]
    });
    console.log(req.query);
});


/*
Invites
====================================================================================================
*/
app.get("/invite/1*",function(req,res){
	app.use("/img", express.static(__dirname + '/views/front-img/invite/'));
	app.use("/invite", express.static(__dirname + '/views/front-img/invite/'));
	app.use("/invite", express.static(__dirname + '/views/front-css/invite/'));
	app.use("/invite", express.static(__dirname + '/views/front-js/invite/'));

    res.render(path + "invite/index", {
        "header":"The Main Introduce",
        "title":"Educations, Specialties and Interests",
        "footer":"Steven. HangZhou. CN.",
        "layout":false
    });
});

app.get("/invite/2*",function(req,res){
    app.use("/img", express.static(__dirname + '/views/front-img/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-img/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-css/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-js/invite/'));

    res.render(path + "invite/services", {
        "header":"My Experimence in Internet Technology and Programming.",
        "title":"Career Path, Project Experimence, Performence",
        "footer":"Steven. HangZhou. CN.",
        "layout":false
    });
});

app.get("/invite/3*",function(req,res){
    app.use("/img", express.static(__dirname + '/views/front-img/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-img/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-css/invite/'));
    app.use("/invite", express.static(__dirname + '/views/front-js/invite/'));

    res.render(path + "invite/projects", {
        "header":"My Ability of Internet Technology",
        "title":"Computer Languages, Code Frameworks and Advantage",
        "footer":"Steven. HangZhou. CN.",
        "layout":false
    });
});


/**
Special request, form handing
*/
app.post("/invite/apply_user_uuid*",function(req, res){
    console.log(req.body);

    /// here request http
    /// end.
    res.render(path + "invite/state", {
        "state_text":"申请提交成功! 3秒后跳转!"
    })
    //res.redirect("/invite/2?uuid=aabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghhaabbccddeeffgghh");
});



// app.use("/views/front-css", express.static(__dirname + '/views/front-css'));
// app.use("/views/front-js", express.static(__dirname + '/views/front-js'));



app.listen(8081);