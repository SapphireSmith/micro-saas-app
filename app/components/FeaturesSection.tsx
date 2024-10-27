import {
    Zap,
    Shield,
    Smartphone,
    Cloud,
    BarChart,
    Users,
    Lock,
    RefreshCw,
    Globe
  } from 'lucide-react'
  
  const features = [
    {
      name: 'Lightning Fast',
      description: 'Enjoy instant response times and seamless interactions powered by our highly optimized infrastructure.',
      icon: Zap
    },
    {
      name: 'Secure',
      description: 'Your data is protected with state-of-the-art security measures.',
      icon: Shield
    },
    {
      name: 'Mobile Friendly',
      description: 'Access your account seamlessly across all devices.',
      icon: Smartphone
    },
    {
      name: 'Cloud-Based',
      description: 'Store and access your data from anywhere in the world.',
      icon: Cloud
    },
    {
      name: 'Analytics',
      description: 'Gain valuable insights with our advanced analytics tools.',
      icon: BarChart
    },
    {
      name: 'Collaboration',
      description: 'Work together effortlessly with built-in collaboration features.',
      icon: Users
    },
    {
      name: 'Privacy First',
      description: 'We prioritize your privacy with end-to-end encryption.',
      icon: Lock
    },
    {
      name: 'Regular Updates',
      description: 'Enjoy continuous improvements with frequent updates.',
      icon: RefreshCw
    },
    {
      name: 'Global Support',
      description: '24/7 support available in multiple languages.',
      icon: Globe
    }
  ]
  
  export default function FeaturesSection() {
    return (
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powerful Features for Your Success
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform is packed with features designed to help you achieve your goals faster and more efficiently.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    )
  }
