import { useState } from 'react';
import Button from './components/Button/Button';
import { Input } from './components/Input/Inpit';

function App() {
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      <Button
        onClick={() => {
          setCounter(2);
        }}
      >
        Кнопка
      </Button>
      <Button appearence="big">Большая</Button>
      <Input placeholder="Email"></Input>
    </>
  );
}

export default App;
