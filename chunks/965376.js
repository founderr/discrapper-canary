n.d(t, {
    D: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(442837),
    s = n(430824),
    o = n(159299),
    c = n(231338),
    u = n(388032);
let d = [];
function h(e, t) {
    let n = (0, a.e7)([s.Z], () => (null != t ? s.Z.getRoles(t.id) : void 0)),
        { version: l, members: h } = (0, a.cj)([o.Z], () => ({
            version: o.Z.getMemberListVersion(e),
            members: o.Z.getMemberListSections(e)
        })),
        m = i.useMemo(() => {
            if (null == t) return d;
            let e = r()(n)
                .values()
                .filter((e) => e.hoist)
                .sortBy((e) => e.position)
                .reverse()
                .map((e) => e.id)
                .value();
            return (
                e.push(c.Sk.ONLINE, c.Sk.OFFLINE),
                e.map((e) => {
                    var t, i, l, r;
                    let a = e === c.Sk.ONLINE ? u.intl.string(u.t.WbGtnJ) : e === c.Sk.OFFLINE ? u.intl.string(u.t.Vv0abG) : null !== (l = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : '';
                    return {
                        label: a,
                        userIds: null !== (r = null == h ? void 0 : null === (i = h[e]) || void 0 === i ? void 0 : i.userIds) && void 0 !== r ? r : [],
                        id: e,
                        roleId: e
                    };
                })
            );
        }, [n, h, l]);
    return null != h ? m : d;
}
