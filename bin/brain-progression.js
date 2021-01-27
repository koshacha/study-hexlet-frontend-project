#!/usr/bin/env node
/* eslint-disable import/extensions */

import Progression from '../src/Progression.js';
import { greeting } from '../src/cli.js';

const name = greeting();
const game = new Progression({ name });
game.startGame();
