import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Draggable from 'react-draggable'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'black',
  p: 4,
};

export const BasicModal = ({name, species, image, type, gender}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen} style={{backgroundColor: 'white', borderRadius: '10px', width: '150px'}}>Info</Button>
        <Draggable>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <p>{type}</p>
                <p>{gender}</p>
                <img src={image} alt={name} width={150} height={"auto"}/>
                </Box>
            </Modal>
        </Draggable>
    </div>
  );
}
