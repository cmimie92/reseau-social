
var express=require('express');
var bodyParser = require('body-parser');
var app=express();
var MongoClient = require('mongodb').MongoClient;
var myDb;
var URL = 'mongodb://localhost:27017/ifocop';
var cors =require('cors');

var session = require('express-session');
var cookieParser = require('cookie-parser')
app.use(cors())

app.use('/demande',express.static(__dirname+'/html'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

//app.set('view engine', 'pug');
//app.set('views','html');
let tableauPost =[];
let tableauComment =[];
let tableauFriends =[];
let tableauMessages =["bienvenue sur le super reseau"];



// registration
app.post('/registration', function(req,res){

console.log("coucou");
console.log(req.body);
console.log(req.body.username);

  myDb.collection('usersbis').insert({username:req.body.username, firstname:req.body.firstname, lastname:req.body.lastname, email:req.body.email, password: req.body.password, friends: tableauFriends, post:tableauPost, comments:tableauComment, messages:tableauMessages, photos:req.body.photo }, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('probleme');

        res.send('error');

    }else{
    let username = data.username || '';
    let firstname = data.firsname || '';
    let lastname = data.lastname || '';
    let email = data.email || '';
    let password = data.password || '';



      console.log(data);
        res.send(data);
  //    res.send(data);

      };
    });
  });



//identification des inscrit
app.post('/connexion', function(req,res){

    console.log("coucou");
console.log(req.body);
console.log(req.body.username);



  myDb.collection('usersbis').findOne({username:req.body.username, password: req.body.password  }, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

        res.send('error');

    }else{
    let username = data.username || '';
    let password = data.password || '';



      console.log(data);
      res.send(data);
        // adversaire: adversaire
      };
    });
  });

//recuperer les amis
app.get('/friends', function(req,res){
  myDb.collection('usersbis').find().toArray(function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{

    let prenom = data.prenom || '';
    let nom = data.nom || '';
    console.log(data.nom);
    res.send(data);

    }
  });
});


//recuperer la data
app.post('/data', function(req,res){
    myDb.collection('usersbis').findOne({username:req.body.username, password: req.body.password  }, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{
    res.send(data);

    }
  });
});


//ecrire la datapost
app.post('/datapost', function(req,res){

    myDb.collection('usersbis').update({username:req.body.username, password: req.body.password  },{$push:{post:req.body.comment}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});


//ecrire la datacomment
app.post('/datacomment', function(req,res){

    myDb.collection('usersbis').update({username:req.body.username, password: req.body.password  },{$push:{comments:{commentFirstname:req.body.commentFirstname,commentLastname:req.body.commentLastname,comments:req.body.commentaire}}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});


//add friend
app.post('/addfriend', function(req,res){

    myDb.collection('usersbis').update({id:req.body.id, username:req.body.username, password: req.body.password  },{$push:{friends:req.body.identite}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});

//add friend
app.post('/deletefriend', function(req,res){

    myDb.collection('usersbis').update({id:req.body.id, username:req.body.username, password: req.body.password  },{$pull:{friends:{_id:req.body.nombre._id}}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});



app.post('/datamessage', function(req,res){

    myDb.collection('usersbis').update({username:req.body.usernameRecever, password: req.body.passwordRecever  },{$push:{messages:{messageFirstname:req.body.firstnameSender,messageLastname:req.body.lastnameSender,messagerie:req.body.message}}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});

app.post('/changeimage', function(req,res){

    myDb.collection('usersbis').update({username:req.body.username, password: req.body.password },{$set:{photos:req.body.newPhoto}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});



//ecrire la datapost
app.post('/deletecomment', function(req,res){

    myDb.collection('usersbis').update({username:req.body.username, password: req.body.password  },{$pull:{comments:req.body.theComment}}, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});


//add friend
app.post('/admin', function(req,res){

    myDb.collection('usersbis').deleteOne({ username:req.body.username, password: req.body.password  }, function(err,data){
    console.log(data);
    if(err || !data){
      console.log('ce pseudo n existe pas');

    }else{


    res.send(data);

    }
  });
});



MongoClient.connect(URL, function(err, db) {
  if (err) {
    return;
  }
  myDb=db;
  var server =app.listen(1337, function(){
    var portEcoute=server.address().port;
    console.log('ecoute sur le port 1337')
    const io = require('socket.io');
    let websocketServer = io(server);




  });
});
