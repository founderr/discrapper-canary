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
  i = n("495279"),
  r = n("894017"),
  o = n("689938");

function E(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: E,
    channel: c
  } = e, f = null != n, {
    canManageGuildEvent: _
  } = (0, d.useManageResourcePermissions)(null != c ? c : E), [T, S] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), N = (0, r.default)(n, null == S ? void 0 : S.id), g = null != S && _(S);
  return f && (null == N ? void 0 : N.is_canceled) && g && (!T || f) ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      null != n && null != N && (0, i.default)(N, E.id, t, n)
    }
  }) : null
}