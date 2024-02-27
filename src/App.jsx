import { useState } from 'react'
import { Preloader } from './components'
import Layout from './screen/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ?
    (<Preloader setIsLoading={setIsLoading} />)
    :
    (
      <>
        <Layout></Layout>
      </>
    )
}

export default App
