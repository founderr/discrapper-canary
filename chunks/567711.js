"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("735250");
n("470079");
var l = n("442837"),
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
  let n = (0, l.useStateFromStores)([d.default], () => null != e && d.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    E = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
    A = (0, l.useStateFromStores)([c.default], () => null != e && null != t ? c.default.getMessage(e, t) : null),
    M = (0, o.useAutomodAlertActions)(null != A ? A : null);
  if (null == E || null == A) return null;
  let T = null != M && M.actions.hasOwnProperty(i.AutomodAlertActionType.SET_COMPLETED) ? i.AutomodAlertActionType.UNSET_COMPLETED : i.AutomodAlertActionType.SET_COMPLETED,
    S = T === i.AutomodAlertActionType.SET_COMPLETED ? _.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : _.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != t ? (0, u.jsx)(a.MenuItem, {
    id: "mark-automod-alert-completed",
    label: S,
    action: () => {
      (0, r.executeAlertAction)(t, E, T)
    }
  }, "mark-automod-alert-completed") : null
}