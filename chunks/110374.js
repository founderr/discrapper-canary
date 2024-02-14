"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
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
  f = l("601131"),
  E = l("876725"),
  _ = l("367989"),
  T = l("891603"),
  M = l("510692"),
  v = l("49111"),
  g = l("782340");

function m(e) {
  let {
    guildEventId: t,
    recurrenceId: l,
    channel: m,
    guild: I,
    analyticsContext: N,
    isRecurrenceItem: R = !1,
    onSelect: S
  } = e, D = (0, _.default)({
    guildEventId: t,
    recurrenceId: l,
    guild: I,
    channel: m
  }), C = (0, o.default)({
    guildEventId: t,
    recurrenceId: l,
    guild: I,
    channel: m
  }), O = (0, c.default)({
    guildEventId: t,
    guild: I,
    channel: m,
    recurrenceId: l,
    isRecurrenceItem: R
  }), h = (0, f.default)(t, I, m), p = (0, M.default)(t, I, m), x = (0, i.default)(t, I.id, l), L = (0, E.default)(t), b = (0, d.default)({
    id: null != l ? l : t,
    label: g.default.Messages.COPY_ID_EVENT
  }), A = (0, r.default)(t, I.id, m, l), V = (0, T.default)({
    guildEventId: t,
    guildId: I.id,
    recurrenceId: l
  });
  return (0, n.jsx)(s.default, {
    context: N,
    object: v.AnalyticsObjects.CONTEXT_MENU,
    children: (0, n.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: S,
      children: [(0, n.jsxs)(a.MenuGroup, {
        children: [A, !R && p, O, !R && h, C, D, x, R && V]
      }), !R && (0, n.jsx)(a.MenuGroup, {
        children: L
      }), (0, n.jsx)(a.MenuGroup, {
        children: b
      })]
    })
  })
}