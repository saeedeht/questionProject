import React , {FC} from "react";
import { Box, Typography, Container, Avatar, IconButton} from '@mui/material';
import Stack  from '@mui/material/Stack';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { palette } from '@mui/system';
import { lightBlue } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';



interface MultipleChoiceProps {

}

const MultipleChoice : FC<MultipleChoiceProps> = () => {

    return (
    <Stack  
    direction="column"
    // justifyContent="center"
    // alignItems="center"

    spacing={2}
    sx={{backgroundColor:"white",borderRadius:"12px",padding:"24px"}}
    >

        <Stack 
         direction="row"
         justifyContent="flex-start"
         alignItems="center"
         spacing={2}
        >
            <Avatar sx={{ backgroundColor:"aquamarine",width: 48, height: 48 }}>554</Avatar>
           
            <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                <BookmarkBorderIcon color="action" fontSize="small"  />
                <Typography variant="subtitle2" component="h2" >
                    Mark
                </Typography>
            </IconButton>

            <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                <VisibilityOffOutlinedIcon color="action" fontSize="small"  />
                <Typography variant="subtitle2" component="h2" >
                    Ignore
                </Typography>
            </IconButton>

            <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                <ReportProblemOutlinedIcon color="action" fontSize="small"  />
                <Typography variant="subtitle2" component="h2" >
                    Ignore
                </Typography>
            </IconButton>
            
        </Stack>

        <Stack>

            <Stack   
            direction="row"
            justifyContent="center"
            alignItems="flex-start" 
            >
                    <Typography  variant="subtitle2" component="h2">
                    Efforts to explain how the pterosaurs became able to fly have led to suggestions that they launched themselves by jumping from cliffs, by dropping from trees, or even by rising into light winds from the crests of waves. Each explanation has its difficulties. 
                    </Typography>
                </Stack>
            </Stack>

        <Stack>
            <Stack 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            >
                <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                    <Typography variant="subtitle2" component="h2" >
                        1
                    </Typography>
                    <CheckBoxOutlineBlankRoundedIcon color="action" fontSize="small"  />
                    <Typography variant="subtitle2" component="h2" >
                        Difficulties
                    </Typography>
                </IconButton>
            </Stack>

            <Stack 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            >
                <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                    <Typography variant="subtitle2" component="h2" >
                        2
                    </Typography>
                    <CheckBoxOutlineBlankRoundedIcon color="action" fontSize="small"  />
                    <Typography variant="subtitle2" component="h2" >
                        Trees
                    </Typography>
                </IconButton>
            </Stack>

            <Stack 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            >
                <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                    <Typography variant="subtitle2" component="h2" >
                        3
                    </Typography>
                    <CheckBoxOutlineBlankRoundedIcon color="action" fontSize="small"  />
                    <Typography variant="subtitle2" component="h2" >
                        Cuses
                    </Typography>
                </IconButton>
            </Stack>

            <Stack 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            >
                <IconButton aria-label="Example" sx={{borderRadius:"5px",gap:"5px"}}  >
                    <Typography variant="subtitle2" component="h2" >
                        4
                    </Typography>
                    <CheckBoxOutlineBlankRoundedIcon color="action" fontSize="small"  />
                    <Typography variant="subtitle2" component="h2" >
                        More than this
                    </Typography>
                </IconButton>
            </Stack>
        </Stack>

    </Stack>
    );
}

export default MultipleChoice;

{/* <Container maxWidth="sm">
    <h3>
    </h3>
    <Container>
        <Stack>
        </Stack>
    </Container>
</Container> */}