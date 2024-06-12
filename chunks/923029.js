"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("911560"),
  u = n("210887"),
  d = n("914010"),
  c = n("502568"),
  f = n("981631"),
  h = n("689938"),
  m = n("263734");

function p(e) {
  let t, {
    channelId: p
  } = e;
  l.useEffect(() => {
    o.default.loadThread(p)
  });
  let E = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()) === f.FAVORITES,
    g = (0, i.useStateFromStores)([u.default], () => u.default.theme);
  return t = E ? (0, a.jsx)(r.EmptyStateText, {
    note: h.default.Messages.FAVORITES_EMPTY_BODY,
    children: h.default.Messages.FAVORITES_EMPTY_TITLE
  }) : null != p ? (0, a.jsx)(r.Spinner, {
    type: r.Spinner.Type.SPINNING_CIRCLE
  }) : (0, a.jsx)(r.EmptyStateText, {
    note: h.default.Messages.CHANNELS_UNAVAILABLE_BODY,
    children: h.default.Messages.CHANNELS_UNAVAILABLE_TITLE
  }), (0, a.jsxs)("div", {
    className: m.noChannel,
    children: [s.isMobile && (0, a.jsx)(c.default, {
      children: (0, a.jsx)(l.Fragment, {})
    }), (0, a.jsxs)(r.EmptyState, {
      theme: g,
      children: [(0, a.jsx)(r.EmptyStateImage, {
        darkSrc: E ? n("691270") : n("625065"),
        lightSrc: E ? n("704139") : n("875184"),
        width: 272,
        height: 222
      }), t]
    })]
  })
}