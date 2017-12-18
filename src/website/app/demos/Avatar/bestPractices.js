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
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import Avatar from '../../../../Avatar';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from './components/DemoLayout';

const Name = createStyledComponent('div', ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',

  '& > :first-child': {
    marginRight: theme.space_inline_sm
  }
}));

export default [
  {
    type: 'do',
    description:
      'Provide an `alt` attribute when using Avatar to display a standalone image.',
    example: (
      <Avatar>
        <img src="/images/215x210_avatar.png" alt="Allison Smith" />
      </Avatar>
    )
  },
  {
    type: 'do',
    description:
      'Provide a `title` attribute when displaying standalone text or an icon.',
    example: (
      <DemoLayout>
        <Avatar title="Allison">A</Avatar>
        <Avatar>
          <IconCloud title="cloud" />
        </Avatar>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    description: `Don't provide duplicate \`alt\`/\`title\` information when an
Avatar's associated label is sufficient.`,
    example: (
      <Name>
        <Avatar>A</Avatar> Allison
      </Name>
    )
  }
];
