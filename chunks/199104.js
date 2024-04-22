"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("524437"),
  i = a("481060"),
  r = a("410575"),
  o = a("100527"),
  u = a("906732"),
  d = a("243778"),
  c = a("352455"),
  f = a("480294"),
  E = a("153124"),
  h = a("791359"),
  _ = a("981631"),
  C = a("689938"),
  m = a("333130");

function S() {
  let {
    analyticsLocations: e
  } = (0, u.default)(o.default.ACTIVE_NOW_COLUMN), t = (0, s.useStateFromStores)([f.default], () => f.default.hasConsented(_.Consents.PERSONALIZATION)) ? [] : [l.DismissibleContent.NOW_PLAYING_CONSENT_CARD], a = (0, E.useUID)();
  return (0, n.jsx)(u.AnalyticsLocationProvider, {
    value: e,
    children: (0, n.jsx)(r.default, {
      section: _.AnalyticsSections.ACTIVE_NOW_COLUMN,
      children: (0, n.jsx)("aside", {
        className: m.container,
        "aria-labelledby": a,
        children: (0, n.jsxs)(i.Scroller, {
          className: m.scroller,
          children: [(0, n.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: m.header,
            id: a,
            children: C.default.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, n.jsx)(d.default, {
            contentTypes: t,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: a
              } = e;
              if (t === l.DismissibleContent.NOW_PLAYING_CONSENT_CARD) return (0, n.jsx)(c.default, {
                className: m.__invalid_consentCard,
                markAsDismissed: a
              })
            }
          }), (0, n.jsx)(h.default, {})]
        })
      })
    })
  })
}