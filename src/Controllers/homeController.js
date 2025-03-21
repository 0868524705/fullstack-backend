const getHomaPage = (req, res) => {
    res.send('This is the home page')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomaPage
    , getTestPage
}