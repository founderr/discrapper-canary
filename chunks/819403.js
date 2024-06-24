t.d(n, {
  Z: function() {
    return T
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  r = t(481060),
  u = t(430824),
  a = t(594174),
  o = t(979651),
  s = t(471253),
  d = t(200498),
  c = t(88751),
  E = t(267980),
  _ = t(623633),
  I = t(689938);

function T(e) {
  var n;
  let t = (0, _.Z)(),
    T = null == t ? void 0 : t.id,
    N = null == t ? void 0 : t.guild_id,
    S = (0, l.e7)([u.Z], () => u.Z.getGuild(N), [N]),
    A = (0, l.e7)([o.Z], () => null != T ? o.Z.getVoiceStateForChannel(T, e.id) : null, [T, e.id]),
    O = (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
    p = (0, E.Z)(),
    M = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, T), [T, e.id]),
    f = (0, d.B)(T);
  if (null == t || null == S || null == A || M.speaker) return null;
  let Z = () => {
    O ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id)
  };
  return f ? (0, i.jsx)(r.MenuItem, {
    id: "invite-speaker",
    label: O ? I.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : I.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: Z
  }) : p && O ? (0, i.jsx)(r.MenuItem, {
    id: "invite-speaker",
    label: I.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: Z
  }) : null
}