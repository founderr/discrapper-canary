"use strict";
a.r(t), a.d(t, {
  useWaveformLottie: function() {
    return r
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("709014");
let i = {
    disable: {
      name: "disable",
      start: 0,
      duration: 70
    },
    enable: {
      name: "enable",
      start: 100,
      duration: 70
    },
    hover_enabled: {
      name: "hover_enabled",
      start: 200,
      duration: 70
    },
    hover_disabled: {
      name: "hover_disabled",
      start: 300,
      duration: 70
    }
  },
  r = e => {
    let t = s.useRef(null),
      r = s.useRef(e),
      o = s.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      u = s.useCallback(() => {
        if (null == t.current) return;
        let a = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(a)
      }, [e]),
      d = s.useCallback(() => {
        if (null == t.current) return;
        let a = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(a)
      }, [e]);
    return {
      events: {
        onClick: o,
        onMouseEnter: u,
        onMouseLeave: d
      },
      play: o,
      Component: s.useCallback(e => (0, n.jsx)(l.LottieIcon, {
        ...e,
        src: () => a.e("7584").then(a.t.bind(a, "883488", 19)),
        ref: t,
        initialAnimation: r.current,
        markers: i
      }), [])
    }
  }