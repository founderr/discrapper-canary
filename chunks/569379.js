n.d(t, {
  EK: function() {
    return _
  },
  GX: function() {
    return h
  },
  eQ: function() {
    return g
  },
  vf: function() {
    return C
  }
}), n(47120);
var o = n(470079),
  s = n(920906),
  r = n(442837),
  a = n(410030),
  i = n(706454),
  l = n(930153),
  c = n(113434),
  d = n(569984),
  u = n(918701),
  p = n(566078),
  m = n(46140),
  x = n(689938);

function g(e) {
  var t, n;
  let o = (0, r.e7)([i.default], () => i.default.locale),
    {
      percentComplete: s
    } = (0, c.Rf)({
      quest: e,
      location: m.dr.QUESTS_BAR
    });
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return x.Z.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && s > 0) {
    let e = (0, l.T3)(o, s, {
      roundingMode: "floor"
    });
    return x.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return (0, u.$J)(e) ? x.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : x.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function C(e, t) {
  var n;
  let o = (0, c.B6)(p.r.build(e.config).rewardsExpireAt),
    s = (0, c.Rf)({
      quest: e,
      location: m.dr.QUESTS_BAR
    }),
    r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    a = f(e);
  if (r) return x.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: o
  });
  if (t) return (0, u.pG)({
    quest: e,
    location: m.dr.QUESTS_BAR,
    useV2Variants: !0,
    taskDetails: s
  });
  if (s.percentComplete > 0) return a ? (0, u.AV)({
    quest: e,
    taskDetails: s
  }) : x.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
  return x.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function f(e) {
  let t = (0, r.e7)([d.Z], () => d.Z.getQuestLastSuccessfulHeartbeat(e.id));
  return !!(0, u.Bz)(e) || null != t && Date.now() - t < m.Ot
}

function h() {
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

function _(e, t) {
  var n;
  let o = f(e),
    s = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
    r = "var(--green-330)",
    i = ["var(--background-tertiary)", "var(--interactive-normal)"],
    l = t ? i[s] : ["#828288", "#CBCDD4"][s];
  return {
    backgroundTop: l,
    backgroundBottom: t ? i[s] : ["#535356", "#8B8C95"][s],
    foreground: r,
    glow: t && o ? r : "#C4C1D66E"
  }
}