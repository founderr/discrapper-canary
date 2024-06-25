n.d(t, {
  j: function() {
    return r
  }
});
var s = n(735250),
  i = n(470079),
  l = n(709014);
let a = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  r = () => {
    let e = i.useRef(null),
      t = i.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      r = i.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = i.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []);
    return {
      events: {
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: i.useCallback(t => (0, s.jsx)(l.L, {
        ...t,
        src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
        ref: e,
        markers: a
      }), [])
    }
  }