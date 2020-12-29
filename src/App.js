import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Itential React App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Users</Button>
          <Button color="inherit">SampleComponet</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Go to Portal', 'My request', 'Request Items', 'Request Management'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['My Teams Items', 'My Tasks', 'My Teams Tasks'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div class="form">
          <div class="form_Table">
            <table className="form_table">
              <tr>
                <th colSpan="2">RITM10234353</th>
              </tr>
              <tr>
                <td>Type of Request</td>
                <td><input type="text" id="Type_of_Request" name="Type_of_Request"/></td>
              </tr>
              <tr>
                <td>Region</td>
                <td><input type="text" id="Region" name="Region"/></td>
              </tr>
              <tr>
                <td>Requester</td>
                <td><input type="text" id="Requester" name="Requester"/></td>
              </tr>
              <tr>
                <td>Title</td>
                <td><input type="text" id="Title" name="Title"/></td>
              </tr>
              <tr>
                <td>Clarity ID</td>
                <td><input type="text" id="Clarity_ID" name="Clarity_ID"/></td>
              </tr>
              <tr>
                <td>EMI</td>
                <td><input type="text" id="EMI" name="EMI"/></td>
              </tr>
              <tr>
                <td>Site Resiliency</td>
                <td><input type="text" id="Site_Resiliency" name="Site_Resiliency"/></td>
              </tr>
              <tr>
                <td>Persistence</td>
                <td><input type="text" id="Persistence" name="Persistence"/></td>
              </tr>
              <tr>
                <td>Assignee</td>
                <td><input type="text" id="Assignee" name="Assignee"/></td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td><input type="text" id="Release_Date" name="Release_Date"/></td>
              </tr>
              <tr>
                <td>Sftp/Storage Traffic</td>
                <td><input type="text" id="Sftp/Storage_Traffic" name="Sftp/Storage_Traffic"/></td>
              </tr>
              <tr>
                <td>Request Item</td>
              </tr>
            </table>
          </div>

          <div className="Table">
            <table className="Detail" cellSpacing="0" cellPadding="10">
              <tr>
                <th>Service URL</th>
                <th>Service Port</th>
                <th>Server</th>
                <th>Server IP</th>
                <th>Monitor type</th>
                <th>Health Check</th>
              </tr>
              <tr>
                <td>apac-echamps-mq-itential-test.hk.hsbc</td>
                <td>9000</td>
                <td>GBW00140183.systems.uk.hsbc</td>
                <td>128.13.75.215</td>
                <td>https</td>
                <td>/health</td>
              </tr>
              <tr>
                <td>apac-itential-test-tko.uk.hsbc</td>
                <td>9000</td>
                <td>GBW00140184.systems.uk.hsbc</td>
                <td>128.13.75.216</td>
                <td>https</td>
                <td>/health</td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;