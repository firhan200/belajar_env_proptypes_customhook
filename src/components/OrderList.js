import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const OrderList = (props) => {
    return (
        <>
            <Typography>{ props.title  }</Typography>
        </>
    )
}

OrderList.propTypes = {
    title: PropTypes.string.isRequired
}

export default OrderList;