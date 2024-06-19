i.d(n, {
  Z: function() {
    return _
  }
});
var l = i(735250);
i(470079);
var t = i(442837),
  u = i(481060),
  r = i(592125),
  s = i(430824),
  a = i(496675),
  d = i(594174),
  Z = i(471253),
  o = i(88751),
  E = i(981631),
  c = i(689938);

function _(e, n, i) {
  var _;
  let M = r.Z.getChannel(i),
    A = (0, t.e7)([s.Z], () => s.Z.getGuild(n), [n]),
    I = (0, t.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, i), [i, e.id]),
    N = (null === (_ = d.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
    C = (0, t.e7)([a.Z], () => null != i && a.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, {
      channelId: i
    }), [i]);
  return null != M && null != A && (C || N) && I.speaker ? (0, l.jsx)(u.MenuItem, {
    id: "audience",
    label: N ? c.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : c.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      N ? (0, Z.yi)(M) : (0, Z.hz)(e, M)
    }
  }) : null
}