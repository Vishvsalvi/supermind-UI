"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, LineChart, PieChart, TrendingUp, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">SocialInsights</span>
        </div>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-emerald-500 transition-colors" href="#about">
            About
          </a>
         
        </nav>
        <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-800 py-2">
          <nav className="flex flex-col items-center gap-2">
            <a className="text-sm font-medium hover:text-emerald-500 transition-colors" href="#about">
              About
            </a>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Instant Social Media Insights
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-400 md:text-xl">
                  Unlock the power of your social media data with real-time analytics and actionable insights.
                </p>
              </div>
              <div className="space-x-4">
                {/* <Button className="bg-emerald-500 text-white hover:bg-emerald-600">Get Started</Button> */}
                <Link href="/chat" className="text-sm px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600" type="submit">
                    Get Started
                  </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <BarChart3 className="h-12 w-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
                <p className="text-neutral-400">Get up-to-the-minute data on your social media performance.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="h-12 w-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Trend Forecasting</h3>
                <p className="text-neutral-400">Predict future trends based on historical data and AI analysis.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PieChart className="h-12 w-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Audience Insights</h3>
                <p className="text-neutral-400">Understand your audience demographics and behavior patterns.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              About This Project
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-400 mb-6">
                SocialInsights is a project created for the Supermind Hackathon Prehack Submission. Our team is dedicated to revolutionizing social media analytics with cutting-edge AI technology.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-emerald-500">Aman Naik</li>
                <li className="text-emerald-500">Vishv Salvi</li>
                <li className="text-emerald-500">Ashpak Veetar</li>
              </ul>
              <p className="text-neutral-400">
                Together, we're building the future of social media intelligence, empowering businesses to make data-driven decisions and stay ahead in the digital landscape.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Supercharge Your Social Media?
                </h2>
                <p className="mx-auto max-w-[600px] text-emerald-100 md:text-xl">
                  Join thousands of businesses already benefiting from our powerful analytics platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
               
                
                  <Link href="/chat" className="text-sm px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800" type="submit">
                    Get Started
                  </Link>
               
                <p className="text-xs text-emerald-200">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

