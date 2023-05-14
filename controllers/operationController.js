exports.add_action = (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    res.send((num1 + num2).toString());
};

exports.sub_action = (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    res.send((num1 - num2).toString());
};

exports.multiply_action = (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    res.send((num1 * num2).toString());
};

exports.divide_action = (req, res) => {
    let num2 = parseInt(req.params.num2);
    if (num2 == 0){
        res.send('Division by zero Error! Please check the input data')
    }
    else{
        let num1 = parseInt(req.params.num1);
        res.send((num1 / num2).toString());
    }
};