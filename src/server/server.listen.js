export default (app) => {
    
    let PORT = 3001; 
    
    app.listen(PORT, ()  => {
        console.log(`Express server started on port: ${PORT}`);
    });
}