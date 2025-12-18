import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error;

  const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The verification token has expired or has already been used.",
    Default: "An error occurred during authentication.",
  };

  const errorMessage = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
              aria-label="Home"
            >
              CertApp
            </Link>
          </div>
        </Container>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <Container>
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-lg border border-destructive/50 bg-card p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-destructive/10 p-3">
                  <AlertCircle className="h-10 w-10 text-destructive" aria-hidden="true" />
                </div>
              </div>

              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold tracking-tight">
                  Authentication Error
                </h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  {errorMessage}
                </p>
                {error && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Error code: {error}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/auth/signin">Try Again</Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
