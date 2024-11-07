e.d(t, {
    CR: function () {
        return T;
    },
    Ev: function () {
        return C;
    },
    LM: function () {
        return b;
    },
    cr: function () {
        return O;
    },
    h6: function () {
        return Z;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return E;
    },
    sp: function () {
        return x;
    }
}),
    e(653041),
    e(47120),
    e(773603),
    e(789020);
var l,
    i,
    r = e(192379),
    u = e(442837),
    a = e(496929),
    o = e(430824),
    s = e(496675),
    c = e(509545),
    d = e(78839),
    f = e(55563),
    p = e(801249),
    v = e(106976),
    m = e(307643),
    h = e(488915),
    S = e(171246),
    g = e(981631);
let I = 12633 == e.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let b = (n) => {
    let { guildId: t, canFetch: e = !0, forceRefetch: l = !1 } = n,
        i = (0, u.e7)([h.Z], () => (null != t ? h.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        r.useEffect(() => {
            if (null == t || t === g.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(t);
            e && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(t);
        }, [t, e, l]),
        { entitlementsLoaded: i === h.M.FETCHED }
    );
};
function Z(n) {
    var t;
    let e = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : g.lds,
        { entitlementsLoaded: l } = b({
            guildId: e,
            canFetch: (0, u.e7)([s.Z], () => s.Z.can(g.Plq.ADMINISTRATOR, n))
        }),
        i = (0, u.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(e)),
        a = (0, u.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(e),
                t = h.Z.getEntitlementsForGuild(e, !1),
                l = n.map((n) => n.applicationId);
            return t.filter((n) => !l.includes(n.applicationId));
        }),
        o = (0, u.cj)([f.Z], () => f.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((n) => {
                    let t = o[n.skuId];
                    return null != t && t.available;
                }),
            [a, o]
        );
    return l ? c.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - I)) : [];
}
let x = (n) => {
        let [t, e] = r.useState(!1),
            l = r.useMemo(() => n.map(S.bZ), [n]);
        return (
            r.useEffect(() => {
                e(!0),
                    Promise.all(l.map((n) => (0, v.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            e(!1);
                        });
            }, [l]),
            { loading: t }
        );
    },
    E = () => {
        let [n, t] = r.useState(0);
        return (
            r.useEffect(() => {
                t(1),
                    Promise.all([
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: g.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: g.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            t(3);
                        })
                        .then(() => {
                            t(2);
                        });
            }, []),
            { loadState: n }
        );
    };
function T(n, t) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = r.useState([]),
        [a, s] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != n &&
                e &&
                (s(!0),
                (0, m.tn)(n, t)
                    .then(i)
                    .finally(() => {
                        s(!1);
                    }));
        }, [n, t, e]),
        {
            guilds: (0, u.Wu)([o.Z], () => l.map((n) => o.Z.getGuild(n)).filter((n) => null != n), [l]),
            isFetching: a
        }
    );
}
let N = (n) => n.items;
function C(n, t) {
    return _(n, t, N);
}
let P = (n) => {
    var t;
    return null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items;
};
function O(n, t) {
    return _(n, t, P);
}
function _(n, t, e) {
    let l = null == n ? void 0 : n.bundledSkuIds,
        i = null == n ? void 0 : n.flags,
        [a, o] = (0, u.Wu)(
            [d.ZP, c.Z],
            () => {
                var n, r;
                if (null == l || null == i) return [];
                for (let u of null !== (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n ? n : []) {
                    if ((0, S.KK)(i) && null != t && (null === (r = u.metadata) || void 0 === r ? void 0 : r.application_subscription_guild_id) !== t) continue;
                    let n = e(u);
                    if (null == n) continue;
                    let a = n.map((n) => c.Z.get(n.planId)).find((n) => null != n && l.includes(n.skuId));
                    if (null != a) return [u, a];
                }
                return [];
            },
            [i, t, e, l]
        );
    return r.useMemo(() => {
        if (null != a && null != o)
            return {
                subscription: a,
                subscriptionPlan: o
            };
    }, [a, o]);
}
