var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(

            "<h1>Ebanking Web Homapage </h1>"            
            +"<hr/>"
            +"<h3>Services Available</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Opening bank account</li>"
            +"<li>Check account balance</li>"
            +"<li>Check account statement</li>"
            +"<li>Block Transactions</li>"
            +"<li>Reissue check book</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Ebanking aboutus </h1>"
            +"<hr/>"
            +"<h3>Banking for you 24*7</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ranjan</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Ebanking Login </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("Ebanking server running on port 9000");