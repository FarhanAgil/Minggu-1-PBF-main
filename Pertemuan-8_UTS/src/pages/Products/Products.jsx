import { Container, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actStoreProductToCart } from '../../actions/products'
import { API_PRODUCT_URL } from '../../api'
import Product from '../../components/cards/Product'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${API_PRODUCT_URL}/products`)
            .then(response => response.json())
            .then(result => {
                setProducts(result)
            })
            .catch((error) => console.log(error))
    }, [])

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(actStoreProductToCart({
            ...item,
            id: new Date().getTime(),
            productId: item.id,
        }))
    }

    return (
        <Container maxW={'80rem'} centerContent>
            <SimpleGrid columns={3} gap={4} p={8}>
                {
                    products.map(product => {
                        return <Product
                            key={product.id}
                            image={product.image}
                            imageAlt={product.nama}
                            nama={product.nama}
                            harga={product.harga}
                            stok={product.stok}
                            onAddToCart={() => handleClick(product)}
                        />
                    })
                }
            </SimpleGrid>
        </Container>
    )
}

export default Products;