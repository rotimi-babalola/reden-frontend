import React from 'react';
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
  topicsWindow: {
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

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h4" component="h4">
        Chat App
      </Typography>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          {users ? (
            <Typography>No users</Typography>
          ) : (
            <List>
              {users.map(user => (
                <ListItem button key={user.id}>
                  <ListItemText primary={user} onClick={() => {}} />
                </ListItem>
              ))}
            </List>
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
          value=""
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
