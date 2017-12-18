/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Children, cloneElement } from 'react';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import colors from '../colors';

type Props = {
  /**
   * `img` (with an `alt attribute`), [Icon](../icon) (with a `title`), or a
   * string (with a `title`)
   */
  children: React$Node,
  /** Background color */
  color?:
    | 'blue'
    | 'dusk'
    | 'gray'
    | 'green'
    | 'indigo'
    | 'lime'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'red'
    | 'sky'
    | 'slate'
    | 'teal'
    | 'theme'
    | 'yellow',
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Accessible title when `children` is a string */
  title?: string
};

const textColor = {
  blue: 'white',
  dusk: 'white',
  gray: 'black',
  green: 'black',
  indigo: 'white',
  lime: 'black',
  magenta: 'white',
  orange: 'white',
  purple: 'white',
  red: 'white',
  sky: 'black',
  slate: 'white',
  teal: 'black',
  theme: 'white',
  yellow: 'black'
};

const iconSize = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

export const componentTheme = (baseTheme: Object) => ({
  Avatar_fontSize_small: baseTheme.fontSize_mouse,
  Avatar_fontSize_medium: baseTheme.fontSize_ui,
  Avatar_fontSize_large: baseTheme.fontSize_h4,
  Avatar_fontSize_jumbo: baseTheme.fontSize_h4,
  Avatar_fontWeight: baseTheme.fontWeight_bold,
  Avatar_size_small: baseTheme.size_small,
  Avatar_size_medium: baseTheme.size_medium,
  Avatar_size_large: baseTheme.size_large,
  Avatar_size_jumbo: baseTheme.size_jumbo,

  ...baseTheme
});

const Root = createStyledComponent(
  'span',
  props => {
    const theme = componentTheme(props.theme);

    const color = theme[`color_${textColor[props.color]}`];
    const fontSize = !props.icon
      ? theme[`Avatar_fontSize_${props.size}`]
      : '1em';
    const size = getNormalizedValue(
      theme[`Avatar_size_${props.size}`],
      fontSize
    );

    return {
      alignItems: 'center',
      backgroundColor:
        props.color === 'theme'
          ? theme.color_theme_60
          : colors[`${props.color}_60`],
      color,
      borderRadius: `${parseFloat(size) / 2}em`,
      display: 'inline-flex',
      fontSize,
      fontWeight: theme.Avatar_fontWeight,
      height: size,
      lineHeight: size,
      justifyContent: 'center',
      verticalAlign: 'middle',
      width: size,

      '& > abbr': {
        textDecoration: 'none'
      },

      '& > img': {
        display: 'block',
        width: '100%'
      },

      '& > [role="img"]': {
        fill: color
      }
    };
  },
  {
    displayName: 'Avatar',
    filterProps: ['icon']
  }
);

/**
 * Avatar provides a graphic representation of an identity. It can display an
 * image, a text character, or an [Icon](../icon).
 */
export default function Avatar({
  children,
  color = 'theme',
  size = 'large',
  title,
  ...restProps
}: Props) {
  let icon, text;

  Children.map(children, child => {
    if (typeof child === 'string' && title) {
      text = <abbr title={title}>{child}</abbr>;
    } else if (
      child.type &&
      child.type.name &&
      child.type.name.indexOf('Icon') != -1
    ) {
      icon = cloneElement(child, { size: iconSize[size] });
    }
  });

  const rootProps = {
    color,
    icon,
    size,
    ...restProps
  };

  return <Root {...rootProps}>{text || icon || children}</Root>;
}
