"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("817963"),
  d = l("398604"),
  r = l("397680"),
  i = l("466148"),
  o = l("842672"),
  c = l("782340");

function f(e) {
  let {
    guildEventId: t,
    guild: f,
    channel: E,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: M
  } = (0, s.useManageResourcePermissions)(null != E ? E : f), v = (0, a.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(t)), g = M(v), I = (0, o.default)(), m = (0, r.default)(_, null == v ? void 0 : v.id), N = (0, i.default)(t, _);
  if (!g || null == v) return null;
  let R = null != v.recurrence_rule && !T,
    S = e => {
      (null == _ || e) && !T ? (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("590942").then(l.bind(l, "590942"));
        return l => (0, n.jsx)(e, {
          ...l,
          guildScheduledEventId: t,
          guildId: f.id
        })
      }, I) : null != _ && (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("229798").then(l.bind(l, "229798"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildEvent: v,
          recurrenceId: _
        })
      }, I)
    };
  return (0, n.jsx)(u.MenuItem, {
    id: c.default.Messages.EDIT_EVENT,
    label: c.default.Messages.EDIT_EVENT,
    action: R ? void 0 : () => S(!0),
    children: R && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.MenuItem, {
        id: c.default.Messages.EDIT_THIS_EVENT,
        label: c.default.Messages.EDIT_THIS_EVENT,
        action: () => S(!1),
        disabled: (null == m ? void 0 : m.is_canceled) || N.startTime.getTime() < Date.now()
      }), (0, n.jsx)(u.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => S(!0),
        disabled: new Date(v.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}