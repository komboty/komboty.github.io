(function(ext) {
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.holi = function() {
	console.log("holi");
    };

    var descriptor = {
        blocks: [
            [' ', 'prueba', 'holi'],
        ]
    };

    ScratchExtensions.register('boty', descriptor, ext);
})({});