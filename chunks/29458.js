var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(594174),
  r = n(853197),
  o = n(921944),
  c = n(689938),
  u = n(703422);
t.Z = e => {
  var t;
  let {
    noticeType: n,
    markAsDismissed: d,
    partnerGame: E
  } = e, _ = (0, i.e7)([a.default], () => a.default.getCurrentUser());
  if (null == E) return null;
  let I = (0, r.BS)(E);
  if (null == I) return null;
  let T = "https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id=".concat(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : "");
  return (0, s.jsxs)(l.Notice, {
    className: u.colorGuildBlue,
    children: [c.Z.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({
      gameTitle: I.title
    }), (0, s.jsx)(l.NoticeButtonAnchor, {
      href: T,
      target: "_blank",
      onClick: () => {
        d(o.L.PRIMARY)
      },
      children: c.Z.Messages.DROPS_FEEDBACK_SURVEY
    }), (0, s.jsx)(l.NoticeCloseButton, {
      onClick: () => {
        d(o.L.DISMISS)
      },
      noticeType: n
    })]
  })
}