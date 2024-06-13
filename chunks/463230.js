"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("230711"),
  i = n("466111"),
  r = n("985754"),
  o = n("91802"),
  u = n("222727"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("229647");
t.default = e => {
  let {
    notice: t,
    noticeType: n,
    dismissCurrentNotice: _
  } = e, T = (null == t ? void 0 : t.metadata.premiumSubscription) != null, m = (0, o.useLocalizedPromoQuery)();
  if ((0, u.useTrackLocalizedPricingPromoImpression)(d.AnalyticsSections.NOTIFICATION_BAR, null == m ? void 0 : m.countryCode), null == m) return null;
  let I = m.countryCode,
    N = m.currency,
    p = m.paymentSourceTypes.length > 0;
  return (0, s.jsxs)(a.Notice, {
    color: T ? a.NoticeColors.BRAND : a.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(a.NoticeCloseButton, {
      onClick: () => _(c.ContentDismissActionType.UNKNOWN),
      noticeType: n
    }), !T && (0, s.jsx)(i.default, {
      className: E.premiumIcon
    }), (0, r.getLocalizedPricingNotice)(I, N, p, T), (0, s.jsx)(a.PrimaryCTANoticeButton, {
      onClick: () => {
        _(c.ContentDismissActionType.UNKNOWN), l.default.open(d.UserSettingsSections.PREMIUM)
      },
      noticeType: n,
      children: f.default.Messages.LEARN_MORE
    })]
  })
}