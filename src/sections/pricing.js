/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Individual',
    subtitle: '',
    amount: {
      monthly: 35000,
      annual: 25000,
    },
    isRecommended: false,
    buttonText: 'biz@crefati.com',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Website Design & Development',
      },
      {
        id: 2,
        isAvailable: true,
        title: `FREE Domain (.com ONLY)`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `2GB of Server Space`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `2 Pro Emails`,
      },
	  {
        id: 5,
        isAvailable: true,
        title: `FREE SSL`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `FREE Logo Design`,
      },
	  {
        id: 7,
        isAvailable: false,
        title: `FREE Business Card Design`,
      },
	  {
        id: 8,
        isAvailable: false,
        title: `FREE Monthly maintenance`,
      },
	  {
        id: 9,
        isAvailable: false,
        title: `FREE Photoshoot`,
      },
    ],
  },
  {
    id: 2,
    title: 'Business',
    subtitle: 'For agencies, companies, e-commerce sites',
    amount: {
      monthly: 65000,
      annual: 55000,
    },
    isRecommended: true,
    buttonText: 'biz@crefati.com',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Website Design & Development',
      },
      {
        id: 2,
        isAvailable: true,
        title: `FREE Domain`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Unlimited Hosting Storage`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Unlimited Pro Emails`,
      },
	  {
        id: 5,
        isAvailable: true,
        title: `FREE SSL`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `FREE Logo Design`,
      },
	  {
        id: 7,
        isAvailable: true,
        title: `FREE Business Card Design`,
      },
	  {
        id: 8,
        isAvailable: true,
        title: `Monthly maintenance`,
      },
	  {
        id: 9,
        isAvailable: true,
        title: `FREE Photoshoot (pics of your business)`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Preços"
          description="Temos os melhores preços do mercado para alavancar a sua notoriedade artística."
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Plano Mensal</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Plano anual</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
