import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dsmpPhoto from '../../img/iac.png';

const useStyles = makeStyles({
  root: {
     maxWidth: '100%',
     marginTop: '30px',
     margin: '10px',
     backgroundColor: '#e3f2fd'
    
  },
  media: {
    height: 120,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
   
  },
});

export default function MediaCardIac() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea  href="http://smp.vin.ua/wordpress/">
        <CardMedia
          className={classes.media}
          image={dsmpPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          OКО Інформаційно-аналітичний центр з обслуговування установ соціального захисту населення
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://smp.vin.ua/wordpress/"
                target="_blank"
                rel="noopener noreferrer">
          Дізнатись більше
        </Button>
      </CardActions>
    </Card>
  );
}