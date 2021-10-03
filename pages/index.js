import Head from 'next/head';
import Page from '../components/Page';
import Image from 'next/image';
import Banner from '../components/Banner';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import AboutUs from '../components/AboutUs';
import Faqs from '../components/Faqs';
import Pricing from '../components/Pricing';
import Video from '../components/Video';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <Page>
      <Banner />
      <Services />
      <AboutMe />
      <WhyUs />
      <Faqs />
      <Video />
    </Page>
  );
}
