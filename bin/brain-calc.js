#!/usr/bin/env node
/* eslint-disable import/extensions */

import Calc from '../src/Calc.js';
import { greeting } from '../src/cli.js';

const name = greeting();
const game = new Calc({ name });
game.startGame();
