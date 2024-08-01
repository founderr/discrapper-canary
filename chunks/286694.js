n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  o = n(481060),
  a = n(592125),
  E = n(430824),
  d = n(496675),
  _ = n(594174),
  u = n(471253),
  s = n(88751),
  I = n(981631),
  c = n(689938);

function T(e, t, n) {
  var T;
  let l = a.Z.getChannel(n),
N = (0, r.e7)([E.Z], () => E.Z.getGuild(t), [t]),
S = (0, r.e7)([s.ZP], () => s.ZP.getPermissionsForUser(e.id, n), [
  n,
  e.id
]),
A = (null === (T = _.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === e.id,
p = (0, r.e7)([d.Z], () => null != n && d.Z.canWithPartialContext(I.Plq.MUTE_MEMBERS, {
  channelId: n
}), [n]);
  return null != l && null != N && (p || A) && S.speaker ? (0, i.jsx)(o.MenuItem, {
id: 'audience',
label: A ? c.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : c.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
action: () => {
  A ? (0, u.yi)(l) : (0, u.hz)(e, l);
}
  }) : null;
}