import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center">
      <div className="container-vth">
        <div className="max-w-lg">
          <span className="font-serif text-8xl font-light text-stone-light/60 leading-none block mb-8">404</span>
          <h1 className="font-serif text-3xl font-light text-charcoal mb-4">Page not found.</h1>
          <p className="font-sans text-sm text-stone leading-relaxed mb-10">
            The page you are looking for does not exist or has been moved. Please return to the homepage or use the navigation above.
          </p>
          <Link href="/" className="btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
