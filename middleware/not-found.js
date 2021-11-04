const notFound = (req, res) => {
    res.status(404).send('<html></body><h1 style="color:red; font-family:cursive;">Route does not exist.</h1></body></html>');
};

module.exports = notFound;