// Website pages
const homeRoute = (req, res) => {res.send('Hello Quadri, this is your Home page');};
const dashboardRoute = (req, res) => {res.send('Welcome to Dashboard');};
const contactRoute = (req, res) => {res.send('Our contacts is here');};
const aboutRoute = (req, res) => {res.send('About our Website');};


module.exports = {
    homeRoute,
    dashboardRoute,
    contactRoute,
    aboutRoute
};
