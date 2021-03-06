import React, { useState, useEffect,useCallback } from 'react';

//自定义hooks
function useWinSize() { 
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize', onResize)
        }
    }, [])
    return size
}

function Example10() {
    const size = useWinSize()
    return (
        <div>
            页面size：{size.width}, {size.height} 
        </div>
    )
}
export default Example10

