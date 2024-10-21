l.d(n, {
    Z: function () {
        return u;
    },
    q: function () {
        return o;
    }
});
var a = l(200651);
l(192379);
var i = l(442837),
    r = l(325708),
    t = l(213557),
    s = l(433355),
    d = l(981631),
    c = l(176505);
let o = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        u = (0, i.e7)([s.ZP], () => s.ZP.getSidebarState(c.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let h = n - d.PrS - o;
    return (0, a.jsx)(r.Z, {
        sidebarType: r.y.HomeSidebar,
        maxWidth: h,
        onWidthChange: l,
        children: (0, a.jsx)(t.Z, {
            channelId: u.channelId,
            baseChannelId: c.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
