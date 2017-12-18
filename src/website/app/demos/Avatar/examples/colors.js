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
import Avatar from '../../../../../Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'colors',
  title: 'Colors',
  description: `Avatar is available in any of the
[palette's base colors](/color/#guidelines-ramps).`,
  scope: { Avatar, DemoLayout },
  source: `
    <DemoLayout>
      <Avatar color="red"     title="Red"    >R</Avatar>
      <Avatar color="magenta" title="Magenta">M</Avatar>
      <Avatar color="purple"  title="Purple" >P</Avatar>
      <Avatar color="indigo"  title="Indigo" >I</Avatar>
      <Avatar color="blue"    title="Blue"   >B</Avatar>
      <Avatar color="sky"     title="Sky"    >S</Avatar>
      <Avatar color="teal"    title="Teal"   >T</Avatar>
      <Avatar color="green"   title="Green"  >G</Avatar>
      <Avatar color="lime"    title="Lime"   >L</Avatar>
      <Avatar color="yellow"  title="Yellow" >Y</Avatar>
      <Avatar color="orange"  title="Orange" >O</Avatar>
      <Avatar color="gray"    title="Gray"   >G</Avatar>
      <Avatar color="slate"   title="Slate"  >S</Avatar>
      <Avatar color="dusk"    title="Dusk"   >D</Avatar>
      <Avatar color="theme"   title="Theme"  >T</Avatar>
    </DemoLayout>`
};
