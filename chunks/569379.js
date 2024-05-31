"use strict";
n.r(t), n.d(t, {
  useProgressBarColors: function() {
    return m
  },
  useQuestBarCompletionAnimation: function() {
    return C
  },
  useQuestBarSubtitle: function() {
    return _
  },
  useQuestBarTitle: function() {
    return h
  }
}), n("47120");
var a = n("470079"),
  s = n("920906"),
  l = n("442837"),
  i = n("410030"),
  r = n("706454"),
  o = n("930153"),
  u = n("113434"),
  d = n("918701"),
  c = n("566078"),
  f = n("46140"),
  E = n("689938");

function h(e) {
  var t, n;
  let a = (0, l.useStateFromStores)([r.default], () => r.default.locale),
    s = (0, d.calculatePercentComplete)(e);
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return E.default.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && s > 0) {
    let e = (0, o.formatPercent)(a, s, {
      roundingMode: "floor"
    });
    return E.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function _(e, t) {
  var n;
  let s = (0, u.useQuestFormattedDate)(c.SharedQuestFields.build(e.config).rewardsExpireAt),
    l = a.useMemo(() => (0, d.calculatePercentComplete)(e), [e]);
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? E.default.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: s
  }) : t ? (0, d.getQuestsInstructionsToWinReward)({
    quest: e,
    location: f.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: !0
  }) : l > 0 ? (0, d.getContextualEntrypointHeading)(e) : E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function C() {
  let [{
    spring: e
  }, t] = (0, s.useSpring)(() => ({
    spring: 0
  }));
  return {
    completionSpring: e,
    startCompletionAnimation: a.useCallback(() => {
      t({
        spring: 1
      }), t({
        spring: 0,
        delay: 2e3
      })
    }, [t])
  }
}

function m(e) {
  var t;
  let n = null !== (t = (0, i.useThemeIndex)()) && void 0 !== t ? t : 0,
    a = "var(--green-330)",
    s = ["var(--background-tertiary)", "var(--interactive-normal)"],
    l = e ? s[n] : ["#828288", "#CBCDD4"][n];
  return {
    backgroundTop: l,
    backgroundBottom: e ? s[n] : ["#535356", "#8B8C95"][n],
    foreground: a,
    glow: e ? a : "#C4C1D66E"
  }
}