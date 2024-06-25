exports.homepage = (req, res) => {
    res.render('index', { title: 'Home', layout:'../views/layouts/front-page' });
};

exports.about = (req, res) => {
    res.render('about', { title: 'About' });
};
