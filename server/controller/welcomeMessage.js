// Default welcome message at root/index page...

const welcomeMessage = (req, res) => {

    res.send(` 
    <head>
        <title>Server On! ✅</title> 
        <link rel="icon" href="/fav.ico">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
            body {
                text-align       : center;
                background-color : #eee;
            }
            h1{
                width         : max-content;
                margin        : 40px auto 00px; 
                padding       : 20px 30px 24px;
                font-family   : 'Nunito', sans-serif;
                font-size     : 42px;
                color         : #111;
                border        : 1px solid black;
                border-radius : 3px;
            }
            img{
                width  : 750px;
                height : 750px;
            }
        </style>
    </head>

    <body>
        <h1> Admin Dashboard | Server is running... ✅ </h1>
        <img src='/server.png'/>
    </body>
    `);
}

export default welcomeMessage;