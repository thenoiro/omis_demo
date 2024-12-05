import { createTheme, hexToRgb, rgbToHex } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/urbanist';

import * as colors from './colors';

const palette = {
  info: {
    main: colors.info_main,
    light: colors.info_light,
    dark: colors.info_dark,
  },
  text: {
    primary: colors.text_primary,
    secondary: colors.text_secondary,
    white: colors.text_white,
    disabled: colors.text_disabled,
    link: colors.text_link,
    info: colors.text_info,
    success: colors.text_success,
    warning: colors.text_warning,
    error: colors.text_error,
  },
  surface: {
    background: colors.surface_background,
    container: colors.surface_container,
    disabled: colors.surface_disabled,
    segmented_tabs: colors.surface_segmented_tabs,
  },
  primary: {
    main: colors.primary_main,
    light: colors.primary_light,
    dark: colors.primary_dark,
    contrastText: colors.white,
  },
  primary_surface: {
    default: colors.primary_surface_default,
    hover: colors.primary_surface_hover,
    focused: colors.primary_surface_focused,
    active: colors.primary_surface_active,
    disable: colors.primary_surface_disable,
  },
  primary_border: {
    main: colors.primary_border_default,
    light: colors.primary_border_focused,
    dark: colors.primary_border_hover,
    contrastText: colors.primary_border_active,

    default: colors.primary_border_default,
    hover: colors.primary_border_hover,
    focused: colors.primary_border_focused,
    active: colors.primary_border_active,
    disable: colors.primary_border_disable,
  },
  primary_text: {
    main: colors.primary_text_default,
    light: colors.primary_text_focused,
    dark: colors.primary_text_hover,
    contrastText: colors.primary_text_active,

    default: colors.primary_text_default,
    hover: colors.primary_text_hover,
    focused: colors.primary_text_focused,
    active: colors.primary_text_active,
    disabled: colors.primary_text_disabled,
  },
  primary_icon: {
    main: colors.primary_icon_default,
    dark: colors.primary_icon_hover,
    light: colors.primary_icon_focused,
    contrastText: colors.primary_icon_active,

    default: colors.primary_icon_default,
    hover: colors.primary_icon_hover,
    focused: colors.primary_icon_focused,
    active: colors.primary_icon_active,
    disabled: colors.primary_icon_disabled,
  },
  secondary: {
    main: colors.secondary_surface_default,
    dark: colors.secondary_surface_hover,
    light: colors.secondary_surface_focused,
    contrastText: colors.secondary_surface_active,
  },
  secondary_surface: {
    default: colors.secondary_surface_default,
    hover: colors.secondary_surface_hover,
    focused: colors.secondary_surface_focused,
    active: colors.secondary_surface_active,
    disable: colors.secondary_surface_disable,
  },
  secondary_border: {
    main: colors.secondary_border_default,
    light: colors.secondary_border_focused,
    dark: colors.secondary_border_hover,
    contrastText: colors.secondary_border_active,

    default: colors.secondary_border_default,
    hover: colors.secondary_border_hover,
    focused: colors.secondary_border_focused,
    active: colors.secondary_border_active,
    disable: colors.secondary_border_disable,
  },
  secondary_text: {
    main: colors.secondary_text_default,
    light: colors.secondary_text_focused,
    dark: colors.secondary_text_hover,
    contrastText: colors.secondary_text_active,

    default: colors.secondary_text_default,
    hover: colors.secondary_text_hover,
    focused: colors.secondary_text_focused,
    active: colors.secondary_text_active,
    disabled: colors.secondary_text_disabled,
  },
  secondary_icon: {
    main: colors.secondary_icon_default,
    dark: colors.secondary_icon_hover,
    light: colors.secondary_icon_focused,
    contrastText: colors.secondary_icon_active,

    default: colors.secondary_icon_default,
    hover: colors.secondary_icon_hover,
    focused: colors.secondary_icon_focused,
    active: colors.secondary_icon_active,
    disabled: colors.secondary_icon_disabled,
  },
  info_error: {
    default: colors.info_error_default,
    hover: colors.info_error_hover,
    focused: colors.info_error_focused,
    active: colors.info_error_active,
  },
  info_border_error: {
    default: colors.info_border_error_default,
    hover: colors.info_border_error_hover,
    focused: colors.info_border_error_focused,
    active: colors.info_border_error_active,
  },
  info_icon_error: {
    default: colors.info_icon_error_default,
    hover: colors.info_icon_error_hover,
    focused: colors.info_icon_error_focused,
    active: colors.info_icon_error_active,
  },
  info_text_error: {
    default: colors.info_text_error_default,
    hover: colors.info_text_error_hover,
    focused: colors.info_text_error_focused,
    active: colors.info_text_error_active,
  },
  info_success: {
    default: colors.info_success_default,
    hover: colors.info_success_hover,
    focused: colors.info_success_focused,
    active: colors.info_success_active,
  },
  info_border_success: {
    default: colors.info_border_success_default,
    hover: colors.info_border_success_hover,
    focused: colors.info_border_success_focused,
    active: colors.info_border_success_active,
  },
  info_icon_success: {
    default: colors.info_icon_success_default,
    hover: colors.info_icon_success_hover,
    focused: colors.info_icon_success_focused,
    active: colors.info_icon_success_active,
  },
  info_text_success: {
    default: colors.info_text_success_default,
    hover: colors.info_text_success_hover,
    focused: colors.info_text_success_focused,
    active: colors.info_text_success_active,
  },
  info_warning: {
    default: colors.info_warning_default,
    hover: colors.info_warning_hover,
    focused: colors.info_warning_focused,
    active: colors.info_warning_active,
  },
  info_border_warning: {
    default: colors.info_border_warning_default,
    hover: colors.info_border_warning_hover,
    focused: colors.info_border_warning_focused,
    active: colors.info_border_warning_active,
  },
  info_icon_warning: {
    default: colors.info_icon_warning_default,
    hover: colors.info_icon_warning_hover,
    focused: colors.info_icon_warning_focused,
    active: colors.info_icon_warning_active,
  },
  info_text_warning: {
    default: colors.info_text_warning_default,
    hover: colors.info_text_warning_hover,
    focused: colors.info_text_warning_focused,
    active: colors.info_text_warning_active,
  },
  info_info: {
    default: colors.info_info_default,
    hover: colors.info_info_hover,
    focused: colors.info_info_focused,
    active: colors.info_info_active,
  },
  info_border_info: {
    default: colors.info_border_info_default,
    hover: colors.info_border_info_hover,
    focused: colors.info_border_info_focused,
    active: colors.info_border_info_active,
  },
  info_icon_info: {
    default: colors.info_icon_info_default,
    hover: colors.info_icon_info_hover,
    focused: colors.info_icon_info_focused,
    active: colors.info_icon_info_active,
  },
  info_text_info: {
    default: colors.info_text_info_default,
    hover: colors.info_text_info_hover,
    focused: colors.info_text_info_focused,
    active: colors.info_text_info_active,
  },
};

const fontFamily = [
  'Urbanist',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export const getColorObject = (color) => {
  const result = {
    hex: undefined,
    rgb: undefined,
    origin: color,
  };
  try {
    result.hex = rgbToHex(color);
    result.rgb = hexToRgb(result.hex);
  } catch (ex) {
    // skip
  }
  return result;
};

export const getPalette = (theme) => {
  return theme.palette;
};

const theme = createTheme({
  palette,
  shadow: {
    small: `0px 1px 3px 0px ${colors.shadow}3D`,
  },
  typography: {
    fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: ${fontFamily};
        }
      `,
    },
  },
});
theme.sx = theme.unstable_sx;
console.log('theme', theme);

export default theme;
