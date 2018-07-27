
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'agendamob'
});


connection.connect(function(err){
  if(err) return console.log('Erro!'+err);
  console.log('A conexão foi estabelecida!');
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
});