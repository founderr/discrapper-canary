n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250),
  i = n(470079),
  s = n(920906),
  a = n(442837),
  r = n(780384),
  o = n(435064),
  c = n(39604),
  u = n(175470),
  d = n(569545),
  h = n(153850),
  m = n(385608);
let p = {
    visibility: "hidden"
  },
  E = {
    precision: 1e-4,
    duration: 300
  },
  g = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  f = {
    duration: 1e3
  };

function C(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: C
  } = i.useContext(r.Sf), _ = (0, i.useRef)(null), I = u.n.getState().clipsButtonRef, x = (0, d.V9)(t), T = (0, a.e7)([o.Z], () => o.Z.getActiveAnimation()), N = (0, a.Wu)([o.Z], () => o.Z.getStreamClipAnimations(x)), Z = (0, i.useRef)();
  i.useEffect(() => () => {
    (0, c.Gh)(x)
  }, [x]);
  let S = () => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
      return null == t || n ? p : {
        width: t.width,
        height: t.height,
        top: t.top,
        left: t.left
      }
    },
    v = e => {
      let t = null == I ? void 0 : I.getBoundingClientRect();
      if (Z.current = t, e.timestamp !== T || null == t || n) return p;
      let {
        top: l,
        left: i
      } = t;
      return {
        top: l + 36,
        left: i - 216,
        height: 151,
        width: 268
      }
    },
    A = (0, i.useRef)(null),
    M = (0, s.useTransition)(N, {
      keys: e => e.timestamp,
      ref: A,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: E
    }),
    R = (0, i.useRef)(null),
    j = (0, s.useTransition)(N, {
      ref: R,
      keys: e => e.timestamp,
      from: e => ({
        position: "fixed",
        visibility: "hidden",
        opacity: 1,
        ...C.enabled ? v(e) : S()
      }),
      enter: e => [{
        opacity: 1,
        visibility: "visible",
        ...v(e)
      }],
      leave: {
        opacity: 0,
        ...!C.enabled && {
          height: 0,
          width: 0,
          ...(() => {
            if (null != Z.current) return {
              top: Z.current.top + 12,
              left: Z.current.left + 12
            }
          })()
        }
      },
      config: C.enabled ? f : g,
      onRest: (e, t) => {
        null != t.item && null != N.find(e => e.timestamp === t.item.timestamp) && (0, c.Gh)(x, t.item.timestamp)
      }
    });
  return (0, s.useChain)([A, R], [0, .1], 3e3), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: m.hidden,
      ref: _
    }), M((e, t) => null != t && (0, l.jsx)(s.animated.div, {
      className: m.whiteFlash,
      style: e
    })), (0, l.jsx)(h.ZP, {
      children: (0, l.jsx)("div", {
        className: m.hidden,
        children: j((e, t, n, i) => (null == t ? void 0 : t.thumbnail) != null && (0, l.jsx)(s.animated.img, {
          src: t.thumbnail,
          className: m.movingImage,
          style: e
        }))
      })
    })]
  })
}