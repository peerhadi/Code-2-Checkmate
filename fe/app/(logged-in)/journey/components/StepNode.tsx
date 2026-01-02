
'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Box, Button, Grow, SvgIcon } from "@mui/material";
import { Code, EmojiEvents } from "@mui/icons-material";
import AutoAwesome from "@mui/icons-material/AutoAwesome";

export type StepType = "active" | "inactive" | "completed" | "trophy";

export default function StepNode({
  type,
  offset,
}: {
  type: StepType;
  offset: number;
}) {
  const isActive = type === "active";
  const isInactive = type !== "active" && type !== "completed";

  const [openPopup, setOpenPopup] = useState(false);

  const nodeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!isActive || !nodeRef.current) return;

    const rect = nodeRef.current.getBoundingClientRect();
    setOpenPopup(!openPopup);
  };

  const gradient = "linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)";

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
      <Box
        sx={{
          position: "relative",
          transform: `translateX(${offset}px)`,
        }}
      >
        {/* Active ring */}
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "8px solid rgb(51,66,74)",
              zIndex: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}

        {/* Step Node */}
        <Box
          ref={nodeRef}
          onClick={handleClick}
          sx={{
            mt: 1.6,
            position: "relative",
            width: 68,
            height: 65,
            cursor: "pointer",
            "&:hover .top-face": !isInactive
              ? { transform: "scaleX(1.12) translateY(3px)" }
              : {},
            "&:active .top-face": {
              transform: "scaleX(1.12) translateY(8px)",
            },
          }}
        >
          {/* Shadow */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              filter: "blur(14px)",
              transform: "translateY(14px) scaleX(1.12)",
            }}
          />

          {/* Bottom base */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: isInactive
                ? "rgb(43,56,63)"
                : gradient,
              transform: "translateY(8px) scaleX(1.12)",
              opacity: '0.8'
            }}
          />

          {/* Top face */}
          <Box
            className="top-face"
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: isInactive
                ? "rgb(88,106,112)"
                : gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "scaleX(1.12)",
              transition: "transform 0.1s ease",
            }}
          >
            {type === "trophy" ? (
              <EmojiEvents sx={{ color: "white" }} fontSize="large" />
            ) : (
              <Code
                fontSize="large"
                sx={{ color: isInactive ? "rgb(70,88,94)" : "white" }}
              />
            )}
          </Box>

          {/* START bubble */}
          {isActive && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 2,
                top: -50,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 45,
                fontSize: "17px",
                backgroundColor: "rgb(18,31,37)",
                border: "2px solid rgb(54,70,79)",
                color: `${gradient} !important`,
                borderRadius: "12px",
                display: "flex",
                fontWeight: 800,
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 2,
                pointerEvents: "none",
                animation: "bounce 2s infinite ease-in-out",
                "@keyframes bounce": {
                  "0%, 100%": {
                    transform: "translateX(-50%) translateY(0)",
                  },
                  "50%": {
                    transform: "translateX(-50%) translateY(10px)",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: `10px solid rgb(54,70,79)`,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: -7,
                  left: "50%",
                  zIndex: 1,
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: `8px solid rgb(18,31,37)`,
                },
              }}
            >
              START
            </Box>
          )}
        </Box>
      </Box>

      <Grow in={openPopup}>
        {/* ===== PORTAL POPUP ===== */}
        <Box
          sx={{
            position: "absolute",
            top: 340,
            transform: "translateX(-50%)",
            width: 280,
            p: 2,
            borderRadius: "18px",
            background: gradient,
            color: "rgb(18,31,37)",
            zIndex: 10,
            animation: "popIn 0.25s ease-out",
          }}
        >
          <Box sx={{ fontWeight: 800, fontSize: 18, mb: 0.5 }}>
            Order in a café
          </Box>

          <Box sx={{ fontSize: 14, mb: 2 }}>
            Learn how to confidently order food and drinks in a café setting.
          </Box>





          <Button
            fullWidth
            startIcon={<AutoAwesome sx={{ fill: '#3bd6c6' }} />}
            sx={{
              backgroundColor: "white", // button stays white
              fontWeight: 700,
              borderRadius: "12px",
              display: "flex",
              position: "relative", // for the arrow
              color: '#3bd6c6 !important',
              textTransform: 'none'
            }}
            onClick={() => setOpenPopup(false)}
          >
            Generate
          </Button>
        </Box>
      </Grow>
    </Box>
  );
}


