import { useMemo } from 'react';
import { Button as MuiButton, buttonClasses as classes, styled } from '@mui/material';

const baseStyles = {
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 16,
  letterSpacing: '0.01em',
  lineHeight: '28px',
};

const Root = styled(MuiButton)(({ theme }) => {
  const styles = {
    [`&.${classes.root}`]: {
      ...baseStyles,
      px: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadow.small,

      [`&.${classes.sizeLarge}`]: {
        py: theme.spacing(0.75),
      },
      [`&.${classes.sizeMedium}`]: {
        py: theme.spacing(0.5),
        fontSize: 14,
      },
      [`&.${classes.sizeSmall}`]: {
        py: theme.spacing(0.25),
        fontSize: 12,
      },

      [`&.${classes.disabled}`]: {
        backgroundColor: theme.palette.primary_surface.disable,
        color: theme.palette.primary_text.disable,
        borderColor: theme.palette.primary_surface.disable,
        boxShadow: 'none',
      },

      // Contained
      [`&.${classes.contained}`]: {
        backgroundColor: theme.palette.primary_surface.default,
        color: theme.palette.primary_text.default,

        [`&:not(.${classes.disabled})`]: {
          '&:hover': {
            backgroundColor: theme.palette.primary_surface.hover,
          },
          '&:focus-within, &:focus, &:focus-visible': {
            backgroundColor: theme.palette.primary_surface.focused,
            outline: `2px solid ${theme.palette.primary_border.focused}`,
            color: theme.palette.primary_text.focused,
          },
          '&:active': {
            backgroundColor: theme.palette.primary_surface.active,
            outline: `1px solid ${theme.palette.primary_border.active}`,
            color: theme.palette.primary_text.active,
          },
        },
      },

      // Outline
      [`&.${classes.outlined}`]: {
        px: theme.spacing(1.5 - 0.125),

        [`&.${classes.sizeLarge}`]: {
          py: theme.spacing(0.75 - 0.125),
        },
        [`&.${classes.sizeMedium}`]: {
          py: theme.spacing(0.5 - 0.125),
        },
        [`&.${classes.sizeSmall}`]: {
          py: theme.spacing(0.25 - 0.125),
        },

        [`&:not(.${classes.disabled})`]: {
          [`&.${classes.colorSecondary}`]: {
            backgroundColor: theme.palette.secondary_surface.default,
            borderColor: theme.palette.secondary_border.default,
            color: theme.palette.secondary_text.default,

            '&:hover': {
              backgroundColor: theme.palette.secondary_surface.hover,
              borderColor: theme.palette.secondary_border.hover,
              color: theme.palette.secondary_text.hover,
            },
          },
          [`&.${classes.colorError}`]: {
            backgroundColor: theme.palette.info_error.default,
            borderColor: theme.palette.info_border_error.default,
            color: theme.palette.info_text_error.default,

            '&:hover': {
              backgroundColor: theme.palette.info_error.hover,
              borderColor: theme.palette.info_border_error.hover,
              color: theme.palette.info_text_error.hover,
            },
          },
          [`&.${classes.colorWarning}`]: {
            backgroundColor: theme.palette.info_warning.default,
            borderColor: theme.palette.info_border_warning.default,
            color: theme.palette.info_text_warning.default,

            '&:hover': {
              backgroundColor: theme.palette.info_warning.hover,
              borderColor: theme.palette.info_border_warning.hover,
              color: theme.palette.info_text_warning.hover,
            },
          },
          [`&.${classes.colorInfo}`]: {
            backgroundColor: theme.palette.info_info.default,
            borderColor: theme.palette.info_border_info.default,
            color: theme.palette.info_text_info.default,

            '&:hover': {
              backgroundColor: theme.palette.info_info.hover,
              borderColor: theme.palette.info_border_info.hover,
              color: theme.palette.info_text_info.hover,
            },
          },
          [`&.${classes.colorSuccess}`]: {
            backgroundColor: theme.palette.info_success.default,
            borderColor: theme.palette.info_border_success.default,
            color: theme.palette.info_text_success.default,

            '&:hover': {
              backgroundColor: theme.palette.info_success.hover,
              borderColor: theme.palette.info_border_success.hover,
              color: theme.palette.info_text_success.hover,
            },
          },
        },
      },
    },
  };
  return theme.sx(styles);
});

const Button = (props) => {
  const {
    children,
    size = 'medium',
    color = 'primary',
    variant: inVariant,
    ...rest
  } = props;

  const variant = useMemo(() => {
    if (inVariant) {
      return inVariant
    }
    if (color === 'primary') {
      return 'contained';
    }
    return 'outlined';
  }, [inVariant, color])

  return (
    <Root
      {...rest}
      size={size}
      color={color}
      variant={variant}
    >
      {children}
    </Root>
  );
};

export default Button;
