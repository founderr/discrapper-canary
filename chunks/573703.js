"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var o = n("735250");
n("470079");
var s = n("481060"),
  i = n("63063"),
  r = n("376340"),
  a = n("981631"),
  l = n("689938"),
  C = n("877551"),
  d = n("38920");

function u() {
  return (0, o.jsx)("div", {
    className: C.__invalid_getCrunchyrollApp,
    children: (0, o.jsx)("div", {
      className: C.__invalid_getCrunchyrollAppBody,
      children: (0, o.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, o.jsx)(s.Anchor, {
          href: i.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
          children: l.default.Messages.LEARN_MORE
        })
      })
    })
  })
}

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, o.jsx)(r.TwoWayLinkSuccess, {
    img: (0, o.jsx)("img", {
      src: d,
      width: "224",
      height: "104",
      alt: ""
    }),
    title: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
    body: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
    content: (0, o.jsx)(u, {}),
    onClose: t
  })
}