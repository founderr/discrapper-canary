"use strict";
s.r(t), s.d(t, {
  useProgressBarColors: function() {
    return C
  },
  useQuestBarCompletionAnimation: function() {
    return m
  },
  useQuestBarSubtitle: function() {
    return h
  },
  useQuestBarTitle: function() {
    return _
  }
}), s("47120");
var n = s("470079"),
  a = s("920906"),
  l = s("442837"),
  i = s("410030"),
  r = s("706454"),
  o = s("930153"),
  u = s("113434"),
  d = s("918701"),
  c = s("566078"),
  E = s("46140"),
  f = s("689938");

function _(e) {
  var t, s;
  let n = (0, l.useStateFromStores)([r.default], () => r.default.locale),
    {
      percentComplete: a
    } = (0, u.useQuestTaskDetails)({
      quest: e,
      location: E.QuestsExperimentLocations.QUESTS_BAR
    });
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return f.default.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (s = e.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && a > 0) {
    let e = (0, o.formatPercent)(n, a, {
      roundingMode: "floor"
    });
    return f.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return (0, d.isConsoleQuest)(e) ? f.default.Messages.QUEST_BAR_TITLE_START_PLAYING : f.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function h(e, t) {
  var s;
  let n = (0, u.useQuestFormattedDate)(c.SharedQuestFields.build(e.config).rewardsExpireAt),
    a = (0, u.useQuestTaskDetails)({
      quest: e,
      location: E.QuestsExperimentLocations.QUESTS_BAR
    });
  return (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null ? f.default.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: n
  }) : t ? (0, d.getQuestsInstructionsToWinReward)({
    quest: e,
    location: E.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: !0,
    taskDetails: a
  }) : a.percentComplete > 0 ? (0, d.getContextualEntrypointHeading)({
    quest: e,
    taskDetails: a
  }) : f.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function m() {
  let [{
    spring: e
  }, t] = (0, a.useSpring)(() => ({
    spring: 0
  }));
  return {
    completionSpring: e,
    startCompletionAnimation: n.useCallback(() => {
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
  let s = null !== (t = (0, i.useThemeIndex)()) && void 0 !== t ? t : 0,
    n = "var(--green-330)",
    a = ["var(--background-tertiary)", "var(--interactive-normal)"],
    l = e ? a[s] : ["#828288", "#CBCDD4"][s];
  return {
    backgroundTop: l,
    backgroundBottom: e ? a[s] : ["#535356", "#8B8C95"][s],
    foreground: n,
    glow: e ? n : "#C4C1D66E"
  }
}