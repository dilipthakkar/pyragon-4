import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Disclaimer from '../../Disclamer-Popup/disclaimer';
import MenuClose from "../../../images/menu-icon-2.png";
import './modal2.css';



function getModalStyle() {

  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "fit-content",
    maxWidth : "85%",
    borderRadius : "20px",
    backgroundColor: 'white',
    border: '1px solid #FFFFFF',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    
  },
}));

export default function SimpleModal({isOpen , setIsOpen}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

 useEffect(()=>{
     setOpen(isOpen);
 },[isOpen])


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button id="disclamer-close-btn" style={{ backgroundColor : "white" , border : 0}} onClick={handleClose}><img src={MenuClose} style={{width : "30px" , height : "30px"}}/></button>
      < Disclaimer />
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}