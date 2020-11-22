import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container, Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';

import data from './../fakeapi/event'
// style
const useStyles = makeStyles((theme) => ({
    rootContainer: {
        marginTop: '65px',
        marginBottom: '85px'
    },
    root: {
        maxWidth: '100%',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px'
    },
    media: {
        height: 190,
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        filter: 'brightness(0.8)'
    },
    address: {
        textAlign: "justify"
    },
    info: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    boxinfo: {
        borderRadius: '15px',
        padding: '5px',
    },
    boxIcon: {
        backgroundColor: '#fff',
        borderRadius: '10px'
    },
    textIcon: {
        padding: "4px 15px",
        fontWeight: 'bold'
    },
    infoRight: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    boxinfoRight: {
        borderRadius: '15px',
        padding: '5px',
    },
    boxIconRight: {
        backgroundColor: '#fff',
        borderRadius: '50%'
    },
    textIconRight: {
        padding: "5px 7px"
    }
}));

const UpcomingEvent = () => {
    // usestyle
    const classes = useStyles();

    
    // render Events
    const renderEvents = () => {
        return data && data.map((data, index) => {
            return (
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                    <Link to={`/detailevent/${data.id}`} style={{ textDecoration: 'none' }}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={data.src}
                                    title={data.title}
                                />
                                <Box>
                                    <Box className={classes.info}>
                                        <Box className={classes.boxinfo}>
                                            <Box className={classes.boxIcon} >
                                                <Box className={classes.textIcon}>{data.idr}</Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className={classes.infoRight}>
                                        <Box className={classes.boxinfoRight}>
                                            <Box className={classes.boxIconRight} >
                                                <Box className={classes.textIconRight}>
                                                    <FavoriteIcon style={{ color: 'red' }} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <CardContent>
                                    <Grid container>
                                        <Grid item lg={2}>
                                            <Box pl={1} pb={1} textAlign="center">
                                                {data.date.slice(0, data.date.length - 5)}
                                            </Box>
                                        </Grid>
                                        <Grid item lg={10} >
                                            <Box pl={1}>
                                                <Box fontSize={15} fontWeight="bold" pb={1}>
                                                    {data.title}
                                                </Box>
                                                <Box fontSize={13} className={classes.address}>
                                                    {data.address.split('').filter((val, i) => i <= 80)} ...
                                            </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            )
        })
    }
    return (
        <React.Fragment>
            <Container maxWidth="lg" className="rootContainerUpcoming">
                <Box className="textUpcoming" >Upcoming Event</Box>
                <Box pt={4} >
                    <Grid container spacing={2}>
                        {renderEvents()}
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default UpcomingEvent;