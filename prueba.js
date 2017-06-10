new (function() {
	
    var ext = this;
	var str;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

   
	
	//Codigo javierniano
	ext.hello_World =  function(nombre){
		cadena = "Hello World!";
		if(nombre == "javier"){
		console.log("Hello world");
		return cadena;
		}else{
			return "usuario no autorizado";
		}
		
		
	};
	ext.secuencia1 = function(algo){
		if(algo == 3){
			alert("entro al if");
			console.log("bien mi chavo");
			var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

            saveAs(blob, "hello world.txt");
		}else{
			console.log("mal mi chavo");
		}
	};
	ext.comenzar = function(){
		return;
	};
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
           
			['r','hello world+ %s', 'hello_World','nombre'],
			['w', 'Secuencia 1 %n', 'secuencia1','algo'],
			['h', 'Comenzar', 'comenzar']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Javier Pruebas', descriptor, ext);
})();