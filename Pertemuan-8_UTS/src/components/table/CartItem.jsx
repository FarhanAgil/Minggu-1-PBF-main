import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
    Tr,
    Td,
    Center,
    Image,
    ButtonGroup,
    IconButton,
    Button
} from '@chakra-ui/react';
import React from 'react';
import NumberFormat from 'react-number-format';

function CartItem({
    product,
    image,
    imageAlt,
    nama,
    harga,
    qty,
    onIncreaseQuantity,
    onDecreaseQuantity
}) {
    return (
        <Tr>
            <Td>{nama}</Td>
            <Td>
                <Center
                    backgroundColor={'white'}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        boxSize={'150px'}
                        objectFit={'contain'} />
                </Center>
            </Td>
            <Td isNumeric><NumberFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></Td>
            <Td isNumeric>
                <ButtonGroup size='sm' isAttached variant='outline'>
                    <IconButton aria-label='Decrease Product Amount' icon={<MinusIcon />} onClick={() => onDecreaseQuantity(product.id)} />
                    <Button mr='-px'>{qty}</Button>
                    <IconButton aria-label='Increase Product Amount' icon={<AddIcon />} onClick={() => onIncreaseQuantity(product)} />
                </ButtonGroup>
            </Td>
        </Tr>
    )
}

export default CartItem;