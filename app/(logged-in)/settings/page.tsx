
'use client';

import { useState } from 'react';
import { Moon, Sun, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ThemeCard } from './components/ThemeCard';
import { IconToggle } from './components/IconToggle';
import { Section } from './components/Section';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [sounds, setSounds] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [theme, setTheme] = useState('classic');

  const themes = [
    { id: 'classic', label: 'Classic' },
    { id: 'wood', label: 'Wood' },
    { id: 'modern', label: 'Modern' },
    { id: 'fantasy', label: 'Fantasy' },
  ];

  return (
    <div style={{ maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
        Settings
      </h1>

      <Section title="UI">
        <IconToggle
          label="Dark Mode"
          active={darkMode}
          onClick={() => setDarkMode(!darkMode)}
          iconOn={<Moon size={18} />}
          iconOff={<Sun size={18} />}
        />
      </Section>

      <Section title="Chess Theme">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {themes.map((t) => (
            <ThemeCard
              key={t.id}
              label={t.label}
              selected={theme === t.id}
              onClick={() => setTheme(t.id)}
            />
          ))}
        </div>
      </Section>

      <Section title="Audio & Animations">
        <IconToggle
          label="Sounds"
          active={sounds}
          onClick={() => setSounds(!sounds)}
          iconOn={<Volume2 size={18} />}
          iconOff={<VolumeX size={18} />}
        />
        <IconToggle
          label="Move Animations"
          active={animations}
          onClick={() => setAnimations(!animations)}
          iconOn={<Sparkles size={18} />}
        />
      </Section>

      <Section title="More">
        <div style={{ opacity: 0.5, fontSize: 14 }}>
          More settings coming soon…
        </div>
      </Section>
    </div>
  );
}
