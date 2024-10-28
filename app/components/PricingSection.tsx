import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$19',
    description: 'All the basics for starting a new business',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', 'Email support'],
    mostPopular: false,
  },
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$49',
    description: 'Everything you need for a growing business',
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', 'Priority email support', 'Marketing automations'],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Advanced features for scaling your business',
    features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '24/7 phone & email support', 'Custom integrations'],
    mostPopular: false,
  },
]

export default function PricingSection() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Choose an affordable plan {"that's"} packed with the best features for engaging your audience,
          creating customer loyalty, and driving sales.
        </p>
        <div className="isolate gap-4 mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                flex flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-ring xl:p-10
                ${tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : ''}
                ${tierIdx === 0 ? 'lg:rounded-r-none' : ''}
                ${tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : ''}
              `}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`
                  mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  ${
                    tier.mostPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100 focus-visible:outline-blue-600'
                  }
                `}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
