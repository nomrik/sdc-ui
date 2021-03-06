import React from 'react';
import {storiesOf} from '@storybook/react';
import Welcome from './Welcome.stories.js';
import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Buttons from './Buttons.stories.js';
import Checkboxes from './Checkbox.stories.js';
import Radios from './Radio.stories.js';
import RadioGroups from './RadioGroup.stories.js';
import Icons from './SVGIcon.stories.js';
import Tiles from './Tiles.stories.js';
import Tabs from './Tabs.stories.js';

storiesOf('Welcome', module)
	.add('', () => <Welcome />);

storiesOf('Colors', module)
	.add('', () => <Colors />);

storiesOf('Typography', module)
	.add('', () => <Typography />);

storiesOf('Buttons', module)
	.add('', () => <Buttons />);

storiesOf('Checkboxes', module)
	.add('', () => <Checkboxes />);

storiesOf('Radios', module)
	.add('', () => <Radios />);

storiesOf('RadioGroups', module)
	.add('', () => <RadioGroups />);

storiesOf('Icons', module)
	.add('', () => <Icons />);

storiesOf('Tiles', module)
	.add('', () => <Tiles />);

storiesOf('Tabs', module)
	.add('', () => <Tabs />);
