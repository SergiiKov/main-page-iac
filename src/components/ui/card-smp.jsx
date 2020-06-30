import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dsmpPhoto from '../../img/dsmp.png';

const useStyles = makeStyles({
  root: {
     maxWidth: '100%',
     marginTop: '40px',
     margin: '10px',
     backgroundColor: '#e3f2fd'
    
  },
  media: {
    height: 120,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
   
  },
});

export default function MediaCardSmp() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea  href="http://smp.vin.ua/joomla/">
        <CardMedia
          className={classes.media}
          image={dsmpPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Соціальна та молодіжна політика на Вінниччині
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://smp.vin.ua/joomla/"
                target="_blank"
                rel="noopener noreferrer">
          Дізнатись більше
        </Button>
      </CardActions>
    </Card>
  );
}