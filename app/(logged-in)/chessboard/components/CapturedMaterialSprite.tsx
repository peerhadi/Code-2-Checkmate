
'use client';

import { Box } from '@mui/material';

/* =======================
   PIECE DIMENSIONS (REM)
   ======================= */

const PIECE_SIZE_REM: Record<
  'p' | 'b' | 'k' | 'r' | 'q',
  { w: number; h: number }
> = {
  p: { w: 1.3, h: 1.7 }, // pawn
  b: { w: 1.5, h: 1.8 }, // bishop
  k: { w: 1.6, h: 1.8 }, // KNIGHT
  r: { w: 1.5, h: 1.7 }, // rook
  q: { w: 1.7, h: 1.8 }, // queen
};
const PIECE_MARGIN: Record<
  'p' | 'b' | 'k' | 'r' | 'q',
  number
> = {
  p: 2, // pawn
  b: 0, // bishop
  k: 1, // KNIGHT
  r: 2, // rook
  q: 0, // queen
};
/* =======================
   BACKGROUND POSITIONS (REM)
   ======================= */

const BG_POS_REM: Record<
  | 'wp' | 'wb' | 'wk' | 'wr' | 'wq'
  | 'bp' | 'bb' | 'bk' | 'br' | 'bq',
  { x: number; y: number }
> = {
  // WHITE
  wb: { x: -24.7, y: -2.5 },
  wp: { x: -18.0, y: -17.6 },
  wq: { x: -32.5, y: 0 },
  wk: { x: -27.5, y: -2.4 }, // KNIGHT
  wr: { x: -30.1, y: -2.6 },

  // BLACK
  bb: { x: -6.7, y: -2.5 },
  bp: { x: 0.0, y: -17.6 },
  bq: { x: -14.5, y: 0 },
  bk: { x: -9.5, y: -2.55 }, // KNIGHT
  br: { x: -12.1, y: -2.6 },
};

/* =======================
   COMPONENT
   ======================= */

type PieceCode = keyof typeof BG_POS_REM;

export default function CapturedMaterialSprite({ piece }: { piece: PieceCode }) {
  console.log(piece)
  const type = piece[1] as 'p' | 'b' | 'k' | 'r' | 'q';
  const { w, h } = PIECE_SIZE_REM[type];
  const { x, y } = BG_POS_REM[piece];
  const mt = PIECE_MARGIN[type]

  const SCALE = 0.625;

  return (
    <Box
      sx={{
        width: `${w}rem`,
        height: `${h}rem`,
        marginTop: `${mt * SCALE}px`,
        marginRight: '-0.4rem',
        backgroundImage: 'url(/captured-pieces.png)',
        backgroundSize: '34.2rem 30.6rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `${x}rem ${y}rem`,

        transform: `scale(${SCALE})`,
        transformOrigin: 'top left',
      }}
    />
  );
}

