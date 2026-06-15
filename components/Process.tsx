const steps = [
  {
    number: '01',
    title: 'You order',
    body: 'Pick your roast, bag size, or subscription. No account required.',
  },
  {
    number: '02',
    title: 'We roast',
    body: 'Your beans are roasted fresh within 48 hours of your order. Never sitting on a shelf.',
  },
  {
    number: '03',
    title: 'It ships',
    body: 'Packed and shipped the same day as roasting. Arrives at your door within days.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="container-pad">
        <div className="text-center mb-14 reveal">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Roasted fresh. Shipped fast.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`text-center reveal reveal-delay-${i + 1}`}
            >
              <div
                className="font-display font-bold text-5xl mb-4"
                style={{ color: 'var(--border)', letterSpacing: '-0.04em' }}
              >
                {step.number}
              </div>
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
