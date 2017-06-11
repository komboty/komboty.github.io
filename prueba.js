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
    
    	var descriptor = {
        	blocks: [
           
			/*[' ','Derecha', 'derecha'],
			[' ','Izquierda', 'izquierda'],*/
			[' ','Girar a la %m.direccion', 'girar', 'izquierda'],
			[' ','Mover hacia %m.sentido', 'mover', 'adelante'],
			['r', 'Imprimir', 'imprimir'],
			[' ', 'Borrar', 'borrar'],
			//['h', 'Comenzar', 'comenzar']
        	],
		menus: {
        	direccion: ['derecha', 'izquierda'],
		sentido: ['adelante', 'atras']
		}
    	};
    
    ScratchExtensions.register('Pruebas', descriptor, this);
})({});