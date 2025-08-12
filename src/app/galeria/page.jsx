"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "../../components/home/Home.css";
import Footer from "../../components/FooterComponent/Footer";
import styles from "./Galeria.module.css";

const IMAGENES = [
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 1", desc: "Descripción de la imagen 1" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 2", desc: "Descripción de la imagen 2" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 3", desc: "Descripción de la imagen 3" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 4", desc: "Descripción de la imagen 4" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 5", desc: "Descripción de la imagen 5" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 6", desc: "Descripción de la imagen 6" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 7", desc: "Descripción de la imagen 7" },
  { src: "/img/flores-amarillas.jpg", alt: "Imagen 8", desc: "Descripción de la imagen 8" }
];

export default function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {IMAGENES.map((img, i) => (
          <article key={i} className={styles.item} onClick={() => setSelectedImg(img)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={600}
              className={styles.img}
              quality={80}
            />
          </article>
        ))}
      </div>

      {/* Modal con animación */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>✖</button>
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                width={500}
                height={700}
                quality={90}
              />
              <p>{selectedImg.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}