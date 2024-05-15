"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  g = n("689938");

function I(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    channel: I,
    guild: v,
    analyticsContext: m,
    isRecurrenceItem: M = !1,
    onSelect: D
  } = e, O = (0, _.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: v,
    channel: I
  }), h = (0, o.default)({
    guildEventId: t,
    recurrenceId: n,
    guild: v,
    channel: I
  }), p = (0, E.default)({
    guildEventId: t,
    guild: v,
    channel: I,
    recurrenceId: n,
    isRecurrenceItem: M
  }), R = (0, c.default)(t, v, I), A = (0, S.default)(t, v, I), C = (0, r.default)(t, v.id, n), L = (0, f.default)(t), G = (0, s.default)({
    id: t,
    label: g.default.Messages.COPY_ID_EVENT
  }), P = (0, s.default)({
    id: n,
    label: g.default.Messages.COPY_ID_EVENT_RECURRENCE
  }), y = (0, i.default)(t, v.id, I, n), U = (0, T.default)({
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
      "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: D,
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [y, !M && A, p, !M && R, h, O, C, M && U]
      }), !M && (0, l.jsx)(u.MenuGroup, {
        children: L
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [G, P]
      })]
    })
  })
}