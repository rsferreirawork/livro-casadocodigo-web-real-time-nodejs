module.exports = (req, res, next) => {
    if(!res.session.usuario){
        return res.redirect('/');
    }

    return next();
};