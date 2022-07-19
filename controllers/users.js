const User = require('../models/schema');

exports.createUsers = (req, res)=>{
    const data = new User(req.body)
    console.log(data)
    data.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
        // res.send('Product Created successfully')
        console.log('successfully uploaded');
    })
}

exports.deleteUsers = async (req, res)=>{
    // console.log(req.params.id);
    try{
        const result = await User.findByIdAndDelete(req.params.id)
        res.redirect('/');
    }catch (error){
        console.log(error);
    }
}

exports.getalldoc = async (req, res)=> {
    try{
        const result = await User.find()
        // console.log(result);
        res.render('index',{data: result});
    }catch (error) {
        console.log(error)
    }
};

exports.editUsers = async (req, res)=>{
    // console.log(req.params.id)
    try {
        const result = await User.findById(req.params.id);
        // console.log(result);
        res.render('edit',{data : result});
    } catch (error) {
        console.log(error);
    }
    
}

exports.updateUsers = async (req, res)=>{
    // console.log(req.params.id);
    // console.log(req.body)
    try {
        const result = await User.findByIdAndUpdate(req.params.id,req.body);
        console.log(req.body);
    } catch (error) {
        console.log(error)
    }
    res.redirect('/');
}