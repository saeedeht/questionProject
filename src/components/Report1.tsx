import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box , Breadcrumbs, Button, Checkbox, Chip, Divider, Link, Stack, Typography  } from "@mui/material";
import { CheckBox, Label } from "@mui/icons-material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import {
    BookmarkBorder as BookmarkBorderIcon,
    VisibilityOffOutlined as VisibilityOffOutlinedIcon,
    ReportProblemOutlined as ReportProblemOutlinedIcon,
} from "@mui/icons-material";
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Report1Props {

}

const Report1 : FC <Report1Props> = () => {
    const breadcrumbs = [
        <Link 
        underline="hover" 
        key="1" 
        color="inherit" 
        href="/" >
          Math Final
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/"
        >
          Jabra
        </Link>,
        <Link
        underline="hover"
        key="3"
        color="inherit"
        href="/"
      >
        Section 2
      </Link>,
      ];


    return(
        // Main stack
        <Stack
        direction="column"
        spacing={4}
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
        }}
        >
            {/* Navbar Stack */}
            <Stack 
            direction="row"  
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            >
                {/* left stack */}
                <Stack 
                 direction="row"  
                 spacing={2}
                >
                    <Box>
                        <CheckBox sx={{color:"GrayText"}} />
                    </Box>
                    <Box
                    component={Stack}
                    sx={(t) => ({
                    backgroundColor: t.palette.primary.main,
                    backgroundClip: "content-box",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    border: "1px solid #D4D6DC",
                    p: "6px",
                    color: "white",
                    borderRadius: "100%",
                    })}
                    >
                    123
                    </Box>
                    <Box>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Box> 
                </Stack>
                
                {/* Right Stack */}
                <Stack
                 direction="row"  
                 spacing={1}
                 sx={{
                    display:"flex",
                    alignItems:"flex-start"}}
                >
                    <Box 
                    sx={{
                    paddingX :"4px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"flex-start"}}
                    >
                        <TaskAltIcon sx={{color:"GrayText"}} />
                        <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >20%</Typography>
                        <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >Correct</Typography>
                    </Box>

                    <Box 
                    sx={{
                    paddingX :"4px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"flex-start"}}
                    >
                        
                    <AccessTimeIcon sx={{color:"GrayText"}} />
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >02':22"</Typography>
                    </Box>

                    <Box 
                    sx={{
                    paddingX :"4px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center"}}
                    >
                    <SpeedIcon sx={{color:"GrayText"}} />
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >Hard</Typography>
                    </Box>

                    <Button
                        sx={{p:0,display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                        >
                        <BookmarkBorderIcon />
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            0
                        </Typography>
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            Marked
                        </Typography>
                    </Button>

                    <Button
                        sx={{p:0,display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                        >
                        <VisibilityOffOutlinedIcon />
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            0
                        </Typography>
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            Ignored
                        </Typography>
                    </Button>

                    <Button
                        sx={{p:0,display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                        >
                        <ReportProblemOutlinedIcon/>
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            0
                        </Typography>
                        <Typography sx={{display: "flex",fontWeight:700,fontSize:"12px",color:"GrayText"}} >
                            Report
                        </Typography>
                    </Button>
                </Stack>
            </Stack>

            <Divider />
            
            <Stack
             direction="row"  
             justifyContent="flex-start"
             alignItems="center" 
             spacing={2}
            >
                <Box 
                sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:1}}
                >
                    <Box
                    component={Stack}
                    sx={(t) => ({
                    backgroundColor: t.palette.primary.main,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 12,
                    height: 12,
                    borderRadius: "100%",
                    })}
                    >
                    </Box>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"GrayText"}} >
                        Correct
                    </Typography>
                    <Typography sx={{fontSize:"16px",fontWeight:"700",color:"GrayText"}} >
                        278
                    </Typography>
                </Box>

                <Box 
                sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:1}}
                >
                    <Box
                    component={Stack}
                    sx={(t) => ({
                    backgroundColor: t.palette.primary.main,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 12,
                    height: 12,
                    borderRadius: "100%",
                    })}
                    >
                    </Box>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"GrayText"}} >
                        Unanswered
                    </Typography>
                    <Typography sx={{fontSize:"16px",fontWeight:"700",color:"GrayText"}} >
                        55
                    </Typography>
                </Box>

                <Box 
                sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:1}}
                >
                    <Box
                    component={Stack}
                    sx={(t) => ({
                    backgroundColor: t.palette.primary.main,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 12,
                    height: 12,
                    borderRadius: "100%",
                    })}
                    >
                    </Box>
                    <Typography sx={{fontSize:"14px",fontWeight:"400",color:"GrayText"}} >
                        Incorrect
                    </Typography>
                    <Typography sx={{fontSize:"16px",fontWeight:"700",color:"GrayText"}} >
                        51
                    </Typography>
                </Box>
                
                <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:1}} >
                <Divider   
                sx={(t) => ({
                width:"380px",
                height:"6px",
                backgroundColor: t.palette.primary.main,
                borderRadius: "4px",
                })}
                />

                <Divider   
                sx={(t) => ({
                width:"70px",
                height:"6px",
                backgroundColor: t.palette.primary.main,
                borderRadius: "4px",
                })}
                />

                <Divider   
                sx={(t) => ({
                width:"50px",
                height:"6px",
                backgroundColor: t.palette.primary.main,
                borderRadius: "4px",
                })}
                />
                </Box>
               
            </Stack>

            <Stack
            direction="row"
            sx={{
            justifyContent:'flex-end',
            alignItems:"center"
            }}
            >
                <Chip label="Subquestion 1" color="primary" sx={{color:"white"}} />
            </Stack>
            
            <Stack>
            <Accordion sx = {(t)=>({backgroundColor: t.palette.primary.light })} >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography sx={{fontSize:"14px",color:"GrayText",fontWeight:"600"}} >Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"14px",color:"GrayText",fontWeight:"400"}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Accordion>
            </Stack>

            <Stack>
            <Typography sx={{fontSize:"14px",color:"GrayText",fontWeight:"700"}} >
                Question:
            </Typography>
            <Typography 
            sx={{fontSize:"14px",color:"GrayText",fontWeight:"400"}} 
            >
                Efforts to explain how the pterosaurs became able to fly have led to
                 suggestions that they launched themselves by jumping from cliffs,
                 by dropping from trees, or even by rising into light winds from the crests of waves.
                 Each explanation has its difficulties. 
            </Typography>
            </Stack>

            <Stack>
            <Accordion sx = {(t)=>({backgroundColor: t.palette.primary.light })} >
                <AccordionSummary
                sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} 
                >
                    <Typography sx={{fontSize:"14px",color:"GrayText",fontWeight:"600"}} >Show Answer</Typography>
                    <ExpandMoreIcon />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"14px",color:"GrayText",fontWeight:"400"}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Accordion>
            </Stack>

            <Box
             sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            gap:2,
            borderRadius: 1,
            }}
            >
                <Box   
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: 'fit-content',
                    alignItems:"flex-start",
                    justifyContent:"center",
                    gap:4,
                    borderRadius: 1,
                    }}
                >
                <Typography  
                sx={(t) => ({
                Color: t.palette.primary.main   
                })}
                >
                    23%
                </Typography>
                <Typography
                 sx={(t) => ({
                    Color: t.palette.primary.light 
                })}
                >
                    28%
                </Typography>
                <Typography
                 sx={(t) => ({
                    Color: t.palette.primary.light 
                })}
                >
                    25%
                </Typography>
                <Typography
                 sx={(t) => ({
                    Color: t.palette.primary.light 
                })}
                >
                    24%
                </Typography>
                </Box>

                <Divider  orientation="vertical"  flexItem />

                <Box   
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    width: 'fit-content',
                    alignItems:"flex-start",
                    justifyContent:"center",
                    borderRadius: 1,
                    }}
                >

                    <Stack sx={{ 
                    alignItems: "start",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    }}>
                        <Button >
                            < DoneIcon />
                            <Stack direction="row">
                                1
                            <Checkbox  />
                                Difficulties
                            </Stack>
                        </Button>
                    </Stack>

                    
                    <Stack style={{ alignItems: "start" }}>
                        <Button >
                            <Stack direction="row">
                                1
                            <Checkbox  />
                                Difficulties
                            </Stack>
                        </Button>
                    </Stack>

                    
                    <Stack style={{ alignItems: "start" }}>
                        <Button >
                            <Stack direction="row" >
                                1
                            <Checkbox  />
                                Difficulties
                            </Stack>
                        </Button>
                    </Stack>

                    
                    <Stack style={{ alignItems: "start" }}>
                        <Button >
                            <Stack direction="row">
                                1
                            <Checkbox  />
                                Difficulties
                            </Stack>
                        </Button>
                    </Stack>
                </Box>
                
            </Box>

        </Stack>
    )
}

export default Report1;