/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/Podcast_audience.svg';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Compre e ouça em todos os seus dispositivos',
    contents: (
      <div>
        Compre uma vez, aproveite eternamente. Desfrute de todas as músicas compradas em todos os seus dispostivos.
      </div>
    ),
  },
  {
    title: 'Faça download das suas músicas',
    contents: (
      <div>
        Na SkeBug Music pode baixar as músicas compradas e ouvir offiline e partilha-lás com seus amigos e familiares.
      </div>
    ),
  },
  {
    title: `Descubra novas músicas`,
    contents: (
      <div>
        Com base nas suas compras lhe sugerimos as músicas que mais lhe podem interessar. 
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              //emoji={emoji}
              sx={styles.heading}
              title="Simples de ouvir. Fácil de usar."
              description="Com a mais alta tecnologia do mercado, nos propomos a dar-lhe a melhor experiência de usabilidade a fim de desfrutar do melhor qua a música tem para lhe proporcionar."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
