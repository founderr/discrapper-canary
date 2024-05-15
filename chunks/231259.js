"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
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
  E = n("689938");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: c,
    channel: f
  } = e, _ = null != n, {
    canManageGuildEvent: T
  } = (0, d.useManageResourcePermissions)(null != f ? f : c), [S, N] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), g = (0, r.default)(n, null == N ? void 0 : N.id), I = null != N && T(N), v = (null == N ? void 0 : N.recurrence_rule) != null && !_, {
    startTime: m
  } = (0, o.default)(t, n);
  if (!I || S && !v && !_ || _ && !_ || null == N) return null;
  if (S && _) {
    var M;
    if (null == m) return null;
    let e = new Date(null !== (M = null == g ? void 0 : g.scheduled_start_time) && void 0 !== M ? M : m);
    if (new Date > e) return null
  }
  let D = e => {
    (0, a.openModal)(u => (0, l.jsxs)(a.ConfirmModal, {
      ...u,
      header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
      confirmText: v || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
      cancelText: E.default.Messages.NEVERMIND,
      onConfirm: () => _ && !e ? i.default.deleteRecurrence(c.id, t, n, g) : i.default.deleteGuildEvent(t, c.id),
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
      }), (0, l.jsx)("br", {}), (v || e) && (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
      })]
    }))
  };
  return (0, l.jsx)(a.MenuItem, {
    id: E.default.Messages.DELETE_EVENT,
    label: E.default.Messages.DELETE_EVENT,
    action: _ ? void 0 : () => D(),
    color: "danger",
    children: _ && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: E.default.Messages.DELETE_THIS_EVENT,
        label: E.default.Messages.DELETE_THIS_EVENT,
        action: () => D(),
        disabled: null == g ? void 0 : g.is_canceled,
        color: "danger"
      }), (0, l.jsx)(a.MenuItem, {
        id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
        action: () => D(!0),
        color: "danger"
      })]
    })
  })
}