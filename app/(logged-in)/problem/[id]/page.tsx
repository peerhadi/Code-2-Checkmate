'use client';
import Editor from '@monaco-editor/react';

import * as React from 'react';
import {
  Select,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
  Divider,
  Chip,
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CheckBox, CheckBoxOutlined, ChevronRight, Code, CodeOff, Description, History, Lightbulb, LightbulbOutlined, LocalOfferOutlined, MenuBook, OpenInFull, Science, Tag } from '@mui/icons-material';
import { twoSumProblem } from '@/app/lib/problems/twoSum';
import { taskDistribution } from '@/app/profile/data/profileData';
import InfoAccordion from '../InfoAccordian';

const cases = ['Case 1', 'Case 2', 'Case 3'];
export default function Problem() {

  const [active, setActive] = React.useState(0);
  const [value, setValue] = React.useState("Rust");
  const selectRef = React.useRef(null);

  const handleSelect = (lang) => {
    setValue(lang);
    // close menu (same behavior as native Select)
    selectRef.current?.blur();
  };
  return (
    <Box sx={{
      width: '100%', height: '100vh', background: 'rgb(30,30,30)',
      p: 1,
      display: 'flex',
      gap: 1
    }}>
      <Box sx={{ width: '40vw', height: '97.5vh', paddingBottom: 1, borderRadius: 2, background: 'rgb(30,30,30)', overflowY: 'auto', overflowX: 'hidden', scrollbarColor: '#888 #222', }}>

        <Box
          sx={{
            width: '40vw',
            background: '#3a3a3a',
            height: '45px',
            px: 2,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: '#cfcfcf',
            cursor: 'pointer',

          }}
        >
          {/* Active Tab */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontWeight: 500,
              p: 0.75,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '8px',
              }
            }}
          >
            <Description fontSize="small" sx={{ fill: 'dodgerblue' }} />
            <span>Description</span>
          </Box>
        </Box>
        <Box sx={{ p: 2, mt: 1 }}>
          <Typography variant='h5' fontWeight={'bold'}>
            {twoSumProblem.number}. {twoSumProblem.title}
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', gap: 0.5 }}>
            <Chip size='small' label={twoSumProblem.difficulty} sx={{ color: taskDistribution.find(x => x.name === twoSumProblem.difficulty)?.color + ' !important' }}></Chip>
            <Chip size='small' label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><LocalOfferOutlined sx={{ fontSize: '14px' }} /><Typography sx={{ fontSize: '12px' }}>Topics</Typography></Box>}></Chip>
            <Chip size='small' label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}><LightbulbOutlined sx={{ fontSize: '14px' }} /><Typography sx={{ fontSize: '12px' }}>Hints</Typography></Box>}></Chip>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography
              style={{
                fontSize: '15px',
                fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
              }}>
              {twoSumProblem.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>
          </Box>
          <Box>
            {twoSumProblem.examples.map((example, i) => (
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }} key={i}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Example {i + 1}</Typography>
                <Box sx={{ mt: 3, pl: 2, borderLeft: '2px solid rgb(80,80,80)' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography sx={{
                      fontWeight: '600', fontFamily: 'Menlo, sans-serif',
                      fontSize: '15px'
                    }}>Input: </Typography>
                    <Typography sx={{
                      color: 'rgb(190,190,190) !important',
                      fontSize: '15px'
                    }}>
                      {example.input}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography sx={{
                      fontWeight: '600', fontFamily: 'Menlo, sans-serif',
                      fontSize: '15px'

                    }}>Output: </Typography>
                    <Typography sx={{
                      color: 'rgb(190,190,190) !important',
                      fontSize: '15px'
                    }}>
                      {example.output}
                    </Typography>

                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography sx={{
                      fontWeight: '600', fontFamily: 'Menlo, sans-serif',
                      fontSize: '15px'

                    }}>Explanation: </Typography>
                    <Typography sx={{
                      color: 'rgb(190,190,190) !important',
                      fontSize: '15px'
                    }}>
                      {example.explanation}
                    </Typography>

                  </Box>
                </Box>              </Box>
            ))}
          </Box>
        
        </Box>
        <InfoAccordion/>
      </Box>
      <Box sx={{ height: '97.5vh', background: 'rgb(30,30,30)', borderRadius: 2, mb: 3, overflowY: 'auto', overflowX: 'hidden', scrollbarColor: '#888 #222', }}>
        <Box sx={{ width: '100%', background: 'rgb(51,51,51)', height: '45px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            display: 'flex', alignItems: 'center', gap: 0.5, p: 0.75,
            width: 'fit-content',
            ml: 1,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '8px',
            }
          }}>
            <Code fontSize='small' sx={{ fill: 'lime' }} />
            Code
          </Box>
        </Box>

        <Select
          ref={selectRef}
          value={value ?? ""}
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>{value}</Typography>
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#2f2f2f",
                borderRadius: "10px",
                padding: 1,
              },
            },
          }}
          sx={{
            width: 'fit-content',
            height: 35,
            background: "rgb(30,30,30)",
            color: "#e5e5e5",
            borderRadius: "0px",
            padding: 0,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
            },
            "& .MuiTypography-root": {
              color: "#aaa !important",
              fontSize: 14,
            },
            "& svg": { fill: "#aaa", fontSize: 23 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
              padding: 1,
              color: "#e5e5e5",
            }}
          >
            {/* Column 1 */}
            <Box>
              {["C++", "Java", "Python3", "Python", "JavaScript", "TypeScript", "C#", "C"].map(
                (lang) => (
                  <MenuItem
                    key={lang}
                    value={lang}
                    onClick={() => handleSelect(lang)}
                  >
                    {lang}
                  </MenuItem>
                )
              )}
            </Box>

            {/* Column 2 */}
            <Box>
              <MenuItem value="Go" onClick={() => handleSelect("Go")}>
                Go
              </MenuItem>

              <MenuItem value="Kotlin" onClick={() => handleSelect("Kotlin")}>
                Kotlin
              </MenuItem>

              <MenuItem
                value="Swift"
                onClick={() => handleSelect("Swift")}
              >
                Swift
              </MenuItem>

              <MenuItem value="Rust" onClick={() => handleSelect("Rust")}>
                <Check sx={{ color: "#fff", fontSize: 18, mr: 1 }} />
                Rust
              </MenuItem>

              {["Ruby", "PHP", "Dart", "Scala"].map((lang) => (
                <MenuItem
                  key={lang}
                  value={lang}
                  onClick={() => handleSelect(lang)}
                >
                  {lang}
                </MenuItem>
              ))}
            </Box>

            {/* Column 3 */}
            <Box>
              {["Elixir", "Erlang", "Racket"].map((lang) => (
                <MenuItem
                  key={lang}
                  value={lang}
                  onClick={() => handleSelect(lang)}
                >
                  {lang}
                </MenuItem>
              ))}
            </Box>
          </Box>
        </Select>
        <Divider />
        <Editor width='42vw' height="40vh" language='javascript' defaultLanguage="javascript" defaultValue="// some comment" theme='vs-dark' options={{
          fontSize: 14,
        }} />
        <Box sx={{ width: '42vw', height: '40vh', background: 'rgb(30,30,30)', borderRadius: 2, overflowY: 'auto', overflowX: 'hidden' }}>
          <Box sx={{ width: '40vw', background: 'rgb(51,51,51)', p: 1, display: 'flex', gap: 1, height: '50px' }}>
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: 0.5, py: 2.25,
              px: 0.5,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '8px',
                    }
            }}>
              <CheckBoxOutlined fontSize='small' sx={{ fill: 'lime' }} />
              Testcases
            </Box>
            <Box sx={{ width: '1px', height: '15px', background: 'rgb(80,80,80)', mt: 1.25 }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: 0.5, py: 2.25,
              px: 0.5,
              color: '#aaa !important',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '8px',
              }
            }}>
              <Code fontSize='small' sx={{ fill: 'lime', opacity: 0.8 }} />
              Test Results
            </Box>

          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                borderRadius: 4,
                width: 'fit-content',
                p: 2,
              }}
            >
              {cases.map((label, index) => (
                <Button
                  key={label}
                  onClick={() => setActive(index)}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    height: 35,
                    color: active === index ? '#fff' : '#aaa',
                    backgroundColor: active === index ? '#3a3a3a' : 'transparent',
                    '&:hover': {
                      backgroundColor:
                        active === index ? '#3a3a3a' : 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}

              <Button
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: '50%',
                  color: '#aaa',
                  fontSize: 22,
                }}
              >
                +
              </Button>
            </Box>

          </Box>

          <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {twoSumProblem.params.map((param) => (
              <Box key={param} key={param} sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                <Typography sx={{ color: '#aaa !important', fontSize: '14px' }}>{param} =</Typography>
                <input style={{backgroundColor: 'rgb(81,81,81)', width: '95%', outline: 'none', padding: '10px', height: '38px',  borderRadius: 5}}/>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

  )
}
