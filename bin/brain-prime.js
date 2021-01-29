#!/usr/bin/env node
/* eslint-disable import/extensions */

import game from '../src/game-bootstrap.js';
import { primeGame } from '../src/game-rules.js';
import { greeting } from '../src/cli.js';

const name = greeting();
game(name, primeGame());
