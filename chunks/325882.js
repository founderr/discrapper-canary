"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  i = n("77078"),
  l = n("228944"),
  o = n("201131"),
  a = n("702873"),
  s = n("42203"),
  d = n("377253"),
  c = n("957255"),
  E = n("49111"),
  _ = n("782340");

function f(t, e) {
  let n = (0, r.useStateFromStores)([c.default], () => null != t && c.default.canWithPartialContext(E.Permissions.MANAGE_MESSAGES, {
      channelId: t
    }), [t]),
    f = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]),
    T = (0, r.useStateFromStores)([d.default], () => null != t && null != e ? d.default.getMessage(t, e) : null),
    S = (0, o.useAutomodAlertActions)(null != T ? T : null);
  if (null == f || null == T) return null;
  let I = null != S && S.actions.hasOwnProperty(l.AutomodAlertActionType.SET_COMPLETED) ? l.AutomodAlertActionType.UNSET_COMPLETED : l.AutomodAlertActionType.SET_COMPLETED,
    N = I === l.AutomodAlertActionType.SET_COMPLETED ? _.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : _.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != e ? (0, u.jsx)(i.MenuItem, {
    id: "mark-automod-alert-completed",
    label: N,
    action: () => {
      (0, a.executeAlertAction)(e, f, I)
    }
  }, "mark-automod-alert-completed") : null
}