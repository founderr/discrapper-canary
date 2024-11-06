n.d(t, {
    w: function () {
        return d;
    }
}),
    n(47120),
    n(653041),
    n(733860);
var i = n(192379),
    l = n(581364),
    r = n(984933),
    a = n(496675),
    o = n(282923),
    s = n(981631),
    c = n(388032);
function d(e) {
    let t = i.useMemo(() => {
            let t = r.ZP.getChannels(e),
                n = [...t[r.sH]];
            n.push(...t[r.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: a.Z.can(s.Plq.MANAGE_ROLES, e.channel)
            }));
            return (
                i.unshift({
                    id: (0, l.bD)(e),
                    name: c.intl.string(c.t['7YqSGx']),
                    canManage: !0
                }),
                i
            );
        }, [e]),
        [n, d] = i.useState(''),
        m = i.useMemo(() => {
            let e = (function (e) {
                return e.startsWith('#') ? e.substr(1) : e;
            })(n);
            return (0, o.B)(t, u, e);
        }, [t, n]);
    return {
        query: n,
        results: m,
        setQuery: d,
        unfilteredCount: t.length
    };
}
function u(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
