t.d(n, {
    CR: function () {
        return R;
    },
    Ev: function () {
        return _;
    },
    LM: function () {
        return g;
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
        return N;
    },
    sp: function () {
        return E;
    }
}),
    t(653041),
    t(47120),
    t(773603),
    t(789020);
var l,
    i,
    r = t(470079),
    o = t(442837),
    a = t(496929),
    s = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    p = t(55563),
    m = t(801249),
    v = t(106976),
    f = t(307643),
    I = t(488915),
    h = t(171246),
    S = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let g = (e) => {
    let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
        i = (0, o.e7)([I.Z], () => (null != n ? I.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
    return (
        r.useEffect(() => {
            if (null == n || n === S.ME) return;
            let e = I.Z.getEntitlementsForGuildFetchState(n);
            t && (e === I.M.NOT_FETCHED || l) && (0, v.i1)(n);
        }, [n, t, l]),
        { entitlementsLoaded: i === I.M.FETCHED }
    );
};
function T(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : S.lds,
        { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, o.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, e))
        }),
        i = (0, o.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
        a = (0, o.Wu)([I.Z], () => {
            let e = I.Z.getEntitlementsForGuild(t),
                n = I.Z.getEntitlementsForGuild(t, !1),
                l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
        }),
        s = (0, o.cj)([p.Z], () => p.Z.getSKUs()),
        c = r.useMemo(
            () =>
                a.filter((e) => {
                    let n = s[e.skuId];
                    return null != n && n.available;
                }),
            [a, s]
        );
    return l ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - x)) : [];
}
let E = (e) => {
        let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(h.bZ), [e]);
        return (
            r.useEffect(() => {
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
    N = () => {
        let [e, n] = r.useState(0);
        return (
            r.useEffect(() => {
                n(1),
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
                            n(3);
                        })
                        .then(() => {
                            n(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function R(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = r.useState([]),
        [a, u] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
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
            guilds: (0, o.Wu)([s.Z], () => l.map((e) => s.Z.getGuild(e)).filter((e) => null != e), [l]),
            isFetching: a
        }
    );
}
let O = (e) => e.items;
function _(e, n) {
    return b(e, n, O);
}
let Z = (e) => {
    var n;
    return null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items;
};
function C(e, n) {
    return b(e, n, Z);
}
function b(e, n, t) {
    let l = null == e ? void 0 : e.bundledSkuIds,
        i = null == e ? void 0 : e.flags,
        [a, s] = (0, o.Wu)(
            [d.ZP, c.Z],
            () => {
                var e, r;
                for (let o of null !== (e = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []) {
                    if ((0, h.KK)(null != i ? i : 0) && null != n && (null === (r = o.metadata) || void 0 === r ? void 0 : r.application_subscription_guild_id) !== n) continue;
                    let e = t(o);
                    if (null == e) continue;
                    let a = e
                        .map((e) => c.Z.get(e.planId))
                        .find((e) => {
                            var n;
                            return null != e && null !== (n = null == l ? void 0 : l.includes(e.skuId)) && void 0 !== n && n;
                        });
                    if (null != a) return [o, a];
                }
                return [];
            },
            [i, n, t, l]
        );
    return r.useMemo(() => {
        if (null != a && null != s)
            return {
                subscription: a,
                subscriptionPlan: s
            };
    }, [a, s]);
}
