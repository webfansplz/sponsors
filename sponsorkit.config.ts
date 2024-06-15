import { defineConfig, presets } from 'sponsorkit'



export default defineConfig({
  outputDir: './',
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg', 'png'],
    },
    {
      name: 'sponsors.wide',
      width: 1000,
      formats: ['svg', 'png'],
    },
    {
      renderer: 'circles',
      name: 'sponsors.circles',
      width: 320,
      includePastSponsors: true,
    },
  ],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.small,
    },
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 4,
      preset: presets.medium,
      composeAfter: (composer) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ]
})
