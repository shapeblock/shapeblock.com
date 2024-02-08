module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        "DEFAULT": "1rem",
        "sm": "2rem",
        "lg": "4rem",
        "xl": "6rem",
        "2xl": "8rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        'shapeblock': {
          'primary': '#3c2357',
          'primary-focus': '#342149',
          'primary-content': '#ffffff',

          'secondary': '#f15132',
          'secondary-focus': '#e2644b',
          'secondary-content': '#ffffff',

          'accent': '#eeaf3a',
          'accent-focus': '#e09915',
          'accent-content': '#ffffff',

          'neutral': '#261230',
          'neutral-focus': '#200f29',
          'neutral-content': '#ffffff',

          'base-100': '#faf7f5',
          'base-200': '#efeae6',
          'base-300': '#e7e2df',
          'base-content': '#261230',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        light: {
          ...require("daisyui/src/theming/themes").light,
          "primary": "#1b77ff",
          "primary-content": "#ffffff",
          "secondary": "#494949",
          "neutral": "#03131a",
          "info": "#00e1ff",
          "success": "#90ca27",
          "warning": "#ff8800",
          "error": "#ff7f7f",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
        },
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          "primary": "#1b77ff",
          "primary-content": "#ffffff",
          "secondary": "#494949",
          "neutral": "#03131a",
          "info": "#00e1ff",
          "success": "#90ca27",
          "warning": "#ff8800",
          "error": "#ff7f7f",
          "base-100": "#14181c",
          "base-200": "#1e2328",
          "base-300": "#28323c",
          "base-content": "#dcebfa",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
