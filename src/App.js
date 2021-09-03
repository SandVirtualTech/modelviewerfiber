import './App.css';
import ScrollableTabsButtonForce from './components/NavBar'
import FloatingActionButtonZoom from './components/ActionButton'
import ModelViewer from './components/ModelViewer'
import DiscreteSlider from './components/Slider'
import BasicButtonGroup from './components/ControlsButtons'
import Grid from '@material-ui/core/Grid';
import AttacmentsButton from './components/AttachmentsColor'
import SwitchLabels from './components/ShowSwitch'

function App() {
  //console.log(ModelViewer.name);
  return (
    <div className="App">
      <ScrollableTabsButtonForce/>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item container md={9}>
          <div className="gridRow">
            <ModelViewer/>
            <br/>
            <DiscreteSlider className="slider" />
            <BasicButtonGroup/>
          </div>
            
        </Grid>

        <Grid item container md={3}>
          <div className="gridRow">
            <h2>Patient info</h2>
            <h3>Name</h3>
            <p>Example Name</p>
            <h3>Last Name</h3>
            <p>Example Last Name</p>
            <h3>E-mail</h3>
            <p>name@example.com</p>
            <br/>
            <h2>Attachments</h2>
            <p>Colors</p>
            <AttacmentsButton/>
            <br/>
            <SwitchLabels/>
          </div>
        </Grid>
      </Grid>
      <FloatingActionButtonZoom/>
    </div>
  );
}

export default App;
