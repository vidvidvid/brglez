import { Text, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Root() {
  let audio = useRef();

  const start = (a) => {
    audio.current = new Audio(a);
    audio.current.play();
  };

  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(1);

  const reduceAndIncreaseOpacity = (setOpacity) => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

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
      <Link to='/vmes'>
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
          cursor={"pointer"}
          onClick={() => start("/audio/success.mp3")}
        />
      </Link>
      <Box
        display='inline-block'
        position='absolute'
        bgColor={"red"}
        right='40%'
        bottom='20%'
        role='group'
      >
        <Image
          src='/images/brglez_napacni1.png'
          opacity={opacity1}
          bgColor={"red"}
          alt='brglez'
          cursor={"pointer"}
          transition='transform 0.1s linear'
          _hover={{
            transform: "scale(1.04)",
          }}
          onClick={() => {
            start("/audio/error.wav");
            reduceAndIncreaseOpacity(setOpacity1);
          }}
        />
      </Box>
      <Box
        display='inline-block'
        position='absolute'
        bgColor={"red"}
        right='5%'
        top='30%'
        role='group'
      >
        <Image
          src='/images/brglez_napacni2.png'
          opacity={opacity2}
          bgColor={"red"}
          alt='brglez'
          cursor={"pointer"}
          transition='transform 0.1s linear'
          _hover={{
            transform: "scale(1.04)",
          }}
          onClick={() => {
            start("/audio/error.wav");
            reduceAndIncreaseOpacity(setOpacity2);
          }}
        />
      </Box>
    </div>
  );
}
export default Root;
