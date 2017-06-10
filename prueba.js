new (function() {
    
var ext = this;


  
ext._shutdown = function() {};


    
   
ext._getStatus = function() {
        
return {status: 2, msg: 'Ready'};
    
};


    
    
ext.holi = function() {
     
console.log('quiobo');   
};

    

var descriptor = {
        
blocks: [
            ['w', 'holi', 'holi'],
        ]
    
};

    


ScratchExtensions.register('My first', descriptor, ext);

})();