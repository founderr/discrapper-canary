"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var i = s("470079"),
  n = s("974180"),
  a = s("557177");

function l() {
  let [e, t] = i.useState(!1), s = i.useRef(-1);
  return {
    playSound: i.useCallback(() => {
      t(!0), a.playSound(n.MESSAGE_SOUND, n.MESSAGE_SOUND_VOLUME, () => {
        clearTimeout(s.current), s.current = setTimeout(() => {
          t(!1)
        }, 500)
      })
    }, []),
    isPlaying: e
  }
}