l.d(n, {
    Z: function () {
        return h;
    }
});
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(592125),
    d = l(430824),
    u = l(496675),
    s = l(594174),
    c = l(471253),
    o = l(88751),
    Z = l(981631),
    M = l(388032);
function h(e, n, l) {
    var h;
    let p = a.Z.getChannel(l),
        g = (0, t.e7)([d.Z], () => d.Z.getGuild(n), [n]),
        C = (0, t.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, l), [l, e.id]),
        E = (null === (h = s.default.getCurrentUser()) || void 0 === h ? void 0 : h.id) === e.id,
        N = (0, t.e7)([u.Z], () => null != l && u.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != p && null != g && (N || E) && C.speaker
        ? (0, i.jsx)(r.MenuItem, {
              id: 'audience',
              label: E ? M.intl.string(M.t['6C6PJy']) : M.intl.string(M.t.VK3vQ0),
              action: () => {
                  E ? (0, c.yi)(p) : (0, c.hz)(e, p);
              }
          })
        : null;
}
