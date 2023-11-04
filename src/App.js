import { useEffect} from 'react';
import './App.css';
import song from '../src/Assets/Game of Thrones.mp3'
import Introduction from './Component/Introduction';

function App() {
  useEffect(() => {
    const audio = new Audio(song);

    const playAudio = () => {
      if (audio) {
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
    }
  }, []);
  return (
    <div className="App bgImg">
      <Introduction />
    </div>
  );
}

export default App;
