"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
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
  c = n("689938");

function E(e) {
  let {
    guildEventId: t,
    guild: E,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: S
  } = (0, d.useManageResourcePermissions)(null != f ? f : E), N = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(t)), v = S(N), g = (0, o.default)(), I = (0, i.default)(_, null == N ? void 0 : N.id), M = (0, r.default)(t, _);
  if (!v || null == N) return null;
  let m = null != N.recurrence_rule && !T,
    h = e => {
      (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58023"), n.e("10045")]).then(n.bind(n, "779250"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: E.id
        })
      }, g) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("27919")]).then(n.bind(n, "379038"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: N,
          recurrenceId: _
        })
      }, g)
    };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.EDIT_EVENT,
    label: c.default.Messages.EDIT_EVENT,
    action: m ? void 0 : () => h(!0),
    children: m && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_THIS_EVENT,
        label: c.default.Messages.EDIT_THIS_EVENT,
        action: () => h(!1),
        disabled: (null == I ? void 0 : I.is_canceled) || M.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => h(!0),
        disabled: new Date(N.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}