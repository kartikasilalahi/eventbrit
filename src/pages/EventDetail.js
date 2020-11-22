import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Container, Box, Grid } from '@material-ui/core';
import { Add, Room, ArrowBack, Facebook, Twitter, LinkedIn } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import data from './../fakeapi/eventsingle'

const Detail = () => {
    

    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="lg">
                <Box className="imagebg" style={{ backgroundImage: `url(${data.src})` }}>
                    <Container maxWidth="md">
                        <Box className="back">
                            <Link to='/' style={{ textDecoration: 'none', color: "white" }} >
                                <ArrowBack style={{ color: "white" }} /> Back </Link>
                        </Box>
                        <Box className="title">
                            <Grid container style={{ paddingRight: "5px" }} spacing={3} >
                                <Grid item xl={8} lg={8} md={6} sm={6} xs={12} >
                                    <Box className="event_title">{data.title}</Box>
                                    <Box className="event_by">By {data.by}</Box>
                                    <Box className="event_address">{data.address}</Box>
                                    <Box className="event_map"><Room /> View Map</Box>
                                </Grid>

                                <Grid item xl={4} lg={4} md={6} sm={6} xs={12} >
                                    <Card className="cardtime" >
                                        <CardContent>
                                            <Box className="datetime">Date & Time</Box>
                                            <Box className="event_date">{data.day}, {data.date} at {data.time}</Box>
                                            <Box className="event_calendar"><Add /> Add to Calendar</Box>
                                            <Box pt={3} className="button_book">
                                                <Button variant="contained" color="secondary" style={{ fontSize: "13px" }} >Book Now (Free)</Button></Box>
                                            <Box pt={2} className="button_book">
                                                <Button variant="contained">Promotor Program</Button></Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>

                </Box >
                <Container maxWidth="lg" className="rootDescription">
                    <Grid container spacing={3} >
                        <Grid item xl={8} lg={8} md={6} sm={8} xs={12} >
                            <Box fontSize={25} fontWeight='bold'>Description</Box>
                            <Box pt={2} textAlign="justify" >{data.desc}</Box>
                            <Box pt={5}>
                                <Box pt={1} fontSize={23} fontWeight='bold'>Hour</Box>
                                <Box fontSize={13} ><span style={{ color: "grey" }}>Weekdays hours: </span> 7PM - 10PM</Box>
                                <Box fontSize={13}><span style={{ color: "grey" }}>Weekend hours: </span>10AM - 3PM</Box>
                            </Box>
                            <Box pt={5} pb={8} >
                                <Box fontSize={15} fontWeight="bold">How can i contact the organizer with any question?</Box>
                                <Box fontSize={12} pt={1}>Please visit www.dreammidsh.com and refer to the FAQ for all question and contact information</Box>
                            </Box>
                        </Grid>

                        <Grid item xl={4} lg={4} md={6} sm={4} xs={12}>
                            <Box fontSize={25} fontWeight='bold'>Event Location</Box>
                            <Box pt={2}>{data.address}</Box>
                            <Box pt={5}>
                                <Box fontSize={23} fontWeight='bold'>Tags</Box>
                                <Box className="tags"><Button disabled>Indonesian Events</Button>
                                    <Button disabled>Jkt Events</Button>
                                    <Button disabled>UI</Button>
                                    <Button disabled>Jakarta events</Button>
                                    <Button disabled>Seminar</Button>
                                </Box>
                            </Box>

                            <Box pt={5} pb={8}>
                                <Box fontSize={18} fontWeight='bold'>Share with Friends</Box>
                                <Box className="icons_media">
                                    <Facebook style={{ color: "#4267B2" }} />
                                    <Twitter style={{ color: "#1DA1F2" }} />
                                    <LinkedIn style={{ color: "#2867B2" }} />
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Footer />
        </React.Fragment >


    )



}

export default Detail;