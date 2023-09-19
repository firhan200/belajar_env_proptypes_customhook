import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import useWishlist from "../hooks/useWishlist"

const ProductDetail = () => {
    const { isAdded, add } = useWishlist()

    return (
        <>
            <Typography>Sepatu</Typography>
            <Typography>Lorem ipsum description here</Typography>
            <Button onClick={() => add()} disabled={isAdded} type="button" variant='outlined' startIcon={isAdded ? <Favorite /> : <FavoriteBorderOutlined />}>
                {isAdded ? 'Added' : 'Add to Wishlist'}
            </Button>
        </>
    )
}

export default ProductDetail;