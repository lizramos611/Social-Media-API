const { connect, connection }= require ('mongoose');

connect('mongodb://localhost/socialMediaDB', {
    useNewUrelParser: true,
    userUnifiedTopology: true,
});


module.exports = connection;