import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#000',
    fontWeight: "bold"
  },
  button: {
    borderRadius: '20px',
  },
  button2: {
    borderRadius: '20px',
    marginLeft: '20px',
    textTransform: "initial"
  },
  textButton: {
    paddingLeft: '5px',
    paddingRight: '5px'
  }
}));

const HeaderApp = () => {

  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' style={{ textDecoration: 'none', color: "#f50038" }} >
              EventBrit
          </Link>
          </Typography>

          <Grid>
            <Button className={classes.button} >
              <div className={classes.textButton}>Login</div>
            </Button>
            <Button color="secondary" variant="contained" className={classes.button2} >
              <div className={classes.textButton}>Sign Up</div>
            </Button>
          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HeaderApp;