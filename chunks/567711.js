t.d(e, {
  Z: function() {
    return M
  }
});
var u = t(735250);
t(470079);
var l = t(442837),
  i = t(481060),
  r = t(313889),
  a = t(825829),
  o = t(36459),
  c = t(592125),
  s = t(375954),
  d = t(496675),
  _ = t(981631),
  E = t(689938);

function M(n, e) {
  let t = (0, l.e7)([d.Z], () => null != n && d.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, {
      channelId: n
    }), [n]),
    M = (0, l.e7)([c.Z], () => c.Z.getChannel(n), [n]),
    f = (0, l.e7)([s.Z], () => null != n && null != e ? s.Z.getMessage(n, e) : null),
    T = (0, a.NK)(null != f ? f : null);
  if (null == M || null == f) return null;
  let Z = null != T && T.actions.hasOwnProperty(r.d.SET_COMPLETED) ? r.d.UNSET_COMPLETED : r.d.SET_COMPLETED,
    A = Z === r.d.SET_COMPLETED ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return t && null != e ? (0, u.jsx)(i.MenuItem, {
    id: "mark-automod-alert-completed",
    label: A,
    action: () => {
      (0, o.Xx)(e, M, Z)
    }
  }, "mark-automod-alert-completed") : null
}