import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { FlexAlignCenter } from '../styles/Flex';
import { Divider, Rating, Stack } from '@mui/material';
import { ButtonComp } from '../ui/Button';

const GroupList = () => {

    return (
        <Card sx={{ py: 2, maxWidth: 345, border: '0.3px solid #2FB97B', boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                titleTypographyProps={{ variant: 'h4' }}
                title="Shrimp and Chorizo Paella"
            />
            <Divider></Divider>
            <FlexAlignCenter sx={{ py: 2 }}>

                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/avatar1.png" />
                    <Avatar alt="Travis Howard" src="/avatar2.png" />
                    <Avatar alt="Cindy Baker" src="/avatar3.png" />
                    <Avatar alt="Agnes Walker" src="/avatar4.png" />
                    <Avatar alt="Trevor Henderson" src="/avatar5.png" />
                </AvatarGroup>
            </FlexAlignCenter>
            <CardContent>
                <Stack spacing={1}>
                    <Rating name="size-small" defaultValue={2} size="small" />
                </Stack>
                <Typography variant="subtitle2">
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: "center" }}>
                <ButtonComp myWidth='305px'>Join &rarr;</ButtonComp>
            </CardActions>
        </Card>
    );
}

export default GroupList;