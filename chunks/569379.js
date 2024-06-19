n.d(t, {
  EK: function() {
    return C
  },
  GX: function() {
    return T
  },
  eQ: function() {
    return h
  },
  vf: function() {
    return m
  }
}), n(47120);
var s = n(470079),
  a = n(920906),
  i = n(442837),
  l = n(410030),
  r = n(706454),
  o = n(930153),
  c = n(113434),
  d = n(918701),
  u = n(566078),
  E = n(46140),
  _ = n(689938);

function h(e) {
  var t, n;
  let s = (0, i.e7)([r.default], () => r.default.locale),
    {
      percentComplete: a
    } = (0, c.Rf)({
      quest: e,
      location: E.dr.QUESTS_BAR
    });
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return _.Z.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && a > 0) {
    let e = (0, o.T3)(s, a, {
      roundingMode: "floor"
    });
    return _.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return (0, d.$J)(e) ? _.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : _.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function m(e, t) {
  var n;
  let s = (0, c.B6)(u.r.build(e.config).rewardsExpireAt),
    a = (0, c.Rf)({
      quest: e,
      location: E.dr.QUESTS_BAR
    });
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? _.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: s
  }) : t ? (0, d.pG)({
    quest: e,
    location: E.dr.QUESTS_BAR,
    useV2Variants: !0,
    taskDetails: a
  }) : a.percentComplete > 0 ? (0, d.AV)({
    quest: e,
    taskDetails: a
  }) : _.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function T() {
  let [{
    spring: e
  }, t] = (0, a.useSpring)(() => ({
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

function C(e) {
  var t;
  let n = null !== (t = (0, l.i6)()) && void 0 !== t ? t : 0,
    s = "var(--green-330)",
    a = ["var(--background-tertiary)", "var(--interactive-normal)"],
    i = e ? a[n] : ["#828288", "#CBCDD4"][n];
  return {
    backgroundTop: i,
    backgroundBottom: e ? a[n] : ["#535356", "#8B8C95"][n],
    foreground: s,
    glow: e ? s : "#C4C1D66E"
  }
}