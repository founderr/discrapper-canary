l.d(n, {
    Z: function () {
        return M;
    }
});
var i = l(200651);
l(192379);
var a = l(442837),
    r = l(481060),
    s = l(592125),
    d = l(430824),
    u = l(496675),
    t = l(594174),
    c = l(471253),
    o = l(88751),
    Z = l(981631),
    E = l(689938);
function M(e, n, l) {
    var M;
    let _ = s.Z.getChannel(l),
        N = (0, a.e7)([d.Z], () => d.Z.getGuild(n), [n]),
        C = (0, a.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, l), [l, e.id]),
        h = (null === (M = t.default.getCurrentUser()) || void 0 === M ? void 0 : M.id) === e.id,
        p = (0, a.e7)([u.Z], () => null != l && u.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != _ && null != N && (p || h) && C.speaker
        ? (0, i.jsx)(r.MenuItem, {
              id: 'audience',
              label: h ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                  h ? (0, c.yi)(_) : (0, c.hz)(e, _);
              }
          })
        : null;
}
