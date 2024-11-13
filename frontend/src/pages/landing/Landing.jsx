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
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ 
            width: '100%',
            px: 4
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            ml: 2
          }}>
            <img 
              src={logo} 
              alt="Logo"
              style={{
                borderRadius: '50%',
                width: '65px',
                height: '65px',
                objectFit: 'cover',
                border: '3px solid #eba10e',
                padding: '2px',
                backgroundColor: 'rgba(43, 27, 3, 0.9)',
                boxShadow: '0 0 15px rgba(235, 161, 14, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'rotate(360deg)',
                  boxShadow: '0 0 20px rgba(235, 161, 14, 0.8)'
                }
              }}
            />
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            justifyContent: 'flex-end',
            alignItems: 'center',
            mr: 2
          }}>
            <Button
              href="#footer"
              sx={{
                px: 3,
                py: 1,
                backgroundColor: 'rgba(43, 27, 3, 0.9)',
                color: '#eba10e',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#eba10e',
                  color: '#2b1b03',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(235, 161, 14, 0.3)'
                }
              }}
            >
              Home
            </Button>

            <Button
              href="#footer"
              sx={{
                px: 3,
                py: 1,
                backgroundColor: 'rgba(43, 27, 3, 0.9)',
                color: '#eba10e',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#eba10e',
                  color: '#2b1b03',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(235, 161, 14, 0.3)'
                }
              }}
            >
              About Us
            </Button>

            <Button
              href="#footer"
              sx={{
                px: 3,
                py: 1,
                backgroundColor: 'rgba(43, 27, 3, 0.9)',
                color: '#eba10e',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#eba10e',
                  color: '#2b1b03',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(235, 161, 14, 0.3)'
                }
              }}
            >
              Contact Us
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
        <Stack 
          marginTop={'100px'}
          sx={{
            animation: 'fadeIn 1s ease-in',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
          sx={{
            display: 'inline-block',
            fontSize: {xs: '1rem', sm: '1.2rem', md: '1.4rem'},
            color: '#c7bfaf',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
          >Your Health, </Typography>
          <Typography
          sx={{
            display: 'inline-block', 
            color: '#c7bfaf',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
          > Your Data</Typography>
        </Box>

        <Box sx={{
          marginY: 2,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}>
          <Typography variant='h3'
          sx={{
            color: '#eba10e',
            display: 'inline-block',
            fontWeight: 800,
            background: 'linear-gradient(45deg, #eba10e, #f1c40f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          >Heal</Typography>
          <Typography variant='h3'
          sx={{
            display: 'inline-block',
            color: '#c7bfaf', 
            fontWeight: 800,
            marginLeft: 1
          }}
          >Track</Typography>
        </Box>

        <Box sx={{
          marginY: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
            color: '#c7bfaf',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Now manage your health records</Typography>

          <Typography sx={{
            fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
            color: '#c7bfaf',
            lineHeight: 1.8,
            opacity: 0.9,
            textAlign: 'center'
          }}>A path for your better tomorrow</Typography>

          <Typography sx={{
            fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
            color: '#c7bfaf',
            lineHeight: 1.8,
            opacity: 0.9,
            textAlign: 'center'
          }}>Your health our priority</Typography>
        </Box>

        <Box sx={{
          // marginTop: 4,
          display: 'flex',
          gap: 2,
          justifyContent: 'center'
        }}>
          <Button
            type="submit"
            variant="contained"
            href='home'
            sx={{
              backgroundColor: '#333230',
              padding: '10px 25px',
              borderRadius: '25px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#444440',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }
            }}
          >Login</Button>
          <Button
            type="submit"
            variant="contained" 
            href='register'
            sx={{
              backgroundColor: '#eba10e',
              padding: '10px 25px',
              borderRadius: '25px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#f1c40f',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(235,161,14,0.3)'
              }
            }}
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
        
        <Card sx={{ 
          maxWidth: 345,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={security}
              alt="security of server"
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                IMPROVED SECURITY
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By storing the records on blockchain we ensure that it cannot be hacked or compromised.
                This is a major advantage over the traditional servers that can be and have been hacked before.
                Your medical data stays completely secure and private.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ 
          maxWidth: 345,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={patientRecord}
              alt="patient records graphic"
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PATIENTS HAVE THE CONTROL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Instead of giving the hospitals and doctors unrestricted control over your medical history and records, we give you complete control over who can access your records.
                You decide who sees what and when.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ 
          maxWidth: 345,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={server}
              alt="server graphic"
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                COST EFFECTIVE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our blockchain-based storage eliminates expensive server costs while providing better security and control.
                Save money without compromising on quality or features.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

    </Stack>
    <Box 
      sx={{ 
        mt: '1px', 
        backgroundColor: "rgba(51, 50, 48, 0.95)",
        borderTop: '3px solid #eba10e',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.1)'
      }} 
      id="footer"
    >
      <Typography variant="body2" align="center">
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: 4,
        }}>
          <Typography 
            variant='h6' 
            sx={{ 
              p: 1,
              color: '#eba10e',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#fff',
                transform: 'translateY(-2px)'
              }
            }} 
            href="/"
          >
            Home
          </Typography>
          <Typography 
            variant='h6' 
            sx={{ 
              p: 1,
              color: '#eba10e',
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#fff',
                transform: 'translateY(-2px)'
              }
            }} 
            href="/"
          >
            About Us
          </Typography>
          <Typography 
            variant='h6' 
            sx={{ 
              p: 1,
              color: '#eba10e',
              cursor: 'pointer',
              transition: 'all 0.3s ease', 
              '&:hover': {
                color: '#fff',
                transform: 'translateY(-2px)'
              }
            }} 
            href="/"
          >
            Contact
          </Typography>
        </Box>

        <Box>
          <Typography 
            variant="h6" 
            sx={{
              color: '#fff',
              mb: 2,
              fontWeight: 300
            }}
          >
            All Rights Reserved © HealTrack
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 3,
            pb:1
          }}>
            <Link 
              sx={{ 
                color: '#eba10e',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }} 
              href="https://www.instagram.com/"
            >
              Instagram
            </Link>
            <Link 
              sx={{ 
                color: '#eba10e',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }} 
              href="https://www.twitter.com/"
            >
              Twitter
            </Link>
            <Link 
              sx={{ 
                color: '#eba10e',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }} 
              href="https://www.facebook.com/"
            >
              Facebook
            </Link>
          </Box>
        </Box>
      </Typography>
    </Box>
   </Box>

  );
}

export default Landing;
