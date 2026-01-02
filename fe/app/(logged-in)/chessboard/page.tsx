
'use client';

import { Box, Typography, Paper, Avatar, List, ListItem, ListItemText } from '@mui/material';
import ChessBoardGrid from './components/ChessBoardGrid';
import { initialBoard } from './components/chessBoardData';
import CapturedMaterialSprite, { PieceCode } from './components/CapturedMaterialSprite';
import { History } from '@mui/icons-material';

// Dummy Data
const moves = [
  '1. e4 e5',
  '2. Nf3 Nc6',
  '3. Bb5 a6',
  '4. Ba4 Nf6',
  '5. O-O Be7',
  '6. Re1 b5',
  '7. Bb3 d6',
  '8. c3 O-O',
  '9. c3 O-O',
  '10. c3 O-O',
  '11. c3 O-O',
  '12. c3 O-O',
  '13. c3 O-O',
  '14. c3 O-O',
];

const blackCaptured = ['wp', 'wb', 'wq', 'wp', 'wp']; // pieces under /public
const whiteCaptured = ['bp', 'bb', 'bk', 'br', 'bq', 'bp'];

const whitePointsDiff = +5;
const blackPointsDiff = -5;

const players = {
  white: { name: 'Balebhai', avatar: 'https://i.pravatar.cc/40?img=1' },
  black: { name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2' },
};

export default function CurrentChessboardPosition() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'start',
        px: 4,
      }}
    >
      {/* Turn Indicator */}
      {/* ===== BLACK PLAYER PANEL ABOVE BOARD ===== */}
      <Box>
        <Box
          sx={{
            borderRadius: 2,

            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 1,
            mb: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={players.black.avatar} sx={{ width: 50, height: 50 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, ml: 2, }}>
              <Typography fontWeight="bold" color="#0ff" sx={{ mt: 1 }}>
                {players.black.name} (400)
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex' }}>

                  {Object.entries(
                    blackCaptured.reduce<Record<string, PieceCode[]>>((acc, p) => {
                      const t = p[1];
                      if (!acc[t]) acc[t] = [];
                      acc[t].push(p as PieceCode);
                      return acc;
                    }, {})
                  ).map(([_, pieces]) =>
                    pieces.map((piece, localIndex) => (
                      <CapturedMaterialSprite
                        key={`${piece}-${localIndex}`}
                        piece={piece}
                      />
                    ))
                  )}
                </Box>
                <Typography sx={{ color: '#aaa !important', mt: -0.25, ml: 0.4 }}>
                  {blackPointsDiff >= 0 ? `+${blackPointsDiff}` : `${blackPointsDiff}`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: 'rgb(28,28,28)', borderRadius: 2, px: 3, py: 0.5, gap: 1.5, display: 'flex', alignItems: 'center' }}>
            <History sx={{ fontSize: '30px' }} />
            <Typography sx={{ fontSize: '25px' }}>5:35</Typography>
          </Box>
        </Box>

        {/* ===== CHESSBOARD ===== */}
        <ChessBoardGrid board={initialBoard} />

        {/* ===== WHITE PLAYER PANEL BELOW BOARD ===== */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={players.white.avatar} sx={{ width: 50, height: 50 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, ml: 2, }}>
              <Typography fontWeight="bold" color="#0ff" sx={{ mt: 1 }}>
                {players.white.name} (400)
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex' }}>

                  {Object.entries(
                    whiteCaptured.reduce<Record<string, PieceCode[]>>((acc, p) => {
                      const t = p[1];
                      if (!acc[t]) acc[t] = [];
                      acc[t].push(p as PieceCode);
                      return acc;
                    }, {})
                  ).map(([_, pieces]) =>
                    pieces.map((piece, localIndex) => (
                      <CapturedMaterialSprite
                        key={`${piece}-${localIndex}`}
                        piece={piece}
                      />
                    ))
                  )}
                </Box>
                <Typography sx={{ color: '#aaa !important', mt: -0.25, ml: 0.4 }}>
                  {whitePointsDiff >= 0 ? `+${whitePointsDiff}` : `${whitePointsDiff}`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: 'rgb(28,28,28)', borderRadius: 2, px: 3, py: 0.25, gap: 1.5, display: 'flex', alignItems: 'center', height: '45px', mt: 0.5 }}>
            <History sx={{ fontSize: '30px' }} />
            <Typography sx={{ fontSize: '25px' }}>5:35</Typography>
          </Box>
        </Box>
      </Box>

      {/* ===== MOVE HISTORY PANEL ===== */}
      <Paper
        sx={{
          p: 2,
          ml: 4,
          borderRadius: 3,
          background: 'rgb(32,32,32)',
          color: '#0ff',
          width: '90%',
          height: '92vh',
          maxWidth: 450,
          mt: 3,
          overflowY: 'auto',
          scrollbarColor: '#888 #222'
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }} textAlign={'center'}>
          Move History
        </Typography>
        <List dense sx={{ overflow: 'hidden' }}>
          {moves.map((move, idx) => (
            <ListItem key={idx} sx={{ py: 1, px: 1, borderRadius: idx === 0 ? '5px 5px 0 0' : idx === moves.length - 1 ? '0 0 5px 5px' : '0px', background: `${idx % 2 === 0 ? 'rgb(25,25,25)' : 'transparent'}` }}>
              <ListItemText primary={`${move}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}


// utils/groupCapturedPieces.ts

const PIECE_ORDER = ['p', 'b', 'k', 'r', 'q'] as const;

export function groupCapturedPieces(pieces: PieceCode[]) {
  const map: Record<string, PieceCode[]> = {};

  for (const p of pieces) {
    const type = p[1];
    if (!map[type]) map[type] = [];
    map[type].push(p);
  }

  return PIECE_ORDER.flatMap((type) => map[type] ?? []);
}
