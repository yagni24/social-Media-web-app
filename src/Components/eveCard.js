import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function eveCard() {
    return (
        <div style={{margin:'10px'}}>
            <Card sx={{ maxWidth: 273, maxHeight: '252' }} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="109"
                    width="273"
                    image="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle 1" component="div">
                        Hackathon
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{
                        borderRadius: '114px',
                        background: '#2374E1', width: '110px',
                        padding: '8px 35px', color: '#FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                    <Button size="small" style={{
                        borderRadius: '114px',
                        width: '110px',
                        border: '1.5px solid #2374E1',
                        padding: '8px 35px',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>
                </CardActions>
            </Card></div>

    );
}