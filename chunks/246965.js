n(411104);
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(774078),
  a = n(100527),
  r = n(906732),
  o = n(963249),
  c = n(639119),
  u = n(474936),
  d = n(981631),
  E = n(689938),
  _ = n(596791);
t.Z = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: I
  } = e, {
    analyticsLocations: T
  } = (0, r.ZP)(function(e) {
    switch (e) {
      case u.Si.TIER_0:
        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case u.Si.TIER_2:
        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(I)), N = (0, c.N)(), m = (0, l.Z)(null != N && null != N.expires_at ? Date.parse(N.expires_at) : 0);
  return null == N || (null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== I || null == N.expires_at || Object.values(m).every(e => 0 === e) ? null : (0, s.jsxs)(i.Notice, {
    color: function(e) {
      switch (e) {
        case u.Si.TIER_0:
          return i.NoticeColors.PREMIUM_TIER_0;
        case u.Si.TIER_2:
          return i.NoticeColors.PREMIUM_TIER_2;
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(I),
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: n
    }), (0, s.jsx)(i.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: _.premiumIcon
    }), function(e, t) {
      switch (e) {
        case u.Si.TIER_0:
          return t.days > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_DAYS_VARIANT.format({
            days: t.days
          }) : t.hours > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_HOURS_VARIANT.format({
            hours: t.hours
          }) : E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_MINUTES_VARIANT.format({
            minutes: Math.max(t.minutes, 1)
          });
        case u.Si.TIER_2:
          return t.days > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_DAYS_VARIANT.format({
            days: t.days
          }) : t.hours > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_HOURS_VARIANT.format({
            hours: t.hours
          }) : E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_MINUTES_VARIANT.format({
            minutes: Math.max(t.minutes, 1)
          });
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(I, m), (0, s.jsx)(i.NoticeButton, {
      onClick: () => {
        (0, o.Z)({
          trialId: N.trial_id,
          subscriptionTier: I,
          analyticsLocations: T,
          analyticsObject: {
            page: d.ZY5.IN_APP,
            section: d.jXE.NOTIFICATION_BAR,
            object: d.qAy.BUTTON_CTA
          }
        })
      },
      children: function(e) {
        switch (e) {
          case u.Si.TIER_0:
            return E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_CTA_VARIANT;
          case u.Si.TIER_2:
            return E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_CTA_VARIANT;
          default:
            throw Error("Unsupported subscription tier: ".concat(e))
        }
      }(I)
    })]
  })
}