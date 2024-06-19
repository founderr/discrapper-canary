t.d(e, {
  Z: function() {
    return u
  }
});
var o = t(735250);
t(470079);
var i = t(481060),
  r = t(63063),
  s = t(921869),
  C = t(514161),
  c = t(981631),
  a = t(689938),
  l = t(233820);

function d() {
  return (0, o.jsx)(C.yC, {
    children: (0, o.jsx)(C.Ux, {
      text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
      children: (0, o.jsx)(i.TvIcon, {
        size: "md",
        color: "currentColor"
      })
    })
  })
}

function u(n) {
  let {
    onContinue: e,
    onClose: t
  } = n, i = r.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(s.m, {
    platformType: c.ABu.CRUNCHYROLL,
    headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
    body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
    learnMoreLink: i,
    onClose: t,
    onContinue: e,
    img: (0, o.jsx)("img", {
      src: l,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(d, {})
  })
}