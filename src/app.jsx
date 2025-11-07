import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
function App() {
  const handleButtonClick = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <>
      <Helmet>
        <title>MATHIS OneBlaze MONCOQ - Artiste & Producteur</title>
        <meta name="description" content="Page officielle de MATHIS «OneBlaze» MONCOQ. Découvrez l'Association Le Trousseau, le label EVRGRN et sa vision." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4">
        <motion.div className="w-full max-w-lg text-center" variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Image */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img src="https://horizons-cdn.hostinger.com/364a9d91-953d-4ba6-8bd7-7f817a945c5a/1df9c1811f30069b8af8d2145df3d63d.jpg" alt="Portrait professionnel de MATHIS OneBlaze MONCOQ" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">MATHIS ONEBLAZE</h1>
            <p className="mt-1 text-2xl text-gray-700 font-semibold"></p>
            <p className="mt-3 text-lg text-gray-600">
              Artiste • Producteur • Fondateur de Label • Enseignant
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <Button onClick={() => handleButtonClick('https://www.asso-letrousseau.com')} className="group w-full bg-white text-gray-800 border border-transparent hover:bg-white text-md font-semibold py-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-pink-500/50">
              <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-pink-500 transition-all duration-300"></span>
              <span className="z-10">Association Le Trousseau</span>
            </Button>

            <Button onClick={() => handleButtonClick('https://evrgrn.mathisoneblaze.com')} className="group w-full bg-white text-gray-800 border border-transparent hover:bg-white text-md font-semibold py-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-green-500/50">
               <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-green-500 transition-all duration-300"></span>
              <span className="z-10">EVRGRN (Label)</span>
            </Button>
            
            <Button onClick={() => handleButtonClick('https://vision.mathisoneblaze.com')} className="group w-full bg-white text-gray-800 border border-transparent hover:bg-white text-md font-semibold py-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
               <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-indigo-500 transition-all duration-300"></span>
              <span className="z-10">Qui est Mathis ?</span>
            </Button>
          </motion.div>

          {/* Contact Email */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              <a href="mailto:contact@mathisoneblaze.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">contact@mathisoneblaze.com</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <Toaster />
    </>;
}
export default App;