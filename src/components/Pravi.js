import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useRef } from "react";

function Pravi() {
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState();

  let audio = useRef();

  const start = (a) => {
    audio.current?.pause();
    audio.current = new Audio(a);
    audio.current.play();
  };

  const questions = [
    {
      color: "#FF00C7",
      description: "Kako si?",
    },
    {
      color: "#0AFF89",
      description:
        "Kot vemo, si bil tudi ti nekoč študent ljubljanske Akademije. Se ti je zdelo da te ob vstopu v realen svet Akademija na določene stvari ni opozorila? Česa je torej med tekom študija primanjkovalo? Da bi bil preskok na profesionalno ustvarjanje v realnem svetu lažji.",
    },
    {
      color: "#0038FF",
      description:
        "Kakšna pa je tvoja trenutna situacija? Imaš s.p. ali status samozaposlenega v kulturi?",
    },
    {
      color: "#FF00C7",
      description:
        "Študentje se dostikrat srečujemo s samodvomom. Še posebaj ko je treba določiti ceno storitve. Kako si ti določil svoj cenik?",
    },
    {
      color: "#FAFF00",
      description:
        "Kot mlad ustvarjalec si imel tudi ti idealistična pričakovanja, kako bo izgledalo tvoje delo po študiju. Katera od teh pričakovanj so se izpolnila? Si že tekom študija delal za naročnike?",
    },
    {
      color: "#0AFF89",
      description:
        "Pretežno deluješ v slovenskem prostoru. Država je majhna in s tem tudi število naročnikov. Se ti zdi da ni dovolj medsebojnega sodelovanja?",
    },
    {
      color: "#0038FF",
      description:
        "Kljub temu da pretežno deluješ v Sloveniji, je povezanost s svetom dosti močnejša kot je bila pri prejšnih generacijah. Videli smo, da si delal za Vice.",
    },
    {
      color: "#0AFF89",
      description:
        "Imaš kakšne izkušnje s tem, kako je pridobiti delo v tujini?",
    },
    {
      color: "#FAFF00",
      description:
        "Človeška narava je, da se primerjamo z drugimi. Si se tudi ti kdaj soočal s samodvomom? Kaj pa danes?",
    },
    {
      color: "#FF00C7",
      description:
        "V tvojem delu je opaziti prisotnost modnih kosov. Postavitev figur pri tvojih ilustracijah zelo sliči na postavitev figur pri modnih editorialih. Uporabljaš to kot osnovo pri svojem ustvarjanju?",
    },
    {
      color: "#0AFF89",
      description:
        "Tudi mi smo bili že dostikrat zmedeni ali pa celo razpeti med večimi smermi, ki nas zanimajo.",
    },
    {
      color: "#FAFF00",
      description:
        "Imaš kakšno misel za na koncu? Kakšnega profesorja za pohvalit?",
    },
  ];

  return (
    <div className='Pravi'>
      <Box
        position='absolute'
        height='100%'
        width='100%'
        bgImage='/images/brglez_ozadje.gif'
        bgSize='cover'
      />
      <Flex
        position='absolute'
        p={4}
        fontSize={40}
        color='red'
        h='full'
        w={20}
        direction='column'
        justifyContent='space-between'
      >
        {questions.map(({ color, description }, index) => {
          return (
            <Flex w='full'>
              <Text
                _hover={{
                  color,
                }}
                cursor='pointer'
                onClick={() => {
                  setDescription(description);
                  setCurrent(index);
                  start(`/audio/${index}.mp3`);
                }}
                color={current === index ? color : undefined}
              >
                {index}.
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        position='absolute'
        p={4}
        fontSize={30}
        color='red'
        h='full'
        w='calc(100% - 110px)'
        left={20}
        direction='column'
        justifyContent='space-between'
      >
        {questions.map(({ color, description }, index) => {
          return (
            <Flex h={"60px"}>
              {current === index && (
                <Box
                  position='relative'
                  textAlign='justify'
                  fontSize={40}
                  marginTop={"-1px"}
                  color={color}
                >
                  {description}
                </Box>
              )}
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
}
export default Pravi;
