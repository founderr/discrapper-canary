"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120");
var a = s("470079"),
  n = s("974180"),
  r = s("557177");

function u() {
  let [e, t] = a.useState(!1), s = a.useRef(-1);
  return {
    playSound: a.useCallback(() => {
      t(!0), r.playSound(n.MESSAGE_SOUND, n.MESSAGE_SOUND_VOLUME, () => {
        clearTimeout(s.current), s.current = setTimeout(() => {
          t(!1)
        }, 500)
      })
    }, []),
    isPlaying: e
  }
}