// Aplicamos patron singleton. Si tenemos la instancia "Ads" no la creamos
// pero si ya tenemos una simplemente la retornamos.
// No queremos varias instancias de la clase por ello aplicamos este patron

import JSONAds from './Ads.json'
export interface Ad {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ALL_ADS: Ad[] = JSONAds


class Ads {
  private static instance: Ads;
  private ads: Ad[];


  private constructor() {
    this.initAds;
  }

  static getInstance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }

    return Ads.instance;
  }

  private initAds() {
    this.ads = [...ALL_ADS];
  }

  getAd() {
    if (this.ads.length === 0) {
      this.initAds();
    }
    return this.ads.pop();
  }

}

export default Ads;