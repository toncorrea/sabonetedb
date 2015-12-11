require('../db/conection');
var MateriaPrima = function(){
  this.id;
  this.nome;

  this.salvar = function(callback){
    //db.cnn.exec("insert into materia_prima(id, nome) values("+ this.id +",'"+ this.nome +"')", callback)
    db.cnn.exec("insert into materia_prima(nome) values('"+ this.nome +"')", callback);
  }

  this.alterar = function(callback){
    db.cnn.exec("update materia_prima set nome='"+ this.nome +"' where id="+this.id, callback);
  }

  this.excluir = function(callback){
    console.log("=== this.id ===")
    console.log(this.id)
    //db.cnn.exec("update materia_prima set nome='"+ this.nome +"' where id="+this.id, callback);
    db.cnn.exec("delete from materia_prima where id="+this.id, callback);
  }
}

MateriaPrima.todos = function(callback){
  db.cnn.exec("select * from materia_prima", callback);
}

MateriaPrima.buscaPorId = function(id, callback){
  db.cnn.exec("select * from materia_prima where id="+id, callback);
}

module.exports = MateriaPrima;