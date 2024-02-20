"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  u = l("272030"),
  s = l("901582"),
  d = l("861370"),
  r = l("455933"),
  i = l("248900"),
  o = l("385752"),
  c = l("222971"),
  E = l("601131"),
  f = l("876725"),
  _ = l("367989"),
  T = l("891603"),
  M = l("510692"),
  v = l("49111"),
  I = l("782340");

function g(e) {
  let {
    guildEventId: t,
    recurrenceId: l,
    channel: g,
    guild: m,
    analyticsContext: N,
    isRecurrenceItem: R = !1,
    onSelect: S
  } = e, D = (0, _.default)({
    guildEventId: t,
    recurrenceId: l,
    guild: m,
    channel: g
  }), C = (0, o.default)({
    guildEventId: t,
    recurrenceId: l,
    guild: m,
    channel: g
  }), O = (0, c.default)({
    guildEventId: t,
    guild: m,
    channel: g,
    recurrenceId: l,
    isRecurrenceItem: R
  }), h = (0, E.default)(t, m, g), p = (0, M.default)(t, m, g), x = (0, i.default)(t, m.id, l), L = (0, f.default)(t), b = (0, d.default)({
    id: t,
    label: I.default.Messages.COPY_ID_EVENT
  }), A = (0, d.default)({
    id: l,
    label: I.default.Messages.COPY_ID_EVENT_RECURRENCE
  }), V = (0, r.default)(t, m.id, g, l), j = (0, T.default)({
    guildEventId: t,
    guildId: m.id,
    recurrenceId: l
  });
  return (0, n.jsx)(s.default, {
    context: N,
    object: v.AnalyticsObjects.CONTEXT_MENU,
    children: (0, n.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: S,
      children: [(0, n.jsxs)(a.MenuGroup, {
        children: [V, !R && p, O, !R && h, C, D, x, R && j]
      }), !R && (0, n.jsx)(a.MenuGroup, {
        children: L
      }), (0, n.jsxs)(a.MenuGroup, {
        children: [b, A]
      })]
    })
  })
}