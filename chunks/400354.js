"use strict";
a.r(t), a.d(t, {
  useHeadphonesLottie: function() {
    return r
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("709014");
let i = {
    deafen: {
      name: "deafen",
      start: 0,
      duration: 70
    },
    undeafen: {
      name: "undeafen",
      start: 110,
      duration: 70
    },
    hover_undeafened: {
      name: "hover_undeafened",
      start: 200,
      duration: 70
    },
    hover_deafened: {
      name: "hover_deafened",
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
        let a = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(a)
      }, [e]),
      d = s.useCallback(() => {
        if (null == t.current) return;
        let a = "deafen" === e ? "hover_undeafened" : "hover_deafened";
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
        src: () => a.e("68449").then(a.t.bind(a, "406785", 19)),
        ref: t,
        initialAnimation: r.current,
        markers: i
      }), [])
    }
  }