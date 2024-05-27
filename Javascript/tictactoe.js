//game.jsx

const PLAYER_X = "X";
const PLAYER_O = "O";
const NO_WINNER = null;
const EMPTY_SQUARE = null;

export class Game {
  grid;
  currentPlayer;
  winner;

  constructor(grid, currentPlayer, winner) {
    this.grid = grid;
    this.currentPlayer = currentPlayer
    this.winner = winner;
  }
}

export class Grid {
  value;

  constructor(value) {
    this.value = value;
  }
}

export const makeNewGame = () => {
  return new Game(makeNewGrid(), PLAYER_X, NO_WINNER)
}

export function hasWinner(game) {
  return game.winner !== NO_WINNER;
}

export const markSquare = (game, i) => {
  if(hasWinner(game)) {
    return game;
  }

  if(squareIsNotEmpty(game.grid, i)) {
    return game;
  }

  const nextGrid = markSquareOnGrid(game.grid, i, game.currentPlayer);
  return new Game(nextGrid, nextPlayer(game), calculateWinner(nextGrid));
};

const makeNewGrid = () => {
  return new Grid(Array(9).fill(EMPTY_SQUARE));
};

const calculateWinner = (grid) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const winningCombination of winningCombinations) {
    const [a, b, c] = winningCombination;
    if (grid.value[a] && grid.value[a] === grid.value[b] && grid.value[a] === grid.value[c]) {
      return grid.value[a];
    }
  }
  return null;
};

const squareIsNotEmpty = (grid, i) => {
  return grid.value[i] !== EMPTY_SQUARE;
};

const markSquareOnGrid = (grid, i, player) => {
  const nextGridValue = grid.value.slice();
  nextGridValue[i] = player;
  return new Grid(nextGridValue);
}

const nextPlayer = (game) => {
  return game.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
};


// Header.jsx

import React from "react";

const Header = ({ value }) => {
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default Header;



// Tictactoe.jsx


import {useEffect, useState} from "react";
import Board from "./Board";
import Header from "./Header";
import ResetButton from "./ResetBtn";
import {hasWinner, makeNewGame, markSquare } from "./game";

const Tictactoe = () => {
  const [headerValue, setHeaderValue] = useState("");
  const [game, setGame] = useState(makeNewGame());

  useEffect(() => {
    updateHeader();
  }, [game, headerValue]);

  const handleClick = (i) => {
    setGame(markSquare(game, i));
  }

  const resetGame = () => {
    setGame(makeNewGame())
  };

  const updateHeader = () => {
    if (hasWinner(game)) {
      setHeaderValue(`Winner: Player ${game.winner}`);
    } else {
      setHeaderValue(`Player ${game.currentPlayer}`);
    }
  }

  return (
    <div>
      <Header value={headerValue} />
      <Board squares={game.grid.value} handleClick={handleClick} />
      <ResetButton resetGame={resetGame} />
    </div>
  );
};

export default Tictactoe;
