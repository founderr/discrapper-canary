"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  a = n("239091"),
  d = n("410575"),
  s = n("299206"),
  i = n("70877"),
  r = n("572427"),
  o = n("231259"),
  E = n("159233"),
  c = n("924952"),
  f = n("99528"),
  _ = n("830394"),
  T = n("473545"),
  S = n("124422"),
  N = n("981631"),
  I = n("689938");

function g(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    channel: g,
    guild: v,
    analyticsContext: m,
    isRecurrenceItem: M = !1,
    onSelect: D
  } = e, h = (0, _.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: v,
    channel: g
  }), O = (0, o.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: v,
    channel: g
  }), p = (0, E.default)({
    guildEventId: t,
    guild: v,
    channel: g,
    recurrenceId: n,
    isRecurrenceItem: M
  }), R = (0, c.default)(t, v, g), A = (0, S.default)(t, v, g), C = (0, r.default)(t, v.id, n), L = (0, f.default)(t), G = (0, s.default)({
    id: t,
    label: I.default.Messages.COPY_ID_EVENT
  }), y = (0, s.default)({
    id: n,
    label: I.default.Messages.COPY_ID_EVENT_RECURRENCE
  }), P = (0, i.default)(t, v.id, g, n), U = (0, T.default)({
    guildEventId: t,
    guildId: v.id,
    recurrenceId: n
  });
  return (0, l.jsx)(d.default, {
    context: m,
    object: N.AnalyticsObjects.CONTEXT_MENU,
    children: (0, l.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: D,
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [P, !M && A, p, !M && R, O, h, C, M && U]
      }), !M && (0, l.jsx)(u.MenuGroup, {
        children: L
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [G, y]
      })]
    })
  })
}