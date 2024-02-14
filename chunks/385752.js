"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("222007");
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("817963"),
  d = l("398604"),
  r = l("322224"),
  i = l("397680"),
  o = l("466148"),
  c = l("782340");

function f(e) {
  let {
    guildEventId: t,
    recurrenceId: l,
    guild: f,
    channel: E
  } = e, _ = null != l, {
    canManageGuildEvent: T
  } = (0, s.useManageResourcePermissions)(null != E ? E : f), [M, v] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), g = (0, i.default)(l, null == v ? void 0 : v.id), m = null != v && T(v), I = (null == v ? void 0 : v.recurrence_rule) != null && !_, {
    startTime: N
  } = (0, o.default)(t, l);
  if (!m || M && !I && !_ || _ && !_ || null == v) return null;
  if (M && _) {
    var R;
    if (null == N) return null;
    let e = new Date(null !== (R = null == g ? void 0 : g.scheduled_start_time) && void 0 !== R ? R : N);
    if (new Date > e) return null
  }
  let S = e => {
    (0, u.openModal)(a => (0, n.jsxs)(u.ConfirmModal, {
      ...a,
      header: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
      confirmText: I || e ? c.default.Messages.DELETE_ALL_EVENTS : c.default.Messages.DELETE_EVENT,
      cancelText: c.default.Messages.NEVERMIND,
      onConfirm: () => _ && !e ? r.default.deleteRecurrence(f.id, t, l, g) : r.default.deleteGuildEvent(t, f.id),
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
      }), (0, n.jsx)("br", {}), (I || e) && (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
      })]
    }))
  };
  return (0, n.jsx)(u.MenuItem, {
    id: c.default.Messages.DELETE_EVENT,
    label: c.default.Messages.DELETE_EVENT,
    action: _ ? void 0 : () => S(),
    color: "danger",
    children: _ && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.MenuItem, {
        id: c.default.Messages.DELETE_THIS_EVENT,
        label: c.default.Messages.DELETE_THIS_EVENT,
        action: () => S(),
        disabled: null == g ? void 0 : g.is_canceled,
        color: "danger"
      }), (0, n.jsx)(u.MenuItem, {
        id: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        label: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        action: () => S(!0),
        color: "danger"
      })]
    })
  })
}