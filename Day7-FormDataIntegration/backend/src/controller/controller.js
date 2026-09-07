const create = async (req, res) => {
    try {
        let body = req.body;
        let file = req.file;
        console.log("hello");
        
        console.log(body);
        console.log(file);
        console.log(req.file);
        

        res.status(200).json({
            message:"User created successfully"
        })
        
    } catch (error) {
        console.log("error in ceaete ", error);
        
    }
}

module.exports = {create}