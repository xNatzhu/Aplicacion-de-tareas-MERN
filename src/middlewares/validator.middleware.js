const validateSchema =(schema) => (req, res, next) => {
    
    try{
        schema.parce(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error})
    }
    
}