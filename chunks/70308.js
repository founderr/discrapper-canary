"use strict";
n.d(t, {
  I: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(607070),
  l = n(345332),
  u = n(417153),
  _ = n(561466),
  c = n(550919);
let d = {
    duration: 300,
    friction: 24,
    tension: 280
  },
  E = {
    [_.az.TOP]: {
      styles: c.containerTop,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: d
        },
        enter: {
          transform: "translate3d(0, -0px, 0)",
          opacity: 1,
          config: d
        },
        leave: {
          transform: "translate3d(0, -100%, 0)",
          opacity: 0,
          config: {
            ...d,
            friction: 40,
            clamp: !0
          }
        }
      }
    },
    [_.az.BOTTOM]: {
      styles: c.containerBottom,
      transition: {
        trail: 400,
        from: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: d
        },
        enter: {
          transform: "translate3d(0, 0px, 0)",
          opacity: 1,
          config: d
        },
        leave: {
          transform: "translate3d(0, 100%, 0)",
          opacity: 0,
          config: {
            ...d,
            friction: 40,
            clamp: !0
          }
        }
      }
    }
  };

function I() {
  var e, t, n, c;
  let d = (0, u.Es)(e => e.currentToast),
    I = r.useRef(null !== (n = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : _.si.position),
    T = r.useRef(null !== (c = null == d ? void 0 : null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== c ? c : _.si.duration),
    h = (0, o.e7)([a.Z], () => a.Z.useReducedMotion);
  r.useEffect(() => {
    if (null != d) {
      var e, t, n, i;
      I.current = null !== (n = null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : _.si.position, T.current = null !== (i = null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : _.si.duration
    }
  }, [d]);
  let f = r.useMemo(() => {
      var e, t;
      return E[null !== (t = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : I.current]
    }, [d]),
    S = (0, s.useTransition)(d, {
      keys: e => {
        var t;
        return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
      },
      immediate: h,
      ...f.transition
    });
  return r.useEffect(() => {
    null != d && setTimeout(() => {
      (0, u.z5)()
    }, T.current)
  }, [d]), (0, i.jsx)("div", {
    className: f.styles,
    children: S((e, t) => null === t ? null : (0, i.jsx)(s.animated.div, {
      style: e,
      children: (0, i.jsx)(l.F, {
        ...t
      })
    }, t.id))
  })
}