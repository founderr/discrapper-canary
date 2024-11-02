t.d(n, {
    O: function () {
        return d;
    }
}),
    t(47120);
var i = t(192379),
    l = t(373793),
    r = t(442837),
    a = t(911969),
    o = t(282923),
    s = t(905753);
function d() {
    let e = (0, r.cj)([s.Z], () => {
            var e;
            return Object.values(null !== (e = s.Z.getCommands()) && void 0 !== e ? e : {});
        }),
        [n, t] = i.useState(''),
        d = i.useMemo(
            () =>
                e.filter((e) => {
                    var n;
                    return (null == e.integration_types || e.integration_types.includes(l.Y.GUILD_INSTALL)) && (null == e.contexts || (null === (n = e.contexts) || void 0 === n ? void 0 : n.includes(a.D.GUILD)));
                }),
            [e]
        ),
        u = i.useMemo(
            () =>
                [...d].sort((e, n) => {
                    let t = a.yU.CHAT + 1,
                        i = n.type > t ? t : n.type,
                        l = i - (e.type > t ? t : e.type);
                    return 0 !== l ? l : e.untranslatedName.localeCompare(n.untranslatedName);
                }),
            [d]
        ),
        m = i.useMemo(() => (n.startsWith('/') ? u.filter((e) => e.type === a.yU.CHAT) : u), [n, u]),
        h = i.useMemo(() => (n.startsWith('/') ? n.substring(1) : n), [n]);
    return {
        query: n,
        results: i.useMemo(() => (0, o.B)(m, c, h), [m, h]),
        setQuery: t,
        unfilteredCount: e.length
    };
}
function c(e) {
    return {
        id: e.id,
        names: [e.displayName]
    };
}
