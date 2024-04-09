"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("207561"),
  o = n("718017"),
  u = n("442837"),
  d = n("966302"),
  c = n("378364"),
  f = n("197344"),
  E = n("474873"),
  h = n("292959"),
  _ = n("944486"),
  C = n("246946"),
  m = n("340895"),
  S = n("557177"),
  I = n("871465");
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
        channel: n
      } = t;
      return e !== n.id
    })),
    n = (0, u.useStateFromStores)([m.default], () => m.default.hasIncomingCalls()),
    l = (0, u.useStateFromStores)([h.default], () => h.default.isSoundDisabled("call_ringing")),
    g = f.default.useIsRingtoneEligible(),
    N = f.default.useIsRingtoneDisabled(),
    A = (0, u.useStateFromStores)([C.default], () => C.default.disableSounds),
    O = (0, u.useStateFromStores)([E.default], () => E.default.getSoundpack()),
    R = s.useRef(!1),
    v = (0, r.useStableMemo)(() => {
      let e = "call_ringing";
      if (g && !N) return (0, S.createSound)(c.default.ringtone, e);
      if (O === I.Soundpacks.CLASSIC) {
        let t = 500 === i().random(1, 1e3) ? "call_ringing_beat" : "call_ringing";
        return (0, S.createSound)(t, e)
      }
      return (0, S.createSoundForPack)("call_ringing", O)
    }, [O, N, g]);
  return s.useEffect(() => () => {
    v.stop()
  }, [v]), s.useEffect(() => {
    if (A || l) {
      R.current && (v.stop(), R.current = !1);
      return
    }
    n && !R.current ? (v.loop(), R.current = !0) : !n && R.current && (v.stop(), R.current = !1)
  }, [l, A, n, v]), (0, o.useTransition)(t, {
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
  })((e, t) => (0, a.jsx)(d.default, {
    ...t,
    animatedStyle: e
  }))
}