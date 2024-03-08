import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join-room')
  handleJoinRoom(@MessageBody() data: any, @ConnectedSocket() socket: Socket) {
    const { room, username } = data;
    socket.join(room);
    socket.emit('receive-msg', 'Welcome to the room');
    socket.broadcast.to(room).emit('receive-msg', `${username} has joined`);
  }

  @SubscribeMessage('send-msg')
  handleSendMessage(
    @MessageBody() msg: any,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.to('1').emit('receive-msg', msg);
  }
}
