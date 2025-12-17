import Link from "next/link";
import { Container } from "@/components/container";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/50 to-background py-20 sm:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Professional Trade{" "}
                <span className="text-primary">Certifications</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Discover and verify professional trade certifications. Browse
                through a comprehensive database of skilled tradespeople and
                their credentials.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/trades">
                    Browse Trades
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/api/auth/signin">Get Started</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose CertApp?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The trusted platform for trade certification management
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Verified Credentials</h3>
                <p className="text-muted-foreground">
                  All certifications are thoroughly verified and authenticated
                  for your peace of mind.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Easy Search</h3>
                <p className="text-muted-foreground">
                  Find the right professional quickly with our advanced search
                  and filtering system.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Real-time Updates</h3>
                <p className="text-muted-foreground">
                  Stay informed with instant notifications about certification
                  status changes.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <Container>
          <div className="flex h-16 items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 CertApp. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Privacy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Terms
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
