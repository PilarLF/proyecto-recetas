#!/bin/bash
# Convertir todas las imágenes JPG a WebP
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done

# Crear versiones redimensionadas
for file in *.jpg; do
  convert "$file" -resize 480x ./mobile/"${file}"
  convert "$file" -resize 768x ./tablet/"${file}"
done