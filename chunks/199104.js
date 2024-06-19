n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
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
  g = n(966073);

function p() {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN), t = (0, s.e7)([E.Z], () => E.Z.hasConsented(I.pjP.PERSONALIZATION)) ? [] : [l.z.NOW_PLAYING_CONSENT_CARD], n = (0, h.Dt)();
  return (0, i.jsx)(c.Gt, {
    value: e,
    children: (0, i.jsx)(r.Z, {
      section: I.jXE.ACTIVE_NOW_COLUMN,
      children: (0, i.jsx)("aside", {
        className: g.container,
        "aria-labelledby": n,
        children: (0, i.jsxs)(a.Scroller, {
          className: g.scroller,
          children: [(0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            className: g.header,
            id: n,
            children: m.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, i.jsx)(u.Z, {
            contentTypes: t,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === l.z.NOW_PLAYING_CONSENT_CARD) return (0, i.jsx)(d.Z, {
                className: g.__invalid_consentCard,
                markAsDismissed: n
              })
            }
          }), (0, i.jsx)(_.Z, {})]
        })
      })
    })
  })
}