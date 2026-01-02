
import { ReactNode } from 'react';

interface IconToggleProps {
  label: string;
  active: boolean;
  onClick: () => void;
  iconOn: ReactNode;
  iconOff?: ReactNode;
}

export function IconToggle({
  label,
  active,
  onClick,
  iconOn,
  iconOff,
}: IconToggleProps) {
  return (
    <button
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 14px',
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.1)',
        background: 'rgb(25,25,25)',
      }}
    >
      <span>{label}</span>
      {active ? iconOn : iconOff}
    </button>
  );
}
