#!/usr/bin/env node
/* eslint-disable import/extensions */

import Prime from '../src/Prime.js';
import { greeting } from '../src/cli.js';

const name = greeting();
const game = new Prime({ name });
game.startGame();
