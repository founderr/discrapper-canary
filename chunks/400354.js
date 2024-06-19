n.d(t, {
  l: function() {
    return r
  }
});
var i = n(735250),
  s = n(470079),
  l = n(709014);
let a = {
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
      c = s.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(n)
      }, [e]),
      u = s.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.stopIfPlaying(n)
      }, [e]);
    return {
      events: {
        onClick: o,
        onMouseEnter: c,
        onMouseLeave: u
      },
      play: o,
      Component: s.useCallback(e => (0, i.jsx)(l.L, {
        ...e,
        src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
        ref: t,
        initialAnimation: r.current,
        markers: a
      }), [])
    }
  }