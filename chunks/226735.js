"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("191145"),
  r = n("243288"),
  o = n("769928"),
  u = n("321135"),
  d = n("976074"),
  c = n("639537"),
  f = n("99795"),
  h = n("782340");

function m(e) {
  let {
    channelId: t,
    onClose: n,
    appContext: m,
    exitFullScreen: p,
    onSelect: E
  } = e, S = (0, a.useStateFromStores)([i.default], () => i.default.getSelectedParticipant(t)), g = (null == S ? void 0 : S.type) === f.ParticipantTypes.STREAM ? S.stream : null, C = (0, r.default)(t), _ = (0, u.default)(), I = (0, o.default)(t), T = (0, c.default)(t);
  return (0, l.jsxs)(s.Menu, {
    navId: "channel-call-overflow-popout",
    onClose: n,
    "aria-label": h.default.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
    onSelect: E,
    children: [C, _, I, T, (0, d.default)(g, m, p)]
  })
}