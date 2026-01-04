import { useCallback, useRef } from 'react';

type SoundType = 'correct' | 'incorrect' | 'timeout';

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSound = useCallback((type: SoundType) => {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;

      switch (type) {
        case 'correct':
          // Pleasant ascending chime
          oscillator.frequency.setValueAtTime(523.25, now); // C5
          oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
          oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
          oscillator.type = 'sine';
          gainNode.gain.setValueAtTime(0.3, now);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
          oscillator.start(now);
          oscillator.stop(now + 0.4);
          break;

        case 'incorrect':
          // Low descending buzz
          oscillator.frequency.setValueAtTime(220, now); // A3
          oscillator.frequency.setValueAtTime(180, now + 0.15);
          oscillator.type = 'sawtooth';
          gainNode.gain.setValueAtTime(0.2, now);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
          oscillator.start(now);
          oscillator.stop(now + 0.3);
          break;

        case 'timeout':
          // Urgent alarm beeps
          oscillator.type = 'square';
          oscillator.frequency.setValueAtTime(800, now);
          gainNode.gain.setValueAtTime(0.15, now);
          gainNode.gain.setValueAtTime(0, now + 0.1);
          gainNode.gain.setValueAtTime(0.15, now + 0.15);
          gainNode.gain.setValueAtTime(0, now + 0.25);
          gainNode.gain.setValueAtTime(0.15, now + 0.3);
          gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
          oscillator.start(now);
          oscillator.stop(now + 0.5);
          break;
      }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [getAudioContext]);

  return { playSound };
};
