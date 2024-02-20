"use strict";
n.r(t), n.d(t, {
  ToastContainer: function() {
    return f
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("907002"),
  a = n("446674"),
  o = n("206230"),
  l = n("35672"),
  u = n("325236"),
  c = n("159350"),
  d = n("354149");
let p = {
    duration: 300,
    friction: 24,
    tension: 280
  },
  h = {
    [c.ToastPosition.TOP]: {
      styles: d.containerTop,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: p
        },
        enter: {
          transform: "translate3d(0, -0px, 0)",
          opacity: 1,
          config: p
        },
        leave: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: {
            ...p,
            friction: 40,
            clamp: !0
          }
        }
      }
    },
    [c.ToastPosition.BOTTOM]: {
      styles: d.containerBottom,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: p
        },
        enter: {
          transform: "translate3d(0, 0px, 0)",
          opacity: 1,
          config: p
        },
        leave: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: {
            ...p,
            friction: 40,
            clamp: !0
          }
        }
      }
    }
  };

function f() {
  var e, t, n, d;
  let p = (0, u.useToastStore)(e => e.currentToast),
    f = r.useRef(null !== (n = null == p ? void 0 : null === (e = p.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position),
    E = r.useRef(null !== (d = null == p ? void 0 : null === (t = p.options) || void 0 === t ? void 0 : t.duration) && void 0 !== d ? d : c.TOAST_DEFAULT_OPTIONS.duration),
    _ = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  r.useEffect(() => {
    if (null != p) {
      var e, t, n, i;
      f.current = null !== (n = null === (e = p.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position, E.current = null !== (i = null === (t = p.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : c.TOAST_DEFAULT_OPTIONS.duration
    }
  }, [p]);
  let m = r.useMemo(() => {
      var e, t;
      return h[null !== (t = null == p ? void 0 : null === (e = p.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : f.current]
    }, [p]),
    S = (0, s.useTransition)(p, {
      keys: e => {
        var t;
        return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
      },
      immediate: _,
      ...m.transition
    });
  return r.useEffect(() => {
    null != p && setTimeout(() => {
      (0, u.popToast)()
    }, E.current)
  }, [p]), (0, i.jsx)("div", {
    className: m.styles,
    children: S((e, t) => null === t ? null : (0, i.jsx)(s.animated.div, {
      style: e,
      children: (0, i.jsx)(l.Toast, {
        ...t
      })
    }, t.id))
  })
}