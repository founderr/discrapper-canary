t.d(e, {
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
    o = t(470079),
    r = t(442837),
    a = t(496929),
    s = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    p = t(55563),
    v = t(801249),
    m = t(106976),
    f = t(307643),
    I = t(488915),
    h = t(171246),
    S = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let g = (n) => {
    let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
        i = (0, r.e7)([I.Z], () => (null != e ? I.Z.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        o.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = I.Z.getEntitlementsForGuildFetchState(e);
            t && (n === I.M.NOT_FETCHED || l) && (0, m.i1)(e);
        }, [e, t, l]),
        { entitlementsLoaded: i === I.M.FETCHED }
    );
};
function T(n) {
    var e;
    let t = null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : S.lds,
        { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, r.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n))
        }),
        i = (0, r.e7)([v.Z], () => v.Z.getLastGuildDismissedTime(t)),
        a = (0, r.Wu)([I.Z], () => {
            let n = I.Z.getEntitlementsForGuild(t),
                e = I.Z.getEntitlementsForGuild(t, !1),
                l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
        }),
        s = (0, r.cj)([p.Z], () => p.Z.getSKUs()),
        c = o.useMemo(
            () =>
                a.filter((n) => {
                    let e = s[n.skuId];
                    return null != e && e.available;
                }),
            [a, s]
        );
    return l ? c.filter((n) => null != n.endsAt && n.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - x)) : [];
}
let E = (n) => {
        let [e, t] = o.useState(!1),
            l = o.useMemo(() => n.map(h.bZ), [n]);
        return (
            o.useEffect(() => {
                t(!0),
                    Promise.all(l.map((n) => (0, m.vY)(n)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: e }
        );
    },
    N = () => {
        let [n, e] = o.useState(0);
        return (
            o.useEffect(() => {
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
function R(n, e) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, i] = o.useState([]),
        [a, u] = o.useState(!1);
    return (
        o.useLayoutEffect(() => {
            null != n &&
                t &&
                (u(!0),
                (0, f.tn)(n, e)
                    .then(i)
                    .finally(() => {
                        u(!1);
                    }));
        }, [n, e, t]),
        {
            guilds: (0, r.Wu)([s.Z], () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n), [l]),
            isFetching: a
        }
    );
}
let O = (n) => n.items;
function _(n, e) {
    return b(n, e, O);
}
let Z = (n) => {
    var e;
    return null === (e = n.renewalMutations) || void 0 === e ? void 0 : e.items;
};
function C(n, e) {
    return b(n, e, Z);
}
function b(n, e, t) {
    let l = null == n ? void 0 : n.bundledSkuIds,
        i = null == n ? void 0 : n.flags,
        [a, s] = (0, r.Wu)(
            [d.ZP, c.Z],
            () => {
                var n, o;
                for (let r of null !== (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n ? n : []) {
                    if ((0, h.KK)(null != i ? i : 0) && null != e && (null === (o = r.metadata) || void 0 === o ? void 0 : o.application_subscription_guild_id) !== e) continue;
                    let n = t(r);
                    if (null == n) continue;
                    let a = n
                        .map((n) => c.Z.get(n.planId))
                        .find((n) => {
                            var e;
                            return null != n && null !== (e = null == l ? void 0 : l.includes(n.skuId)) && void 0 !== e && e;
                        });
                    if (null != a) return [r, a];
                }
                return [];
            },
            [i, e, t, l]
        );
    return o.useMemo(() => {
        if (null != a && null != s)
            return {
                subscription: a,
                subscriptionPlan: s
            };
    }, [a, s]);
}
