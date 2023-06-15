import React from "react";
import CoverImage from "./CoverImage";
import './Landing.css'
import Header from "./Header";
import { Button, Typography, Box, Stack, Card, Link, CardActionArea, CardMedia, CardContent } from "@mui/material";
import {BsFillClipboard2PlusFill} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import logo from './images/healTracjk.jpeg'
import doc from './images/main.png'
import server from "../landing/images/server.jpg"
import security from "../landing/images/security.png"
import patientRecord from "../landing/images/PatientRecord.jpg"
function Landing() {
  return (
    // <div>
    //   {/* <Header></Header> */}
    //   {/* <button>
    //     <a href="/register">Register</a>
    //   </button> */}
    //   <Stack
    //     mt={0}
    //     // direction="row" spacing={70}
    //     direction={{ xs: "column", sm: "row" }}
    //     spacing={{ xs: 1, sm: 2, md: 40 }}
    //   >
    //     <img src={logo} alt="image" className='img'/>
    //   <Header></Header>
    //   <Box sx={{ w: 30, mt: '4rem', ml:'4rem', display:'inline-block',positon: 'absolute', }}>
    //     <Stack
    //     mx={3} my={4}
    //      direction={{ xs: 'column', sm: 'row' }}
    //      spacing={{ xs: 1, sm: 2, md: 3 }}
    //      >
    //       {/* <Button variant="contained" size='large'
    //       sx={{ fontSize: '1.2rem', padding:'.6rem 1.2rem' }}
    //       style={{ backgroundColor: 'rgb(0, 255, 119)' , boxShadow: "3px 3px 3px green"}}

    //       ></Button> */}
    //         <Button
    //           variant="contained"
    //           size="large"
    //           sx={{ fontSize: "1.2rem", padding: ".6rem 1.2rem" }}
    //           style={{
    //             backgroundColor: "rgb(0, 255, 119)",
    //             boxShadow: "3px 3px 3px green",
    //           }}
    //           href='/home'
    //         >
    //           Login
    //         </Button>
    //         <Button
    //           variant="contained"
    //           sx={{ fontSize: "1.2rem", padding: "0 1.2rem" }}
    //           style={{
    //             backgroundColor: "rgb(0, 255, 119)",
    //             boxShadow: "3px 3px 3px green",
    //           }}
    //           href="/register"
    //         >
    //           Register
    //         </Button>
    //       </Stack>
    //     </Box>
    //   </Stack>
    //   <CoverImage></CoverImage>
    //   <Box
    //   sx={{
    //     display:'inline-block',
    //     marginLeft:'50%'
    //   }}>
    //     <Box
    //     sx={{
    //       // height:'400px',
    //       // width:'200px',
    //     }}>
    //       {/* <Typography>
    //       HealTrack helps you manage your medical history seamlessly</Typography>
    //       <Typography>so you can focus on your health.</Typography>
    //       <Typography> From storing reports to viewing your timeline, we've got you covered
    //       </Typography> */}
    //       <Stack>
    //       <Typography variant="h3" color={'teal'}>Your health, Our Priority.</Typography>
    //       <Box
    //       sx={{
    //         marginLeft:'60px',
    //         // boxShadow: "3px 3px 3px green",
    //       }}>
    //         <ul>
    //         {/* <i class="fa-solid fa-triangle">  </i> */}
    //         <Stack sx={{color:'green'}}
    //         direction={"row"}>
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Manage your medical history seamlessly</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Say GoodBye to scattered medical records</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Where care meets convenience.</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'}  variant="h5">Simplify your life, One record at a time.</Typography>
    //         </Stack>

    //         </ul>
    //       </Box>
    //       </Stack>

    //     </Box>
    //   </Box>

    // </div>

    <Box>
      <Card
      sx={{
        display:'flex',
        // width:'500px',
        // marginLeft:'800px',
        // mt:'50px',
        // justifyContent:'right',
        // alignItems:'right',
        backgroundColor: '#333230',
        marginBottom:'50px',
        position:'sticky',
        zIndex:'1',
        top:'0',
        opacity:'.7',

      }}>
        <Stack
        direction={{ xs: 'column', sm: 'row'}}
        spacing={{ xs: 1, sm: 5, md: 80,lg: 120 }}
        >

        <img src={logo} style={{borderRadius:'50%', width:'60px', margin:'3px'}}alt="" />
        <Box


        >
          <Button
          href="#footer"
          // variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#2b1b03',
            color:'#eba10e',
            // boxShadow: '3px 3px 3px green',
            margin: '10px',
            transition:'0.8s ease'
          }}
          >
            Home
          </Button>
          <Button
          href="#footer"
          // variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#2b1b03',
            color:'#eba10e',
            // boxShadow: '3px 3px 3px green',
            margin: '10px',
            transition:'0.8s ease'
          }}
          >
            About Us
          </Button>
          <Button
          href="#footer"
          // variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#2b1b03',
            color:'#eba10e',
            // boxShadow: '3px 3px 3px green',
            margin: '10px',
            transition:'0.8s ease'
          }}
          >
            Conatact Us
          </Button>
          </Box>
          </Stack>
      </Card>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 5, md: 20 }}
      sx={{
        justifyContent:'center',
        marginTop: '0px',
        marginBottom: '10px',
        // height:'120vh'
      }}
      >
        <Stack marginTop={'100px'}>
        <Box >
          <Typography
          sx={{
            display:'inline-block',
            fontSize:'1.2rem',
            color:'#c7bfaf',
            fontWeight:'bold',

          }}
          >Your Health, </Typography>
          <Typography
          sx={{
            display:'inline-block',
            color:'#c7bfaf',
            fontWeight:'bold',
          }}
          > Your Data</Typography>

        </Box>
        <Box>
        <Typography variant='h3'
          sx={{
            color:'#eba10e',
            display:'inline-block',
            fontWeight:'bold',

          }}
          >Heal</Typography>
          <Typography variant='h3'
          sx={{
            display:'inline-block',
            color:'#c7bfaf',
            fontWeight:'bold',

          }}
          >Track</Typography>
        </Box>

        <Box>


          <Typography sx={{
            fontSize:'.9rem',
            color:'#c7bfaf'
          }}>Now manage your health records</Typography>
        </Box>
        <Typography sx={{
            fontSize:'.9rem',
            color:'#c7bfaf'

          }}>A path for your better tomorrow</Typography>
           <Typography sx={{
            fontSize:'.9rem',
            color:'#c7bfaf'

          }}>Your health our priority</Typography>

        <Box>
        <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#333230',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='home'
          >Login</Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#eba10e',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='register'
          >Register</Button>
        </Box>

      </Stack>

      <Box>
        <img src={doc}></img>
      </Box>
    </Stack>
      <Stack
        direction="row"
        gap="150px"
        justifyContent="center"
        padding="3rem">
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={server}
              alt="server graphic"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SAVING THE SERVER COST
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer replacement to the existing way of relying on servers for storing medical records by storing the data on blockchain.
                This significantly reduces the costs of data storage and offers other benefits over a server.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={security}
          alt="security of server"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IMPROVED SECURITY
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={patientRecord}
          alt="patient records graphic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PATIENTS HAVE THE CONTROL
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>



      {/* <Box>
          <img src={server}></img>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae cumque magnam rem quas quos repellendus. Iste sequi ratione distinctio consequuntur nostrum voluptates at omnis unde pariatur fugit, architecto sed!</p>
      </Box>
      <Box>
      <img src={server}></img>
      </Box>
      <Box>
      <img src={server}></img>
      </Box> */}
    </Stack>
    <Box sx={{ mt: 'auto', py: 2, backgroundColor: "#666" }} id="footer">
      <Typography variant="body2" align="center">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Typography variant='h6' sx={{ p: 1,color:'black' }} href="/">Home</Typography>
          <Typography variant='h6' sx={{ p: 1,color:'black' }} href="/">About Us</Typography>
          <Typography variant='h6' sx={{ p: 1,color:'black' }} href="/">Contact</Typography>

        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" >Stay Connected:We will beautify it soon on our v2</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link sx={{ p: 1 }} href="https://www.instagram.com/">Instagram</Link>
            <Link sx={{ p: 1 }} href="https://www.twitter.com/">Twitter</Link>
            <Link sx={{ p: 1 }} href="https://www.facebook.com/">Facebook</Link>
          </Box>
        </Box>
      </Typography>
    </Box>
   </Box>

  );
}

export default Landing;
