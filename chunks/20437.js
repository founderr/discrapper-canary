n.d(t, {
    Q: function () {
        return l;
    },
    S: function () {
        return i;
    }
});
var a = n(192379);
let l = a.createContext({
    videoPlayerRef: { current: null },
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
function i() {
    return a.useContext(l);
}
