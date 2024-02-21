"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("775560"),
  o = n("907002"),
  u = n("446674"),
  d = n("278572"),
  c = n("684581"),
  f = n("488284"),
  E = n("870696"),
  h = n("385649"),
  _ = n("18494"),
  C = n("102985"),
  I = n("31957"),
  S = n("709681"),
  m = n("157246");
let p = {
    transform: "scale(0.7)",
    opacity: 0
  },
  T = {
    transform: "scale(1)",
    opacity: 1
  };
var g = () => {
  let e = (0, u.useStateFromStores)([_.default], () => _.default.getChannelId()),
    t = (0, u.useStateFromStoresArray)([I.default], () => I.default.getIncomingCalls().filter(t => {
      let {
        channel: n
      } = t;
      return e !== n.id
    })),
    n = (0, u.useStateFromStores)([I.default], () => I.default.hasIncomingCalls()),
    i = (0, u.useStateFromStores)([h.default], () => h.default.isSoundDisabled("call_ringing")),
    g = f.default.useIsRingtoneEligible(),
    A = f.default.useIsRingtoneDisabled(),
    N = (0, u.useStateFromStores)([C.default], () => C.default.disableSounds),
    R = (0, u.useStateFromStores)([E.default], () => E.default.getSoundpack()),
    O = s.useRef(!1),
    v = (0, r.useStableMemo)(() => {
      let e = "call_ringing";
      if (g && !A) return (0, S.createSound)(c.default.ringtone, e);
      if (R === m.Soundpacks.CLASSIC) {
        let t = 500 === l.random(1, 1e3) ? "call_ringing_beat" : "call_ringing";
        return (0, S.createSound)(t, e)
      }
      return (0, S.createSoundForPack)("call_ringing", R)
    }, [R, A, g]);
  s.useEffect(() => () => {
    v.stop()
  }, [v]), s.useEffect(() => {
    if (N || i) {
      O.current && (v.stop(), O.current = !1);
      return
    }
    n && !O.current ? (v.loop(), O.current = !0) : !n && O.current && (v.stop(), O.current = !1)
  }, [i, N, n, v]);
  let L = (0, o.useTransition)(t, {
    keys: e => {
      var t;
      return null === (t = e.channel) || void 0 === t ? void 0 : t.id
    },
    enter: {
      from: p,
      to: T
    },
    leave: p,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  });
  return L((e, t) => (0, a.jsx)(d.default, {
    ...t,
    animatedStyle: e
  }))
}