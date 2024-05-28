"use strict";
s.r(t), s.d(t, {
  useQuestBarCompletionAnimation: function() {
    return h
  },
  useQuestBarSubtitle: function() {
    return f
  },
  useQuestBarTitle: function() {
    return _
  }
}), s("47120");
var a = s("470079"),
  n = s("920906"),
  l = s("442837"),
  i = s("706454"),
  r = s("930153"),
  u = s("113434"),
  o = s("918701"),
  d = s("566078"),
  c = s("46140"),
  E = s("689938");

function _(e) {
  var t, s;
  let a = (0, l.useStateFromStores)([i.default], () => i.default.locale),
    n = (0, o.calculatePercentComplete)(e);
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return E.default.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (s = e.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && n > 0) {
    let e = (0, r.formatPercent)(a, n, {
      roundingMode: "floor"
    });
    return E.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function f(e, t) {
  var s;
  let n = (0, u.useQuestFormattedDate)(d.SharedQuestFields.build(e.config).rewardsExpireAt),
    l = a.useMemo(() => (0, o.calculatePercentComplete)(e), [e]);
  return (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null ? E.default.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: n
  }) : t ? (0, o.getQuestsInstructionsToWinReward)({
    quest: e,
    location: c.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: !0
  }) : l > 0 ? (0, o.getContextualEntrypointHeading)(e) : E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function h() {
  let [{
    spring: e
  }, t] = (0, n.useSpring)(() => ({
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