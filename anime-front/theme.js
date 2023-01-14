import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Zen Maru Gothic, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    sm: 'clamp(10px, 2.67vw, 16px)',
    md: 'clamp(12px, 3.2vw, 20px)',
    lg: 'clamp(14px, 3.2vw, 24px)',
    xl: 'clamp(16px, 4.27vw, 26px)',
    '2xl': 'clamp(18px, 4.8vw, 32px)',
    '3xl': 'clamp(20px, 4.8vw, 52px)',
  },
  colors: {
    brand: {
      500: '#40BDBD',
    },
    bg: {
      500: 'F8F8F8',
    },
    base: {
      500: '#111111',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#F8F8F8',
        color: '#111111',
      },
      html: {
        height: '100%',
      },
    },
  },
})

export default theme
