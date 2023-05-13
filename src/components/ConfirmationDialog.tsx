import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
type Props = {dialog: string,
            deleteItems: any
            id: string
            setID: any
}
export const ConfirmationDialog : React.FC<Props> = ({dialog, deleteItems, id, setID}) => {
    const handleCloseDisagree = () => {
    setID('');
  };
  async function  handleCloseAgree () {
    deleteItems(id);
    setID('');
    console.log(id);
  };
  return (
    <div>
      <Dialog
        open={true}

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialog}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ConfirmationDialog;