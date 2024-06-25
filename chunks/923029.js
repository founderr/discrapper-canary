n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250),
  i = n(470079),
  s = n(873546),
  a = n(442837),
  r = n(481060),
  o = n(911560),
  c = n(210887),
  u = n(914010),
  d = n(502568),
  h = n(981631),
  m = n(689938),
  E = n(676821);

function p(e) {
  let t, {
    channelId: p
  } = e;
  i.useEffect(() => {
    o.Z.loadThread(p)
  });
  let g = (0, a.e7)([u.Z], () => u.Z.getGuildId()) === h.I_8,
    f = (0, a.e7)([c.Z], () => c.Z.theme);
  return t = g ? (0, l.jsx)(r.EmptyStateText, {
    note: m.Z.Messages.FAVORITES_EMPTY_BODY,
    children: m.Z.Messages.FAVORITES_EMPTY_TITLE
  }) : null != p ? (0, l.jsx)(r.Spinner, {
    type: r.Spinner.Type.SPINNING_CIRCLE
  }) : (0, l.jsx)(r.EmptyStateText, {
    note: m.Z.Messages.CHANNELS_UNAVAILABLE_BODY,
    children: m.Z.Messages.CHANNELS_UNAVAILABLE_TITLE
  }), (0, l.jsxs)("div", {
    className: E.noChannel,
    children: [s.tq && (0, l.jsx)(d.ZP, {
      children: (0, l.jsx)(i.Fragment, {})
    }), (0, l.jsxs)(r.EmptyState, {
      theme: f,
      children: [(0, l.jsx)(r.EmptyStateImage, {
        darkSrc: g ? n(691270) : n(625065),
        lightSrc: g ? n(704139) : n(875184),
        width: 272,
        height: 222
      }), t]
    })]
  })
}