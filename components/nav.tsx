import Link from "next/link";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { UserMenu } from "@/components/user-menu";

export async function Nav() {
  const session = await auth();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
              aria-label="Home"
            >
              CertApp
            </Link>

            {/* Navigation Links */}
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/trades"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Trades
              </Link>
            </div>
          </div>

          {/* Right: Theme toggle and Auth */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {session?.user ? (
              <UserMenu user={session.user} />
            ) : (
              <Button asChild size="sm">
                <Link href="/api/auth/signin">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
