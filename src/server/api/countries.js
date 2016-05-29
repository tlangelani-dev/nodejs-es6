export default (app) => {
    
    app.get('/countries', (req, res) => {
        res.status(200).json(['South Africa', 'USA']);
    });
    
}
