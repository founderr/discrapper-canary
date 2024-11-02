n(411104);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(774078),
    a = n(100527),
    o = n(906732),
    s = n(963249),
    c = n(639119),
    u = n(474936),
    d = n(981631),
    m = n(388032),
    f = n(569252);
t.Z = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: h } = e,
        { analyticsLocations: p } = (0, o.ZP)(
            (function (e) {
                switch (e) {
                    case u.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case u.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(h)
        ),
        g = (0, c.N)(),
        _ = (0, l.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0);
    return null == g || (null === (t = g.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== h || null == g.expires_at || Object.values(_).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(r.Notice, {
              color: (function (e) {
                  switch (e) {
                      case u.Si.TIER_0:
                          return r.NoticeColors.PREMIUM_TIER_0;
                      case u.Si.TIER_2:
                          return r.NoticeColors.PREMIUM_TIER_2;
                      default:
                          throw Error('Unsupported subscription tier: '.concat(e));
                  }
              })(h),
              children: [
                  (0, i.jsx)(r.NoticeCloseButton, { onClick: n }),
                  (0, i.jsx)(r.NitroWheelIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: f.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case u.Si.TIER_0:
                              return t.days > 0 ? m.intl.formatToPlainString(m.t.sP5OqK, { days: t.days }) : t.hours > 0 ? m.intl.formatToPlainString(m.t['7Lhfu7'], { hours: t.hours }) : m.intl.formatToPlainString(m.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case u.Si.TIER_2:
                              return t.days > 0 ? m.intl.formatToPlainString(m.t['4prs5e'], { days: t.days }) : t.hours > 0 ? m.intl.formatToPlainString(m.t.OD5nIS, { hours: t.hours }) : m.intl.formatToPlainString(m.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(h, _),
                  (0, i.jsx)(r.NoticeButton, {
                      onClick: () => {
                          (0, s.Z)({
                              trialId: g.trial_id,
                              subscriptionTier: h,
                              analyticsLocations: p,
                              analyticsObject: {
                                  page: d.ZY5.IN_APP,
                                  section: d.jXE.NOTIFICATION_BAR,
                                  object: d.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case u.Si.TIER_0:
                                  return m.intl.string(m.t.mCG029);
                              case u.Si.TIER_2:
                                  return m.intl.string(m.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(h)
                  })
              ]
          });
};
