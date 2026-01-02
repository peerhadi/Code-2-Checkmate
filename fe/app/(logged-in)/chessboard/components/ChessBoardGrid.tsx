
'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import { ChessPiece } from './chessBoardData';

type Props = {
  board: ChessPiece[][];
  squareSize?: number;
};

export default function ChessBoardGrid({
  board,
  squareSize = 72,
}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {board.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(8, ${squareSize}px)`,
          }}
        >
          {row.map((piece, colIndex) => {
            const isLightSquare =
              (rowIndex + colIndex) % 2 === 0;

            return (
              <Box
                key={rowIndex * 8 + colIndex}
                sx={{
                  width: squareSize,
                  height: squareSize,
                  backgroundColor: isLightSquare
                    ? 'rgb(234,235,208)'
                    : 'rgb(115,149,82)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {piece && (
                  <Image
                    src={`/${piece}.png`}
                    alt={piece}
                    width={squareSize}
                    height={squareSize}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
