t.d(n, {
    h6: function () {
        return S;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return N;
    },
    sp: function () {
        return T;
    },
    v9: function () {
        return E;
    }
}),
    t(653041),
    t(47120),
    t(789020);
var l,
    i,
    a = t(470079),
    s = t(442837),
    r = t(496929);
t(430824);
var o = t(496675),
    u = t(509545),
    c = t(78839),
    d = t(55563),
    p = t(801249),
    m = t(106976);
t(307643);
var v = t(488915),
    f = t(171246),
    h = t(981631);
let I = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let x = (e) => {
    let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
        i = (0, s.e7)([v.Z], () => (null != n ? v.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
    return (
        a.useEffect(() => {
            if (null == n || n === h.ME) return;
            let e = v.Z.getEntitlementsForGuildFetchState(n);
            t && (e === v.M.NOT_FETCHED || l) && (0, m.i1)(n);
        }, [n, t, l]),
        { entitlementsLoaded: i === v.M.FETCHED }
    );
};
function S(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : h.lds,
        { entitlementsLoaded: l } = x({
            guildId: t,
            canFetch: (0, s.e7)([o.Z], () => o.Z.can(h.Plq.ADMINISTRATOR, e))
        }),
        i = (0, s.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(t)),
        r = (0, s.Wu)([v.Z], () => {
            let e = v.Z.getEntitlementsForGuild(t),
                n = v.Z.getEntitlementsForGuild(t, !1),
                l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
        }),
        u = (0, s.cj)([d.Z], () => d.Z.getSKUs()),
        c = a.useMemo(
            () =>
                r.filter((e) => {
                    let n = u[e.skuId];
                    return null != n && n.available;
                }),
            [r, u]
        );
    return l ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - I)) : [];
}
let T = (e) => {
        let [n, t] = a.useState(!1),
            l = a.useMemo(() => e.map(f.bZ), [e]);
        return (
            a.useEffect(() => {
                t(!0),
                    Promise.all(l.map((e) => (0, m.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: n }
        );
    },
    N = () => {
        let [e, n] = a.useState(0);
        return (
            a.useEffect(() => {
                n(1),
                    Promise.all([
                        (0, r.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: h.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, r.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: h.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            n(3);
                        })
                        .then(() => {
                            n(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function E(e, n) {
    return (0, s.cj)([c.ZP, u.Z], () => {
        var t, l, i, a, s;
        for (let r of null !== (t = c.ZP.getActiveApplicationSubscriptions()) && void 0 !== t ? t : []) {
            if ((0, f.KK)(null !== (a = null == e ? void 0 : e.flags) && void 0 !== a ? a : 0) && null != n && (null === (l = r.metadata) || void 0 === l ? void 0 : l.application_subscription_guild_id) !== n) continue;
            let t = (null !== (s = null === (i = r.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== s ? s : r.items)
                .map((e) => u.Z.get(e.planId))
                .find((n) => {
                    var t;
                    return null != n && null !== (t = null == e ? void 0 : e.bundledSkuIds.includes(n.skuId)) && void 0 !== t && t;
                });
            if (null != t)
                return {
                    subscription: r,
                    subscriptionPlan: t
                };
        }
        return {};
    });
}
