import { Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"

const apiUrl = process.env.REACT_APP_BACK_END_URL

const products = [
    {
        id: 1,
        title: "Sepatu",
        description: "sepatu running ringan",
        price: 175000,
        thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Tas Nike",
        description: "tas ransel olahraga nike",
        price: 499000,
        thumbnail: "https://images.unsplash.com/photo-1573878930082-8f0fe89a2393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Macbook Pro 2020",
        description: "core i5 ram 16gb storage 256gb",
        price: 9750000,
        thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Jam Tangan Casio",
        description: "analog dengan chronometer",
        price: 300000,
        thumbnail: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
]

export default function ProductList() {
    return (
        <>
            <Typography align="center" variant="h5">Getting data from <b>{apiUrl}</b></Typography>
            <Grid container spacing={2} sx={{
                marginTop: 2
            }}>
                {
                    products.map(p =>
                        <Grid xs={12} sm={6} md={4} lg={3} item key={p.id}>
                            <ProductCard title={p.title} description={p.description} thumbnail={p.thumbnail} price={p.price}/>
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}