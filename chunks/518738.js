r.d(n, {
    Kz: function () {
        return l;
    },
    oC: function () {
        return c;
    },
    p9: function () {
        return u;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(430824),
    o = r(829883);
function l(e, n) {
    var r;
    let { customIconSrc: i, unicodeEmoji: a } = null !== (r = (0, o.zy)(e, n)) && void 0 !== r ? r : {};
    if (null != i || null != a)
        return {
            src: i,
            name: e.name,
            roleId: e.id,
            size: n,
            unicodeEmoji: a
        };
}
function u(e) {
    let { guildId: n, roleId: r, size: u = 20 } = e,
        { guild: c, roles: d } = (0, a.cj)(
            [s.Z],
            () => ({
                guild: s.Z.getGuild(n),
                roles: s.Z.getRoles(n)
            }),
            [n]
        );
    return i.useMemo(() => {
        if (null == c || null == r) return;
        let e = d[r];
        if (!!(0, o._b)(c, e)) return l(e, u);
    }, [c, d, r, u]);
}
function c(e, n) {
    let r = (0, a.e7)([s.Z], () => s.Z.getGuild(e));
    if (null != r && !!(0, o._b)(r, n)) return l(n);
}
