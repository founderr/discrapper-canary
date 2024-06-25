n.d(t, {
  EK: function() {
    return C
  },
  GX: function() {
    return f
  },
  eQ: function() {
    return x
  },
  vf: function() {
    return g
  }
}), n(47120);
var o = n(470079),
  s = n(920906),
  r = n(442837),
  a = n(410030),
  i = n(706454),
  l = n(930153),
  c = n(113434),
  d = n(918701),
  u = n(566078),
  p = n(46140),
  m = n(689938);

function x(e) {
  var t, n;
  let o = (0, r.e7)([i.default], () => i.default.locale),
    {
      percentComplete: s
    } = (0, c.Rf)({
      quest: e,
      location: p.dr.QUESTS_BAR
    });
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return m.Z.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && s > 0) {
    let e = (0, l.T3)(o, s, {
      roundingMode: "floor"
    });
    return m.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return (0, d.$J)(e) ? m.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : m.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function g(e, t) {
  var n;
  let o = (0, c.B6)(u.r.build(e.config).rewardsExpireAt),
    s = (0, c.Rf)({
      quest: e,
      location: p.dr.QUESTS_BAR
    });
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? m.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: o
  }) : t ? (0, d.pG)({
    quest: e,
    location: p.dr.QUESTS_BAR,
    useV2Variants: !0,
    taskDetails: s
  }) : s.percentComplete > 0 ? (0, d.AV)({
    quest: e,
    taskDetails: s
  }) : m.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function f() {
  let [{
    spring: e
  }, t] = (0, s.useSpring)(() => ({
    spring: 0
  }));
  return {
    completionSpring: e,
    startCompletionAnimation: o.useCallback(() => {
      t({
        spring: 1
      }), t({
        spring: 0,
        delay: 2e3
      })
    }, [t])
  }
}

function C(e) {
  var t;
  let n = null !== (t = (0, a.i6)()) && void 0 !== t ? t : 0,
    o = "var(--green-330)",
    s = ["var(--background-tertiary)", "var(--interactive-normal)"],
    r = e ? s[n] : ["#828288", "#CBCDD4"][n];
  return {
    backgroundTop: r,
    backgroundBottom: e ? s[n] : ["#535356", "#8B8C95"][n],
    foreground: o,
    glow: e ? o : "#C4C1D66E"
  }
}