var express = require('express');
var router = express.Router();
var MateriaPrima = require('../models/materiaPrima');

/* GET home page. */


router.post('/salvar', function(req, res, next) {
  var materiaPrima = new MateriaPrima();
  materiaPrima.nome = req.body.nome;
  materiaPrima.salvar(function(rows, err){
    //se der tudo certo ele irá exe. a function e chamará de volta o end. '/'
    if(err){
      req.send("Erro ao salvar", 500);
    }
    else{
      res.redirect('/');
    };
  });
});

router.get('/', function(req, res, next){
	MateriaPrima.todos(function(rows, err){
		if(err) res.send("Erro ao buscar", 500);
		else{
			res.render('index',{
				materias: rows
			});
		}
	});
});

router.get('/editar', function(req, res, next){
  MateriaPrima.buscaPorId(req.query.id, function(rows, err){
    if(err) res.send("Erro ao buscar", 500);
    else{
      if(rows.length > 0){
        var c = rows;
        res.render('editar',{
          title: 'Alterar Materia',
          materia: c[0]
        });
      }
    }
  });
});

router.post('/alterar', function(req, res, next){
  var materiaPrima = new MateriaPrima();
  materiaPrima.nome = req.body.nome;
  materiaPrima.id = req.body.id;
  materiaPrima.alterar(function(rows, err){
    if(err){
      req.send("Erro ao alterar", 500);
    }
    else{
      res.redirect('/')
    }
  })
})

router.get('/buscar', function(req, res, next){
  MateriaPrima.buscaPorId(req.query.id, function(rows, err){
    if(err) res.send("Erro ao buscar", 500);
    else{
      if(rows.length > 0){
        var c = rows;
        res.render('excluir',{
          title: 'Excluir Materia',
          materia: c[0]
        });
      }
    }
  });
});

router.post('/excluir', function(req, res, next){
  var materiaPrima = new MateriaPrima();
  materiaPrima.id = req.body.id;
  materiaPrima.excluir(function(rows, err){
    if(err){
      req.send("Erro ao alterar", 500);
    }
    else{
      res.redirect('/')
    }
  })
})

module.exports = router;