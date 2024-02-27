"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("907002"),
  i = n("446674"),
  r = n("819855"),
  u = n("386045"),
  o = n("803725"),
  d = n("728658"),
  c = n("374014"),
  f = n("983782"),
  h = n("62931");
let m = {
    visibility: "hidden"
  },
  p = {
    precision: 1e-4,
    duration: 300
  },
  E = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  g = {
    duration: 1e3
  };

function S(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: S
  } = a.useContext(r.AccessibilityPreferencesContext), C = (0, a.useRef)(null), _ = d.useClipsButtonStore.getState().clipsButtonRef, I = (0, c.encodeStreamKey)(t), T = (0, i.useStateFromStores)([u.default], () => u.default.getActiveAnimation()), v = (0, i.useStateFromStoresArray)([u.default], () => u.default.getStreamClipAnimations(I)), x = (0, a.useRef)();
  a.useEffect(() => () => {
    (0, o.dismissSaveClipAnimation)(I)
  }, [I]);
  let N = () => {
      var e;
      let t = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
      return null == t || n ? m : {
        width: t.width,
        height: t.height,
        top: t.top,
        left: t.left
      }
    },
    A = e => {
      let t = null == _ ? void 0 : _.getBoundingClientRect();
      if (x.current = t, e.timestamp !== T || null == t || n) return m;
      let {
        top: l,
        left: a
      } = t;
      return {
        top: l + 36,
        left: a - 216,
        height: 151,
        width: 268
      }
    },
    M = (0, a.useRef)(null),
    R = (0, s.useTransition)(v, {
      keys: e => e.timestamp,
      ref: M,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: p
    }),
    j = (0, a.useRef)(null),
    L = (0, s.useTransition)(v, {
      ref: j,
      keys: e => e.timestamp,
      from: e => ({
        position: "fixed",
        visibility: "hidden",
        opacity: 1,
        ...S.enabled ? A(e) : N()
      }),
      enter: e => [{
        opacity: 1,
        visibility: "visible",
        ...A(e)
      }],
      leave: {
        opacity: 0,
        ...!S.enabled && {
          height: 0,
          width: 0,
          ...(() => {
            if (null != x.current) return {
              top: x.current.top + 12,
              left: x.current.left + 12
            }
          })()
        }
      },
      config: S.enabled ? g : E,
      onRest: (e, t) => {
        null != t.item && null != v.find(e => e.timestamp === t.item.timestamp) && (0, o.dismissSaveClipAnimation)(I, t.item.timestamp)
      }
    });
  return (0, s.useChain)([M, j], [0, .1], 3e3), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: h.hidden,
      ref: C
    }), R((e, t) => null != t && (0, l.jsx)(s.animated.div, {
      className: h.whiteFlash,
      style: e
    })), (0, l.jsx)(f.default, {
      children: (0, l.jsx)("div", {
        className: h.hidden,
        children: L((e, t, n, a) => (null == t ? void 0 : t.thumbnail) != null && (0, l.jsx)(s.animated.img, {
          src: t.thumbnail,
          className: h.movingImage,
          style: e
        }))
      })
    })]
  })
}