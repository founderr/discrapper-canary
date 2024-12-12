r.d(t, {
    Z: function () {
        return u;
    }
});
var n = r(544891),
    a = r(933557),
    s = r(430824),
    c = r(131951),
    o = r(699516),
    d = r(594174),
    i = r(927923),
    l = r(981631),
    f = r(388032);
function u(e, t) {
    var r;
    let { nonce: u, forQRCode: m } = t,
        x = e.getGuildId(),
        C = s.Z.getGuild(x),
        h = (0, i.Lc)({
            guildId: null != x ? x : l.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, d.default, o.Z),
            guildName: null !== (r = null == C ? void 0 : C.name) && void 0 !== r ? r : f.intl.string(f.t.LJpTRE),
            muted: c.Z.isSelfMute(),
            deafened: c.Z.isSelfDeaf(),
            nonce: u
        });
    return m
        ? ''
              .concat((0, n.K0)())
              .concat(l.ANM.XBOX_HANDOFF, '?')
              .concat(h.toString())
        : ''.concat(i.bJ, '?').concat(h.toString());
}
