"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var o = t("735250");
t("470079");
var i = t("199202"),
  s = t("63063"),
  r = t("921869"),
  a = t("514161"),
  l = t("981631"),
  C = t("689938"),
  d = t("233820");

function u() {
  return (0, o.jsx)(a.ValuePropContainer, {
    children: (0, o.jsx)(a.ValueProp, {
      text: C.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
      children: (0, o.jsx)(i.default, {})
    })
  })
}

function c(e) {
  let {
    onContinue: n,
    onClose: t
  } = e, i = s.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(r.TwoWayLinkLanding, {
    platformType: l.PlatformTypes.CRUNCHYROLL,
    headerConnect: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
    body: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
    learnMoreLink: i,
    onClose: t,
    onContinue: n,
    img: (0, o.jsx)("img", {
      src: d,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(u, {})
  })
}