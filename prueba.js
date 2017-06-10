new (function() {
    var ext = this;
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.p = function() {
	var h = "hola";
	return h;
    };

    var descriptor = {
        blocks: [
            ['R', 'prueba', 'p'],
        ]
    };

    ScratchExtensions.register('hola', descriptor, ext);
})();