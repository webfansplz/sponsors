import { defineConfig, presets } from 'sponsorkit'



export default defineConfig({
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
