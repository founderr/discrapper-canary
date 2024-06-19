n.d(t, {
  s: function() {
    return r
  }
});
var l = n(735250),
  i = n(470079),
  s = n(709014);
let a = {
    hover: {
      name: "hover",
      start: 0,
      duration: 40
    },
    click: {
      name: "click",
      start: 50,
      duration: 65
    }
  },
  r = () => {
    let e = i.useRef(null),
      t = i.useCallback(() => {
        null != e.current && e.current.play("click")
      }, []),
      r = i.useCallback(() => {
        null != e.current && e.current.play("hover")
      }, []),
      o = i.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("hover")
      }, []);
    return {
      events: {
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: i.useCallback(t => (0, l.jsx)(s.L, {
        ...t,
        src: () => n.e("8631").then(n.t.bind(n, 105262, 19)),
        ref: e,
        markers: a
      }), [])
    }
  }