import { useState } from 'react';
import { ExampleComponent } from './ExampleComponent';

function App() {
  console.log("App rendered");
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <h1>Example of component lifecycle</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} component
      </button>
      <div className='container'>
        {showComponent && <ExampleComponent />}
      </div>
    </>
  )
}

export default App
