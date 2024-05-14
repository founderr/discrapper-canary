"use strict";
n.r(t), n.d(t, {
  useQuestBarSubtitle: function() {
    return f
  },
  useQuestBarTitle: function() {
    return c
  }
});
var a = n("470079"),
  s = n("442837"),
  l = n("706454"),
  i = n("930153"),
  r = n("113434"),
  o = n("918701"),
  u = n("46140"),
  d = n("689938");

function c(e) {
  var t, n;
  let a = (0, s.useStateFromStores)([l.default], () => l.default.locale),
    r = (0, o.calculatePercentComplete)(e);
  if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return d.default.Messages.QUESTS_COMPLETION_COMPLETE;
  if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && r > 0) {
    let e = (0, i.formatPercent)(a, r, {
      roundingMode: "floor"
    });
    return d.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
      percent: e
    })
  }
  return d.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
}

function f(e, t) {
  var n;
  let s = (0, r.useQuestFormattedDate)(e.config.rewardCodeExpiresAt),
    l = a.useMemo(() => (0, o.calculatePercentComplete)(e), [e]);
  return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? d.default.Messages.QUESTS_CLAIM_BY_DATE.format({
    expirationDate: s
  }) : t ? (0, o.getQuestsInstructionsToWinReward)({
    quest: e,
    location: u.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: !0
  }) : l > 0 ? (0, o.getContextualEntrypointHeading)(e) : d.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE
}