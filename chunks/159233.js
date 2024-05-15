"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  d = n("889161"),
  s = n("924301"),
  i = n("894017"),
  r = n("79874"),
  o = n("576749"),
  E = n("689938");

function c(e) {
  let {
    guildEventId: t,
    guild: c,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: S
  } = (0, d.useManageResourcePermissions)(null != f ? f : c), N = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(t)), g = S(N), I = (0, o.default)(), v = (0, i.default)(_, null == N ? void 0 : N.id), m = (0, r.default)(t, _);
  if (!g || null == N) return null;
  let M = null != N.recurrence_rule && !T,
    D = e => {
      (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58023"), n.e("89413")]).then(n.bind(n, "779250"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: c.id
        })
      }, I) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("27919")]).then(n.bind(n, "379038"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: N,
          recurrenceId: _
        })
      }, I)
    };
  return (0, l.jsx)(a.MenuItem, {
    id: E.default.Messages.EDIT_EVENT,
    label: E.default.Messages.EDIT_EVENT,
    action: M ? void 0 : () => D(!0),
    children: M && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: E.default.Messages.EDIT_THIS_EVENT,
        label: E.default.Messages.EDIT_THIS_EVENT,
        action: () => D(!1),
        disabled: (null == v ? void 0 : v.is_canceled) || m.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: E.default.Messages.EDIT_ALL_EVENTS,
        label: E.default.Messages.EDIT_ALL_EVENTS,
        action: () => D(!0),
        disabled: new Date(N.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}