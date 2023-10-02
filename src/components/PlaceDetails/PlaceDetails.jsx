import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import { LocationOn } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { Rating } from "@mui/material";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  console.log(place);
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box className={classes.spacing}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box className={classes.spacing}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {/* {place?.awards?.map((award) => ( */}
        <Box my={1} className={classes.spacing}>
          {/* <img src={award.images.small} alt={award.display_name} /> */}
          <img
            style={{ width: "20px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUf6TNPSc-KlFQwHjxOGIaYCpklK-m0zQCaL2te528rAW2w9HEObutDKqzESS_nwZlVzA&usqp=CAU"
            alt="rating"
          />
          <Typography variant="subtitle2" color="textSecondary">
            Certificate of Excellence 2021
          </Typography>
        </Box>
        {/* ))} */}
        <Box my={1} className={classes.spacing}>
          {/* <img src={award.images.small} alt={award.display_name} /> */}
          <img
            style={{ width: "20px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUf6TNPSc-KlFQwHjxOGIaYCpklK-m0zQCaL2te528rAW2w9HEObutDKqzESS_nwZlVzA&usqp=CAU"
            alt="rating"
          />
          <Typography variant="subtitle2" color="textSecondary">
            Certificate of Excellence 2019
          </Typography>
        </Box>
        {/* ))} */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
