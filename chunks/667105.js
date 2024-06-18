"use strict";
n.d(t, {
  g2: function() {
    return S
  },
  hf: function() {
    return T
  },
  tP: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(481060),
  l = n(594190),
  u = n(594174),
  _ = n(617136),
  c = n(918701),
  d = n(920916),
  E = n(669041),
  I = n(341907);

function T(e) {
  let {
    quest: t,
    location: n,
    questContentPosition: i
  } = e, s = (0, o.e7)([u.default], () => {
    var e;
    return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return r.useCallback(() => {
    null != t && ((0, _._3)({
      questId: t.id,
      questContent: n,
      questContentCTA: _.jZ.CLAIM_REWARD,
      questContentPosition: i
    }), s ? (0, c.Xv)(t.config) ? (0, d.openCollectibleRewardModal)(t, n) : (0, I.hp)({
      questId: t.id,
      location: n,
      questContentPosition: i
    }) : (0, E.openRewardModalUnverified)())
  }, [t, n, i, s])
}

function h(e) {
  var t;
  let n = (0, o.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
  if (null == n) return !1;
  let i = Date.now() - 2592e7;
  return i <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0)
}
let S = e => {
  let {
    useReducedMotion: t,
    className: n
  } = e, [o, l] = (0, s.useSpring)(() => ({})), u = r.useRef(!1), _ = (0, s.animated)(a.RefreshIcon);
  return {
    render: () => (0, i.jsx)(_, {
      className: n,
      style: t ? void 0 : o,
      color: "currentColor",
      size: "xs"
    }),
    startAnimation: () => {
      u.current = !0, l({
        from: {
          rotate: "0deg"
        },
        to: {
          rotate: "360deg"
        },
        config: {
          tension: 750,
          mass: 5,
          friction: 100
        },
        loop: () => u.current,
        immediate: t
      })
    },
    stopAnimation: () => {
      u.current = !1
    }
  }
}