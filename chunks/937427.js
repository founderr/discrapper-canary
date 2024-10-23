t.d(n, {
    w: function () {
        return c;
    }
}),
    t(47120),
    t(653041),
    t(733860);
var i = t(192379),
    a = t(581364),
    l = t(984933),
    s = t(496675),
    o = t(282923),
    r = t(981631),
    d = t(689938);
function c(e) {
    let n = i.useMemo(() => {
            let n = l.ZP.getChannels(e),
                t = [...n[l.sH]];
            t.push(...n[l.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = t.map((e) => ({
                id: e.channel.id,
                name: e.channel.name,
                canManage: s.Z.can(r.Plq.MANAGE_ROLES, e.channel)
            }));
            return (
                i.unshift({
                    id: (0, a.bD)(e),
                    name: d.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                    canManage: !0
                }),
                i
            );
        }, [e]),
        [t, c] = i.useState(''),
        I = i.useMemo(() => {
            let e = (function (e) {
                return e.startsWith('#') ? e.substr(1) : e;
            })(t);
            return (0, o.B)(n, u, e);
        }, [n, t]);
    return {
        query: t,
        results: I,
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
