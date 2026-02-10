"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Modern Online Fashion Shop",
    description: "A fully functional fashion eCommerce web app with modern UI, responsive design, and seamless user experience.",
    image: "/Proj2.PNG",
    demo: "https://clothes-ecommerce-app.vercel.app/"
  },
  {
    title: "AI-Powered English Learning Assistant",
    description: "An AI-powered platform for English language learning with interactive lessons, speech recognition, and personalized progress tracking.",
    image: "/proj6.PNG",
    demo: "https://englishlearningassistant-geqm8snvc6zfurdsepx5fr.streamlit.app/"
  },
  {
    title: "Premium Dental Care Web App",
    description: "Fully functional dental care web app with modern UI, service highlights, and appointment features.",
    image: "/proj3.PNG",
    demo: "https://dental-app-psi.vercel.app/"
  },
  {
    title: "Physical AI & Humanoid Robotics Textbook Web App",
    description: "A fully functional educational web app on Physical AI & Humanoid Robotics with structured content and interactive learning layout.Ragchatbot is for customers to ask questions about the textbook and get answers in real time.",
    image: "/proj1.PNG",
    demo: "https://book-5zp6.vercel.app/"
  },
  {
    title: "AI Book Writer – Intelligent Content Generation App",
    description: "An AI-powered book and blog writing web app that generates intelligent content based on user input, providing a seamless writing experience for authors and creatives.",
    image: "/proj5.PNG",
    demo: "https://project11-ssqnyrbq548ykdrdclzvjs.streamlit.app//"
  },
  {
    title: "AI Academic Paper Generator",
    description: "Fully functional AI academic paper generator for any board and any class using artificial intelligence.",
    image: "/proj4.PNG",
    demo: "https://papergenerator-qspwfeqpjmtefpjrrqd6jt.streamlit.app/"
  },
  {
    title: "Dental Surgery Clinic Web App",
    description: "A fully functional dental surgery clinic web app with appointment booking, patient management, and service information.",
    image: "/proj7.PNG",
    demo: "https://third-nextjs-proj-t32l.vercel.app/"
  },
  // {
  //   title: "AI Trip Planner Application",
  //   description: "AI-powered trip planner with intelligent suggestions, ATS optimization, and professional templates.",
  //   image: "/project6.png",
  //   demo: "https://mfahadjbr-ai-trip-plan-website-srcproject1main-0b1pil.streamlit.app/"
  // }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of my recent work showcasing innovative solutions
              and technical expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto text-center">
                      <Button
                        className="w-full sm:w-auto transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}