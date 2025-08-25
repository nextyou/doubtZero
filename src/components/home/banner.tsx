"use client";
import React from "react";
import { motion } from "framer-motion";
 import { Card, CardContent } from "@/components/ui/card";
import { Clock, Gauge,  } from "lucide-react";
import Button from "@/components/ui/button/Button";
import TextLogo from "../chat/text-logo";
import Link from "next/link";

export default function DoubtZeroBanner() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-600 flex flex-col p-6 space-y-10">
      {/* Header with Logo */}
      <header className="w-full flex items-center justify-between  px-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md">
         <TextLogo/> 
      </header>

      {/* Banner Section */}
      <Card className="w-full max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Left Section - Text */}
          <div className="md:w-1/2 space-y-6 text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stuck with Doubts at Midnight? <br /> Waiting for Answers Slows You Down.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Don’t let doubts and delays reduce your learning efficiency. With <span className="font-semibold">doubtZero</span>, you get instant 24/7 expert solutions so you can learn faster and smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button  size="lg" className="rounded-2xl px-6 py-3 text-lg font-medium shadow-lg hover:scale-105 transition">
                <Link href={'/ask-doubts'}>
                Get Instant Help Now
              </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Section - Illustration */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-none rounded-2xl w-80 shadow-2xl">
              <CardContent className="p-6 space-y-6 text-white">
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 animate-pulse" />
                  <span className="text-sm">24/7 Anytime Support</span>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <p className="text-sm">👩‍🏫 Expert: Sure! Let me explain step by step...</p>
                </div>
                <div className="bg-indigo-500 p-3 rounded-xl self-end text-right">
                  <p className="text-sm">🙋‍♂️ Student: I’m stuck on this problem...</p>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-5 h-5 animate-spin-slow" />
                    <span className="text-sm">Efficiency Boost</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="bg-green-400 h-4"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <p className="text-sm text-center">Learning Efficiency: 100%</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
