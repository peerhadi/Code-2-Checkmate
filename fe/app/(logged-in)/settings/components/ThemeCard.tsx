
import { Check } from 'lucide-react';

interface ThemeCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function ThemeCard({ label, selected, onClick }: ThemeCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        all: 'unset',
        cursor: 'pointer',
        padding: 14,
        borderRadius: 12,
        border: selected
          ? '2px solid currentColor'
          : '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        background: 'rgb(25,25,25)',
        justifyContent: 'space-between',
      }}
    >
      <span>{label}</span>
      {selected && <Check size={16} />}
    </button>
  );
}
