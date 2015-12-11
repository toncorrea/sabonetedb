var express = require('express');
var router = express.Router();
var MateriaPrima = require('../models/materiaPrima');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/salvar', function(req, res, next) {
  var materiaPrima = new MateriaPrima();
  materiaPrima.nome = req.body.nome; // nome

  materiaPrima.salvar(function(rows, err){
    if(err){
      req.send("Erro ao salvar", 500);
    }
    else{
      res.redirect('/');
    };
  });
});

router.get('/lista', function(req, res, next){
	MateriaPrima.todos(function(rows, err){
		if(err) res.send("Erro ao buscar", 500);
		else{
			res.render('tabela',{
				materias: rows
			})
		}
	})
})



module.exports = router;