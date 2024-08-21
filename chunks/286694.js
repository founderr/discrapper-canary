n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    l = n(430824),
    u = n(496675),
    s = n(594174),
    d = n(471253),
    c = n(88751),
    E = n(981631),
    I = n(689938);
function _(e, t, n) {
    var _;
    let T = o.Z.getChannel(n),
        f = (0, i.e7)([l.Z], () => l.Z.getGuild(t), [t]),
        p = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        A = (null === (_ = s.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
        N = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != T && null != f && (N || A) && p.speaker
        ? (0, r.jsx)(a.MenuItem, {
              id: 'audience',
              label: A ? I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                  A ? (0, d.yi)(T) : (0, d.hz)(e, T);
              }
          })
        : null;
}
