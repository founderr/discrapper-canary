t.d(n, {
    f: function () {
        return h;
    }
}),
    t(47120);
var i = t(192379),
    a = t(243814),
    l = t(442837),
    o = t(384275),
    r = t(911969),
    s = t(10718),
    c = t(812236),
    d = t(148958),
    u = t(881998);
t(445392);
var m = t(783097),
    p = t(689079);
let _ = {
        commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT]
    },
    C = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function h(e) {
    let { channel: n, onlyActivityApps: t, allowCommandFetch: r, includeAuthorizedAppsAndFetch: h } = e,
        { sectionDescriptors: f, loading: A } = s.wi({
            channel: n,
            filters: _,
            options: C,
            allowFetch: r
        });
    return {
        loading: A,
        frecentApps: (function (e) {
            let { sectionDescriptors: n, channel: t, onlyActivityApps: r, includeAuthorizedAppsAndFetch: s } = e,
                _ = (0, l.e7)([u.Z], () => u.Z.getFetchState());
            i.useEffect(() => {
                s && _ === u.M.NOT_FETCHED && o.Z.fetch();
            }, [s, _]);
            let C = (0, l.Wu)([u.Z], () => {
                    var e, n;
                    return s && null !== (n = null === (e = u.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(a.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : [];
                }),
                h = n.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                f = (0, d.h)(h, C);
            return i.useMemo(() => (r ? f.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(t, e.id)) : f), [f, t, r]);
        })({
            sectionDescriptors: f,
            channel: n,
            onlyActivityApps: t,
            includeAuthorizedAppsAndFetch: h
        })
    };
}
