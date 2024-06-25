n.d(t, {
  Z: function() {
    return g
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(704215),
  a = n(481060),
  r = n(410575),
  o = n(100527),
  c = n(906732),
  u = n(243778),
  d = n(352455),
  E = n(480294),
  h = n(153124),
  _ = n(791359),
  I = n(981631),
  m = n(689938),
  T = n(966073);

function g() {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN), t = (0, i.e7)([E.Z], () => E.Z.hasConsented(I.pjP.PERSONALIZATION)) ? [] : [l.z.NOW_PLAYING_CONSENT_CARD], n = (0, h.Dt)();
  return (0, s.jsx)(c.Gt, {
    value: e,
    children: (0, s.jsx)(r.Z, {
      section: I.jXE.ACTIVE_NOW_COLUMN,
      children: (0, s.jsx)("aside", {
        className: T.container,
        "aria-labelledby": n,
        children: (0, s.jsxs)(a.Scroller, {
          className: T.scroller,
          children: [(0, s.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            className: T.header,
            id: n,
            children: m.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, s.jsx)(u.Z, {
            contentTypes: t,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === l.z.NOW_PLAYING_CONSENT_CARD) return (0, s.jsx)(d.Z, {
                className: T.__invalid_consentCard,
                markAsDismissed: n
              })
            }
          }), (0, s.jsx)(_.Z, {})]
        })
      })
    })
  })
}