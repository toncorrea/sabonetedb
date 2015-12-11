require('../db/conection');
var MateriaPrima = function(){
  this.id;
  this.nome;

  this.salvar = function(callback){
    //db.cnn.exec("insert into materia_prima(id, nome) values("+ this.id +",'"+ this.nome +"')", callback)
    db.cnn.exec("insert into materia_prima(nome) values('"+this.nome+"')", callback)
  }
  this.alterar = function(callback){
    db.cnn.exec("update materia_prima set nome='"+ this.nome +"' where id="+this.id);
  }
}

MateriaPrima.todos = function(callback){
  db.cnn.exec("select * from materia_prima", callback);
}

module.exports = MateriaPrima;