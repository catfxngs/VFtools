import { useState } from 'react';
import Input from './Input';
import ReqsTable from './ReqsTable';
import { Box, Button } from '@mui/material';
import { getRequirements } from './scripts/getRequirements';
import "./App.css";

const App = () => {
  const [vf, setVf] = useState(0);
  const [min, setMin] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [reqs, setReqs] = useState([] as any);
  const handleClick = () => {
    setReqs(getRequirements(vf));
    setMin((vf / 50).toPrecision(3));
    setShowNote(true);
  }

  return (
    <Box m={2} className="test">
      <Box className="box-2">
        <Input
          vf={vf}
          setVf={setVf}
        />
        <Box ml={2}>
          <Button
            className="calc-btn"
            disabled={isNaN(vf)}
            variant="contained"
            onClick={() => handleClick()}
          >
            Calculate
          </Button>
        </Box>
      </Box>
      {showNote &&(
        <p className="note">
          {`Average volforce required: (target volforce) / (50 scores) = ${min}`}
          <br></br>
          <br></br>
          {`If you believe some requirements are missing, then you likely have scores higher than those listed below in your Top 50.`}
        </p>
      )}
      { reqs.length > 0 && <ReqsTable reqs={reqs}/> }
    </Box>
  )
}

export default App;
