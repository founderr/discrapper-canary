var s = n(735250);
n(470079);
var i = n(481060),
  l = n(230711),
  a = n(985754),
  r = n(91802),
  o = n(222727),
  c = n(981631),
  u = n(921944),
  d = n(689938),
  E = n(596791);
t.Z = e => {
  let {
    notice: t,
    noticeType: n,
    dismissCurrentNotice: _
  } = e, I = (null == t ? void 0 : t.metadata.premiumSubscription) != null, T = (0, r.n)();
  if ((0, o.U)(c.jXE.NOTIFICATION_BAR, null == T ? void 0 : T.countryCode), null == T) return null;
  let N = T.countryCode,
    m = T.currency,
    h = T.paymentSourceTypes.length > 0;
  return (0, s.jsxs)(i.Notice, {
    color: I ? i.NoticeColors.BRAND : i.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: () => _(u.L.UNKNOWN),
      noticeType: n
    }), !I && (0, s.jsx)(i.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: E.premiumIcon
    }), (0, a.Gv)(N, m, h, I), (0, s.jsx)(i.PrimaryCTANoticeButton, {
      onClick: () => {
        _(u.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM)
      },
      noticeType: n,
      children: d.Z.Messages.LEARN_MORE
    })]
  })
}