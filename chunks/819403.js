i.d(n, {
  Z: function() {
    return M
  }
});
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(430824),
  s = i(594174),
  u = i(979651),
  d = i(471253),
  o = i(200498),
  Z = i(88751),
  c = i(267980),
  E = i(623633),
  _ = i(689938);

function M(e) {
  var n;
  let i = (0, E.Z)(),
    M = null == i ? void 0 : i.id,
    C = null == i ? void 0 : i.guild_id,
    N = (0, t.e7)([a.Z], () => a.Z.getGuild(C), [C]),
    f = (0, t.e7)([u.Z], () => null != M ? u.Z.getVoiceStateForChannel(M, e.id) : null, [M, e.id]),
    A = (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
    I = (0, c.Z)(),
    T = (0, t.e7)([Z.ZP], () => Z.ZP.getPermissionsForUser(e.id, M), [M, e.id]),
    S = (0, o.B)(M);
  if (null == i || null == N || null == f || T.speaker) return null;
  let U = () => {
    A ? (0, d.RK)(i, !1) : (0, d._0)(i, e.id)
  };
  return S ? (0, r.jsx)(l.MenuItem, {
    id: "invite-speaker",
    label: A ? _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: U
  }) : I && A ? (0, r.jsx)(l.MenuItem, {
    id: "invite-speaker",
    label: _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: U
  }) : null
}