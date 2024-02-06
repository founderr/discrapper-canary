"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("817963"),
  d = n("398604"),
  r = n("322224"),
  s = n("397680"),
  o = n("782340");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: c,
    channel: E
  } = e, f = null != n, {
    canManageGuildEvent: _
  } = (0, i.useManageResourcePermissions)(null != E ? E : c), [T, v] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), S = (0, s.default)(n, null == v ? void 0 : v.id), g = null != v && _(v), I = f && (null == S ? void 0 : S.is_canceled) && g;
  return I && (!T || f) ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      if (null == n || null == S) return;
      let {
        scheduled_start_time: e,
        scheduled_end_time: l
      } = S;
      null == e && null == l ? r.default.deleteGuildEventException(c.id, t, n) : r.default.updateGuildEventException({
        scheduled_start_time: e,
        scheduled_end_time: l,
        is_canceled: !1
      }, c.id, t, n)
    }
  }) : null
}