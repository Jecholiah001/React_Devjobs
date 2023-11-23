import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Jobcard from './components/Jobcard'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Jsondata from './data/data.json'

function App() {
  const containerStyle ={
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  };
  const [data,setData] = useState([])
  useEffect(() => {
    setData(Jsondata)
  }, [])
  return (
    <>
    <section className='App' style={containerStyle}>
      <Navbar/>
      <div className='joblist'>
        <ul className='gridcontainer'>
          {data.map((job, id) =>(
            <Jobcard
            key = {id}
            icon={job.logo}
            time={job.postedAt}
            dot={job.dot}
            title={job.position}
            type={job.contract}
            company={job.company}
            country={job.location}
            background={job.logoBackground}
            />
          ))}
        </ul>
      </div>
      <Button/>
    </section>
    </>
  )
}

export default App
