import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker';
import SongSearch from './SongSearch';

function App() {
    const [colorState, setColor] = useState({hexString: null, rgba: null});
    const onColorChange = (color) => {
        setColor({hexString: color.hexString, rgba: color.rgba})
    }

    return (
        <div className="App">
            <ColorPicker onColorChange={onColorChange} colorState={colorState}/>
            <SongSearch />
        </div>
    );
}

export default App;
