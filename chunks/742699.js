t.d(e, {
  Z: function() {
return d;
  }
});
var o = t(735250);
t(470079);
var r = t(481060),
  i = t(63063),
  s = t(921869),
  c = t(514161),
  l = t(981631),
  a = t(689938),
  C = t(233820);

function u() {
  return (0, o.jsx)(c.yC, {
children: (0, o.jsx)(c.Ux, {
  text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
  children: (0, o.jsx)(r.TvIcon, {
    size: 'md',
    color: 'currentColor'
  })
})
  });
}

function d(n) {
  let {
onContinue: e,
onClose: t
  } = n, r = i.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(s.m, {
platformType: l.ABu.CRUNCHYROLL,
headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
learnMoreLink: r,
onClose: t,
onContinue: e,
img: (0, o.jsx)('img', {
  src: C,
  width: 234,
  height: 152,
  alt: ''
}),
valueProps: (0, o.jsx)(u, {})
  });
}