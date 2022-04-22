import React, {Component} from 'react';
import SingleCard from "./SingleCard";
import {Grid} from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

class Card2 extends Component {
  // constructor(props){
  //   super(props);
  //   // this.state = {expanded:false}
  // }

  // handleExpandClick = (event) => {
  //   console.log("event", event);
  //   console.log("state", this.state);
  //   this.setState({
  //     expanded: !this.state.expanded
  //   })
  //   // setExpanded(!expanded);
  // }
  Cards = [{avtar:"R", title:"Best Fast Food Restorant", id:1}, {avtar:"A", title:"5 Star Restorant", id:2}]
  render(){
    
    // const {expanded }= this.state;
  return (
    <Grid container spacing={2}>
      { this.Cards.map((res) => (
        <SingleCard key={res.id} details={res} />
      ))}
    </Grid>
  );
      }
}

export default Card2