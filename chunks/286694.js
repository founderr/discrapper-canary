l.d(n, {
    Z: function () {
        return p;
    }
});
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(592125),
    u = l(430824),
    d = l(496675),
    s = l(594174),
    o = l(471253),
    c = l(88751),
    Z = l(981631),
    M = l(388032);
function p(e, n, l) {
    var p;
    let h = a.Z.getChannel(l),
        g = (0, t.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        C = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, l), [l, e.id]),
        E = (null === (p = s.default.getCurrentUser()) || void 0 === p ? void 0 : p.id) === e.id,
        N = (0, t.e7)([d.Z], () => null != l && d.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != h && null != g && (N || E) && C.speaker
        ? (0, i.jsx)(r.MenuItem, {
              id: 'audience',
              label: E ? M.intl.string(M.t['6C6PJy']) : M.intl.string(M.t.VK3vQ0),
              action: () => {
                  E ? (0, o.yi)(h) : (0, o.hz)(e, h);
              }
          })
        : null;
}
