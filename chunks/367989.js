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
  r = l("658202"),
  i = l("397680"),
  o = l("782340");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: l,
    guild: c,
    channel: f
  } = e, E = null != l, {
    canManageGuildEvent: _
  } = (0, s.useManageResourcePermissions)(null != f ? f : c), [T, M] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), v = (0, i.default)(l, null == M ? void 0 : M.id), I = null != M && _(M), g = E && (null == v ? void 0 : v.is_canceled) && I;
  return g && (!T || E) ? (0, n.jsx)(u.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      null != l && null != v && (0, r.default)(v, c.id, t, l)
    }
  }) : null
}