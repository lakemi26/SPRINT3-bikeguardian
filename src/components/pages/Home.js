import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Banner from '../Banner';
import Footer from '../Footer';
import BannerCoberturas from '../BannerCoberturas';
import LinhaCoberturas from '../LinhaCoberturas';
import LinhaBikes from '../LinhaBikes';
import BannerBikes from '../BannerBikes';
import LinhaPlanos from '../LinhaPlanos';
import LinhaInfo from '../LinhaInfo';
import BannerPlanos from '../BannerPlanos';
import Bannerinfo from '../BannerInformacoes';

function Home() {
  return (
    <>
      <Banner />
      <LinhaCoberturas/>
      <BannerCoberturas/>
      <LinhaBikes/>
      <BannerBikes/>
      <LinhaPlanos/>
      <BannerPlanos/>
      <LinhaInfo/>
      <Bannerinfo/>

    </>
  );
}

export default Home;
