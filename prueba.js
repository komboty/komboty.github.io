(function() {
	    
    	this._shutdown = function() {};

    	this._getStatus = function() {
        	return {status: 2, msg: 'Ready'};
    	};

   
	
	this.holi =  function(nombre){
		cadena = "Neta";
		if(nombre == "javier"){
		console.log("Holi");
		return cadena;
		}else{
			return "usuario no autorizado";
		}
		
		
	};

	this.secuencia1 = function(algo){
		if(algo == 3){
			alert("entro al if");
			console.log("bien mi chavo");
			var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

            saveAs(blob, "hello world.txt");
		}else{
			console.log("mal mi chavo");
		}
	};

	this.comenzar = function(){
		return;
	};
    
    	var descriptor = {
        	blocks: [
           
			['r','hello world+ %s', 'holi','nombre'],
			['w', 'Secuencia 1 %n', 'secuencia1','algo'],
			['h', 'Comenzar', 'comenzar']
        	]
    	};
    
    ScratchExtensions.register('Pruebas', descriptor, this);
})({});