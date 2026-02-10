type WindowAudioContext = {
  prototype: AudioContext;
  new (contextOptions?: AudioContextOptions): AudioContext;
};

function createAudioContext(): AudioContext {
  let cls = 'AudioContext' in window ? window.AudioContext : undefined;
  if (cls) {
    return new cls();
  }

  if ('webkitAudioContext' in window) {
    cls = (window as any).webkitAudioContext as WindowAudioContext;
    if (cls) {
      return new cls();
    }
  }
}

export const audioContext = createAudioContext();
