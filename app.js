var  faker = require('faker');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'join_us'
})
//SELECTING DATA
// var q = 'SELECT * FROM users ';
// connection.query(q,function(error,results,fields){
//   if(error)throw error;
//   console.log(results[0]);
// })
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();``