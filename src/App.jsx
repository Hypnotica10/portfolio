import { useState } from 'react'
import { Preloader, Preloader2 } from './components'
import Layout from './screen/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ?
    (
      <Preloader2 setIsLoading={setIsLoading} />
    )
    :
    (
      <>
        <Layout></Layout>
      </>
    )
  // return (
  //   <>
  //     <Preloader setIsLoading={setIsLoading} isLoading={isLoading} />
  //     <Layout></Layout>
  //   </>
  // )
}

export default App
