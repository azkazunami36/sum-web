const fs = require("fs");
const express = require("express");
const app = express();

app.listen(80, () => { console.log("準備完了！"); });

app.get("/*", (req, res) => {
    console.log(req.url);
    console.log("ok");
    const url = req.url.split("?")[0];
    console.log(url)
    switch (url) {
        case "/": {
            res.status(200);
            res.contentType("text/html;charset=utf-8");
            res.end(fs.readFileSync("public/index.html"));
            break;
        }
        case "/favicon.ico": {
            res.status(200);
            res.contentType("png");
            res.end(fs.readFileSync("public/favicon.png"));
            break;
        }
        case "/data/*": {
            break;
        }
    };
});