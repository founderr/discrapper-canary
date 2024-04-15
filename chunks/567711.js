"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  i = n("313889"),
  o = n("825829"),
  r = n("36459"),
  s = n("592125"),
  c = n("375954"),
  d = n("496675"),
  f = n("981631"),
  _ = n("689938");

function E(e, t) {
  let n = (0, u.useStateFromStores)([d.default], () => null != e && d.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    E = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
    M = (0, u.useStateFromStores)([c.default], () => null != e && null != t ? c.default.getMessage(e, t) : null),
    A = (0, o.useAutomodAlertActions)(null != M ? M : null);
  if (null == E || null == M) return null;
  let C = null != A && A.actions.hasOwnProperty(i.AutomodAlertActionType.SET_COMPLETED) ? i.AutomodAlertActionType.UNSET_COMPLETED : i.AutomodAlertActionType.SET_COMPLETED,
    T = C === i.AutomodAlertActionType.SET_COMPLETED ? _.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : _.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != t ? (0, l.jsx)(a.MenuItem, {
    id: "mark-automod-alert-completed",
    label: T,
    action: () => {
      (0, r.executeAlertAction)(t, E, C)
    }
  }, "mark-automod-alert-completed") : null
}