"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var a = n("470079"),
  u = n("974180"),
  i = n("557177");

function l() {
  let [e, t] = a.useState(), n = a.useRef(-1);
  return {
    playSound: a.useCallback(e => {
      t(e), i.playSound(u.MESSAGE_SOUND, u.MESSAGE_SOUND_VOLUME, () => {
        clearTimeout(n.current), n.current = setTimeout(() => {
          t(void 0)
        }, 500)
      }, e)
    }, []),
    isPlaying: null != e,
    soundpackPlaying: e
  }
}