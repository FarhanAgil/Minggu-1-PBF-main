import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { DecreaseQuantity, IncreaseQuantity } from '../../actions/products';
import { API_CART_URL } from '../../api';
import CartItem from '../../components/table/CartItem';

function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`${API_CART_URL}/cart`)
            .then(response => response.json())
            .then(result => {
                let listCart = result.reduce(
                    (map => (r, a) => (!map.has(a.productId) && map.set(a.productId, r[r.push({
                        id: a.id,
                        productId: a.productId,
                        image: a.image,
                        nama: a.nama,
                        harga: a.harga,
                        qty: 0
                    }) - 1]), map.get(a.productId).qty++, r))(new Map),
                    []
                );

                let subTotal = listCart.reduce(function (prev, cur) {
                    return prev + (cur.harga * cur.qty);
                }, 0);

                setCartProducts(listCart)
                setSubTotal(subTotal)
            })
            .catch((error) => console.log(error))
    }

    const increaseQuantity = (product) => {
        fetch(`${API_CART_URL}/cart/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...product,
                id: new Date().getTime(),
            })
        }).then(() => {
            dispatch(IncreaseQuantity())
            getData()
        })
    }

    const decreaseQuantity = (id) => {
        fetch(`${API_CART_URL}/cart/${id}`, { method: 'DELETE' })
            .then(() => {
                dispatch(DecreaseQuantity())
                getData()
            })
    }

    return (
        <TableContainer>
            <Table variant='simple' size={'md'}>
                <Thead>
                    <Tr>
                        <Th>Nama</Th>
                        <Th>Gambar</Th>
                        <Th isNumeric>Harga Satuan</Th>
                        <Th isNumeric>Jumlah</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        cartProducts.map(product => {
                            return <CartItem
                                product={product}
                                key={product.id}
                                image={product.image}
                                imageAlt={product.nama}
                                nama={product.nama}
                                harga={product.harga}
                                qty={product.qty}
                                onIncreaseQuantity={increaseQuantity}
                                onDecreaseQuantity={decreaseQuantity}
                            />
                        })
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th colSpan={3}>SubTotal</Th>
                        <Td isNumeric><NumberFormat value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></Td>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default Cart;