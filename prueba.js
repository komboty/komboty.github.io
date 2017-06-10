(function() {
        
    this._shutdown = function() {};

    this._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    this.holi = function() {	
	console.log("holi");
    };

    var descriptor = {
        blocks: [
            ['R', 'prueba', 'holi'],
        ]
    };

    ScratchExtensions.register('holi', descriptor, this);
})({});