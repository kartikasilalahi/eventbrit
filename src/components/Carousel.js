
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-bootstrap'
import { Container, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    
    // textHeading: {
    //     fontWeight: 'bold',
    //     color: '#fff',
    //     fontSize: '40px',
    //     paddingTop: '180px',
    //     paddingLeft: '200px'
    // },
    // textDate: {
    //     color: '#fff',
    //     fontSize: '15px',
    //     paddingTop: '10px',
    //     paddingLeft: '200px',        
    // }
  }));


const CarouselComponent = () => {

    const classes = useStyles();

  return (
    <>
    <Container maxWidth='lg'>
    
        <Carousel>
        <Carousel.Item>
            <div className="carouselBG" style={{backgroundImage: `url("https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`}}>
                <Grid container direction="row" justify="flex-start">
                    <Grid>
                        <Box className="textHeading">            
                            LOREM IPSUM <br/> HEADING  <br/> TITLE EVENT NAME
                        </Box>
                        <Box className="textDate" >Date : 20 Oktober 2020</Box>
                    </Grid>
                </Grid>
            </div>
        </Carousel.Item>

        
        <Carousel.Item>
            <div className="carouselBG" style={{backgroundImage: `url("https://images.unsplash.com/photo-1583869153539-251655e329de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`}}>
                <Grid container direction="row" justify="flex-start">
                    <Grid>
                        <Box className="textHeading" >            
                            LOREM IPSUM <br/> HEADING  <br/> TITLE EVENT NAME
                        </Box>
                        <Box className="textDate" >Date : 20 Oktober 2020</Box>
                    </Grid>
                </Grid>
            </div>
        </Carousel.Item>

        </Carousel>
    </Container>

    </>
  );
}

export default CarouselComponent;