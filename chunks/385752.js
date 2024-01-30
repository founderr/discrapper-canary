"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("817963"),
  i = n("398604"),
  r = n("322224"),
  s = n("397680"),
  o = n("466148"),
  c = n("782340");

function E(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: E,
    channel: f
  } = e, _ = null != n, {
    canManageGuildEvent: T
  } = (0, d.useManageResourcePermissions)(null != f ? f : E), [S, v] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isActive(t), i.default.getGuildScheduledEvent(t)]), g = (0, s.default)(n, null == v ? void 0 : v.id), I = null != v && T(v), N = (null == v ? void 0 : v.recurrence_rule) != null && !_, {
    startTime: m
  } = (0, o.default)(t, n);
  if (!I || S && !N && !_ || _ && !_ || null == v) return null;
  if (S && _) {
    var h;
    if (null == m) return null;
    let e = new Date(null !== (h = null == g ? void 0 : g.scheduled_start_time) && void 0 !== h ? h : m);
    if (new Date > e) return null
  }
  let M = e => {
    (0, a.openModal)(u => (0, l.jsxs)(a.ConfirmModal, {
      ...u,
      header: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
      confirmText: N || e ? c.default.Messages.DELETE_ALL_EVENTS : c.default.Messages.DELETE_EVENT,
      cancelText: c.default.Messages.NEVERMIND,
      onConfirm: () => _ && !e ? r.default.deleteRecurrence(E.id, t, n, g) : r.default.deleteGuildEvent(t, E.id),
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
      }), (0, l.jsx)("br", {}), (N || e) && (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
      })]
    }))
  };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.DELETE_EVENT,
    label: c.default.Messages.DELETE_EVENT,
    action: _ ? void 0 : () => M(),
    color: "danger",
    children: _ && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.DELETE_THIS_EVENT,
        label: c.default.Messages.DELETE_THIS_EVENT,
        action: () => M(),
        disabled: null == g ? void 0 : g.is_canceled,
        color: "danger"
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        label: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        action: () => M(!0),
        color: "danger"
      })]
    })
  })
}