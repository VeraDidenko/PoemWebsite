exports.homePage = function(req, res) {
    res.render('homePage', {
        pageTitle: 'Three Poems'
    });
};
