n.d(t, {
    o: function () {
        return _;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(481060),
    a = n(212093),
    s = n(831565),
    o = n(703656),
    c = n(683301),
    u = n(603592),
    d = n(981631),
    h = n(731455),
    p = n(689938);
function _() {
    let e = (0, s.a)({ location: 'discovery_button' }),
        t = window.location.pathname.startsWith(d.Z5c.GUILD_DISCOVERY),
        n = c.ZP.getCurrentCategoryId() === h.Gj.Clans;
    if (e) {
        (0, o.uL)(d.Z5c.GLOBAL_DISCOVERY);
        return;
    }
    t && !n && ((0, a.AQ)(), (0, a.uY)(h.Hk, !0));
    let i = (0, o.s1)().location.search;
    (0, o.uL)(d.Z5c.GUILD_DISCOVERY, { search: i });
}
let f = l.forwardRef(function (e, t) {
    let { selected: n, className: l, onClick: a } = e,
        o = (0, s.v)({ location: 'guild_discovery_button' }) ? p.Z.Messages.DISCOVER : p.Z.Messages.GUILD_DISCOVERY_TOOLTIP;
    return (0, i.jsx)(u.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: l,
        onClick: null != a ? a : _,
        selected: n,
        tooltip: o,
        icon: r.CompassIcon
    });
});
t.Z = f;
