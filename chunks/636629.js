var s = n(735250);
n(470079);
var i = n(913527),
  l = n.n(i),
  a = n(481060),
  r = n(730417),
  o = n(921944),
  c = n(689938),
  u = n(983209);
let d = (e, t) => ({
  bodyText: c.Z.Messages.DROPS_BANNER_NOTICE.format({
    gameName: e.title,
    endDate: l()(e.endDate, "YYYY-MM-DD HH:mm").format("MMM Do"),
    streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
t.Z = e => {
  let {
    noticeType: t,
    markAsDismissed: n,
    partnerGame: i
  } = e, l = (0, r.au)(i);
  if (null == l) return null;
  let {
    bodyText: E,
    articleUrl: _
  } = d(l.drop, l.config.streamLengthRequirement);
  return (0, s.jsxs)(a.Notice, {
    className: u.colorGuildBlue,
    children: [E, (0, s.jsx)(a.NoticeButtonAnchor, {
      href: _,
      target: "_blank",
      onClick: () => {
        n(o.L.PRIMARY)
      },
      children: c.Z.Messages.LEARN_MORE
    }), (0, s.jsx)(a.NoticeCloseButton, {
      onClick: () => {
        n(o.L.DISMISS)
      },
      noticeType: t
    })]
  })
}