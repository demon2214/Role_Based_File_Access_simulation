import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Badge,
  History,
  Lock,
  RefreshCw,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">PROJECT NAME</span>{" "}
              {/* add project name here */}
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/docs" className="text-sm font-medium">
              Documentation
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-background p-2 shadow-lg transition-all">
                  <div className="flex h-full flex-col rounded-md border shadow-sm">
                    <div className="flex h-9 items-center border-b px-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="ml-2 flex-1 text-center text-sm font-medium">
                        Secure File Management System
                      </div>
                    </div>
                    <div className="flex-1 p-4 overflow-hidden">
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <Lock className="mr-2 h-4 w-4 text-green-500" />
                            <span>Multi-factor authentication enabled</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <Shield className="mr-2 h-4 w-4 text-green-500" />
                            <span>AES-256 encryption active</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Role-based access control</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                            <span>Real-time threat detection</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <History className="mr-2 h-4 w-4 text-purple-500" />
                            <span>Comprehensive audit logs</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2 text-sm">
                          <div className="flex items-center">
                            <RefreshCw className="mr-2 h-4 w-4 text-cyan-500" />
                            <span>Automatic key rotation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Grade encryption Security
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Secure File Storage & Management
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Safeguard your sensitive information using military-grade encryption, 
                  multi-factor authentication, and robust access controls in our secure file management system.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth">
                    <Button
                      size="lg"
                      className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button
                      variant="outline"
                      size="lg"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Grade Enterprise Security
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Security Features
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides end-to-end protection for your most
                sensitive files and data
              </p>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-10 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Data Encryption</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Military-grade AES-256 encryption to protect your files in
                  transit and at rest
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">
                  Multi-Factor Authentication
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  Secure access with password, biometrics, and time-based
                  verification codes
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <circle cx="17" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Access Control</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Role-based permissions to ensure the right people have the
                  right access
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-alert-triangle"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12" y2="17" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Threat Detection</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Continuous monitoring for suspicious activity and threats
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Audit Logs</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Detailed logs of all file access and changes for compliance
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-refresh-cw"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Key Rotation</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Automatic periodic encryption key updates to enhance security
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[48rem] flex-col items-center justify-center gap-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      “Contributing to this project has been a rewarding
                      learning experience and a great opportunity to enhance my
                      skills.”
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-muted p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user"
                      >
                        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                        <path d="M2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Student 1</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      “This project helped me understand best practices in
                      secure file storage and management.”
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-muted p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user"
                      >
                        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                        <path d="M2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Student 2</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      “I appreciate the strong emphasis on security features in
                      this project.”
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-muted p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user"
                      >
                        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                        <path d="M2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Student 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
