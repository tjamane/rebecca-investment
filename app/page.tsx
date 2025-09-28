"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle, MessageCircle, TrendingUp, Users, Shield } from "lucide-react"

export default function InvestmentLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    setFormData({ name: "", email: "", phone: "" })
  }

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Investment Hub</span>
            </div>
            <Button onClick={scrollToWaitlist} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center bg-warning/20 text-warning-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Limited Time Opportunity
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              INVESTMENT PACKAGES
              <span className="block text-warning">AVAILABLE NOW!</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
                <img
                  src="/professional-woman-profile-photo.jpg"
                  alt="Mrs. Rebecca Haimbodi"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold">Mrs. Rebecca Haimbodi</p>
                <p className="text-primary-foreground/80">Investment Specialist</p>
              </div>
            </div>
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-warning hover:bg-warning/90 text-warning-foreground font-semibold px-8 py-4 text-lg animate-pulse-glow"
            >
              Secure Your Spot Now
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Packages Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Investment Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your financial future with our proven investment opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { investment: "N$1,500", returns: "N$30K", multiplier: "20x", popular: false },
              { investment: "N$2,000", returns: "N$44K", multiplier: "22x", popular: true },
              { investment: "N$2,500", returns: "N$50K", multiplier: "20x", popular: false },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative transform hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-warning shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warning text-warning-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.investment}</CardTitle>
                  <CardDescription className="text-muted-foreground">Initial Investment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.returns}</div>
                    <div className="text-warning font-semibold text-lg">{pkg.multiplier} Returns</div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure Investment</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Expert Management</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Guaranteed Returns</span>
                    </div>
                  </div>
                  <Button
                    onClick={scrollToWaitlist}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-warning hover:bg-warning/90 text-warning-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Turn your small step today into a<span className="text-warning"> life-changing tomorrow!</span>
          </h3>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Don't let this opportunity pass you by. Your financial freedom starts with a single decision.
          </p>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-8 bg-warning text-warning-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <AlertTriangle className="h-6 w-6 animate-pulse" />
            <p className="text-lg font-semibold">Spots are limited – first come, first served!</p>
            <AlertTriangle className="h-6 w-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join the Waitlist</h2>
              <p className="text-lg text-muted-foreground">
                Secure your spot and be the first to access these exclusive investment opportunities
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                  >
                    Join Waitlist Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {showSuccess && (
              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <p className="text-success font-medium">You've been added to the waitlist! We'll be in touch soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? Contact Mrs. Rebecca Haimbodi directly on WhatsApp
            </p>

            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-4 text-lg mb-8"
            >
              <a
                href="https://wa.me/264817487492"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </a>
            </Button>

            <p className="text-xl font-semibold text-primary">Invest wisely now... Enjoy forever.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6" />
            <span className="text-lg font-semibold">Investment Hub</span>
          </div>
          <p className="text-sm opacity-80">
            © 2025 Investment Hub. Professional investment services by Mrs. Rebecca Haimbodi.
          </p>
        </div>
      </footer>
    </div>
  )
}
