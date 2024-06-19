n.d(t, {
  j: function() {
    return r
  }
});
var i = n(735250),
  s = n(470079),
  l = n(709014);
let a = {
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
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: s.useCallback(t => (0, i.jsx)(l.L, {
        ...t,
        src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
        ref: e,
        markers: a
      }), [])
    }
  }