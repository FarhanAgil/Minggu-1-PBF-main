import {
    Box,
    Flex,
    Button,
    Text,
    IconButton,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    HStack,
    Icon,
    Badge
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon
} from '@chakra-ui/icons';

import {
    FiShoppingCart
} from 'react-icons/fi'

import {
    useDispatch,
    useSelector
} from 'react-redux';

import { actFetchCartNumber } from '../../actions/products';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchCartNumber())
    }, [])

    const numberCart = useSelector((state) => state._todoProduct.numberCart)

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        <Link to='/'> Aremastore </Link>
                    </Text>
                </Flex>

                <HStack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    alignItems={'center'}
                    spacing={2}>
                    <Link to='/cart'>
                        <Button variant={'ghost'}>
                            <Icon
                                as={FiShoppingCart}
                                w={5}
                                h={5}
                                color={useColorModeValue('gray.800', 'white')}
                                mt={3} />
                            <Badge
                                colorScheme={'blue'}
                                ml={-1}
                                fontSize={'md'}>
                                {numberCart}
                            </Badge>
                        </Button>
                    </Link>
                    <Button variant={'ghost'} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Avatar
                        size={'sm'}
                        src={
                            'data:image/png;base64,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'
                        }
                    />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;