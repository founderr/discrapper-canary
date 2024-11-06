n.d(t, {
    L: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    r = n(468194),
    l = n(645896),
    a = n(559469),
    s = n(308083),
    o = n(388032);
function c(e) {
    let { guild: t } = e,
        n = (0, a.n)(),
        c = (0, l.Cc)(null == t ? void 0 : t.id),
        [d, u] = (0, l.L_)(null == t ? void 0 : t.id);
    return (
        i.useEffect(() => {
            !d && null != t && u();
        }, [t, d, u]),
        i.useMemo(() => {
            var e;
            return null != c
                ? c
                : null == t
                  ? null
                  : {
                        ...n[n.length - 1],
                        id: t.id,
                        name: t.name,
                        icon: t.icon,
                        description: null !== (e = t.description) && void 0 !== e ? e : o.intl.string(o.t['/pfXKi']),
                        memberCount: 0,
                        games: [],
                        playstyle: s.zv.CASUAL,
                        traits: [],
                        tag: (0, r.Zg)(t.name),
                        wildcardDescriptors: s.LK
                    };
        }, [t, n, c])
    );
}
