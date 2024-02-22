"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var u = n("37983");
n("884691");
var l = n("446674"),
  r = n("77078"),
  i = n("228944"),
  o = n("201131"),
  a = n("702873"),
  s = n("42203"),
  d = n("377253"),
  c = n("957255"),
  f = n("49111"),
  E = n("782340");

function _(e, t) {
  let n = (0, l.useStateFromStores)([c.default], () => null != e && c.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    _ = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
    S = (0, l.useStateFromStores)([d.default], () => null != e && null != t ? d.default.getMessage(e, t) : null),
    m = (0, o.useAutomodAlertActions)(null != S ? S : null);
  if (null == _ || null == S) return null;
  let M = null != m && m.actions.hasOwnProperty(i.AutomodAlertActionType.SET_COMPLETED) ? i.AutomodAlertActionType.UNSET_COMPLETED : i.AutomodAlertActionType.SET_COMPLETED,
    C = M === i.AutomodAlertActionType.SET_COMPLETED ? E.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != t ? (0, u.jsx)(r.MenuItem, {
    id: "mark-automod-alert-completed",
    label: C,
    action: () => {
      (0, a.executeAlertAction)(t, _, M)
    }
  }, "mark-automod-alert-completed") : null
}