t.d(e, {
    CR: function () {
        return N;
    },
    Ev: function () {
        return Z;
    },
    LM: function () {
        return E;
    },
    cr: function () {
        return C;
    },
    h6: function () {
        return T;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return R;
    },
    sp: function () {
        return g;
    }
}),
    t(653041),
    t(47120),
    t(773603),
    t(789020);
var l,
    i,
    r = t(192379),
    s = t(442837),
    a = t(496929),
    o = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    f = t(55563),
    p = t(801249),
    v = t(106976),
    m = t(307643),
    h = t(488915),
    I = t(171246),
    S = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let E = (n) => {
    let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
        i = (0, s.e7)([h.Z], () => (null != e ? h.Z.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        r.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(e);
            t && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(e);
        }, [e, t, l]),
        { entitlementsLoaded: i === h.M.FETCHED }
    );
};
function T(n) {
    var e;
    let t = null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : S.lds,
        { entitlementsLoaded: l } = E({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n))
        }),
        i = (0, s.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(t)),
        a = (0, s.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(t),
                e = h.Z.getEntitlementsForGuild(t, !1),
                l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
        }),
        o = (0, s.cj)([f.Z], () => f.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((n) => {
                    let e = o[n.skuId];
                    return null != e && e.available;
                }),
            [a, o]
        );
    return l ? c.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - x)) : [];
}
let g = (n) => {
        let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(I.bZ), [n]);
        return (
            r.useEffect(() => {
                t(!0),
                    Promise.all(l.map((n) => (0, v.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: e }
        );
    },
    R = () => {
        let [n, e] = r.useState(0);
        return (
            r.useEffect(() => {
                e(1),
                    Promise.all([
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, a.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: S.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            e(3);
                        })
                        .then(() => {
                            e(2);
                        });
            }, []),
            { loadState: n }
        );
    };
function N(n, e) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = r.useState([]),
        [a, u] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != n &&
                t &&
                (u(!0),
                (0, m.tn)(n, e)
                    .then(i)
                    .finally(() => {
                        u(!1);
                    }));
        }, [n, e, t]),
        {
            guilds: (0, s.Wu)([o.Z], () => l.map((n) => o.Z.getGuild(n)).filter((n) => null != n), [l]),
            isFetching: a
        }
    );
}
let O = (n) => n.items;
function Z(n, e) {
    return j(n, e, O);
}
let _ = (n) => {
    var e;
    return null === (e = n.renewalMutations) || void 0 === e ? void 0 : e.items;
};
function C(n, e) {
    return j(n, e, _);
}
function j(n, e, t) {
    let l = null == n ? void 0 : n.bundledSkuIds,
        i = null == n ? void 0 : n.flags,
        [a, o] = (0, s.Wu)(
            [d.ZP, c.Z],
            () => {
                var n, r;
                for (let s of null !== (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n ? n : []) {
                    if ((0, I.KK)(null != i ? i : 0) && null != e && (null === (r = s.metadata) || void 0 === r ? void 0 : r.application_subscription_guild_id) !== e) continue;
                    let n = t(s);
                    if (null == n) continue;
                    let a = n
                        .map((n) => c.Z.get(n.planId))
                        .find((n) => {
                            var e;
                            return null != n && null !== (e = null == l ? void 0 : l.includes(n.skuId)) && void 0 !== e && e;
                        });
                    if (null != a) return [s, a];
                }
                return [];
            },
            [i, e, t, l]
        );
    return r.useMemo(() => {
        if (null != a && null != o)
            return {
                subscription: a,
                subscriptionPlan: o
            };
    }, [a, o]);
}
