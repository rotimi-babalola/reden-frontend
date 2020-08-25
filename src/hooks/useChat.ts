import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import faker from 'faker';
import { IChatMessage } from 'src/store/types';
import { addUsers, removeUser } from '../store/actions';

const useChat = () => {
  const socket = io(':5000');
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('new user', (users: string[]) => {
      dispatch(addUsers(users));
    });

    socket.on('user disconnected', (userName: string) => {
      dispatch(removeUser(userName));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const createUser = () => {
    let userName;
    const existingUser = localStorage.getItem('userName');
    if (existingUser) {
      socket.emit('new user', { userName: existingUser });
    } else {
      userName = faker.internet.userName();
      localStorage.setItem('userName', userName);
      // emit event
      socket.emit('new user', { userName });
    }
  };

  const sendMessage = ({ message, userName, id }: IChatMessage) => {
    socket.emit('chat message', { message, userName, id });
  };

  return { createUser, sendMessage };
};

export default useChat;
