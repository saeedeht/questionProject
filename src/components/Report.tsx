import { FC } from "react";
import { Box , Breadcrumbs, Button, Link, Stack, Typography  } from "@mui/material";
import { CheckBox, Label } from "@mui/icons-material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import {
    BookmarkBorder as BookmarkBorderIcon,
    VisibilityOffOutlined as VisibilityOffOutlinedIcon,
    ReportProblemOutlined as ReportProblemOutlinedIcon,
  } from "@mui/icons-material";

interface ReportProps {

}

const Report : FC <ReportProps> = () => {
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
    

    return (
        //  main stack
      <Stack sx={{
        p: 24,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "white"
      }} >
        {/* navbar stack */}
        <Stack  sx={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",gap:"10px"}} >
            {/* left part */}
            <Stack  sx={{display:"flex",flexDirection:"row",gap:"12px",alignItems:"center",justifyContent:"flex-start"}} >
                <Box sx={{top:"1px", left:"1px"}} >
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
            {/*  right part */}
            <Stack sx={{display:"flex",flexDirection:"row",gap:"12px", justifyContent:"flex-start",alignItems:"flex-start"}}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <TaskAltIcon sx={{color:"GrayText"}} />
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >20%</Typography>
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >Correct</Typography>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <AccessTimeIcon sx={{color:"GrayText"}} />
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >02':22"</Typography>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <SpeedIcon sx={{color:"GrayText"}} />
                    <Typography sx={{fontWeight:700,fontSize:"12px",color:"GrayText"}} >Hard</Typography>
                </Box>

                <Button
                startIcon={<BookmarkBorderIcon />}
                sx={{display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                >
                0
                Marked
                </Button>
                <Button
                startIcon={<VisibilityOffOutlinedIcon />}
                sx={{display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                >
                0
                Ignored
                </Button>
                <Button
                startIcon={<ReportProblemOutlinedIcon />}
                sx={{display: "flex",flexDirection:"column",color:"GrayText",alignItems:"center",justifyContent:"center"}}
                >
                0
                Report
                </Button>
            </Stack>
        </Stack>
      
       </Stack>
    )
}

export default Report;
