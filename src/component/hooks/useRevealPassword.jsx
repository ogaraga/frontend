import { useState } from 'react'

function useRevealPassword() {
    
  const [reveal, setReveal] = useState(true);
  const handleReveal = ()=>{
    setReveal(!reveal);
  }
  return [handleReveal,reveal]
}

export default useRevealPassword