import { useState } from "react"

export default function useWishlist(){
    const [isAdded, setIsAdded] = useState(false)
    const add = () => {
        alert("call this api")
        setIsAdded(true)
    }

    return {
        isAdded,
        add
    }
}