t.d(e, {
  Z: function() {
return d;
  }
});
var o = t(735250);
t(470079);
var r = t(481060),
  i = t(63063),
  s = t(376340),
  c = t(981631),
  l = t(689938),
  a = t(80069),
  C = t(38920);

function u() {
  return (0, o.jsx)('div', {
className: a.__invalid_getCrunchyrollApp,
children: (0, o.jsx)('div', {
  className: a.__invalid_getCrunchyrollAppBody,
  children: (0, o.jsx)(r.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    children: (0, o.jsx)(r.Anchor, {
      href: i.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION),
      children: l.Z.Messages.LEARN_MORE
    })
  })
})
  });
}

function d(n) {
  let {
onClose: e
  } = n;
  return (0, o.jsx)(s.L, {
img: (0, o.jsx)('img', {
  src: C,
  width: '224',
  height: '104',
  alt: ''
}),
title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
content: (0, o.jsx)(u, {}),
onClose: e
  });
}