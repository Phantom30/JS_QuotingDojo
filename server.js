const xp = require("express");
const path = require("path");
const bp = require("body-parser");
const router = require("./server/routes.js");
const flash = require('express-flash');
const session = require('express-session');
const moment = require('moment');
const app = xp();
app.set("views", path.join(__dirname, "/views"));
app.use(xp.static(path.join(__dirname, "./static")));
app.set("view engine", "ejs");
app.use(bp.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

router(app);

app.listen(8000, (errs)=>console.log(errs?errs:"QuotingDojo"));