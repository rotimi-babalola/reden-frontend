import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import io from 'socket.io-client';
import faker from 'faker';
import { IUser } from 'src/store/types';
import { addUsers, removeUser } from '../store/actions';

const useChat = () => {
  const socket = io(':5000');
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('new user', (users: IUser[]) => {
      dispatch(addUsers(users));
    });

    socket.on('user disconnected', (userId: string) => {
      dispatch(removeUser(userId));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const createUser = () => {
    const userId = uuid();
    const userName = faker.internet.userName();
    // emit event
    socket.emit('new user', { userId, userName });
  };

  // const sendMessage = ({ message }) => {
  //   socketRef.current.emit('newChatMessage', { message });
  // };

  return { createUser };
};

export default useChat;
