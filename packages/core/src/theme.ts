// import { lighten, darken } from 'polished';

// export const fonts = {
//   body:
//     'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//   heading: 'Georgia, serif',
//   monospace: 'Menlo, monospace',
// };

// export const fontSizes = [
//   '0.625rem',
//   '0.75rem',
//   '1rem',
//   '1.125rem',
//   '1.25rem',
//   '1.5rem',
//   '1.75rem',
//   '2rem',
//   '2.5rem',
//   '3rem',
// ];

// export const fontWeights = {
//   regular: 400,
//   medium: 500,
//   bold: 700,
// };

// export const lineHeights = {
//   solid: 1,
//   title: 1.25,
//   copy: 1.5,
// };

// export const letterSpacings = {
//   default: 'normal',
//   tracked: '0.04em',
// };

// export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
// export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];

// export const breakpoints = ['40em', '56em', '64em'];

// export default {
//   light: {
//     space,
//     sizes,
//     fonts,
//     fontSizes,
//     fontWeights,
//     lineHeights,
//     letterSpacings,
//     breakpoints,
//     colors: {
//       brand: {
//         primary: '#012E86',
//         secondary: '#0064D9',
//         accent: '#DB7C00',
//         muted: '#C6DAF7',
//       },
//       ui: {
//         primary: '#262626',
//         secondary: '#757575',
//         tertiary: '#F1F1F1',
//         quaternary: '#FFFFFF',
//         disabled: '#DEDEDE',
//         error: '#D0421B',
//         success: '#138000',
//       },
//       bg: {
//         primary: '#FFFFFF',
//         secondary: '#F1F1F1',
//       },
//       text: {
//         primary: '#262626',
//         secondary: '#757575',
//         disabled: '#9C9C9C',
//         inverse: '#FFFFFF',
//         error: '#D0421B',
//         success: '#138000',
//       },
//       highlights: {
//         primaryHighlight: darken(0.1, '#012E86'),
//         primaryExtraHighlight: darken(0.2, '#012E86'),
//         bgHighlight: darken(0.1, '#FFFFFF'),
//       },
//     },
//   },
//   dark: {
//     space,
//     sizes,
//     fonts,
//     fontSizes,
//     fontWeights,
//     lineHeights,
//     letterSpacings,
//     breakpoints,
//     colors: {
//       brand: {
//         primary: '#298DFF',
//         secondary: '#7CAEE8',
//         accent: '#FDB447',
//         muted: '#B7CBEA',
//       },
//       ui: {
//         primary: '#FFFFFF',
//         secondary: '#A1A1A1',
//         tertiary: '#3C3C3C',
//         quaternary: '#262626',
//         disabled: '#242424',
//         error: '#FF4D4D',
//         success: '#1CBD00',
//       },
//       bg: {
//         primary: '#111111',
//         secondary: '#262626',
//       },
//       text: {
//         primary: '#FFFFFF',
//         secondary: '#A1A1A1',
//         disabled: '#525252',
//         inverse: '#262626',
//         error: '#FF4D4D',
//         success: '#1CBD00',
//       },
//       highlights: {
//         primaryHighlight: lighten(0.1, '#298DFF'),
//         primaryExtraHighlight: lighten(0.2, '#298DFF'),
//         bgHighlight: lighten(0.1, '#111111'),
//       },
//     },
//   },
// };

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [
    0,
    '.25rem',
    '.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.625rem',
    '0.75rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3rem',
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
