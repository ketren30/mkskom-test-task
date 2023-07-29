import {useEffect, useState} from 'react';

const useResize = () => {
  const [size, setSize] = useState(window.innerWidth)

  const handleResize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [size])

  return size
}
export default useResize