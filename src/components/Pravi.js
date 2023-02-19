import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useState, useRef } from "react";

function Pravi() {
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
      images: [
        {
          left: "5%",
          top: "20%",
        },
        {
          right: "10%",
          top: "25%",
        },
      ],
    },
    {
      color: "#0AFF89",
      description:
        "Kot vemo, si bil tudi ti nekoč študent ljubljanske Akademije. Se ti je zdelo da te ob vstopu v realen svet Akademija na določene stvari ni opozorila? Česa je torej med tekom študija primanjkovalo? Da bi bil preskok na profesionalno ustvarjanje v realnem svetu lažji.",
      images: [
        {
          left: "5%",
          top: "40%",
        },
        {
          right: "10%",
          top: "40%",
        },
      ],
    },
    {
      color: "#0038FF",
      description:
        "Kakšna pa je tvoja trenutna situacija? Imaš s.p. ali status samozaposlenega v kulturi?",
      images: [
        {
          left: "5%",
          top: "40%",
        },
        {
          left: "15%",
          bottom: "5%",
        },
        {
          right: "10%",
          top: "30%",
        },
      ],
    },
    {
      color: "#FF00C7",
      description:
        "Študentje se dostikrat srečujemo s samodvomom. Še posebaj ko je treba določiti ceno storitve. Kako si ti določil svoj cenik?",
      images: [
        {
          left: "3%",
          bottom: "5%",
        },
        {
          right: "5%",
          bottom: "15%",
        },
        {
          right: "0%",
          bottom: "5%",
        },
      ],
    },
    {
      color: "#FAFF00",
      description:
        "Kot mlad ustvarjalec si imel tudi ti idealistična pričakovanja, kako bo izgledalo tvoje delo po študiju. Katera od teh pričakovanj so se izpolnila? Si že tekom študija delal za naročnike?",
      images: [
        {
          left: "13%",
          bottom: "5%",
        },
        {
          right: "2%",
          bottom: "2%",
        },
      ],
    },
    {
      color: "#0AFF89",
      description:
        "Pretežno deluješ v slovenskem prostoru. Država je majhna in s tem tudi število naročnikov. Se ti zdi da ni dovolj medsebojnega sodelovanja?",
      images: [
        {
          left: "6%",
          top: "2%",
        },
        {
          right: "2%",
          bottom: "2%",
        },
      ],
    },
    {
      color: "#0038FF",
      description:
        "Kljub temu da pretežno deluješ v Sloveniji, je povezanost s svetom dosti močnejša kot je bila pri prejšnih generacijah. Videli smo, da si delal za Vice.",
      images: [
        {
          left: "2%",
          top: "2%",
        },
        {
          right: "9%",
          top: "2%",
        },
        {
          right: "2%",
          bottom: "2%",
        },
      ],
    },
    {
      color: "#0AFF89",
      description:
        "Imaš kakšne izkušnje s tem, kako je pridobiti delo v tujini?",
      images: [
        {
          left: "7%",
          top: "2%",
        },
        {
          right: "9%",
          bottom: "2%",
        },
      ],
    },
    {
      color: "#FAFF00",
      description:
        "Človeška narava je, da se primerjamo z drugimi. Si se tudi ti kdaj soočal s samodvomom? Kaj pa danes?",
      images: [
        {
          left: "7%",
          top: "9%",
        },
        {
          right: "2%",
          top: "4%",
        },
      ],
    },
    {
      color: "#FF00C7",
      description:
        "V tvojem delu je opaziti prisotnost modnih kosov. Postavitev figur pri tvojih ilustracijah zelo sliči na postavitev figur pri modnih editorialih. Uporabljaš to kot osnovo pri svojem ustvarjanju?",
      images: [
        {
          left: "2%",
          top: "2%",
        },
        {
          right: "2%",
          top: "5%",
        },
        {
          right: "22%",
          top: "27%",
        },
      ],
    },
    {
      color: "#0AFF89",
      description:
        "Tudi mi smo bili že dostikrat zmedeni ali pa celo razpeti med večimi smermi, ki nas zanimajo.",
      images: [
        {
          left: "2%",
          top: "9%",
        },
        {
          left: "4%",
          bottom: "19%",
        },
        {
          right: "2%",
          top: "10%",
        },
      ],
    },
    {
      color: "#FAFF00",
      description:
        "Imaš kakšno misel za na koncu? Kakšnega profesorja za pohvalit?",
      images: [
        {
          left: "2%",
          top: "1%",
        },
        {
          left: "4%",
          bottom: "9%",
        },
        {
          right: "6%",
          top: "2%",
        },
        {
          right: "2%",
          top: "25%",
        },
        {
          right: "16%",
          bottom: "9%",
        },
      ],
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
      {/* list */}
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
        {questions.map(({ color }, index) => {
          return (
            <Flex w='full'>
              <Text
                _hover={{
                  color,
                }}
                cursor='pointer'
                onClick={() => {
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
      {/* answers */}
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
        {questions.map(({ color, description, images }, index) => {
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
              {current === index &&
                images &&
                images.map((image, i) => (
                  <Box
                    display='inline-block'
                    position='absolute'
                    bgColor={color}
                    {...image}
                    role='group'
                  >
                    <Image
                      opacity={0}
                      transition='opacity 0.06s linear'
                      _groupHover={{
                        opacity: 1,
                        zIndex: 4,
                      }}
                      position='relative'
                      src={`/images/slides/${index}_${i + 1}.png`}
                      alt=''
                    />
                  </Box>
                ))}
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
}
export default Pravi;
