"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var o = t("735250");
t("470079");
var i = t("481060"),
  s = t("63063"),
  r = t("376340"),
  a = t("981631"),
  l = t("689938"),
  C = t("877551"),
  d = t("38920");

function u() {
  return (0, o.jsx)("div", {
    className: C.__invalid_getCrunchyrollApp,
    children: (0, o.jsx)("div", {
      className: C.__invalid_getCrunchyrollAppBody,
      children: (0, o.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, o.jsx)(i.Anchor, {
          href: s.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
          children: l.default.Messages.LEARN_MORE
        })
      })
    })
  })
}

function c(e) {
  let {
    onClose: n
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
    onClose: n
  })
}