"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("47120");
var s = n("470079"),
  a = n("974180"),
  r = n("557177");

function i() {
  let [e, t] = s.useState(!1), n = s.useRef(-1);
  return {
    playSound: s.useCallback(() => {
      t(!0), r.playSound(a.MESSAGE_SOUND, a.MESSAGE_SOUND_VOLUME, () => {
        clearTimeout(n.current), n.current = setTimeout(() => {
          t(!1)
        }, 500)
      })
    }, []),
    isPlaying: e
  }
}