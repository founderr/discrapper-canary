i.d(n, {
  Z: function() {
    return M
  }
});
var l = i(735250);
i(470079);
var t = i(442837),
  u = i(481060),
  r = i(430824),
  s = i(594174),
  a = i(979651),
  d = i(471253),
  Z = i(200498),
  o = i(88751),
  E = i(267980),
  c = i(623633),
  _ = i(689938);

function M(e) {
  var n;
  let i = (0, c.Z)(),
    M = null == i ? void 0 : i.id,
    A = null == i ? void 0 : i.guild_id,
    I = (0, t.e7)([r.Z], () => r.Z.getGuild(A), [A]),
    N = (0, t.e7)([a.Z], () => null != M ? a.Z.getVoiceStateForChannel(M, e.id) : null, [M, e.id]),
    C = (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
    S = (0, E.Z)(),
    T = (0, t.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, M), [M, e.id]),
    U = (0, Z.B)(M);
  if (null == i || null == I || null == N || T.speaker) return null;
  let f = () => {
    C ? (0, d.RK)(i, !1) : (0, d._0)(i, e.id)
  };
  return U ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: C ? _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: f
  }) : S && C ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: f
  }) : null
}