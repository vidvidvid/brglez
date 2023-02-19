import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function Napacni() {
  return (
    <div className='Napacni'>
      <Link to='/'>
        <Text
          color='#FAFF00'
          fontSize={30}
          pl={4}
          pt={2}
          _hover={{
            color: "#00ff6f",
          }}
        >
          nazaj
        </Text>
      </Link>
    </div>
  );
}
export default Napacni;
