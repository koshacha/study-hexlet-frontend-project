#!/usr/bin/env node
/* eslint-disable import/extensions */

import GCD from '../src/GCD.js';
import { greeting } from '../src/cli.js';

const name = greeting();
const game = new GCD({ name });
game.startGame();
