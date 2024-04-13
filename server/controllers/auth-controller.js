const register = async(req,res)=>{
    try {
        res.status(200).send("This is registration page using controller");
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,res)=>{
    try {
        res.status(200).send("This is login page using controller");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {register,login}