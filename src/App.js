import './App.css';
import { Rating, Typography } from '@mui/material';
import Newspaper from './component/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">

<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={3} readOnly />
<Newspaper></Newspaper>
    </div>
  );
}

export default App;
