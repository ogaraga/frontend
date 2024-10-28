import { useState } from 'react'

function useNo() {
    const [no, setNo] = useState(true);
    const handleNo = ()=>{
        setNo(!no)
    }
  return [handleNo, no]
}

export default useNo;