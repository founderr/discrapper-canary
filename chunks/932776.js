t.d(n, {
    O: function () {
        return d;
    }
}),
    t(47120);
var i = t(192379),
    a = t(373793),
    l = t(442837),
    s = t(911969),
    o = t(282923),
    r = t(905753);
function d() {
    let e = (0, l.cj)([r.Z], () => {
            var e;
            return Object.values(null !== (e = r.Z.getCommands()) && void 0 !== e ? e : {});
        }),
        [n, t] = i.useState(''),
        d = i.useMemo(
            () =>
                e.filter((e) => {
                    var n;
                    return (null == e.integration_types || e.integration_types.includes(a.Y.GUILD_INSTALL)) && (null == e.contexts || (null === (n = e.contexts) || void 0 === n ? void 0 : n.includes(s.D.GUILD)));
                }),
            [e]
        ),
        u = i.useMemo(
            () =>
                [...d].sort((e, n) => {
                    let t = s.yU.CHAT + 1,
                        i = n.type > t ? t : n.type,
                        a = i - (e.type > t ? t : e.type);
                    return 0 !== a ? a : e.untranslatedName.localeCompare(n.untranslatedName);
                }),
            [d]
        ),
        I = i.useMemo(() => (n.startsWith('/') ? u.filter((e) => e.type === s.yU.CHAT) : u), [n, u]),
        m = i.useMemo(() => (n.startsWith('/') ? n.substring(1) : n), [n]);
    return {
        query: n,
        results: i.useMemo(() => (0, o.B)(I, c, m), [I, m]),
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
