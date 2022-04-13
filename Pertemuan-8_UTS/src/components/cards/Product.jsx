import { AddIcon } from "@chakra-ui/icons"
import { Box, IconButton, Center, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { FiBox } from 'react-icons/fi'
import NumberFormat from "react-number-format"

function Product({
    image,
    imageAlt,
    nama,
    harga,
    stok,
    onAddToCart
}) {

    return (
        <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'>
            <Center
                backgroundColor={'white'}>
                <Image
                    src={image}
                    alt={imageAlt}
                    boxSize={'300px'}
                    objectFit={'contain'} />
            </Center>

            <Box p='6'>
                <Box
                    mt='1'
                    as='h4'
                    lineHeight='tight'
                    isTruncated>
                    {nama}
                </Box>

                <Flex
                    alignItems={'center'}
                    mt={2}>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Box>
                            <Text
                                fontSize={'xl'}
                                fontWeight='semibold'>
                                <NumberFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        justify={'flex-end'}>
                        <HStack
                        >
                            <Icon as={FiBox} />
                            <Text>{stok}</Text>
                        </HStack>
                    </Flex>
                </Flex>
                <Flex
                    justify={'flex-end'}
                    mt={6}>
                    <IconButton
                        colorScheme={'blue'}
                        aria-label='Add to Cart'
                        icon={<AddIcon />}
                        onClick={onAddToCart} />
                </Flex>
            </Box>
        </Box>
    )
}

export default Product