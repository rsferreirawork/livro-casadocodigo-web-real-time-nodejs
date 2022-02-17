exports.notFound = (req, res) => {
    res.status(404);
    res.render('not-found');
};

exports.serverError = (error, req, res) => {
    res.status(500);
    res.render('server-error', {error});
};