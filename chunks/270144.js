n.d(t, {
    C9: function () {
        return C;
    },
    CR: function () {
        return D;
    },
    h6: function () {
        return y;
    },
    jd: function () {
        return r;
    },
    qz: function () {
        return b;
    },
    sp: function () {
        return L;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(470079),
    s = n(512722),
    l = n.n(s),
    u = n(442837),
    c = n(496929),
    d = n(430824),
    _ = n(496675),
    E = n(509545),
    f = n(78839),
    h = n(580130),
    p = n(55563),
    m = n(801249),
    I = n(106976),
    T = n(307643),
    g = n(488915),
    S = n(171246),
    A = n(981631);
let v = 2592000000;
!(function (e) {
    (e[(e.NOT_LOADED = 0)] = 'NOT_LOADED'), (e[(e.LOADING = 1)] = 'LOADING'), (e[(e.LOADED = 2)] = 'LOADED'), (e[(e.ERROR = 3)] = 'ERROR');
})(r || (r = {}));
let N = (e) => {
        let { guildId: t, canFetch: n = !0, forceRefetch: r = !1 } = e,
            i = (0, u.e7)([g.Z], () => (null != t ? g.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
        return (
            o.useEffect(() => {
                if (null == t || t === A.ME) return;
                let e = g.Z.getEntitlementsForGuildFetchState(t);
                n && (e === g.M.NOT_FETCHED || r) && (0, I.i1)(t);
            }, [t, n, r]),
            { entitlementsLoaded: i === g.M.FETCHED }
        );
    },
    O = [],
    R = [];
function C(e, t) {
    l()(null == e || e.type === A.epS.SUBSCRIPTION_GROUP, 'SKU must be a subscription group');
    let n = null == e ? void 0 : e.bundledSkuIds,
        r = null == e ? void 0 : e.applicationId,
        i = (0, u.e7)([f.ZP], () => f.ZP.getSubscriptions(), []),
        a = (0, u.Wu)([g.Z], () => (null != r && null != t ? g.Z.getApplicationEntitlementsForGuild(r, t) : O), [r, t]),
        s = (0, u.Wu)(
            [h.Z],
            () => {
                var e;
                return null != r ? [...(null !== (e = h.Z.getForApplication(r)) && void 0 !== e ? e : [])] : R;
            },
            [r]
        ),
        c = o.useMemo(() => [...a, ...s].filter((e) => (null == n ? void 0 : n.includes(e.skuId)) && e.isValid(null, p.Z)), [a, s, n]);
    return (0, u.cj)(
        [E.Z, p.Z],
        () => {
            let e, r;
            if (null == i) return {};
            for (let a of Object.values(i)) {
                if (null == r) {
                    let e = (0, S.z0)(E.Z, null != n ? n : [], a);
                    null != e && (r = { upcomingSubscriptionPlan: e });
                }
                if (null == e)
                    for (let n of c) {
                        let r = (0, S.PB)(E.Z, p.Z, a, n, t);
                        if (null != r) {
                            e = {
                                activeSubscription: a,
                                activeSubscriptionPlan: r,
                                activeEntitlement: n
                            };
                            break;
                        }
                    }
                if (null != e && null != r) break;
            }
            return {
                ...e,
                ...r
            };
        },
        [i, n, c, t]
    );
}
function y(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.lds,
        { entitlementsLoaded: r } = N({
            guildId: n,
            canFetch: (0, u.e7)([_.Z], () => _.Z.can(A.Plq.ADMINISTRATOR, e))
        }),
        i = (0, u.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(n)),
        a = (0, u.Wu)([g.Z], () => {
            let e = g.Z.getEntitlementsForGuild(n),
                t = g.Z.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        s = (0, u.cj)([p.Z], () => p.Z.getSKUs()),
        l = o.useMemo(
            () =>
                a.filter((e) => {
                    let t = s[e.skuId];
                    return null != t && t.available;
                }),
            [a, s]
        );
    return r ? l.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - v)) : [];
}
let L = (e) => {
        let [t, n] = o.useState(!1),
            r = o.useMemo(() => e.map(S.bZ), [e]),
            i = (0, u.Wu)([E.Z], () => r.filter((e) => null == E.Z.get(e)), [r]);
        return (
            o.useEffect(() => {
                i.length > 0 &&
                    (n(!0),
                    Promise.all(i.map((e) => (0, I.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [i]),
            { loading: t }
        );
    },
    b = () => {
        let [e, t] = o.useState(0);
        return (
            o.useEffect(() => {
                t(1),
                    (0, c.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: A.qc2.APPLICATION_SUBSCRIPTION
                    })
                        .catch(() => {
                            t(3);
                        })
                        .then(() => {
                            t(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function D(e, t) {
    let [n, r] = o.useState([]);
    return (
        o.useEffect(() => {
            null != e && (0, T.tn)(e, t).then(r);
        }, [e, t]),
        (0, u.Wu)([d.Z], () => n.map((e) => d.Z.getGuild(e)).filter((e) => null != e), [n])
    );
}
