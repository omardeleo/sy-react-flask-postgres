import logo from './logo.svg';
import flaskLogo from './flask.png';
import expressLogo from './express.png';
import djangoLogo from './django.png';
import './App.css';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min"
import { useState, useEffect } from 'react';

import {
  Container,
  Link,
  List,
  Card,
  Chip,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    maxWidth: "1500px"
  },
  card: {
    width: "350px",
    height: "700px",
    padding: "0 15px",
    // marginRight: "15px"
  },
  cardHeader: {
    marginBottom: "40px"
  }
});

const codeBlock_1 =`65 |  const theme = createMuiTheme({ 
66 |    palette: {
67 |      type: 'dark',
68 |    }
69 |  });`

const codeBlock_2 =`65 |  const theme = createMuiTheme({ 
66 |    palette: {
67 |      type: 'light',
68 |    }
69 |  });`

const codeBlock_3 = `100 | seasons.map(season => <ListItem button><ListItemText primary={season}/></ListItem>) `;

const codeBlock_4 = `100 | seasons.map(season => <Chip label={season} />) `;

function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  });

  const seasons = ["Winter", "Spring", "Summer", "Fall"]


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters={true}
        maxWidth={false}
        className={classes.container}
      >
        <Card className={classes.card}>
          <h2 className={classes.cardHeader}>Update appearance</h2>
          <p>Modify the appearance of your app by using Material-UI's built-in themes, or 
      by creating a custom theme.</p>
      <p>To switch from <b>Dark Mode</b> to <b>Light Mode</b>, open <code>`src/App.js`</code> and replace the following code:</p>
          <pre className="line-numbers"><code className="language-js">
             { codeBlock_1 }
            </code></pre>
            <p>with:</p>
            <pre className="line-numbers"><code className="language-js">
             { codeBlock_2 }
            </code></pre>
            <p><Link color="secondary" href="https://material-ui.com/customization/theming/" target="_blank">Click here</Link> to learn more about Material-UI themes.</p>
        </Card>
        <Card className={classes.card}>
          <h2>Use Material-UI components</h2>
          <p>Lists and tables are some of the ways you can display data.</p>
          <List>
            { seasons.map(season => <ListItem button><ListItemText primary={season}/></ListItem>) }
          </List>
          <p>To render list items as chips, open <code>`src/App.js`</code> and replace the following code:</p>
          <pre className="line-numbers"><code className="language-js">
             { codeBlock_3 }
            </code></pre>
            <p>with:</p>
            <pre className="line-numbers"><code className="language-js">
             { codeBlock_4 }
            </code></pre>
          <p>Read the Material-UI docs to learn more about components: https://material-ui.com/.</p>
        </Card>
        <Card className={classes.card}>
          <h2>Connect to server</h2>
           <p>Connect this React frontend to a server in order to access your own data.</p>
          <p>Some popular backend frameworks are:</p>
          <img width="100px" src={flaskLogo} />
           <img width="100px" src={expressLogo} />
            <img width="100px" src={djangoLogo} />
          <p>Read this guide on how to add a backend to your React project: https://add-backend-guide.com</p>
        </Card>
        <Card className={classes.card}><h2>Deploy your app</h2>
         <p>Easily deploy your app using Shipyard: https://shipyard.build/</p>
      <p>Alternatively, read this guide on how to deploy a containerized web app: https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app</p></Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
