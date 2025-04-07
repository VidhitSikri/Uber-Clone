const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server){
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        }
    });

    io.on('connection', (socket) => {
        console.log(`client connected: ${socket.id}`);

        socket.on('join' , async(data) => {
            const { userId , userType } = data;
            if(userType === 'user'){
                await userModel.findOneAndUpdate(userId, {socketId: socket.id});
            }

            else if(userType === 'captain') {
                await captainModel.findOneAndUpdate(userId, {socketId: socket.id});
            }
        });

        socket.on('disconnect', () => {
            console.log(`client disconnected: ${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId , message){
    if(io){
        io.to (socketId).emit('message', message);
    }else{
        console.log('Socket.io not initialized');
    }
}

module.exports = {
    initializeSocket,
    sendMessageToSocketId,
};