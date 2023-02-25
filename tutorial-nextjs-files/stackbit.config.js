import { button } from './.stackbit/models/button.js'
import { hero } from './.stackbit/models/hero.js'
import { page } from './.stackbit/models/page.js'
import { stats } from './.stackbit/models/stats.js'

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  cmsName: 'git',
  pagesDir: 'content/pages',
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'images',
    publicPath: '/',
  },
  models: { button, hero, page, stats },
}