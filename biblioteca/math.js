function soma(z=2, w=4) { 
    return z + w; 
} 

const subtrair = function(z=2, w=4) { 
    return z - w; 
}; 

function multiplicacao(a=2, b=4) { 
    return a * b; 
} 

const divisao = function(a=2, b=4) { 
    return a / b; 
};

module.exports = { soma, subtrair, multiplicacao, divisao };
