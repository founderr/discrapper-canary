"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("207561"),
  o = a("718017"),
  u = a("442837"),
  d = a("966302"),
  c = a("378364"),
  f = a("197344"),
  E = a("474873"),
  h = a("292959"),
  _ = a("944486"),
  C = a("246946"),
  m = a("340895"),
  S = a("557177"),
  I = a("871465");
let p = {
    transform: "scale(0.7)",
    opacity: 0
  },
  T = {
    transform: "scale(1)",
    opacity: 1
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([_.default], () => _.default.getChannelId()),
    t = (0, u.useStateFromStoresArray)([m.default], () => m.default.getIncomingCalls().filter(t => {
      let {
        channel: a
      } = t;
      return e !== a.id
    })),
    a = (0, u.useStateFromStores)([m.default], () => m.default.hasIncomingCalls()),
    l = (0, u.useStateFromStores)([h.default], () => h.default.isSoundDisabled("call_ringing")),
    g = f.default.useIsRingtoneEligible(),
    A = f.default.useIsRingtoneDisabled(),
    N = (0, u.useStateFromStores)([C.default], () => C.default.disableSounds),
    v = (0, u.useStateFromStores)([E.default], () => E.default.getSoundpack()),
    R = s.useRef(!1),
    O = (0, r.useStableMemo)(() => {
      let e = "call_ringing";
      if (g && !A) return (0, S.createSound)(c.default.ringtone, e);
      if (v === I.Soundpacks.CLASSIC) {
        let t = 500 === i().random(1, 1e3) ? "call_ringing_beat" : "call_ringing";
        return (0, S.createSound)(t, e)
      }
      return (0, S.createSoundForPack)("call_ringing", v)
    }, [v, A, g]);
  return s.useEffect(() => () => {
    O.stop()
  }, [O]), s.useEffect(() => {
    if (N || l) {
      R.current && (O.stop(), R.current = !1);
      return
    }
    a && !R.current ? (O.loop(), R.current = !0) : !a && R.current && (O.stop(), R.current = !1)
  }, [l, N, a, O]), (0, o.useTransition)(t, {
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
  })((e, t) => (0, n.jsx)(d.default, {
    ...t,
    animatedStyle: e
  }))
}