n.d(t, {
  EK: function() {
    return h
  },
  GX: function() {
    return C
  },
  eQ: function() {
    return m
  },
  vf: function() {
    return g
  }
}), n(47120);
var s = n(470079),
  o = n(920906),
  r = n(442837),
  a = n(410030),
  l = n(706454),
  i = n(930153),
  c = n(113434),
  u = n(918701),
  d = n(566078),
  p = n(46140),
  x = n(689938);

function m(e) {
  var t, n;
  let s = (0, r.e7)([l.default], () => l.default.locale),
    {
      percentComplete: o
    } = (0, c.Rf)({
      quest: e,
      location: p.dr.QUESTS_BAR
    });
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return x.Z.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && o > 0) {
    let e = (0, i.T3)(s, o, {
      roundingMode: "floor"
    });
    return x.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return (0, u.$J)(e) ? x.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : x.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function g(e, t) {
  var n;
  let s = (0, c.B6)(d.r.build(e.config).rewardsExpireAt),
    o = (0, c.Rf)({
      quest: e,
      location: p.dr.QUESTS_BAR
    });
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? x.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: s
  }) : t ? (0, u.pG)({
    quest: e,
    location: p.dr.QUESTS_BAR,
    useV2Variants: !0,
    taskDetails: o
  }) : o.percentComplete > 0 ? (0, u.AV)({
    quest: e,
    taskDetails: o
  }) : x.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function C() {
  let [{
    spring: e
  }, t] = (0, o.useSpring)(() => ({
    spring: 0
  }));
  return {
    completionSpring: e,
    startCompletionAnimation: s.useCallback(() => {
      t({
        spring: 1
      }), t({
        spring: 0,
        delay: 2e3
      })
    }, [t])
  }
}

function h(e) {
  var t;
  let n = null !== (t = (0, a.i6)()) && void 0 !== t ? t : 0,
    s = "var(--green-330)",
    o = ["var(--background-tertiary)", "var(--interactive-normal)"],
    r = e ? o[n] : ["#828288", "#CBCDD4"][n];
  return {
    backgroundTop: r,
    backgroundBottom: e ? o[n] : ["#535356", "#8B8C95"][n],
    foreground: s,
    glow: e ? s : "#C4C1D66E"
  }
}