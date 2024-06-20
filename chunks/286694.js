i.d(n, {
  Z: function() {
    return _
  }
});
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(592125),
  s = i(430824),
  u = i(496675),
  d = i(594174),
  o = i(471253),
  Z = i(88751),
  c = i(981631),
  E = i(689938);

function _(e, n, i) {
  var _;
  let M = a.Z.getChannel(i),
    C = (0, t.e7)([s.Z], () => s.Z.getGuild(n), [n]),
    N = (0, t.e7)([Z.ZP], () => Z.ZP.getPermissionsForUser(e.id, i), [i, e.id]),
    f = (null === (_ = d.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
    A = (0, t.e7)([u.Z], () => null != i && u.Z.canWithPartialContext(c.Plq.MUTE_MEMBERS, {
      channelId: i
    }), [i]);
  return null != M && null != C && (A || f) && N.speaker ? (0, r.jsx)(l.MenuItem, {
    id: "audience",
    label: f ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      f ? (0, o.yi)(M) : (0, o.hz)(e, M)
    }
  }) : null
}