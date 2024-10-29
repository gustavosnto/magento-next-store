import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['magento.gaudit.com.br'], // Adiciona o domínio permitido para carregar imagens externas
  },
};

export default nextConfig;