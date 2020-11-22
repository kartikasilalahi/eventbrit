import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid } from '@material-ui/core'
import { Instagram, Facebook, Twitter } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
    padding: "45px",
    backgroundColor: '#ee4054',
    color: "white"
  },
  list: {
    textAlign: "left",
    color: "smokewhite",
    fontSize: "14px",
    lineHeight: "30px"
  },
  
  sosmed: {
    fontSize: "12px",
    lineHeight: "30px"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="lg">
        <Box pt={5}>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
              <Box fontWeight="bold" pb={2} >Product</Box>
              <Box className={classes.list}>Key Features </Box>
              <Box className={classes.list}>Pricing</Box>
              <Box className={classes.list}>Event Ticketing</Box>
              <Box className={classes.list}>Booking</Box>
              <Box className={classes.list}>Online Promotion</Box>
              <Box className={classes.list}>Developers</Box>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
              <Box fontWeight="bold" pb={2} >Explore More</Box>
              <Box className={classes.list}>How it work </Box>
              <Box className={classes.list}>Download App</Box>
              <Box className={classes.list}>Event Promotor</Box>
              <Box className={classes.list}>Sell Ticket</Box>
              {/* <Box className={classes.list}>Even Organiser</Box> */}
              {/* <Box className={classes.list}>NOnprofits</Box> */}
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
              <Box fontWeight="bold" pb={2} >Connect With Us</Box>
              <Box className={classes.list}>Customer Support </Box>
              <Box className={classes.list}>Download App</Box>
              <Box className={classes.list}>Event Promotor</Box>
              <Box className={classes.sosmed}><Facebook fontSize="small" /> Facebook</Box>
              <Box className={classes.sosmed}><Twitter fontSize="small" /> Twitter</Box>
              <Box className={classes.sosmed}><Instagram fontSize="small" /> Instagram</Box>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
              <Box fontWeight="bold" pb={2} >Payment Avaliable</Box>
              {/* <img src="https://pngimg.com/uploads/visa/visa_PNG14.png" alt="payment_avaliable" width="80px" /><br /> */}
              <img src="https://pngimg.com/uploads/visa/visa_PNG14.png" alt="payment_avaliable" width="80px" />
            </Grid>
          </Grid>


          <p className="text-center pt-5" >Copyright 2020</p>
        </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer;