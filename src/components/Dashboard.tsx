import React, { useEffect } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { useSelector } from '../store/index';
import useChat from '../hooks/useChat';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    margin: '50px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  usersWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey',
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px',
  },
  chatBox: {
    width: '85%',
  },
  button: {
    width: '15%',
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const { users } = useSelector(state => state);
  const { createUser } = useChat();

  useEffect(() => {
    createUser();
  }, []);

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h4" component="h4" align="center">
        Chat App
      </Typography>
      <div className={classes.flex}>
        <div className={classes.usersWindow}>
          {users.length ? (
            <>
              <Typography>Active Users</Typography>
              <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                {users.map(user => (
                  <ListItem button key={user.userId}>
                    <ListItemText primary={user.userName} onClick={() => {}} />
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <Typography>No users</Typography>
          )}
        </div>
        <div className={classes.chatWindow}>
          <Typography>Chat goes here</Typography>
        </div>
      </div>
      <div className={classes.flex}>
        <TextField
          label="Send a message"
          className={classes.chatBox}
          onChange={() => {}}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {}}
        >
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default Dashboard;
