import PropTypes from 'prop-types'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import useWishlist from '../hooks/useWishlist';
import { useHover } from '@uidotdev/usehooks';

const ProductCard = (props) => {
    const { isAdded, add } = useWishlist()
    const [ref, hovering] = useHover();

    const {
        title,
        description,
        thumbnail,
        price
    } = props

    //const { state, toggle } = useToggle()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
    });

    return (
        <Card ref={ref}>
            <CardMedia image={thumbnail} sx={{ height: 140 }}/>
            <CardContent>
                <Typography>{ hovering ? "Hover": "" }</Typography>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <Typography gutterBottom>{description}</Typography>
                <Typography>{formatter.format(price)}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => add()} disabled={isAdded} type="button" variant='outlined' startIcon={isAdded ? <Favorite /> : <FavoriteBorderOutlined />}>
                    {isAdded ? 'Added' : 'Add to Wishlist'}
                </Button>
            </CardActions>
        </Card>
    )
}

ProductCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProductCard;