'use client'

import { motion } from 'framer-motion'

export const BushidoList = () => {
  return (
    <div className="pl-15 flex-1"> {/* Modifié la marge */}
      <div className="relative w-[100%]"> {/* Ajouté pour contrôler la taille de l'image */}
        <div className="absolute inset-0 bg-[url('/assets/backgrounds/arrbushi.webp')] bg-cover bg-no-repeat bg-center opacity-20" />
        <ul className="relative z-10 text-[#A68A72] pl-20">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >           
            <span className="writing-vertical-rl pr-4 pt-4 inline-block transform hover:scale-130 transition-transform">
              武士道
            </span>
            Bushido
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg italic underline decoration-[#f3b705] mb-4"
          >
            &quot;Code d&apos;honneur du samouraï&quot;
          </motion.li>
          {[
            "Courage",
            "Bonté, humanité",
            "Politesse",
            "Loyauté",
            "Désintéressement",
            "Honneur",
            "Fidélité",
            "Modestie",
            "Respect",
            "Contrôle de soi",
            "Amitié", 
            "Bienveillance"
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="mb-3 font-sedan hover:text-[#f2b705]"
            >
              {item}
            </motion.li>          
          ))}
        </ul>
      </div>
    </div>
  )
}