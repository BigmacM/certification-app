import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Nav } from "@/components/nav";

export default function TradesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 py-12">
        <Container>
          <PageHeader
            heading="Browse Trades"
            description="Explore professional trade certifications and find verified tradespeople."
          />

          <div className="mt-12 rounded-lg border bg-card p-12 text-center">
            <div className="mx-auto max-w-md">
              <svg
                className="mx-auto h-12 w-12 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">Coming Soon</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trade listings and search functionality will be available here.
                Check back soon for updates!
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
