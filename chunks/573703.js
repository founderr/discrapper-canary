t.d(e, {
  Z: function() {
    return u
  }
});
var o = t(735250);
t(470079);
var i = t(481060),
  r = t(63063),
  s = t(376340),
  C = t(981631),
  c = t(689938),
  a = t(414457),
  l = t(38920);

function d() {
  return (0, o.jsx)("div", {
    className: a.__invalid_getCrunchyrollApp,
    children: (0, o.jsx)("div", {
      className: a.__invalid_getCrunchyrollAppBody,
      children: (0, o.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, o.jsx)(i.Anchor, {
          href: r.Z.getArticleURL(C.BhN.CRUNCHYROLL_CONNECTION),
          children: c.Z.Messages.LEARN_MORE
        })
      })
    })
  })
}

function u(n) {
  let {
    onClose: e
  } = n;
  return (0, o.jsx)(s.L, {
    img: (0, o.jsx)("img", {
      src: l,
      width: "224",
      height: "104",
      alt: ""
    }),
    title: c.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
    body: c.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
    content: (0, o.jsx)(d, {}),
    onClose: e
  })
}