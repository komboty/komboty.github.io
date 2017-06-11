//http://scratchx.org/?url=https://komboty.github.io./prueba.js

var cadena = " ";

(function() {
	    
    	this._shutdown = function() {};

    	this._getStatus = function() {
        	return {status: 2, msg: 'Ready'};
    	};
   
	
	/*this.derecha =  function(){
		bloque = "derecha";
		cadena = cadena + bloque + " ";
	};
	
	this.izquierda =  function(){
		bloque = "izquierda";
		cadena = cadena + bloque + " ";
	};*/

	this.girar =  function(giro){
		cadena = cadena + giro + " ";
	};

	this.mover =  function(movimiento){
		cadena = cadena + movimiento + " ";
	};

	this.imprimir = function(){				
		return cadena;
	};

	this.borrar = function(){		
		cadena = " ";
	};

	/*this.comenzar = function(){
		return true;
	};*/
        this.comenzar = function(){
		
		return true;
	};
	this.arrancar = function(){
		cadena = cadena + " Motores encendidos";
		
	};
 	this.frenar = function(){

	cadena = cadena + " Motores apagados ";

	};
	this.estado = function(){
		var estatus;
		
		estatus = cadena;
		console.log(estatus);
		return cadena;
	};
	this.avanzar = function(distancia){
		cadena = cadena + " Avanzo "+distancia;
		
	}
	this.derecha = function(distancia){
		cadena = cadena + "Derecha "+distancia +" grados";
		
	}
	this.izquierda = function(distancia){
		cadena = cadena + " Izquierda "+distancia+" grados";
		
	}
    	var descriptor = {
        	blocks: [
           
			/*[' ','Derecha', 'derecha'],
			[' ','Izquierda', 'izquierda'],*/
			[' ','Girar a la %m.direccion', 'girar', 'izquierda'],
			[' ','Mover hacia %m.sentido', 'mover', 'adelante'],
			['r', 'Imprimir', 'imprimir'],
			[' ', 'Borrar', 'borrar'],
			//['h', 'Comenzar', 'comenzar']
			['h', 'Empezar', 'comenzar'],
			[' ', 'Arrancar motores', 'arrancar'],
			[' ','Frenar motores','frenar'],
			['r', 'Consultar estado','estado'],
			[' ', 'Avanzar %n metros', 'avanzar','distancia'],
			[' ', 'Derecha %n grados', 'derecha','grados'],
			[' ', 'Izquierda %n grados', 'izquierda','grados']
        	],
		menus: {
        	direccion: ['derecha', 'izquierda'],
		sentido: ['adelante', 'atras']
		}
    	};
    
    ScratchExtensions.register('Pruebas', descriptor, this);
})({});
