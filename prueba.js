var cadena = " ";

(function() {
	    
    	this._shutdown = function() {};

    	this._getStatus = function() {
        	return {status: 2, msg: 'Ready'};
    	};
   
	
	this.derecha =  function(){
		bloque = "derecha";
		cadena = cadena + bloque + " ";
	};
	
	this.izquierda =  function(){
		bloque = "izquierda";
		cadena = cadena + bloque + " ";
	};

	this.imprimir = function(){				
		return cadena;
	};

	this.borrar = function(){		
		cadena = " ";
	};

	this.comenzar = function(){
		return true;
	};
    
    	var descriptor = {
        	blocks: [
           
			[' ','Derecha', 'derecha'],
			[' ','Izquierda', 'izquierda'],
			['r', 'Imprimir', 'imprimir'],
			[' ', 'Borrar', 'borrar'],
			['h', 'Comenzar', 'comenzar']
        	]
    	};
    
    ScratchExtensions.register('Pruebas', descriptor, this);
})({});
    ScratchExtensions.register('Pruebas', descriptor, this);
})({});