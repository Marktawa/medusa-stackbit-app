import Button from './.stackbit/models/Button';
import Card from './.stackbit/models/Card';
import Page from './.stackbit/models/Page';
import CardGridSection from './.stackbit/models/CardGridSection';
import FooterConfig from './.stackbit/models/FooterConfig';
import HeroSection from './.stackbit/models/HeroSection';
import SiteConfig from './.stackbit/models/SiteConfig';
import AllProducts from './.stackbit/models/AllProducts';

const sbConfig = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  cmsName: 'git',
  nodeVersion: '16',
  dataDir: 'content/data',
  pagesDir: 'content/pages',
  pageLayoutKey: 'type',
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/',
  },
  models: {
    Page,
    Button,
    Card,
    CardGridSection,
    FooterConfig,
    HeroSection,
    SiteConfig,
    AllProducts,
  },
};

export default sbConfig;
