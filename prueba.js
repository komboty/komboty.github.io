(function() {
    var ext = this;
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.p = function() {	
	return 5;
    };

    var descriptor = {
        blocks: [
            ['R', 'prueba', 'p'],
        ]
    };

    ScratchExtensions.register('hola', descriptor, ext);
})({});