n(411104);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(774078),
    a = n(100527),
    o = n(906732),
    s = n(963249),
    c = n(639119),
    d = n(474936),
    u = n(981631),
    m = n(388032),
    h = n(411605);
t.Z = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: f } = e,
        { analyticsLocations: p } = (0, o.ZP)(
            (function (e) {
                switch (e) {
                    case d.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case d.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(f)
        ),
        _ = (0, c.N)(),
        g = (0, l.Z)(null != _ && null != _.expires_at ? Date.parse(_.expires_at) : 0);
    return null == _ || (null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== f || null == _.expires_at || Object.values(g).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(r.Notice, {
              color: (function (e) {
                  switch (e) {
                      case d.Si.TIER_0:
                          return r.NoticeColors.PREMIUM_TIER_0;
                      case d.Si.TIER_2:
                          return r.NoticeColors.PREMIUM_TIER_2;
                      default:
                          throw Error('Unsupported subscription tier: '.concat(e));
                  }
              })(f),
              children: [
                  (0, i.jsx)(r.NoticeCloseButton, { onClick: n }),
                  (0, i.jsx)(r.NitroWheelIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: h.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case d.Si.TIER_0:
                              return t.days > 0 ? m.intl.formatToPlainString(m.t.sP5OqK, { days: t.days }) : t.hours > 0 ? m.intl.formatToPlainString(m.t['7Lhfu7'], { hours: t.hours }) : m.intl.formatToPlainString(m.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case d.Si.TIER_2:
                              return t.days > 0 ? m.intl.formatToPlainString(m.t['4prs5e'], { days: t.days }) : t.hours > 0 ? m.intl.formatToPlainString(m.t.OD5nIS, { hours: t.hours }) : m.intl.formatToPlainString(m.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(f, g),
                  (0, i.jsx)(r.NoticeButton, {
                      onClick: () => {
                          (0, s.Z)({
                              trialId: _.trial_id,
                              subscriptionTier: f,
                              analyticsLocations: p,
                              analyticsObject: {
                                  page: u.ZY5.IN_APP,
                                  section: u.jXE.NOTIFICATION_BAR,
                                  object: u.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case d.Si.TIER_0:
                                  return m.intl.string(m.t.mCG029);
                              case d.Si.TIER_2:
                                  return m.intl.string(m.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(f)
                  })
              ]
          });
};
