var r = n(411104);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(774078),
    s = n(100527),
    l = n(906732),
    u = n(963249),
    c = n(639119),
    d = n(474936),
    _ = n(981631),
    E = n(689938),
    f = n(569252);
function h(e) {
    switch (e) {
        case d.Si.TIER_0:
            return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case d.Si.TIER_2:
            return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error('Unsupported subscription tier: '.concat(e));
    }
}
function p(e) {
    switch (e) {
        case d.Si.TIER_0:
            return a.NoticeColors.PREMIUM_TIER_0;
        case d.Si.TIER_2:
            return a.NoticeColors.PREMIUM_TIER_2;
        default:
            throw Error('Unsupported subscription tier: '.concat(e));
    }
}
function m(e, t) {
    switch (e) {
        case d.Si.TIER_0:
            return t.days > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_DAYS_VARIANT.format({ days: t.days }) : t.hours > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_HOURS_VARIANT.format({ hours: t.hours }) : E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_MINUTES_VARIANT.format({ minutes: Math.max(t.minutes, 1) });
        case d.Si.TIER_2:
            return t.days > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_DAYS_VARIANT.format({ days: t.days }) : t.hours > 0 ? E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_HOURS_VARIANT.format({ hours: t.hours }) : E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_MINUTES_VARIANT.format({ minutes: Math.max(t.minutes, 1) });
        default:
            throw Error('Unsupported subscription tier: '.concat(e));
    }
}
function I(e) {
    switch (e) {
        case d.Si.TIER_0:
            return E.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_CTA_VARIANT;
        case d.Si.TIER_2:
            return E.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_CTA_VARIANT;
        default:
            throw Error('Unsupported subscription tier: '.concat(e));
    }
}
function T(e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: r } = e,
        { analyticsLocations: s } = (0, l.ZP)(h(r)),
        d = (0, c.N)(),
        E = (0, o.Z)(null != d && null != d.expires_at ? Date.parse(d.expires_at) : 0);
    return null == d || (null === (t = d.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== r || null == d.expires_at || Object.values(E).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(a.Notice, {
              color: p(r),
              children: [
                  (0, i.jsx)(a.NoticeCloseButton, { onClick: n }),
                  (0, i.jsx)(a.NitroWheelIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: f.premiumIcon
                  }),
                  m(r, E),
                  (0, i.jsx)(a.NoticeButton, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: d.trial_id,
                              subscriptionTier: r,
                              analyticsLocations: s,
                              analyticsObject: {
                                  page: _.ZY5.IN_APP,
                                  section: _.jXE.NOTIFICATION_BAR,
                                  object: _.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: I(r)
                  })
              ]
          });
}
t.Z = T;
