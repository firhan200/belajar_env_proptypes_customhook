import { useHover } from "@uidotdev/usehooks";

export default function useProductHover(){
    const [ref, hovering] = useHover()

    const onProductHover = () => {
        if(hovering){
            console.log("hovered")
        }else{
            console.log("not hovered")
        }
    }

    return {
        ref,
        onProductHover
    }
}