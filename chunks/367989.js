"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
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
  o = l("782340");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: l,
    guild: c,
    channel: E
  } = e, f = null != l, {
    canManageGuildEvent: _
  } = (0, s.useManageResourcePermissions)(null != E ? E : c), [T, M] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), v = (0, i.default)(l, null == M ? void 0 : M.id), I = null != M && _(M), g = f && (null == v ? void 0 : v.is_canceled) && I;
  return g && (!T || f) ? (0, n.jsx)(u.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      if (null == l || null == v) return;
      let {
        scheduled_start_time: e,
        scheduled_end_time: n
      } = v;
      null == e && null == n ? r.default.deleteGuildEventException(c.id, t, l) : r.default.updateGuildEventException({
        scheduled_start_time: e,
        scheduled_end_time: n,
        is_canceled: !1
      }, c.id, t, l)
    }
  }) : null
}