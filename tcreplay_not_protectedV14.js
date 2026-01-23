const	chess = true; // speltype voorlopig even zo

const Piece =
{
	whitePawn    : 0,
	whiteKnight  : 1,
	whiteBishop  : 2,
	whiteRook    : 3,
  whiteQueen   : 4,
	whiteKing    : 5,
	blackPawn    : 6,
	blackKnight  : 7,
	blackBishop  : 8,
	blackRook    : 9,
	blackQueen   : 10,
	blackKing    : 11,
	empty        : 12,
};

const Side =
{
	white        : 0,
	black        : 1,
};

const	a1 = 0;
const b1 = 1;
const c1 = 2;
const d1 = 3;
const e1 = 4;
const f1 = 5;
const g1 = 6;
const h1 = 7;
const	a2 = 8;
const b2 = 9;
const c2 = 10;
const d2 = 11;
const e2 = 12;
const f2 = 13;
const g2 = 14;
const h2 = 15;
const	a3 = 16;
const b3 = 17;
const c3 = 18;
const d3 = 19;
const e3 = 20;
const f3 = 21;
const g3 = 22;
const h3 = 23;
const	a4 = 24;
const b4 = 25;
const c4 = 26;
const d4 = 27;
const e4 = 28;
const f4 = 29;
const g4 = 30;
const h4 = 31;
const	a5 = 32;
const b5 = 33;
const c5 = 34;
const d5 = 35;
const e5 = 36;
const f5 = 37;
const g5 = 38;
const h5 = 39;
const	a6 = 40;
const b6 = 41;
const c6 = 42;
const d6 = 43;
const e6 = 44;
const f6 = 45;
const g6 = 46;
const h6 = 47;
const	a7 = 48;
const b7 = 49;
const c7 = 50;
const d7 = 51;
const e7 = 52;
const f7 = 53;
const g7 = 54;
const h7 = 55;
const	a8 = 56;
const b8 = 57;
const c8 = 58;
const d8 = 59;
const e8 = 60;
const f8 = 61;
const g8 = 62;
const h8 = 63;
const sq_NB = 64;

const file_1 = 0;
const file_2 = 1;
const file_3 = 2;
const file_4 = 3;
const file_5 = 4;
const file_6 = 5;
const file_7 = 6;
const file_8 = 7;
const file_NB = 8;

const	rank_1 = 0;
const rank_2 = 1;
const rank_3 = 2;
const rank_4 = 3;
const rank_5 = 4;
const rank_6 = 5;
const rank_7 = 6;
const rank_8 = 7;
const rank_NB = 8;

const Board_Size        = 8;
const Square_Size       = 64;
const Begin_Pieces      = 16;

const startBoard =
[
	Piece.whiteRook,    // a1
  Piece.whiteKnight,  // b1
  Piece.whiteBishop,  // c1
  Piece.whiteQueen,   // d1
  Piece.whiteKing,    // e1
  Piece.whiteBishop,  // f1
  Piece.whiteKnight,  // g1
  Piece.whiteRook,    // h1
	Piece.whitePawn,    // a2
  Piece.whitePawn,    // b2
  Piece.whitePawn,    // c2
  Piece.whitePawn,    // d2
  Piece.whitePawn,    // e2
  Piece.whitePawn,    // f2
  Piece.whitePawn,    // g2
  Piece.whitePawn,    // h2
	Piece.empty,        // a3
  Piece.empty,        // b3
  Piece.empty,        // c3
  Piece.empty,        // d3
  Piece.empty,        // e3
  Piece.empty,        // f3
  Piece.empty,        // g3
  Piece.empty,        // h3
	Piece.empty,        // a4
  Piece.empty,        // b4
  Piece.empty,        // c4
  Piece.empty,        // d4
  Piece.empty,        // e4
  Piece.empty,        // f4
  Piece.empty,        // g4
  Piece.empty,        // h4
	Piece.empty,        // a5
  Piece.empty,        // b5
  Piece.empty,        // c5
  Piece.empty,        // d5
  Piece.empty,        // e5
  Piece.empty,        // f5
  Piece.empty,        // g5
  Piece.empty,        // h5
	Piece.empty,        // a6
  Piece.empty,        // b6
  Piece.empty,        // c6
  Piece.empty,        // d6
  Piece.empty,        // e6
  Piece.empty,        // f6
  Piece.empty,        // g6
  Piece.empty,        // h6
	Piece.blackPawn,    // a7
  Piece.blackPawn,    // b7
  Piece.blackPawn,    // c7
  Piece.blackPawn,    // d7
  Piece.blackPawn,    // e7
  Piece.blackPawn,    // f7
  Piece.blackPawn,    // g7
  Piece.blackPawn,    // h7
	Piece.blackRook,    // a8
  Piece.blackKnight,  // b8
  Piece.blackBishop,  // c8
  Piece.blackQueen,   // d8
  Piece.blackKing,    // e8
  Piece.blackBishop,  // f8
  Piece.blackKnight,  // g8
  Piece.blackRook,    // h8
];

const emptyBoard =
[
	Piece.empty,        // a1
  Piece.empty,        // b1
  Piece.empty,        // c1
  Piece.empty,        // d1
  Piece.empty,        // e1
  Piece.empty,        // f1
  Piece.empty,        // g1
  Piece.empty,        // h1
	Piece.empty,        // a2
  Piece.empty,        // b2
  Piece.empty,        // c2
  Piece.empty,        // d2
  Piece.empty,        // e2
  Piece.empty,        // f2
  Piece.empty,        // g2
  Piece.empty,        // h2
	Piece.empty,        // a3
  Piece.empty,        // b3
  Piece.empty,        // c3
  Piece.empty,        // d3
  Piece.empty,        // e3
  Piece.empty,        // f3
  Piece.empty,        // g3
  Piece.empty,        // h3
	Piece.empty,        // a4
  Piece.empty,        // b4
  Piece.empty,        // c4
  Piece.empty,        // d4
  Piece.empty,        // e4
  Piece.empty,        // f4
  Piece.empty,        // g4
  Piece.empty,        // h4
	Piece.empty,        // a5
  Piece.empty,        // b5
  Piece.empty,        // c5
  Piece.empty,        // d5
  Piece.empty,        // e5
  Piece.empty,        // f5
  Piece.empty,        // g5
  Piece.empty,        // h5
	Piece.empty,        // a6
  Piece.empty,        // b6
  Piece.empty,        // c6
  Piece.empty,        // d6
  Piece.empty,        // e6
  Piece.empty,        // f6
  Piece.empty,        // g6
  Piece.empty,        // h6
	Piece.empty,        // a7
  Piece.empty,        // b7
  Piece.empty,        // c7
  Piece.empty,        // d7
  Piece.empty,        // e7
  Piece.empty,        // f7
  Piece.empty,        // g7
  Piece.empty,        // h7
	Piece.empty,        // a8
  Piece.empty,        // b8
  Piece.empty,        // c8
  Piece.empty,        // d8
  Piece.empty,        // e8
  Piece.empty,        // f8
  Piece.empty,        // g8
  Piece.empty,        // h8
];

const boardSquares =
[
	a1, b1, c1, d1, e1, f1, g1, h1,
	a2, b2, c2, d2, e2, f2, g2, h2,
	a3, b3, c3, d3, e3, f3, g3, h3,
	a4, b4, c4, d4, e4, f4, g4, h4,
	a5, b5, c5, d5, e5, f5, g5, h5,
	a6, b6, c6, d6, e6, f6, g6, h6,
	a7, b7, c7, d7, e7, f7, g7, h7,
	a8, b8, c8, d8, e8, f8, g8, h8,
];

const boardFiles =
[
	file_1,
  file_2,
  file_3,
  file_4,
  file_5,
  file_6,
  file_7,
  file_8,
];

const boardRanks =
[
	rank_1,
  rank_2,
  rank_3,
  rank_4,
  rank_5,
  rank_6,
  rank_7,
  rank_8,
];

function isBlack(piece)
{
	return piece == Piece.blackPawn ||
		piece == Piece.blackKnight ||
    piece == Piece.blackBishop ||
    piece == Piece.blackRook ||
    piece == Piece.blackQueen ||
    piece == Piece.blackKing;
}

function isWhite(piece)
{
	return piece == Piece.whitePawn ||
		piece == Piece.whiteKnight ||
    piece == Piece.whiteBishop ||
    piece == Piece.whiteRook ||
    piece == Piece.whiteQueen ||
    piece == Piece.whiteKing;
}

function isPawn(piece)
{
	return piece == Piece.whitePawn || piece == Piece.blackPawn;
}

function isKnight(piece)
{
	return piece == Piece.whiteKnight || piece == Piece.blackKnight;
}

function isBishop(piece)
{
	return piece == Piece.whiteBishop || piece == Piece.blackBishop;
}

function isRook(piece)
{
	return piece == Piece.whiteRook || piece == Piece.blackRook;
}

function isQueen(piece)
{
	return piece == Piece.whiteQueen || piece == Piece.blackQueen;
}

function isKing(piece)
{
	return piece == Piece.whiteKing || piece == Piece.blackKing;
}

function mirrorSquare(square)
{
	if (square == sq_NB)
	{
		return sq_NB;
	}
	else
	{
		return Square_Size - square - 1;
	}
}

const fileSquareTable =
[
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
	file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8,
];

function fileOf(square)
{
	return fileSquareTable[square];
}

const rankSquareTable =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	rank_2, rank_2, rank_2, rank_2, rank_2, rank_2, rank_2, rank_2,
	rank_3, rank_3, rank_3, rank_3, rank_3, rank_3, rank_3, rank_3,
	rank_4, rank_4, rank_4, rank_4, rank_4, rank_4, rank_4, rank_4,
	rank_5, rank_5, rank_5, rank_5, rank_5, rank_5, rank_5, rank_5,
	rank_6, rank_6, rank_6, rank_6, rank_6, rank_6, rank_6, rank_6,
	rank_7, rank_7, rank_7, rank_7, rank_7, rank_7, rank_7, rank_7,
	rank_8, rank_8, rank_8, rank_8, rank_8, rank_8, rank_8, rank_8,
];

function rankOf(square)
{
	return rankSquareTable[square];
}

function isBoardEqual(a, b)
{
	for (let i = 0; i < a.length; i++)
	{
		if (a[i] !== b[i])
		{
			return false;
		}
	}
	return true;
}

function copyBoard(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function numberOfPiece(board, piece)
{
	let counter = 0;
	for (const value of board)
	{
		if (value == piece)
		{
			counter++;
		}
	}
	return counter;
}

var stringToSquareMapInited = false;
const stringToSquareMap = new Map();
function initStringToSquareMap()
{
  stringToSquareMap.set("a1", a1);
  stringToSquareMap.set("a2", a2);
  stringToSquareMap.set("a3", a3);
  stringToSquareMap.set("a4", a4);
  stringToSquareMap.set("a5", a5);
  stringToSquareMap.set("a6", a6);
  stringToSquareMap.set("a7", a7);
  stringToSquareMap.set("a8", a8);
  stringToSquareMap.set("b1", b1);
  stringToSquareMap.set("b2", b2);
  stringToSquareMap.set("b3", b3);
  stringToSquareMap.set("b4", b4);
  stringToSquareMap.set("b5", b5);
  stringToSquareMap.set("b6", b6);
  stringToSquareMap.set("b7", b7);
  stringToSquareMap.set("b8", b8);
  stringToSquareMap.set("c1", c1);
  stringToSquareMap.set("c2", c2);
  stringToSquareMap.set("c3", c3);
  stringToSquareMap.set("c4", c4);
  stringToSquareMap.set("c5", c5);
  stringToSquareMap.set("c6", c6);
  stringToSquareMap.set("c7", c7);
  stringToSquareMap.set("c8", c8);
  stringToSquareMap.set("d1", d1);
  stringToSquareMap.set("d2", d2);
  stringToSquareMap.set("d3", d3);
  stringToSquareMap.set("d4", d4);
  stringToSquareMap.set("d5", d5);
  stringToSquareMap.set("d6", d6);
  stringToSquareMap.set("d7", d7);
  stringToSquareMap.set("d8", d8);
  stringToSquareMap.set("e1", e1);
  stringToSquareMap.set("e2", e2);
  stringToSquareMap.set("e3", e3);
  stringToSquareMap.set("e4", e4);
  stringToSquareMap.set("e5", e5);
  stringToSquareMap.set("e6", e6);
  stringToSquareMap.set("e7", e7);
  stringToSquareMap.set("e8", e8);
  stringToSquareMap.set("f1", f1);
  stringToSquareMap.set("f2", f2);
  stringToSquareMap.set("f3", f3);
  stringToSquareMap.set("f4", f4);
  stringToSquareMap.set("f5", f5);
  stringToSquareMap.set("f6", f6);
  stringToSquareMap.set("f7", f7);
  stringToSquareMap.set("f8", f8);
  stringToSquareMap.set("g1", g1);
  stringToSquareMap.set("g2", g2);
  stringToSquareMap.set("g3", g3);
  stringToSquareMap.set("g4", g4);
  stringToSquareMap.set("g5", g5);
  stringToSquareMap.set("g6", g6);
  stringToSquareMap.set("g7", g7);
  stringToSquareMap.set("g8", g8);
  stringToSquareMap.set("h1", h1);
  stringToSquareMap.set("h2", h2);
  stringToSquareMap.set("h3", h3);
  stringToSquareMap.set("h4", h4);
  stringToSquareMap.set("h5", h5);
  stringToSquareMap.set("h6", h6);
  stringToSquareMap.set("h7", h7);
  stringToSquareMap.set("h8", h8);
}

function alphaNumericStringToSquare(string)
{
  if (!stringToSquareMapInited)
  {
    initStringToSquareMap();
    stringToSquareMapInited = true;
  }
  if (stringToSquareMap.has(string))
  {
    return stringToSquareMap.get(string);
  }
  else
  {
		return sq_NB;
  }
}

function squareToAlphaNumericString(square)
{
  return alphaNumeric[square];
}

const whiteKingSideCastleKingTo  = g1;
const whiteKingSideCastleRookTo  = f1;
const whiteQueenSideCastleKingTo = c1;
const whiteQueenSideCastleRookTo = d1;
const blackKingSideCastleKingTo  = g8;
const blackKingSideCastleRookTo  = f8;
const blackQueenSideCastleKingTo = c8;
const blackQueenSideCastleRookTo = d8;

const alphaNumeric =
[
	"a1",	"b1",	"c1",	"d1",	"e1", "f1", "g1", "h1",
	"a2",	"b2",	"c2",	"d2",	"e2", "f2", "g2", "h2",
	"a3",	"b3",	"c3",	"d3",	"e3", "f3", "g3", "h3",
	"a4",	"b4",	"c4",	"d4",	"e4", "f4", "g4", "h4",
	"a5",	"b5",	"c5",	"d5",	"e5", "f5", "g5", "h5",
	"a6",	"b6",	"c6",	"d6",	"e6", "f6", "g6", "h6",
	"a7",	"b7",	"c7",	"d7",	"e7", "f7", "g7", "h7",
	"a8",	"b8",	"c8",	"d8",	"e8", "f8", "g8", "h8",
];

const rankChars =
[
	'1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

const fileChars =
[
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];

// mirrorPiece niet nodig
// isSquare niet nodig

const darkSquares =
[
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false,  true, false,  true, false, true,
];

function isDarkSquare(square)
{
	return darkSquares[square];
}

// isBlackPromotionSquare niet nodig
// isWhitePromotionSquare niet nodig
// defaultPromotionPiece niet nodig


// fileSquares niet nodig
// rankSquares niet nodig
// mirrorFile niet nodig
// mirrorRank niet nodig
// startsWithDarkSquare niet nodig

// horzMirrorSquare niet nodig
// vertMirrorSquare niet nodig
// horzMirrorFile niet nodig
// vertMirrorFile niet nodig
// horzMirrorRank niet nodig
// vertMirrorRank niet nodig

function charToRank(ch)
{
  if (ch == '1')
  {
    return rank_1;
  }
  else if (ch == '2')
  {
    return rank_2;
  }
  else if (ch == '3')
  {
    return rank_3;
  }
  else if (ch == '4')
  {
    return rank_4;
  }
  else if (ch == '5')
  {
    return rank_5;
  }
  else if (ch == '6')
  {
    return rank_6;
  }
  else if (ch == '7')
  {
    return rank_7;
  }
  else if (ch == '8')
  {
    return rank_8;
  }
	else
	{
		return rank_NB;
	}
}

function charToFile(ch)
{
  if (ch == 'a')
  {
    return file_1;
  }
  else if (ch == 'b')
  {
    return file_2;
  }
  else if (ch == 'c')
  {
    return file_3;
  }
  else if (ch == 'd')
  {
    return file_4;
  }
  else if (ch == 'e')
  {
    return file_5;
  }
  else if (ch == 'f')
  {
    return file_6;
  }
  else if (ch == 'g')
  {
    return file_7;
  }
  else if (ch == 'h')
  {
    return file_8;
  }
  else
	{
		return file_NB;
	}
}

function fileToString(file)
{
  return fileChars[file];
}

function rankToString(rank)
{
  return rankChars[rank];
}


class BoardState
{

constructor()
{
	this.chess960 = false;
	this.whiteCastleKingFrom = e1;
	this.blackCastleKingFrom = e8;
	this.whiteKingSideCastleRookFrom = h1;
	this.whiteQueenSideCastleRookFrom = a1;
	this.blackKingSideCastleRookFrom = h8;
	this.blackQueenSideCastleRookFrom = a8;
	this.whiteKingSideCastleAllowed = false;
	this.whiteQueenSideCastleAllowed = false;
	this.blackKingSideCastleAllowed = false;
	this.blackQueenSideCastleAllowed = false;
	this.enPassantTargetSquare = sq_NB;
}

copyFrom()
{
	let copyBoardState = new BoardState();
  return Object.assign(copyBoardState, this);
}

}


class GamePosition
{

constructor()
{
  this.board_ = Array(Square_Size).fill(Piece.empty);
 	this.turn_ = Side.white;
 	this.state_ = new BoardState();
 	this.setEmptyPosition();
}

copyFrom()
{
	let copyPosition = new GamePosition();
	copyBoard(copyPosition.board_, this.board_);
	copyPosition.turn_ = this.turn_;
  copyPosition.state_ = this.state_.copyFrom();
  copyPosition.whiteKing_ = this.whiteKing_;
	copyPosition.blackKing_ = this.blackKing_;
	return copyPosition;
}

isEqual(ref)
{
	return this.turn_ == ref.turn_ &&
		isBoardEqual(this.board_, ref.board_);
}

isNotEqual(ref)
{
	return !this.isEqual(ref);
}

setStartPosition()
{
 	copyBoard(this.board_, startBoard);
 	this.turn_ = Side.white;
  this.state_.chess960 = false;
	this.state_.whiteCastleKingFrom = e1;
	this.state_.blackCastleKingFrom = e8;
	this.state_.whiteKingSideCastleRookFrom = h1;
	this.state_.whiteQueenSideCastleRookFrom = a1;
	this.state_.blackKingSideCastleRookFrom = h8;
	this.state_.blackQueenSideCastleRookFrom = a8;
	this.state_.enPassantTargetSquare = sq_NB;
	this.state_.whiteKingSideCastleAllowed = true;
	this.state_.whiteQueenSideCastleAllowed = true;
	this.state_.blackKingSideCastleAllowed = true;
	this.state_.blackQueenSideCastleAllowed = true;
 	this.whiteKing_ = e1;
	this.blackKing_ = e8;
}

isStartPosition()
{
	return this.turn_ == Side.white && this.isStartBoard();
}

isStartBoard()
{
	return isBoardEqual(this.board_, startBoard);
}

setEmptyPosition()
{
	this.board_.fill(Piece.empty);
	this.turn_ = Side.white;
	this.state_.chess960 = false;
	this.state_.whiteCastleKingFrom = e1;
	this.state_.blackCastleKingFrom = e8;
	this.state_.whiteKingSideCastleRookFrom = h1;
	this.state_.whiteQueenSideCastleRookFrom = a1;
	this.state_.blackKingSideCastleRookFrom = h8;
	this.state_.blackQueenSideCastleRookFrom = a8;
	this.state_.enPassantTargetSquare = sq_NB;
	this.state_.whiteKingSideCastleAllowed = false;
	this.state_.whiteQueenSideCastleAllowed = false;
	this.state_.blackKingSideCastleAllowed = false;
	this.state_.blackQueenSideCastleAllowed = false;
  this.whiteKing_ = sq_NB;
  this.blackKing_ = sq_NB;
}

isEmptyPosition()
{
	return this.turn_ == Side.white && this.isEmptyBoard();
}

isEmptyBoard()
{
	return this.board_.every(Piece.empty);
}

board()
{
  return this.board_.slice();
}

at(square)
{
	return this.board_[square];
}

setPiece(square, piece)
{
	if (this.board_[square] == Piece.whiteKing)
	{
		this.whiteKing_ = sq_NB;
	}
	else if (this.board_[square] == Piece.blackKing)
	{
		this.blackKing_ = sq_NB;
	}
	if (piece == Piece.whiteKing)
	{
		this.whiteKing_ = square;
	}
	else if (piece == Piece.blackKing)
	{
		this.blackKing_ = square;
	}
	this.board_[square] = piece;
}

setWhiteToMove()
{
	this.turn_ = Side.white;
}

setBlackToMove()
{
	this.turn_ = Side.black;
}

flipSideToMove()
{
	if (this.turn_ == Side.white)
	{
		this.turn_ = Side.black;
	}
	else
	{
		this.turn_ = Side.white;
	}
}

isWhiteToMove()
{
	return this.turn_ == Side.white;
}

isBlackToMove()
{
	return this.turn_ == Side.black;
}

isEmpty(square)
{
	return this.board_[square] == Piece.empty;
}

isWhite(square)
{
	let piece = this.board_[square];
	return piece == Piece.whitePawn ||
		piece == Piece.whiteKnight ||
    piece == Piece.whiteBishop ||
    piece == Piece.whiteRook ||
    piece == Piece.whiteQueen ||
    piece == Piece.whiteKing;
}

isBlack(square)
{
	let piece = this.board_[square];
	return piece == Piece.blackPawn ||
		piece == Piece.blackKnight ||
    piece == Piece.blackBishop ||
    piece == Piece.blackRook ||
    piece == Piece.blackQueen ||
    piece == Piece.blackKing;
}

isWhitePawn(square)
{
  let piece = this.board_[square];
	return piece == Piece.whitePawn;
}

isWhiteKnight(square)
{
  let piece = this.board_[square];
	return piece == Piece.whiteKnight;
}

isWhiteBishop(square)
{
  let piece = this.board_[square];
	return piece == Piece.whiteBishop;
}

isWhiteRook(square)
{
  let piece = this.board_[square];
	return piece == Piece.whiteRook;
}

isWhiteQueen(square)
{
  let piece = this.board_[square];
	return piece == Piece.whiteQueen;
}

isWhiteKing(square)
{
  let piece = this.board_[square];
	return piece == Piece.whiteKing;
}

isBlackPawn(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackPawn;
}

isBlackKnight(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackKnight;
}

isBlackBishop(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackBishop;
}

isBlackRook(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackRook;
}

isBlackQueen(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackQueen;
}

isBlackKing(square)
{
  let piece = this.board_[square];
	return piece == Piece.blackKing;
}

numberOfWhitePieces()
{
  let counter = 0;
	for (const square of boardSquares)
	{
    if (this.isWhite(square))
		{
			counter++;
		}
	}
	return counter;
}

numberOfBlackPieces()
{
  let counter = 0;
	for (const square of boardSquares)
	{
    if (this.isBlack(square))
		{
			counter++;
		}
	}
	return counter;
}

setState(state)
{
  this.state_ = state.copyFrom();
}

state()
{
  return this.state_.copyFrom();
}

forward(move)
{
 	this.state_.enPassantTargetSquare = sq_NB; // ook bij null move!
	if (move.isNull())
	{
		this.flipSideToMove();
		return;
	}
	if (move.isWhite())
	{
		if (move.isCapture())
		{
			this.board_[move.captured] = Piece.empty;
			if (move.capturedPiece == Piece.blackRook)
			{
				if (move.captured == this.state_.blackQueenSideCastleRookFrom)
				{
					this.state_.blackQueenSideCastleAllowed = false;
				}
				else if (move.captured == this.state_.blackKingSideCastleRookFrom)
				{
					this.state_.blackKingSideCastleAllowed = false;
				}
			}
		}
		this.board_[move.from] = Piece.empty;
		this.board_[move.to] = move.toPiece;
		if (move.fromPiece == Piece.whitePawn)
		{
			if ((move.to - move.from) == 16)
			{
				this.state_.enPassantTargetSquare = (move.from + 8);
			}
		}
		else if (move.fromPiece == Piece.whiteRook)
		{
			if (move.from == this.state_.whiteQueenSideCastleRookFrom)
			{
				this.state_.whiteQueenSideCastleAllowed = false;
			}
			else if (move.from == this.state_.whiteKingSideCastleRookFrom)
			{
				this.state_.whiteKingSideCastleAllowed = false;
			}
		}
		else if (move.fromPiece == Piece.whiteKing)
		{
			if (move.isCastle())
			{
				if (move.to == whiteQueenSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (this.state_.whiteQueenSideCastleRookFrom != move.to)
					{
						this.board_[this.state_.whiteQueenSideCastleRookFrom] = Piece.empty;
					}
					this.board_[whiteQueenSideCastleRookTo] = Piece.whiteRook;
				}
				else if (move.to == whiteKingSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (this.state_.whiteKingSideCastleRookFrom != move.to)
					{
						this.board_[this.state_.whiteKingSideCastleRookFrom] = Piece.empty;
					}
					this.board_[whiteKingSideCastleRookTo] = Piece.whiteRook;
				}
			}
			this.state_.whiteQueenSideCastleAllowed = false;
			this.state_.whiteKingSideCastleAllowed = false;
			this.whiteKing_ = move.to;
		}
	}
	else
	{
		if (move.isCapture())
		{
			this.board_[move.captured] = Piece.empty;
			if (move.capturedPiece == Piece.whiteRook)
			{
				if (move.captured == this.state_.whiteQueenSideCastleRookFrom)
				{
					this.state_.whiteQueenSideCastleAllowed = false;
				}
				else if (move.captured == this.state_.whiteKingSideCastleRookFrom)
				{
					this.state_.whiteKingSideCastleAllowed = false;
				}
			}
		}
		this.board_[move.from] = Piece.empty;
		this.board_[move.to] = move.toPiece;
		if (move.fromPiece == Piece.blackPawn)
		{
			if ((move.to - move.from) == -16)
			{
				this.state_.enPassantTargetSquare = (move.from - 8);
			}
		}
		else if (move.fromPiece == Piece.blackRook)
		{
			if (move.from == this.state_.blackQueenSideCastleRookFrom)
			{
				this.state_.blackQueenSideCastleAllowed = false;
			}
			else if (move.from == this.state_.blackKingSideCastleRookFrom)
			{
				this.state_.blackKingSideCastleAllowed = false;
			}
		}
		else if (move.fromPiece == Piece.blackKing)
		{
			if (move.isCastle())
			{
				if (move.to == blackQueenSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (this.state_.blackQueenSideCastleRookFrom != move.to)
					{
						this.board_[this.state_.blackQueenSideCastleRookFrom] = Piece.empty;
					}
					this.board_[blackQueenSideCastleRookTo] = Piece.blackRook;
				}
				else if (move.to == blackKingSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (this.state_.blackKingSideCastleRookFrom != move.to)
					{
						this.board_[this.state_.blackKingSideCastleRookFrom] = Piece.empty;
					}
					this.board_[blackKingSideCastleRookTo] = Piece.blackRook;
				}
			}
			this.state_.blackQueenSideCastleAllowed = false;
			this.state_.blackKingSideCastleAllowed = false;
			this.blackKing_ = move.to;
		}
	}
	this.flipSideToMove();
}

backward(move)
{
 	if (move.isNull())
	{
		this.flipSideToMove();
		return;
	}
	if (move.isWhite())
	{
		this.board_[move.to] = Piece.empty;
		this.board_[move.from] = move.fromPiece;
		if (move.fromPiece == Piece.whiteKing)
		{
			if (move.isCastle())
			{
				if (move.to == whiteQueenSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (whiteQueenSideCastleRookTo != move.from)
					{
						this.board_[whiteQueenSideCastleRookTo] = Piece.empty;
					}
					this.board_[this.state_.whiteQueenSideCastleRookFrom] = Piece.whiteRook;
				}
				else if (move.to == whiteKingSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (whiteKingSideCastleRookTo != move.from)
					{
						this.board_[whiteKingSideCastleRookTo] = Piece.empty;
					}
					this.board_[this.state_.whiteKingSideCastleRookFrom] = Piece.whiteRook;
				}
			}
			this.whiteKing_ = move.from;
		}
		if (move.isCapture())
		{
			this.board_[move.captured] = move.capturedPiece;
		}
	}
	else
	{
		this.board_[move.to] = Piece.empty;
		this.board_[move.from] = move.fromPiece;
		if (move.fromPiece == Piece.blackKing)
		{
			if (move.isCastle())
			{
				if (move.to == blackQueenSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (blackQueenSideCastleRookTo != move.from)
					{
						this.board_[blackQueenSideCastleRookTo] = Piece.empty;
					}
					this.board_[this.state_.blackQueenSideCastleRookFrom] = Piece.blackRook;
				}
				else if (move.to == blackKingSideCastleKingTo)
				{
					// alleen leegmaken als niet inmiddels de koning erop staat!
					if (blackKingSideCastleRookTo != move.from)
					{
						this.board_[blackKingSideCastleRookTo] = Piece.empty;
					}
					this.board_[this.state_.blackKingSideCastleRookFrom] = Piece.blackRook;
				}
			}
			this.blackKing_ = move.from;
		}
		if (move.isCapture())
		{
			this.board_[move.captured] = move.capturedPiece;
		}
	}
	this.flipSideToMove();
}

whiteKing()
{
  return this.whiteKing_;
}

blackKing()
{
  return this.blackKing_;
}

isWhiteKingSideCastleAllowed()
{
	return this.state_.whiteKingSideCastleAllowed;
}

isWhiteQueenSideCastleAllowed()
{
	return this.state_.whiteQueenSideCastleAllowed;
}

isBlackKingSideCastleAllowed()
{
	return this.state_.blackKingSideCastleAllowed;
}

isBlackQueenSideCastleAllowed()
{
	return this.state_.blackQueenSideCastleAllowed;
}

whiteCastleKingFrom()
{
  return this.state_.whiteCastleKingFrom;
}

blackCastleKingFrom()
{
  return this.state_.blackCastleKingFrom;
}

whiteKingSideCastleRookFrom()
{
  return this.state_.whiteKingSideCastleRookFrom;
}

whiteQueenSideCastleRookFrom()
{
  return this.state_.whiteQueenSideCastleRookFrom;
}

blackKingSideCastleRookFrom()
{
  return this.state_.blackKingSideCastleRookFrom;
}

blackQueenSideCastleRookFrom()
{
  return this.state_.blackQueenSideCastleRookFrom;
}

enPassantTargetSquare()
{
  return this.state_.enPassantTargetSquare;
}

isChess960()
{
	return this.state_.chess960;
}

}
const BoardPieceCBurnett = 0;
const BoardPieceMerida   = 1;
const DefaultBoardPiece  = BoardPieceCBurnett;

function getBoardPieces()
{
  let boardPieces = [];
	boardPieces.push("CBurnettt (Lichess)");
	boardPieces.push("Merida (Lichess)");
	return boardPieces;
}

class GameMove
{

constructor()
{
	this.move_ = new GenMove();
	this.comments_ = null;
}

copyFrom()
{
	let copyMove = new GameMove();
	copyMove.move_ = this.move_.copyFrom();
	copyMove.comments_ = null;
	if (this.comments_)
	{
		copyMove.comments_ = this.comments_.copyFrom();
	}
	return copyMove;
}

isEqual(ref)
{
	if (this.move_.isNotEqual(ref))
	{
		return false;
	}
	return true;
}

isNotEqual(ref)
{
	return !this.isEqual(ref);
}

empty()
{
	return this.move_.empty();
}

from()
{
	return this.move_.from;
}

to()
{
	return this.move_.to;
}

fromPiece()
{
	return this.move_.fromPiece;
}

toPiece()
{
	return this.move_.toPiece;
}

captured()
{
	return this.move_.captured;
}

capturedPiece()
{
	return this.move_.capturedPiece;
}

numberOfCaptures()
{
	return this.move_.numberOfCaptures();
}

isWhite()
{
	return this.move_.isWhite();
}

isBlack()
{
	return this.move_.isBlack();
}

isPromotion()
{
	return this.move_.isPromotion();
}

isNull()
{
	return this.move_.isNull();
}

isCapture()
{
	return this.move_.isCapture();
}

createComments()
{
	if (this.comments_ == null)
	{
		this.comments_ = new Comments();
	}
}

checkComments()
{
	if (this.comments_)
	{
		if (this.comments_.empty())
		{
			this.clearComments();
		}
	}
}

hasComments()
{
	return this.comments_ != null;
}

clearComments()
{
	this.comments_ = null;
}

setComments(newComments)
{
	this.createComments();
	this.comments_ = newComments.copyFrom();
}

getComments()
{
	return this.comments_;
}

equalToComments(ref)
{
	if (this.comments_ && !ref.comments_)
	{
		return false;
	}
	if (!this.comments_ && ref.comments_)
	{
		return false;
	}
	if (!this.comments_ && !ref.comments_)
	{
		return true;
	}
	return this.comments_.isEqual(ref.comments_);
}

clearAfterText()
{
	if (this.comments_)
	{
		this.comments_.afterText = '';
		this.checkComments();
	}
}

hasAfterText()
{
	if (this.comments_)
	{
		return this.comments_.afterText.length != 0;
	}
	else
	{
		return false;
	}
}

afterText()
{
	if (this.comments_)
	{
		return this.comments_.afterText;
	}
	else
	{
		return '';
	}
}

setAfterText(text)
{
	this.createComments();
	this.comments_.afterText = text;
	this.checkComments();
}

clearBeforeText()
{
	if (this.comments_)
	{
		this.comments_.beforeText = '';
		this.checkComments();
	}
}

hasBeforeText()
{
	if (this.comments_)
	{
		return this.comments_.beforeText.length != 0;
	}
	else
	{
		return false;
	}
}

beforeText()
{
	if (this.comments_)
	{
		return this.comments_.beforeText;
	}
	else
	{
		return '';
	}
}

setBeforeText(text)
{
	this.createComments();
	this.comments_.beforeText = text;
	this.checkComments();
}

clearPrefix()
{
	if (this.comments_)
	{
		this.comments_.prefix = MovePrefix.none;
		this.checkComments();
	}
}

hasPrefix()
{
	if (this.comments_)
	{
		return this.comments_.prefix != MovePrefix.none;
	}
	else
	{
		return false;
	}
}

prefix()
{
	if (this.comments_)
	{
		return this.comments_.prefix;
	}
	else
	{
		return MovePrefix.none;
	}
}

setPrefix(prefix)
{
	this.createComments();
	this.comments_.prefix = prefix;
	this.checkComments();
}

clearStyle()
{
	if (this.comments_)
	{
		this.comments_.style = MoveStyle.none;
		this.checkComments();
	}
}

hasStyle()
{
	if (this.comments_)
	{
		return this.comments_.style != MoveStyle.none;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.comments_)
	{
		return this.comments_.style;
	}
	else
	{
		return MoveStyle.none;
	}
}

setStyle(style)
{
	this.createComments();
	this.comments_.style = style;
	this.checkComments();
}

clearValue()
{
	if (this.comments_)
	{
		this.comments_.value = MoveValue.none;
		this.checkComments();
	}
}

hasValue()
{
	if (this.comments_)
	{
		return this.comments_.value != MoveValue.none;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.comments_)
	{
		return this.comments_.value;
	}
	else
	{
		return MoveValue.none;
	}
}

setValue(value)
{
	this.createComments();
	this.comments_.value = value;
	this.checkComments();
}

clearCritical()
{
	if (this.comments_)
	{
		this.comments_.critical = MoveCritical.none;
		this.checkComments();
	}
}

hasCritical()
{
	if (this.comments_)
	{
		return this.comments_.critical != MoveCritical.none;
	}
	else
	{
		return false;
	}
}

critical()
{
	if (this.comments_)
	{
		return this.comments_.critical;
	}
	else
	{
		return MoveCritical.none;
	}
}

setCritical(critical)
{
	this.createComments();
	this.comments_.critical = critical;
	this.checkComments();
}

clearDiagram()
{
  // laat maar want het is geen editor
}

hasDiagram()
{
	if (this.comments_)
	{
 		if (this.comments_.afterText.length != 0)
    {
      let pos = this.comments_.afterText.indexOf("[#]");
      return pos != -1;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

setDiagram()
{
  // laat maar want het is geen editor
}

clearPiecePath()
{
	if (this.comments_)
	{
		this.comments_.piecePath = false;
		this.checkComments();
	}
}

hasPiecePath()
{
	if (this.comments_)
	{
		return this.comments_.piecePath;
	}
	else
	{
		return false;
	}
}

setPiecePath()
{
	this.createComments();
	this.comments_.piecePath = true;
	this.checkComments();
}

clearEndOfGame()
{
	if (this.comments_)
	{
		this.comments_.endOfGame = false;
		this.checkComments();
	}
}

hasEndOfGame()
{
	if (this.comments_)
	{
		return this.comments_.endOfGame;
	}
	else
	{
		return false;
	}
}

setEndOfGame()
{
	this.createComments();
	this.comments_.endOfGame = true;
	this.checkComments();
}

clearGraphics()
{
	if (this.comments_)
	{
		this.comments_.arrows.clear();
		this.comments_.marks.clear();
		this.checkComments();
	}
}

hasGraphics()
{
	if (this.comments_)
	{
		return this.hasArrows() || this.hasMarks();
	}
	else
	{
		return false;
	}
}

clearArrows()
{
	if (this.comments_)
	{
		this.comments_.arrows.clear();
		this.checkComments();
	}
}

hasArrows()
{
	if (this.comments_)
	{
		return !this.comments_.arrows.empty();
	}
	else
	{
		return false;
	}
}

arrows()
{
	if (this.comments_)
	{
		return this.comments_.arrows.copyFrom();
	}
	else
	{
		return new BoardArrowList();
	}
}

setArrows(arrows)
{
	this.createComments();
	this.comments_.arrows = arrows.copyFrom();
	this.checkComments();
}

clearMarks()
{
	if (this.comments_)
	{
		this.comments_.marks.clear();
		this.checkComments();
	}
}

hasMarks()
{
	if (this.comments_)
	{
		return !this.comments_.marks.empty();
	}
	else
	{
		return false;
	}
}

marks()
{
	if (this.comments_)
	{
		return this.comments_.marks.copyFrom();
	}
	else
	{
		return new BoardMarkList();
	}
}

setMarks(marks)
{
	this.createComments();
	this.comments_.marks = marks.copyFrom();
	this.checkComments();
}

clearMedals()
{
	if (this.comments_)
	{
		this.comments_.medals.reset();
		this.checkComments();
	}
}

hasMedals()
{
	if (this.comments_)
	{
		return this.comments_.medals.any();
	}
	else
	{
		return false;
	}
}

medals()
{
	if (this.comments_)
	{
		return this.comments_.medals.copyFrom();
	}
	else
	{
		return new MoveMedals();
	}
}

setMedals(medals)
{
	this.createComments();
	this.comments_.medals = medals.copyFrom();
	this.checkComments();
}

setGenMove(genMove)
{
	this.move_ = genMove.copyFrom();
	this.comments_ = null;
}

genMove()
{
	let copyGenMove = new GenMove();
  return Object.assign(copyGenMove, this.move_);
}

}

function buildGameMove(genMove)
{
  let gameMove = new GameMove();
  gameMove.setGenMove(genMove);
  return gameMove;
}
class GenMove
{

constructor()
{
	this.from = sq_NB;
	this.fromPiece = Piece.empty;
	this.to = sq_NB;
	this.toPiece = Piece.empty;
	this.captured = sq_NB;
	this.capturePiece = Piece.empty;
	this.type = MoveType.none;
}

copyFrom()
{
	let copyGenMove = new GenMove();
	copyGenMove.from = this.from;
	copyGenMove.fromPiece = this.fromPiece;
	copyGenMove.to = this.to;
	copyGenMove.toPiece = this.toPiece;
	copyGenMove.captured = this.captured;
	copyGenMove.capturedPiece = this.capturedPiece;
	copyGenMove.type = this.type;
	return copyGenMove;
}

isEqual(ref)
{
	if (
		this.from != ref.from ||
		this.fromPiece != ref.fromPiece ||
		this.to != ref.to ||
		this.toPiece != ref.toPiece ||
		this.captured != ref.captured ||
		this.capturedPiece != ref.capturedPiece ||
    this.type != ref.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

isNotEqual(ref)
{
	return !this.isEqual(ref);
}

empty()
{
	return this.type == MoveType.none;
}

isWhite()
{
	return this.fromPiece == Piece.whitePawn ||
		this.fromPiece == Piece.whiteKnight ||
    this.fromPiece == Piece.whiteBishop ||
    this.fromPiece == Piece.whiteRook ||
    this.fromPiece == Piece.whiteQueen ||
    this.fromPiece == Piece.whiteKing;
}

isBlack()
{
	return this.fromPiece == Piece.blackPawn ||
		this.fromPiece == Piece.blackKnight ||
    this.fromPiece == Piece.blackBishop ||
    this.fromPiece == Piece.blackRook ||
    this.fromPiece == Piece.blackQueen ||
    this.fromPiece == Piece.blackKing;
}

isCapture()
{
	return this.captured != sq_NB;
}

isPromotion()
{
	return this.fromPiece != this.toPiece;
}

isEnPassant()
{
  return this.type == MoveType.enPassant;
}

isNull()
{
	return this.type == MoveType.none;
}

isCastle()
{
	return this.type == MoveType.castle;
}

numberOfCaptures()
{
	if (this.isCapture())
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

}

var northSquares = [];
var northEastSquares = [];
var eastSquares = [];
var southEastSquares = [];
var southSquares = [];
var southWestSquares = [];
var westSquares = [];
var northWestSquares = [];

var northEastSquare = [];
var eastSquare = [];
var southEastSquare = [];
var southWestSquare =[];
var westSquare = [];
var northWestSquare = [];

var kingSquares = [];
var knightSquares = [];

var moveGeneratorInited = false;

function playWhiteNonCastleBoard(board, genMove)
{
	if (genMove.type == MoveType.normal)
	{
		board[genMove.to] = board[genMove.from];
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.enPassant)
	{
		let captured = (genMove.to - 8);
		board[captured] = Piece.empty;
		board[genMove.to] = Piece.whitePawn;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionQueen)
	{
		board[genMove.to] = Piece.whiteQueen;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionRook)
	{
		board[genMove.to] = Piece.whiteRook;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionBishop)
	{
		board[genMove.to] = Piece.whiteBishop;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionKnight)
	{
		board[genMove.to] = Piece.whiteKnight;
		board[genMove.from] = Piece.empty;
	}
}

function playBlackNonCastleBoard(board, genMove)
{
	if (genMove.type == MoveType.normal)
	{
		board[genMove.to] = board[genMove.from];
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.enPassant)
	{
		let captured = (genMove.to + 8);
		board[captured] = Piece.empty;
		board[genMove.to] = Piece.blackPawn;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionQueen)
	{
		board[genMove.to] = Piece.blackQueen;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionRook)
	{
		board[genMove.to] = Piece.blackRook;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionBishop)
	{
		board[genMove.to] = Piece.blackBishop;
		board[genMove.from] = Piece.empty;
	}
	else if (genMove.type == MoveType.promotionKnight)
	{
		board[genMove.to] = Piece.blackKnight;
		board[genMove.from] = Piece.empty;
	}
}

function playWhiteStandardCastleBoard(board, genMove)
{
	if (genMove.to == whiteQueenSideCastleKingTo)
	{
		board[genMove.to] = Piece.whiteKing;
		board[genMove.from] = Piece.empty;
		board[a1] = Piece.empty; // a1 is goed want is normale partij
		board[whiteQueenSideCastleRookTo] = Piece.whiteRook;
	}
	else
	{
		board[genMove.to] = Piece.whiteKing;
		board[genMove.from] = Piece.empty;
		board[h1] = Piece.empty; // h1 is goed want is normale partij
		board[whiteKingSideCastleRookTo] = Piece.whiteRook;
	}
}

function playBlackStandardCastleBoard(board, genMove)
{
	if (genMove.to == blackQueenSideCastleKingTo)
	{
		board[genMove.to] = Piece.blackKing;
		board[genMove.from] = Piece.empty;
		board[a8] = Piece.empty; // a8 is goed want is normale partij
		board[blackQueenSideCastleRookTo] = Piece.blackRook;
	}
	else
	{
		board[genMove.to] = Piece.blackKing;
		board[genMove.from] = Piece.empty;
		board[h8] = Piece.empty; // h8 is goed want is normale partij
		board[blackKingSideCastleRookTo] = Piece.blackRook;
	}
}

function playWhiteChess960CastleBoard(board, genMove, state)
{
	if (genMove.to == whiteQueenSideCastleKingTo)
	{
		board[genMove.to] = Piece.whiteKing;
		board[genMove.from] = Piece.empty;
		if (state.whiteQueenSideCastleRookFrom != genMove.to)
		{
			board[state.whiteQueenSideCastleRookFrom] = Piece.empty;
		}
		board[whiteQueenSideCastleRookTo] = Piece.whiteRook;
	}
	else if (genMove.to == whiteKingSideCastleKingTo)
	{
		board[genMove.to] = Piece.whiteKing;
		board[genMove.from] = Piece.empty;
		if (state.whiteKingSideCastleRookFrom != genMove.to)
		{
			board[state.whiteKingSideCastleRookFrom] = Piece.empty;
		}
		board[whiteKingSideCastleRookTo] = Piece.whiteRook;
	}
}

function playBlackChess960CastleBoard(board, genMove, state)
{
	if (genMove.to == blackQueenSideCastleKingTo)
	{
		board[genMove.to] = Piece.blackKing;
		board[genMove.from] = Piece.empty;
		if (state.blackQueenSideCastleRookFrom != genMove.to)
		{
			board[state.blackQueenSideCastleRookFrom] = Piece.empty;
		}
		board[blackQueenSideCastleRookTo] = Piece.blackRook;
	}
	else if (genMove.to == blackKingSideCastleKingTo)
	{
		board[genMove.to] = Piece.blackKing;
		board[genMove.from] = Piece.empty;
		if (state.blackKingSideCastleRookFrom != genMove.to)
		{
			board[state.blackKingSideCastleRookFrom] = Piece.empty;
		}
		board[blackKingSideCastleRookTo] = Piece.blackRook;
	}
}

function isLegalWhiteMove(position, genMove)
{
	let kingSquare = position.whiteKing();
	if (kingSquare == sq_NB) return true;
	if (genMove.fromPiece == Piece.whiteKing)
	{
		kingSquare = genMove.to;
	}
	let board = position.board();
	if (genMove.type == MoveType.castle)
	{
		if (position.isChess960())
		{
			playWhiteChess960CastleBoard(board, genMove, position.state());
		}
		else
		{
			playWhiteStandardCastleBoard(board, genMove);
		}
	}
	else
	{
		playWhiteNonCastleBoard(board, genMove);
	}
	return !isAttackedByBlackBoard(board, kingSquare);
}

function isLegalBlackMove(position, genMove)
{
	let kingSquare = position.blackKing();
	if (kingSquare == sq_NB) return true;
	if (genMove.fromPiece == Piece.blackKing)
	{
		kingSquare = genMove.to;
	}
	let board = position.board();
	if (genMove.type == MoveType.castle)
	{
		if (position.isChess960())
		{
			playBlackChess960CastleBoard(board, genMove, position.state());
		}
		else
		{
			playBlackStandardCastleBoard(board, genMove);
		}
	}
	else
	{
		playBlackNonCastleBoard(board, genMove);
	}
	return !isAttackedByWhiteBoard(board, kingSquare);
}

function genWhitePawnMoves(moves, position, from)
{
	if (rankOf(from) == rank_8)
	{
		return;
	}
	genWhitePawnNonCaptureMoves(moves, position, from);
	let to = northWestSquare[from];
	if (to != sq_NB)
	{
		genWhitePawnCapture(moves, position, from, to);
	}
	to = northEastSquare[from];
	if (to != sq_NB)
	{
		genWhitePawnCapture(moves, position, from, to);
	}
}

function genBlackPawnMoves(moves, position, from)
{
	if (rankOf(from) == rank_1)
	{
		return;
	}
	genBlackPawnNonCaptureMoves(moves, position, from);
	let to = southEastSquare[from];
	if (to != sq_NB)
	{
		genBlackPawnCapture(moves, position, from, to);
	}
	to = southWestSquare[from];
	if (to != sq_NB)
	{
		genBlackPawnCapture(moves, position, from, to);
	}
}

function genWhitePawnNonCaptureMoves(moves, position, from)
{
	let to = (from + north);
	if (position.isEmpty(to))
	{
		if (rankOf(from) == rank_7)
		{
			addWhitePromotion(moves, position, from, to);
		}
		else
		{
			addMove(moves, position, from, to, MoveType.normal);
			if (rankOf(from) == rank_2)
			{
				let to = (from + north + north);
				if (position.isEmpty(to))
				{
					addMove(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}
}

function genBlackPawnNonCaptureMoves(moves, position, from)
{
	let to = (from + south);
	if (position.isEmpty(to))
	{
		if (rankOf(from) == rank_2)
		{
			addBlackPromotion(moves, position, from, to);
		}
		else
		{
			addMove(moves, position, from, to, MoveType.normal);
			if (rankOf(from) == rank_7)
			{
				let to = (from + south + south);
				if (position.isEmpty(to))
				{
					addMove(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}
}

function genWhitePawnCapture(moves, position, from, to)
{
	if (!position.isBlack(to))
	{
		return;
	}
	if (rankOf(from) == rank_7)
	{
		addWhiteCapturePromotion(moves, position, from, to);
	}
	else
	{
		addCapture(moves, position, from, to, MoveType.normal);
	}
}

function genBlackPawnCapture(moves, position, from, to)
{
	if (!position.isWhite(to))
	{
		return;
	}
	if (rankOf(from) == rank_2)
	{
		addBlackCapturePromotion(moves, position, from, to);
	}
	else
	{
		addCapture(moves, position, from, to, MoveType.normal);
	}
}

function genWhiteKnightMoves4(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isBlack(to))
		{
			addCapture(moves, position, from, to, MoveType.normal);
		}
	}
}

function genBlackKnightMoves4(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isWhite(to))
		{
			addCapture(moves, position, from, to, MoveType.normal);
		}
	}
}

function genWhiteKnightMoves(moves, position, from)
{
	genWhiteKnightMoves4(moves, position, from, knightSquares[from]);
}

function genBlackKnightMoves(moves, position, from)
{
	genBlackKnightMoves4(moves, position, from, knightSquares[from]);
}

function genWhiteBishopMoves(moves, position, from)
{
	genWhiteMoves(moves, position, from, northEastSquares[from]);
	genWhiteMoves(moves, position, from, southEastSquares[from]);
	genWhiteMoves(moves, position, from, southWestSquares[from]);
	genWhiteMoves(moves, position, from, northWestSquares[from]);
}

function genBlackBishopMoves(moves, position, from)
{
	genBlackMoves(moves, position, from, northEastSquares[from]);
	genBlackMoves(moves, position, from, southEastSquares[from]);
	genBlackMoves(moves, position, from, southWestSquares[from]);
	genBlackMoves(moves, position, from, northWestSquares[from]);
}

function genWhiteRookMoves(moves, position, from)
{
	genWhiteMoves(moves, position, from, northSquares[from]);
	genWhiteMoves(moves, position, from, eastSquares[from]);
	genWhiteMoves(moves, position, from, southSquares[from]);
	genWhiteMoves(moves, position, from, westSquares[from]);
}

function genBlackRookMoves(moves, position, from)
{
	genBlackMoves(moves, position, from, northSquares[from]);
	genBlackMoves(moves, position, from, eastSquares[from]);
	genBlackMoves(moves, position, from, southSquares[from]);
	genBlackMoves(moves, position, from, westSquares[from]);
}

function genWhiteQueenMoves(moves, position, from)
{
	genWhiteMoves(moves, position, from, northSquares[from]);
	genWhiteMoves(moves, position, from, northEastSquares[from]);
	genWhiteMoves(moves, position, from, eastSquares[from]);
	genWhiteMoves(moves, position, from, southEastSquares[from]);
	genWhiteMoves(moves, position, from, southSquares[from]);
	genWhiteMoves(moves, position, from, southWestSquares[from]);
	genWhiteMoves(moves, position, from, westSquares[from]);
	genWhiteMoves(moves, position, from, northWestSquares[from]);
}

function genBlackQueenMoves(moves, position, from)
{
	genBlackMoves(moves, position, from, northSquares[from]);
	genBlackMoves(moves, position, from, northEastSquares[from]);
	genBlackMoves(moves, position, from, eastSquares[from]);
	genBlackMoves(moves, position, from, southEastSquares[from]);
	genBlackMoves(moves, position, from, southSquares[from]);
	genBlackMoves(moves, position, from, southWestSquares[from]);
	genBlackMoves(moves, position, from, westSquares[from]);
	genBlackMoves(moves, position, from, northWestSquares[from]);
}

function genWhiteKingMoves(moves, position, from)
{
	genWhiteKingMoves4(moves, position, from, kingSquares[from]);
}

function genBlackKingMoves(moves, position, from)
{
	genBlackKingMoves4(moves, position, from, kingSquares[from]);
}

function genWhiteMoves(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isWhite(to))
		{
			break;
		}
		else
		{
			addCapture(moves, position, from, to, MoveType.normal);
			break;
		}
	}
}

function genBlackMoves(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isBlack(to))
		{
			break;
		}
		else
		{
			addCapture(moves, position, from, to, MoveType.normal);
			break;
		}
	}
}

function genWhiteKingMoves4(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isBlack(to))
		{
			addCapture(moves, position, from, to, MoveType.normal);
		}
	}
}

function genBlackKingMoves4(moves, position, from, toSquares)
{
	for (const to of toSquares)
	{
		if (position.isEmpty(to))
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
		else if (position.isWhite(to))
		{
			addCapture(moves, position, from, to, MoveType.normal);
		}
	}
}

function getBetweenSquares(left, right)
{
	let squares = [];
	if (left > right)
	{
    let temp = left;
    left = right;
    right = temp;
	}
	for (let i = left + 1; i < right; i++)
	{
		squares.push(i);
	}
	return squares;
}

function genChess960WhiteQueenSideCastlingMove(moves, position)
{
	if (!position.isWhiteKing(position.whiteCastleKingFrom()))
	{
		return;
	}
	if (!position.isWhiteRook(position.whiteQueenSideCastleRookFrom()))
	{
		return;
	}
	let rookBetweenSquares = getBetweenSquares(position.whiteQueenSideCastleRookFrom(), whiteQueenSideCastleRookTo);
  for (const square of rookBetweenSquares)
	{
		if (square != position.whiteCastleKingFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
	let kingBetweenSquares = getBetweenSquares(position.whiteCastleKingFrom(), whiteQueenSideCastleKingTo);
  for (const square of kingBetweenSquares)
	{
		if (square != position.whiteQueenSideCastleRookFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
  for (const square of kingBetweenSquares)
	{
		if (isAttackedByBlack(position, square))
		{
			return;
		}
	}
	if (isAttackedByBlack(position, position.whiteCastleKingFrom()))
	{
		return;
	}
	if (position.whiteCastleKingFrom() != whiteQueenSideCastleKingTo)
	{
		if (!position.isEmpty(whiteQueenSideCastleKingTo))
		{
			if (whiteQueenSideCastleKingTo != position.whiteQueenSideCastleRookFrom())
			{
				return;
			}
		}
	}
	if (position.whiteQueenSideCastleRookFrom() != whiteQueenSideCastleRookTo)
	{
		if (!position.isEmpty(whiteQueenSideCastleRookTo))
		{
			if (whiteQueenSideCastleRookTo != position.whiteCastleKingFrom())
			{
				return;
			}
		}
	}
	addMove(moves, position, position.whiteCastleKingFrom(), whiteQueenSideCastleKingTo, MoveType.castle);
}

function genChess960WhiteKingSideCastlingMove(moves, position)
{
	if (!position.isWhiteKing(position.whiteCastleKingFrom()))
	{
		return;
	}
	if (!position.isWhiteRook(position.whiteKingSideCastleRookFrom()))
	{
		return;
	}
	let rookBetweenSquares = getBetweenSquares(position.whiteKingSideCastleRookFrom(), whiteKingSideCastleRookTo);
  for (const square of rookBetweenSquares)
	{
		if (square != position.whiteCastleKingFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
	let kingBetweenSquares = getBetweenSquares(position.whiteCastleKingFrom(), whiteKingSideCastleKingTo);
  for (const square of kingBetweenSquares)
	{
		if (square != position.whiteKingSideCastleRookFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
  for (const square of kingBetweenSquares)
	{
		if (isAttackedByBlack(position, square))
		{
			return;
		}
	}
	if (isAttackedByBlack(position, position.whiteCastleKingFrom()))
	{
		return;
	}
	if (position.whiteCastleKingFrom() != whiteKingSideCastleKingTo)
	{
		if (!position.isEmpty(whiteKingSideCastleKingTo))
		{
			if (whiteKingSideCastleKingTo != position.whiteKingSideCastleRookFrom())
			{
				return;
			}
		}
	}
	if (position.whiteKingSideCastleRookFrom() != whiteKingSideCastleRookTo)
	{
		if (!position.isEmpty(whiteKingSideCastleRookTo))
		{
			if (whiteKingSideCastleRookTo != position.whiteCastleKingFrom())
			{
				return;
			}
		}
	}
	addMove(moves, position, position.whiteCastleKingFrom(), whiteKingSideCastleKingTo, MoveType.castle);
}

function genChess960BlackKingSideCastlingMove(moves, position)
{
	if (!position.isBlackKing(position.blackCastleKingFrom()))
	{
		return;
	}
	if (!position.isBlackRook(position.blackKingSideCastleRookFrom()))
	{
		return;
	}
	let rookBetweenSquares = getBetweenSquares(position.blackKingSideCastleRookFrom(), blackKingSideCastleRookTo);
  for (const square of rookBetweenSquares)
	{
		if (square != position.blackCastleKingFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
	let kingBetweenSquares = getBetweenSquares(position.blackCastleKingFrom(), blackKingSideCastleKingTo);
  for (const square of kingBetweenSquares)
	{
		if (square != position.blackKingSideCastleRookFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
  for (const square of kingBetweenSquares)
	{
		if (isAttackedByWhite(position, square))
		{
			return;
		}
	}
	if (isAttackedByWhite(position, position.blackCastleKingFrom()))
	{
		return;
	}
	if (position.blackCastleKingFrom() != blackKingSideCastleKingTo)
	{
		if (!position.isEmpty(blackKingSideCastleKingTo))
		{
			if (blackKingSideCastleKingTo != position.blackKingSideCastleRookFrom())
			{
				return;
			}
		}
	}
	if (position.blackKingSideCastleRookFrom() != blackKingSideCastleRookTo)
	{
		if (!position.isEmpty(blackKingSideCastleRookTo))
		{
			if (blackKingSideCastleRookTo != position.blackCastleKingFrom())
			{
				return;
			}
		}
	}
	addMove(moves, position, position.blackCastleKingFrom(), blackKingSideCastleKingTo, MoveType.castle);
}

function genChess960BlackQueenSideCastlingMove(moves, position)
{
	if (!position.isBlackKing(position.blackCastleKingFrom()))
	{
		return;
	}
	if (!position.isBlackRook(position.blackQueenSideCastleRookFrom()))
	{
		return;
	}
	let rookBetweenSquares = getBetweenSquares(position.blackQueenSideCastleRookFrom(), blackQueenSideCastleRookTo);
  for (const square of rookBetweenSquares)
	{
		if (square != position.blackCastleKingFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
	let kingBetweenSquares = getBetweenSquares(position.blackCastleKingFrom(), blackQueenSideCastleKingTo);
  for (const square of kingBetweenSquares)
	{
		if (square != position.blackQueenSideCastleRookFrom())
		{
			if (!position.isEmpty(square))
			{
				return;
			}
		}
	}
  for (const square of kingBetweenSquares)
	{
		if (isAttackedByWhite(position, square))
		{
			return;
		}
	}
	if (isAttackedByWhite(position, position.blackCastleKingFrom()))
	{
		return;
	}
	if (position.blackCastleKingFrom() != blackQueenSideCastleKingTo)
	{
		if (!position.isEmpty(blackQueenSideCastleKingTo))
		{
			if (blackQueenSideCastleKingTo != position.blackQueenSideCastleRookFrom())
			{
				return;
			}
		}
	}
	if (position.blackQueenSideCastleRookFrom() != blackQueenSideCastleRookTo)
	{
		if (!position.isEmpty(blackQueenSideCastleRookTo))
		{
			if (blackQueenSideCastleRookTo != position.blackCastleKingFrom())
			{
				return;
			}
		}
	}
	addMove(moves, position, position.blackCastleKingFrom(), blackQueenSideCastleKingTo, MoveType.castle);
}

function genStandardWhiteQueenSideCastlingMove(moves, position)
{
	if (!position.isWhiteKing(position.whiteCastleKingFrom()))
	{
		return;
	}
	if (!position.isWhiteRook(position.whiteQueenSideCastleRookFrom()))
	{
		return;
	}
	if (!position.isEmpty(b1))
	{
		return;
	}
	if (!position.isEmpty(c1))
	{
		return;
	}
	if (!position.isEmpty(d1))
	{
		return;
	}
	if (isAttackedByBlack(position, position.whiteCastleKingFrom()))
	{
		return;
	}
	if (isAttackedByBlack(position, d1))
	{
		return;
	}
	addMove(moves, position, position.whiteCastleKingFrom(), whiteQueenSideCastleKingTo, MoveType.castle);
}

function genStandardWhiteKingSideCastlingMove(moves, position)
{
	if (!position.isWhiteKing(position.whiteCastleKingFrom()))
	{
		return;
	}
	if (!position.isWhiteRook(position.whiteKingSideCastleRookFrom()))
	{
		return;
	}
	if (!position.isEmpty(f1))
	{
		return;
	}
	if (!position.isEmpty(g1))
	{
		return;
	}
	if (isAttackedByBlack(position, position.whiteCastleKingFrom()))
	{
		return;
	}
	if (isAttackedByBlack(position, f1))
	{
		return;
	}
	addMove(moves, position, position.whiteCastleKingFrom(), whiteKingSideCastleKingTo, MoveType.castle);
}

function genStandardBlackQueenSideCastlingMove(moves, position)
{
	if (!position.isBlackKing(position.blackCastleKingFrom()))
	{
		return;
	}
	if (!position.isBlackRook(position.blackQueenSideCastleRookFrom()))
	{
		return;
	}
	if (!position.isEmpty(b8))
	{
		return;
	}
	if (!position.isEmpty(c8))
	{
		return;
	}
	if (!position.isEmpty(d8))
	{
		return;
	}
	if (isAttackedByWhite(position, position.blackCastleKingFrom()))
	{
		return;
	}
	if (isAttackedByWhite(position, d8))
	{
		return;
	}
	addMove(moves, position, position.blackCastleKingFrom(), blackQueenSideCastleKingTo, MoveType.castle);
}

function genStandardBlackKingSideCastlingMove(moves, position)
{
	if (!position.isBlackKing(position.blackCastleKingFrom()))
	{
		return;
	}
	if (!position.isBlackRook(position.blackKingSideCastleRookFrom()))
	{
		return;
	}
	if (!position.isEmpty(f8))
	{
		return;
	}
	if (!position.isEmpty(g8))
	{
		return;
	}
	if (isAttackedByWhite(position, position.blackCastleKingFrom()))
	{
		return;
	}
	if (isAttackedByWhite(position, f8))
	{
		return;
	}
	addMove(moves, position, position.blackCastleKingFrom(), blackKingSideCastleKingTo, MoveType.castle);
}

function genWhiteQueenSideCastlingMove(moves, position)
{
	if (position.isChess960())
	{
		genChess960WhiteQueenSideCastlingMove(moves, position);
	}
	else
	{
		genStandardWhiteQueenSideCastlingMove(moves, position);
	}
}

function genWhiteKingSideCastlingMove(moves, position)
{
	if (position.isChess960())
	{
		genChess960WhiteKingSideCastlingMove(moves, position);
	}
	else
	{
		genStandardWhiteKingSideCastlingMove(moves, position);
	}
}

function genWhiteCastlingMoves(moves, position)
{
	if (position.isWhiteQueenSideCastleAllowed())
	{
		genWhiteQueenSideCastlingMove(moves, position);
	}
	if (position.isWhiteKingSideCastleAllowed())
	{
		genWhiteKingSideCastlingMove(moves, position);
	}
}

function genBlackQueenSideCastlingMove(moves, position)
{
	if (position.isChess960())
	{
		genChess960BlackQueenSideCastlingMove(moves, position);
	}
	else
	{
		genStandardBlackQueenSideCastlingMove(moves, position);
	}
}

function genBlackKingSideCastlingMove(moves, position)
{
	if (position.isChess960())
	{
		genChess960BlackKingSideCastlingMove(moves, position);
	}
	else
	{
		genStandardBlackKingSideCastlingMove(moves, position);
	}
}

function genBlackCastlingMoves(moves, position)
{
	if (position.isBlackQueenSideCastleAllowed())
	{
		genBlackQueenSideCastlingMove(moves, position);
	}
	if (position.isBlackKingSideCastleAllowed())
	{
		genBlackKingSideCastlingMove(moves, position);
	}
}

function genWhiteEnPassantMoves(moves, position)
{
	if (position.enPassantTargetSquare() == sq_NB)
	{
		return;
	}
	if (rankOf(position.enPassantTargetSquare()) != rank_6)
	{
		return;
	}
	if (!position.isEmpty(position.enPassantTargetSquare()))
	{
		return;
	}
	let enPassantFromSquare = (position.enPassantTargetSquare() + 8);
	if (!position.isEmpty(enPassantFromSquare))
	{
		return;
	}
	let enPassantToSquare = (position.enPassantTargetSquare() - 8);
	if (!position.isBlackPawn(enPassantToSquare))
	{
		return;
	}
	let sideSquare = westSquare[enPassantToSquare];
	if (sideSquare != sq_NB)
	{
		if (position.isWhitePawn(sideSquare))
		{
			addMove2(moves, position, sideSquare, Piece.whitePawn, position.enPassantTargetSquare(),
				Piece.whitePawn, enPassantToSquare, Piece.blackPawn, MoveType.enPassant);
		}
	}
	sideSquare = eastSquare[enPassantToSquare];
	if (sideSquare != sq_NB)
	{
		if (position.isWhitePawn(sideSquare))
		{
			addMove2(moves, position, sideSquare, Piece.whitePawn, position.enPassantTargetSquare(),
				Piece.whitePawn, enPassantToSquare, Piece.blackPawn, MoveType.enPassant);
		}
	}
}

function genBlackEnPassantMoves(moves, position)
{
	if (position.enPassantTargetSquare() == sq_NB)
	{
		return;
	}
	if (rankOf(position.enPassantTargetSquare()) != rank_3)
	{
		return;
	}
	if (!position.isEmpty(position.enPassantTargetSquare()))
	{
		return;
	}
	let enPassantFromSquare = (position.enPassantTargetSquare() - 8);
	if (!position.isEmpty(enPassantFromSquare))
	{
		return;
	}
	let enPassantToSquare = (position.enPassantTargetSquare() + 8);
	if (!position.isWhitePawn(enPassantToSquare))
	{
		return;
	}
	let sideSquare = westSquare[enPassantToSquare];
	if (sideSquare != sq_NB)
	{
		if (position.isBlackPawn(sideSquare))
		{
			addMove2(moves, position, sideSquare, Piece.blackPawn, position.enPassantTargetSquare(),
				Piece.blackPawn, enPassantToSquare, Piece.whitePawn, MoveType.enPassant);
		}
	}
	sideSquare = eastSquare[enPassantToSquare];
	if (sideSquare != sq_NB)
	{
		if (position.isBlackPawn(sideSquare))
		{
			addMove2(moves, position, sideSquare, Piece.blackPawn, position.enPassantTargetSquare(),
				Piece.blackPawn, enPassantToSquare, Piece.whitePawn, MoveType.enPassant);
		}
	}
}

function addMove2(moves, position, from, fromPiece, to, toPiece, captured, capturedPiece, type)
{
  let move = new GenMove();
	move.from = from;
	move.fromPiece = fromPiece;
	move.to = to;
	move.toPiece = toPiece;
	move.captured = captured;
	move.capturedPiece = capturedPiece;
	move.type = type;
	if (isWhite(fromPiece))
	{
		if (isLegalWhiteMove(position, move))
		{
			moves.push(move);
		}
	}
	else
	{
		if (isLegalBlackMove(position, move))
		{
			moves.push(move);
		}
	}
}

function addMove(moves, position, from, to, type)
{
	let piece = position.at(from);
	addMove2(moves, position, from, piece, to, piece, sq_NB, Piece.empty, type);
}

function addCapture(moves, position, from, to, type)
{
	let piece = position.at(from);
	let capturedPiece = position.at(to);
	addMove2(moves, position, from, piece, to, piece, to, capturedPiece, type);
}

function addWhitePromotion(moves, position, from, to)
{
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteKnight, sq_NB, Piece.empty, MoveType.promotionKnight);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteBishop, sq_NB, Piece.empty, MoveType.promotionBishop);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteRook, sq_NB, Piece.empty, MoveType.promotionRook);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteQueen, sq_NB, Piece.empty, MoveType.promotionQueen);
}

function addBlackPromotion(moves, position, from, to)
{
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackKnight, sq_NB, Piece.empty, MoveType.promotionKnight);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackBishop, sq_NB, Piece.empty, MoveType.promotionBishop);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackRook, sq_NB, Piece.empty, MoveType.promotionRook);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackQueen, sq_NB, Piece.empty, MoveType.promotionQueen);
}

function addWhiteCapturePromotion(moves, position, from, to)
{
	let capturedPiece = position.at(to);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteKnight, to, capturedPiece, MoveType.promotionKnight);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteBishop, to, capturedPiece, MoveType.promotionBishop);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteRook, to, capturedPiece, MoveType.promotionRook);
	addMove2(moves, position, from, Piece.whitePawn, to, Piece.whiteQueen, to, capturedPiece, MoveType.promotionQueen);
}

function addBlackCapturePromotion(moves, position, from, to)
{
	let capturedPiece = position.at(to);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackKnight, to, capturedPiece, MoveType.promotionKnight);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackBishop, to, capturedPiece, MoveType.promotionBishop);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackRook, to, capturedPiece, MoveType.promotionRook);
	addMove2(moves, position, from, Piece.blackPawn, to, Piece.blackQueen, to, capturedPiece, MoveType.promotionQueen);
}

function genWhitePawnMovesTo(moves, position, to)
{
	let from = (to - north);
	if (position.isWhitePawn(from))
	{
		if (rankOf(from) == rank_7)
		{
			addWhitePromotion(moves, position, from, to);
		}
		else
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
	}
	else
	{
		if (position.isEmpty(from))
		{
			if (rankOf(to) == rank_4)
			{
				from = (to - north - north);
				if (position.isWhitePawn(from))
				{
					addMove(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}

	if (position.isBlack(to))
	{
		let from = southWestSquare[to];
		if (from != sq_NB)
		{
			if (position.isWhitePawn(from))
			{
				if (rankOf(from) == rank_7)
				{
					addWhiteCapturePromotion(moves, position, from, to);
				}
				else
				{
					addCapture(moves, position, from, to, MoveType.normal);
				}
			}
		}
		from = southEastSquare[to];
		if (from != sq_NB)
		{
			if (position.isWhitePawn(from))
			{
				if (rankOf(from) == rank_7)
				{
					addWhiteCapturePromotion(moves, position, from, to);
				}
				else
				{
					addCapture(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}

	if (position.enPassantTargetSquare() == to)
	{
		let enPassantFromSquare = (position.enPassantTargetSquare() + 8);
		if (!position.isEmpty(enPassantFromSquare))
		{
			return;
		}
		let enPassantToSquare = (position.enPassantTargetSquare() - 8);
		if (!position.isBlackPawn(enPassantToSquare))
		{
			return;
		}
		let sideSquare = westSquare[enPassantToSquare];
		if (sideSquare != sq_NB)
		{
			if (position.isWhitePawn(sideSquare))
			{
				addMove2(moves, position, sideSquare, Piece.whitePawn, position.enPassantTargetSquare(),
					Piece.whitePawn, enPassantToSquare, Piece.blackPawn, MoveType.enPassant);
			}
		}
		sideSquare = eastSquare[enPassantToSquare];
		if (sideSquare != sq_NB)
		{
			if (position.isWhitePawn(sideSquare))
			{
				addMove2(moves, position, sideSquare, Piece.whitePawn, position.enPassantTargetSquare(),
					Piece.whitePawn, enPassantToSquare, Piece.blackPawn, MoveType.enPassant);
			}
		}
	}
}

function genBlackPawnMovesTo(moves, position, to)
{
	let from = (to - south);
	if (position.isBlackPawn(from))
	{
		if (rankOf(from) == rank_2)
		{
			addBlackPromotion(moves, position, from, to);
		}
		else
		{
			addMove(moves, position, from, to, MoveType.normal);
		}
	}
	else
	{
		if (position.isEmpty(from))
		{
			if (rankOf(to) == rank_5)
			{
				from = (to - south - south);
				if (position.isBlackPawn(from))
				{
					addMove(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}

	if (position.isWhite(to))
	{
		let from = northWestSquare[to];
		if (from != sq_NB)
		{
			if (position.isBlackPawn(from))
			{
				if (rankOf(from) == rank_2)
				{
					addBlackCapturePromotion(moves, position, from, to);
				}
				else
				{
					addCapture(moves, position, from, to, MoveType.normal);
				}
			}
		}
		from = northEastSquare[to];
		if (from != sq_NB)
		{
			if (position.isBlackPawn(from))
			{
				if (rankOf(from) == rank_2)
				{
					addBlackCapturePromotion(moves, position, from, to);
				}
				else
				{
					addCapture(moves, position, from, to, MoveType.normal);
				}
			}
		}
	}

	if (position.enPassantTargetSquare() == to)
	{
		let enPassantFromSquare = (position.enPassantTargetSquare() - 8);
		if (!position.isEmpty(enPassantFromSquare))
		{
			return;
		}
		let enPassantToSquare = (position.enPassantTargetSquare() + 8);
		if (!position.isWhitePawn(enPassantToSquare))
		{
			return;
		}
		let sideSquare = westSquare[enPassantToSquare];
		if (sideSquare != sq_NB)
		{
			if (position.isBlackPawn(sideSquare))
			{
				addMove2(moves, position, sideSquare, Piece.blackPawn, position.enPassantTargetSquare(),
					Piece.blackPawn, enPassantToSquare, Piece.whitePawn, MoveType.enPassant);
			}
		}
		sideSquare = eastSquare[enPassantToSquare];
		if (sideSquare != sq_NB)
		{
			if (position.isBlackPawn(sideSquare))
			{
				addMove2(moves, position, sideSquare, Piece.blackPawn, position.enPassantTargetSquare(),
					Piece.blackPawn, enPassantToSquare, Piece.whitePawn, MoveType.enPassant);
			}
		}
	}
}

function genKnightMovesTo(moves, position, to, piece)
{
	genKnightMovesTo5(moves, position, to, knightSquares[to], piece);
}

function genBishopMovesTo(moves, position, to, piece)
{
	genMovesTo(moves, position, to, northEastSquares[to], piece);
	genMovesTo(moves, position, to, southEastSquares[to], piece);
	genMovesTo(moves, position, to, southWestSquares[to], piece);
	genMovesTo(moves, position, to, northWestSquares[to], piece);
}

function genRookMovesTo(moves, position, to, piece)
{
	genMovesTo(moves, position, to, northSquares[to], piece);
	genMovesTo(moves, position, to, eastSquares[to], piece);
	genMovesTo(moves, position, to, southSquares[to], piece);
	genMovesTo(moves, position, to, westSquares[to], piece);
}

function genQueenMovesTo(moves, position, to, piece)
{
	genMovesTo(moves, position, to, northSquares[to], piece);
	genMovesTo(moves, position, to, northEastSquares[to], piece);
	genMovesTo(moves, position, to, eastSquares[to], piece);
	genMovesTo(moves, position, to, southEastSquares[to], piece);
	genMovesTo(moves, position, to, southSquares[to], piece);
	genMovesTo(moves, position, to, southWestSquares[to], piece);
	genMovesTo(moves, position, to, westSquares[to], piece);
	genMovesTo(moves, position, to, northWestSquares[to], piece);
}

function genKingMovesTo(moves, position, to, piece)
{
	genKingMovesTo5(moves, position, to, kingSquares[to], piece);
}

function genMovesTo(moves, position, to, fromSquares, piece)
{
  for (const from of fromSquares)
	{
		if (position.at(from) == piece)
		{
			if (position.isEmpty(to))
			{
				addMove(moves, position, from, to, MoveType.normal);
			}
			else
			{
				addCapture(moves, position, from, to, MoveType.normal);
			}
			break;
		}
		else
		{
			if (!position.isEmpty(from))
			{
				break;
			}
		}
	}
}

function genKingMovesTo5(moves, position, to, fromSquares, piece)
{
  for (const from of fromSquares)
	{
		if (position.at(from) == piece)
		{
			if (position.isEmpty(to))
			{
				addMove(moves, position, from, to, MoveType.normal);
				break;
			}
			else
			{
				addCapture(moves, position, from, to, MoveType.normal);
				break;
			}
		}
	}
}

function genKnightMovesTo5(moves, position, to, fromSquares, piece)
{
  for (const from of fromSquares)
	{
		if (position.at(from) == piece)
		{
			if (position.isEmpty(to))
			{
				addMove(moves, position, from, to, MoveType.normal);
				// niet breaken!
			}
			else
			{
				addCapture(moves, position, from, to, MoveType.normal);
				// niet breaken!
			}
		}
	}
}

function isAttackedByWhiteDiagonalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isBlack(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.whiteBishop || board[to] == Piece.whiteQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhiteVerticalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isBlack(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.whiteRook || board[to] == Piece.whiteQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhiteHorizontalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isBlack(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.whiteRook || board[to] == Piece.whiteQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhitePawnBoard(board, to)
{
	if (to == sq_NB)
	{
		return false;
	}
	if (board[to] == Piece.whitePawn)
	{
		return true;
	}
	return false;
}

function isAttackedByWhiteKnightBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] == Piece.whiteKnight)
		{
			return true;
		}
	}
	return false;
}

function isAttackedByWhiteKingBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] == Piece.whiteKing)
		{
			return true;
		}
	}
	return false;
}

function isAttackedByBlackDiagonalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isWhite(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.blackBishop || board[to] == Piece.blackQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackVerticalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isWhite(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.blackRook || board[to] == Piece.blackQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackHorizontalBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] != Piece.empty)
		{
			if (isWhite(board[to]))
			{
				return false;
			}
			else
			{
				if (board[to] == Piece.blackRook || board[to] == Piece.blackQueen)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackPawnBoard(board, to)
{
	if (to == sq_NB)
	{
		return false;
	}
	if (board[to] == Piece.blackPawn)
	{
		return true;
	}
	return false;
}

function isAttackedByBlackKnightBoard(board, toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] == Piece.blackKnight)
		{
			return true;
		}
	}
	return false;
}

function isAttackedByBlackKingBoard(board,  toSquares)
{
  for (const to of toSquares)
	{
		if (board[to] == Piece.blackKing)
		{
			return true;
		}
	}
	return false;
}

function isAttackedByWhiteDiagonal(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isBlack(to))
			{
				return false;
			}
			else
			{
				if (position.isWhiteBishop(to) || position.isWhiteQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackDiagonal(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isWhite(to))
			{
				return false;
			}
			else
			{
				if (position.isBlackBishop(to) || position.isBlackQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhiteVertical(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isBlack(to))
			{
				return false;
			}
			else
			{
				if (position.isWhiteRook(to) || position.isWhiteQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackVertical(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isWhite(to))
			{
				return false;
			}
			else
			{
				if (position.isBlackRook(to) || position.isBlackQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhiteHorizontal(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isBlack(to))
			{
				return false;
			}
			else
			{
				if (position.isWhiteRook(to) || position.isWhiteQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByBlackHorizontal(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (!position.isEmpty(to))
		{
			if (position.isWhite(to))
			{
				return false;
			}
			else
			{
				if (position.isBlackRook(to) || position.isBlackQueen(to))
				{
					attackSquare = to;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function isAttackedByWhitePawn(position, to)
{
	if (to == sq_NB)
	{
		return false;
	}
	if (position.isWhitePawn(to))
	{
		return true;
	}
	return false;
}

function isAttackedByBlackPawn(position, to)
{
	if (to == sq_NB)
	{
		return false;
	}
	if (position.isBlackPawn(to))
	{
		return true;
	}
	return false;
}

function isAttackedByWhiteKnight(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (position.isWhiteKnight(to))
		{
			attackSquare = to;
			return true;
		}
	}
	return false;
}

// die attackSquare wordt niet gevuld in js (geen reference argument)
// maar gebruiken we toch niet dus laat maar zitten
function isAttackedByBlackKnight(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (position.isBlackKnight(to))
		{
			attackSquare = to;
			return true;
		}
	}
	return false;
}

function isAttackedByWhiteKing(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (position.isWhiteKing(to))
		{
			attackSquare = to;
			return true;
		}
	}
	return false;
}

function isAttackedByBlackKing(position, toSquares, attackSquare)
{
  for (const to of toSquares)
	{
		if (position.isBlackKing(to))
		{
			attackSquare = to;
			return true;
		}
	}
	return false;
}

function isAttackedByWhiteBoard(board, square)
{
	if (isAttackedByWhiteDiagonalBoard(board, northEastSquares[square])) return true;
	if (isAttackedByWhiteDiagonalBoard(board, southEastSquares[square])) return true;
	if (isAttackedByWhiteDiagonalBoard(board, southWestSquares[square])) return true;
	if (isAttackedByWhiteDiagonalBoard(board, northWestSquares[square])) return true;
	if (isAttackedByWhiteVerticalBoard(board, northSquares[square])) return true;
	if (isAttackedByWhiteHorizontalBoard(board, eastSquares[square])) return true;
	if (isAttackedByWhiteVerticalBoard(board, southSquares[square])) return true;
	if (isAttackedByWhiteHorizontalBoard(board, westSquares[square])) return true;
	if (isAttackedByWhitePawnBoard(board, southEastSquare[square])) return true;
	if (isAttackedByWhitePawnBoard(board, southWestSquare[square])) return true;
	if (isAttackedByWhiteKnightBoard(board, knightSquares[square])) return true;
	if (isAttackedByWhiteKingBoard(board, kingSquares[square])) return true;
	return false;
}

function isAttackedByBlackBoard(board, square)
{
	if (isAttackedByBlackDiagonalBoard(board, northEastSquares[square])) return true;
	if (isAttackedByBlackDiagonalBoard(board, southEastSquares[square])) return true;
	if (isAttackedByBlackDiagonalBoard(board, southWestSquares[square])) return true;
	if (isAttackedByBlackDiagonalBoard(board, northWestSquares[square])) return true;
	if (isAttackedByBlackVerticalBoard(board, northSquares[square])) return true;
	if (isAttackedByBlackHorizontalBoard(board, eastSquares[square])) return true;
	if (isAttackedByBlackVerticalBoard(board, southSquares[square])) return true;
	if (isAttackedByBlackHorizontalBoard(board, westSquares[square])) return true;
	if (isAttackedByBlackPawnBoard(board, northEastSquare[square])) return true;
	if (isAttackedByBlackPawnBoard(board, northWestSquare[square])) return true;
	if (isAttackedByBlackKnightBoard(board, knightSquares[square])) return true;
	if (isAttackedByBlackKingBoard(board, kingSquares[square])) return true;
	return false;
}

function isAttackedByWhite(position, square)
{
	let attackSquare = sq_NB;
	if (isAttackedByWhiteDiagonal(position, northEastSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteDiagonal(position, southEastSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteDiagonal(position, southWestSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteDiagonal(position, northWestSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteVertical(position, northSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteHorizontal(position, eastSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteVertical(position, southSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteHorizontal(position, westSquares[square], attackSquare)) return true;
	if (isAttackedByWhitePawn(position, southEastSquare[square])) return true;
	if (isAttackedByWhitePawn(position, southWestSquare[square])) return true;
	if (isAttackedByWhiteKnight(position, knightSquares[square], attackSquare)) return true;
	if (isAttackedByWhiteKing(position, kingSquares[square], attackSquare)) return true;
	return false;
}

function isAttackedByBlack(position, square)
{
	let attackSquare = sq_NB;
	if (isAttackedByBlackDiagonal(position, northEastSquares[square], attackSquare)) return true;
	if (isAttackedByBlackDiagonal(position, southEastSquares[square], attackSquare)) return true;
	if (isAttackedByBlackDiagonal(position, southWestSquares[square], attackSquare)) return true;
	if (isAttackedByBlackDiagonal(position, northWestSquares[square], attackSquare)) return true;
	if (isAttackedByBlackVertical(position, northSquares[square], attackSquare)) return true;
	if (isAttackedByBlackHorizontal(position, eastSquares[square], attackSquare)) return true;
	if (isAttackedByBlackVertical(position, southSquares[square], attackSquare)) return true;
	if (isAttackedByBlackHorizontal(position, westSquares[square], attackSquare)) return true;
	if (isAttackedByBlackPawn(position, northEastSquare[square])) return true;
	if (isAttackedByBlackPawn(position, northWestSquare[square])) return true;
	if (isAttackedByBlackKnight(position, knightSquares[square], attackSquare)) return true;
	if (isAttackedByBlackKing(position, kingSquares[square], attackSquare)) return true;
	return false;
}

function initMoveGenerator()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const square of boardSquares)
	{
 		if (rankOf(square) <= rank_7 && fileOf(square) <= file_7)
		{
			let to = square + northEast;
			northEastSquare.push(to);
		}
		else
		{
			northEastSquare.push(sq_NB);
		}
		if (fileOf(square) <= file_7)
		{
			let to = square + east;
			eastSquare.push(to);
		}
		else
		{
			eastSquare.push(sq_NB);
		}
		if (rankOf(square) >= rank_2 && fileOf(square) <= file_7)
		{
			let to = square + southEast;
			southEastSquare.push(to);
		}
		else
		{
			southEastSquare.push(sq_NB);
		}
		if (rankOf(square) >= rank_2 && fileOf(square) >= file_2)
		{
			let to = square + southWest;
			southWestSquare.push(to);
		}
		else
		{
			southWestSquare.push(sq_NB);
		}
		if (fileOf(square) >= file_2)
		{
			let to = square + west;
			westSquare.push(to);
		}
		else
		{
			westSquare.push(sq_NB);
		}
		if (rankOf(square) <= rank_7 && fileOf(square) >= file_2)
		{
			let to = square + northWest;
			northWestSquare.push(to);
		}
		else
		{
			northWestSquare.push(sq_NB);
		}
	}

  for (const square of boardSquares)
	{
  	northSquares.push(getNorthSquares(square));
		northEastSquares.push(getNorthEastSquares(square));
		eastSquares.push(getEastSquares(square));
		southEastSquares.push(getSouthEastSquares(square));
		southSquares.push(getSouthSquares(square));
		southWestSquares.push(getSouthWestSquares(square));
		westSquares.push(getWestSquares(square));
		northWestSquares.push(getNorthWestSquares(square));
		kingSquares.push(getKingSquares(square));
		knightSquares.push(getKnightSquares(square));
	}
}

function generateMoves(position)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		let numberOfWhitePieces = position.numberOfWhitePieces();
    for (const square of boardSquares)
		{
			if (!numberOfWhitePieces) break;
			if (position.isWhite(square))
			{
				switch (position.at(square))
				{
					case Piece.whitePawn:
						genWhitePawnMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					case Piece.whiteKnight:
						genWhiteKnightMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					case Piece.whiteBishop:
						genWhiteBishopMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					case Piece.whiteRook:
						genWhiteRookMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					case Piece.whiteQueen:
						genWhiteQueenMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					case Piece.whiteKing:
						genWhiteKingMoves(moves, position, square);
						numberOfWhitePieces--;
						break;
					default:
						break;
				}
			}
		}
		genWhiteEnPassantMoves(moves, position);
		genWhiteCastlingMoves(moves, position);
	}
	else
	{
		let numberOfBlackPieces = position.numberOfBlackPieces();
    for (const square of boardSquares)
		{
			if (!numberOfBlackPieces) break;
			if (position.isBlack(square))
			{
				switch (position.at(square))
				{
					case Piece.blackPawn:
						genBlackPawnMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					case Piece.blackKnight:
						genBlackKnightMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					case Piece.blackBishop:
						genBlackBishopMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					case Piece.blackRook:
						genBlackRookMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					case Piece.blackQueen:
						genBlackQueenMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					case Piece.blackKing:
						genBlackKingMoves(moves, position, square);
						numberOfBlackPieces--;
						break;
					default:
						break;
				}
			}
		}
		genBlackEnPassantMoves(moves, position);
		genBlackCastlingMoves(moves, position);
	}

	return moves;
}

function generatePawnMoves(position, toSquare)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genWhitePawnMovesTo(moves, position, toSquare);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genBlackPawnMovesTo(moves, position, toSquare);
		}
	}

	return moves;
}

function generateKnightMoves(position, toSquare)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genKnightMovesTo(moves, position, toSquare, Piece.whiteKnight);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genKnightMovesTo(moves, position, toSquare, Piece.blackKnight);
		}
	}

	return moves;
}

function generateBishopMoves(position, toSquare)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genBishopMovesTo(moves, position, toSquare, Piece.whiteBishop);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genBishopMovesTo(moves, position, toSquare, Piece.blackBishop);
		}
	}

	return moves;
}

function generateRookMoves(position, toSquare)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genRookMovesTo(moves, position, toSquare, Piece.whiteRook);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genRookMovesTo(moves, position, toSquare, Piece.blackRook);
		}
	}

	return moves;
}

function generateQueenMoves(position, toSquare)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genQueenMovesTo(moves, position, toSquare, Piece.whiteQueen);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genQueenMovesTo(moves, position, toSquare, Piece.blackQueen);
		}
	}

	return moves;
}

function generateKingMoves(position, toSquare)
{
	let moves = [];

	let kingSquare = sq_NB;
	if (position.isWhiteToMove())
	{
		kingSquare = position.whiteKing();
	}
	else
	{
		kingSquare = position.blackKing();
	}

	if (kingSquare == sq_NB)
	{
		return moves;
	}

	if (position.isWhiteToMove())
	{
		genWhiteKingMoves(moves, position, kingSquare);
		genWhiteCastlingMoves(moves, position);
	}
	else
	{
		genBlackKingMoves(moves, position, kingSquare);
		genBlackCastlingMoves(moves, position);
	}

	return moves;
}

function generateKingMovesWithoutCastleMoves(position, toSquare)
{
	let moves = [];

	let kingSquare = sq_NB;
	if (position.isWhiteToMove())
	{
		kingSquare = position.whiteKing();
	}
	else
	{
		kingSquare = position.blackKing();
	}

	if (kingSquare == sq_NB)
	{
		return moves;
	}

	if (position.isWhiteToMove())
	{
		if (!position.isWhite(toSquare))
		{
			genKingMovesTo(moves, position, toSquare, Piece.whiteKing);
		}
	}
	else
	{
		if (!position.isBlack(toSquare))
		{
			genKingMovesTo(moves, position, toSquare, Piece.blackKing);
		}
	}

	return moves;
}

function generateQueenSideCastleMove(position)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhiteKing(position.whiteCastleKingFrom()))
		{
			return moves;
		}
		if (!position.isWhiteQueenSideCastleAllowed())
		{
			return moves;
		}
		genWhiteQueenSideCastlingMove(moves, position);
		return moves;
	}
	else
	{
		if (!position.isBlackKing(position.blackCastleKingFrom()))
		{
			return moves;
		}
		if (!position.isBlackQueenSideCastleAllowed())
		{
			return moves;
		}
		genBlackQueenSideCastlingMove(moves, position);
		return moves;
	}
}

function generateKingSideCastleMove(position)
{
	let moves = [];

	if (position.isWhiteToMove())
	{
		if (!position.isWhiteKing(position.whiteCastleKingFrom()))
		{
			return moves;
		}
		if (!position.isWhiteKingSideCastleAllowed())
		{
			return moves;
		}
		genWhiteKingSideCastlingMove(moves, position);
		return moves;
	}
	else
	{
		if (!position.isBlackKing(position.blackCastleKingFrom()))
		{
			return moves;
		}
		if (!position.isBlackKingSideCastleAllowed())
		{
			return moves;
		}
		genBlackKingSideCastlingMove(moves, position);
		return moves;
	}
}

function isCheck(position)
{
	if (position.isWhiteToMove())
	{
		if (position.whiteKing() != sq_NB)
		{
			return isAttackedByBlack(position, position.whiteKing());
		}
	}
	else
	{
		if (position.blackKing() != sq_NB)
		{
			return isAttackedByWhite(position, position.blackKing());
		}
	}
	return false;
}

// isCheck (met exclude en attack) is niet nodig (n zou voor dubbele naam zorgen)
// numberOfChecks(position) is niet nodig

function generateFromMoves(position, from)
{
	let genMoves = generateMoves(position);
	let genFromMoves = [];
  for (const genMove of genMoves)
	{
		if (genMove.from == from)
		{
			genFromMoves.push(genMove);
		}
	}
	return genFromMoves;
}

function generateToMoves(position, to)
{
	let genMoves = generateMoves(position);
	let genToMoves = [];
  for (const genMove of genMoves)
	{
		if (genMove.to == to)
		{
			genToMoves.push(genMove);
		}
	}
	return genToMoves;
}

function generateFromToMoves(position, from, to)
{
	let genMoves = generateMoves(position);
	let genFromToMoves = [];
  for (const genMove of genMoves)
	{
		if (genMove.from == from && genMove.to == to)
		{
			genFromToMoves.push(genMove);
		}
	}
	return genFromToMoves;
}

function buildGenMove(position, from, to, type)
{
	let move = new GenMove();
	if (type == MoveType.null)
	{
		return move;
	}

	move.from = from;
	move.to = to;
	move.type = type;
	if (type == MoveType.normal)
	{
		if (position.at(move.to) != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = position.at(move.to);
		}
		move.fromPiece = position.at(move.from);
		move.toPiece = move.fromPiece;
	}
	else if (type == MoveType.castle)
	{
		move.fromPiece = position.at(move.from);
		move.toPiece = move.fromPiece;
	}
	else if (type == MoveType.enPassant)
	{
		move.fromPiece = position.at(move.from);
		move.toPiece = move.fromPiece;
		if (isWhite(move.fromPiece))
		{
			move.captured = (move.to - 8);
			move.capturedPiece = Piece.blackPawn;
		}
		else
		{
			move.captured = (move.to + 8);
			move.capturedPiece = Piece.whitePawn;
		}
	}
	else if (type == MoveType.promotionQueen)
	{
		if (position.at(move.to) != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = position.at(move.to);
		}
		move.fromPiece = position.at(move.from);
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteQueen;
		}
		else
		{
			move.toPiece = Piece.blackQueen;
		}
	}
	else if (type == MoveType.promotionRook)
	{
		if (position.at(move.to) != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = position.at(move.to);
		}
		move.fromPiece = position.at(move.from);
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteRook;
		}
		else
		{
			move.toPiece = Piece.blackRook;
		}
	}
	else if (type == MoveType.promotionBishop)
	{
		if (position.at(move.to) != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = position.at(move.to);
		}
		move.fromPiece = position.at(move.from);
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteBishop;
		}
		else
		{
			move.toPiece = Piece.blackBishop;
		}
	}
	else if (type == MoveType.promotionKnight)
	{
		if (position.at(move.to) != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = position.at(move.to);
		}
		move.fromPiece = position.at(move.from);
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteKnight;
		}
		else
		{
			move.toPiece = Piece.blackKnight;
		}
	}
	return move;
}

function buildGenMove(board, from, to, type)
{
	let move = new GenMove();
	if (type == MoveType.null)
	{
		return move;
	}

	move.from = from;
	move.to = to;
	move.type = type;
	if (type == MoveType.normal)
	{
		if (board[move.to] != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = board[move.to];
		}
		move.fromPiece = board[move.from];
		move.toPiece = move.fromPiece;
	}
	else if (type == MoveType.castle)
	{
		move.fromPiece = board[move.from];
		move.toPiece = move.fromPiece;
	}
	else if (type == MoveType.enPassant)
	{
		move.fromPiece = board[move.from];
		move.toPiece = move.fromPiece;
		if (isWhite(move.fromPiece))
		{
			move.captured = (move.to - 8);
			move.capturedPiece = Piece.blackPawn;
		}
		else
		{
			move.captured = (move.to + 8);
			move.capturedPiece = Piece.whitePawn;
		}
	}
	else if (type == MoveType.promotionQueen)
	{
		if (board[move.to] != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = board[move.to];
		}
		move.fromPiece = board[move.from];
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteQueen;
		}
		else
		{
			move.toPiece = Piece.blackQueen;
		}
	}
	else if (type == MoveType.promotionRook)
	{
		if (board[move.to] != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = board[move.to];
		}
		move.fromPiece = board[move.from];
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteRook;
		}
		else
		{
			move.toPiece = Piece.blackRook;
		}
	}
	else if (type == MoveType.promotionBishop)
	{
		if (board[move.to] != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = board[move.to];
		}
		move.fromPiece = board[move.from];
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteBishop;
		}
		else
		{
			move.toPiece = Piece.blackBishop;
		}
	}
	else if (type == MoveType.promotionKnight)
	{
		if (board[move.to] != Piece.empty)
		{
			move.captured = move.to;
			move.capturedPiece = board[move.to];
		}
		move.fromPiece = board[move.from];
		if (isWhite(move.fromPiece))
		{
			move.toPiece = Piece.whiteKnight;
		}
		else
		{
			move.toPiece = Piece.blackKnight;
		}
	}
	return move;
}

const north 						=   8; // vertical
const south 						=  -8; // vertical
const east 	      			=   1; // horizontal
const west 	      			=  -1; // horizontal
const northNorthEast 		=  17; // knight
const northEastEast 		=  10; // knight
const northEast 				=   9; // diagonal
const northWestWest 		=   6; // knight
const northNorthWest 		=  15; // knight
const northWest 				=   7; // diagonal
const southSouthWest 		= -17; // knight
const southWestWest 		= -10; // knight
const southWest 				=  -9; // diagonal
const southEastEast 		=  -6; // knight
const southSouthEast 		= -15; // knight
const southEast 				=  -7; // diagonal

function getNorthSquares(square)
{
	let squares = [];
	let step = north;
	let to = square;
	while (rankOf(to) <= rank_7)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getNorthEastSquares(square)
{
	let squares = [];
	let step = northEast;
	let to = square;
	while (rankOf(to) <= rank_7 && fileOf(to) <= file_7)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getEastSquares(square)
{
	let squares = [];
	let step = east;
	let to = square;
	while (fileOf(to) <= file_7)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getSouthEastSquares(square)
{
	let squares = [];
	let step = southEast;
	let to = square;
	while (rankOf(to) >= rank_2 && fileOf(to) <= file_7)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getSouthSquares(square)
{
	let squares = [];
	let step = south;
	let to = square;
	while (rankOf(to) >= rank_2)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getSouthWestSquares(square)
{
	let squares = [];
	let step = southWest;
	let to = square;
	while (rankOf(to) >= rank_2 && fileOf(to) >= file_2)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getWestSquares(square)
{
	let squares = [];
	let step = west;
	let to = square;
	while (fileOf(to) >= file_2)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getNorthWestSquares(square)
{
	let squares = [];
	let step = northWest;
	let to = square;
	while (rankOf(to) <= rank_7 && fileOf(to) >= file_2)
	{
		to = to + step;
		squares.push(to);
	}
	return squares;
}

function getKnightSquares(square)
{
	let squares = [];
	if (rankOf(square) <= rank_6 && fileOf(square) <= file_7)
	{
		let to = square + northNorthEast;
		squares.push(to);
	}
	if (rankOf(square) <= rank_7 && fileOf(square) <= file_6)
	{
		let to = square + northEastEast;
		squares.push(to);
	}
	if (rankOf(square) >= rank_2 && fileOf(square) <= file_6)
	{
		let to = square + southEastEast;
		squares.push(to);
	}
	if (rankOf(square) >= rank_3 && fileOf(square) <= file_7)
	{
		let to = square + southSouthEast;
		squares.push(to);
	}
	if (rankOf(square) >= rank_3 && fileOf(square) >= file_2)
	{
		let to = square + southSouthWest;
		squares.push(to);
	}
	if (rankOf(square) >= rank_2 && fileOf(square) >= file_3)
	{
		let to = square + southWestWest;
		squares.push(to);
	}
	if (rankOf(square) <= rank_7 && fileOf(square) >= file_3)
	{
		to = square + northWestWest;
		squares.push(to);
	}
	if (rankOf(square) <= rank_6 && fileOf(square) >= file_2)
	{
		let to = square + northNorthWest;
		squares.push(to);
	}
	return squares;
}

function getKingSquares(square)
{
	let squares = [];
	if (rankOf(square) <= rank_7)
	{
		let to = square + north;
		squares.push(to);
	}
	if (rankOf(square) <= rank_7 && fileOf(square) <= file_7)
	{
		let to = square + northEast;
		squares.push(to);
	}
	if (fileOf(square) <= file_7)
	{
		let to = square + east;
		squares.push(to);
	}
	if (rankOf(square) >= rank_2 && fileOf(square) <= file_7)
	{
		let to = square + southEast;
		squares.push(to);
	}
	if (rankOf(square) >= rank_2)
	{
		let to = square + south;
		squares.push(to);
	}
	if (rankOf(square) >= rank_2 && fileOf(square) >= file_2)
	{
		let to = square + southWest;
		squares.push(to);
	}
	if (fileOf(square) >= file_2)
	{
		let to = square + west;
		squares.push(to);
	}
	if (rankOf(square) <= rank_7 && fileOf(square) >= file_2)
	{
		let to = square + northWest;
		squares.push(to);
	}
	return squares;
}

const MoveType =
{
  none : 0,  // ipv null want die is reserved
	normal : 1,
	castle : 2,
	enPassant : 3,
	promotionKnight : 4,
	promotionBishop : 5,
	promotionRook : 6,
	promotionQueen : 7
};

function pieceToPieceFigurine(piece)
{
	switch (piece)
	{
		case Piece.whitePawn:
		case Piece.blackPawn:
			return PieceFigurine.pawn;
		case Piece.whiteKnight:
		case Piece.blackKnight:
			return PieceFigurine.knight;
		case Piece.whiteBishop:
		case Piece.blackBishop:
			return PieceFigurine.bishop;
		case Piece.whiteRook:
		case Piece.blackRook:
			return PieceFigurine.rook;
		case Piece.whiteQueen:
		case Piece.blackQueen:
			return PieceFigurine.queen;
		case Piece.whiteKing:
		case Piece.blackKing:
			return PieceFigurine.king;
		case Piece.empty:
			return PieceFigurine.pawn;
	}
}

function moveToString(position, move, endOfLine)
{
 	let string = '';
	if (move.empty())
	{
		string += "--";
	}
	else if (isPawn(move.fromPiece))
	{
    if (move.isCapture())
    {
			let fromFile = fileOf(move.from);
			string = fileToString(fromFile) + "x" + squareToAlphaNumericString(move.to);
    }
    else
    {
 			string = squareToAlphaNumericString(move.to);
    }
		if (move.isPromotion())
		{
			string += "=";
			string += pieceChar(pieceToPieceFigurine(move.toPiece));
		}
	}
	else if (move.fromPiece == Piece.whiteKing && move.isCastle())
	{
		if (move.to == whiteQueenSideCastleKingTo)
		{
			string = "O-O-O";
		}
		else
		{
			string = "O-O";
		}
	}
	else if (move.fromPiece == Piece.blackKing && move.isCastle())
	{
		if (move.to == blackQueenSideCastleKingTo)
		{
			string = "O-O-O";
		}
		else
		{
			string = "O-O";
		}
	}
	else
	{
		string = pieceChar(pieceToPieceFigurine(move.fromPiece));
    let genMoves = [];
    if (isWhite(move.fromPiece))
    {
      if (move.fromPiece == Piece.whiteKnight)
      {
        genMoves = generateKnightMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.whiteBishop)
      {
        genMoves = generateBishopMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.whiteRook)
      {
        genMoves = generateRookMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.whiteQueen)
      {
        genMoves = generateQueenMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.whiteKing)
      {
        genMoves = generateKingMovesWithoutCastleMoves(position, move.to);
      }
    }
    else
    {
      if (move.fromPiece == Piece.blackKnight)
      {
        genMoves = generateKnightMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.blackBishop)
      {
        genMoves = generateBishopMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.blackRook)
      {
        genMoves = generateRookMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.blackQueen)
      {
        genMoves = generateQueenMoves(position, move.to);
      }
      else if (move.fromPiece == Piece.blackKing)
      {
        genMoves = generateKingMovesWithoutCastleMoves(position, move.to);
      }
    }
    if (genMoves.length > 1)
    {
      // ambigious
      let count = 0;
      let fromFile = fileOf(move.from);
     	for (const genMove of genMoves)
      {
        if (fileOf(genMove.from) == fromFile)
        {
          count++;
        }
      }
      if (count == 1)
      {
        // uniek via fileOf
 				let fromFile = fileOf(move.from);
				string += fileToString(fromFile);
      }
      else
      {
        count = 0;
        let fromRank = rankOf(move.from);
       	for (const genMove of genMoves)
        {
          if (rankOf(genMove.from) == fromRank)
          {
            count++;
          }
        }
        if (count == 1)
        {
          // uniek via rankOf
          string += rankToString(fromRank);
        }
        else
        {
          // complete from coordinaat is nodig
 					string += squareToAlphaNumericString(move.from);
        }
      }
    }
		if (move.isCapture())
		{
       string += "x";
		}
		string += squareToAlphaNumericString(move.to);
	}
	if (!move.empty())
	{
  	let forwardPosition = position.copyFrom();
    forwardPosition.forward(move);
  	if (isCheck(forwardPosition))
	  {
  		let moves = generateMoves(forwardPosition);
	  	if (moves.length == 0)
		  {
			  string += "#";
  		}
	  	else
		  {
			  string += "+";
  		}
	  }
	}
	return string;
}
class CoordinateMetrics
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function drawCoordinates(ctx,
  boardRect,
  boardProperties,
  coordinate,
  coordinatesType,
  coordinatesColor,
  flipped,
  marginSize) // extra argument tov c++ omdat hij variabel is
{
 	let topCoordinates = (coordinatesType == CoordinatesType.allSides ||
		coordinatesType == CoordinatesType.topLeft ||
		coordinatesType == CoordinatesType.topRight);
	let leftCoordinates = (coordinatesType == CoordinatesType.allSides ||
		coordinatesType == CoordinatesType.topLeft ||
		coordinatesType == CoordinatesType.bottomLeft);
	let rightCoordinates =	(coordinatesType == CoordinatesType.allSides ||
		coordinatesType == CoordinatesType.topRight ||
		coordinatesType == CoordinatesType.bottomRight);
	let bottomCoordinates = (coordinatesType == CoordinatesType.allSides ||
		coordinatesType == CoordinatesType.bottomLeft ||
		coordinatesType == CoordinatesType.bottomRight);

	ctx.font = (coordinate.fontSize).toString() + "px serif";
	ctx.fillStyle = coordinatesColor;
  let textHeight = coordinate.height;

	if (leftCoordinates)
	{
		let nr = Board_Size;
		if (flipped)
		{
			nr = 1;
		}
    for (let rank = 0; rank < Board_Size; rank++)
		{
			let textWidth = ctx.measureText(nr).width;
			let top = boardRect.Top + 1 + rank * boardProperties.squareWidth;
			top += (boardProperties.squareWidth - textHeight) / 2 + textHeight;
			let textLeft = boardRect.Left - marginSize + (marginSize - textWidth) / 2;
      ctx.fillText(nr, textLeft, top);
			if (flipped)
			{
				nr++;
			}
			else
			{
				nr--;
			}
		}
	}

	if (rightCoordinates)
	{
		let nr = Board_Size;
		if (flipped)
		{
			nr = 1;
		}
    for (let rank = 0; rank < Board_Size; rank++)
		{
      let textWidth = ctx.measureText(nr).width;
			let top = boardRect.Top + 1 + rank * boardProperties.squareWidth;
			top += (boardProperties.squareWidth - textHeight) / 2 + textHeight;
			let textLeft = boardRect.Left + boardRect.Width() +
        (marginSize - textWidth) / 2;
      ctx.fillText(nr, textLeft, top);
			if (flipped)
			{
				nr++;
			}
			else
			{
				nr--;
			}
		}
	}

	if (topCoordinates)
	{
		let fileChar = 'a';
		if (flipped)
		{
			fileChar = 'h';
		}
    for (let file = 0; file < Board_Size; file++)
		{
			let charString = fileChar;
			let left = boardRect.Left + 1 + file * boardProperties.squareWidth;
      let textWidth = ctx.measureText(charString).width;
			let textLeft = left + (boardProperties.squareWidth - textWidth) / 2;
			let textTop = boardRect.Top - (marginSize - textHeight) / 2 - 2;
      // de extra -2 is natte vinger
      if (fileChar == 'g')
      {
        textTop -= 2; // anders is ie zichtbaar lager dan de anderen
      }
      ctx.fillText(charString, textLeft, textTop);
			if (flipped)
			{
        let charCode = fileChar.charCodeAt(0);
        charCode--;
        fileChar = String.fromCharCode(charCode);
			}
			else
			{
        let charCode = fileChar.charCodeAt(0);
        charCode++;
        fileChar = String.fromCharCode(charCode);
			}
		}
	}

	if (bottomCoordinates)
	{
		let fileChar = 'a';
		if (flipped)
		{
			fileChar = 'h';
		}
    for (let file = 0; file < Board_Size; file++)
		{
			let charString = fileChar;
			let left = boardRect.Left + 1 + file * boardProperties.squareWidth;
      let textWidth = ctx.measureText(charString).width;
			let textLeft = left + (boardProperties.squareWidth - textWidth) / 2;
			let textTop = boardRect.Top + boardRect.Height() +
        (marginSize - textHeight) / 2 + textHeight - 2;
      // de extra -2 is natte vinger
      if (fileChar == 'g')
      {
        textTop -= 2; // anders is ie zichtbaar lager dan de anderen
      }
      ctx.fillText(charString, textLeft, textTop);
			if (flipped)
			{
        let charCode = fileChar.charCodeAt(0);
        charCode--;
        fileChar = String.fromCharCode(charCode);
			}
			else
			{
        let charCode = fileChar.charCodeAt(0);
        charCode++;
        fileChar = String.fromCharCode(charCode);
			}
		}
	}
}

function calcCoordinateMetrics(ctx, fontSize)
{
	let coordinateMetrics = new CoordinateMetrics();
	coordinateMetrics.fontSize = fontSize;
	coordinateMetrics.height = fontSize;
	coordinateMetrics.width = fontSize;
	return coordinateMetrics;
}
var whitePawnBitmap = null;
var whiteKnightBitmap = null;
var whiteBishopBitmap = null;
var whiteRookBitmap = null;
var whiteQueenBitmap = null;
var whiteKingBitmap = null;
var blackPawnBitmap = null;
var blackKnightBitmap = null;
var blackBishopBitmap = null;
var blackRookBitmap = null;
var blackQueenBitmap = null;
var blackKingBitmap = null;
var pieceBitmapsInitialized = false;

function initMeridaPieceBitmaps()
{
  whitePawnBitmap = bitmapManager.bitmap("images/pieces/Merida/wP");
 	whiteKnightBitmap = bitmapManager.bitmap("images/pieces/Merida/wN");
  whiteBishopBitmap = bitmapManager.bitmap("images/pieces/Merida/wB");
 	whiteRookBitmap = bitmapManager.bitmap("images/pieces/Merida/wR");
  whiteQueenBitmap = bitmapManager.bitmap("images/pieces/Merida/wQ");
 	whiteKingBitmap = bitmapManager.bitmap("images/pieces/Merida/wK");
  blackPawnBitmap = bitmapManager.bitmap("images/pieces/Merida/bP");
 	blackKnightBitmap = bitmapManager.bitmap("images/pieces/Merida/bN");
  blackBishopBitmap = bitmapManager.bitmap("images/pieces/Merida/bB");
 	blackRookBitmap = bitmapManager.bitmap("images/pieces/Merida/bR");
  blackQueenBitmap = bitmapManager.bitmap("images/pieces/Merida/bQ");
 	blackKingBitmap = bitmapManager.bitmap("images/pieces/Merida/bK");
}

function initCBurnettPieceBitmaps()
{
  whitePawnBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wN");
  whiteBishopBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wB");
 	whiteRookBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wR");
  whiteQueenBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = bitmapManager.bitmap("images/pieces/CBurnett/wK");
  blackPawnBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bP");
 	blackKnightBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bN");
  blackBishopBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bB");
 	blackRookBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bR");
  blackQueenBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bQ");
 	blackKingBitmap = bitmapManager.bitmap("images/pieces/CBurnett/bK");
}

function initPieceBitmaps(pieces)
{
  if (pieces == 0)
  {
    initCBurnettPieceBitmaps();
  }
  else
  {
    initMeridaPieceBitmaps();
  }
}

function getPieceBitmap(piece)
{
  switch (piece)
	{
    case Piece.whitePawn:
      return whitePawnBitmap;
      break;
    case Piece.whiteKnight:
      return whiteKnightBitmap;
      break;
    case Piece.whiteBishop:
      return whiteBishopBitmap;
      break;
    case Piece.whiteRook:
      return whiteRookBitmap;
      break;
    case Piece.whiteQueen:
      return whiteQueenBitmap;
      break;
    case Piece.whiteKing:
      return whiteKingBitmap;
      break;
    case Piece.blackPawn:
      return blackPawnBitmap;
      break;
    case Piece.blackKnight:
      return blackKnightBitmap;
      break;
    case Piece.blackBishop:
      return blackBishopBitmap;
      break;
    case Piece.blackRook:
      return blackRookBitmap;
      break;
    case Piece.blackQueen:
      return blackQueenBitmap;
      break;
    case Piece.blackKing:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function drawPiece(ctx, rect, piece)
{
  if (piece == Piece.empty) return;
	let bitmap = getPieceBitmap(piece);
  ctx.drawImage(bitmap, rect.Left, rect.Top, rect.Width(), rect.Height());
}
function portableFenToPosition(fen)
{
	let position = new GamePosition();
	let len = fen.length;

 	let words = fen.split(" ");
	if (words.length < 2)
	{
		return position;
	}

	let toMove = words[1];
	if (toMove.length)
	{
		if (toMove[0] == 'w')
		{
			position.setWhiteToMove();
		}
		else if (toMove[0] == 'b')
		{
			position.setBlackToMove();
		}
	}

 	let ranks = words[0].split("/");
	if (ranks.length != 8)
	{
		return position;
	}
	let startSquare = a8;
	for (const rank of ranks)
	{
		let square = startSquare;
		let len = rank.length;
		for (let i = 0; i < len; i++)
		{
			if (square == startSquare + 8)
			{
				return position; // error, teveel op de rij
			}
			let hit = true;
			switch (rank[i])
			{
				case 'p':
					position.setPiece(square, Piece.blackPawn);
					break;
				case 'n':
					position.setPiece(square, Piece.blackKnight);
					break;
				case 'b':
					position.setPiece(square, Piece.blackBishop);
					break;
				case 'r':
					position.setPiece(square, Piece.blackRook);
					break;
				case 'q':
					position.setPiece(square, Piece.blackQueen);
					break;
				case 'k':
					position.setPiece(square, Piece.blackKing);
					break;
				case 'P':
					position.setPiece(square, Piece.whitePawn);
					break;
				case 'N':
					position.setPiece(square, Piece.whiteKnight);
					break;
				case 'B':
					position.setPiece(square, Piece.whiteBishop);
					break;
				case 'R':
					position.setPiece(square, Piece.whiteRook);
					break;
				case 'Q':
					position.setPiece(square, Piece.whiteQueen);
					break;
				case 'K':
					position.setPiece(square, Piece.whiteKing);
					break;
				default:
					hit = false;
					break;
			}
			if (hit)
			{
				square = square + 1;
			}
			else
			{
				if (!isNaN(rank[i]))
				{
					square = square + StrToIntDef(rank[i], 0);
				}
			}
		}
		startSquare = startSquare - 8;
	}

 	if (words.length >= 3)
	{
		let boardState = new BoardState(); // classic chess
		let castling = words[2];
		if (castling.length)
		{
			if (castling[0] != '-')
			{
				let len = castling.length;
				if (castling[0] >= 'A' && castling[0] <= 'H')
				{
 					boardState.chess960 = true; // chess960
          // vanaf hier nieuwe code ter ondersteuning chess960
					boardState.whiteCastleKingFrom = position.whiteKing();
					boardState.blackCastleKingFrom = position.blackKing();
					if (len == 4)
					{
						let string = castling.charAt(0).toLowerCase();
						string += "1";
						boardState.whiteKingSideCastleRookFrom = alphaNumericStringToSquare(string);
						if (position.isWhiteRook(boardState.whiteKingSideCastleRookFrom))
						{
							boardState.whiteKingSideCastleAllowed = true;
						}
						string = castling.charAt(1).toLowerCase();
						string += "1";
						boardState.whiteQueenSideCastleRookFrom = alphaNumericStringToSquare(string);
						if (position.isWhiteRook(boardState.whiteQueenSideCastleRookFrom))
						{
							boardState.whiteQueenSideCastleAllowed = true;
						}
						string = castling.charAt(2).toLowerCase();
						string += "8";
						boardState.blackKingSideCastleRookFrom = alphaNumericStringToSquare(string);
						if (position.isBlackRook(boardState.blackKingSideCastleRookFrom))
						{
							boardState.blackKingSideCastleAllowed = true;
						}
						string = castling.charAt(3).toLowerCase();
						string += "8";
						boardState.blackQueenSideCastleRookFrom = alphaNumericStringToSquare(string);
						if (position.isBlackRook(boardState.blackQueenSideCastleRookFrom))
						{
							boardState.blackQueenSideCastleAllowed = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < len; i++)
					{
						switch (castling[i])
						{
							case 'K':
								if (position.isWhiteKing(boardState.whiteCastleKingFrom) && position.isWhiteRook(boardState.whiteKingSideCastleRookFrom))
								{
									boardState.whiteKingSideCastleAllowed = true;
								}
								break;
							case 'Q':
								if (position.isWhiteKing(boardState.whiteCastleKingFrom) && position.isWhiteRook(boardState.whiteQueenSideCastleRookFrom))
								{
									boardState.whiteQueenSideCastleAllowed = true;
								}
								break;
							case 'k':
								if (position.isBlackKing(boardState.blackCastleKingFrom) && position.isBlackRook(boardState.blackKingSideCastleRookFrom))
								{
									boardState.blackKingSideCastleAllowed = true;
								}
								break;
							case 'q':
								if (position.isBlackKing(boardState.blackCastleKingFrom) && position.isBlackRook(boardState.blackQueenSideCastleRookFrom))
								{
									boardState.blackQueenSideCastleAllowed = true;
								}
								break;
						}
					}
				}
			}
		}
		if (words.length >= 4)
		{
			let enpassant = words[3];
			if (enpassant.length)
			{
				if (enpassant[0] != '-')
				{
					boardState.enPassantTargetSquare = alphaNumericStringToSquare(enpassant);
					if (rankOf(boardState.enPassantTargetSquare) == rank_6)
					{
						let fromSquare = boardState.enPassantTargetSquare + 8;
						let toSquare = boardState.enPassantTargetSquare - 8;
						if (!position.isEmpty(fromSquare) || !position.isBlackPawn(toSquare))
						{
							boardState.enPassantTargetSquare = sq_NB;
						}
					}
					else if (rankOf(boardState.enPassantTargetSquare) == rank_3)
					{
						let fromSquare = boardState.enPassantTargetSquare - 8;
						let toSquare = boardState.enPassantTargetSquare + 8;
						if (!position.isEmpty(fromSquare) || !position.isWhitePawn(toSquare))
						{
							boardState.enPassantTargetSquare = sq_NB;
						}
					}
					else
					{
						boardState.enPassantTargetSquare = sq_NB;
					}
				}
			}
		}
		position.setState(boardState);
	}
	return position;
}

function positionToPortableFen(position)
{
	let fen = '';
	let startSquare = a8;
	for (let rank = 7; rank >= 0; rank--)
	{
		let square = startSquare;
		let numberOfEmptySquares = 0;
		for (let file = 0; file < 8; file++)
		{
			if (position.isEmpty(square))
			{
				numberOfEmptySquares++;
			}
			else
			{
				if (numberOfEmptySquares)
				{
					fen += numberOfEmptySquares;
					numberOfEmptySquares = 0;
				}
				switch (position.at(square))
				{
					case Piece.empty:
						break;
					case Piece.whitePawn:
						fen += 'P';
						break;
					case Piece.whiteKnight:
						fen += 'N';
						break;
					case Piece.whiteBishop:
						fen += 'B';
						break;
					case Piece.whiteRook:
						fen += 'R';
						break;
					case Piece.whiteQueen:
						fen += 'Q';
						break;
					case Piece.whiteKing:
						fen += 'K';
						break;
					case Piece.blackPawn:
						fen += 'p';
						break;
					case Piece.blackKnight:
						fen += 'n';
						break;
					case Piece.blackBishop:
						fen += 'b';
						break;
					case Piece.blackRook:
						fen += 'r';
						break;
					case Piece.blackQueen:
						fen += 'q';
						break;
					case Piece.blackKing:
						fen += 'k';
						break;
				}
			}
			square = square + 1;
		}
		if (numberOfEmptySquares)
		{
			fen += numberOfEmptySquares;
		}
		startSquare = (startSquare - 8);
		if (rank > 0)
		{
			fen += "/";
		}
	}
	fen += " ";
	if (position.isWhiteToMove())
	{
		fen += "w";
	}
	else
	{
		fen += "b";
	}
	fen += " ";
	let boardState = position.state();
	if (
		!boardState.whiteKingSideCastleAllowed &&
		!boardState.whiteQueenSideCastleAllowed &&
		!boardState.blackKingSideCastleAllowed &&
		!boardState.blackQueenSideCastleAllowed)
	{
		fen += "-";
	}
	else
	{
		if (boardState.chess960)
		{
			if (boardState.whiteKingSideCastleAllowed)
			{
				fen += fileToString(fileOf(boardState.whiteKingSideCastleRookFrom)).toUpperCase();
			}
			if (boardState.whiteQueenSideCastleAllowed)
			{
				fen += fileToString(fileOf(boardState.whiteQueenSideCastleRookFrom)).toUpperCase();
			}
			if (boardState.blackKingSideCastleAllowed)
			{
				fen += fileToString(fileOf(boardState.blackKingSideCastleRookFrom)).toUpperCase();
			}
			if (boardState.blackQueenSideCastleAllowed)
			{
				fen += fileToString(fileOf(boardState.blackQueenSideCastleRookFrom)).toUpperCase();
			}
		}
		else
		{
			if (boardState.whiteKingSideCastleAllowed)
			{
				fen += "K";
			}
			if (boardState.whiteQueenSideCastleAllowed)
			{
				fen += "Q";
			}
			if (boardState.blackKingSideCastleAllowed)
			{
				fen += "k";
			}
			if (boardState.blackQueenSideCastleAllowed)
			{
				fen += "q";
			}
		}
	}
	fen += " ";
	if (boardState.enPassantTargetSquare == sq_NB)
	{
		fen += "-";
	}
	else
	{
		fen += squareToAlphaNumericString(boardState.enPassantTargetSquare);
	}
	return fen;
}

function portableToMove(position, astring)
{
	// SAN moves can be as short as two characters (e.g., "d4"),
	// or as long as seven characters (e.g., "Qa6xb7#", "fxg1=Q+").

  let slen = astring.length;
	if (slen < 2 || slen > 7)
	{
		return false;
	}

	// null-move (Chessbase = Z0)
	if (astring[0] == 'Z' || (slen == 2 && astring == "--") || (slen == 4 && astring == "null"))
	{
		return new GenMove();
	}

	// remove + or #
	let ch = astring[slen-1];
	if (ch == '+' || ch == '#')
	{
		slen--;
		if (slen < 2)
		{
   		return false;
		}
	}

	// castling
	if (astring[0] == 'O' || astring[0] == '0')
	{
		if (slen == 3)
		{
			let genMoves = generateKingSideCastleMove(position);
			if (genMoves.length != 1)
			{
    		return false;
			}
			return genMoves[0];
		}
		if (slen == 5)
		{
			let genMoves = generateQueenSideCastleMove(position);
			if (genMoves.length != 1)
			{
    		return false;
			}
			return genMoves[0];
		}
 		return false;
	}

	// promotion?
	let promotion = false;
	let promotionPiece = Piece.empty;
	if (astring[slen-2] == '=')
	{
		promotion = true;
		let promotionChar = astring[slen-1];
		if (promotionChar == 'N')
		{
			promotionPiece = position.isWhiteToMove() ? Piece.whiteKnight : Piece.blackKnight;
		}
		else if (promotionChar == 'B')
		{
			promotionPiece = position.isWhiteToMove() ? Piece.whiteBishop : Piece.blackBishop;
		}
		else if (promotionChar == 'R')
		{
			promotionPiece = position.isWhiteToMove() ? Piece.whiteRook : Piece.blackRook;
		}
		else if (promotionChar == 'Q')
		{
			promotionPiece = position.isWhiteToMove() ? Piece.whiteQueen : Piece.blackQueen;
		}
		else
		{
  		return false;
		}
		slen -= 2;
		if (slen < 2)
		{
  		return false;
		}
	}

 	// to
	let toString = '';
	toString += astring[slen-2];
	toString += astring[slen-1];
	let toSquare = alphaNumericStringToSquare(toString);
	if (toSquare == sq_NB)
	{
		return false;
	}
	slen -= 2;
	// if normal pawn move (with or without promotion) slen is now zero

 	if (promotion)
	{
		let genMoves = generatePawnMoves(position, toSquare);
		if (genMoves.length == 0)
		{
  		return false;
		}
		let tempMoves = [];
		for (const move of genMoves)
		{
			if (move.toPiece == promotionPiece)
			{
				tempMoves.push(move);
			}
		}
		genMoves = tempMoves;
		if (genMoves.length == 1)
		{
			return genMoves[0];
		}
		if (slen == 0)
		{
			// no File info, we must take the non capture promotion
			for (const genMove of genMoves)
			{
				if (genMove.captured == sq_NB)
				{
					return genMove;
				}
			}
  		return false;
		}
		if (slen != 2)
		{
  		return false;
		}
		// we have extra File info
		let ch = astring[0];
		if (ch < 'a' || ch > 'h')
		{
  		return false;
		}
		let fromFile = charToFile(ch);
		for (const genMove of genMoves)
		{
			if (fileOf(genMove.from) == fromFile)
			{
				return genMove;
			}
		}
		return false;
	}

	if (slen == 0)
	{
  	// normal pawn move (no capture, no promotion)
		let genMoves = generatePawnMoves(position, toSquare);
		if (genMoves.length != 1)
		{
  		return false;
		}
		return genMoves[0];
	}

  // generate
	let pawn = false;
	let genMoves = [];
	let firstChar = astring[0];
	if (firstChar == 'N')
	{
		genMoves = generateKnightMoves(position, toSquare);
	}
	else if (firstChar == 'B')
	{
		genMoves = generateBishopMoves(position, toSquare);
	}
	else if (firstChar == 'R')
	{
		genMoves = generateRookMoves(position, toSquare);
	}
	else if (firstChar == 'Q')
	{
		genMoves = generateQueenMoves(position, toSquare);
	}
	else if (firstChar == 'K')
	{
		// Rochades uitsluiten is nodig voor chess960.
		genMoves = generateKingMovesWithoutCastleMoves(position, toSquare);
	}
	else
	{
		pawn = true;
		genMoves = generatePawnMoves(position, toSquare);
	}
	if (genMoves.length == 0)
	{
		return false;
	}
	if (genMoves.length == 1)
	{
		return genMoves[0]; // twijfelachtig
	}

	// ambigious, at least two characters needed
	// - for pawn "exf4" (always capture)
	// - for piece "T1a8" (first char is piece and minimum 1 char for from info)
	if (slen < 2)
	{
		return false;
	}

 	if (pawn)
	{
		let ch = astring[0]; // astring[1] must be 'x'
		if (ch < 'a' || ch > 'h')
		{
  	  return false;
		}
		let fromFile = charToFile(ch);
		for (const genMove of genMoves)
		{
			if (fileOf(genMove.from) == fromFile && genMove.captured != sq_NB)
			{
				return genMove;
			}
		}
		return false;
	}

	// non-pawn

 	// capture?
	let capture = false;
	if (astring[slen-1] == 'x')
	{
		capture = true;
		slen--;
	}
	else if (astring[slen-1] == '-') // nieuw per 8 april 2025
	{
		capture = false;
		slen--;
	}

	if (slen < 2)
	{
		return false;
	}

 	if (slen == 2)
	{
		// from info is File or Rank
		let ch = astring[1]; // [0] = stuk
		if (ch >= 'a' && ch <= 'h')
		{
			let fromFile = charToFile(ch);
			let possibleMoves  = 0;
      let uniqueMove = null;
			for (const genMove of genMoves)
			{
				if (fileOf(genMove.from) == fromFile)
				{
					uniqueMove = genMove;
					possibleMoves++;
				}
			}
      return possibleMoves === 1 ? uniqueMove : false;
		}
		if (ch >= '1' && ch <= '8')
		{
			let fromRank = charToRank(ch);
			let possibleMoves = 0;
      let uniqueMove = null;
			for (const genMove of genMoves)
			{
				if (rankOf(genMove.from) == fromRank)
				{
					uniqueMove = genMove;
					possibleMoves++;
				}
			}
      return possibleMoves === 1 ? uniqueMove : false;
		}
		return false;
	}

 	if (slen == 3)
	{
		// from info is full square
		let fromString = '';
		fromString += astring[1]; // [0] = stuk
		fromString += astring[2];
		let fromSquare = alphaNumericStringToSquare(fromString);
		if (fromSquare == sq_NB)
		{
  		return false;
		}
		let possibleMoves = 0;
    let uniqueMove = null;
		for (const genMove of genMoves)
		{
			if (genMove.from == fromSquare)
			{
				uniqueMove = genMove;
				possibleMoves++;
			}
		}
    return possibleMoves === 1 ? uniqueMove : false;
	}

	return false;
}

function getImages()
{
  let imgs = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png",
    "images/pieces/Merida/bB.svg",
    "images/pieces/Merida/bK.svg",
    "images/pieces/Merida/bN.svg",
    "images/pieces/Merida/bP.svg",
    "images/pieces/Merida/bQ.svg",
    "images/pieces/Merida/bR.svg",
    "images/pieces/Merida/wB.svg",
    "images/pieces/Merida/wK.svg",
    "images/pieces/Merida/wN.svg",
    "images/pieces/Merida/wP.svg",
    "images/pieces/Merida/wQ.svg",
    "images/pieces/Merida/wR.svg",
    "images/pieces/CBurnett/bB.svg",
    "images/pieces/CBurnett/bK.svg",
    "images/pieces/CBurnett/bN.svg",
    "images/pieces/CBurnett/bP.svg",
    "images/pieces/CBurnett/bQ.svg",
    "images/pieces/CBurnett/bR.svg",
    "images/pieces/CBurnett/wB.svg",
    "images/pieces/CBurnett/wK.svg",
    "images/pieces/CBurnett/wN.svg",
    "images/pieces/CBurnett/wP.svg",
    "images/pieces/CBurnett/wQ.svg",
    "images/pieces/CBurnett/wR.svg"];
  return imgs;
}
function div(dividend, divisor)
{
  const rem = dividend % divisor;
  const quot = Math.floor((dividend - rem) / divisor);
  return { quot: quot, rem: rem };
}

function parseMove(position, string)
{
	let move = new GenMove();
	if (string.length < 4)
	{
		return move;
	}
	let fromString = string.slice(0, 2);
	let toString = string.slice(2, 4);
	move.from = alphaNumericStringToSquare(fromString);
  move.fromPiece = position.at(move.from);
	move.to = alphaNumericStringToSquare(toString);
	move.toPiece = move.fromPiece;
	if (string.length == 5)
	{
		switch (string[4])
		{
			case 'q':
				move.toPiece = position.isWhiteToMove() ? Piece.whiteQueen : Piece.blackQueen;
				break;
			case 'r':
				move.toPiece = position.isWhiteToMove() ? Piece.whiteRook : Piece.blackRook;
				break;
			case 'b':
				move.toPiece = position.isWhiteToMove() ? Piece.whiteBishop : Piece.blackBishop;
				break;
			case 'n':
				move.toPiece = position.isWhiteToMove() ? Piece.whiteKnight : Piece.blackKnight;
				break;
		}
	}
	return move;
}

class Pair
{

constructor()
{
	let name = '';
	let value = '';
}

}

function addPair(string, name, pairs)
{
  let paramNameString = " " + name + " ";
  let paramNamePos = string.indexOf(paramNameString, 0);
	if (paramNamePos >= 0)
	{
		let beginParamValuePos = paramNamePos + paramNameString.length;
		let endParamValuePos = 0;
		// bij pv helemaal tot einde, tenzij er nog een string volgt met info, dan tot die string
		if (name == "pv")
		{
			endParamValuePos = string.indexOf(" string ", beginParamValuePos);
		}
		else
		{
			endParamValuePos = string.indexOf(" ", beginParamValuePos);
		}
		if (endParamValuePos < 0)
		{
			endParamValuePos = string.length;
		}
    let value = string.slice(beginParamValuePos, endParamValuePos).trim();
		pairs.set(name, value);
	}
}

const EngineMessageDirection =
{
	toEngine        : 0,
	fromEngine      : 1,
};

class Engine
{

constructor()
{
	this.engineItem_ = new EngineItem();
  this.engineThread_ = null;
  this.engineId_ = new EngineId();
  this.defaultParams_ = new EngineParams();
  this.multiPV_ = false;
  this.ready_ = false;
  this.waiting_ = false;
  this.thinking_ = false;
  this.sentAfterDone_ = false;
  this.input_ = new EngineInput();
	this.output_ = new EngineOutput();
  this.onmessage = null;
}

create(engineItem)
{
  this.engineItem_ = engineItem.copyFrom();
  this.initLog();
  this.multiPV_ = false;
 	for (const param of this.engineItem_.params.params)
	{
		if (param.name == "MultiPV")
		{
			this.multiPV_ = (param.value != "1");
			break;
		}
	}

  this.buildEngine();
}

/*
buildEngine()
{
  this.engineThread_ = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.engineThread_.onmessage = (event) => {
    this.fromEngine(event);
  };
}
*/

// GEMINI
async buildEngine() {
    var self = this;
    var jsUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/stockfish.js";
    var wasmFolder = "https://kb5963.github.io/my-web-files/engines/stockfish/";

    try {
        const response = await fetch(jsUrl);
        const scriptText = await response.text();

        // THE FIX: We tell the loader EXACTLY where to find the .wasm brain
        var pathFix = `
            var Module = {
                locateFile: function(path) {
                    if (path.endsWith('.wasm')) {
                        return "${wasmFolder}" + path;
                    }
                    return path;
                }
            };
        `;

        // Combine the fix with the original script
        var blob = new Blob([pathFix + scriptText], { type: 'application/javascript' });
        var blobUrl = URL.createObjectURL(blob);

        self.engineThread_ = new Worker(blobUrl);
        self.engineThread_.onmessage = (event) => {
          if (event.data.includes("Stockfish")) console.log("System: Engine is ONLINE");
          this.fromEngine(event); // 'this' now correctly points to your Applet
        };


    } catch (e) {
        console.error("System: Plan B failed to load.", e);
    }
}

hub()
{
	this.engineId_.clear();
	this.defaultParams_.clear();
	this.toEngine("uci");
}

init()
{
	if (!this.waiting_)
	{
    return;
  }

  // params is nog leeg
	for (const param of this.engineItem_.params.params)
	{
		let line = "setoption";
		line += " name ";
		line += param.name;
		line += " value ";
		line += param.value;
		this.toEngine(line);
	}
  // Later kan de gebruiker wat params instellen maar niet veel
  // en die moeten we dan in engineItem zien te krijgen
  // die we meegeven met create(engineItem)
  // zodat ze hierboven gezet worden

	this.toEngine("isready");
	this.waiting_ = false;
}

// GEMINI
toEngine(command) {
    this.writeLog(command, EngineMessageDirection.toEngine);
    // Only send if the thread actually exists!
    if (this.engineThread_) {
        this.engineThread_.postMessage(command);
    } else {
        console.log("Engine still loading... command queued: " + command);
    }
}

/*
toEngine(command)
{
	this.writeLog(command, EngineMessageDirection.toEngine);
  this.engineThread_.postMessage(command);
}
*/

fromEngine(event)
{
  // c++ zegt dat het meerdere regels tegelijk kunnen zijn
  // we gaan voorlopig uit van 1 regel
 	this.writeLog(event.data, EngineMessageDirection.fromEngine);
	this.doFromEngine(event.data);
}

doFromEngine(line)
{
	let words = line.split(' ');
	if (words.length == 0) return;
	let command = words[0];

	if (command == "readyok")
	{
		this.ready_ = true;
    if (this.onmessage)
    {
      this.onmessage({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (command == "bestmove")
	{
		this.handleDoneCommand(line);
	}
	else if (command == "id")
	{
		this.handleIdCommand(line);
	}
	else if (command == "info")
	{
		this.handleInfoCommand(line);
	}
	else if (command == "option")
	{
		this.handleParamCommand(line);
	}
	else if (command == "uciok")
	{
		this.handleWaitCommand(line);
	}
}

handleDoneCommand(line)
{
	this.thinking_ = false;
  if (this.sentAfterDone_)
  {
    this.sentAfterDone_ = false;
    this.sentPositionToEngine();
  }
}

handleIdCommand(line)
{
 	let string = line;
	let words = string.split(" ");
	if (words.length < 3) return;

  const word1 = words.shift();
  const word2 = words.shift();
  const value = words.join(' ');

	if (word2 == "name")
	{
		this.engineId_.name = value;
	}
	else if (word2 == "author")
	{
		this.engineId_.author = value;
	}
}

handleInfoCommand(line)
{
	let string = line;
	let pairs = new Map();
	addPair(string, "depth", pairs);
 	addPair(string, "seldepth", pairs);
	addPair(string, "pv", pairs);
	addPair(string, "nps", pairs);
	addPair(string, "nodes", pairs);
	addPair(string, "score cp", pairs);
	addPair(string, "score mate", pairs);
	addPair(string, "time", pairs);
	addPair(string, "currmove", pairs);
	addPair(string, "currmovenumber", pairs);
 	addPair(string, "multipv", pairs);

  if (pairs.has("pv") && pairs.has("depth"))
  {
		this.parseInfoPV(pairs);
    if (this.onmessage)
    {
      this.onmessage({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (pairs.has("currmove") && pairs.has("currmovenumber"))
	{
		this.parseInfoCM(pairs);
    if (this.onmessage)
    {
      this.onmessage({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

handleParamCommand(line)
{
	let param = new EngineParam();
	let string = line;

	let nameString = " name ";
  let namePos = string.indexOf(nameString, 0);
	if (namePos < 0) return;
	let beginNameValuePos = namePos + nameString.length;

	let typeString = " type ";
	let typePos = string.indexOf(typeString, 0);
	if (typePos < 0) return;
	let endNameValuePos = typePos;

	let beginTypeValuePos = typePos + typeString.length;
	let endTypeValuePos = string.indexOf(" ", beginTypeValuePos);
	if (endTypeValuePos < 0) endTypeValuePos = string.length + 1;

	param.name = string.slice(beginNameValuePos, endNameValuePos);
	param.type = string.slice(beginTypeValuePos, endTypeValuePos);

	if (param.type == "check")
	{
		param.type = "bool";
	}
	else if (param.type == "combo")
	{
		param.type = "enum";
	}

	let defaultString = " default ";
	let defaultPos = string.indexOf(defaultString, 0);
	if (defaultPos >= 0)
	{
		let beginDefaultValuePos = defaultPos + defaultString.length;
		let endDefaultValuePos = string.indexOf(" ", beginDefaultValuePos);
		if (endDefaultValuePos < 0) endDefaultValuePos = string.length + 1;
		param.value = string.slice(beginDefaultValuePos, endDefaultValuePos);
		if (param.value == "<empty>")
		{
			param.value = "";
		}
	}
	if (param.type == "spin")
	{
		let minString = " min ";
		let minPos = string.indexOf(minString, 0);
		if (minPos >= 0)
		{
			let beginMinValuePos = minPos + minString.length;
			let endMinValuePos = string.indexOf(" ", beginMinValuePos);
			if (endMinValuePos < 0) endMinValuePos = string.length + 1;
			param.min = string.slice(beginMinValuePos, endMinValuePos).trim();
		}
		let maxString = " max ";
		let maxPos = string.indexOf(maxString, 0);
		if (maxPos >= 0)
		{
			let beginMaxValuePos = maxPos + maxString.length;
			let endMaxValuePos = string.indexOf(" ", beginMaxValuePos);
			if (endMaxValuePos < 0) endMaxValuePos = string.length + 1;
			param.max = string.slice(beginMaxValuePos, endMaxValuePos).trim();
		}
	}
	else if (param.type == "enum")
	{
		let curPos = 0;
		while (true)
		{
			let varString = " var ";
			let varPos = string.indexOf(varString, curPos);
			if (varPos < 0) break;
			let beginVarValuePos = varPos + varString.length;
			let endVarValuePos = string.indexOf(" var ", varPos + 5);
			if (endVarValuePos < 0) endVarValuePos = string.length + 1;
			if (param.values.length != 0)
			{
				param.values += " ";
			}
			param.values += string.slice(beginVarValuePos, endVarValuePos).trim();
			curPos = endVarValuePos;
		}
	}
	this.defaultParams_.params.push(param);
}

handleWaitCommand(line)
{
	this.waiting_ = true;
  this.init();
}

// TO DO quit() is betere naam
suspend()
{
	if (this.engineThread_)
  {
    this.toEngine("quit");
    this.engineThread_.terminate();
    this.engineThread_ = null;
  }
}

// TO DO ik denk dat resume anders moet
// want je vernietigd het hele ding en
// vanuit engineView doe je create, hub, init
// dus hier alleen build doen dat klopt niet
// je kan beter de engine uitschakelen (suspend)
// en dan engineView.engine.terminate doen en op null zetten
// en dan engineView.createEngine(engineItem) aanroepen,
resume()
{
}

setInput(input)
{
	if (this.ready_)
	{
  	this.writeLog('setInput', EngineMessageDirection.toEngine);
		this.input_ = input.copyFrom();
    if (this.thinking_)
    {
      this.sentAfterDone_ = true;
      this.toEngine('stop');
    }
    else
    {
      this.sentPositionToEngine();
    }
	}
}

sentPositionToEngine()
{
  this.output_ = new EngineOutput();
  this.output_.position = this.input_.thinkPosition();
  this.output_.moveNumber = this.input_.moveNumber();
	this.output_.multiPV = this.multiPV_;
  this.thinking_ = true;
  if (this.onmessage)
  {
    this.onmessage({
      cmd: "go",
      data: {}
      });
  }

  let line = "position fen";
  line += " ";
	let fen = positionToPortableFen(this.input_.thinkPosition());
	line += fen;
	this.toEngine(line);
	if (this.input_.timeLeft == infiniteTimeLeft)
	{
		line = "go infinite";
		this.toEngine(line);
	}
	else
	{
		line = "go movetime ";
		line += this.input_.timeLeft;
		this.toEngine(line);
	}
}

initLog()
{
}

writeLog(string, direction)
{
	if (!this.engineItem_.logFile) return;
 	if (direction == EngineMessageDirection.fromEngine)
	{
    console.log("From engine:", string);
	}
	else
	{
    console.log("To engine:", string);
	}
}

parseInfoPV(pairs)
{
  let depthValue = pairs.get("depth");
  let moveNum = pairs.get("multipv");

	let newLine = new EngineLine();
	newLine.depthString = depthValue;

	if (pairs.has("seldepth"))
	{
		newLine.selDepthString = pairs.get("seldepth");
	}

 	if (pairs.has("nps"))
	{
    let nodesValue = pairs.get("nps");
		let nodes = StrToIntDef(nodesValue, 0);
		let kiloNodes = nodes / 1000;
		if (kiloNodes)
		{
			newLine.nodesPerSecond = kiloNodes + " kN/s";
		}
	}

	let score = 0.0;
  if (pairs.has("score cp"))
	{
    let scoreValue = pairs.get("score cp");
		score = parseFloat(scoreValue);
		score = score / 100.0;
		if (score > 9.99)
		{
			score = 9.99;
		}
		if (score < -9.99)
		{
			score = -9.99;
		}
		if (this.output_.position.isBlackToMove())
		{
			score = -score;
		}
		newLine.score = score;
	}
  if (pairs.has("score mate"))
	{
    let mateValue = pairs.get("score mate");
		let mate = StrToIntDef(mateValue, 0);
		if (this.output_.position.isBlackToMove())
		{
			mate = -mate;
		}
		newLine.mate = mate;
		if (mate > 0)
		{
			score = 9.99;
		}
		if (mate < 0)
		{
			score = -9.99;
		}
		newLine.score = score;
	}

  if (pairs.has("time"))
	{
    let timeValue = pairs.get("time");
		let milliSeconds = StrToIntDef(timeValue, 0);
		let timeInSeconds = milliSeconds / 1000;
		let m = div(timeInSeconds, 60);
		let seconds = m.rem;
    seconds = Math.round(seconds);
		let h = div(m.quot, 60);
		let minutes = h.rem;
		let hours = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    newLine.timeString = timeString;
	}

  let pvValue = pairs.get("pv");
	let strings = pvValue.split(" ");

	let moves = new MoveTree();
	let moveNumber = this.output_.moveNumber;
	moves.setPosition(this.output_.position, moveNumber);
	let it = moves.beginPos();
	let curPosition = this.output_.position.copyFrom();
	for (const s of strings)
	{
		if (s.length == 0)
		{
			continue;
		}
		let parsedMove = parseMove(curPosition, s);
		let genMoves = generateMoves(curPosition);
		let hit = false;
		for (const genMove of genMoves)
		{
			if (genMove.to == parsedMove.to &&
				genMove.from == parsedMove.from &&
				genMove.toPiece == parsedMove.toPiece)
			{
				curPosition.forward(genMove);
				let move = buildGameMove(genMove);
				moves.addMove(it, move);
				hit = true;
				break;
			}
		}
    if (!hit) break;
	}
	if (!moves.mainNumberOfMoves())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + moves.mainNumberOfMoves());
	newLine.moves = moves;

 	if (this.multiPV_)
	{
		if (moveNum == 1)
		{
			this.output_.bestLine = newLine;
		}
		if (moveNum > this.output_.lines.length)
		{
			this.output_.lines.push(newLine);
		}
		else
		{
			this.output_.lines[moveNum-1] = newLine;
		}
	}
	else
	{
		this.output_.lines.push(newLine);
		this.output_.bestLine = newLine;
	}
}

parseInfoCM(pairs)
{
  let infoMoveValue = pairs.get("currmove");
  let infoMoveNumValue = pairs.get("currmovenumber"); // 1 based
	this.output_.currentMoveNum = StrToIntDef(infoMoveNumValue, 0);
	let genMoves = generateMoves(this.output_.position);
	this.output_.currentMoveCount = genMoves.length;
	let parsedMove = parseMove(this.output_.position, infoMoveValue);
	for (const genMove of genMoves)
	{
		if (genMove.to == parsedMove.to &&
			genMove.from == parsedMove.from &&
			genMove.toPiece == parsedMove.toPiece)
		{
			this.output_.currentMove = genMove;
			break;
		}
	}
}

output()
{
	return this.output_.copyFrom();
}

engineItem()
{
	return this.engineItem_.copyFrom();
}

}

class EngineId
{

constructor()
{
	this.name = '';
	this.author = '';
	this.version = '';
	this.country = '';
}

copyFrom()
{
  return Object.assign(new EngineId(), this);
}

clear()
{
	this.name = '';
	this.author = '';
	this.version = '';
	this.country = '';
}

}


const infiniteTimeLeft = 10000000;

class EngineInput
{

constructor()
{
	this.moves = new MoveTree();
	this.timeLeft = infiniteTimeLeft;
  this.bonus = 0;
	this.movesLeft = 0;
}

copyFrom()
{
	let copyEngineInput = new EngineInput();
  copyEngineInput.moves = this.moves.copyFrom();
  copyEngineInput.timeLeft = this.timeLeft;
  copyEngineInput.bonus = this.bonus;
  copyEngineInput.movesLeft = this.movesLeft;
	return copyEngineInput;
}

moveNumber()
{
	return this.moves.nextMoveNumber(this.moves.endPosOfMainLine());
}

thinkPosition()
{
	return this.moves.endPositionOfMainLine();
}

}


class EngineItem
{

constructor()
{
	this.fileName = '';
	this.id = new EngineId();
	this.params = new EngineParams();
	this.defaultParams = new EngineParams();
	this.logFile = true;
	this.active = true;
}

copyFrom()
{
	let copyEngineItem = new EngineItem();
	copyEngineItem.fileName = this.fileName;
	copyEngineItem.id = this.id.copyFrom();
	copyEngineItem.params = this.params.copyFrom();
	copyEngineItem.defaultParams = this.defaultParams.copyFrom();
	copyEngineItem.logFile = this.logFile;
	copyEngineItem.active = this.active;
	return copyEngineItem;
}


}


function formatScore(score)
{
  if (Math.abs(score) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = score.toFixed(2);
     return score > 0 ? `+${formatted}` : formatted;
  }
}

class EngineLine
{

constructor()
{
	this.score = 0.0;
	this.mate = false;
	this.depthString = '';
	this.selDepthString = '';
	this.timeString = '';
	this.nodesPerSecond = '';
	this.moves = new MoveTree();
}

copyFrom()
{
	let copyEngineLine = new EngineLine();
  copyEngineLine.score = this.score;
  copyEngineLine.mate = this.mate;
  copyEngineLine.depthString = this.depthString;
  copyEngineLine.selDepthString = this.selDepthString;
  copyEngineLine.timeString = this.timeString;
  copyEngineLine.nodesPerSecond = this.nodesPerSecond;
  copyEngineLine.moves = this.moves.copyFrom();
	return copyEngineLine;
}

scoreToString()
{
	if (this.mate)
	{
		return "#" + this.mate;
	}
	else
	{
		return formatScore(this.score);
	}
}

scoreToEvalString()
{
	let vs = scoreToMoveValue(this.score);
	let valueString = moveValueToEvalString(vs);
	return valueString;
}

}

class EngineOutput
{

constructor()
{
	this.position = new GamePosition();
	this.moveNumber = 1;
	this.threat = false;
	this.endgame = false;
	this.multiPV = false;
	this.lines = [];
	this.bestLine = new EngineLine();
	this.currentMove = new GenMove();
	this.currentMoveNum = 0;
	this.currentMoveCount = 0;
}

copyFrom()
{
	let copyEngineOutput = new EngineOutput();
  copyEngineOutput.position = this.position.copyFrom();
  copyEngineOutput.moveNumber = this.moveNumber;
  copyEngineOutput.threat = this.threat;
  copyEngineOutput.endgame = this.endgame;
  copyEngineOutput.multiPV = this.multiPV;
  copyEngineOutput.lines = this.lines.slice();
  copyEngineOutput.bestLine = this.bestLine.copyFrom();
  copyEngineOutput.currentMove = this.currentMove.copyFrom();
  copyEngineOutput.currentMoveNum = this.currentMoveNum;
  copyEngineOutput.currentMoveCount = this.currentMoveCount;
	return copyEngineOutput;
}

hasBestMove()
{
	return this.bestLine.moves.mainNumberOfMoves() > 0;
}

bestMove()
{
	let pos = this.bestLine.moves.beginPos();
	this.bestLine.moves.forward(pos);
	return pos.move.genMove();
}

}


class EngineParam
{
  constructor(type = '', name = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.name = name;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  copyFrom()
  {
    return Object.assign(new EngineParam(), this);
  }
}

class EngineParams
{
  constructor()
  {
    this.params = [];
  }

  copyFrom()
  {
    let copyEngineParams = new EngineParams();
    copyEngineParams.params = this.params.map(p => p.copyFrom());
    return copyEngineParams;
  }

  clear()
  {
    this.params.length = 0;
  }

  addBool(name, value)
  {
    this.params.push(new EngineParam("bool", name, value));
  }

  addInteger(name, value)
  {
    this.params.push(new EngineParam("int", name, value));
  }

  addSpin(name, value, min, max)
  {
    this.params.push(new EngineParam("spin", name, value, min, max));
  }

  addString(name, value)
  {
    this.params.push(new EngineParam("string", name, value));
  }

  addEnum(name, value, values)
  {
    this.params.push(new EngineParam("enum", name, value, '', '', values));
  }

  addButton(name)
  {
    this.params.push(new EngineParam("button", name, name));
  }

  setValue(name, value)
  {
    for (let param of this.params)
    {
      if (param.name === name)
      {
        param.value = value;
      }
    }
  }
}
class Annotator
{

constructor()
{
	this.name = '';
}

copyFrom()
{
	let copyAnnotator = new Annotator();
	copyAnnotator.name = this.name;
	return copyAnnotator;
}

empty()
{
	return this.name.length == 0;
}

description()
{
	return this.name;
}

}


const Country =
{
	none : 0,
	afghanistan : 1,
	alandIslands: 2,
	albania: 3,
	algeria: 4,
	americanSamoa: 5,
	andorra: 6,
	angola: 7,
	anguilla: 8,
	antarctica: 9,
	antiguaBarbuda: 10,
	argentina: 11,
	armenia: 12,
	aruba: 13,
	australia: 14,
	austria: 15,
	azerbaijan: 16,
	bahamas: 17,
	bahrain: 18,
	bangladesh: 19,
	barbados: 20,
	basqueCountry: 21,
	belarus: 22,
	belgium: 23,
	belize: 24,
	benin: 25,
	bermuda: 26,
	bhutan: 27,
	bolivia: 28,
	bosniaHerzegovina: 29,
	botswana: 30,
	bouvetIsland: 31,
	brazil: 32,
	britishIndianOceanTerritory: 33,
	bruneiDarussalam: 34,
	bulgaria: 35,
	burkinaFaso: 36,
	burundi: 37,
	cambodia: 38,
	cameroon: 39,
	canada: 40,
	capeVerde: 41,
	catalonia: 42,
	caymanIslands: 43,
	centralAfricanRepublic: 44,
	chad: 45,
	chile: 46,
	china: 47,
	christmasIsland: 48,
	cocosKeelingIslands: 49,
	colombia: 50,
	comoros: 51,
	congo: 52,
	congoDemocraticRepublic: 53,
	cookIslands: 54,
	costaRica: 55,
	croatia: 56,
	cuba: 57,
	curacao: 58,
	cyprus: 59,
	czechia: 60,
	coteIvoire: 61,
	denmark: 62,
	djibouti: 63,
	dominica: 64,
	dominicanRepublic: 65,
	ecuador: 66,
	egypt: 67,
	elSalvador: 68,
	england: 69,
	equatorialGuinea: 70,
	eritrea: 71,
	estonia: 72,
	ethiopia: 73,
	falklandIslands: 74,
	faroeIslands: 75,
	fiji: 76,
	finland: 77,
	france: 78,
	frenchGuiana: 79,
	frenchPolynesia: 80,
	frenchSouthernTerritories: 81,
	gabon: 82,
	gambia: 83,
	georgia: 84,
	germany: 85,
	ghana: 86,
	gibraltar: 87,
	greece: 88,
	greenland: 89,
	grenada: 90,
	guadeloupe: 91,
	guam: 92,
	guatemala: 93,
	guernsey: 94,
	guinea: 95,
	guineaBissau: 96,
	guyana: 97,
	haiti: 98,
	heardIslandMcDonaldIslands: 99,
	vatican: 100,
	honduras: 101,
	hongKong: 102,
	hungary: 103,
	iceland: 104,
	india: 105,
	indonesia: 106,
	iran: 107,
	iraq: 108,
	ireland: 109,
	isleOfMan: 110,
	israel: 111,
	italy: 112,
	jamaica: 113,
	janMayen: 114,
	japan: 115,
	jersey: 116,
	jordan: 117,
	kazakhstan: 118,
	kenya: 119,
	kiribati: 120,
	koreaNorth: 121,
	koreaSouth: 122,
	kosovo: 123,
	kuwait: 124,
	kyrgyzstan: 125,
	laos: 126,
	latvia: 127,
	lebanon: 128,
	lesotho: 129,
	liberia: 130,
	libya: 131,
	liechtenstein: 132,
	lithuania: 133,
	luxembourg: 134,
	macao: 135,
	northMacedonia: 136,
	madagascar: 137,
	malawi: 138,
	malaysia: 139,
	maldives: 140,
	mali: 141,
	malta: 142,
	marshallIslands: 143,
	martinique: 144,
	mauritania: 145,
	mauritius: 146,
	mayotte: 147,
	mexico: 148,
	micronesia: 149,
	moldova: 150,
	monaco: 151,
	mongolia: 152,
	montenegro: 153,
	montserrat: 154,
	morocco: 155,
	mozambique: 156,
	myanmar: 157,
	namibia: 158,
	nauru: 159,
	nepal: 160,
	netherlands: 161,
	netherlandsAntilles: 162,
	newCaledonia: 163,
	newZealand: 164,
	nicaragua: 165,
	niger: 166,
	nigeria: 167,
	niue: 168,
	norfolkIsland: 169,
	northernIreland: 170,
	northernMarianaIslands: 171,
	norway: 172,
	oman: 173,
	pakistan: 174,
	palau: 175,
	palestine: 176,
	panama: 177,
	papuaNewGuinea: 178,
	paraguay: 179,
	peru: 180,
	philippines: 181,
	pitcairn: 182,
	poland: 183,
	portugal: 184,
	puertoRico: 185,
	qatar: 186,
	reunion: 187,
	romania: 188,
	russia: 189,
	rwanda: 190,
	saintBarthelemy: 191,
	saintHelena: 192,
	saintKittsNevis: 193,
	saintLucia: 194,
	saintMartinFrenchPart: 195,
	saintPierreMiquelon: 196,
	saintVincentGrenadines: 197,
	samoa: 198,
	sanMarino: 199,
	saoTomePrincipe: 200,
	saudiArabia: 201,
	scotland: 202,
	senegal: 203,
	serbia: 204,
	seychelles: 205,
	sierraLeone: 206,
	singapore: 207,
	sintMaartenDutchPart: 208,
	slovakia: 209,
	slovenia: 210,
	solomonIslands: 211,
	somalia: 212,
	southAfrica: 213,
	southGeorgiaSouthSandwichIslands: 214,
	southSudan: 215,
	sovietUnion: 216,
	spain: 217,
	sriLanka: 218,
	sudan: 219,
	suriname: 220,
	svalbard: 221,
	swaziland: 222,
	sweden: 223,
	switzerland: 224,
	syria: 225,
	taiwan: 226,
	tajikistan: 227,
	tanzania: 228,
	thailand: 229,
	timorLeste: 230,
	togo: 231,
	tokelau: 232,
	tonga: 233,
	trinidadTobago: 234,
	tunisia: 235,
	turkey: 236,
	turkmenistan: 237,
	turksCaicosIslands: 238,
	tuvalu: 239,
	uganda: 240,
	ukraine: 241,
	unitedArabEmirates: 242,
	unitedKingdom: 243,
	unitedStates: 244,
	unitedStatesMinorOutlyingIslands: 245,
	uruguay: 246,
	uzbekistan: 247,
	vanuatu: 248,
	venezuela: 249,
	vietnam: 250,
	virginIslandsBritish: 251,
	virginIslandsUS: 252,
	wales: 253,
	wallisFutuna: 254,
	westernSahara: 255,
	yemen: 256,
	zaire: 257,
	zambia: 258,
	zimbabwe: 259
};


const minEco = 0;
const maxEco = 500;

function stringToEco(string)
{
	if (string.length != 3)
	{
		return 0;
	}
	let ch1 = string[0];
	let ch2 = string[1];
	let ch3 = string[2];

	let hundreds = 0;
	if (ch1 == 'A' || ch1 == 'a') hundreds = 0;
	else if (ch1 == 'B' || ch1 == 'b') hundreds = 1;
	else if (ch1 == 'C' || ch1 == 'c') hundreds = 2;
	else if (ch1 == 'D' || ch1 == 'd') hundreds = 3;
	else if (ch1 == 'E' || ch1 == 'e') hundreds = 4;
	else return 0;
	if (isNaN(ch2) || isNaN(ch3))
	{
		return 0;
	}
	return hundreds * 100 + StrToIntDef(string.substr(1, 2), 0) + 1;
}

function ecoToString(eco)
{
	if (eco)
	{
		let div = Math.trunc((eco - 1) / 100);
		let rem = (eco - 1) % 100;
		let letter = 'A';
		if (div == 0) letter = 'A';
		else if (div == 1) letter = 'B';
		else if (div == 2) letter = 'C';
		else if (div == 3) letter = 'D';
		else if (div == 4) letter = 'E';
		return letter + rem.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class GameDate
{

constructor()
{
	this.day_ = 0;
	this.month_ = 0;
	this.year_ = 0;
}

copyFrom()
{
	let copyDate = new GameDate();
	copyDate.day = this.day_;
	copyDate.month = this.month_;
	copyDate.year = this.year_;
	return copyDate;
}

empty()
{
	return this.year_ == 0 && this.month_ == 0 && this.day_ == 0;
}

date()
{
	let year = this.year_.toString().padStart(4, '0');
	let month = this.month_.toString().padStart(2, '0');
	let day = this.day_.toString().padStart(2, '0');
	return year + month + day;
}

setDateFormat(format, string)
{
	let len = string.length;
	if (!len)
	{
		this.year_ = 0;
		this.month_ = 0;
		this.day_ = 0;
	}
	else if (format == "dd-mm-yyyy" || format == "dd.mm.yyyy")
	{
  	if (len == 4)
		{
      this.year_ = StrToIntDef(string.substr(1, 4), 0);
		}
		else if (len == 10)
		{
			this.day_ = StrToIntDef(string.substr(0, 2), 0);
			this.month_ = StrToIntDef(string.substr(3, 2), 0);
			this.year_ = StrToIntDef(string.substr(6, 4), 0);
		}
	}
	else if (format == "yyyy-mm-dd" || format == "yyyy.mm.dd")
	{
  	if (len == 4)
		{
      this.year_ = StrToIntDef(string.substr(1, 4), 0);
		}
		else if (len == 10)
		{
			this.day_ = StrToIntDef(string.substr(8, 2), 0);
			this.month_ = StrToIntDef(string.substr(5, 2), 0);
			this.year_ = StrToIntDef(string.substr(0, 4), 0);
		}
	}
	else if (format == "dd-mm-yy" || format == "dd.mm.yy")
	{
		if (len == 8)
		{
			this.day_ = StrToIntDef(string.substr(0, 2), 0);
			this.month_ = StrToIntDef(string.substr(3, 2), 0);
			this.year_ = StrToIntDef(string.substr(6, 2), 0) + 2000;
		}
	}
}

toString(format)
{
	let string = '';
	if (this.empty())
	{
	}
	else if (format == "list")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		if (this.day_)
		{
			string = day + "-" + month + "-" + year;
		}
		else if (this.month_)
		{
			string = month + "-" + year;
		}
		else if (this.year_)
		{
			string = year;
		}
	}
	else if (format == "dd-mm-yyyy")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		string = day + "-" + month + "-" + year;
	}
	else if (format == "dd.mm.yyyy")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		string = day + "." + month + "." + year;
	}
	else if (format == "yyyy-mm-dd")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		string = year + "-" + month + "-" + day;
	}
	else if (format == "yyyy.mm.dd")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		string = year + "." + month + "." + day;
	}
	else if (format == "yyyymmdd")
	{
		let year = this.year_.toString().padStart(4, '0');
		let month = this.month_.toString().padStart(2, '0');
		let day = this.day_.toString().padStart(2, '0');
		string = year + month + day;
	}
	else if (format == "yyyy")
	{
		let year = this.year_.toString().padStart(4, '0');
		string = year;
	}
	return string;
}

}

class PlayerData
{

constructor()
{
	this.player = new Player();
	this.team = new Team();
	this.rating = 0;
	this.time = 0;
	this.title = "";
  this.country = Country.none;
}

copyFrom()
{
	let copyPlayerData = new PlayerData();
	copyPlayerData.player = this.player.copyFrom();
	copyPlayerData.team = this.team.copyFrom();
	copyPlayerData.rating = this.rating;
	copyPlayerData.time = this.time;
	copyPlayerData.title = this.title;
  copyPlayerData.country = this.country;
	return copyPlayerData;
}

empty()
{
	return this.player.empty() &&
		this.team.empty() &&
		this.rating == 0 &&
		this.time == 0 &&
		this.title == "" &&
 		this.country == Country.none;
}

}


class GameHeader
{

constructor()
{
	this.white = new PlayerData();
	this.black = new PlayerData();
	this.tournament = new Tournament();
	this.annotator = new Annotator();
	this.source = new Source();
	this.title = new GameTitle();
	this.date = new GameDate();
	this.result = Result.none;
	this.eco = 0;
	this.round = 0;
	this.subRound = 0;
	this.tags = new Tags();
  this.id = new GameId();
}

copyFrom()
{
	let copyGameHeader = new GameHeader();
	copyGameHeader.white = this.white.copyFrom();
	copyGameHeader.black = this.black.copyFrom();
	copyGameHeader.tournament = this.tournament.copyFrom();
	copyGameHeader.annotator = this.annotator.copyFrom();
	copyGameHeader.source = this.source.copyFrom();
	copyGameHeader.title = this.title.copyFrom();
	copyGameHeader.date = this.date.copyFrom();
	copyGameHeader.result = this.result;
	copyGameHeader.eco = this.eco;
	copyGameHeader.round = this.round;
	copyGameHeader.subRound = this.subRound;
	copyGameHeader.tags = this.tags.copyFrom();
  copyGameHeader.id = this.id.copyFrom();
	return copyGameHeader;
}

empty()
{
	return this.white.empty() &&
		this.black.empty() &&
		this.tournament.empty() &&
		this.annotator.empty() &&
		this.source.empty() &&
		this.title.empty() &&
		this.date.empty() &&
		this.result == Result.none &&
		this.eco == 0 &&
		this.round == 0 &&
		this.subRound == 0 &&
		this.tags.empty();
}

roundString()
{
	let string = '';
	if (this.subRound)
	{
		string = this.round.toString() + "." + this.subRound.toString();
	}
	else if (this.round)
	{
		string = this.round.toString();
	}
	return string;
}

}


class GameId
{

constructor()
{
	this.guid = '';
}

copyFrom()
{
	let copyGameId = new GameId();
	copyGameId.guid = this.guid;
	return copyGameId;
}

toString()
{
  return this.guid;
}

}


class GameTitle
{

constructor()
{
	this.title = '';
}

copyFrom()
{
	let copyGameTitle = new GameTitle();
	copyGameTitle.title = this.title;
	return copyGameTitle;
}

empty()
{
	return this.title.length == 0;
}

description()
{
	return this.title;
}

}


class Player
{

constructor()
{
	this.firstName = '';
	this.lastName = '';
}

copyFrom()
{
	let copyPlayer = new Player();
	copyPlayer.firstName = this.firstName;
	copyPlayer.lastName = this.lastName;
	return copyPlayer;
}

empty()
{
	return this.lastName.length == 0 &&
		this.firstName.length == 0;
}

name()
{
	if (!this.lastName.length == 0 && !this.firstName.length == 0)
	{
		return this.lastName + "," + this.firstName;
	}
	else if (this.lastName.length == 0 && this.firstName.length == 0)
	{
		return "";
	}
	else if (this.firstName.length == 0)
	{
		return this.lastName;
	}
	else
	{
		return this.firstName;
	}
}

nameWithSpace()
{
	return this.name().replace(/,/g, " ");
}

shortNameWithSpace()
{
	return this.shortName(1).replace(/,/g, " ");
}

shortName(firstNameLen)
{
	if (this.lastName.length == 0)
	{
		if (this.firstName.length == 0 || firstNameLen < 1)
		{
			return "";
		}
		else
		{
			return this.firstName.substring(0, firstNameLen);
		}
	}
	else
	{
		if (this.firstName.length == 0 || firstNameLen < 1)
		{
			return this.lastName;
		}
		else
		{
			return this.lastName + "," + this.firstName.substring(0, firstNameLen);
		}
	}
}

setName(fullName)
{
	let string = fullName.trim();
	let pos = string.lastIndexOf(",");
	if (pos != -1)
	{
		this.lastName = string.substr(0, pos).trim();
		this.firstName = string.substr(pos+1, string.length).trim();
		if (this.firstName.length != 0)
		{
			if (this.firstName.charAt(0).toLowerCase() == this.firstName.charAt(0))
			{
				this.lastName += ",";
				this.lastName += this.firstName;
				this.firstName = "";
			}
		}
	}
	else
	{
		this.lastName = string;
		this.firstName = "";
	}
}

description()
{
	return this.name();
}

}

const Result =
{
	none : 0,
	whiteWins : 1,
	blackWins : 2,
	draw : 3,
	whiteMuchBetter : 4,
	whiteBetter : 5,
	whiteSlightlyBetter : 6,
	balanced : 7,
	unclear : 8,
	blackSlightlyBetter : 9,
	blackBetter : 10,
	blackMuchBetter : 11,
	compensation : 12,
	counterPlay : 13,
	initiative : 14,
	attack : 15
};


function resultToString(result)
{
	switch (result)
	{
		case Result.whiteWins:
			return "2-0";
		case Result.draw:
			return "1-1";
		case Result.blackWins:
			return "0-2";
		default:
			return "";
	}
}
const SourceQuality =
{
	high : 0,
	middle : 1,
	low : 2
};

const Qualities =
[
	[ SourceQuality.high,   "High" ],
	[ SourceQuality.middle, "Middle" ],
	[ SourceQuality.low,    "Low" ]
];

class Source
{

constructor()
{
	this.title = '';
	this.publisher = '';
	this.publicationDate = new GameDate();
	this.versionDate = new GameDate();
	this.versionNumber = 0;
	this.quality = SourceQuality.high;
}

copyFrom()
{
	let copySource = new Source();
	copySource.title = this.title;
	copySource.publisher = this.publisher;
	copySource.publicationDate = this.publicationDate.copyFrom();
	copySource.versionDate = this.versionDate.copyFrom();
	copySource.versionNumber = this.versionNumber;
	copySource.quality = this.quality;
	return copySource;
}

empty()
{
	return this.title.length == 0 &&
		this.publisher.length == 0 &&
		this.publicationDate.empty() &&
		this.versionDate.empty() &&
		this.versionNumber == 0 &&
		this.quality == SourceQuality.high;
}

description()
{
	let string = this.title;
	if (this.publisher.length)
	{
		if (string.length)
		{
			string += " ";
		}
		string += this.publisher;
	}
	return string;
}

}


const Tag =
{
	tag01 : 0,
	tag02 : 1,
	tag03 : 2,
	tag04 : 3,
	tag05 : 4,
	tag06 : 5,
	tag07 : 6,
	tag08 : 7,
	tag09 : 8,
	tag10 : 9,
	tag11 : 10,
	tag12 : 11,
	tag13 : 12,
	tag14 : 13,
	tag15 : 14,
	tag16 : 15
};

class Tags
{

constructor()
{
	this.value = 0;
}

setUlong(value)
{
	this.value = value;
}

copyFrom()
{
	let copyTags = new Tags();
	copyTags.value = this.value;
	return copyTags;
}

empty()
{
	return this.value == 0;
}

any()
{
	return this.value != 0;
}

none()
{
	return this.value == 0;
}

count()
{
	let counter = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.test(i))
		{
			counter++;
		}
	}
	return counter;
}

reset()
{
	this.value = 0;
}

set(tag, on)
{
	if (on)
	{
		this.value |= (1 << tag);
	}
	else
	{
		this.value &= ~(1 << tag);
	}
}

test(tag)
{
	return (this.value & (1 << tag)) != 0;
}

toUlong()
{
	return this.value;
}

}

function formatYear(year)
{
	return year.toString().padStart(4, '0');
}

class Team
{

constructor()
{
	this.name = '';
	this.number = 0;
	this.year = 0;
	this.season = false;
	this.country = Country.none;
}

copyFrom()
{
	let copyTeam = new Team();
	copyTeam.name = this.name;
	copyTeam.number = this.number;
	copyTeam.year = this.year;
	copyTeam.season = this.season;
	copyTeam.country = this.country;
	return copyTeam;
}

empty()
{
	return this.name.length == 0 &&
		this.number == 0 &&
		this.year == 0 &&
		this.season == false &&
		this.country == Country.none;
}

formatNameNumber()
{
	let string = this.name;
	if (this.number)
	{
		if (string.length)
		{
			string += " ";
		}
		string += this.number;
	}
	return string;
}

description()
{
	let string = this.name;
	if (this.number)
	{
		if (string.length)
		{
			string += " ";
		}
		string += this.number;
	}
	if (string.length)
	{
		string += " ";
	}
	string += this.seasonYear();
	return string;
}


teamNumber()
{
	let string = this.name;
	if (this.number > 1)
	{
		string += " ";
		string += this.number;
	}
	return string;
}

seasonYear()
{
	let string = '';
	if (this.season)
	{
		let temp1 = formatYear(this.year);
		let temp2 = formatYear(this.year + 1);
		let temp3 = temp1 + "/" + temp2.substr(2, 2);
		string = temp3;
	}
	else
	{
		string = formatYear(this.year);
	}
	return string;
}

}

class hms
{

constructor()
{
	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;

}

}

function parseTime(string, maxhours, time)
{
	time.hours = 0;
	time.minutes = 0;
	time.seconds = 0;

	let len = string.length;
	if (!len || string == "?")
	{
		return;
	}
	let i = 0;
	for (; i < len; i++)
	{
		if (!isNaN(string[i]))
		{
			break;
		}
	}
	let string1 = '';
	for (; i < len; i++)
	{
		if (isNaN(string[i]))
		{
			break;
		}
		string1 += string[i].toString();
	}
	for (; i < len; i++)
	{
		if (!isNaN(string[i]))
		{
			break;
		}
	}
	let string2 = '';
	for (; i < len; i++)
	{
		if (isNaN(string[i]))
		{
			break;
		}
		string2 += string[i].toString();
	}
	for (; i < len; i++)
	{
		if (!isNaN(string[i]))
		{
			break;
		}
	}
	let string3 = '';
	for (; i < len; i++)
	{
		if (isNaN(string[i]))
		{
			break;
		}
		string3 += string[i].toString();
	}
	let tmpHours = StrToIntDef(string1, 0);
	let tmpMinutes = StrToIntDef(string2, 0);
	let tmpSeconds = StrToIntDef(string3, 0);
	if (
		tmpHours < 0 || tmpHours > maxhours ||
		tmpMinutes < 0 || tmpMinutes > 59 ||
		tmpSeconds < 0 || tmpSeconds > 59)
	{
		tmpHours = 0;
		tmpMinutes = 0;
		tmpSeconds = 0;
	}
	time.hours = tmpHours;
	time.minutes = tmpMinutes;
	time.seconds = tmpSeconds;
}

function stringToThinkTime(string)
{
	if (string.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new hms();
		parseTime(string, 9, time);
		return time.hours * 60 + time.minutes;
	}
}


const TournamentType =
{
	none : 0,
	game : 1,
	match : 2,
	tournament : 3,
	swiss : 4,
	knockOut : 5,
	simultaneous : 6,
	scheveningen : 7
};

const TournamentTypes =
[
	[ TournamentType.none, 			 	""                   ],
	[ TournamentType.game,  		 	"SingleGame"         ],
	[ TournamentType.match,  		 	"Match"              ],
	[ TournamentType.tournament,  "RoundRobin"         ],
	[ TournamentType.swiss,   		"SwissSystem"        ],
	[ TournamentType.knockOut,    "Knockout"           ],
	[ TournamentType.simultaneous,"Simul"              ],
	[ TournamentType.scheveningen,"ScheveningenSystem" ]
];

class Tournament
{

constructor()
{
	this.title = '';
	this.place = '';
	this.startDate = new GameDate();
	this.endDate = new GameDate();
	this.speed = TournamentSpeed.normal;
	this.category = 0;
	this.country = Country.none;
	this.type = TournamentType.none;
	this.rounds = 0;
	this.teams = false;
	this.complete = false;
	this.threePoints = false;
	this.boardPoints = false;
}

copyFrom()
{
	let copyTournament = new Tournament();
	copyTournament.title = this.title;
	copyTournament.place = this.place;
	copyTournament.startDate = this.startDate.copyFrom();
	copyTournament.endDate = this.endDate.copyFrom();
	copyTournament.speed = this.speed;
	copyTournament.category = this.category;
	copyTournament.country = this.country;
	copyTournament.type = this.type;
	copyTournament.rounds = this.rounds;
	copyTournament.teams = this.teams;
	copyTournament.complete = this.complete;
	copyTournament.threePoints = this.threePoints;
	copyTournament.boardPoints = this.boardPoints;
	return copyTournament;
}

empty()
{
	return this.title.length == 0 &&
		this.place.length == 0 &&
		this.startDate.empty() &&
		this.endDate.empty() &&
		this.speed == TournamentSpeed.normal &&
		this.category == 0 &&
		this.country == Country.none &&
		this.type == TournamentType.none &&
		!this.rounds &&
		!this.teams &&
		!this.complete &&
		!this.threePoints &&
		!this.boardPoints;
}

description()
{
	let string = this.title;
	if (this.place.length)
	{
		if (string.length)
		{
			string += " ";
		}
		string += this.place;
	}
	if (string.length)
	{
		string += " ";
	}
	let year = this.startDate.year.toString().padStart(4, '0');
	string += year;
	return string;
}

}



const TournamentSpeed =
{
	normal : 0,
	rapid : 1,
	blitz : 2,
	corr : 3
};

const gameSpeeds =
[
	[ TournamentSpeed.normal, "Normal" ],
	[ TournamentSpeed.rapid,  "Rapid"  ],
	[ TournamentSpeed.blitz,  "Blitz"  ],
	[ TournamentSpeed.corr,   "Corr"   ]
];

function localizedTournamentSpeedString(speed)
{
	return gameSpeeds[speed][1];
}

function localizedTournamentSpeedStrings()
{
	let list = [];
	for (const speed of gameSpeeds)
	{
		list.push(speed[1]);
	}
	return list;
}

class Comments
{

constructor()
{
	this.afterText = '';
	this.beforeText = '';
	this.prefix = MovePrefix.none;
	this.style = MoveStyle.none;
	this.value = MoveValue.none;
	this.medals = new MoveMedals();
	this.arrows = new BoardArrowList();
	this.marks = new BoardMarkList();
	this.critical = MoveCritical.none;
	this.piecePath = false;
	this.diagram = false;
  this.endOfGame = false;
}

copyFrom()
{
	let copyComments = new Comments();
	copyComments.afterText = this.afterText;
	copyComments.beforeText = this.beforeText;
	copyComments.prefix = this.prefix;
	copyComments.style = this.style;
	copyComments.value = this.value;
	copyComments.medals = this.medals.copyFrom();
	copyComments.arrows = this.arrows.copyFrom();
	copyComments.marks = this.marks.copyFrom();
	copyComments.critical = this.critical;
	copyComments.piecePath = this.piecePath;
	copyComments.diagram = this.diagram;
 	copyComments.endOfGame = this.endOfGame;
	return copyComments;
}

empty()
{
	return this.afterText.length == 0 &&
		this.beforeText.length == 0 &&
		this.prefix == MovePrefix.none &&
		this.style == MoveStyle.none &&
		this.value == MoveValue.none &&
		this.medals.empty() &&
		this.arrows.empty() &&
		this.marks.empty() &&
		this.critical == MoveCritical.none &&
		this.piecePath == false &&
		this.diagram == false &&
 		this.endOfGame == false;
}

}

const MoveCritical =
{
	none : 0,
	opening : 1,
	middle : 2,
	end : 3
};

const MoveMedal =
{
	bestGame : 0,
	decidedTournament : 1,
	modelGame : 2,
	novelty : 3,
	pawnStructure : 4,
	strategy : 5,
	tactics : 6,
	attack : 7,
	sacrifice : 8,
	defence : 9,
	material : 10,
	piecePlay : 11,
	endgame : 12,
	tacticalBlunder : 13,
	strategicalBlunder : 14,
	user : 15
};

class MoveMedals
{

constructor()
{
	this.value = 0;
}

setUlong(value)
{
	this.value = value;
}

copyFrom()
{
	let copyMoveMedals = new MoveMedals();
	copyMoveMedals.value = this.value;
	return copyMoveMedals;
}

empty()
{
	return this.value == 0;
}

any()
{
	return this.value != 0;
}

none()
{
	return this.value == 0;
}

count()
{
	let counter = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.test(i))
		{
			counter++;
		}
	}
	return counter;
}

reset()
{
	this.value = 0;
}

set(tag, on)
{
	if (on)
	{
		this.value |= (1 << tag);
	}
	else
	{
		this.value &= ~(1 << tag);
	}
}

test(tag)
{
	return (this.value & (1 << tag)) != 0;
}

toUlong()
{
	return this.value;
}

}

const MovePrefix =
{
	none : 0,
	rr : 1,
	betterIs : 2,
	weakerIs : 3,
	equivalentIs : 4,
	withTheIdea : 5,
	aimedAgainst : 6
};

const MovePrefixes =
[
	[ MovePrefix.none,     		  ""   ],
	[ MovePrefix.rr,       		  "RR" ],
	[ MovePrefix.betterIs, 		  "&#8979;"  ],
	[ MovePrefix.weakerIs, 		  "&#8804;"  ],
	[ MovePrefix.equivalentIs,  "="  ],
	[ MovePrefix.withTheIdea,   "&#9651;"  ],
	[ MovePrefix.aimedAgainst,  "&#9661;"  ]
];

function movePrefixToString(prefix)
{
	return MovePrefixes[prefix][1];
}


const MoveStyle =
{
	none : 0,
	good : 1,
	bad : 2,
	interesting : 3,
	dubious : 4,
	excellent : 5,
	blunder : 6,
	zugzwang : 7,
	onlyMove : 8
};

const MoveStyles =
[
	[ MoveStyle.none,     		"" 	 ],
	[ MoveStyle.good,       	"!"  ],
	[ MoveStyle.bad, 					"?"  ],
	[ MoveStyle.interesting,	"!?" ],
	[ MoveStyle.dubious,	 		"?!" ],
	[ MoveStyle.excellent,  	"!!" ],
	[ MoveStyle.blunder, 			"??" ],
	[ MoveStyle.zugzwang, 		"&#8857;"  ],
	[ MoveStyle.onlyMove, 		"&#9723;"  ]
];

function moveStyleToString(style)
{
	return MoveStyles[style][1];
}


class MoveTreeNode
{

constructor()
{
	this.move = new GameMove();
	this.nextMove = null;
	this.prevMove = null;
	this.prevVariation = null;
	this.nextVariation = null;
  this.number = 0; // voor highlight variant (doen we in C++ niet momenteel)
}

setMove(move)
{
	this.move = move.copyFrom();
}

setGenMove(position, fromSquare, toSquare, captureSquares)
{
	this.move.setGenMove(position, fromSquare, toSquare, captureSquares);
}

}

class MoveTreePos
{

constructor()
{
	this.node_ = null;
	this.move = null;
}

isEqual(ref)
{
	return this.node_ == ref.node_;
}

isNotEqual(ref)
{
	return !this.isEqual(ref);
}

copyFrom()
{
	let copyMoveTreePos = new MoveTreePos();
  copyMoveTreePos.node_ = this.node_;
  copyMoveTreePos.move = this.move;
	return copyMoveTreePos;
}

}


class MoveTree
{

constructor()
{
	this.beginPosition_ = new GamePosition();
 	this.rootNode_ = null;
	this.beginMoveNumber_ = 1;
	this.beginPosition_.setStartPosition();
  this.rootComments_ = new Comments();
}

initRef(ref)
{
	this.setPosition(ref.beginPosition_, ref.beginMoveNumber_);
	this.rootComments_ = ref.rootComments_.copyFrom();
	this.rootNode_ = this.copyMoveTreeNode(ref.rootNode_);
}

copyFrom()
{
	let copyMoveTree = new MoveTree();
	copyMoveTree.initRef(this);
	return copyMoveTree;
}

setPosition(beginPosition, beginMoveNumber)
{
	this.beginPosition_ = beginPosition.copyFrom();
	this.beginMoveNumber_ = beginMoveNumber;
	this.rootComments_ = new Comments();
	this.rootNode_ = null;
}

beginMoveNumber()
{
	return this.beginMoveNumber_;
}

beginPosition()
{
	return this.beginPosition_.copyFrom();
}

// TO DO new voor engine nog testen
endPosOfMainLine()
{
	let pos = this.beginPos();
	this.endPos(pos);
	return pos;
}

// TO DO new voor engine nog testen
endPositionOfMainLine()
{
	let endPos = this.endPosOfMainLine();
	return this.position(endPos);
}


nextMoveNumber(pos)
{
  let movesPlayed = this.ply(pos) + 1;
	if (movesPlayed)
	{
		return this.beginMoveNumber_ +
			Math.floor((movesPlayed - 1 + this.beginPosition_.isBlackToMove()) / 2);
	}
	else
	{
		return this.beginMoveNumber_;
	}
}

ply(pos)
{
	let movesPlayed = 0;
	if (!pos.node_)
	{
		return 0;
	}
	let prevNode = pos.node_;
	while (1)
	{
		movesPlayed++;
		if (!prevNode.prevMove)
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			if (!node.prevMove)
			{
				break;
			}
		}
		if (prevNode.prevMove)
		{
			prevNode = prevNode.prevMove;
		}
		else
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			prevNode = node.prevMove;
		}
	}
	return movesPlayed;
}

// TO DO new testen
mainNumberOfMoves()
{
	let numberOfmoves = 0;
	let curNode = this.rootNode_;
	while (curNode)
	{
		numberOfmoves++;
		curNode = curNode.nextMove;
	}
	return numberOfmoves;
}

hasMoves()
{
	return this.rootNode_ != null;
}

isBegin(pos)
{
	return pos.isEqual(this.beginPos());
}

isEnd(pos)
{
	if (pos.node_)
	{
		return pos.node_.nextMove == null;
	}
	else if (this.rootNode_)
	{
		return false;
	}
	else
	{
		return true;
	}
}

backward(pos)
{
	if (!this.isBegin(pos))
	{
		if (pos.node_.prevMove)
		{
			pos.node_ = pos.node_.prevMove;
			pos.move = pos.node_.move;
		}
		else
		{
			let prevNode = pos.node_;
			while (prevNode.prevVariation)
			{
				prevNode = prevNode.prevVariation;
			}
			prevNode = prevNode.prevMove;
			pos.node_ = prevNode;
      if (pos.node_)
      {
  			pos.move = pos.node_.move;
      }
      else
      {
        pos.move = null;
      }
		}
	}
}

forward(pos)
{
	if (!this.isEnd(pos))
	{
		pos.node_ = this.nodeOfNextMove(pos);
		pos.move = pos.node_.move;
	}
}

forwardVariation(pos, variation)
{
	let numVariations = this.numberOfVariations(pos);
	if (variation < 0 || variation >= numVariations)
	{
		return;
	}
	let node = this.nodeOfNextMove(pos);
	let i = 0;
	while (i != variation)
	{
		i++;
		node = node.nextVariation;
	}
	pos.node_ = node;
	pos.move = pos.node_.move;
}

moveNumber(pos)
{
	if (!pos.node_)
	{
		return this.beginMoveNumber_;
	}
	let movesPlayed = this.ply(pos);
	if (movesPlayed)
	{
		return this.beginMoveNumber_ +
      Math.floor((movesPlayed - 1 + this.beginPosition_.isBlackToMove()) / 2);
	}
	else
	{
		return this.beginMoveNumber_;
	}
}

beginPos()
{
	let pos = new MoveTreePos();
	pos.node_ = null;
	pos.move = null;
	return pos;
}

endPos(pos)
{
	if (!this.isEnd(pos))
	{
		let prevNode = this.nodeOfNextMove(pos);
		while (true)
		{
			if (!prevNode.nextMove)
			{
				break;
			}
			prevNode = prevNode.nextMove;
		}
		pos.node_ = prevNode;
		pos.move = pos.node_.move;
	}
}

goToNodeNumber(nodeNumber)
{
	let pos = this.beginPos();
	if (nodeNumber > 0)
	{
    this.nodeNumber = 0;
		this.goToNodeNumberEx(pos, nodeNumber);
		return pos;
	}
	else
	{
		return pos;
	}
}

goToNodeNumberEx(pos, nodeNumber)
{
	while (true)
	{
		if (this.isEnd(pos))
		{
			return false;
		}
		let numVariations = this.numberOfVariations(pos);
		if (numVariations > 1)
		{
			let backup = pos.copyFrom();
			for (let i = 1; i < numVariations; i++)
			{
				this.forwardVariation(pos, i);
				this.nodeNumber++;
				if (this.nodeNumber == nodeNumber)
				{
					return true;
				}
				if (this.goToNodeNumberEx(pos, nodeNumber))
				{
					return true;
				}
        pos.node_ = backup.node_;
        pos.move = backup.move;
			}
		}
		this.forward(pos);
		this.nodeNumber++;
		if (this.nodeNumber == nodeNumber)
		{
			return true;
		}
	}
}

getNodeNumber(pos)
{
	if (!pos.node_)
	{
		return 0;
	}
	else
	{
		return pos.node_.number;
	}
}

previousNodes(pos)
{
	let moves = [];
 	if (!pos.node_)
  {
		return moves;
	}
	let prevNode = pos.node_;
	while (1)
	{
		moves.push(prevNode);
		if (!prevNode.prevMove)
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			if (!node.prevMove)
			{
				break;
			}
		}
		if (prevNode.prevMove)
		{
			prevNode = prevNode.prevMove;
		}
		else
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			prevNode = node.prevMove;
		}
	}
	return moves.reverse();
}

previousAndNextNodes(pos)
{
	let moves = this.previousNodes(pos);
	let numVariations = this.numberOfVariations(pos);
	if (numVariations == 0)
	{
		return moves;
	}
	let nextNode = this.nodeOfVariation(pos, 0);
	while (nextNode)
	{
		moves.push(nextNode);
		nextNode = nextNode.nextMove;
	}
	return moves;
}

numberOfVariations(pos)
{
	let nextNode = this.nodeOfNextMove(pos);
	if (!nextNode)
	{
		return 0;
	}
	let numVariations = 1;
	while (nextNode.nextVariation)
	{
		numVariations++;
		nextNode = nextNode.nextVariation;
	}
	return numVariations;
}

addMoveNode(pos, newNode)
{
	if (this.isBegin(pos))
	{
		this.rootNode_ = newNode;
		pos.node_ = newNode;
		pos.move = pos.node_.move;
	}
	else
	{
		pos.node_.nextMove = newNode;
		newNode.prevMove = pos.node_;
		pos.node_ = newNode;
		pos.move = pos.node_.move;
	}
}

addVariation(pos, newNode)
{
	let node = this.nodeOfNextMove(pos);
	while (node.nextVariation)
	{
		node = node.nextVariation;
	}
	node.nextVariation = newNode;
	newNode.prevVariation = node;

	pos.node_ = newNode;
	pos.move = pos.node_.move;
}

addMove(pos, move)
{
	let newNode = new MoveTreeNode();
 	newNode.setMove(move);
	if (this.isEnd(pos))
	{
		this.addMoveNode(pos, newNode);
	}
	else
	{
		this.addVariation(pos, newNode);
	}
}

// TO DO deze functie voor engine is nog niet getest
addMoves(pos, moves)
{
	for (const move of moves)
	{
		this.addMove(pos, move);
	}
}


hasShortVariations(pos)
{
	let node = this.nodeOfVariation(pos, 1);
	if (!node)
	{
		return false;
	}
	while (node)
	{
		let curNode = node.nextMove;
		while (curNode)
		{
			if (curNode.nextVariation)
			{
				return false;
			}
			curNode = curNode.nextMove;
		}
		node = node.nextVariation;
	}
	return true;
}

hasVariations()
{
	let curNode = this.rootNode_;
	while (curNode)
	{
		if (curNode.nextVariation)
		{
			return true;
		}
		curNode = curNode.nextMove;
	}
	return false;
}

hasComments()
{
	if (!this.rootComments_.empty())
	{
		return true;
	}
	if (this.hasVariations())
	{
		return true;
	}
	let curNode = this.rootNode_;
	while (curNode)
	{
		if (curNode.move.hasComments())
		{
			return true;
		}
		curNode = curNode.nextMove;
	}
	return false;
}

nodeOfNextMove(pos)
{
	if (pos.node_)
	{
		return pos.node_.nextMove;
	}
	return this.rootNode_;
}

nodeOfVariation(pos, variation)
{
	let i = 0;
	let node = this.nodeOfNextMove(pos);
	while (node && i != variation)
	{
		node = node.nextVariation;
		i++;
	}
	return node;
}

copyMoveTreeNode(node)
{
	let scurNode = node;
	let dcurNode = null;
	let newNode = null;
	let firstNode = null;
	while (scurNode)
	{
		newNode = new MoveTreeNode();
		newNode.setMove(scurNode.move);
		if (dcurNode)
		{
			dcurNode.nextMove = newNode;
			newNode.prevMove = dcurNode;
		}
		else
		{
			firstNode = newNode;
		}
		dcurNode = newNode;
		if (scurNode.nextVariation && !scurNode.prevVariation)
		{
			let varNode = scurNode.nextVariation;
			let dcurVarNode = dcurNode;
			while (varNode)
			{
				let newVarNode = this.copyMoveTreeNode(varNode);
				dcurVarNode.nextVariation = newVarNode;
				newVarNode.prevVariation = dcurVarNode;
				dcurVarNode = newVarNode;
				varNode = varNode.nextVariation;
			}
		}
		scurNode = scurNode.nextMove;
	}
	return firstNode;
}

rootComments()
{
	return this.rootComments_;
}

rootText()
{
	return this.rootComments_.afterText;
}

setRootText(text)
{
	this.rootComments_.afterText = text;
}

hasRootArrows()
{
	return !this.rootComments_.arrows.empty();
}

setRootArrows(arrows)
{
	this.rootComments_.arrows = arrows.copyFrom();
}

rootArrows()
{
	return this.rootComments_.arrows;
}

hasRootMarks()
{
	return !this.rootComments_.marks.empty();
}

setRootMarks(marks)
{
	this.rootComments_.marks = marks.copyFrom();
}

rootMarks()
{
	return this.rootComments_.marks;
}

hasRootMedals()
{
	return !this.rootComments_.medals.empty();
}

setRootMedals(medals)
{
	this.rootComments_.medals = medals.copyFrom();
}

rootMedals()
{
	return this.rootComments_.medals;
}

isMoveAtMainVariation(nodeNumber)
{
  if (nodeNumber == 0)
  {
    return true;
  }
	let curNode = this.rootNode_;
	while (curNode)
	{
    if (curNode.number == nodeNumber)
    {
      return true;
    }
		curNode = curNode.nextMove;
	}
	return false;
}

assignNodeNumbers()
{
	let pos = this.beginPos();
	this.nodeNumber = 0;
	this.assignNodeNumbersEx(pos);
}

assignNodeNumbersEx(pos)
{
	while (true)
	{
		if (this.isEnd(pos))
		{
			return;
		}
		let numVariations = this.numberOfVariations(pos);
		if (numVariations > 1)
		{
			let backup = pos.copyFrom();
			for (let i = 1; i < numVariations; i++)
			{
				this.forwardVariation(pos, i);
				this.nodeNumber++;
        pos.node_.number = this.nodeNumber;
				this.assignNodeNumbersEx(pos);
        pos.node_ = backup.node_;
        pos.move = backup.move;
			}
		}
		this.forward(pos);
  	this.nodeNumber++;
    pos.node_.number = this.nodeNumber;
	}
}

position(pos)
{
	let position = this.beginPosition_.copyFrom();
	if (!pos.node_)
	{
		return position;
	}
	let moves = this.previousMoves(pos);
  for (const move of moves)
	{
		position.forward(move.genMove());
	}
	return position;
}

previousMoves(pos)
{
	let moves = [];
 	if (!pos.node_)
  {
		return moves;
	}
	let prevNode = pos.node_;
	while (1)
	{
		moves.push(prevNode.move);
		if (!prevNode.prevMove)
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			if (!node.prevMove)
			{
				break;
			}
		}
		if (prevNode.prevMove)
		{
			prevNode = prevNode.prevMove;
		}
		else
		{
			let node = prevNode;
			while (node.prevVariation)
			{
				node = node.prevVariation;
			}
			prevNode = node.prevMove;
		}
	}
	return moves.reverse();
}

// TO DO nog niet getest
deleteMoves()
{
	this.rootComments_ = new Comments();
	this.rootNode_ = null; // Javascript schijnt zo slim te zijn dat hij alle
  // verdere nodus opruimt!
}

//  TO DO nog niet getest
mainMoves()
{
	let moves = [];
	let curNode = this.rootNode_;
	while (curNode)
	{
		moves.push(curNode.move);
		curNode = curNode.nextMove;
	}
	return moves;
}


}

const MoveValue =
{
	none : 0,
	whiteMuchBetter : 1,
	whiteBetter : 2,
	whiteSlightlyBetter : 3,
	balanced : 4,
	unclear : 5,
	blackSlightlyBetter : 6,
	blackBetter : 7,
	blackMuchBetter : 8,
	compensation : 9,
	counterPlay : 10,
	initiative : 11,
	attack : 12,
	timePressure : 13,
	developmentAdvantage : 14,
	novelty : 15
};

const MoveValues =
[
	[ MoveValue.none,     						  ""    ],
	[ MoveValue.whiteMuchBetter,        "+&#8211;" ],
	[ MoveValue.whiteBetter, 						"&#177;" ],
	[ MoveValue.whiteSlightlyBetter,		"&#10866;"  ],
	[ MoveValue.balanced, 							"="   ],
	[ MoveValue.unclear,  							"&#8734;" ],
	[ MoveValue.blackSlightlyBetter,  	"&#10865;"],
	[ MoveValue.blackBetter, 						"&#8723;" ],
	[ MoveValue.blackMuchBetter, 				"&#8211;+"],
	[ MoveValue.compensation,						"&#8773;" ],
	[ MoveValue.counterPlay, 						"&#8646;" ],
	[ MoveValue.initiative,  						"&#8593;" ],
	[ MoveValue.attack, 								"&#8594;" ],
	[ MoveValue.timePressure, 					"&#8853;" ],
	[ MoveValue.developmentAdvantage,		"&#10227;"],
	[ MoveValue.novelty, 								"N"   ]
];

function moveValueToString(value)
{
	return MoveValues[value][1];
}


const DiagramAtBegin =
{
	never : 0,
	always : 1,
	setup : 2
};

const NotationType =
{
	none : 0,
	mainLine : 1,
	singleLine : 2,
	subLine : 3,
	shortLine : 4,
	prefix : 5,
	beforeText : 6,
	afterText : 7,
	colors : 8,
	medals : 9,
	piecePath : 10,
	diagram : 11
};

/*
TO DO
- Aanpassen voor tekst after van root daar kan dia inzitten (zie c++)
- Vette tekst en niet vette mainLine testen bij wel/niet MultiPV
*/
class NotationWriter
{

constructor()
{
	this.streamWriter_ = new StreamWriter();
  this.annotations_ = true;
  this.boldText = false;
  this.boldMainLine = true;
  this.diagrams_ = true;
  this.diagramAtBegin_ = DiagramAtBegin.never;
  this.multiPV = false;
  this.showRoot = true;
 	this.variations_ = true;
 	this.upToMoveNumber_ = -1;
  this.betweenShort_ = false;
  this.openShortBracket_ = false;
	this.closeShortBracket_ = false;
	this.beginVariation_ = true;
  this.comments_ = false;
  this.endOfGame_ = false;
  this.diagramNumber_ = 0;
	this.beginLine_ = true;
  this.moves_ = null;
 	this.notationType_ = NotationType.none;
}

write(moves)
{
	this.moves_ = moves;
 	let beginPos = this.moves_.beginPos();
	let beginPosition = this.moves_.beginPosition();
	this.notationType_ = NotationType.none;
	this.beginVariation_ = true;
	this.openShortBracket_ = false;
	this.closeShortBracket_ = false;
	this.betweenShort_ = false;
	this.comments_ = this.moves_.hasComments();
	this.beginLine_ = true;
	this.diagramNumber_ = 0;

	if (this.multiPV)
	{
		this.setCurrentType(NotationType.singleLine);
		this.writeMultiPVMoves();
	}
	else
	{
    // TO DO dit nog aanpassen aan nieuwe C++ met dia in after van root
    if (this.diagramAtBegin_ == DiagramAtBegin.always ||
      (this.diagramAtBegin_ == DiagramAtBegin.setup && !beginPosition.isStartPosition()))
    {
      if (this.diagrams_)
      {
        this.addDiagram(beginPos, beginPosition, diagramNumber_);
        this.beginVariation_ = true;
      }
    }

    this.setCurrentType((this.comments_ && !this.endOfGame) ? NotationType.mainLine : NotationType.singleLine);
    this.writeStartMainLine(this.comments_);
    this.addMove(beginPos, "");
    this.writeAfterText(beginPos, this.moves_.rootComments().afterText);

    if (this.moves_.hasMoves())
    {
      this.writeMoves();
    }
   	this.setCurrentType(NotationType.none);
   	this.writeEndMainLine();
  }
}

writeMultiPVMoves()
{
	let pos = this.moves_.beginPos();
	let numberOfVariations = this.moves_.numberOfVariations(pos);
	for (let i = 0; i < numberOfVariations; i++)
	{
    this.streamWriter_.WriteLine('<div class="variation-row">');
		pos = this.moves_.beginPos();
  	let position = this.moves_.beginPosition();
	  let moveNumber = this.moves_.beginMoveNumber();
		this.moves_.forwardVariation(pos, i);
		this.beginVariation_ = true;
		let firstMove = true;
		let move = pos.move;
		let beforeText = move.beforeText();
		if (beforeText.length)
		{
			this.writeBeforeText(pos, beforeText);
		}
		this.setCurrentType(NotationType.singleLine);
		do
		{
			if (firstMove)
			{
				pos.move.clearBeforeText();
			}
			this.writeMove(pos, position, moveNumber);
			if (firstMove)
			{
				pos.move.setBeforeText(beforeText);
				firstMove = false;
			}
			if (this.moves_.isEnd(pos))
			{
				break;
			}
			position.forward(pos.move);
			if (position.isWhiteToMove())
			{
				moveNumber++;
			}
			this.moves_.forward(pos);
		} while (true);
    this.streamWriter_.WriteLine('<div');
	}
}

writeMoves()
{
  let dataLevel = 0;
 	let pos = this.moves_.beginPos();
	let position = this.moves_.beginPosition();
  let moveNumber = this.moves_.beginMoveNumber();

	let upTo = 100000;
	if (this.upToMoveNumber_ == 0)
	{
		return;
	}
	if (this.upToMoveNumber_ != -1)
	{
		upTo = this.upToMoveNumber_;
	}
	let lastMoveNumber = moveNumber + upTo - 1;
	this.beginVariation_ = true;
	while (true)
	{
		let numberOfVariations = this.moves_.numberOfVariations(pos);
		while (moveNumber <= lastMoveNumber && !this.moves_.isEnd(pos))
		{
      this.moves_.forward(pos);
    	this.setCurrentType((this.comments_ && !this.endOfGame) ? NotationType.mainLine : NotationType.singleLine);
			this.writeMove(pos, position, moveNumber);
			position.forward(pos.move.genMove());
 			if (position.isWhiteToMove())
			{
				moveNumber++;
			}
			if (this.variations_ && numberOfVariations > 1)
			{
				break;
			}
			numberOfVariations = this.moves_.numberOfVariations(pos);
		}
		if (!numberOfVariations || moveNumber > lastMoveNumber)
		{
			return;
		}
    position.backward(pos.move.genMove());
		if (position.isBlackToMove())
		{
			moveNumber--;
		}
    this.moves_.backward(pos);
		for (let i = 1; i < numberOfVariations; i++)
		{
      dataLevel++;
      let spanString = "<span class=\"tdline\" data-level=\"";
      spanString += dataLevel.toString();
      spanString += "\">";
      this.streamWriter_.WriteLine(spanString);
			this.blockLineFeed(NotationType.subLine);
			this.addWord("[", true);
			let prefix = '';
      this.writeSubLines(pos, position, moveNumber, i, prefix, dataLevel);
			this.setCurrentType(NotationType.subLine);
			this.addWord("]", true);
      this.streamWriter_.WriteLine("</span>");
      dataLevel--;
     	this.setCurrentType((this.comments_ && !this.endOfGame) ? NotationType.mainLine : NotationType.singleLine);
		}
		this.blockLineFeed(this.notationType_);
    this.moves_.forward(pos);
    position.forward(pos.move.genMove());
		if (position.isWhiteToMove())
		{
			moveNumber++;
		}
		this.beginVariation_ = true;
	}
}

writeMove(pos, position, moveNumber)
{
	if (this.moves_.isBegin(pos))
	{
		return;
	}
 	let move = pos.move;

	let string = '';
  let dots = false;
  if (this.annotations_)
	{
		if (move.isBlack())
		{
			if (!this.moves_.isBegin(pos))
			{
        let prevPos = pos.copyFrom();
        this.moves_.backward(prevPos);
        if (prevPos.move)
        {
  				if (prevPos.move.hasAfterText())
	  			{
		  			dots = true;
			  	}
        }
			}
		}
  }
	if (this.openShortBracket_)
	{
		string = "(";
		this.openShortBracket_ = false;
		if (this.annotations_ && move.hasBeforeText())
		{
			this.addWord("(", true);
			let backupCurrentType = this.notationType_;
			this.writeBeforeText(pos, move.beforeText());
			this.setCurrentType(backupCurrentType);
			string = "";
      dots = true;
		}
	}
	else
	{
		if (this.annotations_ && move.hasBeforeText())
		{
  	  let backupCurrentType = this.notationType_;
	  	this.writeBeforeText(pos, move.beforeText());
		  this.setCurrentType(backupCurrentType);
      dots = true;
    }
	}
	if (move.hasPrefix())
	{
		string += movePrefixToString(move.prefix());
	}
	let whiteMove = move.isWhite();
	if (whiteMove)
	{
    string += moveNumber;
		string += '.';
	}
	else
	{
		if (this.beginVariation_ || dots)
		{
 			string += moveNumber;
			string += "...";
		}
	}
	string += moveToString(position, move.genMove(), false);
	if (move.hasStyle())
	{
		string += moveStyleToString(move.style());
	}
	if (move.hasValue())
	{
		string += moveValueToString(move.value());
	}
	if (move.hasEndOfGame())
	{
		string += " End Of Game";
  }
	if (this.closeShortBracket_ || this.betweenShort_)
	{
		if (this.moves_.isEnd(pos) && (!this.annotations_ || !move.hasAfterText()))
		{
			if (this.closeShortBracket_)
			{
				string += ")";
				this.closeShortBracket_ = false;
			}
			else
			{
				string += ";";
				this.betweenShort_ = false;
			}
		}
	}
	this.addMove(pos, string);
	this.beginVariation_ = false;

	if (move.hasDiagram())
	{
		let afterText = move.afterText();
    let diaPos = afterText.indexOf("[#]");
		let textBeforeDiagram = afterText.substring(0, diaPos);
	  let textAfterDiagram = afterText.substring(diaPos + 3);
		if (textBeforeDiagram.length)
		{
			this.writeAfterText(pos, textBeforeDiagram);
		}
		this.diagramNumber_++;
		if (this.diagrams_)
		{
			this.blockLineFeed(NotationType.none);
      this.addDiagram(pos, position, this.diagramNumber_);
			this.beginVariation_ = true;
		}
		if (textAfterDiagram.length)
		{
			this.writeAfterText(pos, textAfterDiagram);
		}
	}
	else
	{
		this.writeAfterText(pos, move.afterText());
	}

  if (move.hasEndOfGame())
	{
    this.streamWriter_.Write("<div>&nbsp;</div>"); // linefeed
   	this.writeEndMainLine();
 	  this.writeStartMainLine(false); // de rest zonder dikgedrukte zetten
 	  this.endOfGame_ = true;
	}
}

setCurrentType(notationType)
{
	if (notationType != this.notationType_)
	{
		this.blockOff();
		this.notationType_ = notationType;
		this.blockOn();
	}
}

blockOn()
{
}

blockOff()
{
	this.notationType_ = NotationType.none;
}

blockLineFeed(notationType)
{
	this.blockOff();
	this.notationType_ = NotationType.none;
  // TO DO
  // hier zit lineFeed in c++
  // waarom was die er nog niet?
  // doen we dat anders?
  this.streamWriter_.Write("<br>"); // TO DO testen
	if (notationType != NotationType.none)
	{
		this.notationType_ = notationType;
		this.blockOn();
	}
}

addDiagram(pos, position, number)
{
  this.beginLine_ = true;
	let spanString = "<span class=\"tddia\" movenr=\"";
  spanString += this.moves_.getNodeNumber(pos).toString();
	spanString += "\">",
	this.streamWriter_.WriteLine(spanString);
	this.streamWriter_.WriteLine("<canvas></canvas>");
	this.streamWriter_.WriteLine("</span>");
	this.beginVariation_ = true;
}

writeText(pos, text)
{
  this.writeStartComment(pos);
	this.addText(text);
  this.writeEndComment();
}

writeSubLines(posA, positionA, moveNumber, variation, prefix, dataLevel)
{
  let pos = posA.copyFrom();
  let position = positionA.copyFrom();

	if (prefix.length)
	{
		this.setCurrentType(NotationType.prefix);
		let subPrefix = prefix;
		subPrefix += ")";
    let spanString = "<span class=\"tdprefix\">";
    this.streamWriter_.WriteLine(spanString);
  	this.addWord(subPrefix);
    this.streamWriter_.WriteLine("</span>");
	}
	let numberOfVariations = 0;
	let numberOfMoves = 1;
  this.moves_.forwardVariation(pos, variation);
	this.beginVariation_ = true;
	do
	{
		this.setCurrentType(NotationType.subLine);
		this.writeMove(pos, position, moveNumber);
		if (numberOfVariations > 1)
		{
      this.moves_.backward(pos);
      this.writeShortLines(pos, position, moveNumber);
      this.moves_.forward(pos);
			this.beginVariation_ = true;
		}
		position.forward(pos.move.genMove());
		if (position.isWhiteToMove())
		{
			moveNumber++;
		}
		numberOfVariations = this.moves_.numberOfVariations(pos);
		if (numberOfVariations == 0)
		{
			break;
		}
		if (numberOfVariations > 1)
		{
			if (!this.moves_.hasShortVariations(pos))
			{
				break;
			}
		}
    this.moves_.forward(pos);
		numberOfMoves++;
	} while (true);

	if (this.moves_.isEnd(pos))
	{
		return;
	}

	let prefixLevel = prefix.length;
	let subPrefix = '';
	let variantNumber = 1;
	for (let i = 0; i < numberOfVariations; i++)
	{
		if (prefixLevel == 0)
		{
      subPrefix = String.fromCharCode('A'.charCodeAt() + variantNumber - 1);
		}
		else if (prefixLevel == 1)
		{
      subPrefix = prefix;
      subPrefix += variantNumber;
		}
		else if (prefixLevel == 2)
		{
      subPrefix = prefix;
      subPrefix += String.fromCharCode('a'.charCodeAt() + variantNumber - 1);
		}
		else
		{
      subPrefix = prefix;
      subPrefix += variantNumber;
		}

    let spanString = "<span class=\"tdline\" data-level=\"";
    spanString += dataLevel.toString();
    spanString += "\">";
    this.streamWriter_.WriteLine(spanString);
  	this.blockLineFeed(this.notationType_);
    this.writeSubLines(pos, position, moveNumber, i, subPrefix, dataLevel);
    this.streamWriter_.WriteLine("</span>");
		variantNumber++;
	}
}

writeShortLines(posA, positionA, moveNumber)
{
  let pos = posA.copyFrom();
  let position = positionA.copyFrom();

	this.setCurrentType(NotationType.shortLine);
	this.openShortBracket_ = true;
	this.betweenShort_ = false;
	let numberOfVariations = this.moves_.numberOfVariations(pos);
	for (let i = 1; i < numberOfVariations; i++)
	{
		if (i == numberOfVariations - 1)
		{
			this.closeShortBracket_ = true;
		}
		if (i < numberOfVariations - 1)
		{
			this.betweenShort_ = true;
		}
    this.writeShortLine(pos, position, moveNumber, i);
		if (this.betweenShort_)
		{
			this.setCurrentType(NotationType.shortLine);
			this.addWord(";", false);
			this.betweenShort_ = false;
		}
	}
	this.setCurrentType(NotationType.shortLine);
	if (this.closeShortBracket_)
	{
		this.addWord(")", false);
		this.closeShortBracket_ = false;
	}
}

writeShortLine(posA, positionA, moveNumber, variation)
{
  let pos = posA.copyFrom();
  let position = positionA.copyFrom();

  this.moves_.forwardVariation(pos, variation);
	let numberOfMoves = 0;
	this.beginVariation_ = true;
	do
	{
		numberOfMoves++;
		this.setCurrentType(NotationType.shortLine);
		this.writeMove(pos, position, moveNumber);
		if (this.moves_.isEnd(pos))
		{
			break;
		}
		position.forward(pos.move.genMove());
		if (position.isWhiteToMove())
		{
			moveNumber++;
		}
    this.moves_.forward(pos);
	} while (true);
}

addMove(pos, string)
{
	if (string.length)
	{
 		this.addMoveWord(pos, string);
	}
	else
	{
		if (this.showRoot)
    {
      this.addMoveWord(pos, "[...]");
    }
	}
	if (pos.move)
	{
		if (pos.move.hasArrows() || pos.move.hasMarks())
		{
			this.addGraphic(pos, NotationType.colors);
		}
		if (pos.move.hasDiagram())
		{
		}
		if (pos.move.hasPiecePath())
		{
			this.addGraphic(pos, NotationType.piecePath);
		}
		if (pos.move.hasMedals())
		{
			this.addGraphic(pos, NotationType.medals);
		}
	}
	else
	{
		if (this.moves_.hasRootArrows() || this.moves_.hasRootMarks())
		{
			this.addGraphic(pos, NotationType.colors);
		}
		if (this.moves_.hasRootMedals())
		{
		 	this.addGraphic(pos, NotationType.medals);
		}
	}
}

addWord(string, space)
{
	if (string.length == 0)
	{
		return;
	}
	if (!this.beginLine_ && space)
	{
		this.streamWriter_.Write(" ");
	}
	this.streamWriter_.Write(string);
	this.beginLine_ = false;
}

writeBeforeText(pos, beforeText)
{
	if (this.annotations_ && beforeText.length)
	{
		this.setCurrentType(NotationType.beforeText);
		this.writeText(pos, beforeText);
	}
}

writeAfterText(pos, afterText)
{
	if (this.annotations_ && afterText.length)
	{
		this.setCurrentType(NotationType.afterText);
		this.writeText(pos, afterText);
	}
}

addText(text)
{
  let totalText = text;
  let t1 = totalText.replaceAll("<br><br>", "<br>");
  let t2 = t1.replaceAll("<br><br>", "<br>");
  let t3 = t2.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = t3;
  this.streamWriter_.Write(s);
}

addMoveWord(pos, string)
{
	if (string.length == 0)
	{
		return;
	}
	if (!this.beginLine_)
	{
		this.streamWriter_.Write(" ");
	}
  let moveClassName = '';
  if (pos.move)
  {
  	if (pos.move.hasCritical())
	  {
		  if (pos.move.critical() == MoveCritical.opening)
  		{
	  		moveClassName = "tdmove-crit-opening";
		  }
  		else if (pos.move.critical() == MoveCritical.middle)
	  	{
		  	moveClassName = "tdmove-crit-middle";
  		}
	  	else if (pos.move.critical() == MoveCritical.end)
		  {
  			moveClassName = "tdmove-crit-end";
	  	}
  	}
  }
	let goToMoveString = "<span class=\"";
	if (moveClassName.length == 0)
	{
		goToMoveString += "tdmove\" movenr=\"";
	}
	else
	{
		goToMoveString += "tdmove " + moveClassName + "\" movenr=\"";
	}
  goToMoveString += this.moves_.getNodeNumber(pos).toString();
  goToMoveString += "\"";
	goToMoveString += ">",
	goToMoveString += string;
	goToMoveString += "</span>";

	this.streamWriter_.WriteLine(goToMoveString);
	this.beginLine_ = false;
}

addGraphic(pos, notationType)
{
  if (notationType == NotationType.colors)
  {
    this.printGraphics(pos);
  }
  else if (notationType == NotationType.medals)
  {
    this.printMedals(pos);
  }
}

printGraphics(pos)
{
	let spanString = "<span class=\"tdcolors\" movenr=\"";
  spanString += this.moves_.getNodeNumber(pos).toString();
	spanString += "\">",
	this.streamWriter_.WriteLine(spanString);
	this.streamWriter_.WriteLine("</span>");
}

printMedals(pos)
{
	let spanString = "<span class=\"tdmedal\" movenr=\"";
  spanString += this.moves_.getNodeNumber(pos).toString();
	spanString += "\">",
	this.streamWriter_.WriteLine(spanString);
	this.streamWriter_.WriteLine("<canvas></canvas>");
	this.streamWriter_.WriteLine("</span>");
}

writeStartMainLine(commented)
{
 	let spanString = "<span class=\"tdline\"";
	if (commented)
	{
		spanString += " data-commented=\"1\"";
	}
	spanString += " data-level=\"0\">";
	this.streamWriter_.Write(spanString);
}

writeEndMainLine()
{
  this.streamWriter_.WriteLine("</span>");
}

writeStartComment(pos)
{
  let className = "tdcomment";
  if (this.boldText)
  {
    className += " is-bold";
  }
  let spanString = "<span class=\"" + className + "\" movenr=\"";
  spanString += this.moves_.getNodeNumber(pos).toString();
  spanString += "\">";
  this.streamWriter_.Write(spanString);
}

writeEndComment()
{
  this.streamWriter_.WriteLine("</span>");
}

setShowRoot(value)
{
  this.showRoot = value;
}

setBoldText(value)
{
  this.boldText = value;
}

setBoldMainLine(value)
{
  this.boldMainLine = value;
}

setMultiPV(value)
{
  this.multiPV = value;
}

} // end class
const BoardArrowType =
{
	attack : 1,
	defence : 2,
	plan : 3
};

class BoardArrow
{

constructor()
{
	this.from = 0;
	this.to = 0;
	this.type = BoardArrowType.attack;
}

copyFrom()
{
	let copyBoardArrow = new BoardArrow();
	copyBoardArrow.from = this.from;
	copyBoardArrow.to = this.to;
	copyBoardArrow.type = this.type;
	return copyBoardArrow;
}

}

function createBoardArrow(from, to, type)
{
	let s = new BoardArrow();
	s.from = from;
	s.to = to;
	s.type = type;
	return s;
}
class BoardArrowList
{

constructor()
{
	this.arrows_ = [];
}

copyFrom()
{
	let copyBoardArrowList = new BoardArrowList();
	for (const arrow of this.arrows_)
	{
		copyBoardArrowList.add(arrow.copyFrom());
	}
	return copyBoardArrowList;
}

clear()
{
	this.arrows_.length = 0;
}

empty()
{
	return this.arrows_.length == 0;
}

size()
{
	return this.arrows_.length;
}

add(arrow)
{
	let newArrow = arrow.copyFrom();
	this.arrows_.push(newArrow);
}

}

const BoardMarkType =
{
	weak : 0,
	strong : 1,
	pattern : 2
};

class BoardMark
{

constructor()
{
	this.square = 0;
	this.type = BoardMarkType.weak;
}

copyFrom()
{
	let copyBoardMark = new BoardMark();
	copyBoardMark.square = this.square;
	copyBoardMark.type = this.type;
	return copyBoardMark;
}

}

function createBoardMark(square, type)
{
	let newMark = new BoardMark();
	newMark.square = square;
	newMark.type = type;
	return newMark;
}

class BoardMarkList
{

constructor()
{
	this.marks_ = [];
}

copyFrom()
{
	let copyBoardMarkList = new BoardMarkList();
	for (const mark of this.marks_)
	{
		copyBoardMarkList.add(mark.copyFrom());
	}
	return copyBoardMarkList;
}

clear()
{
	this.marks_.length = 0;
}

empty()
{
	return this.marks_.length == 0;
}

size()
{
	return this.marks_.length;
}

add(boardMark)
{
	let newBoardMark = boardMark.copyFrom();
	this.marks_.push(newBoardMark);
}

}

const PieceFigurine =
{
	pawn    : 0,
	knight  : 1,
	bishop  : 2,
	rook    : 3,
  queen   : 4,
	ling    : 5,
};

// argument piece is een PieceFigurine
function pieceChar(piece)
{
	let string = '';
	switch (piece)
	{
		case PieceFigurine.pawn:
			string = "P";
			break;
		case PieceFigurine.knight:
			string = "N";
			break;
		case PieceFigurine.bishop:
			string = "B";
			break;
		case PieceFigurine.rook:
			string = "R";
			break;
		case PieceFigurine.queen:
			string = "Q";
			break;
		case PieceFigurine.king:
			string = "K";
			break;
	}
	return string;
}

class Game
{

constructor()
{
  this.plys = 0;
	this.header = new GameHeader();
	this.moves = new MoveTree();
}

copyFrom()
{
	let copyGame = new Game();
  copyGame.plys = this.plys;
	copyGame.header = this.header.copyFrom();
	copyGame.moves = this.moves.copyFrom();
	return copyGame;
}

}

const colBlueDarkSquares = 	 		"#7B8295";
const colBlueLightSquares =			"#9F9F9F";
const colBlueMargin = 			    "#7B8295";
const colBlueCoordinates = 		  "#FFFFFF";
const colBlueBackground =       "#D0B194";

const colSquareWeak	   = "#E13129";
const colSquareStrong	 = "#389C13";
const colSquarePattern = "#E2B628";

const colArrowAttack	 = "#E13129";
const colArrowDefence	 = "#389C13";
const colArrowPlan	   = "#E2B628";

class Board
{

constructor()
{
	this.canvas = null;
	this.bitmapInitialized = false;
	this.lightSquareBitmap = null;
	this.darkSquareBitmap = null;
	this.marginBitmap = null;
	this.boardLeft = 0;
	this.boardTop = 0;
	this.boardWidth = 0;
	this.boardHeight = 0;
	this.boardRight = 0;
	this.boardBottom = 0;
	this.boardProperties = new BoardProperties();
	this.position = new GamePosition();
	this.arrows = new BoardArrowList();
	this.marks = new BoardMarkList();
  this.lastMove = new GenMove();
  this.showLastMove = true;
	this.solidDarkSquares = true;
	this.solidLightSquares = true;
	this.flipped = false;
	this.darkSquareColor = colBlueDarkSquares;
	this.lightSquareColor = colBlueLightSquares;
	this.coordinatesColor = clYellow;
	this.leftFrameColor = clWhite;
	this.rightFrameColor = clWhite;
	this.marginColor = clBlue;
	this.solidMargin = true;
	this.animationFrom = sq_NB;
	this.animationTo = sq_NB;
	this.animationCapture = false;
	this.animationPath = [];
	this.step = 0;
}

setCanvas(canvas)
{
	this.canvas = canvas;
}

setBoardProperties(boardProperties)
{
	this.boardProperties = boardProperties;
	this.boardWidth = boardProperties.boardWidth();
	this.boardHeight = boardProperties.boardWidth();

	this.boardLeft = (this.canvas.width - this.boardWidth) / 2;
	let top = (this.canvas.height - this.boardHeight) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.boardTop = top;
	this.boardRight = this.boardLeft + this.boardWidth - 1;
	this.boardBottom = this.boardTop + this.boardHeight - 1;
	this.bitmapInitialized = false;
	this.setScheme();
}

setPosition(position)
{
	this.position = position.copyFrom();
	this.arrows.clear();
	this.marks.clear();
}

setArrows(arrows)
{
	this.arrows = arrows.copyFrom();
}

setMarks(marks)
{
	this.marks = marks.copyFrom();
}

setLastMove(move)
{
  this.lastMove = move.copyFrom();
}

setFlipped(flipped)
{
	this.flipped = flipped;
}

flipBoard()
{
	this.flipped = !this.flipped;
}

draw()
{
	if (!this.canvas) return;
	if (this.boardWidth <= 0 || this.boardHeight <= 0)
	{
		return;
	}
	this.drawOffScreenBoard();
}

initBitmaps()
{
	let scheme = this.boardProperties.scheme;
	if (this.bitmapInitialized)
	{
		return;
	}
	this.bitmapInitialized = true;
	if (scheme == BoardScheme.standard)
	{
  	this.lightSquareBitmap = bitmapManager.bitmap("images/board/LightSquare");
  	this.darkSquareBitmap = bitmapManager.bitmap("images/board/DarkSquare");
		this.marginBitmap = bitmapManager.bitmap("images/board/Margin");
	}
}

setScheme()
{
	this.initBitmaps();
	let scheme = this.boardProperties.scheme;
	if (scheme == BoardScheme.standard)
	{
		this.solidMargin = false;
		this.solidDarkSquares = false;
		this.solidLightSquares = false;
		this.coordinatesColor = "#FFFF97";
		this.leftFrameColor = "#9B2E31";
		this.rightFrameColor = clBlack;
	}
}

drawOffScreenBoard()
{
	this.setScheme();
	if (this.boardProperties.scheme == BoardScheme.standard)
	{
		let backgroundImage = bitmapManager.bitmap("images/board/BoardBackground");
		this.fillRectPattern(new Rect(0, 0, this.canvas.width, this.canvas.height), backgroundImage);
	}
	this.drawFrame();  // c++ heeft deze verplaatst
	this.drawMargin(); // c++ heeft deze verplaatst
	this.drawBorder(); // c++ noemt deze drawFrameAroundBoard
  if (chess)
  {
	  this.drawSquares();
  }
  else
  {
	  this.drawLightSquares();
  	this.drawDarkSquares();
  }
  // c++ heeft als extra drawFrameBetweenSquares();
  this.drawLastMove();
 	this.drawMarks();
 	this.drawPieces();
 	this.drawArrows();
	this.drawCoordinates(); // c++ heeft deze verplaatst
	this.drawToMove();      // c++ heeft deze verplaatst
}

drawFrame()
{
	let borderTop = this.boardTop;
	let borderLeft = this.boardLeft;
	let borderRight = this.boardRight;
	let borderBottom = this.boardBottom;
	let borderWidth = this.boardProperties.frameWidth;
	this.fillRectColor(new Rect(borderLeft, borderTop, borderRight, borderTop+borderWidth-1), this.leftFrameColor);
	this.fillRectColor(new Rect(borderLeft, borderBottom-borderWidth+1, borderRight, borderBottom), this.rightFrameColor);
	this.fillRectColor(new Rect(borderLeft, borderTop, borderLeft+borderWidth-1, borderBottom), this.leftFrameColor);
	this.fillRectColor(new Rect(borderRight-borderWidth+1, borderTop, borderRight, borderBottom), this.rightFrameColor);
}

drawMargin()
{
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	if (!marginWidth)
	{
		return;
	}
	if (this.solidMargin || !this.marginBitmap)
	{
		this.drawSolidMargin(this.marginColor);
	}
	else
	{
		let left = this.boardLeft + frameWidth;
		let top = this.boardTop + frameWidth;
		let right = this.boardRight - frameWidth;
		let bottom = this.boardTop + frameWidth + marginWidth - 1;
		this.fillRectPattern(new Rect(left, top, right, bottom), this.marginBitmap);

		left = this.boardLeft + frameWidth;
		top = this.boardTop + frameWidth;
		right = this.boardLeft + frameWidth + marginWidth - 1;
		bottom = this.boardBottom - frameWidth;
		this.fillRectPattern(new Rect(left, top, right, bottom), this.marginBitmap);

		left = this.boardLeft + frameWidth;
		top = this.boardBottom - frameWidth - marginWidth + 1;
		right = this.boardRight - frameWidth;
		bottom = this.boardBottom - frameWidth;
		this.fillRectPattern(new Rect(left, top, right, bottom), this.marginBitmap);

		left = this.boardRight - frameWidth - marginWidth + 1;
		top = this.boardTop + frameWidth;
		right = this.boardRight - frameWidth;
		bottom = this.boardBottom - frameWidth;
		this.fillRectPattern(new Rect(left, top, right, bottom), this.marginBitmap);
	}
}

drawSolidMargin()
{
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	if (!marginWidth)
	{
		return;
	}

	let left = this.boardLeft + frameWidth;
	let top = this.boardTop + frameWidth;
	let right = this.boardRight - frameWidth;
	let bottom = this.boardTop + frameWidth + marginWidth - 1;
	this.fillRectColor(new Rect(left, top, right, bottom), this.marginColor);

	left = this.boardLeft + frameWidth;
	top = this.boardTop + frameWidth;
	right = this.boardLeft + frameWidth + marginWidth - 1;
	bottom = this.boardBottom - frameWidth;
	this.fillRectColor(new Rect(left, top, right, bottom), this.marginColor);

	left = this.boardLeft + frameWidth;
	top = this.boardBottom - frameWidth - marginWidth + 1;
	right = this.boardRight - frameWidth;
	bottom = this.boardBottom - frameWidth;
	this.fillRectColor(new Rect(left, top, right, bottom), this.marginColor);

	left = this.boardRight - frameWidth - marginWidth + 1;
	top = this.boardTop + frameWidth;
	right = this.boardRight - frameWidth;
	bottom = this.boardBottom - frameWidth;
	this.fillRectColor(new Rect(left, top, right, bottom), this.marginColor);
}

drawToMove()
{
	if (this.boardProperties.showToMove)
	{
  	if (!this.boardProperties.marginWidth)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.position.isWhiteToMove())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.toMoveRect();
		let ctx = this.getCanvasContext();
		ctx.beginPath();
		ctx.fillStyle = color;
		let radius = rect.Width() * 0.40;
		ctx.arc(rect.Left + rect.Width()/2 - 1, rect.Top + rect.Height()/2 - 1,
			radius, 0, 2 * Math.PI);
		ctx.fill();
	}
}

drawBorder()
{
	let borderColor = clBlack;
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	let borderWidth = this.boardProperties.borderWidth;
	let borderTop = this.boardTop + frameWidth + marginWidth;
	let borderLeft = this.boardLeft + frameWidth + marginWidth;
	let borderRight = this.boardRight - frameWidth - marginWidth;
	let borderBottom = this.boardBottom - frameWidth - marginWidth;
	this.fillRectColor(new Rect(borderLeft, borderTop, borderRight, borderTop+borderWidth-1), borderColor);
	this.fillRectColor(new Rect(borderLeft, borderBottom-borderWidth+1, borderRight, borderBottom), borderColor);
	this.fillRectColor(new Rect(borderLeft, borderTop, borderLeft+borderWidth-1, borderBottom), borderColor);
	this.fillRectColor(new Rect(borderRight-borderWidth+1, borderTop, borderRight, borderBottom), borderColor);
}

getCanvasContext()
{
	return this.canvas.getContext('2d');
}

drawRect(rect, color)
{
	let ctx = this.getCanvasContext();
	ctx.beginPath();
	ctx.lineWidth = "1";
	ctx.strokeStyle = color;
	ctx.rect(rect.Left, rect.Top, rect.Width(), rect.Height());
	ctx.stroke();
}

fillRectColor(rect, color)
{
	let ctx = this.getCanvasContext();
	ctx.fillStyle = color;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());
}

fillRectPattern(rect, img)
{
	let ctx = this.getCanvasContext();
	let ptrn = ctx.createPattern(img, 'repeat');
	ctx.fillStyle = ptrn;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());
}

fillRectImage(rect, img)
{
	let ctx = this.getCanvasContext();
	let ptrn = ctx.createPattern(img, 'no-repeat');
	ctx.fillStyle = ptrn;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());
}

boardLightSquareRect(square)
{
	let file = file_NB;
	let rank = rank_NB;
	if (this.flipped)
	{
		file = fileOf(mirrorSquare(square));
		rank = rankOf(mirrorSquare(square));
	}
	else
	{
		file = fileOf(square);
		rank = rankOf(square);
	}
	if (startsWithDarkSquare(rank))
	{
		file++;
	}
	else
	{
		file--;
	}
	return this.boardSquareRect2(rank, file);
}

drawLightSquares()
{
	for (const square of boardSquares)
	{
		this.drawLightSquare(square);
	}
}

drawLightSquare(square)
{
	this.drawLightSquare2(this.boardLightSquareRect(square), square);
}

drawLightSquare2(rect, square)
{
	let bitmap = this.lightSquareBitmap;
	if (this.solidLightSquares)
	{
		this.drawSolidSquare(rect, this.lightSquareColor);
		return;
	}
	if (!bitmap)
	{
		this.drawSolidSquare(rect, this.lightSquareColor);
		return;
	}

	let bitmapWidth = bitmap.width;
	let bitmapHeight = bitmap.height;
	let rectWidth = this.boardProperties.squareWidth;
	if (bitmapWidth < rectWidth || bitmapHeight < rectWidth)
	{
		this.fillRectImage(rect, bitmap);
		return;
	}

	let ncol = Math.trunc(bitmapWidth / this.boardProperties.squareWidth);
	let nrow = Math.trunc(bitmapHeight / this.boardProperties.squareWidth);
	if (ncol == 0)
	{
		ncol = 1;
	}
	if (nrow == 0)
	{
		nrow = 1;
	}

	let row = Math.trunc((square) / ncol);
	let col = (square) % ncol;
	let y = Math.trunc(row / nrow);
	row = row % nrow;

  let sourceRect = new Rect();
	sourceRect.Left = col * this.boardProperties.squareWidth;
	sourceRect.Top = row * this.boardProperties.squareWidth;
	sourceRect.Right = (col + 1) * this.boardProperties.squareWidth - 1;
	sourceRect.Bottom = (row + 1) * this.boardProperties.squareWidth - 1;
	let ctx = this.getCanvasContext();
	copyRectBitmapToCanvas(ctx, rect, bitmap, sourceRect);
}

boardDarkSquareRect(square)
{
	let file = file_NB;
	let rank = rank_NB;
	if (this.flipped)
	{
		file = fileOf(mirrorSquare(square));
		rank = rankOf(mirrorSquare(square));
	}
	else
	{
		file = fileOf(square);
		rank = rankOf(square);
	}
	return this.boardSquareRect2(rank, file);
}

drawDarkSquares()
{
	for (const square of boardSquares)
	{
		this.drawDarkSquare(square);
	}
}

drawDarkSquare(square)
{
	this.drawDarkSquare2(this.boardDarkSquareRect(square), square);
}

drawDarkSquare2(rect, square)
{
	let bitmap = this.darkSquareBitmap;
	if (this.solidDarkSquares)
	{
		this.drawSolidSquare(rect, this.darkSquareColor);
		return;
	}
	if (!bitmap)
	{
		this.drawSolidSquare(rect, this.darkSquareColor);
		return;
	}

	let bitmapWidth = bitmap.width;
	let bitmapHeight = bitmap.height;
	let rectWidth = this.boardProperties.squareWidth;
	if (bitmapWidth < rectWidth || bitmapHeight < rectWidth)
	{
		this.fillRectImage(rect, bitmap);
		return;
	}

	let ncol = Math.trunc(bitmapWidth / this.boardProperties.squareWidth);
	let nrow = Math.trunc(bitmapHeight / this.boardProperties.squareWidth);
	if (ncol == 0)
	{
		ncol = 1;
	}
	if (nrow == 0)
	{
		nrow = 1;
	}

	let row = Math.trunc((square) / ncol);
	let col = (square) % ncol;
	let y = Math.trunc(row / nrow);
	row = row % nrow;

  let sourceRect = new Rect();
	sourceRect.Left = col * this.boardProperties.squareWidth;
	sourceRect.Top = row * this.boardProperties.squareWidth;
	sourceRect.Right = (col + 1) * this.boardProperties.squareWidth - 1;
	sourceRect.Bottom = (row + 1) * this.boardProperties.squareWidth - 1;
	let ctx = this.getCanvasContext();
	copyRectBitmapToCanvas(ctx, rect, bitmap, sourceRect);
}

boardSquareRect2(rank, file)
{
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	let borderWidth = this.boardProperties.borderWidth;
	let squareWidth = this.boardProperties.squareWidth;
	let rect = new Rect();
	rect.Left = this.boardLeft + frameWidth + marginWidth +	borderWidth + (file) * squareWidth;
	rect.Right = rect.Left + squareWidth - 1;
	rect.Top = this.boardTop + frameWidth + marginWidth +	borderWidth + (Board_Size - rank - 1) * squareWidth;
	rect.Bottom = rect.Top + squareWidth - 1;
	return rect;
}

boardSquareRect(square)
{
	let file = file_NB;
	let rank = rank_NB;
	if (this.flipped)
	{
		file = fileOf(mirrorSquare(square));
		rank = rankOf(mirrorSquare(square));
	}
	else
	{
		file = fileOf(square);
		rank = rankOf(square);
	}
	return this.boardSquareRect2(rank, file);
}

drawSquares()
{
	for (const square of boardSquares)
	{
		this.drawSquare(square);
	}
}

drawSquare(square)
{
	this.drawSquare2(this.boardSquareRect(square), square);
}

drawSquare2(rect, square)
{
	let isDark = isDarkSquare(square);
	let bitmap = this.lightSquareBitmap;
	if (isDark)
	{
		bitmap = this.darkSquareBitmap;
	}
	if (isDark)
	{
		if (this.solidDarkSquares)
		{
			this.drawSolidSquare(rect, this.darkSquareColor);
			return;
		}
		if (!bitmap)
		{
			this.drawSolidSquare(rect, this.darkSquareColor);
			return;
		}
	}
	else
	{
		if (this.solidLightSquares)
		{
			this.drawSolidSquare(rect, this.lightSquareColor);
			return;
		}
		if (!bitmap)
		{
			this.drawSolidSquare(rect, this.lightSquareColor);
			return;
		}
	}

 	let bitmapWidth = bitmap.width;
	let bitmapHeight = bitmap.height;
	let rectWidth = this.boardProperties.squareWidth;
	if (bitmapWidth < rectWidth || bitmapHeight < rectWidth)
	{
		this.fillRectImage(rect, bitmap);
		return;
	}
	let ncol = Math.trunc(bitmapWidth / this.boardProperties.squareWidth);
	let nrow = Math.trunc(bitmapHeight / this.boardProperties.squareWidth);
	if (ncol == 0)
	{
		ncol = 1;
	}
	if (nrow == 0)
	{
		nrow = 1;
	}

	let row = Math.trunc((square) / ncol);
	let col = (square) % ncol;
	let y = Math.trunc(row / nrow);
	row = row % nrow;

  let sourceRect = new Rect();
	sourceRect.Left = col * this.boardProperties.squareWidth;
	sourceRect.Top = row * this.boardProperties.squareWidth;
	sourceRect.Right = (col + 1) * this.boardProperties.squareWidth - 1;
	sourceRect.Bottom = (row + 1) * this.boardProperties.squareWidth - 1;
	let ctx = this.getCanvasContext();
	copyRectBitmapToCanvas(ctx, rect, bitmap, sourceRect);
}

drawSolidSquare(rect, color)
{
	this.fillRectColor(rect, color);
}

drawPieces()
{
	for (const square of boardSquares)
	{
		this.drawBoardPiece(square);
	}
}

startAnimation(from, to, capture)
{
	this.animationFrom = from;
	this.animationTo = to;
	this.animationCapture = capture;

	this.animationPath.length = 0;
 	let beginRect = this.boardSquareRect(from);
  let endRect = this.boardSquareRect(to);
	let squareSize = this.boardProperties.squareWidth;

	let steps = 32;
	if (squareSize < 32)
	{
		steps = squareSize;
	}

  // we doen niet meer met een boogje
	if (false)
	{
    // dit is met een boogje, daar wordt je zenuwachtig van,
    // zeker bij schaken is dat vreselijk
		let beginPoint = new Point(beginRect.Left + squareSize / 2, beginRect.Top + squareSize / 2);
		let endPoint = new Point(endRect.Left + squareSize / 2, endRect.Top + squareSize / 2);
		let distanceX = Math.abs(beginPoint.X - endPoint.X);
		let distanceY = Math.abs(beginPoint.Y - endPoint.Y);
		let tangent = Math.atan2(endPoint.X - beginPoint.X, beginPoint.Y - endPoint.Y);
		let radiusX = Math.sqrt(distanceX*distanceX + distanceY*distanceY) / 2;
		endPoint.X = beginPoint.X + radiusX * 2;
		endPoint.Y = beginPoint.Y;
		let middlePoint = new Point(beginPoint.X + radiusX, beginPoint.Y);
		let radianPerStep = Math.PI / steps;
		let radiusY = squareSize * 0.40;
		let radian = Math.PI;
		let arrowAtLeftSide = (endRect.Left > beginRect.Left && endRect.Top < beginRect.Top) ||
			(endRect.Left < beginRect.Left && endRect.Top > beginRect.Top);
		for (let i = 1; i < steps; i++)
		{
			let drawRect = new Rect();
			if (arrowAtLeftSide)
			{
				radian -= radianPerStep;
			}
			else
			{
				radian += radianPerStep;
			}
			let cosValue = Math.cos(radian);
			let sinValue = Math.sin(radian);
			let orgPoint = new Point(middlePoint.X + radiusX * cosValue,
				middlePoint.Y - radiusY * sinValue);
			this.animationPath.push(rotate(orgPoint, beginPoint, tangent - Math.PI / 2));
		}
	}
	else
	{
		let beginPoint = new Point(beginRect.Left + squareSize / 2, beginRect.Top + squareSize / 2);
		let endPoint = new Point(endRect.Left + squareSize / 2, endRect.Top + squareSize / 2);
		let deltaX = (endPoint.X - beginPoint.X) / steps;
		let deltaY = (endPoint.Y - beginPoint.Y) / steps;
		for (let i = 1; i < steps; i++)
		{
			this.animationPath.push(new Point(beginPoint.X + i * deltaX, beginPoint.Y + i * deltaY));
		}
	}
	this.animationPath.push(new Point(endRect.Left + squareSize / 2, endRect.Top + squareSize / 2));
	this.step = 0;
}

stopAnimation()
{
	this.animationFrom = sq_NB;
	this.animationTo = sq_NB;
}

animate()
{
	this.draw(); // zonder het animatie stuk, daarna animatiestop erbovenop

	let point = this.animationPath[this.step];
	let squareWidth = this.boardProperties.squareWidth;
	let drawRect = new Rect();
	drawRect.Left = point.X - squareWidth / 2;
	drawRect.Top = point.Y - squareWidth / 2;
	drawRect.SetWidth(squareWidth);
	drawRect.SetHeight(squareWidth);
 	let ctx = this.getCanvasContext();
	drawPiece(ctx, drawRect, this.position.at(this.animationFrom));

	this.step++;
	if (this.step >= this.animationPath.length)
	{
		let piece = this.position.at(this.animationFrom);
		this.position.setPiece(this.animationFrom, Piece.empty);
		this.position.setPiece(this.animationTo, piece);
		this.stopAnimation();
		return true;
	}
	else
	{
		return false;
	}
}

drawBoardPiece(square)
{
	if (square == this.animationFrom)
	{
		return;
	}
	let drawrect = this.boardSquareRect(square);
 	let ctx = this.getCanvasContext();
	drawPiece(ctx, drawrect, this.position.at(square));
}

drawCoordinates()
{
	if (!this.boardProperties.coordinates)
	{
    return;
  }

 	let borderWidth = this.boardProperties.borderWidth;
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	let squareWidth = this.boardProperties.squareWidth;

	let boardRect = new Rect();
	boardRect.Left = this.boardLeft + frameWidth + marginWidth;
	boardRect.Top = this.boardTop + frameWidth + marginWidth;
	boardRect.SetWidth(Board_Size * squareWidth + 2 * borderWidth);
	boardRect.SetHeight(Board_Size * squareWidth + 2 * borderWidth);

 	let ctx = this.getCanvasContext();
  let coordinateMetrics = calcCoordinateMetrics(ctx, marginWidth-6);

  drawCoordinates(ctx,
    boardRect,
    this.boardProperties,
    coordinateMetrics,
    CoordinatesType.bottomLeft,
    this.coordinatesColor,
    this.flipped,
    marginWidth);
}

drawSolidAlphaBlendSquare(square, color)
{
	let rect = this.boardSquareRect(square);
	let ctx = this.getCanvasContext();
  ctx.save();
  ctx.globalAlpha = 0.25; // opacity
	ctx.fillStyle = color;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());
  ctx.restore();
}

drawLastMove()
{
	if (this.showLastMove)
	{
		if (!this.lastMove.empty())
		{
      let color = "#800080"; // paars, boardProperties_.lastMoveColor
			this.drawSolidAlphaBlendSquare(this.lastMove.from, color);
			this.drawSolidAlphaBlendSquare(this.lastMove.to, color);
		}
  }
}

drawMarks()
{
	for (const mark of this.marks.marks_)
	{
		this.drawMark(mark);
	}
}

drawMark(mark)
{
	let rect = this.boardSquareRect(mark.square);
	let solidColor = '';
	switch (mark.type)
	{
		case BoardMarkType.weak:
			solidColor = colSquareWeak;
			break;
		case BoardMarkType.strong:
			solidColor = colSquareStrong;
			break;
		case BoardMarkType.pattern:
			solidColor = colSquarePattern;
			break;
	}
	let squareSize = this.boardWidth / 10;
	let ctx = this.getCanvasContext();
  /* dit is met roundrect
  shrinkRect(rect, 5);
	ctx.lineWidth = squareSize / 15;
	ctx.strokeStyle = solidColor;
	roundedRect(ctx, rect.Left, rect.Top, rect.Width(), rect.Height(), 10);
  */
  // dit is met hele veld vullen met opacity:
  ctx.save();
  ctx.globalAlpha = 0.7; // opacity
	ctx.fillStyle = solidColor;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());
  ctx.restore();
}

drawArrows()
{
	for (const arrow of this.arrows.arrows_)
	{
		this.drawArrow(arrow);
	}
}

drawArrow(arrow)
{
	let from = arrow.from;
	let to = arrow.to;
	let arrowType = arrow.type;

	let beginRect = this.boardSquareRect(from);
	let endRect = this.boardSquareRect(to);

	let beginX = beginRect.Left + beginRect.Width()/2;
	let beginY = beginRect.Top + beginRect.Height()/2;
	let pivot = new Point(beginX, beginY);

	let endX = endRect.Left + endRect.Width()/2;
	let endY = endRect.Top + endRect.Height()/2;

	let temp = (endX-beginX)*(endX-beginX) + (endY-beginY)*(endY-beginY);
	let arrowLen = Math.sqrt(temp);

	let beginShift = (this.position.isEmpty(from)) ? 0 : beginRect.Width() / 4;
	arrowLen -= beginShift;
	let endShift = (this.position.isEmpty(to)) ? 0 : beginRect.Width() / 4;
	arrowLen -= endShift;

	let tailWidth = 5;
	let headWidth = 5 * tailWidth;
	let headSize = 7 * tailWidth;

	let x1 = beginX + beginShift;
	let y1 = beginY;

	let x2 = x1 + arrowLen - 1;
	let y2 = beginY;

	let x3 = x2 - headSize;
	let y3 = beginY;

	let tangent = Math.atan2((endX - beginX), (beginY - endY));

  // head
	let points = [];
  let backwards = 10; // 0 geeft rechte punten
	points.push(new Point(x3, y3));
	points.push(new Point(x3 - backwards, y3 - headWidth));
	points.push(new Point(x2, y2));
	points.push(new Point(x3 - backwards, y3 + headWidth));
	points.push(new Point(x3, y2));
	let cpoints = [];
	for (let i = 0; i <= 4; i++)
	{
		cpoints.push(rotate(points[i], pivot, tangent - Math.PI / 2));
	}

	let ctx = this.getCanvasContext();
  ctx.save();
  ctx.globalAlpha = 0.7;

 	let arrowColor = '';
	switch (arrowType)
	{
		case BoardArrowType.attack:
			arrowColor = colArrowAttack;
			break;
		case BoardArrowType.defence:
			arrowColor = colArrowDefence;
			break;
		case BoardArrowType.plan:
			arrowColor = colArrowPlan;
			break;
	}
 	ctx.fillStyle = arrowColor;
  ctx.strokeStyle = arrowColor;
	ctx.beginPath();
	ctx.moveTo(cpoints[0].X, cpoints[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		ctx.lineTo(cpoints[i].X, cpoints[i].Y);
	}
	ctx.closePath();
	ctx.fill();

  // tail
	points.length = 0;
	points.push(new Point(x1, y1 - tailWidth));
	points.push(new Point(x1, y1 + tailWidth));
	points.push(new Point(x3, y1 + tailWidth));
	points.push(new Point(x3, y1 - tailWidth));
	cpoints.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		cpoints.push(rotate(points[i], pivot, tangent - Math.PI / 2));
	}
	if (beginX == endX)
	{
		if (cpoints[0].Y != cpoints[1].Y)
		{
			cpoints[0].Y = cpoints[1].Y;
		}
		if (cpoints[2].Y != cpoints[3].Y)
		{
			cpoints[2].Y = cpoints[3].Y;
		}
	}
	if (beginY == endY)
	{
		if (cpoints[0].X != cpoints[1].X)
		{
			cpoints[0].X = cpoints[1].X;
		}
		if (cpoints[2].X != cpoints[3].X)
		{
			cpoints[2].X = cpoints[3].X;
		}
	}
	ctx.beginPath();
	ctx.moveTo(cpoints[0].X, cpoints[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		ctx.lineTo(cpoints[i].X, cpoints[i].Y);
	}
	ctx.closePath();
	ctx.fill();
  ctx.restore();
}

toMoveRect()
{
	let frameWidth = this.boardProperties.frameWidth;
	let marginWidth = this.boardProperties.marginWidth;
	let squareSize = this.boardProperties.squareWidth;
	let rect = new Rect();
	rect.Left = this.boardRight - frameWidth - marginWidth + 1;
	rect.Top = this.boardBottom - frameWidth - marginWidth;
	rect.Bottom = this.boardBottom;
	rect.Right = this.boardRight - 1;
	return rect;
}

}

const MINMARGINSIZE = 14;

const BoardScheme =
{
	standard : 0
};

const BoardBackground =
{
	standard : 0
};

const BoardReplayArrows =
{
	none : 0,
	buttons : 1,
};

const CoordinatesType =
{
	allSides: 0,
	topLeft: 1,
	bottomLeft: 2,
	topRight: 3,
	bottomRight: 4,
};

class BoardProperties
{

constructor()
{
	this.scheme = BoardScheme.standard;
	this.pieces = 1; // bij schaken 0 = CBurnett, 1 = Merida
	this.frameWidth = 0;
	this.marginWidth = MINMARGINSIZE;
	this.borderWidth = 2;
	this.squareWidth = 32;
	this.marginProportion = 20;
	this.coordinates = true;
	this.replayArrows = BoardReplayArrows.buttons;
	this.showToMove = true;
}

copyFrom()
{
	let copyBoardProperties = new BoardProperties();
	copyBoardProperties.scheme = this.scheme;
	copyBoardProperties.pieces = this.pieces;
	copyBoardProperties.frameWidth = this.frameWidth;
	copyBoardProperties.marginWidth = this.marginWidth;
	copyBoardProperties.borderWidth = this.borderWidth;
	copyBoardProperties.squareWidth = this.squareWidth;
	copyBoardProperties.marginProportion = this.marginProportion;
	copyBoardProperties.coordinates = this.coordinates;
	copyBoardProperties.replayArrows = this.replayArrows;
	copyBoardProperties.showToMove = this.showToMove;
	return copyBoardProperties;
}

boardWidth()
{
	return this.squareWidth * Board_Size + 2 * (this.frameWidth + this.marginWidth + this.borderWidth);
}

adjustSizes(rect)
{
	let w = rect.Width();
	let h = rect.Height();
	let recSize = 0;
	if (w < h)
	{
		recSize = w;
	}
	else
	{
		recSize = h;
	}
	if (this.marginWidth)
	{
		for (this.squareWidth = 2; this.squareWidth < 1000; this.squareWidth++)
		{
			this.marginWidth = (this.squareWidth / 100) * this.marginProportion;
			if (this.marginWidth < MINMARGINSIZE)
			{
				this.marginWidth = MINMARGINSIZE;
			}
			let size = 2 * (this.frameWidth + this.marginWidth + this.borderWidth) + Board_Size * this.squareWidth;
			if (size > recSize)
			{
				break;
			}
		}
		this.squareWidth--;
		this.marginWidth = (this.squareWidth / 100) * this.marginProportion;
		if (this.marginWidth < MINMARGINSIZE)
		{
			this.marginWidth = MINMARGINSIZE;
		}
	}
	else
	{
		for (this.squareWidth = 2; this.squareWidth < 1000; this.squareWidth++)
		{
			let size = 2 * (this.frameWidth + this.borderWidth) + Board_Size * this.squareWidth;
			if (size > recSize)
			{
				break;
			}
		}
		this.squareWidth--;
	}
	return this.boardWidth();
}

}


class PositionInfo
{

constructor()
{
	this.beginPosition = new GamePosition();
	this.currentPosition = new GamePosition();
	this.arrows = new BoardArrowList();
	this.marks = new BoardMarkList();
	this.nextMove = new GenMove();
 	this.prevMove = new GenMove();
	this.nextMoveNumber = 0;
	this.canPlayBackward = false;
	this.canPlayForward = false;
	this.numberOfMoves = 0;
	this.ply = 0;
	this.material = '';
}

}

const medalColors =
[
	"#F7C42B",  //  1 BestGame           = Orange
	"#F327F3",  //  2 DecidedTournament
	"#26BCBC",  //  3 ModelGame
	"#2727F3",  //  4 Novelty            = Blue (dark)
	"#298F8F",  //  5 PawnStructure
	"#94612A",  //  6 Strategy
	"#8D2727",  //  7 Tactics
	"#F4F428",  //  8 Attack             = Yellow0x
	"#F22626",  //  9 Sacrifice          = Red
	"#F3F3F3",  // 10 Defence
	"#8F298F",  // 11 Material           = Purple
	"#28F428",  // 12 PiecePlay          = Green
	"#288E28",  // 13 Endgame
	"#272727",  // 14 TacticalBlunder
	"#919191",  // 15 StrategicalBlunder = DarkGray
	"#28F4F4"   // 16 User
];

function shrinkRect(rect, delta)
{
	rect.Left += delta;
	rect.Right -= delta;
	if (rect.Left > rect.Right)
	{
		rect.Left = rect.Right;
	}
	rect.Top += delta;
	rect.Bottom -= delta;
	if (rect.Top > rect.Bottom)
	{
		rect.Top = rect.Bottom;
	}
}

function copyRectBitmapToCanvas(destinCanvas, destinRect, sourceBitmap, sourceRect)
{
	destinCanvas.drawImage(sourceBitmap, sourceRect.Left, sourceRect.Top, sourceRect.Width(), sourceRect.Height(),
		destinRect.Left, destinRect.Top, destinRect.Width(), destinRect.Height());
}

function roundedRect(ctx, x, y, width, height, radius)
{
	ctx.beginPath();
	ctx.moveTo(x, y + radius);
	ctx.lineTo(x, y + height - radius);
	ctx.arcTo(x, y + height, x + radius, y + height, radius);
	ctx.lineTo(x + width - radius, y + height);
	ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
	ctx.lineTo(x + width, y + radius);
	ctx.arcTo(x + width, y, x + width - radius, y, radius);
	ctx.lineTo(x + radius, y);
	ctx.arcTo(x, y, x, y + radius, radius);
	ctx.stroke();
}

function rotate(initial, pivot, angle)
{
	let p = new Point();
	p.X = (Math.cos(angle) * (initial.X - pivot.X)) - (Math.sin(angle) * (initial.Y - pivot.Y)) + pivot.X;
	p.Y = (Math.sin(angle) * (initial.X - pivot.X)) + (Math.cos(angle) * (initial.Y - pivot.Y)) + pivot.Y;
	return p;
}

function drawMedals(ctx, rect, medals)
{
	let left = rect.Left;
	let top = rect.Top;
	let right = rect.Right;
	let bottom = rect.Bottom;

	ctx.fillStyle = clRed;
	ctx.fillRect(rect.Left, rect.Top, rect.Width(), rect.Height());

	if (medals.none())
	{
		return;
	}

	let numberOfMedals = medals.count();
	let medalWidth = 0;
	if (numberOfMedals > 8)
	{
		medalWidth = (right - left) / 8;
	}
	else
	{
		medalWidth = (right - left) / numberOfMedals;
	}
	let medalLeft = left - medalWidth;
	let medalTop = top;
	let medalRight = medalLeft + medalWidth;
	let medalHeight = 0;
	if (numberOfMedals > 8)
	{
		medalHeight = (bottom - top + 1) / 2;
	}
	else
	{
		medalHeight = bottom - top + 1;
	}

	let medalBottom = top + medalHeight - 1;
	let medalCount = 0;
	for (let i = 0; i < 16; i++)
	{
		if (medals.test(i))
		{
			medalLeft += medalWidth;
			medalRight += medalWidth;
			if (medalCount == 7 || medalCount == 15 ||
				(medalCount < 8 && medalCount == numberOfMedals - 1))
			{
				medalRight = right;
			}
			if (medalCount == 8)
			{
				medalLeft = left;
				medalRight = medalLeft + medalWidth;
				medalTop = top + medalHeight;
				medalBottom = bottom;
			}
			let medalRect = new Rect(medalLeft, medalTop, medalRight, medalBottom);
			ctx.fillStyle = medalColors[i];
			ctx.fillRect(medalRect.Left, medalRect.Top, medalRect.Width(), medalRect.Height());
			medalCount++;
		}
	}
}




class BitmapItem
{

constructor()
{
	this.name = '';
	this.bitmap = null;
}

}

class BitmapManager
{

constructor()
{
	this.bitmaps = [];
}

add(img)
{
	let bitmapItem = new BitmapItem();
	bitmapItem.name = img.id;
	bitmapItem.bitmap = img;
	this.bitmaps.push(bitmapItem);
}

bitmap(name)
{
	for (const bmp of this.bitmaps)
	{
		if (bmp.name.toLowerCase() == name.toLowerCase())
		{
			return bmp.bitmap;
		}
	}
	return null;
}

}
const clAqua 				= "#00FFFF";
const clBlack 			= "#000000";
const clBlue 				= "#0000FF";
const clCream 			= "#FFFBF0";
const clDkGray 			= "#808080";
const clFuchsia 		= "#FF00FF";
const clGray 				= "#808080";
const clGreen 			= "#008000";
const clLime 				= "#00FF00";
const clLtGray 			= "#C0C0C0";
const clMaroon 			= "#800000";
const clMedGray 		= "#A0A0A4";
const clMoneyGreen 	= "#C0DCC0";
const clNavy 				= "#000080";
const clOlive 			= "#808000";
const clPurple 			= "#800080";
const clRed 				= "#FF0000";
const clSilver 			= "#C0C0C0";
const clSkyBlue 		= "#A6CAF0";
const clTeal 				= "#008000";
const clWhite 			= "#FFFFFF";
const clYellow 			= "#FFFF00";

class Point
{

constructor(x, y)
{
	if (x === undefined)
	{
		this.X = 0;
		this.Y = 0;
	}
	else
	{
		this.X = x;
		this.Y = y;
	}
}

copyFrom()
{
	let copyPoint = new Point();
	copyPoint.Left = this.X;
	copyPoint.Top = this.Y;
	return copyPoint;
}

}

class Rect
{

constructor(left, top, right, bottom)
{
	if (left === undefined)
	{
		this.Left = 0;
		this.Top = 0;
		this.Right = 0;
		this.Bottom = 0;
	}
	else
	{
		this.Left = left;
		this.Top = top;
		this.Right = right;
		this.Bottom = bottom;
	}
}

copyFrom()
{
	let copyRect = new Rect();
	copyRect.Left = this.Left;
	copyRect.Top = this.Top;
	copyRect.Right = this.Right;
	copyRect.Bottom = this.Bottom;
	return copyRect;
}

Width()
{
	return this.Right - this.Left + 1;
}

GetWidth()
{
	return this.Right - this.Left + 1;
}

SetWidth(width)
{
	this.Right = this.Left + width - 1;
}

Height()
{
	return this.Bottom - this.Top + 1;
}

GetHeight()
{
	return this.Bottom - this.Top + 1;
}

SetHeight(height)
{
	this.Bottom = this.Top + height - 1;
}

Shrink()
{
	this.Left++;
	this.Top++;
	this.Right--;
	this.Bottom--;
}

PtInRect(point)
{
	return point.X >= this.Left &&
		point.X <= this.Right &&
		point.Y >= this.Top &&
		point.Y <= this.Bottom;
}


}

class BoardView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
	this.thePosition = new GamePosition();
	this.board = new Board();
	this.boardPanel = null;
	this.boardProperties = new BoardProperties();
	this.updateButtons = true;
}

formResize()
{
	let scale = window.devicePixelRatio;

	this.board.canvas.width = this.boardPanel.clientWidth * scale;
	this.board.canvas.height = this.boardPanel.clientHeight * scale;

	let horzSpace = 32 * scale;
	let vertSpace = 32 * scale;
	let horzAvailable = this.board.canvas.width - horzSpace;
	let vertAvailable = this.board.canvas.height - vertSpace;
	let boardSize = vertAvailable < horzAvailable ? vertAvailable : horzAvailable;
	if (boardSize < 128)
	{
		boardSize = 128;
	}
	let rect = new Rect();
	rect.Left = 0;
	rect.Top = 0;
	rect.SetWidth(boardSize);
	rect.SetHeight(boardSize);
	this.boardProperties.marginWidth = boardSize * 0.02;
  if (this.boardProperties.marginWidth < MINMARGINSIZE)
  {
    this.boardProperties.marginWidth = MINMARGINSIZE;
  }
	boardSize = this.boardProperties.adjustSizes(rect);
 	this.board.setBoardProperties(this.boardProperties);
	this.board.draw();
}

flipBoard()
{
	this.board.flipBoard();
	this.board.draw();
}

flipCoordinates()
{
	this.boardProperties.coordinates = !this.boardProperties.coordinates;
	this.board.setBoardProperties(this.boardProperties);
	this.board.draw();
}

flipBoardType()
{
	this.board.setBoardProperties(this.boardProperties);
	this.board.draw();
}

setPositionInfo(positionInfo)
{
	this.thePosition = positionInfo.currentPosition.copyFrom();
	this.board.setPosition(this.thePosition);
	this.board.setArrows(positionInfo.arrows);
	this.board.setMarks(positionInfo.marks);
  // TO DO new testen
 	this.board.setLastMove(positionInfo.prevMove);
	this.board.draw();

	if (this.updateButtons)
	{
		setReplayButtonEnabled('playBackward' + this.appletIndex, positionInfo.canPlayBackward);
		setReplayButtonEnabled('goToBegin'+ this.appletIndex, positionInfo.canPlayBackward);
		setReplayButtonEnabled('playForward' + this.appletIndex, positionInfo.canPlayForward);
		setReplayButtonEnabled('goToEnd' + this.appletIndex, positionInfo.canPlayForward);
		setReplayButtonEnabled('autoPlay' + this.appletIndex, positionInfo.canPlayForward);
	}
	else
	{
		setReplayButtonEnabled('goToBegin' + this.appletIndex, positionInfo.canPlayBackward);
		setReplayButtonEnabled('goToEnd' + this.appletIndex, positionInfo.canPlayForward);
	}
}

setPosition(position)
{
	let positionInfo = new PositionInfo();
	positionInfo.currentPosition = position.copyFrom();
	this.setPosition(positionInfo);
}

setBoardProperties(boardProperties)
{
  this.boardProperties = boardProperties.copyFrom();
}

}

const EngineMode =
{
	infinite       : 0,
	playing        : 1,
};

class EngineView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
 	this.engineMoves_ = new MoveTree();
 	this.movesView = new MovesView(appletIndex);
  this.movesView.showRoot = false;
  this.movesView.showTooltipBoard = true;
  this.movesView.boldText = true;
  this.movesView.boldMainLine = false;
  this.engine_ = null;
  this.engineItem_ = new EngineItem();
  this.engineInput_ = new EngineInput();
 	this.engineOutput_ = new EngineOutput();
	this.inputThinkPosition_ = new GamePosition();
	this.inputBeginPosition_ = new GamePosition();
	this.inputBeginMoveNumber_ = 0;
	this.inputMoves_ = [];
	this.inputHasMoves_ = false;
 	this.locked_ = false;
 	this.threat_ = false;
 	this.suspended_ = false;
  this.engineMode_ = EngineMode.infinite;
  this.threatButton = document.getElementById("threat"+this.appletIndex);
 	this.threatButton.onclick = this.swapThreat.bind(this);
  this.setThreatSpeedButtonImage();
  this.settingsButton = document.getElementById("engineSettings"+this.appletIndex);
}

createEngine(engineItem)
{
  this.engine_ = new Engine();
  this.engine_.onmessage = (event) => {
    this.handleEngineEvent(event);
  };
  this.engine_.create(engineItem);
  this.engine_.hub();
}

engineReady()
{
	this.engineItem_ = this.engine_.engineItem();
	this.engineOutput_ = new EngineOutput();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.engineMoves_.setPosition(this.engineOutput_.position,
    this.engineOutput_.moveNumber);
	this.showLines();
 	this.startThinking();
  this.setThreatSpeedButtonImage();
}

setPosition(beginPosition, beginMoveNumber, moves, hasMoves)
{
	this.inputBeginPosition_ = beginPosition.copyFrom();
	this.inputBeginMoveNumber_ = beginMoveNumber;
	this.inputMoves_ = moves.slice(); // TO DO zoiets?
	this.inputHasMoves_ = hasMoves;
	this.startThinking();
}

startThinking()
{
	if (!this.engine_) return;
	if (this.locked_) return;

	if (this.threat_)
	{
		let moves = new MoveTree();
		moves.setPosition(this.inputBeginPosition_, this.inputBeginMoveNumber_);
		let beginPos = moves.beginPos();
		moves.addMoves(beginPos, this.inputMoves_);
		let endPosition = moves.endPositionOfMainLine();
		let threatMoveNumber = moves.nextMoveNumber(moves.endPosOfMainLine());
		if (endPosition.isBlackToMove())
		{
			threatMoveNumber++;
		}
		let threatPosition = endPosition;
		threatPosition.flipSideToMove();
		this.engineInput_ = new EngineInput();
    this.engineInput_.moves.setPosition(threatPosition, threatMoveNumber);
		this.inputThinkPosition_ = threatPosition;
  }
  else
  {
 		this.engineInput_.moves.setPosition(this.inputBeginPosition_, this.inputBeginMoveNumber_);
		let beginPos = this.engineInput_.moves.beginPos();
		this.engineInput_.moves.addMoves(beginPos, this.inputMoves_);
		this.inputThinkPosition_ = this.engineInput_.moves.endPositionOfMainLine();
  }
  if (globalEngineParamSearchTime === 10) // infinite
  {
    this.engineInput_.timeLeft = infiniteTimeLeft;
  }
  else
  {
    this.engineInput_.timeLeft = getSearchTimeValue(globalEngineParamSearchTime);
  }

  this.engine_.resume();
	this.suspended_ = false;
  let moves = generateMoves(this.inputThinkPosition_);
  if (moves.length == 0)
  {
  	this.engine_.setInput(this.engineInput_);
		return;
  }
  else
  {
  	this.engine_.setInput(this.engineInput_);
		return;
  }
}

engineGo()
{
	this.engineOutput_ = this.engine_.output();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.engineMoves_.setPosition(this.engineOutput_.position,
    this.engineOutput_.moveNumber);
	this.showLines();
}

engineCM()
{
	this.engineOutput_ = this.engine_.output();
	//showCM();
}

// we gaan hem voorlopig even rechtsreeks vanuit de engine aanroepen!
enginePV()
{
	this.engineOutput_ = this.engine_.output();
  // hij komt al hier
	//showScore();
	//showDepth();
	//showNodes();
  // de lines zijn het belangrijkste:
	this.showLines();
}

showLines()
{
	let engineMoves = this.engineOutput_.bestLine.moves.copyFrom();
  engineMoves.setPosition(this.engineOutput_.position, this.engineOutput_.moveNumber);

  if (this.engineOutput_.multiPV)
  {
    for (let line of this.engineOutput_.lines)
    {
      let moves = line.moves.mainMoves();
      let pos = engineMoves.beginPos();
      let moveNumber = 0;
      for (let move of moves)
      {
        if (moveNumber == 0)
        {
					let info = line.scoreToString() +
						"/" + line.depthString;
					move.setBeforeText(info);
        }
        engineMoves.addMove(pos, move);
        moveNumber++;
      }
    }
  }
  else
  {
    if (this.engineOutput_.lines.length !== 0)
    {
      let line = this.engineOutput_.lines[this.engineOutput_.lines.length - 1];
      let moves = line.moves.mainMoves();
      let pos = engineMoves.beginPos();
      let moveNumber = 0;
      for (let move of moves)
      {
				if (moveNumber == 0)
				{
					let info = line.scoreToString() +
						"/" + line.depthString;
					move.setBeforeText(info);
				}
        engineMoves.addMove(pos, move);
        moveNumber++;
      }
    }
  }
  this.engineMoves_ = engineMoves.copyFrom();
  this.movesView.multiPV = this.engineOutput_.multiPV;
  this.movesView.setNotation(this.engineMoves_, 0);
}

handleEngineEvent(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.engineReady()
  }
  else if (cmd === 'go')
  {
    this.engineGo()
  }
  else if (cmd === 'cm')
  {
    this.engineCM();
  }
  else if (cmd === 'pv')
  {
    this.enginePV();
  }
}

shutDownEngine()
{
	if (this.engine_)
	{
    this.engine_.onmessage = null;
    this.engine_.suspend();
		this.engine_ = null;
		this.engineOutput_ = new EngineOutput();
  	this.engineMoves_.setPosition(this.engineOutput_.position,
      this.engineOutput_.moveNumber);
  	this.showLines();
    this.threat_ = false;
    this.setThreatSpeedButtonImage();
  }
}

hasEngine()
{
	return (this.engine_ != null);
}

isPlaying()
{
  return (this.engineMode === EngineMode.playing);
}

swapThreat()
{
	if (this.engine_ && !this.isPlaying())
	{
		this.threat_ = !this.threat_;
		this.setThreatSpeedButtonImage();
		this.startThinking();
	}
}

setThreatSpeedButtonImage()
{
	if (this.engine_)
	{
    this.threatButton.disabled = false;
    this.threatButton.classList.remove('threat-inactive');
		if (this.threat_)
		{
      this.threatButton.classList.remove('threat-off');
      this.threatButton.classList.add('threat-on');
		}
		else
		{
      this.threatButton.classList.remove('threat-on');
      this.threatButton.classList.add('threat-off');
		}
	}
	else
	{
    this.threatButton.disabled = true;
    this.threatButton.classList.add('threat-inactive');
    this.threatButton.classList.remove('threat-on');
    this.threatButton.classList.add('threat-off');
	}
}

}

class GameHeaderView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
  this.headerPanel = null;
	this.gameHeader = new GameHeader();
}

showHeader(gameHeader)
{
	this.gameHeader = gameHeader.copyFrom();
	this.headerPanelResize();
}

headerPanelResize()
{
	let whiteName = this.gameHeader.white.player.nameWithSpace();
	let blackName = this.gameHeader.black.player.nameWithSpace();

	let whiteRatingString = '';
	if (whiteName.length && this.gameHeader.white.rating)
	{
		whiteRatingString = this.gameHeader.white.rating.toString();
	}
	let whiteTitleString = '';
	if (whiteName.length && this.gameHeader.white.title.length)
	{
		whiteTitleString = this.gameHeader.white.title.toString();
	}

	let blackRatingString = '';
	if (blackName.length && this.gameHeader.black.rating)
	{
		blackRatingString = this.gameHeader.black.rating.toString();
	}
	let blackTitleString = '';
	if (blackName.length && this.gameHeader.black.title.length)
	{
		blackTitleString = this.gameHeader.black.title.toString();
	}

	let whiteShortName = this.gameHeader.white.player.shortName(1);
	let blackShortName = this.gameHeader.black.player.shortName(1);

	let whiteTeam = '';
	let blackTeam = '';
	if (!this.gameHeader.white.team.empty() &&
		!this.gameHeader.black.team.empty())
	{
		whiteTeam = this.gameHeader.white.team.formatNameNumber();
		blackTeam = this.gameHeader.black.team.formatNameNumber();
	}

	let resultString = resultToString(this.gameHeader.result);
	let tournament = this.gameHeader.tournament.title;
	if (!this.gameHeader.tournament.startDate.empty())
	{
		tournament += " ";
		tournament += this.gameHeader.tournament.startDate.year.toString();
	}
	let gameDate = '';
	if (!this.gameHeader.date.empty())
	{
		gameDate = this.gameHeader.date.toString("dd-mm-yyyy");
	}
	let annotator = '';
	if (!this.gameHeader.annotator.empty())
	{
		annotator = '</br>' + '[' + this.gameHeader.annotator.name + ']';
	}

	let notaContainer = document.getElementById("nota-container"+this.appletIndex);
	let notaHeight = notaContainer.clientHeight;
	let minHeight = 200;

  let index = this.appletIndex;
  let place = this.gameHeader.tournament.place;

	let hasFlags = true;
	if (this.headerPanel.clientWidth >= 374 && notaHeight >= minHeight)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    //s += 				  "<span><img id=\"whitePlayerImage" + index + "\" class=\"playerImage\"></span>";
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + whiteName + "</span>";
    s += 					"<span class=\"rating\">" + whiteRatingString + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + whiteTeam + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + resultString + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + blackName + "</span>";
		s +=          "<span class=\"rating\">" + blackRatingString + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + blackTeam + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    //s +=          "<span><img id=\"blackPlayerImage" + index + "\" class=\"playerImage\"></span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + whiteTitleString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + tournament + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + place + "</span>";
		s +=          "<span class=\"gameDate\">" + gameDate + "</span>";
    s +=          "<span class=\"annotator\">" + annotator + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + blackTitleString + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.headerPanel.innerHTML = s;

		// 3 kolommen van 24, dus breedte gedeeld door 8 geeft beschikbare ruimte
		// we willen links en rechts ruimte vrijlaten en daarom delen we door 10
		let maxWidth = Math.trunc(this.headerPanel.clientWidth / 10);
		if (maxWidth < 24) maxWidth = 24;
    // foto's doen het maar schakelen we voorlopig uit omdat we geen foto's hebben
		//let whitePlayerImg = document.getElementById("whitePlayerImage"+this.appletIndex);
		//whitePlayerImg.src = "https://www.tdambase.com/WhitePlayer.jpg";
		//whitePlayerImg.width = maxWidth.toString();
		//let blackPlayerImg = document.getElementById("blackPlayerImage"+this.appletIndex);
		//blackPlayerImg.src = "https://www.tdambase.com/BlackPlayer.jpg";
		//blackPlayerImg.width = maxWidth.toString();
	}
	else if (this.headerPanel.clientWidth >= 300 && notaHeight >= minHeight)
	{
		// foto's vervallen en voorletters i.p.v. voornamen
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + whiteShortName + "</span>";
    s +=          "<span class=\"rating\">" + whiteRatingString + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + whiteTeam + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + resultString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + blackShortName + "</span>";
    s +=          "<span class=\"rating\">" + blackRatingString + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + blackTeam + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + whiteTitleString + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + tournament + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + place + "</span>";
    s +=          "<span class=\"gameDate\">" + gameDate + "</span>";
		s +=          "<span class=\"annotator\">" + annotator + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + blackTitleString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.headerPanel.innerHTML = s;
	}
	else if (this.headerPanel.clientWidth >= 280)
	{
		// toernooi vervalt (blijft 1 regel over)
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + whiteShortName + "</span>";
    s +=          "<span class=\"rating\">" + whiteRatingString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + resultString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + blackShortName + "</span>";
    s +=          "<span class=\"rating\">" + blackRatingString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.headerPanel.innerHTML = s;
	}
	else
	{
		// tenslotte vervallen de flags
		hasFlags = false; // hier moet ie op false (want default is true)
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + whiteShortName + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + resultString + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + blackShortName + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.headerPanel.innerHTML = s;
	}

	if (hasFlags)
	{
		let flagSize = 16;
		if (this.headerPanel.clientWidth < 400)
		{
			flagSize = 16;
		}
		else if (this.headerPanel.clientWidth < 500)
		{
			flagSize = 24;
		}
		else
		{
			flagSize = 32;
		}
    if (this.gameHeader.white.country != Country.none)
    {
  		let whitePlayerNationImg = document.getElementById("whitePlayerNation"+this.appletIndex);
	  	whitePlayerNationImg.src = "images/flags/" + flagSize.toString() +"/" + getFlagOfCountry(this.gameHeader.white.country) + ".png";
		  whitePlayerNationImg.height = flagSize;
  		whitePlayerNationImg.width = flagSize;
    }
    if (this.gameHeader.black.country != Country.none)
    {
  		let blackPlayerNationImg = document.getElementById("blackPlayerNation"+this.appletIndex);
	  	blackPlayerNationImg.src = "images/flags/" + flagSize.toString() + "/" + getFlagOfCountry(this.gameHeader.black.country) + ".png";
		  blackPlayerNationImg.height = flagSize;
  		blackPlayerNationImg.width = flagSize;
    }
	}
}

}

class GameView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
	this.gameHeader = new GameHeader();
	this.boardView = new BoardView(appletIndex);
	this.notationView = new NotationView(appletIndex);
	this.notationView.movesView.gameView = this; // niet netjes
	this.replayView = new ReplayView();
  this.engineView = new EngineView(appletIndex);
}

flipBoard()
{
	this.boardView.flipBoard();
}

flipCoordinates()
{
	this.boardView.flipCoordinates();
}

flipBoardType()
{
	this.boardView.flipBoardType();
	this.notationView.movesView.flipBoardType();
}

showGame(gameBase, gameNumber, nodeNumber, game)
{
	this.setGame(game, nodeNumber);
}

setGame(game, nodeNumber)
{
	this.gameHeader = game.header.copyFrom();
	this.showHeader();
	this.notationView.movesView.setNotation(game.moves, nodeNumber);
}

showHeader()
{
	this.notationView.gameHeaderView.showHeader(this.gameHeader);
}

notationViewShowPosition(positionInfo)
{
	this.boardView.setPositionInfo(positionInfo);
  this.positionChange();
}

replayGame()
{
	if (this.replayView.isReplaying())
	{
		this.replayView.stop();
    this.sentPositionToEngine();
	}
	else
	{
		if (!this.notationView.movesView.isEnd())
		{
      // TO DO new zelfde zoals c++ dat doet
			this.replayView.gameView = this; // .notationView.movesView;
			this.replayView.start();
			this.notationView.movesView.showPosition();
		}
	}
}

addKibitzer(engineItem)
{
	this.engineView.createEngine(engineItem);
}

deleteKibitzer()
{
	this.engineView.shutDownEngine();
}

hasKibitzer()
{
	return this.engineView.hasEngine();
}

positionChange()
{
  if (!this.replayView.isReplaying())
  {
    this.sentPositionToEngine();
  }
}

sentPositionToEngine()
{
	this.engineView.setPosition(
		this.notationView.movesView.beginPosition(),
		this.notationView.movesView.beginMoveNumber(),
		this.notationView.movesView.previousMoves(),
		this.notationView.movesView.hasMoves());
}

}

const GameListSection =
{
	whitePlayer : 0,
	whiteRating : 1,
	whiteFlag : 2,
	blackPlayer : 3,
	blackRating : 4,
 	blackFlag : 5,
	result : 6,
	moves : 7,
	year : 8,
	event : 9,
	round : 10
};

const HeaderSortOrder =
{
	none : 0,
	ascending : 1,
	descending : 2
};

let playerWidth = 0;
let ratingWidth = 0;
let resultWidth = 0;
let movesWidth = 0;
let yearWidth = 0;
let eventWidth = 0;
let roundWidth = 0;
let flagWidth = 0;

let descending = false;

function compareWhitePlayer(f, s)
{
	let fName = f.header.white.player.name();
	let sName = s.header.white.player.name();
	if (fName < sName)
	{
		return descending ? -1 : 1;
	}
	if (fName > sName)
	{
		return descending ? 1 : -1;
	}
	fName = f.header.black.player.name();
	sName = s.header.black.player.name();
	if (fName < sName)
	{
		return -1;
	}
	if (fName > sName)
	{
		return 1;
	}
	return 0;
}

function compareBlackPlayer(f, s)
{
	let fName = f.header.black.player.name();
	let sName = s.header.black.player.name();
	if (fName < sName)
	{
		return descending ? -1 : 1;
	}
	if (fName > sName)
	{
		return descending ? 1 : -1;
	}
	fName = f.header.white.player.name();
	sName = s.header.white.player.name();
	if (fName < sName)
	{
		return -1;
	}
	if (fName > sName)
	{
		return 1;
	}
	return 0;
}

function compareWhiteRating(f, s)
{
	let diff = f.header.white.rating - s.header.white.rating;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.black.rating - s.header.black.rating;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareBlackRating(f, s)
{
	let diff = f.header.black.rating - s.header.black.rating;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.white.rating - s.header.white.rating;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareWhiteCountry(f, s)
{
	let diff = f.header.white.country - s.header.white.country;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.black.country - s.header.black.country;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareBlackCountry(f, s)
{
	let diff = f.header.black.country - s.header.black.country;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.white.country - s.header.white.country;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareResult(f, s)
{
	let diff = f.header.result - s.header.result;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareYear(f, s)
{
	let diff = s.header.date.date() - f.header.date.date();
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareEvent(f, s)
{
	let fTitle = f.header.tournament.title;
	let sTitle = s.header.tournament.title;
	if (fTitle < sTitle)
	{
		return descending ? -1 : 1;
	}
	if (fTitle > sTitle)
	{
		return descending ? 1 : -1;
	}
	let diff = f.header.tournament.startDate.date() - s.header.tournament.startDate.date();
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.round - s.header.round;
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = f.header.subRound - s.header.subRound;
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareRound(f, s)
{
	let diff = s.header.round - f.header.round;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	diff = s.header.subRound - f.header.subRound;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

function compareMoves(f, s)
{
	let diff = s.plys - f.plys;
	if (descending)
	{
		diff = -diff;
	}
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return compareWhitePlayer(f, s);
}

class GameListView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
	this.games = [];
	this.listParent = null;
	this.listTable = null;
	this.headerTable = null;
	this.headerTags = [];
	this.sections = [];
	this.sortId = -1;
	this.sortOrder = HeaderSortOrder.none;
	this.listWidth = 0;
  this.onGameClick = null;
}

init()
{
	let s = "";
	s += "<tr class=\"grid-header-row\">";
	s += "<th class=\"grid-header-cell grid-player\">White</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatW</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgW</th>";
	s += "<th class=\"grid-header-cell grid-player\">Black</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatB</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgB</th>";
	s += "<th class=\"grid-header-cell grid-result\">Res</th>";
	s += "<th class=\"grid-header-cell grid-moves\">Len</th>";
	s += "<th class=\"grid-header-cell grid-year\">Year</th>";
	s += "<th class=\"grid-header-cell grid-event\">Event</th>";
	s += "<th class=\"grid-header-cell grid-round\">Rnd</th>";
	s += "</tr>";
	this.headerTable.innerHTML = s;
	this.headerTags = this.headerTable.getElementsByTagName("TH");
	let appletIndex = this.appletIndex;

 	this.headerTags[GameListSection.whitePlayer].onclick = this.sortWhitePlayer.bind(this);
	this.headerTags[GameListSection.whiteRating].onclick = this.sortWhiteRating.bind(this);
  this.headerTags[GameListSection.whiteFlag].onclick = this.sortWhiteCountry.bind(this);
	this.headerTags[GameListSection.blackPlayer].onclick = this.sortWhitePlayer.bind(this);
	this.headerTags[GameListSection.blackRating].onclick = this.sortBlackRating.bind(this);
  this.headerTags[GameListSection.blackFlag].onclick = this.sortBlackCountry.bind(this);
	this.headerTags[GameListSection.result].onclick = this.sortResult.bind(this);
	this.headerTags[GameListSection.moves].onclick = this.sortMoves.bind(this);
	this.headerTags[GameListSection.year].onclick = this.sortYear.bind(this);
	this.headerTags[GameListSection.event].onclick = this.sortEvent.bind(this);
	this.headerTags[GameListSection.round].onclick = this.sortRound.bind(this);
}

setGames(games)
{
	this.games = games;
	this.formResize();
}

resetColumns()
{
	this.hideColumn("grid-player");
	this.hideColumn("grid-rating");
 	this.hideColumn("grid-flag");
	this.hideColumn("grid-result");
	this.hideColumn("grid-moves");
	this.hideColumn("grid-year");
	this.hideColumn("grid-event");
	this.hideColumn("grid-round");
}

resetWidths()
{
	this.setColumnWidth("grid-player", playerWidth);
	this.setColumnWidth("grid-rating", ratingWidth);
 	this.setColumnWidth("grid-flag", flagWidth);
	this.setColumnWidth("grid-result", resultWidth);
	this.setColumnWidth("grid-moves", movesWidth);
	this.setColumnWidth("grid-year", yearWidth);
	this.setColumnWidth("grid-event", eventWidth);
	this.setColumnWidth("grid-round", roundWidth);

}

hideColumn(columnClassName)
{
	let cells = this.listParent.getElementsByClassName(columnClassName);
	for (let i = 0; i < cells.length; i++) {
		cells[i].style.display = "none";
	}
}

showColumn(columnClassName)
{
	let cells = this.listParent.getElementsByClassName(columnClassName);
	for (let i = 0; i < cells.length; i++) {
		cells[i].style.display = "table-cell";
	}
}

setColumnWidth(columnClassName, width)
{
	let cells = this.listParent.getElementsByClassName(columnClassName);
	for (let i = 0; i < cells.length; i++) {
		cells[i].style.width = (width) + "px";
	}
}

formResize()
{
	this.listWidth = this.listParent.clientWidth;
	this.listWidth -= 17;
	if (this.listWidth < 100)
	{
		this.listWidth = 100;
	}
	playerWidth = 200;
	ratingWidth = 52;
	resultWidth = 34;
	movesWidth = 50;
	yearWidth = 52;
	eventWidth = 200;
	roundWidth = 50;
  flagWidth = 30;

 // indien <= 767 dan breedtes minder wegens Roboto Condensed + kleiner font
	let replay = document.getElementsByClassName("tdreplay")[0];
	if (replay.clientWidth <= portraitMaxWidth)
	{
		let smallFactor = 0.7;
		playerWidth *= smallFactor;
		ratingWidth *= smallFactor;
		resultWidth *= smallFactor;
		movesWidth *= smallFactor;
		yearWidth *= smallFactor;
		eventWidth *= smallFactor;
		roundWidth *= smallFactor;
	}
	this.showGames();
}

setView()
{
	this.resetColumns();
	this.resetWidths();

  let leftPaddingWidth = 2.8;
  let rightPaddingWidth = 2.8;
  let scrollBarWidth = 17;
	if (this.listWidth <= 400)
	{
		this.showColumn("grid-player");
		this.showColumn("grid-result");
    this.showColumn("grid-year");
		this.showColumn("grid-event");
    let totalPaddingWidth = 5 * (leftPaddingWidth + rightPaddingWidth);
		let otherWidths = resultWidth + yearWidth;
		let rest = Math.trunc((this.listWidth - otherWidths - totalPaddingWidth - scrollBarWidth) / 3);
		this.setColumnWidth("grid-player", rest);
		this.setColumnWidth("grid-event", rest);
	}
	else if (this.listWidth <= 580)
	{
		this.showColumn("grid-player");
		this.showColumn("grid-rating");
		this.showColumn("grid-result");
		this.showColumn("grid-year");
		this.showColumn("grid-event");
    let totalPaddingWidth = 7 * (leftPaddingWidth + rightPaddingWidth);
		let otherWidths = 2 * ratingWidth + resultWidth + yearWidth;
		let rest = Math.trunc((this.listWidth - otherWidths - totalPaddingWidth - scrollBarWidth) / 3);
		this.setColumnWidth("grid-player", rest);
		this.setColumnWidth("grid-event", rest);
	}
	else
	{
		this.showColumn("grid-player");
		this.showColumn("grid-rating");
    this.showColumn("grid-flag");
		this.showColumn("grid-result");
		this.showColumn("grid-moves");
		this.showColumn("grid-year");
		this.showColumn("grid-event");
		this.showColumn("grid-round");
    let totalPaddingWidth = 11 * (leftPaddingWidth + rightPaddingWidth);
		let otherWidths = 2 * ratingWidth + 2 * flagWidth + resultWidth + movesWidth + yearWidth + roundWidth;
		let rest = Math.trunc((this.listWidth - otherWidths - totalPaddingWidth - scrollBarWidth) / 3);
		this.setColumnWidth("grid-player", rest);
		this.setColumnWidth("grid-event", rest);
	}
}

showGames()
{
	let flagSize = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.appletIndex + "\">"; // TO DO later met appletIndex
	for (const game of this.games)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += game.header.white.player.shortNameWithSpace();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (game.header.white.rating)
		{
			s += game.header.white.rating;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (game.header.white.country != Country.none)
		{
      let flagSource = "images/flags/" + flagSize.toString() + "/" + getFlagOfCountry(game.header.white.country) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += flagSource;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += game.header.black.player.shortNameWithSpace();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (game.header.black.rating)
		{
			s += game.header.black.rating;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (game.header.black.country != Country.none)
		{
      let flagSource = "images/flags/" + flagSize.toString() + "/" + getFlagOfCountry(game.header.black.country) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += flagSource;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += resultToString(game.header.result);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += game.plys;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += game.header.date.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += game.header.tournament.title;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += game.header.roundString();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.listTable.innerHTML = s;

  let tableBody = document.getElementById('gameList' + this.appletIndex);
  tableBody.addEventListener('click', this.handleRowClick.bind(this));

	this.setView();
}

setOrder(sectionId)
{
	if (sectionId != this.sortId)
	{
		this.sortId = sectionId;
		this.sortOrder = HeaderSortOrder.ascending;
	}
	else
	{
		if (this.sortOrder == HeaderSortOrder.none)
		{
			this.sortOrder = HeaderSortOrder.ascending;
		}
		else if (this.sortOrder == HeaderSortOrder.ascending)
		{
			this.sortOrder = HeaderSortOrder.descending;
		}
		else if (this.sortOrder == HeaderSortOrder.descending)
		{
			this.sortOrder = HeaderSortOrder.ascending;
		}
	}
	descending = (this.sortOrder == HeaderSortOrder.descending);

	for (const headerTag of this.headerTags)
	{
		let s = headerTag.className;
		let s1 = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let s2 = s1.replace(" grid-header-sort grid-header-sort-asc", "");
		headerTag.className = s2;
	}
	let curTag = this.headerTags[this.sortId];
	if (this.sortOrder == HeaderSortOrder.descending)
	{
		curTag.className = curTag.className + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		curTag.className = curTag.className + " grid-header-sort grid-header-sort-asc";
	}
}

sortWhitePlayer(event)
{
	this.setOrder(GameListSection.whitePlayer);
	this.games.sort(compareWhitePlayer);
	this.showGames();
}

sortWhiteRating(event)
{
	this.setOrder(GameListSection.whiteRating);
	this.games.sort(compareWhiteRating);
	this.showGames();
}

sortWhiteCountry(event)
{
	this.setOrder(GameListSection.whiteFlag);
	this.games.sort(compareWhiteCountry);
	this.showGames();
}

sortBlackPlayer(event)
{
	this.setOrder(GameListSection.blackPlayer);
	this.games.sort(compareBlackPlayer);
	this.showGames();
}

sortBlackRating(event)
{
	this.setOrder(GameListSection.blackRating);
	this.games.sort(compareBlackRating);
	this.showGames();
}

sortBlackCountry(event)
{
	this.setOrder(GameListSection.blackFlag);
	this.games.sort(compareBlackCountry);
	this.showGames();
}

sortResult(event)
{
	this.setOrder(GameListSection.result);
	this.games.sort(compareResult);
	this.showGames();
}

sortYear(event)
{
	this.setOrder(GameListSection.year);
	this.games.sort(compareYear);
	this.showGames();
}

sortEvent(event)
{
	this.setOrder(GameListSection.event);
	this.games.sort(compareEvent);
	this.showGames();
}

sortRound(event)
{
	this.setOrder(GameListSection.round);
	this.games.sort(compareRound);
	this.showGames();
}

sortMoves(event)
{
	this.setOrder(GameListSection.moves);
	this.games.sort(compareMoves);
	this.showGames();
}

handleRowClick(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.onGameClick)
  {
    this.onGameClick(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class MoveInfo
{

constructor()
{
	this.position = new GamePosition();
	this.curPosition = new GamePosition();
	this.capture = false;
	this.betweenIndex = 0;
	this.numberOfCaptures = 0;
	this.squares = [];
}

}

var tooltip = null;

class MovesView
{

constructor(appletIndex)
{
	this.appletIndex = appletIndex;
	this.moves_ = new MoveTree();
	this.gameView = null;
	this.moveInfo = new MoveInfo();
	this.movesPanel = null;
	this.moveElements = [];
	this.commentElements = [];
  this.linkElements = [];
  this.links = [];
	this.lastHighlight = -1;
	this.boardProperties = new BoardProperties();
  this.movesPos_ = null;
	this.animation = true;
	this.animating = false;
	this.animateSquares = [];
	this.animateIndex = 0;
  this.showRoot = true;
  this.showTooltipBoard = false;
	this.boldText = false;
	this.boldMainLine = true;
  this.multiPV = false;
}

setNotation(moveTree, nodeNumber)
{
	this.moves_ = moveTree.copyFrom();
  this.moves_.assignNodeNumbers();
	this.movesPos_ = this.moves_.goToNodeNumber(nodeNumber);
	this.showGame();
}

makeLinkElementVisible(linkNumber)
{
  this.makeVisible(this.linkElements[linkNumber]);
}

showGame()
{
	this.showMoves();
	this.showPosition();
  this.highlight(this.moves_.getNodeNumber(this.movesPos_));
}

showMoves()
{
	let notationWriter = new NotationWriter();
  notationWriter.setShowRoot(this.showRoot);
	notationWriter.setMultiPV(this.multiPV);
  /*
	notationWriter.setOneLine(this.multiPV);
  */
	notationWriter.setBoldText(this.boldText);
	notationWriter.setBoldMainLine(this.boldMainLine);
	notationWriter.write(this.moves_);

  this.movesPanel.innerHTML = notationWriter.streamWriter_.text;
  this.moveElements = this.movesPanel.getElementsByClassName("tdmove");
  this.commentElements = this.movesPanel.getElementsByClassName("tdcomment");

	this.assignClickMove("tdmove");
	this.assignClickMove("tdcomment");
	this.assignClickMove("tddia");
	this.assignClickMove("tdmedal");
  this.assignClickMove("tdcolors");

  this.assignTooltip("tdmove");

	this.drawBoards();
	this.drawMedals();
}

assignClickMove(tagName)
{
	let appletIndex = this.appletIndex;
	let tags = this.movesPanel.getElementsByClassName(tagName);
	for (const tag of tags)
	{
    let nodeNumber = tag.getAttribute('movenr');
    tag.onclick = this.goToMoveEvent.bind(this, nodeNumber);
	}
}

assignTooltip(tagName)
{
	let appletIndex = this.appletIndex;
	let tags = this.movesPanel.getElementsByClassName(tagName);
	for (const tag of tags)
	{
    let nodeNumber = tag.getAttribute('movenr');
    tag.onmouseover = this.mouseOverEvent.bind(this, nodeNumber);
    tag.onmouseleave = this.mouseLeaveEvent.bind(this, nodeNumber);
	}
}

flipBoardType()
{
	this.drawBoards();
}

drawBoards()
{
	let diaTags = this.movesPanel.getElementsByClassName("tddia");
	for (const diaTag of diaTags)
	{
		let board = new Board();
		board.canvas = diaTag.getElementsByTagName("canvas")[0];
		let boardSize = this.boardProperties.boardWidth();
		board.canvas.width = boardSize;
		board.canvas.height = boardSize;
		board.setBoardProperties(this.boardProperties);
		let pos = this.moves_.goToNodeNumber(diaTag.getAttribute('movenr'));
    board.setPosition(this.moves_.position(pos));
    if (pos.move)
    {
  		board.setArrows(pos.move.arrows());
	  	board.setMarks(pos.move.marks());
    }
    else
    {
   		board.setArrows(this.moves_.rootArrows());
	  	board.setMarks(this.moves_.rootMarks());
    }
		board.draw();
	}
}

drawMedals()
{
	let medalTags = this.movesPanel.getElementsByClassName("tdmedal");
	for (const medalTag of medalTags)
	{
		let canvas = medalTag.getElementsByTagName("canvas")[0];
		canvas.width = 40;
		canvas.height = 16;
		let ctx = canvas.getContext('2d');
		let rect = new Rect();
		rect.SetWidth(40);
		rect.SetHeight(16);
		let pos = this.moves_.goToNodeNumber(medalTag.getAttribute('movenr'));
    if (pos.move)
    {
  		drawMedals(ctx, rect, pos.move.medals());
    }
    else
    {
  		drawMedals(ctx, rect, this.moves_.rootMedals());
    }
	}
}

showPosition()
{
	let positionInfo = new PositionInfo();
	positionInfo.beginPosition = this.moves_.beginPosition();
  positionInfo.currentPosition = this.moves_.position(this.movesPos_);
  if (this.isBegin())
  {
    positionInfo.arrows = this.moves_.rootArrows();
	  positionInfo.marks = this.moves_.rootMarks();
  }
  else
  {
  	positionInfo.arrows = this.movesPos_.move.arrows();
	  positionInfo.marks = this.movesPos_.move.marks();
  }
  // TO DO het vullen van nextMove ook testen
	if (this.isEnd())
	{
		positionInfo.nextMove = new GenMove();
	}
	else
	{
    let nextPos = this.movesPos_.copyFrom();
		this.moves_.forward(nextPos);
		positionInfo.nextMove = nextPos.move.genMove().copyFrom();
	}
  // TO DO new testen
 	if (!this.isBegin())
	{
		positionInfo.prevMove = this.movesPos_.move.genMove();
	}
	positionInfo.nextMoveNumber = this.nextMoveNumber();
	positionInfo.canPlayBackward = this.canPlayBackward();
	positionInfo.canPlayForward = this.canPlayForward();
	positionInfo.numberOfMoves = 0; // JS slider voorlopig nvt
  positionInfo.ply = this.moves_.ply(this.movesPos_);
	if (this.gameView)
	{
		this.gameView.notationViewShowPosition(positionInfo);
	}
}

moveClick(nr)
{
	this.movesPos_ = this.moves_.goToNodeNumber(nr);
	this.showPosition();
}

formKeyDown(key)
{
	switch (key)
	{
		case KeyForward1:
		case KeyForward2:
		case KeyForward3:
			this.playForward();
			break;
		case KeyBackward1:
		case KeyBackward2:
		case KeyBackward3:
			this.playBackward();
			break;
		case KeyStart1:
		case KeyStart2:
		case KeyStart3:
			this.playHome();
			break;
		case KeyEnd1:
		case KeyEnd2:
		case KeyEnd3:
			this.playEnd();
			break;
		case KeyEnter:
			break;
		case KeyBackspace:
			break;
	}
}

showCurrentMove()
{
  if (this.movesPos_.node_)
  {
    this.highlight(this.movesPos_.node_.number);
  }
  else
  {
    this.highlight(0);
  }
}

showMoveChange()
{
	this.showCurrentMove();
	this.showPosition();
}

canPlayBackward()
{
	return !this.isBegin();
}

isBegin()
{
	return this.moves_.isBegin(this.movesPos_);
}

isEnd()
{
	return this.moves_.isEnd(this.movesPos_);
}

nextMoveNumber()
{
	return this.moves_.nextMoveNumber(this.movesPos_);
}

nextMove(variation)
{
	if (this.isEnd())
	{
		return null;
	}
	else
	{
    let nextPos = this.movesPos_.copyFrom();
		this.moves_.forwardVariation(nextPos, variation);
		return nextPos.move;
	}
}

playBackward()
{
	if (this.canPlayBackward())
	{
		this.moves_.backward(this.movesPos_);
		this.showMoveChange();
	}
}

canPlayForward()
{
	return !this.isEnd();
}

playForward()
{
	if (this.canPlayForward())
	{
		this.playForwardVariation(0);
	}
}

playForwardVariation(index)
{
	let numVariations = this.moves_.numberOfVariations(this.movesPos_);
	if (index >= 0 && index < numVariations)
	{
		this.moves_.forwardVariation(this.movesPos_, index);
		this.showMoveChange();
	}
}

playEnd()
{
	if (this.canPlayForward())
	{
		this.moves_.endPos(this.movesPos_);
		this.showMoveChange();
	}
}

playHome()
{
	if (this.canPlayBackward())
	{
		this.movesPos_ = this.moves_.beginPos();
		this.showMoveChange();
	}
}

replayForward()
{
	if (this.animation)
	{
		this.replayForwardWithAnimation();
	}
	else
	{
		this.replayForwardWithoutAnimation();
	}
}

stopReplay()
{
	if (this.animating)
	{
		this.animating = false;
		this.gameView.boardView.board.stopAnimation();
		this.showPosition();
	}
	else
	{
		this.showPosition();
	}
}

// TO DO deze functie is nog niet getest
replayForwardWithoutAnimation()
{
	if (this.isEnd())
	{
		this.showPosition();
		return;
	}
  if (chess)
  {
  	this.playForwardVariation(0);
    return;
  }

  // hierna alleen voor dammen
 	let move = this.nextMove(0);
  if (!move.numberOfCaptures())
 	{
  	this.playForwardVariation(0);
	  return;
 	}

  // alles hieronder nog niet getest
	let resetMove = false;
	if (!this.moveInfo.capture)
	{
		resetMove = true;
	}
	else
	{
		resetMove = false;
		if (this.moveInfo.betweenIndex < this.moveInfo.numberOfCaptures)
		{
			if (this.moveInfo.curPosition.isNotEqual(this.moveInfo.position))
			{
				resetMove = true;
			}
		}
	}
	if (resetMove)
	{
		this.moveInfo.position = this.moves_.position(this.movesPos_);
		this.moveInfo.curPosition = this.moves_.position(this.movesPos_);
		this.moveInfo.capture = true;
		this.moveInfo.betweenIndex = 0;
		this.moveInfo.squares.length = 0;
		this.moveInfo.squares.push(move.from()); // TO DO wijzig fromSquare in from() enzo
		this.moveInfo.numberOfCaptures = move.numberOfCaptures();
		if (this.moveInfo.numberOfCaptures > 1)
		{
			let betweenSquares = generateBetweens(this.moveInfo.curPosition, move.genMove());
			for (let i = 0; i < this.moveInfo.numberOfCaptures - 1; i++)
			{
				this.moveInfo.squares.push(betweenSquares[i]);
			}
		}
		this.moveInfo.squares.push(move.toSquare());
	}
	if (this.moveInfo.betweenIndex < this.moveInfo.numberOfCaptures)
	{
		let fromPiece = move.fromPiece();
		let fromSquare = this.moveInfo.squares[this.moveInfo.betweenIndex];
		let toSquare = this.moveInfo.squares[this.moveInfo.betweenIndex + 1];
		this.moveInfo.curPosition.setPiece(fromSquare, Piece.empty);
		this.moveInfo.curPosition.setPiece(toSquare, fromPiece);
		this.moveInfo.position = this.moveInfo.curPosition.copyFrom();
		this.moveInfo.betweenIndex++;
		let positionInfo = new PositionInfo();
		positionInfo.currentPosition = this.moveInfo.curPosition.copyFrom();
		positionInfo.canPlayBackward = this.canPlayBackward();
		positionInfo.canPlayForward = this.canPlayForward();
		if (this.gameView)
		{
			this.gameView.notationViewShowPosition(positionInfo);
		}
	}
	else
	{
		this.moveInfo.capture = false;
		this.playForwardVariation(0);
	}
}

// TO DO deze code nog niet getest
// voor schaken doe je niet animeren waarschijnlijk
replayForwardWithAnimation()
{
	if (this.animating)
	{
		let finished = this.gameView.boardView.board.animate();
		if (finished)
		{
			if (this.animateIndex < this.animateSquares.length - 1)
			{
				this.gameView.boardView.board.startAnimation(this.animateSquares[this.animateIndex],
					this.animateSquares[this.animateIndex+1], true);
				this.animateIndex++;
			}
			else
			{
				this.animating = false;
				this.playForwardVariation(0);
			}
		}
		return;
	}

	if (this.isEnd())
	{
		this.showPosition();
		return;
	}

	this.animateSquares.length = 0;
	let move = this.nextMove(0);
	let numberOfCaptures = move.numberOfCaptures();
	if (numberOfCaptures == 0)
	{
		this.animateSquares.push(move.from()); // bij dammen fromSquare wijzigen in from
		this.animateSquares.push(move.to());
	}
	else
	{
		this.animateSquares.push(move.from());
		if (numberOfCaptures > 1)
		{
      let position = this.moves_.position(this.movesPos_);
      let betweenSquares = generateBetweens(position, move.genMove());
			for (let i = 0; i < numberOfCaptures - 1; i++)
			{
				this.animateSquares.push(betweenSquares[i]);
			}
		}
		this.animateSquares.push(move.to());
	}

	this.gameView.boardView.board.startAnimation(this.animateSquares[0],
		this.animateSquares[1], numberOfCaptures > 0);
	this.animateIndex = 1;
	this.animating = true;
}

getMoveElement(movenr)
{
	for (const m of this.moveElements)
	{
		if (m.getAttribute('movenr') == movenr)
		{
			return m;
		}
	}
	return null;
}

getCommentElements(movenr)
{
	let elements = [];
	for (const comment of this.commentElements)
	{
		if (comment.getAttribute('movenr') == movenr)
		{
			elements.push(comment);
		}
	}
	return elements;
}

makeVisible(elem)
{
	let elemTop = elem.offsetTop;
	let elemHeight = elem.scrollHeight;

	let notationTop = this.movesPanel.offsetTop;
	let notationScrollTop = this.movesPanel.scrollTop;
	let notationHeight = this.movesPanel.clientHeight;
	let notationScrollHeight = this.movesPanel.scrollHeight;
	let relTop = elemTop - notationTop;
	if (relTop >= notationScrollTop && relTop + elemHeight <= notationScrollTop + notationHeight - 1)
	{
		// reeds zichtbaar
	}
	else
	{
		// centralize
		let top = relTop - (notationHeight / 2);
		if (top < 0) top = 0;
		this.movesPanel.scrollTop = top;
	}
}

highlightVariation(node, nodeClass)
{
	let curNode = node;
	while (curNode.prevVariation)
	{
		curNode = curNode.prevVariation;
	}
 	while (curNode)
	{
    if (this.moves_.isMoveAtMainVariation(curNode.number) == false)
    {
 	  	let elem = this.getMoveElement(curNode.number);
  	  if (elem)
 		  {
  		  elem.classList.add(nodeClass);
 	  	}
    }
    curNode = curNode.nextVariation;
  }
}

highlight(nodeNumber)
{
  // wis curLine
 	for (const move of this.moveElements)
	{
 		move.classList.remove('tdcurline');
    move.classList.remove('tdcurnode1');
	}
 	for (const comment of this.commentElements)
	{
 		comment.classList.remove('tdcurline');
	}

  // wis curMove
	if (this.lastHighlight >= 0)
	{
		let elem = this.getMoveElement(this.lastHighlight);
		if (elem)
		{
			elem.classList.remove('tdcurmove');
		}
	}

  // nieuwe curLine
  let firstNode = true;
  let nodes = this.moves_.previousAndNextNodes(this.movesPos_);
 	for (const node of nodes)
	{
    if (node.prevVariation && firstNode)
		{
		  this.highlightVariation(node, 'tdcurnode1');
      firstNode = false;
    }
    else
    {
      if (this.moves_.isMoveAtMainVariation(node.number) == false)
      {
   	  	let moveElement = this.getMoveElement(node.number);
	  	  if (moveElement)
  		  {
	  		  moveElement.classList.add('tdcurline');
  	  	}
      }
    }
	}

  // nieuwe curMove
	let elem = this.getMoveElement(nodeNumber);
	if (elem)
	{
    elem.classList.remove('tdcurline');
		elem.classList.add('tdcurmove');
		this.makeVisible(elem);
	}
	this.lastHighlight = nodeNumber;
}

goUp()
{
	let move = this.getMoveElement(this.lastHighlight);
	if (!move) return;
	let moveTop = move.offsetTop;
	let hitMove = null;
	let hitOffset = -1;
	for (const m of this.moveElements)
	{
		if (m.offsetTop < moveTop)
		{
			if (m.offsetTop > hitOffset)
			{
				hitMove = m;
				hitOffset = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (hitMove)
	{
		this.goToMove(hitMove.getAttribute('movenr'));
	}
	else
	{
		if (this.moveElements.length)
		{
			this.goToMove(this.moveElements[0].getAttribute('movenr'));
		}
	}
}

goDown()
{
	let move = this.getMoveElement(this.lastHighlight);
	if (!move)
	{
		this.playForward();
		return;
	}
	let moveTop = move.offsetTop;
	for (const m of this.moveElements)
	{
		if (m.offsetTop > moveTop)
		{
			this.goToMove(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.moveElements.length)
	{
		this.goToMove(this.moveElements[this.moveElements.length - 1].getAttribute('movenr'));
	}
}

goToMove(nr)
{
  // TO DO EXPERIMENT
  // Dit is om bij grote lappen tekst te voorkomen dat als je op de tekst klikt
  // hij de bijbehorende zet zichtbaar maakt (als hij dat niet al is)
  // waardoor er een onrustig geheel ontstaat
  if (this.movesPos_.node_)
  {
    if (this.movesPos_.node_.number == nr)
    {
      return;
    }
  }
  else
  {
    if (nr == 0)
    {
      return;
    }
  }
	// stop replay
  this.moveClick(nr);
  this.highlight(nr);
	// hervat replay
}

getNodeNumber()
{
	return this.moves_.getNodeNumber(this.movesPos_);
}

setBoardProperties(boardProperties)
{
  this.boardProperties = boardProperties.copyFrom();
	this.boardProperties.frameWidth = 0;
	this.boardProperties.marginWidth = 0;
	this.boardProperties.squareWidth = 32;
  this.boardProperties.borderWidth = 2;
 	this.boardProperties.coordinates = false;
}

beginPosition()
{
	return this.moves_.beginPosition();
}

beginMoveNumber()
{
	return this.moves_.beginMoveNumber();
}

previousMoves()
{
	return this.moves_.previousMoves(this.movesPos_);
}

hasMoves()
{
	return this.moves_.hasMoves();
}

goToMoveEvent(nodeNumber, event)
{
  this.goToMove(nodeNumber);
}

mouseOverEvent(nodeNumber, event)
{
  if (!this.showTooltipBoard) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const tag = event.currentTarget; // The element that has the listener
  const rect = tag.getBoundingClientRect();
  console.log(`Rect.Left: ${rect.left}`);
  console.log(`Rect.Top: ${rect.top}`);
  let tooltipX = rect.left;
  let tooltipY = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let tooltipSize = this.boardProperties.boardWidth();

  if (tooltipX + tooltipSize > viewportWidth)
  {
    tooltipX = viewportWidth - tooltipSize - 5;
  }
  if (tooltipX < 5)
  {
    tooltipX = 5;
  }
  if (tooltipY + tooltipSize > viewportHeight)
  {
    tooltipY = viewportHeight - tooltipSize - 5;
  }
  if (tooltipY < 5)
  {
    tooltipY = 5;
  }

  let pos = this.moves_.goToNodeNumber(nodeNumber);
  let position = this.moves_.position(pos);
  tooltip.innerHTML = this.renderBoard(position);

  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
  tooltip.classList.add('visible');
}

mouseLeaveEvent(nodeNumber, event)
{
  if (!this.showTooltipBoard) return;
  tooltip.classList.remove('visible');
}

renderBoard(position)
{
  let board = new Board();
  const tempCanvas = document.createElement('canvas');
	board.canvas = tempCanvas;
	let boardSize = this.boardProperties.boardWidth();
	board.canvas.width = boardSize;
	board.canvas.height = boardSize;
	board.setBoardProperties(this.boardProperties);
  board.setPosition(position);
  board.draw();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class MovesViewProperties
{

constructor()
{
	this.fontSize = 15;
  this.showMaterial = true;
 	this.showSymbols = true;
}

copyFrom()
{
  return Object.assign(new MovesViewProperties(), this);
}

}
class NotationView
{

constructor(appletIndex)
{
  this.gameHeaderView = new GameHeaderView(appletIndex);
  this.movesView = new MovesView(appletIndex);
}

}

class ReplayView
{

constructor()
{
	this.replayPause = false;
	this.gameView = null;
	this.replayId = null;
	this.delay = 6;
	this.autoPlayButton = null;
	this.playSlowerButton = null;
	this.playFasterButton = null;
	this.playBackwardButton = null;
	this.playForwardButton = null;
	this.inTimer = false;
}

start()
{
	this.replayPause = false;
	this.setReplayInterval();
	this.autoPlayButton.classList.replace('autoPlay', 'autoStop');
	this.playBackwardButton.style.display = 'none';
	this.playForwardButton.style.display = 'none';
	this.playSlowerButton.style.display = 'inline-block';
	this.playFasterButton.style.display = 'inline-block';
	this.enableDelayButtons();
	this.gameView.boardView.updateButtons = false;
}

stop()
{
	if (this.replayId)
	{
		clearInterval(this.replayId);
		this.replayId = null;
		this.autoPlayButton.classList.replace('autoStop', 'autoPlay');
		this.playBackwardButton.style.display = 'inline-block';
		this.playForwardButton.style.display = 'inline-block';
		this.playSlowerButton.style.display = 'none';
		this.playFasterButton.style.display = 'none';
		this.gameView.boardView.updateButtons = true; // bah
		this.gameView.notationView.movesView.stopReplay();
	}
}

setReplayInterval()
{
	let appletIndex = this.gameView.appletIndex;
	this.replayId = setInterval(function(){ replayTimerFunc(appletIndex); },
		this.gameView.notationView.movesView.animation ? this.delay * 2 : this.delay * 100);
}

isReplaying()
{
	return this.replayId != null;
}

canPlayBackward()
{
	return !this.gameView.notationView.movesView.isBegin();
}

canPlayForward()
{
	return !this.gameView.notationView.movesView.isEnd();
}

timer()
{
	if (this.inTimer)
	{
		return;
	}
	else
	{
		this.inTimer = true;
	}
	if (!this.canPlayForward())
	{
		this.stop();
	}
	else
	{
		this.gameView.notationView.movesView.replayForward();
	}
	this.inTimer = false;
}

playSlower()
{
	if (this.replayId)
	{
		if (this.delay < 50)
		{
			this.delay++;
			clearInterval(this.replayId);
			this.setReplayInterval();
			this.enableDelayButtons();
		}
	}
}

playFaster()
{
	if (this.replayId)
	{
		if (this.delay > 1)
		{
			this.delay--;
			clearInterval(this.replayId);
			this.setReplayInterval();
			this.enableDelayButtons();
		}
	}
}

enableDelayButtons()
{
	setButtonEnabled(this.playSlowerButton, this.delay < 50);
	setButtonEnabled(this.playFasterButton, this.delay > 1);
}

}

let dragDiv = null;
let delta = 0;
let thisApplet = null;

class Applet
{

constructor()
{
	this.index = 0;
	this.pdn = '';
	this.replay = null;
	this.isPortrait = false;
	this.gameView = null;
	this.gameListView = null;
  this.games = [];
	this.gameIndex = 0;
  this.db = 0;

	this.rootParent = null;
	this.root = null;
	this.left = null;
	this.leftContainer = null;
	this.leftNest = null;
	this.leftNorth = null;
	this.boardHolder = null;
	this.boardPanel = null;
	this.boardCanvas = null;
	this.belowBoard = null;
	this.replayPanel = null;
 	this.goToPreviousButton = null;
 	this.goToNextButton = null;
	this.goToBeginButton = null;
	this.playBackwardButton = null;
	this.playSlowerButton = null;
	this.autoPlayButton = null;
	this.playForwardButton = null;
	this.playFasterButton = null;
	this.goToEndButton = null;
 	this.flipBoardButton = null;
  this.downloadButton = null;
	this.showGameListButton = null;
  this.settingsButton = null;
	this.leftSouth = null;
	this.leftSouthNest = null;
	this.listParent = null;
	this.listHeader = null;
	this.listHeaderTable = null;
	this.listBody = null;
  this.listButtonContainer = null;
  this.hideGameListButton = null;
	this.gameList = null;
	this.right = null;
	this.rightNest = null;
	this.rightNorth = null;
	this.rightSouth = null;

	this.gameNotaContainer = null;
	this.gameNotaHeaderContainer = null;
	this.gameHeaderPanel = null;
	this.gameMovesPanel = null;

  this.engineNotaContainer = null;
	this.engineNotaHeaderContainer = null;
	this.engineHeaderPanel = null;
  this.engineMovesPanel = null;

  this.startEngineButton = null;

  // settings dialog
  this.settingsDialog = null;
  this.pieceSelect = null;
  this.coordinatesCheckbox = null;
  this.movesFontSizeSelect = null;
  this.okButton = null;
  this.cancelButton = null;

  // Engine settings dialog
}

generate(index, replay, pdn)
{
	this.index = index;
	this.replay = replay;
	this.pdn = pdn;
	replay.innerHTML = '';
	replay.id = "replay";

  let s = '';
 	s += "<div class=\"rootParent\">";
	s +=   "<div id=\"root" + index + "\" class=\"root\">";

	s +=     "<div id=\"left" + index + "\" class=\"left\">";
	s +=       "<div id=\"leftContainer" + index + "\" class=\"leftContainer\">";
	s +=         "<div id=\"leftNest" + index + "\" class=\"leftNest\">";
	s +=           "<div id=\"leftNorth" + index + "\" class=\"leftNorth\">";
	s +=             "<div id=\"boardHolder" + index + "\" class=\"boardHolder\">";
	s +=               "<div id=\"boardPanel" + index + "\" class=\"boardPanel\">";
	s +=                 "<canvas id=\"boardCanvas" + index + "\" class=\"boardCanvas\"></canvas>";
	s +=               "</div>";
	s +=             "</div>";
	s +=             "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
	s +=               "<div id=\"replayPanel" + index + "\" class=\"replayPanel\">";
	s +=                 "<button id=\"goToBegin" + index + "\" class=\"replayButton goToBegin\" title=\"Go to begin\"></button>";
	s +=                 "<button id=\"playBackward" + index + "\" class=\"replayButton playBackward\" title=\"Play backward\"></button>";
	s +=                 "<button id=\"playSlower" + index + "\" class=\"replayButton playSlower\" title=\"Slower\"></button>";
	s +=                 "<button id=\"autoPlay" + index + "\" class=\"replayButton autoPlay\" title=\"Auto play\"></button>";
	s +=                 "<button id=\"playForward" + index + "\" class=\"replayButton playForward\" title=\"Play forward\"></button>";
	s +=                 "<button id=\"playFaster" + index + "\" class=\"replayButton playFaster\" title=\"Faster\"></button>";
	s +=                 "<button id=\"goToEnd" + index + "\" class=\"replayButton goToEnd\" title=\"Go to end\"></button>";
	s +=                 "<button id=\"flipBoard" + index + "\" class=\"replayButton flipBoard\" title=\"Flip Board\"></button>";
	s +=                 "<button id=\"goToPrevious" + index + "\" class=\"replayButton loadPrevious\" title=\"Load previous game\"></button>";
	s +=                 "<button id=\"goToNext" + index + "\" class=\"replayButton loadNext\" title=\"Load next game\"></button>";
  s +=                 "<button id=\"showGameList" + index + "\" class=\"replayButton gameList\" title=\"Show Game List\"></button>";
	s +=                 "<button id=\"download" + index + "\" class=\"replayButton download\" title=\"Download PDN\"></button>";
	s +=                 "<button id=\"settings" + index + "\" class=\"replayButton settings\" title=\"Settings\"></button>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=       "</div>";
	s +=     "</div>";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "</div>";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  // experiment met knoppenbalk aan bovenkant engineView
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  // toggle
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "</label>";
  s += "</div>";
  // threat
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  // settings
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "</div>";
  s +=  "</div>";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
  s +=       "</div>";
	s +=     "</div>";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "</table>";
	s +=       "</div>";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "</div>";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "</div>";
  s +=     "</div>";
	s +=   "</div>";
	s += "</div>";

  replay.innerHTML = s;

	this.rootParent = document.getElementById("rootParent"+index);
	this.root = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.leftContainer = document.getElementById("leftContainer"+index);
	this.leftNest = document.getElementById("leftNest"+index);
	this.leftNorth = document.getElementById("leftNorth"+index);
	this.boardHolder = document.getElementById("boardHolder"+index);
	this.boardPanel = document.getElementById("boardPanel"+index);
	this.boardCanvas = document.getElementById("boardCanvas"+index);
	this.belowBoard = document.getElementById("belowBoard"+index);
	this.replayPanel = document.getElementById("replayPanel"+index);
 	this.goToPreviousButton = document.getElementById("goToPrevious"+index);
 	this.goToNextButton = document.getElementById("goToNext"+index);
	this.goToBeginButton = document.getElementById("goToBegin"+index);
	this.playBackwardButton = document.getElementById("playBackward"+index);
	this.playSlowerButton = document.getElementById("playSlower"+index);
	this.autoPlayButton = document.getElementById("autoPlay"+index);
	this.playForwardButton = document.getElementById("playForward"+index);
	this.playFasterButton = document.getElementById("playFaster"+index);
	this.goToEndButton = document.getElementById("goToEnd"+index);
  this.flipBoardButton = document.getElementById("flipBoard"+index);
  this.downloadButton = document.getElementById("download"+index);
	this.showGameListButton = document.getElementById("showGameList"+index);
  this.settingsButton = document.getElementById("settings"+index);
	this.leftSouth = document.getElementById("leftSouth"+index);
	this.leftSouthNest = document.getElementById("leftSouthNest"+index);
	this.listParent = document.getElementById("listParent"+index);
	this.listHeader = document.getElementById("listHeader"+index);
	this.listHeaderTable = document.getElementById("listHeaderTable"+index);
	this.listBody = document.getElementById("listBody"+index);
  this.listButtonContainer = document.getElementById("list-button-container"+index);
  this.hideGameListButton = document.getElementById("hideGameList"+index);
	this.gameList = document.getElementById("gameList"+index);
	this.right = document.getElementById("right"+index);
	this.rightNest = document.getElementById("rightNest"+index);
	this.rightNorth = document.getElementById("rightNorth"+index);
	this.rightSouth = document.getElementById("rightSouth"+index);

  // bij dammen enginevenster onzichtbaar maken zolang de engine nog niet werkt
  if (!chess)
  {
    this.rightNorth.style.height = "100%";
   	this.rightSouth.style.display = 'none';
  }

	this.gameNotaContainer = document.getElementById("nota-container"+index);
  this.gameNotaContainer.style.fontSize = globalMovesViewProperties.fontSize + 'px';
	this.gameNotaHeaderContainer = document.getElementById("nota-header-container"+index);
	this.gameHeaderPanel = document.getElementById("headerPanel"+index);
	this.gameMovesPanel = document.getElementById("movesPanel"+index);

	this.engineNotaContainer = document.getElementById("enota-container"+index);
  this.engineNotaContainer.style.fontSize = globalMovesViewProperties.fontSize + 'px';
	this.engineNotaHeaderContainer = document.getElementById("enota-header-container"+index);
	this.engineHeaderPanel = document.getElementById("eheaderPanel"+index);
	this.engineMovesPanel = document.getElementById("emovesPanel"+index);

  this.startEngineButton = document.getElementById("startEngine"+index);
}

init()
{
	this.replay.style.display = 'block';
	this.playSlowerButton.style.display = 'none';
	this.playFasterButton.style.display = 'none';
	this.listParent.style.display = 'none';

	this.isPortrait = false;
	if (this.replay.clientWidth <= portraitMaxWidth)
	{
		this.toPortrait();
		this.isPortrait = true;
	}
	else
	{
		this.replayPanelResize();
		this.resizeLeftSouth();
	}
  this.parsePDN();
	let appletIndex = this.index;

	this.goToBeginButton.onclick = this.goToBegin.bind(this);
	this.playBackwardButton.onclick = this.playBackward.bind(this);
	this.playSlowerButton.onclick = this.playSlower.bind(this);
	this.autoPlayButton.onclick = this.autoPlay.bind(this);
	this.playFasterButton.onclick = this.playFaster.bind(this);
	this.playForwardButton.onclick = this.playForward.bind(this);
	this.goToEndButton.onclick = this.goToEnd.bind(this);
  this.goToPreviousButton.onclick = this.loadPrevious.bind(this);
  this.goToNextButton.onclick = this.loadNext.bind(this);
  this.flipBoardButton.onclick = this.flipBoard.bind(this);
 	this.downloadButton.onclick = this.downloadPDN.bind(this);
	this.showGameListButton.onclick = this.showGameList.bind(this);
 	this.hideGameListButton.onclick = this.hideGameList.bind(this);

  this.settingsButton.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.startEngineButton.onchange = this.startEngine.bind(this);

	this.gameView = new GameView(this.index);
	this.gameView.boardView.board.setCanvas(this.boardCanvas);
	this.gameView.boardView.boardPanel = this.boardPanel;
  this.gameView.boardView.setBoardProperties(globalBoardProperties);
	this.gameView.notationView.gameHeaderView.headerPanel = this.gameHeaderPanel;
	this.gameView.notationView.movesView.movesPanel = this.gameMovesPanel;
  this.gameView.notationView.movesView.setBoardProperties(globalBoardProperties);
	this.gameView.replayView.autoPlayButton = this.autoPlayButton;
	this.gameView.replayView.playSlowerButton = this.playSlowerButton;
	this.gameView.replayView.playFasterButton = this.playFasterButton;
	this.gameView.replayView.playBackwardButton = this.playBackwardButton;
	this.gameView.replayView.playForwardButton = this.playForwardButton;
 	this.gameView.engineView.movesView.movesPanel = this.engineMovesPanel;
  this.gameView.engineView.movesView.setBoardProperties(globalBoardProperties);

  this.gameView.engineView.settingsButton.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.gameListView = new GameListView(this.index);
	this.gameListView.listParent = this.listParent;
	this.gameListView.listTable = this.gameList;
	this.gameListView.headerTable = this.listHeaderTable;
	this.gameListView.init();
	this.gameListView.setGames(this.games);
  this.gameListView.onGameClick = (gameList, index) => {
    this.gameClick(gameList, index);
  };
	if (this.gameListView.games.length)
	{
		this.showGame(0, 0);
	}
	else
	{
		let game = new Game();
		this.gameView.showGame(null, 1, 0, game);
	}
}

loadPDN(pdn)
{
	this.pdn = pdn;
 	let lines = this.pdn.split('\n');
	let lineNumber = 0;
	for (const line of lines)
	{
		if (line.startsWith("[Event \""))
		{
			let firstLine = lineNumber;
      let lastLine = lines.length;
   		let gameLines = lines.slice(firstLine, lastLine);
  		let portableDecoder = new PortableDecoder(gameLines);
	  	this.gameListView.games[this.gameIndex] = portableDecoder.getGame();
      break;
    }
    lineNumber++;
	}
  this.showGame(0, 0);
}

parsePDN()
{
	let lines = this.pdn.split('\n');
	let eventLines = [];
	let lineNumber = 0;
	for (const line of lines)
	{
		if (line.startsWith("[Event \""))
		{
			eventLines.push(lineNumber);
		}
		lineNumber++;
	}
	let i = 0;
	this.games = [];
	for (const eventLine of eventLines)
	{
		let firstLine = eventLine;
		let lastLine = 0;
		if (i < eventLines.length - 1)
		{
			lastLine = eventLines[i + 1];
		}
		else
		{
			lastLine = lines.length;
		}
		let gameLines = lines.slice(firstLine, lastLine);
		let portableDecoder = new PortableDecoder(gameLines);
		let game = portableDecoder.getGame();
		this.games.push(game);
		i++;
	}
}

resizeReplay()
{
	if (this.isPortrait || this.root.clientHeight <= portraitMaxWidth)
	{
		this.replay.style.borderLeft = "0px";
		this.replay.style.borderRight = "0px";
		this.replay.style.width = "100%";
		this.replay.style.height = "88vh";
	}
	else
	{
		this.replay.style.borderLeft = "1px solid gray";
		this.replay.style.borderRight = "1px solid gray";
		this.replay.style.height = "88vh";
	}
}

resizePortrait()
{
	this.resizeReplay();

	this.left.style.width = "100%";

	let leftNorthRect = this.leftNorth.getBoundingClientRect();
	this.leftSouth.style.top = (leftNorthRect.height) + "px";
	this.resizeLeftSouth();

	this.boardResize();
	this.replayPanelResize();
	this.gameListResize();
	this.notationResize();
  this.enotationResize()
}

resizeLandscape()
{
	this.resizeReplay();

	let rootRect = this.root.getBoundingClientRect();
	this.left.style.width = (rootRect.width * 0.50) + "px";
	let leftRect = this.left.getBoundingClientRect();

	let leftNorthRect = this.leftNorth.getBoundingClientRect();
	this.leftSouth.style.top = (leftNorthRect.height) + "px";
	this.resizeLeftSouth();

	this.right.style.left = (leftRect.width) + "px";
	this.right.style.width = (rootRect.width - leftRect.width) + "px";

	this.boardResize();
	this.replayPanelResize();
	this.gameListResize();
	this.notationResize();
  this.enotationResize()
}

replayPanelResize()
{
}

toLandscape()
{
  this.leftNorth.style.height = '100%';
  this.rightNorth.appendChild(this.gameNotaContainer);
  this.gameNotaContainer.style.height = '100%';
  this.rightSouth.appendChild(this.engineNotaContainer);
  if (!chess)
  {
    this.rightSouth.style.display = 'none';
  }
  else
  {
    this.rightSouth.style.display = 'block';
    this.engineNotaContainer.style.height = '100%';
  }
  this.right.style.display = 'block';
}

toPortrait()
{
  this.leftNorth.style.height = '70%';
  this.leftSouthNest.appendChild(this.gameNotaContainer);
  if (!chess)
  {
    this.gameNotaContainer.style.height = '100%';
    this.engineNotaContainer.style.display = 'none';
  }
  else
  {
    this.leftSouthNest.appendChild(this.engineNotaContainer);
    this.gameNotaContainer.style.height = '50%';
    this.engineNotaContainer.style.height = '50%';
    this.engineNotaContainer.style.display = 'block';
  }
  this.right.style.display = 'none';
}

showGameList(event)
{
	this.listParent.style.display = 'block';
  let listBodyHeight = this.listParent.clientHeight - this.listHeader.clientHeight - this.listButtonContainer.clientHeight;
  this.listBody.style.height = listBodyHeight + "px";
	this.gameListResize();
}

hideGameList(event)
{
 	this.listParent.style.display = 'none';
}

notationResize()
{
	this.gameView.notationView.gameHeaderView.headerPanelResize();
}

enotationResize()
{
}

gameListResize()
{
  this.gameListView.formResize();
}

boardResize()
{
	let leftNorthRect = this.leftNorth.getBoundingClientRect();
	let belowBoardRect = this.belowBoard.getBoundingClientRect();
	this.boardHolder.style.height = (leftNorthRect.height - belowBoardRect.height - 1) + "px";
	this.gameView.boardView.formResize();
}

resizeLeftSouth()
{
	let leftNestRect = this.leftNest.getBoundingClientRect();
	let leftNorthRect = this.leftNorth.getBoundingClientRect();
	let leftSouthHeight = leftNestRect.height - leftNorthRect.height;
	if (leftSouthHeight < 0) leftSouthHeight = 0;
	this.leftSouth.style.height = leftSouthHeight + "px";
}

enableGameButtons()
{
  setReplayButtonEnabled('goToPrevious'+this.index, this.gameIndex > 0);
  setReplayButtonEnabled('goToNext'+this.index, this.gameIndex < this.gameListView.games.length - 1);
}

boardMouseDown(e)
{
	this.gameView.boardView.board.mouseDown(e);
}

boardMouseMove(e)
{
	this.gameView.boardView.board.mouseMove(e);
}

boardMouseUp(e)
{
	this.gameView.boardView.board.mouseUp(e);
}

boardTouchStart(e)
{
	this.gameView.boardView.board.touchStart(e);
}

boardTouchMove(e)
{
	this.gameView.boardView.board.touchMove(e);
}

boardTouchEnd(e)
{
	this.gameView.boardView.board.touchEnd(e);
}

playSlower(event)
{
	this.gameView.replayView.playSlower();
}

playFaster(event)
{
	this.gameView.replayView.playFaster();
}

playBackward(event)
{
	this.gameView.replayView.stop();
	this.gameView.notationView.movesView.playBackward();
}

playForward(event)
{
	this.gameView.replayView.stop();
	this.gameView.notationView.movesView.playForward();
}

goToBegin(event)
{
	this.gameView.replayView.stop();
	this.gameView.notationView.movesView.playHome();
}

goToEnd(event)
{
	this.gameView.replayView.stop();
	this.gameView.notationView.movesView.playEnd();
}

autoPlay(event)
{
	this.gameView.replayGame();
}

loadFirst()
{
 	if (this.gameListView.games.length)
  {
    this.showGame(0, 0);
  }
}

loadPrevious(event)
{
 	if (this.gameIndex > 0)
  {
    this.showGame(this.gameIndex - 1, 0);
  }
}

loadNext(event)
{
  if (this.gameIndex < this.gameListView.games.length - 1)
  {
    this.showGame(this.gameIndex + 1, 0);
  }
}

loadLast()
{
	if (this.gameListView.games.length)
  {
    this.gameIndex = this.gameListView.games.length - 1;
    this.showGame(this.gameListView.games.length - 1, 0);
	}
}

showGame(gameIndex, nodeNumber)
{
  if (gameIndex >= 0 && gameIndex <= this.gameListView.games.length - 1)
  {
    this.gameIndex = gameIndex;
  	this.gameView.showGame(null, 1, nodeNumber, this.gameListView.games[this.gameIndex]);
  }
  this.enableGameButtons();
}

flipBoard(event)
{
	this.gameView.flipBoard();
}

flipCoordinates()
{
	this.gameView.flipCoordinates();
}

docResize()
{
	if (this.replay.clientWidth <= portraitMaxWidth)
	{
		if (this.isPortrait)
		{
			this.resizePortrait();
		}
		else
		{
			this.toPortrait();
			this.isPortrait = true;
			this.resizePortrait();
		}
	}
	else
	{
		if (!this.isPortrait)
		{
			this.resizeLandscape();
		}
		else
		{
			this.toLandscape();
			this.isPortrait = false;
			this.resizeLandscape();
		}
	}
}

gameClick(gameList, index)
{
	this.showGame(index, 0);
  this.hideGameList();
}

downloadPDN(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.pdn.length - 1)
  {
    if (this.pdn[i] == '[')
    {
        break;
    }
    i++;
  }
  let pdn = this.pdn.substring(i);
  a.href = window.URL.createObjectURL(new Blob([pdn], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

startEngine(event)
{
  if (chess)
  {
    if (this.gameView.hasKibitzer())
    {
      this.deleteKibitzer();
    }
    else
    {
      this.addKibitzer();
    }
  }
}

deleteKibitzer()
{
  this.gameView.deleteKibitzer();
}

addKibitzer()
{
  let engineItem = new EngineItem();
  engineItem.id.name = "Stockfish";
  const params = engineItem.params;
  params.addInteger("MultiPV", globalEngineParamMultiPV);
  params.addInteger("Threads", globalEngineParamThreads);
  params.addInteger("Hash",    getMemoryValue(globalEngineParamMemory));
  this.gameView.addKibitzer(engineItem);
}

applySettings()
{
  this.gameView.boardView.setBoardProperties(globalBoardProperties);
  this.gameView.boardView.formResize();
  this.gameView.notationView.movesView.setBoardProperties(globalBoardProperties);
  this.gameView.notationView.movesView.showMoves();
  this.gameView.engineView.movesView.setBoardProperties(globalBoardProperties);
  this.gameView.engineView.movesView.showMoves();
  let gameNotaContainer = document.getElementById("nota-container"+this.index);
  gameNotaContainer.style.fontSize = globalMovesViewProperties.fontSize + 'px';
  let eNotaContainer = document.getElementById("enota-container"+this.index);
  eNotaContainer.style.fontSize = globalMovesViewProperties.fontSize + 'px';
}

applyEngineSettings()
{
  if (this.gameView.hasKibitzer())
  {
    this.deleteKibitzer();
    this.addKibitzer();
  }
}

async onSettingsClick()
{
  const dialog = new SettingsView();
  const { result } = await dialog.show();

  if (result === dialog.mrOk)
  {
    this.applySettings();
  }
}

async onEngineSettingsClick()
{
  const dialog = new EngineSettingsView();
  const { result } = await dialog.show();

  if (result === dialog.mrOk)
  {
    this.applyEngineSettings();
  }
}

}

class SettingsView
{

constructor()
{
  this.mrOk = 1;
  this.mrCancel = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.pieceSelect = this.dialog.querySelector(".piece-select");
  this.coordinatesCheckbox = this.dialog.querySelector(".coordinates-checkbox");
  this.movesFontSizeSelect = this.dialog.querySelector(".font-select");
  this.okButton = this.dialog.querySelector(".ok-button");
  this.cancelButton = this.dialog.querySelector(".cancel-button");

  this.okButton.onclick = this.okSettings.bind(this);
 	this.cancelButton.onclick = this.cancelSettings.bind(this);
}

buildDialog()
{
  const boardPieces = getBoardPieces();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${boardPieces.map((piece, i) => '<option value="' + i + '">' + piece + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font size:</span>
        <select class="movesFontSizeSelect font-select">
          <option value="12">Small</option>
          <option value="15">Default</option>
          <option value="18">Medium</option>
          <option value="22">Large</option>
        </select>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)
{
  globalBoardProperties.pieces = this.pieceSelect.value;
  localStorage.setItem(PIECES_KEY, globalBoardProperties.pieces);
  initPieceBitmaps(globalBoardProperties.pieces);
  globalBoardProperties.coordinates = this.coordinatesCheckbox.checked;
  localStorage.setItem(COORDINATES_KEY, globalBoardProperties.coordinates.toString());
  globalMovesViewProperties.fontSize = this.movesFontSizeSelect.value;
  localStorage.setItem(MOVESFONTSIZE_KEY, globalMovesViewProperties.fontSize);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

async show()
{
  isDialogBlockingKeys = true;

  this.pieceSelect.value = globalBoardProperties.pieces;
  this.coordinatesCheckbox.checked = globalBoardProperties.coordinates;
  this.movesFontSizeSelect.value = globalMovesViewProperties.fontSize;

  const result = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.mrOk : this.mrCancel);
    };
    this.dialog.showModal();
  });

  isDialogBlockingKeys = false;
  return { result };
}

}

function getSearchTimeValue(sliderValue)
{
  const value = parseInt(sliderValue);
  const timeMap = {
    1: 2000,   // 2s
    2: 4000,   // 4s
    3: 6000,   // 6s
    4: 8000,   // 8s
    5: 10000,  // 10s
    6: 12000,  // 12s
    7: 15000,  // 15s
    8: 20000,  // 20s
    9: 30000,  // 30s
    10: 0      // 0 will be our "Infinite" flag
  };
  return timeMap[value] || 2000; // Default to 2s if error
}

function getMemoryValue(sliderValue)
{
  const value = parseInt(sliderValue);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[value] || 16;
}

class EngineSettingsView
{

constructor()
{
  this.mrOk = 1;
  this.mrCancel = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.searchTimeSlider = this.dialog.querySelector(".searchTime-slider");

  this.searchTimeValue = this.dialog.querySelector(".searchTime-value");
  this.multiPVSlider = this.dialog.querySelector(".multiPV-slider");
  this.multiPVValue = this.dialog.querySelector(".multiPV-value");
  this.threadsSlider = this.dialog.querySelector(".threads-slider");
  this.threadsValue = this.dialog.querySelector(".threads-value");
  this.memorySlider = this.dialog.querySelector(".memory-slider");
  this.memoryValue = this.dialog.querySelector(".memory-value");
  this.okButton = this.dialog.querySelector(".ok-button");
  this.cancelButton = this.dialog.querySelector(".cancel-button");

  this.okButton.onclick = this.okSettings.bind(this);
 	this.cancelButton.onclick = this.cancelSettings.bind(this);

  this.searchTimeSlider.addEventListener('input', this.updateSearchTimeSliderValue.bind(this));
  this.multiPVSlider.addEventListener('input', this.updateMultiPVSliderValue.bind(this));

  this.threadsSlider.addEventListener('input', this.updateThreadsSliderValue.bind(this));

  this.memorySlider.addEventListener('input', this.updateMemorySliderValue.bind(this));

}

buildDialog() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <h2>Engine Settings</h2>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" step="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" step="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" step="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" step="1" value="1">
        <span class="value-display-simple memory-value">16MB</span>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)

{
  globalEngineParamSearchTime = parseInt(this.searchTimeSlider.value);
  globalEngineParamMultiPV = parseInt(this.multiPVSlider.value);
  globalEngineParamThreads = parseInt(this.threadsSlider.value);
  globalEngineParamMemory = parseInt(this.memorySlider.value);
  localStorage.setItem(SEARCHTIME_KEY, globalEngineParamSearchTime);
  localStorage.setItem(MULTIPV_KEY, globalEngineParamMultiPV);
  localStorage.setItem(THREADS_KEY, globalEngineParamThreads);
  localStorage.setItem(MEMORY_KEY, globalEngineParamMemory);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

updateSearchTimeSliderValue()
{
  const value = parseInt(this.searchTimeSlider.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "2s"; break;
    case 2: displayValue = "4s"; break;
    case 3: displayValue = "6s"; break;
    case 4: displayValue = "8s"; break;
    case 5: displayValue = "10s"; break;
    case 6: displayValue = "12s"; break;
    case 7: displayValue = "15s"; break;
    case 8: displayValue = "20s"; break;
    case 9: displayValue = "30s"; break;
    case 10: displayValue = "\u221E"; break;
    default: displayValue = "";
  }
  this.searchTimeValue.textContent = displayValue;
}

updateMultiPVSliderValue()
{
  const value = this.multiPVSlider.value;
  this.multiPVValue.textContent = `${value}`;
}


updateThreadsSliderValue()
{
  const value = this.threadsSlider.value;
  this.threadsValue.textContent = `${value}`;
}


updateMemorySliderValue()

{
  const value = parseInt(this.memorySlider.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "16MB"; break;
    case 2: displayValue = "32MB"; break;
    case 3: displayValue = "64MB"; break;
    case 4: displayValue = "128MB"; break;
    case 5: displayValue = "256MB"; break;
    case 6: displayValue = "512MB"; break;
    default: displayValue = "";
  }

  this.memoryValue.textContent = displayValue;
}

async show()
{
  isDialogBlockingKeys = true;

  this.searchTimeSlider.value = globalEngineParamSearchTime;
  this.multiPVSlider.value = globalEngineParamMultiPV;
  this.threadsSlider.value = globalEngineParamThreads;
  this.memorySlider.value = globalEngineParamMemory;

  this.updateSearchTimeSliderValue();
  this.updateMultiPVSliderValue();
  this.updateThreadsSliderValue();
  this.updateMemorySliderValue();

  const result = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.mrOk : this.mrCancel);
    };
    this.dialog.showModal();
  });

  isDialogBlockingKeys = false;
  return { result };
}

}

const KeyUp = 38;
const KeyDown = 40;
const KeyBackward1 = 37;
const KeyBackward2 = 37;
const KeyBackward3 = 52;
const KeyForward1 = 39;
const KeyForward2 = 39;
const KeyForward3 = 54;
const KeyStart1 = 36;
const KeyStart2 = 36;
const KeyStart3 = 55;
const KeyEnd1 = 35;
const KeyEnd2 = 35;
const KeyEnd3 = 49;
const KeyFlip1 = 187;
const KeyFlip2 = 107;
const KeyFlip3 = 61;
const KeyAuto1 = 42;
const KeyAuto2 = 170;
const KeyBackspace = 8;
const KeyEnter = 13;
let busy = false;
let isDialogBlockingKeys = false;

const portraitMaxWidth = 767;
let applets = [];
let currentApplet = -1;
let bitmapManager = new BitmapManager();

let globalBoardProperties = new BoardProperties();
let globalMovesViewProperties = new MovesViewProperties();
let globalEngineParamSearchTime = 1;
let globalEngineParamMultiPV = 1;
let globalEngineParamThreads = 1;
let globalEngineParamMemory = 1;

window.onload = function()
{
  addImages();
  initMoveGenerator();
  initSettings();
};

document.onkeydown = keyDown;

function keyDown(e)
{
  if (e.key === "Escape")
  {
    return;
  }

  if (isDialogBlockingKeys)
  {
    // Prevent the browser from scrolling (the only default action we care about now)
    e.preventDefault();
    return;
  }

	let evt = e || window.event;
	let key = evt.keyCode;

	if (busy) return;
	busy = true;

	if (currentApplet == -1) return;

	if (e.ctrlKey)
	{
		if (key == 66) // Ctrl+B
		{
				applets[currentApplet].flipBoard();
				e.preventDefault();
				// CB heeft Ctrl+B voor flip board maar FireFox gebruikt
				// deze key voor tonen bookmarks dus vraag is of het verstandig
				// is om deze key te gebruiken en preventDefault te doen
		}
		busy = false;
		return;
	}
	if (key)
	{
		// hier iets met tijdens autoplay niets doen?
		HandleKey(key);
		e.preventDefault(); // TO DO misschien alleen voor bepaalde keys doen?
		// met name Up en Down omdat anders hij gaat scrollen
	}
	busy = false;
}

function replayTimerFunc(appletIndex)
{
	applets[appletIndex].gameView.replayView.timer();
}

function HandleKey(key)
{
	if (currentApplet == -1) return;

	if (key == KeyUp)
	{
		applets[currentApplet].gameView.notationView.movesView.goUp();
	}
	else if (key == KeyDown)
	{
		applets[currentApplet].gameView.notationView.movesView.goDown();
	}
	else if (key == KeyBackward1 || key == KeyBackward2 || key == KeyBackward3 ||
	key == KeyForward1 || key == KeyForward2 || key == KeyForward3 ||
	key == KeyStart1 || key == KeyStart2 ||
	key == KeyEnd1 || key == KeyEnd2)
	{
		applets[currentApplet].gameView.notationView.movesView.formKeyDown(key);
	}
	else if (key == KeyFlip1 || key == KeyFlip2 || key == KeyFlip3)
	{
		applets[currentApplet].doFlipBoard();
	}
}

function loadImages(images, callback)
{
	let total = images.length;
	let count = 0;

	function check(n)
	{
		if (n == total)
		{
			callback();
		}
	}

	for (let i = 0; i < images.length; ++i)
	{
    let imageSource = images[i];
		let img = document.createElement("img");
		img.id = images[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		bitmapManager.add(img);
		img.addEventListener("load", function()
		{
			count++;
			check(count);
		});
		img.src = imageSource;
	}
}

function addImages()
{
 	loadImages(getImages(), doSomething);
  //const numberOfProcessors = navigator.hardwareConcurrency;
  //console.log(`Your computer has access to ${numberOfProcessors} logical processors.`);
}

function docResize()
{
	for (const applet of applets)
	{
		applet.docResize();
	}
}

function doSomething()
{
	let replays = document.getElementsByClassName("tdreplay");
	for (const replay of replays)
	{
		let applet = new Applet();
		applet.generate(applets.length, replay, replay.innerHTML);
		applet.init();
		applets.push(applet);
	}
	if (applets.length)
	{
		currentApplet = 0;
	}
	window.addEventListener("resize", docResize);
	docResize();
}

function setReplayButtonEnabled(name, enabled)
{
	let button = document.getElementById(name);
	if (enabled)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function setButtonEnabled(button, enabled)
{
	if (enabled)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const COORDINATES_KEY = 'Coordinates';
const PIECES_KEY = 'Pieces';
const MOVESFONTSIZE_KEY = 'MovesFontSize';
const SEARCHTIME_KEY = 'SearchTime';
const MULTIPV_KEY = 'MultiPV';
const THREADS_KEY = 'Threads';
const MEMORY_KEY = 'Memory';

function initSettings()
{
  const coordinatesValue = localStorage.getItem(COORDINATES_KEY);
  if (coordinatesValue === null)
  {
    globalBoardProperties.coordinates = true;
  }
  else
  {
    globalBoardProperties.coordinates = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(PIECES_KEY);
  if (piecesValue === null)
  {
    globalBoardProperties.pieces = 0;
  }
  else
  {
    globalBoardProperties.pieces = piecesValue;
  }
  initPieceBitmaps(globalBoardProperties.pieces);

  const movesFontSizeValue = localStorage.getItem(MOVESFONTSIZE_KEY);
  if (movesFontSizeValue === null)
  {
    globalMovesViewProperties.fontSize = 15;
  }
  else
  {
    globalMovesViewProperties.fontSize = movesFontSizeValue;
  }

  // engineParams
  const searchTime = localStorage.getItem(SEARCHTIME_KEY);
  if (searchTime === null)
  {
    globalEngineParamSearchTime = 10; // infinite
  }
  else
  {
    globalEngineParamSearchTime = searchTime;
  }
  const multiPV = localStorage.getItem(MULTIPV_KEY);
  if (multiPV === null)
  {
    globalEngineParamMultiPV = 1;
  }
  else
  {
    globalEngineParamMultiPV = multiPV;
  }
  const threads = localStorage.getItem(THREADS_KEY);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    globalEngineParamThreads = defaultThreads;
  }
  else
  {
    globalEngineParamThreads = threads;
  }
  const memory = localStorage.getItem(MEMORY_KEY);
  if (memory === null)
  {
    globalEngineParamMemory = 4; // 16 MB
  }
  else
  {
    globalEngineParamMemory = memory;
  }
}
const portableTournamentTypes =
[
	[ TournamentType.none, 			  	""      ],
	[ TournamentType.game,  		 		"game"  ],
	[ TournamentType.match,    		 	"match" ],
	[ TournamentType.tournament,  	"tourn" ],
	[ TournamentType.swiss,   			"swiss" ],
	[ TournamentType.knockOut,    	"k.o."  ],
	[ TournamentType.simultaneous,	"simul" ],
	[ TournamentType.scheveningen,	"schev" ]
];

const portableTournamentSpeeds =
[
	[ TournamentSpeed.normal, ""        ],
	[ TournamentSpeed.rapid,  "(rapid)" ],
	[ TournamentSpeed.blitz,  "(blitz)" ],
	[ TournamentSpeed.corr,   "(corr)"  ]
];

const portableMovePrefixes =
[
	[ MovePrefix.none,     		 ""     ],
	[ MovePrefix.rr,       		 "$145" ],
	[ MovePrefix.betterIs, 		 "$142" ],
	[ MovePrefix.weakerIs, 		 "$143" ],
	[ MovePrefix.equivalentIs, "$144" ],
	[ MovePrefix.withTheIdea,  "$140" ],
	[ MovePrefix.aimedAgainst, "$141" ]
];

const portableMoveStyles =
[
	[ MoveStyle.none,     		""   ],
	[ MoveStyle.good,       	"$1" ],
	[ MoveStyle.bad, 			  	"$2" ],
	[ MoveStyle.interesting,	"$5" ],
	[ MoveStyle.dubious, 		  "$6" ],
	[ MoveStyle.excellent,  	"$3" ],
	[ MoveStyle.blunder, 		  "$4" ],
	[ MoveStyle.zugzwang, 		"$22" ],
	[ MoveStyle.onlyMove, 		"$8" ]
];

const portableMoveValues =
[
	[ MoveValue.none,     						""     ],
	[ MoveValue.whiteMuchBetter,      "$18"  ],
	[ MoveValue.whiteBetter, 					"$16"  ],
	[ MoveValue.whiteSlightlyBetter,	"$14"  ],
	[ MoveValue.balanced, 						"$11"  ],
	[ MoveValue.unclear,  						"$13"  ],
	[ MoveValue.blackSlightlyBetter,  "$15"  ],
	[ MoveValue.blackBetter, 					"$17"  ],
	[ MoveValue.blackMuchBetter, 			"$19"  ],
	[ MoveValue.compensation,					"$44"  ],
	[ MoveValue.counterPlay, 					"$132" ],
	[ MoveValue.initiative,  					"$36"  ],
	[ MoveValue.attack, 							"$40"  ],
	[ MoveValue.timePressure, 			  "$138" ],
	[ MoveValue.developmentAdvantage,	"$32"  ],
	[ MoveValue.novelty, 							"$146" ]
];

const portableMoveCriticals =
[
	[ MoveCritical.none,     		""     ],
	[ MoveCritical.opening,     "$51"  ],
	[ MoveCritical.middle, 			"$52"  ],
	[ MoveCritical.end,	    		"$53"  ]
];

const portableSourceQualities =
[
	[ SourceQuality.high, 			 	""       ],
	[ SourceQuality.middle,   		"middle" ],
	[ SourceQuality.low,   	   	 	"low"    ]
];


function tournamentSpeedToPortable(speed)
{
	return portableTournamentSpeeds[speed][1];
}

function portableToTournamentSpeed(portableString)
{
	for (const speed of portableTournamentSpeeds)
	{
		if (speed[1] == portableString)
		{
			return speed[0];
		}
	}
	return TournamentSpeed.normal;
}

function tournamentTypeToPortable(type)
{
	return portableTournamentTypes[type][1];
}

function portableToTournamentType(portableString)
{
	for (const tournamentType of portableTournamentTypes)
	{
		if (tournamentType[1] == portableString)
		{
			return tournamentType[0];
		}
	}
	return TournamentType.none;
}

function movePrefixToPortable(prefix)
{
	return portableMovePrefixes[prefix][1];
}

function portableToMovePrefix(portableString)
{
	for (const prefix of portableMovePrefixes)
	{
		if (prefix[1] == portableString)
		{
			return prefix[0];
		}
	}
	return MovePrefix.none;
}

function moveStyleToPortable(style)
{
	return portableMoveStyles[style][1];
}

function portableToMoveStyle(portableString)
{
	for (const style of portableMoveStyles)
	{
		if (style[1] == portableString)
		{
			return style[0];
		}
	}
	return MoveStyle.none;
}

function moveValueToPortable(value)
{
	return portableMoveValues[value][1];
}

function portableToMoveValue(portableString)
{
	for (const value of portableMoveValues)
	{
		if (value[1] == portableString)
		{
			return value[0];
		}
	}
	return MoveValue.none;
}

function moveCriticalToPortable(critical)
{
	return portableMoveCriticals[critical][1];
}

function portableToMoveCritical(portableString)
{
	for (const crit of portableMoveCriticals)
	{
		if (crit[1] == portableString)
		{
			return crit[0];
		}
	}
	return MoveCritical.none;
}

function isPortableStringEmpty(portableString)
{
	return portableString.length == 0 ||
		portableString == "?" ||
		portableString == "-" ||
		portableString == "*" ||
		portableString == "????.??.??";
}

function portableToString(portableString)
{
	if (isPortableStringEmpty(portableString))
	{
		return "";
	}
	else
	{
		return portableString.trim();
	}
}

function portableToInt(portableString, defValue)
{
	if (isPortableStringEmpty(portableString))
	{
		return defValue;
	}
	else
	{
		return StrToIntDef(portableString, defValue);
	}
}

function intToPortable(value)
{
	return value ? value.toString() : "";
}

function qualityToPortable(quality)
{
	return portableSourceQualities[quality][1];
}

function portableToQuality(portableString)
{
	for (const quality of portableSourceQualities)
	{
		if (quality[1] == portableString)
		{
			return quality[0];
		}
	}
	return SourceQuality.high;
}

function timeToPortable(minutes)
{
	if (!minutes)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(minutes / 60);
		let rem = minutes % 60;
		return div.toString() + "." + rem.toString().padStart(2, '0');
	}
}

function resultToPortable(result)
{
	switch (result)
	{
		case Result.whiteWins:
			return "1-0";
		case Result.draw:
			return "1/2-1/2";
		case Result.blackWins:
			return "0-1";
		default:
			return "*";
	}
}

function ratingToPortable(rating)
{
	if (rating > 0 && rating <= 9999)
	{
		return rating.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function dateToPortable(date)
{
	if (date.empty())
	{
		return "????.??.??";
	}
	let portableString = '';
	if (date.year)
	{
		portableString = date.year.toString().padStart(4, '0');
	}
	else
	{
		portableString = "????";
	}
	portableString += ".";
	if (date.month)
	{
		let smonth = date.month.toString().padStart(2, '0');
		portableString += smonth;
	}
	else
	{
		portableString += "??";
	}
	portableString += ".";
	if (date.day)
	{
		let sday = date.day.toString().padStart(2, '0');;
		portableString += sday;
	}
	else
	{
		portableString += "??";
	}
	return portableString;
}

function portableToDate(string)
{
	if (isPortableStringEmpty(string))
	{
		return new GameDate();
	}
	else
	{
		let date = new GameDate();
		date.setDateFormat("yyyy.mm.dd", string);
		return date;
	}
}

function portableEventTypeToTournament(string, tournament)
{
	tournament.teams = (string.indexOf("team") != -1);
	tournament.type = TournamentType.none;
	for (const tournamentType of portableTournamentTypes)
	{
		if (string.indexOf(tournamentType[1]) != -1)
		{
			tournament.type = tournamentType[0];
			break;
		}
	}
	tournament.speed = TournamentSpeed.normal;
	for (const speed of portableTournamentSpeeds)
	{
		if (string.indexOf(speed[1]) != -1)
		{
			tournament.speed = speed[0];
			break;
		}
	}
}

function portableToRound(string, gameHeader)
{
	gameHeader.round = 0;
	gameHeader.subRound = 0;
	let pos = string.indexOf(".");
	if (pos != -1)
	{
		let beforePoint = string.substr(0, pos);
		gameHeader.round = StrToIntDef(beforePoint, 0);
		let afterPoint = string.substr(pos + 1, string.length);
		pos = afterPoint.indexOf(".");
		if (pos != -1)
		{
			beforePoint = afterPoint.substr(0, pos);
			gameHeader.subRound = StrToIntDef(beforePoint, 0);
		}
		else
		{
			gameHeader.subRound = StrToIntDef(afterPoint, 0);
		}
	}
	else
	{
		gameHeader.round = StrToIntDef(string, 0);
	}
}

function roundToPortable(gameHeader)
{
	let string = '';
	if (gameHeader.subRound)
	{
		string = gameHeader.round.toString() + "." + gameHeader.subRound.toString();
	}
	else if (gameHeader.round)
	{
		string = gameHeader.round.toString();
	}
	return string;
}

function portableToResult(string)
{
	if (string == "2-0" || string == "20" || string == "1-0" || string == "10")
	{
		return Result.whiteWins;
	}
	else if (string == "1-1" || string == "11" || string == "1/2-1/2" ||
		string == "1/21/2" || string == "0.5-0.5")
	{
		return Result.draw;
	}
	else if (string == "0-2" || string == "02" || string == "0-1" || string == "01")
	{
		return Result.blackWins;
	}
	else
	{
		return Result.none;
	}
}

function portableToRating(string)
{
	return StrToIntDef(string, 0);
}

function portableToEco(string)
{
	return stringToEco(string);
}

function portableToThinkTime(string)
{
	return stringToThinkTime(string);
}

function boolToPortable(value)
{
	return value ? "1" : "";
}

function portableToBool(string)
{
	return string == "1";
}

function portableToGameHeader(portableHeader)
{
	let gameHeader = new GameHeader();

	// white
	gameHeader.white.player.setName(portableToString(portableHeader.whitePlayer));
	if (!isPortableStringEmpty(portableHeader.whiteTeamName))
	{
		gameHeader.white.team.name = portableToString(portableHeader.whiteTeamName);
		gameHeader.white.team.number = portableToInt(portableHeader.whiteTeamNumber, 0);
		if (!isPortableStringEmpty(portableHeader.whiteTeamYear))
		{
			let date = portableToDate(portableHeader.whiteTeamYear);
			gameHeader.white.team.year = date.year;
		}
		gameHeader.white.team.season = portableToBool(portableHeader.whiteTeamSeason);
		gameHeader.white.team.country = getCountryWithIso3(portableToString(portableHeader.whiteTeamCountry));
	}
	gameHeader.white.rating = portableToRating(portableToString(portableHeader.whiteRating));
	gameHeader.white.time = portableToThinkTime(portableToString(portableHeader.whiteTime));
	gameHeader.white.title = portableToString(portableHeader.whiteTitle);
	gameHeader.white.country = getCountryWithIso2(portableToString(portableHeader.whiteCountry));

	// black
	gameHeader.black.player.setName(portableToString(portableHeader.blackPlayer));
	if (!isPortableStringEmpty(portableHeader.blackTeamName))
	{
		gameHeader.black.team.name = portableToString(portableHeader.blackTeamName);
		gameHeader.black.team.number = portableToInt(portableHeader.blackTeamNumber, 0);
		if (!isPortableStringEmpty(portableHeader.blackTeamYear))
		{
			let date = portableToDate(portableHeader.blackTeamYear);
			gameHeader.black.team.year = date.year;
		}
		gameHeader.black.team.season = portableToBool(portableHeader.blackTeamSeason);
		gameHeader.black.team.country = getCountryWithIso3(portableToString(portableHeader.blackTeamCountry));
	}
	gameHeader.black.rating = portableToRating(portableToString(portableHeader.blackRating));
	gameHeader.black.time = portableToThinkTime(portableToString(portableHeader.blackTime));
	gameHeader.black.title = portableToString(portableHeader.blackTitle);
	gameHeader.black.country = getCountryWithIso2(portableToString(portableHeader.blackCountry));

	// tournament
	gameHeader.tournament.title = portableToString(portableHeader.tournamentTitle);
	gameHeader.tournament.place = portableToString(portableHeader.tournamentPlace);
	gameHeader.tournament.startDate = portableToDate(portableHeader.tournamentStartDate);
	gameHeader.tournament.endDate = portableToDate(portableHeader.tournamentEndDate);

	portableEventTypeToTournament(portableToString(portableHeader.tournamentType), gameHeader.tournament);
	// portableEventTypeToTournament kan ook speed en type zetten
	// daarom tournamentSpeed en tournamentType alleen overnemen als ze niet leeg zijn
	// om te voorkomen dat ze overschreven worden
	let tournamentSpeed = portableToTournamentSpeed(portableHeader.tournamentSpeed);
	if (tournamentSpeed != TournamentSpeed.normal)
	{
		gameHeader.tournament.speed = tournamentSpeed;
	}
	gameHeader.tournament.country = getCountryWithIso3(portableToString(portableHeader.tournamentCountry));
	gameHeader.tournament.category = portableToInt(portableHeader.tournamentCategory, 0);
	let tournamentType = portableToTournamentType(portableHeader.tournamentType);
	if (tournamentType != TournamentType.none)
	{
		gameHeader.tournament.type= tournamentType;
	}
	gameHeader.tournament.rounds = portableToInt(portableHeader.tournamentRounds, 0);
	gameHeader.tournament.teams = portableToBool(portableHeader.tournamentTeams);
	gameHeader.tournament.complete = portableToBool(portableHeader.tournamentComplete);
	gameHeader.tournament.threePoints = portableToBool(portableHeader.tournamentThreePoints);
	gameHeader.tournament.boardPoints = portableToBool(portableHeader.tournamentBoardPoints);

	// annotator
	gameHeader.annotator.name = portableToString(portableHeader.annotator);

	// source
	gameHeader.source.title = portableToString(portableHeader.sourceTitle);
	gameHeader.source.publisher = portableToString(portableHeader.sourcePublisher);
	gameHeader.source.publicationDate = portableToDate(portableHeader.sourcePublicationDate);
	gameHeader.source.versionNumber = portableToInt(portableHeader.sourceVersionNumber, 0);
	gameHeader.source.versionDate = portableToDate(portableHeader.sourceVersionDate);
	gameHeader.source.quality = portableToQuality(portableHeader.sourceQuality);

	// title
	gameHeader.title.title = portableToString(portableHeader.title);

	// game
	gameHeader.date = portableToDate(portableHeader.date);
	gameHeader.result = portableToResult(portableToString(portableHeader.result));
	gameHeader.eco = portableToEco(portableToString(portableHeader.eco));
	portableToRound(portableToString(portableHeader.round), gameHeader);

	// tags
	let tags = portableToInt(portableHeader.tags, 0);
	gameHeader.tags.setUlong(tags);

  // guid
  gameHeader.id.guid = portableHeader.guid;

	return gameHeader;
}

function gameToPortableHeader(gameHeader)
{
	let portableHeader = new PortableHeader();

	// white
	portableHeader.whitePlayer = gameHeader.white.player.name();
	if (gameHeader.white.team.name.length)
	{
		portableHeader.whiteTeamName = gameHeader.white.team.name;
		if (gameHeader.white.team.number)
		{
			portableHeader.whiteTeamNumber = gameHeader.white.team.number;
		}
		if (gameHeader.white.team.year)
		{
			let whiteTeamDate = new GameDate();
			whiteTeamDate.year = gameHeader.white.team.year;
			portableHeader.whiteTeamYear = dateToPortable(whiteTeamDate);
		}
		if (gameHeader.white.team.season)
		{
			portableHeader.whiteTeamSeason = boolToPortable(gameHeader.white.team.season);
		}
		if (gameHeader.white.team.country != Country.none)
		{
			portableHeader.whiteTeamCountry = getIso3OfCountry(gameHeader.white.team.country);
		}
	}
	portableHeader.whiteRating = ratingToPortable(gameHeader.white.rating);
	portableHeader.whiteTime = timeToPortable(gameHeader.white.time);
	portableHeader.whiteTitle = gameHeader.white.title;

	// black
	portableHeader.blackPlayer = gameHeader.black.player.name();
	if (gameHeader.black.team.name.length)
	{
		portableHeader.blackTeamName = gameHeader.black.team.name;
		if (gameHeader.black.team.number)
		{
			portableHeader.blackTeamNumber = gameHeader.black.team.number;
		}
		if (gameHeader.black.team.year)
		{
			let blackTeamDate = new GameDate();
			blackTeamDate.year = gameHeader.black.team.year;
			portableHeader.blackTeamYear = dateToPortable(blackTeamDate);
		}
		if (gameHeader.black.team.season)
		{
			portableHeader.blackTeamSeason = boolToPortable(gameHeader.black.team.season);
		}
		if (gameHeader.black.team.country != Country.none)
		{
			portableHeader.blackTeamCountry = getIso3OfCountry(gameHeader.black.team.country);
		}
	}
	portableHeader.blackRating = ratingToPortable(gameHeader.black.rating);
	portableHeader.blackTime = timeToPortable(gameHeader.black.time);
	portableHeader.blackTitle = gameHeader.black.title;

	// tournament
	portableHeader.tournamentTitle = gameHeader.tournament.title;
	portableHeader.tournamentPlace = gameHeader.tournament.place;
	portableHeader.tournamentStartDate = dateToPortable(gameHeader.tournament.startDate);
	portableHeader.tournamentEndDate = dateToPortable(gameHeader.tournament.endDate);
	portableHeader.tournamentSpeed = tournamentSpeedToPortable(gameHeader.tournament.speed);
	portableHeader.tournamentCategory = intToPortable(gameHeader.tournament.category);
	portableHeader.tournamentCountry = getIso3OfCountry(gameHeader.tournament.country);
	portableHeader.tournamentType = tournamentTypeToPortable(gameHeader.tournament.type);
	portableHeader.tournamentRounds = intToPortable(gameHeader.tournament.rounds);
	portableHeader.tournamentTeams = boolToPortable(gameHeader.tournament.teams);
	portableHeader.tournamentComplete = boolToPortable(gameHeader.tournament.complete);
	portableHeader.tournamentThreePoints = boolToPortable(gameHeader.tournament.threePoints);
	portableHeader.tournamentBoardPoints = boolToPortable(gameHeader.tournament.boardPoints);

	// annotator
	portableHeader.annotator = gameHeader.annotator.name;

	// source
	portableHeader.sourceTitle = gameHeader.source.title;
	portableHeader.sourcePublisher = gameHeader.source.publisher;
	portableHeader.sourcePublicationDate = dateToPortable(gameHeader.source.publicationDate);
	portableHeader.sourceVersionNumber = intToPortable(gameHeader.source.versionNumber);
	portableHeader.sourceVersionDate = dateToPortable(gameHeader.source.versionDate);
	portableHeader.sourceQuality = qualityToPortable(gameHeader.source.quality);

	// title
	portableHeader.title = gameHeader.title.title;

	// game
	portableHeader.date = dateToPortable(gameHeader.date);
	portableHeader.result = resultToPortable(gameHeader.result);
	portableHeader.eco = ecoToString(gameHeader.eco);
	portableHeader.round = roundToPortable(gameHeader);

	// tags
	portableHeader.tags = intToPortable(gameHeader.tags.toUlong());

	return portableHeader;
}

const pdnWhitePlayer  					= "White";
const pdnWhiteTeamName					= "WhiteTeam";
const pdnWhiteTeamNumber 				= "WhiteTeamNumber";
const pdnWhiteTeamYear 					= "WhiteTeamYear";
const pdnWhiteTeamSeason 				= "WhiteTeamSeason";
const pdnWhiteTeamCountry 			= "WhiteTeamCountry";
const pdnWhiteRating 						= "WhiteRating";
const pdnWhiteTime 							= "WhiteTime";
const pdnWhiteElo 							= "WhiteElo";
const pdnWhiteTitle  						= "WhiteTitle";
const pdnWhiteCountry						= "WhiteCountry";

const pdnBlackPlayer						= "Black";
const pdnBlackTeamName					= "BlackTeam";
const pdnBlackTeamNumber 				= "BlackTeamNumber";
const pdnBlackTeamYear 					= "BlackTeamYear";
const pdnBlackTeamSeason 				= "BlackTeamSeason";
const pdnBlackTeamCountry 			= "BlackTeamCountry";
const pdnBlackRating 						= "BlackRating";
const pdnBlackTime 							= "BlackTime";
const pdnBlackElo 							= "BlackElo";
const pdnBlackTitle  						= "BlackTitle";
const pdnBlackCountry						= "BlackCountry";

const pdnTournamentTitle 				= "Event";
const pdnTournamentPlace				= "Site";
const pdnTournamentDate 			 	= "EventDate";
const pdnTournamentEndDate 		 	= "EventEndDate";
const pdnTournamentSpeed 			 	= "EventSpeed";
const pdnTournamentCategory 	 	= "EventCategory";
const pdnTournamentCountry 		 	= "EventCountry";
const pdnTournamentType 			 	= "EventType";
const pdnTournamentRounds 		 	= "EventRounds";
const pdnTournamentTeams 			 	= "EventTeams";
const pdnTournamentComplete		 	= "EventComplete";
const pdnTournamentThreePoints 	= "EventThreePoints";
const pdnTournamentBoardPoints	= "EventBoardPoints";

const pdnAnnotator 							= "Annotator";

const pdnSourceTitle 				 		= "SourceTitle";
const pdnPublication 				 		= "Publication";
const pdnSourcePublisher		 		= "SourcePublisher";
const pdnPublicationDate		 		= "PublicationDate";
const pdnSourceDate 				 		= "SourceDate";
const pdnSourceVersionNumber 		= "SourceVersionNumber";
const pdnSourceVersionDate 	 		= "SourceVersionDate";
const pdnSourceQuality 			 		= "SourceQuality";

const pdnTitle 					 		    = "Title";

const pdnDate 							 		= "Date";
const pdnResult 								= "Result";
const pdnEco 										= "ECO";
const pdnRound 									= "Round";

const pdnTags			 							= "Tags";

const pdnSetup 									= "Setup";
const pdnFen 										= "FEN";
const pdnPlyCount 							= "PlyCount";

const pdnGUID      							= "GUID";

const BEGINVARIANT = "(";
const ENDVARIANT   = ")";
const BEGINTEXT    = "{";

class SpecialArgs
{

constructor()
{
  this.arrowList = new BoardArrowList();
  this.markList = new BoardMarkList();
  this.medals = new MoveMedals();
  this.pawnStructure = false;
  this.piecePath = false;
  this.endOfGame = false;
  this.remainingText = '';
}

}

class PortableDecoder
{

constructor(lines)
{
	this.portableHeader_ = new PortableHeader();
	this.lines_ = lines;
	this.lineNumber_ = 0;
	this.line_ = '';
	this.lineLength_ = 0;
	this.lineIndex_ = 0;
	this.word_ = '';
	this.plys_ = 0;
	this.fen_ = false;
	this.element_ = '';
	this.posElement_ = '';
	this.moves_ = null;
	this.beginPosition_ = new GamePosition();
	this.beforeText_ = '';
	this.hasBeforeText_ = false;
 	this.blackTeamYear_ = false;
	this.whiteTeamYear_ = false;
}

getGame()
{
  this.plys_ = 0;
	let game = new Game();
	this.moves_ = game.moves;
	try
	{
		this.decodeGame();
	}
	catch (err)
	{
	}
	game.header = portableToGameHeader(this.portableHeader_);
  game.plys = this.plys_;
	return game;
}

decodeGame()
{
	this.fen_ = false;
	this.readHeader();
	if (this.fen_)
	{
		this.beginPosition = portableFenToPosition(this.posElement_);
		this.moves_.setPosition(this.beginPosition, 1);
	}
 	this.convertMoves();
}

readLine()
{
	if (this.lines_.length == 0)
	{
		return false;
	}
	if (this.lineNumber_ >= this.lines_.length)
	{
		return false;
	}
	else
	{
		this.line_ = this.lines_[this.lineNumber_];
		this.lineLength_ = this.line_.length;
		this.lineIndex_ = 0;
		this.lineNumber_++;
		return true;
	}
}

readHeader()
{
	this.whiteTeamYear_ = false;
	this.blackTeamYear_ = false;
	while (true)
	{
		if (!this.readLine())
		{
			return;
		}
		this.setWord();
		if (!this.isHeader())
		{
			return;
		}
		this.parseHeader();
	}
}

// deze heet isHeader in C++ maar die hebben we al
isCurHeader(hdr)
{
	let string = this.word_.substr(1, this.word_.length - 1);
	return string.toUpperCase() === hdr.toUpperCase();
}

convertMoves()
{
 	if (this.word_.length == 0) return;
	this.hasBeforeText_ = false;

	while (this.word_[0] == '{')
	{
		let text = this.getText();
    let specialArgs = new SpecialArgs();
		this.parseSpecial(text, specialArgs);
    if (!specialArgs.arrowList.empty())
		{
			this.moves_.setRootArrows(specialArgs.arrowList);
		}
 		if (!specialArgs.markList.empty())
		{
			this.moves_.setRootMarks(specialArgs.markList);
		}
		if (!specialArgs.medals.empty())
		{
			this.moves_.setRootMedals(specialArgs.medals);
		}
 		text = specialArgs.remainingText.trim();
    if (text.length)
    {
      // bij dammen oude codes weghalen van verouderde PDN die nog
      // op de server zijn opgeslagen
      if (text.startsWith("[%a") && text.length > 7)
      {
        text = text.substr(7, text.length).trim();
      }
      let rootText = this.moves_.rootText();
      if (rootText.length)
      {
        rootText += ' ';
      }
      rootText += text;
      this.moves_.setRootText(rootText);
		}
		this.setWord();
		if (this.word_.length == 0)
		{
			return;
		}
	}
	this.decode(this.moves_.beginPos(), this.moves_.beginPosition());
}

decode(posA, positionA)
{
  let pos = posA.copyFrom();
  let position = positionA.copyFrom();

	let curMove = null;
 	let state = new BoardState();

	do
	{
		if (this.word_ == BEGINVARIANT)
		{
			if (!curMove)
			{
				throw "error";
			}
			if (!this.setWord())
			{
				throw "error";
			}

 			position.backward(pos.move.genMove());
			position.setState(state);
			this.moves_.backward(pos); // take back 1. 32-28
      this.decode(pos, position);
			this.moves_.forward(pos); // play 1.32-28
			position.forward(pos.move.genMove());

			while (this.setWord())
			{
				if (this.word_ != BEGINVARIANT)
				{
					break;
				}
				if (!this.setWord())
				{
					throw "error";
				}
        position.backward(pos.move.genMove());
				position.setState(state);
				this.moves_.backward(pos); // take back 1. 32-28
				this.decode(pos, position);
				this.moves_.forward(pos);  // play 1. 32-28
				position.forward(pos.move.genMove());
			}
		}

		if (this.word_ == ENDVARIANT)
		{
			break;
		}

		if (
			this.word_ == "1-0" ||
			this.word_ == "2-0" ||
			this.word_ == "0-1" ||
			this.word_ == "0-2" ||
			this.word_ == "1/2-1/2" ||
			this.word_ == "1-1" ||
			this.word_ == "*" ||
			this.word_ == "**" ||
			this.word_ == "-*" ||
			this.word_ == "1-0*" ||
			this.word_ == "2-0*" ||
			this.word_ == "0-1*" ||
			this.word_ == "0-2*" ||
			this.word_ == "1/2-1/2*" ||
			this.word_ == "1-1*" ||
			this.word_ == "2-00*" ||
			this.word_ == "00-2*")
			break;

		if (this.word_[0] == '$')
		{
			if (!curMove)
			{
				throw "error";
			}
			let prefix = portableToMovePrefix(this.word_);
			if (prefix != MovePrefix.none)
			{
				curMove.setPrefix(prefix);
				continue;
			}
			let style = portableToMoveStyle(this.word_);
			if (style != MoveStyle.none)
			{
				curMove.setStyle(style);
				continue;
			}
			let value = portableToMoveValue(this.word_);
			if (value != MoveValue.none)
			{
				curMove.setValue(value);
				continue;
			}
			let critical = portableToMoveCritical(this.word_);
			if (critical != MoveCritical.none)
			{
				curMove.setCritical(critical);
				continue;
			}
			continue;
		}
		if (this.word_[0] == '{')
		{
			let text = this.getText();
      let specialArgs = new SpecialArgs();
  		this.parseSpecial(text, specialArgs);
      if (!specialArgs.arrowList.empty())
      {
		  	if (curMove)
			  {
				  curMove.setArrows(specialArgs.arrowList);
				}
			}
   		if (!specialArgs.markList.empty())
      {
				if (curMove)
				{
					curMove.setMarks(specialArgs.markList);
				}
			}
   		if (!specialArgs.medals.empty())
      {
				if (curMove)
				{
					curMove.setMedals(specialArgs.medals);
				}
			}
      if (specialArgs.piecePath)
      {
				if (curMove)
				{
					curMove.setPiecePath();
				}
			}
      if (specialArgs.endOfGame)
      {
				if (curMove)
				{
					curMove.setEndOfGame();
				}
			}
   		text = specialArgs.remainingText.trim();
      if (!text.length)
      {
        continue;
      }
			if (curMove)
			{
        let afterText = curMove.afterText();
        if (afterText.length)
        {
          afterText += ' ';
        }
        afterText += text;
				curMove.setAfterText(afterText);
			}
			else
			{
        if (this.beforeText_.length)
        {
   				this.beforeText_ += ' ';
        }
				this.beforeText_ += text;
				this.hasBeforeText_ = true;
			}
			continue;
		}
		if (!this.stripMoveNumber())
		{
			continue;
		}
		let lastMove = false;
		if (this.word_[this.word_.length] == '*')
		{
			this.word_ = this.word_.substr(0, this.word_.length - 1);
			lastMove = true;
		}
 		let moveStyle = this.stripMoveStyle(this.word_);
    let genMove = portableToMove(position, this.word_);
 		state = position.state();
		position.forward(genMove);
		let move = buildGameMove(genMove);
    move.setStyle(moveStyle);
    this.moves_.addMove(pos, move);
		curMove = pos.move;
		if (this.hasBeforeText_)
		{
			curMove.setBeforeText(this.beforeText_);
			this.hasBeforeText_ = false;
      this.beforeText_ = '';
		}
		if (lastMove)
		{
			break;
		}
	} while (this.setWord());
}

stripMoveStyle(string)
{
	if (string.endsWith("??"))
	{
		string = string.subString(0, string.length-2);
		return MoveStyle.blunder;
	}
	else if (string.endsWith("!!"))
	{
		string = string.subString(0, string.length-2);
		return MoveStyle.excellent;
	}
	else if (string.endsWith("?!"))
	{
		string = string.subString(0, string.length-2);
		return MoveStyle.dubious;
	}
	else if (string.endsWith("!?"))
	{
		string = string.subString(0, string.length-2);
		return MoveStyle.interesting;
	}
	else if (string.endsWith("?"))
	{
		string = string.subString(0, string.length-1);
		return MoveStyle.bad;
	}
	else if (string.endsWith("!"))
	{
		string = string.subString(0, string.length-1);
		return MoveStyle.good;
	}
	else
	{
		return MoveStyle.none;
	}
}

stripMoveNumber()
{
	let len = this.word_.length;
	let pos = -1;
	for (let i = 0; i < len; i++)
	{
		if (this.word_[i] == '.')
		{
			pos = i;
		}
	}
	if (pos != -1)
	{
		this.word_ = this.word_.substr(pos + 1 , len);
	}
	return this.word_.length != 0;
}

setWord()
{
	this.word_ = "";
	let temp = '';
	let index = 0;
	let len = 0;
	while (true)
	{
		let ch = 0;
		if (this.lineIndex_ < this.lineLength_)
		{
			ch = this.line_[this.lineIndex_];
		}
		else
		{
			ch = 0;
		}
		if (!ch)
		{
			if (len)
			{
				break;
			}
			if (!this.readLine())
			{
				return false;
			}
			continue;
		}
		if (ch == ';')
		{
			if (!this.readLine())
			{
				return false;
			}
			continue;
		}
		if (ch == '(')
		{
			if (len)
			{
				break;
			}
			else
			{
				this.lineIndex_++;
				this.word_ = BEGINVARIANT;
				return true;
			}
		}
		if (ch == ')')
		{
			if (len)
			{
				break;
			}
			else
			{
				this.lineIndex_++;
				this.word_ = ENDVARIANT;
				return true;
			}
		}
		if (ch == '{')
		{
			if (len)
			{
				break;
			}
			else
			{
				this.lineIndex_++;
				this.word_ = BEGINTEXT;
				return true;
			}
		}
		if (ch == ' ' || ch == '\r' || ch == '\n')
		{
			if (len)
			{
				this.lineIndex_++;
				break;
			}
			else
			{
				this.lineIndex_++;
				continue;
			}
		}
		temp += ch;
		index++;
		len++;
		this.lineIndex_++;
	}
	if (index)
	{
		this.word_ += temp;
	}
	return this.word_.length != 0;
}

getText()
{
	let string = '';
	let temp = '';
	let index = 0;
	let leftBrace = 0;
	while (true)
	{
		let ch = 0;
		if (this.lineIndex_ < this.lineLength_)
		{
			ch = this.line_[this.lineIndex_];
		}
		else
		{
			ch = 0;
		}
		if (!ch)
		{
			if (!this.readLine())
			{
				break;
			}
			if (index > 0)
			{
				temp += ' '; //[index++] = ' ';
				index++;
			}
			continue;
		}
		if (ch == '{')
		{
			leftBrace++;
		}
		if (ch == '}')
		{
			if (leftBrace)
			{
				leftBrace--;
			}
			else
			{
				this.lineIndex_++;
				break;
			}
		}
		temp += ch;
		index++;
		this.lineIndex_++;
	}
	if (index)
	{
		string += temp;
	}
	return string.trim();
}

setElement()
{
	this.element_ = "";

	let lastBracket = 0;
	let len = this.line_.length;
	for (let i = len - 1; i >= 0; i--)
	{
		if (this.line_[i] == ']')
		{
			lastBracket = i;
			break;
		}
	}
	let index = 0;
	let found = false;
	let temp = '';
	while (true)
	{
		let ch = 0;
		if (this.lineIndex_ < this.lineLength_)
		{
			ch = this.line_[this.lineIndex_];
		}
		else
		{
			ch = 0;
		}
		if (!ch)
		{
			if (!this.readLine())
			{
				break;
			}
			continue;
		}
		if (ch == '\"')
		{
			found = true;
			this.lineIndex_++;
			continue;
		}
		if (ch == ']')
		{
			if (this.lineIndex_ == lastBracket)
			{
				this.lineIndex_++;
				break;
			}
		}
		if (found)
		{
			temp += ch;
			index++;
		}
		this.lineIndex_++;
	}
	if (index)
	{
		this.element_ += temp;
	}
}

isHeader()
{
	if (this.word_.length == 0)
	{
		return false;
	}
	if (this.word_[0] != '[')
	{
		return false;
	}
	// must end with close bracket ']'
	let index = this.lineIndex_;
	let closeBracket = false;
	while (index < this.lineLength_)
	{
		let ch = this.line_[index++];
		if (ch == '\"' && this.line_[index] == ']')
		{
			index++;
			closeBracket = true;
			continue;
		}
		if (ch == '\r' || ch == '\n')
		{
			break;
		}
		if (closeBracket)
		{
			closeBracket = false;
			break;
		}
	}
	return closeBracket;
}

parseHeader()
{
	// white
	if (this.isCurHeader(pdnWhitePlayer))
	{
		this.setElement();
		this.portableHeader_.whitePlayer = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTeamName))
	{
		this.setElement();
		this.portableHeader_.whiteTeamName = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTeamNumber))
	{
		this.setElement();
		this.portableHeader_.whiteTeamNumber = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTeamYear))
	{
		this.setElement();
		this.portableHeader_.whiteTeamYear = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTeamSeason))
	{
		this.setElement();
		this.portableHeader_.whiteTeamSeason = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTeamCountry))
	{
		this.setElement();
		this.portableHeader_.whiteTeamCountry = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteElo) || this.isCurHeader(pdnWhiteRating))
	{
		this.setElement();
		this.portableHeader_.whiteRating = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTime))
	{
		this.setElement();
		this.portableHeader_.whiteTime = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteTitle))
	{
		this.setElement();
		this.portableHeader_.whiteTitle = this.element_;
		return;
	}
	if (this.isCurHeader(pdnWhiteCountry))
	{
		this.setElement();
		this.portableHeader_.whiteCountry = this.element_;
		return;
	}

	// black
	if (this.isCurHeader(pdnBlackPlayer))
	{
		this.setElement();
		this.portableHeader_.blackPlayer = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTeamName))
	{
		this.setElement();
		this.portableHeader_.blackTeamName = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTeamNumber))
	{
		this.setElement();
		this.portableHeader_.blackTeamNumber = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTeamYear))
	{
		this.setElement();
		this.portableHeader_.blackTeamYear = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTeamSeason))
	{
		this.setElement();
		this.portableHeader_.blackTeamSeason = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTeamCountry))
	{
		this.setElement();
		this.portableHeader_.blackTeamCountry = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackElo) || this.isCurHeader(pdnBlackRating))
	{
		this.setElement();
		this.portableHeader_.blackRating = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTime))
	{
		this.setElement();
		this.portableHeader_.blackTime = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackTitle))
	{
		this.setElement();
		this.portableHeader_.blackTitle = this.element_;
		return;
	}
	if (this.isCurHeader(pdnBlackCountry))
	{
		this.setElement();
		this.portableHeader_.blackCountry = this.element_;
		return;
	}

	// tournament
	if (this.isCurHeader(pdnTournamentTitle))
	{
		this.setElement();
		this.portableHeader_.tournamentTitle = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentPlace))
	{
		this.setElement();
		this.portableHeader_.tournamentPlace = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentDate))
	{
		this.setElement();
		this.portableHeader_.tournamentStartDate = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentEndDate))
	{
		this.setElement();
		this.portableHeader_.tournamentEndDate = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentSpeed))
	{
		this.setElement();
		this.portableHeader_.tournamentSpeed = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentCategory))
	{
		this.setElement();
		this.portableHeader_.tournamentCategory = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentCountry))
	{
		this.setElement();
		this.portableHeader_.tournamentCountry = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentType))
	{
		this.setElement();
		this.portableHeader_.tournamentType = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentRounds))
	{
		this.setElement();
		this.portableHeader_.tournamentRounds = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentTeams))
	{
		this.setElement();
		this.portableHeader_.tournamentTeams = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentComplete))
	{
		this.setElement();
		this.portableHeader_.tournamentComplete = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentThreePoints))
	{
		this.setElement();
		this.portableHeader_.tournamentThreePoints = this.element_;
		return;
	}
	if (this.isCurHeader(pdnTournamentBoardPoints))
	{
		this.setElement();
		this.portableHeader_.tournamentBoardPoints = this.element_;
		return;
	}

	// annotator
	if (this.isCurHeader(pdnAnnotator))
	{
		this.setElement();
		this.portableHeader_.annotator = this.element_;
		return;
	}

	// source
	if (this.isCurHeader(pdnSourceTitle))
	{
		this.setElement();
		this.portableHeader_.sourceTitle = this.element_;
		return;
	}
	if (this.isCurHeader(pdnPublication))
	{
		this.setElement();
		this.portableHeader_.sourceTitle = this.element_;
		return;
	}
	if (this.isCurHeader(pdnSourcePublisher))
	{
		this.setElement();
		this.portableHeader_.sourcePublisher = this.element_;
		return;
	}
	if (this.isCurHeader(pdnSourceDate))
	{
		this.setElement();
		this.portableHeader_.sourcePublicationDate = this.element_;
		return;
	}
	if (this.isCurHeader(pdnPublicationDate))
	{
		this.setElement();
		this.portableHeader_.sourcePublicationDate = this.element_;
		return;
	}
	if (this.isCurHeader(pdnSourceVersionNumber))
	{
		this.setElement();
		this.portableHeader_.sourceVersionNumber = this.element_;
		return;
	}
	if (this.isCurHeader(pdnSourceVersionDate))
	{
		this.setElement();
		this.portableHeader_.sourceVersionDate = this.element_;
		return;
	}
	if (this.isCurHeader(pdnSourceQuality))
	{
		this.setElement();
		this.portableHeader_.sourceQuality = this.element_;
		return;
	}

	// title
	if (this.isCurHeader(pdnTitle))
	{
		this.setElement();
		this.portableHeader_.title = this.element_;
		return;
	}

	// game
	if (this.isCurHeader(pdnDate))
	{
		this.setElement();
		this.portableHeader_.date = this.element_;
		return;
	}
	if (this.isCurHeader(pdnResult))
	{
		this.setElement();
		this.portableHeader_.result = this.element_;
		return;
	}
	if (this.isCurHeader(pdnEco))
	{
		this.setElement();
		this.portableHeader_.eco = this.element_;
		return;
	}
	if (this.isCurHeader(pdnRound))
	{
		this.setElement();
		this.portableHeader_.round = this.element_;
		return;
	}

	// tags
	if (this.isCurHeader(pdnTags))
	{
		this.setElement();
		this.portableHeader_.tags = this.element_;
		return;
	}

	// setup
	if (this.isCurHeader(pdnSetup))
	{
		this.setElement();
		return;
	}
	if (this.isCurHeader(pdnFen))
	{
		this.setElement();
		if (this.element_.length == 0 || this.element_ == "?")
		{
			return;
		}
		this.fen_ = true;
		this.posElement_ = this.element_;
		return;
	}
	if (this.isCurHeader(pdnPlyCount))
	{
		this.setElement();
		this.plys_ = StrToIntDef(this.element_, 0);
		return;
	}
  // guid
 	if (this.isCurHeader(pdnGUID))
	{
		this.setElement();
		this.portableHeader_.guid = this.element_;
		return;
	}

}

parseArrows(text)
{
	let arrows = new BoardArrowList();
	let string = text.substr(6, text.length - 6);
	let strings = string.split(",");
	for (const s of strings)
	{
		if (s.length < 5)
		{
			continue;
		}
		let from = alphaNumericStringToSquare(s.substr(1, 2));
		let to = alphaNumericStringToSquare(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let arrow = createBoardArrow(from, to, BoardArrowType.attack);
			arrows.add(arrow);
		}
		else if (s[0] == 'G')
		{
			let arrow = createBoardArrow(from, to, BoardArrowType.defence);
			arrows.add(arrow);
		}
		else if (s[0] == 'Y')
		{
			let arrow = createBoardArrow(from, to, BoardArrowType.plan);
			arrows.add(arrow);
		}
	}
	return arrows;
}

parseMarks(text)
{
	let marks = new BoardMarkList();
	let string = text.substr(6, text.length - 6);
	let strings = string.split(",");
	for (const s of strings)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let square = alphaNumericStringToSquare(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let mark = createBoardMark(square, BoardMarkType.weak);
			marks.add(mark);
		}
		else if (s[0] == 'G')
		{
      let mark = createBoardMark(square, BoardMarkType.strong);
			marks.add(mark);
		}
		else if (s[0] == 'Y')
		{
      let mark = createBoardMark(square, BoardMarkType.pattern);
			marks.add(mark);
		}
	}
	return marks;
}

parseMedals(text)
{
	let string = text.substr(6, text.length - 6);
	let pos = string.indexOf("]");
	if (pos != -1)
	{
		let medals = new MoveMedals();
		let value = StrToIntDef(string.substr(0, pos), 0);
		medals.setUlong(value);
		return medals;
	}
	else
	{
		return new MoveMedals();
	}
}

// TO DO
parseSpecial(text, specialArgs)
{
	if (
		text.startsWith("[%cal") ||
    text.startsWith("[%csb") ||
		text.startsWith("[%csl") ||
		text.startsWith("[%mdl") ||
		text.startsWith("[%evp") ||
		text.startsWith("[%eval") ||
		text.startsWith("[%emt") ||
		text.startsWith("[%tqu") ||
		text.startsWith("[%tqu") ||
		text.startsWith("[%pws") ||
		text.startsWith("[%pth") ||
		text.startsWith("[%eog"))
	{
		let lastPos = 0;
		{
     	let startPos = text.indexOf("[%cal");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
     			let arrowText = text.substring(startPos, endPos + 1);
					specialArgs.arrowList = this.parseArrows(arrowText).copyFrom();
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
     	let startPos = text.indexOf("[%csb");
   		if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
          let markText = text.substring(startPos, endPos + 1);
					specialArgs.markList = this.parseMarks(markText).copyFrom();
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%csl");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
          let markText = text.substring(startPos, endPos + 1);
					specialArgs.markList = this.parseMarks(markText).copyFrom();
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%mdl");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
          let medalText = text.substring(startPos, endPos + 1);
					specialArgs.medals = this.parseMedals(medalText).copyFrom();
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%evp");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%eval");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%emt");
			if (startPos = -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%tqu");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%pws");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
          specialArgs.pawnStructure = true;
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%pth");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
          specialArgs.piecePath = true;
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
		{
      let startPos = text.indexOf("[%eog");
			if (startPos != -1)
			{
        let endPos = text.indexOf("]", startPos);
				if (endPos != -1)
				{
					specialArgs.endOfGame = true; // TO DO in Applet tonen
					if (endPos > lastPos) lastPos = endPos;
				}
			}
		}
    specialArgs.remainingText = text.substring(lastPos + 1);
	}
	else
	{
		specialArgs.remainingText = text;
	}
}

}

class PortableGame
{

constructor()
{
  this.plys = 0;
	this.header = new PortableHeader();
	this.moves = new MoveTree();
}

copyFrom()
{
	let copyPortableGame = new PortableGame();
  copyPortableGame.plys = this.plys;
	copyPortableGame.header = this.header.copyFrom();
	copyPortableGame.moves = this.moves.copyFrom();
	return copyPortableGame;
}

}

class PortableHeader
{

constructor()
{
	this.whitePlayer = '';
	this.whiteTeamName = '';
	this.whiteTeamNumber = '';
	this.whiteTeamYear = '';
	this.whiteTeamSeason = '';
	this.whiteTeamCountry = '';
	this.whiteRating = '';
	this.whiteTime = '';
	this.whiteTitle = '';
  this.whiteCountry = '';
	this.blackPlayer = '';
	this.blackTeamName = '';
	this.blackTeamNumber = '';
	this.blackTeamYear = '';
	this.blackTeamSeason = '';
	this.blackTeamCountry = '';
	this.blackRating = '';
	this.blackTime = '';
	this.blackTitle = '';
  this.blackCountry = '';
	this.tournamentTitle = '';
	this.tournamentPlace = '';
	this.tournamentStartDate = '';
	this.tournamentEndDate = '';
	this.tournamentSpeed = '';
	this.tournamentCategory = '';
	this.tournamentCountry = '';
	this.tournamentType = '';
	this.tournamentRounds = '';
	this.tournamentTeams = '';
	this.tournamentComplete = '';
	this.tournamentThreePoints = '';
	this.tournamentBoardPoints = '';
	this.annotator = '';
	this.sourceTitle = '';
	this.sourcePublisher = '';
	this.sourcePublicationDate = '';
	this.sourceVersionNumber = '';
	this.sourceVersionDate = '';
	this.sourceQuality = '';
	this.title = '';
	this.date = '';
	this.result = '';
	this.eco = '';
	this.round = '';
	this.tags = '';
  this.guid = '';
}

copyFrom()
{
	let copyPortableHeader = new PortableHeader();

	copyPortableHeader.whitePlayer = this.whitePlayer;
	copyPortableHeader.whiteTeamName = this.whiteTeamName;
	copyPortableHeader.whiteTeamNumber = this.whiteTeamNumber;
	copyPortableHeader.whiteTeamYear = this.whiteTeamYear;
	copyPortableHeader.whiteTeamSeason = this.whiteTeamSeason;
	copyPortableHeader.whiteTeamCountry = this.whiteTeamCountry;
	copyPortableHeader.whiteRating = this.whiteRating;
	copyPortableHeader.whiteTime = this.whiteTime;
	copyPortableHeader.whiteTitle = this.whiteTitle;
	copyPortableHeader.whiteCountry = this.whiteCountry;

	copyPortableHeader.blackPlayer = this.blackPlayer;
	copyPortableHeader.blackTeamName = this.blackTeamName;
	copyPortableHeader.blackTeamNumber = this.blackTeamNumber;
	copyPortableHeader.blackTeamYear = this.blackTeamYear;
	copyPortableHeader.blackTeamSeason = this.blackTeamSeason;
	copyPortableHeader.blackTeamCountry = this.blackTeamCountry;
	copyPortableHeader.blackRating = this.blackRating;
	copyPortableHeader.blackTime = this.blackTime;
	copyPortableHeader.blackTitle = this.blackTitle;
	copyPortableHeader.blackCountry = this.blackCountry;

	copyPortableHeader.tournamentTitle = this.tournamentTitle;
	copyPortableHeader.tournamentPlace = this.tournamentPlace;
	copyPortableHeader.tournamentStartDate = this.tournamentStartDate;
	copyPortableHeader.tournamentEndDate = this.tournamentEndDate;
	copyPortableHeader.tournamentSpeed = this.tournamentSpeed;
	copyPortableHeader.tournamentCategory = this.tournamentCategory;
	copyPortableHeader.tournamentCountry = this.tournamentCountry;
	copyPortableHeader.tournamentType = this.tournamentType;
	copyPortableHeader.tournamentRounds = this.tournamentRounds;
	copyPortableHeader.tournamentTeams = this.tournamentTeams;
	copyPortableHeader.tournamentComplete = this.tournamentComplete;
	copyPortableHeader.tournamentThreePoints = this.tournamentThreePoints;
	copyPortableHeader.tournamentBoardPoints = this.tournamentBoardPoints;

	copyPortableHeader.annotator = this.annotator;

	copyPortableHeader.sourceTitle = this.sourceTitle;
	copyPortableHeader.sourcePublisher = this.sourcePublisher;
	copyPortableHeader.sourcePublicationDate = this.sourcePublicationDate;
	copyPortableHeader.sourceVersionNumber = this.sourceVersionNumber;
	copyPortableHeader.sourceVersionDate = this.sourceVersionDate;
	copyPortableHeader.sourceQuality = this.sourceQuality;

	copyPortableHeader.title = this.title;

	copyPortableHeader.date = this.date;
	copyPortableHeader.result = this.result;
	copyPortableHeader.eco = this.eco;
	copyPortableHeader.round = this.round;

	copyPortableHeader.tags = this.tags;
 	copyPortableHeader.guid = this.guid;

	return copyPortableHeader;
}

}


const countries =
[
		[ Country.none, 				  									"",											            "", 																	"",   ""    ],
		[ Country.afghanistan, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ Country.alandIslands, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ Country.albania,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ Country.algeria,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ Country.americanSamoa,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ Country.andorra,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ Country.angola,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ Country.anguilla,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ Country.antarctica,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ Country.antiguaBarbuda,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ Country.argentina,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ Country.armenia,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ Country.aruba,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ Country.australia,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ Country.austria,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ Country.azerbaijan,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ Country.bahamas,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ Country.bahrain,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ Country.bangladesh,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ Country.barbados,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ Country.basqueCountry,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], // 4-2-2017 CB: Basque
		[ Country.belarus,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ Country.belgium,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ Country.belize,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ Country.benin,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ Country.bermuda,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ Country.bhutan,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ Country.bolivia,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ Country.bosniaHerzegovina,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], // CB: Bosnia Herzegovina
		[ Country.botswana,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ Country.bouvetIsland,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ Country.brazil,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ Country.britishIndianOceanTerritory,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ Country.bruneiDarussalam, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], // CB: Brunei
		[ Country.bulgaria,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ Country.burkinaFaso, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ Country.burundi,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ Country.cambodia,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ Country.cameroon,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ Country.canada,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ Country.capeVerde,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], // CB: Kap Verde
		[ Country.catalonia,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], // 4-2-2017
		[ Country.caymanIslands,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ Country.centralAfricanRepublic,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ Country.chad,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ Country.chile,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ Country.china,  												 	"China",														"China",															"cn", "CHN" ],
		[ Country.christmasIsland,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ Country.cocosKeelingIslands,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], // CB: Cocos Islands
		[ Country.colombia,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ Country.comoros,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ Country.congo,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ Country.congoDemocraticRepublic,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ Country.cookIslands,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ Country.costaRica,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ Country.croatia,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ Country.cuba,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ Country.curacao,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ Country.cyprus,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ Country.czechia,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ Country.coteIvoire,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ Country.denmark,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ Country.djibouti,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ Country.dominica,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ Country.dominicanRepublic,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ Country.ecuador,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ Country.egypt,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ Country.elSalvador,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ Country.england,  												"England",													"England",														"x3", "GBR" ],
		[ Country.equatorialGuinea,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], // CB: Aequatorial Guinea (spelfout)
		[ Country.eritrea,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ Country.estonia,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ Country.ethiopia,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ Country.falklandIslands,  								"FalklandIslands",									"England",														"fk", "FLK" ], // CB: Falkland Islands
		[ Country.faroeIslands,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ Country.fiji,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ Country.finland,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ Country.france,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ Country.frenchGuiana,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], // CB: French Guyana
		[ Country.frenchPolynesia,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], // CB: French Polynesien
		[ Country.frenchSouthernTerritories,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ Country.gabon,  													"Gabon",														"Gabon",															"ga", "GAB" ], // CB: Gabun
		[ Country.gambia,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ Country.georgia,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ Country.germany,  												"Germany",													"Germany",														"de", "DEU" ],
		[ Country.ghana, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ Country.gibraltar,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ Country.greece,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ Country.greenland,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ Country.grenada,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ Country.guadeloupe,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ Country.guam,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ Country.guatemala,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ Country.guernsey,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], // CB: Channel Islands
		[ Country.guinea,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ Country.guineaBissau,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ Country.guyana,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ Country.haiti,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ Country.heardIslandMcDonaldIslands, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ Country.vatican,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ Country.honduras,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ Country.hongKong,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ Country.hungary,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ Country.iceland,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ Country.india,  												 	"India",														"India",															"in", "IND" ],
		[ Country.indonesia,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ Country.iran,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ Country.iraq,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ Country.ireland,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ Country.isleOfMan,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ Country.israel,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ Country.italy,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ Country.jamaica,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ Country.janMayen,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], // Svalbard apart
		[ Country.japan,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ Country.jersey,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ Country.jordan,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ Country.kazakhstan,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ Country.kenya,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ Country.kiribati,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ Country.koreaNorth,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], // CB: North Korea, met vlag noord korea
		[ Country.koreaSouth,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], // CB: Korea, met vlag zuid korea
		[ Country.kosovo,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ Country.kuwait,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ Country.kyrgyzstan,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ Country.laos,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ Country.latvia, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ Country.lebanon,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ Country.lesotho, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ Country.liberia,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ Country.libya,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ Country.liechtenstein,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ Country.lithuania,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ Country.luxembourg,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ Country.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ Country.northMacedonia,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ Country.madagascar,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ Country.malawi,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ Country.malaysia,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ Country.maldives,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ Country.mali, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ Country.malta,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ Country.marshallIslands,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ Country.martinique,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ Country.mauritania,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ Country.mauritius,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ Country.mayotte,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ Country.mexico,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ Country.micronesia,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ Country.moldova,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ Country.monaco,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ Country.mongolia,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ Country.montenegro,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ Country.montserrat,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ Country.morocco,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ Country.mozambique,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ Country.myanmar, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ Country.namibia,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ Country.nauru,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ Country.nepal,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ Country.netherlands,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ Country.netherlandsAntilles, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ Country.newCaledonia,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ Country.newZealand,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ Country.nicaragua,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ Country.niger,  													"Niger",														"Niger",															"ne", "NER" ],
		[ Country.nigeria,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ Country.niue,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ Country.norfolkIsland,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ Country.northernIreland,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], // CB: Nothern Ireland (spelfout)
		[ Country.northernMarianaIslands,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ Country.norway,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ Country.oman,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ Country.pakistan,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ Country.palau,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ Country.palestine,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ Country.panama,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ Country.papuaNewGuinea,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ Country.paraguay,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ Country.peru,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ Country.philippines,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ Country.pitcairn,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ Country.poland,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ Country.portugal,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ Country.puertoRico,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ Country.qatar,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ Country.reunion,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ Country.romania,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ Country.russia,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ Country.rwanda,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ Country.saintBarthelemy,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ Country.saintHelena,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], // CB: St. Helena
		[ Country.saintKittsNevis,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], // CB: Skitts
		[ Country.saintLucia, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], // CB: Santa Lucis
		[ Country.saintMartinFrenchPart,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ Country.saintPierreMiquelon,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], // CB: St. Pierre and Miquelon
		[ Country.saintVincentGrenadines,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], // CB: San Vincent
		[ Country.samoa,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ Country.sanMarino,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ Country.saoTomePrincipe,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ Country.saudiArabia,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ Country.scotland,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ Country.senegal,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ Country.serbia,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ Country.seychelles,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ Country.sierraLeone,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ Country.singapore,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ Country.sintMaartenDutchPart,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ Country.slovakia,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ Country.slovenia,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ Country.solomonIslands,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ Country.somalia,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ Country.southAfrica,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ Country.southGeorgiaSouthSandwichIslands, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ Country.southSudan,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ Country.sovietUnion,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ Country.spain, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ Country.sriLanka,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ Country.sudan,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ Country.suriname,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], // CB: Surinam
		[ Country.svalbard,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], // Jan Mayen apart
		[ Country.swaziland,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ Country.sweden,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ Country.switzerland,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ Country.syria,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ Country.taiwan,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ Country.tajikistan,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ Country.tanzania,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ Country.thailand, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ Country.timorLeste,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], // East Timor
		[ Country.togo, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ Country.tokelau,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], // CB: Tokelau Islands
		[ Country.tonga,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ Country.trinidadTobago,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ Country.tunisia,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ Country.turkey,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ Country.turkmenistan,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ Country.turksCaicosIslands,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ Country.tuvalu,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ Country.uganda,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ Country.ukraine,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ Country.unitedArabEmirates,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ Country.unitedKingdom,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], // CB: Great Britain
		[ Country.unitedStates,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ Country.unitedStatesMinorOutlyingIslands, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ Country.uruguay,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ Country.uzbekistan,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ Country.vanuatu,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ Country.venezuela,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ Country.vietnam,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ Country.virginIslandsBritish,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ Country.virginIslandsUS,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ Country.wales,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ Country.wallisFutuna,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ Country.westernSahara,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ Country.yemen,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ Country.zaire,  											 		"Zaire",														"",																		"zr", "ZRN" ], // zie Congo (Democratic Republic)
		[ Country.zambia,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ Country.zimbabwe,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function getFlagOfCountry(country)
{
	return countries[country][2];
}

function getIso3OfCountry(country)
{
	return countries[country][4];
}

function getCountryWithIso3(iso3)
{
	for (const country of countries)
	{
		if (country[4] == iso3)
		{
			return country[0];
		}
	}
	return Country.none;
}

function getCountryWithIso2(iso2)
{
	for (const country of countries)
	{
		if (country[3] == iso2)
		{
			return country[0];
		}
	}
	return Country.none;
}
class StreamWriter
{

constructor()
{
	this.text = '';
}

Write(string)
{
	this.text += string;
}

WriteLine(string)
{
	this.text += string + '\n';
}

WriteEmptyLine()
{
	this.text += '\n';
}

}




function StrToIntDef(str, defaultValue)
{
	let value = Number(str);
	if (isNaN(value))
	{
		return defaultValue;
	}
	else
	{
		return value;
	}
}
