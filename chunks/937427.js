t.d(n, {
    w: function () {
        return c;
    }
}),
    t(47120),
    t(653041),
    t(733860);
var i = t(192379),
    l = t(581364),
    r = t(984933),
    a = t(496675),
    o = t(282923),
    s = t(981631),
    d = t(388032);
function c(e) {
    let n = i.useMemo(() => {
            let n = r.ZP.getChannels(e),
                t = [...n[r.sH]];
            t.push(...n[r.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = t.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: a.Z.can(s.Plq.MANAGE_ROLES, e.channel)
            }));
            return (
                i.unshift({
                    id: (0, l.bD)(e),
                    name: d.intl.string(d.t['7YqSGx']),
                    canManage: !0
                }),
                i
            );
        }, [e]),
        [t, c] = i.useState(''),
        m = i.useMemo(() => {
            let e = (function (e) {
                return e.startsWith('#') ? e.substr(1) : e;
            })(t);
            return (0, o.B)(n, u, e);
        }, [n, t]);
    return {
        query: t,
        results: m,
        setQuery: c,
        unfilteredCount: n.length
    };
}
function u(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
