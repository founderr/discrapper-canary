r.d(n, {
    r: function () {
        return c;
    }
});
var i = r(100527),
    a = r(6025),
    s = r(897473),
    o = r(545408),
    l = r(189357),
    u = r(50493);
function c(e, n, r) {
    var c, d, f;
    let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: u.k.INFO };
    if (!(0, l.By)(e)) return Promise.resolve();
    let h = null !== (c = _.modViewPanel) && void 0 !== c ? c : u.k.INFO,
        p = null !== (d = _.sourceLocation) && void 0 !== d ? d : i.Z.MEMBER_SAFETY_PAGE;
    return (
        (0, o.q)(e, n, h, p),
        a.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: r,
            sidebarType: s.jL.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: s.Ff.GUILD_MEMBER_MOD_VIEW,
                userId: n,
                guildId: e,
                ..._,
                modViewPanel: null !== (f = _.modViewPanel) && void 0 !== f ? f : u.k.INFO
            }
        })
    );
}
