"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export default function InvestmentChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Investment Maximus, your investment assistant. I can help you with questions about our investment packages, returns, and how to get started. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getInvestmentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey") ||
      message.includes("good morning") ||
      message.includes("good afternoon") ||
      message.includes("good evening") ||
      message.includes("greetings") ||
      message === "hi there" ||
      message === "hey there" ||
      message.includes("howdy") ||
      message.includes("what's up") ||
      message.includes("whats up")
    ) {
      return "Hello! Greetings and welcome! I'm Investment Maximus, your dedicated investment assistant. How can we help you today? I can provide information about our investment packages, returns, security, and how to get started with Mrs. Rebecca Haimbodi."
    }

    // Investment-related keywords and responses
    if (message.includes("package") || message.includes("investment") || message.includes("invest")) {
      return "We offer three investment packages: N$1,500 (returns N$30K), N$2,000 (returns N$44K), and N$2,500 (returns N$50K). All packages offer guaranteed returns with expert management. Which package interests you most?"
    }

    if (message.includes("return") || message.includes("profit") || message.includes("money")) {
      return "Our investment packages offer exceptional returns: 20x-22x your initial investment! For example, invest N$2,000 and get N$44K back. These are guaranteed returns managed by our expert team led by Mrs. Rebecca Haimbodi."
    }

    if (message.includes("how") && (message.includes("start") || message.includes("begin"))) {
      return "Getting started is easy! Simply join our waitlist by filling out the form on this page with your name, email, and phone number. Mrs. Rebecca Haimbodi will then contact you personally to guide you through the investment process."
    }

    if (message.includes("rebecca") || message.includes("haimbodi")) {
      return "Mrs. Rebecca Haimbodi is our experienced Investment Specialist who personally manages all investment packages. She has years of expertise in delivering guaranteed returns and will guide you through your investment journey."
    }

    if (message.includes("safe") || message.includes("secure") || message.includes("risk")) {
      return "All our investments are completely secure with guaranteed returns. We use expert management and proven strategies to ensure your investment is protected. Mrs. Rebecca Haimbodi personally oversees all investments to minimize any risks."
    }

    if (message.includes("time") || message.includes("when") || message.includes("duration")) {
      return "Investment timelines vary by package, but all are designed for optimal returns. Contact Mrs. Rebecca Haimbodi directly via WhatsApp for specific timeline details for your chosen investment package."
    }

    if (message.includes("contact") || message.includes("whatsapp") || message.includes("phone")) {
      return "You can contact Mrs. Rebecca Haimbodi directly on WhatsApp at +264 81 748 7492. She's available to answer all your investment questions and guide you through the process personally."
    }

    if (message.includes("waitlist") || message.includes("join") || message.includes("signup")) {
      return "To join our exclusive waitlist, scroll down to the 'Join the Waitlist' section and fill out the form with your name, email, and phone number. Spots are limited and it's first come, first served!"
    }

    if (message.includes("limited") || message.includes("spots") || message.includes("urgent")) {
      return "Yes, spots are very limited! This is a first come, first served opportunity. I recommend joining the waitlist immediately to secure your spot in these exclusive investment packages."
    }

    // Default response for non-investment related questions
    return "Please we do not currently have that, but an agent will come back to you. I'm specifically here to help with questions about our investment packages, returns, and how to get started. Is there anything about our investment opportunities I can help you with?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const messageText = inputValue.trim()

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("") // Clear input immediately
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getInvestmentResponse(messageText), // Use stored messageText instead of cleared inputValue
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-pulse-glow"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl border-2 border-primary/20 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-sm font-semibold">Investment Maximus</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/80">Investment Assistant</p>
          </CardHeader>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-xs leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg text-sm">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4 flex-shrink-0 bg-background">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about investments..."
                className="flex-1 h-9 text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="h-9 w-9 p-0 bg-primary hover:bg-primary/90"
                disabled={isTyping || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
