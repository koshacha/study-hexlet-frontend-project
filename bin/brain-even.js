#!/usr/bin/env node

import Even from "../src/Even.js";
import {greeting} from '../src/cli.js';

const name = greeting();
const game = new Even({name});
game.startGame();