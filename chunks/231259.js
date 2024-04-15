"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  d = n("889161"),
  s = n("924301"),
  i = n("482241"),
  r = n("894017"),
  o = n("79874"),
  c = n("689938");

function E(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: E,
    channel: f
  } = e, _ = null != n, {
    canManageGuildEvent: T
  } = (0, d.useManageResourcePermissions)(null != f ? f : E), [S, N] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), v = (0, r.default)(n, null == N ? void 0 : N.id), g = null != N && T(N), I = (null == N ? void 0 : N.recurrence_rule) != null && !_, {
    startTime: M
  } = (0, o.default)(t, n);
  if (!g || S && !I && !_ || _ && !_ || null == N) return null;
  if (S && _) {
    var m;
    if (null == M) return null;
    let e = new Date(null !== (m = null == v ? void 0 : v.scheduled_start_time) && void 0 !== m ? m : M);
    if (new Date > e) return null
  }
  let h = e => {
    (0, a.openModal)(u => (0, l.jsxs)(a.ConfirmModal, {
      ...u,
      header: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
      confirmText: I || e ? c.default.Messages.DELETE_ALL_EVENTS : c.default.Messages.DELETE_EVENT,
      cancelText: c.default.Messages.NEVERMIND,
      onConfirm: () => _ && !e ? i.default.deleteRecurrence(E.id, t, n, v) : i.default.deleteGuildEvent(t, E.id),
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
      }), (0, l.jsx)("br", {}), (I || e) && (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
      })]
    }))
  };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.DELETE_EVENT,
    label: c.default.Messages.DELETE_EVENT,
    action: _ ? void 0 : () => h(),
    color: "danger",
    children: _ && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.DELETE_THIS_EVENT,
        label: c.default.Messages.DELETE_THIS_EVENT,
        action: () => h(),
        disabled: null == v ? void 0 : v.is_canceled,
        color: "danger"
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        label: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        action: () => h(!0),
        color: "danger"
      })]
    })
  })
}