import { Link } from "react-router-dom";
import { Text, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

function Vmes() {
  let audio = useRef();

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio("/audio/opis.mp3");
      audio.current.play();
    }
  }, []);

  return (
    <div className='Vmes'>
      <Text color='#FF0000' fontSize={30} pl={4} pt={2}>
        Jure Brglez, znan tudi kot Brglesitta, je slovenski grafični oblikovalec
        in ilustrator. Študij je zaključil na Akademiji za likovno umetnost in
        oblikovanje v Ljubljani in diplomiral iz vizualnih komunikacij. Danes
        deluje kot samostojni oblikovalec, poleg tega pa je tudi član kolektiva
        Items, ki ga je ustanovil skupaj s tremi študenti Fakultete za
        arhitekturo. Nekje med ravnino in teksturami ustvarja stvari v nenehnem
        iskanju nečesa ... novega?
      </Text>
      <Link to='/pravi'>
        <Image
          src='/images/arrow.png'
          alt='arrow'
          w='full'
          onClick={() => audio.current?.pause()}
        />
      </Link>
    </div>
  );
}
export default Vmes;
