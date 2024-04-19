"use strict";
a.r(t), a.d(t, {
  useSettingsLottie: function() {
    return r
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("709014");
let i = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  r = () => {
    let e = s.useRef(null),
      t = s.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      r = s.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = s.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []);
    return {
      events: {
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: s.useCallback(t => (0, n.jsx)(l.LottieIcon, {
        ...t,
        src: () => a.e("2199").then(a.t.bind(a, "71307", 19)),
        ref: e,
        markers: i
      }), [])
    }
  }