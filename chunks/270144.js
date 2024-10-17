t.d(n, {
    CR: function () {
        return _;
    },
    h6: function () {
        return N;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return g;
    },
    sp: function () {
        return E;
    },
    v9: function () {
        return R;
    }
}),
    t(653041),
    t(47120),
    t(773603),
    t(789020);
var l,
    i,
    s = t(470079),
    a = t(442837),
    o = t(496929),
    r = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    p = t(55563),
    m = t(801249),
    v = t(106976),
    f = t(307643),
    h = t(488915),
    I = t(171246),
    S = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let T = (e) => {
    let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
        i = (0, a.e7)([h.Z], () => (null != n ? h.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
    return (
        s.useEffect(() => {
            if (null == n || n === S.ME) return;
            let e = h.Z.getEntitlementsForGuildFetchState(n);
            t && (e === h.M.NOT_FETCHED || l) && (0, v.i1)(n);
        }, [n, t, l]),
        { entitlementsLoaded: i === h.M.FETCHED }
    );
};
function N(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : S.lds,
        { entitlementsLoaded: l } = T({
            guildId: t,
            canFetch: (0, a.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, e))
        }),
        i = (0, a.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
        o = (0, a.Wu)([h.Z], () => {
            let e = h.Z.getEntitlementsForGuild(t),
                n = h.Z.getEntitlementsForGuild(t, !1),
                l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
        }),
        r = (0, a.cj)([p.Z], () => p.Z.getSKUs()),
        c = s.useMemo(
            () =>
                o.filter((e) => {
                    let n = r[e.skuId];
                    return null != n && n.available;
                }),
            [o, r]
        );
    return l ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - x)) : [];
}
let E = (e) => {
        let [n, t] = s.useState(!1),
            l = s.useMemo(() => e.map(I.bZ), [e]);
        return (
            s.useEffect(() => {
                t(!0),
                    Promise.all(l.map((e) => (0, v.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: n }
        );
    },
    g = () => {
        let [e, n] = s.useState(0);
        return (
            s.useEffect(() => {
                n(1),
                    Promise.all([
                        (0, o.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, o.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.PURCHASE
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
function _(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = s.useState([]),
        [o, u] = s.useState(!1);
    return (
        s.useLayoutEffect(() => {
            null != e &&
                t &&
                (u(!0),
                (0, f.tn)(e, n)
                    .then(i)
                    .finally(() => {
                        u(!1);
                    }));
        }, [e, n, t]),
        {
            guilds: (0, a.Wu)([r.Z], () => l.map((e) => r.Z.getGuild(e)).filter((e) => null != e), [l]),
            isFetching: o
        }
    );
}
function R(e, n) {
    return (0, a.cj)([d.ZP, c.Z], () => {
        var t, l, i, s, a;
        for (let o of null !== (t = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== t ? t : []) {
            if ((0, I.KK)(null !== (s = null == e ? void 0 : e.flags) && void 0 !== s ? s : 0) && null != n && (null === (l = o.metadata) || void 0 === l ? void 0 : l.application_subscription_guild_id) !== n) continue;
            let t = (null !== (a = null === (i = o.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : o.items)
                .map((e) => c.Z.get(e.planId))
                .find((n) => {
                    var t;
                    return null != n && null !== (t = null == e ? void 0 : e.bundledSkuIds.includes(n.skuId)) && void 0 !== t && t;
                });
            if (null != t)
                return {
                    subscription: o,
                    subscriptionPlan: t
                };
        }
        return {};
    });
}
