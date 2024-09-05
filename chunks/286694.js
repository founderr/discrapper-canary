t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    o = t(592125),
    l = t(430824),
    u = t(496675),
    d = t(594174),
    s = t(471253),
    c = t(88751),
    E = t(981631),
    I = t(689938);
function _(e, n, t) {
    var _;
    let T = o.Z.getChannel(t),
        N = (0, r.e7)([l.Z], () => l.Z.getGuild(n), [n]),
        S = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [t, e.id]),
        p = (null === (_ = d.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
        A = (0, r.e7)([u.Z], () => null != t && u.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
    return null != T && null != N && (A || p) && S.speaker
        ? (0, i.jsx)(a.MenuItem, {
              id: 'audience',
              label: p ? I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                  p ? (0, s.yi)(T) : (0, s.hz)(e, T);
              }
          })
        : null;
}
