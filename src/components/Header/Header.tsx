import { Flex, Image } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={2}
            p={2}
            h={16}
            bg={"#343951"}
            borderBottom={"1px solid #272b3d"}
        >
            <Image h={"30px"} src={'https://assets.website-files.com/6081453925c1b7567312daa7/6082922d484484bbb2c7f577_offerzen-logo-white.svg'} />
        </Flex>
    )
}

export default Header;