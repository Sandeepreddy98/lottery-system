const generateLines = (n) => {
    return Array.from({ length: n }, () => 
        Array.from({ length: 3 }, () => Math.floor(Math.random() * 3))
    );
};

module.exports = generateLines