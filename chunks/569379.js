"use strict";
n.r(t), n.d(t, {
  useQuestBarCompletionAnimation: function() {
    return _
  },
  useQuestBarSubtitle: function() {
    return h
  },
  useQuestBarTitle: function() {
    return E
  }
}), n("47120");
var a = n("470079"),
  s = n("920906"),
  l = n("442837"),
  i = n("706454"),
  r = n("930153"),
  o = n("113434"),
  u = n("918701"),
  d = n("566078"),
  c = n("46140"),
  f = n("689938");

function E(e) {
  var t, n;
  let a = (0, l.useStateFromStores)([i.default], () => i.default.locale),
    s = (0, u.calculatePercentComplete)(e);
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return f.default.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && s > 0) {
    let e = (0, r.formatPercent)(a, s, {
      roundingMode: "floor"
    });
    return f.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return f.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function h(e, t) {
  var n;
  let s = (0, o.useQuestFormattedDate)(d.SharedQuestFields.build(e.config).rewardsExpireAt),
    l = a.useMemo(() => (0, u.calculatePercentComplete)(e), [e]);
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? f.default.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: s
  }) : t ? (0, u.getQuestsInstructionsToWinReward)({
    quest: e,
    location: c.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: !0
  }) : l > 0 ? (0, u.getContextualEntrypointHeading)(e) : f.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}

function _() {
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