"use strict";
t.r(n), t.d(n, {
  PlayStationLinkLanding: function() {
    return T
  }
});
var i = t("735250");
t("470079");
var o = t("362470"),
  s = t("961842"),
  a = t("63063"),
  r = t("921869"),
  l = t("514161"),
  d = t("981631"),
  c = t("689938"),
  u = t("913045");

function C() {
  let e = [c.default.Messages.PS_VALUE_PROP_VOICE, c.default.Messages.PS_VALUE_PROP_GAME],
    n = [c.default.Messages.PS_VALUE_PROP_GAME];
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(s.default, {}),
        title: c.default.Messages.PS5,
        bulletPoints: e
      })
    }), (0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(o.default, {}),
        title: c.default.Messages.PS4,
        bulletPoints: n
      })
    })]
  })
}

function T(e) {
  let {
    platformType: n,
    onContinue: t,
    onClose: o
  } = e;
  return (0, i.jsx)(r.TwoWayLinkLanding, {
    platformType: n,
    headerConnect: c.default.Messages.CONNECT_PS_LANDING_TITLE,
    headerReconnect: c.default.Messages.RECONNECT_PS_LANDING_TITLE,
    body: c.default.Messages.CONNECT_PS_LANDING_BODY,
    onClose: o,
    onContinue: t,
    img: (0, i.jsx)("img", {
      src: u,
      width: 230,
      height: 138,
      alt: ""
    }),
    valueProps: (0, i.jsx)(C, {}),
    learnMoreLink: a.default.getArticleURL(d.HelpdeskArticles.PS_CONNECTION)
  })
}