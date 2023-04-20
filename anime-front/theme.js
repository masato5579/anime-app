import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Zen Maru Gothic, sans-serif',
    heading: 'Zen Maru Gothic, sans-serif',
    mono: 'Zen Maru Gothic, sans-serif',
  },
  fontSizes: {
    sm: 'clamp(12px, 2.67vw, 16px)',
    md: 'clamp(14px, 3.2vw, 20px)',
    lg: 'clamp(16px, 3.2vw, 24px)',
    xl: 'clamp(18px, 4.27vw, 26px)',
    '2xl': 'clamp(20px, 4.8vw, 32px)',
    '3xl': 'clamp(22px, 4.8vw, 52px)',
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
    yellow: {
      500: '#FFF500',
    },
  },
  styles: {
    global: {
      body: {
        background: '#F8F8F8',
        color: '#111111',
      },
      html: {
        height: '100%',
      },
    },
  },
})

export default theme
