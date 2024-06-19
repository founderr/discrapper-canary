a.d(t, {
  Q: function() {
    return l
  },
  S: function() {
    return r
  }
});
var n = a(470079);
let l = n.createContext({
  videoPlayerRef: {
    current: null
  },
  applicationAudioEnabled: !0,
  setApplicationAudioEnabled: () => {},
  voiceAudioEnabled: !0,
  setVoiceAudioEnabled: () => {},
  cropData: {
    start: 0,
    end: 0
  },
  setCropData: () => {}
});

function r() {
  return n.useContext(l)
}