"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("817963"),
  d = n("398604"),
  r = n("397680"),
  s = n("466148"),
  o = n("842672"),
  c = n("782340");

function E(e) {
  let {
    guildEventId: t,
    guild: E,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: v
  } = (0, i.useManageResourcePermissions)(null != f ? f : E), S = (0, u.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(t)), g = v(S), I = (0, o.default)(), N = (0, r.default)(_, null == S ? void 0 : S.id), m = (0, s.default)(t, _);
  if (!g || null == S) return null;
  let h = null != S.recurrence_rule && !T,
    M = e => {
      (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("590942").then(n.bind(n, "590942"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: E.id
        })
      }, I) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("229798").then(n.bind(n, "229798"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: S,
          recurrenceId: _
        })
      }, I)
    };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.EDIT_EVENT,
    label: c.default.Messages.EDIT_EVENT,
    action: h ? void 0 : () => M(!0),
    children: h && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_THIS_EVENT,
        label: c.default.Messages.EDIT_THIS_EVENT,
        action: () => M(!1),
        disabled: (null == N ? void 0 : N.is_canceled) || m.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => M(!0),
        disabled: new Date(S.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}