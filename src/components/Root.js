import { Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div className='App'>
      <Text
        position='absolute'
        top='35%'
        left='50%'
        transform='translateX(-50%)'
        zIndex={1}
        color='red'
        fontSize={40}
      >
        Izberi brgleza
      </Text>
      <Link to='/pravi'>
        <Image
          src='/images/brglez_pravi.png'
          alt='brglez'
          position='absolute'
          left='5%'
          top='5%'
          transition='transform 0.1s linear'
          _hover={{
            transform: "scale(1.04)",
          }}
        />
      </Link>
      <Link to='/napacni'>
        <Image
          src='/images/brglez_napacni1.png'
          alt='brglez'
          position='absolute'
          right='40%'
          bottom='20%'
          transition='transform 0.1s linear'
          _hover={{
            transform: "scale(1.04)",
          }}
        />
      </Link>
      <Link to='/napacni'>
        <Image
          src='/images/brglez_napacni2.png'
          alt='brglez'
          position='absolute'
          right='5%'
          top='30%'
          transition='transform 0.1s linear'
          _hover={{
            transform: "scale(1.04)",
          }}
        />
      </Link>
    </div>
  );
}
export default Root;
