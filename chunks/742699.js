"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var o = n("735250");
n("470079");
var s = n("199202"),
  i = n("63063"),
  r = n("921869"),
  a = n("514161"),
  l = n("981631"),
  C = n("689938"),
  d = n("233820");

function u() {
  return (0, o.jsx)(a.ValuePropContainer, {
    children: (0, o.jsx)(a.ValueProp, {
      text: C.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
      children: (0, o.jsx)(s.default, {})
    })
  })
}

function c(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, s = i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(r.TwoWayLinkLanding, {
    platformType: l.PlatformTypes.CRUNCHYROLL,
    headerConnect: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
    body: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
    learnMoreLink: s,
    onClose: n,
    onContinue: t,
    img: (0, o.jsx)("img", {
      src: d,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(u, {})
  })
}