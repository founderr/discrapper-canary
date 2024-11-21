n.d(t, {
    YO: function () {
        return E;
    },
    lG: function () {
        return g;
    },
    mq: function () {
        return v;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(570140),
    s = n(594174),
    o = n(78839),
    l = n(431),
    u = n(74538),
    c = n(775412),
    d = n(163684),
    f = n(518638),
    _ = n(748770),
    p = n(1844),
    h = n(474936);
function m(e, t, n, a) {
    let s = (0, i.Wu)([p.Z], () => p.Z.outboundPromotions),
        o = (0, i.e7)([p.Z], () => p.Z.consumedInboundPromotionId);
    return r.useMemo(() => s.filter((r) => r.id !== o && !!(0, f.ZC)(r) && !n && ((!e && !t) || (0, f.Qf)(r, a))), [s, o, n, e, t, a]);
}
function g() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, c._O)(),
        g = (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        E = (0, i.e7)([o.ZP], () => o.ZP.inReverseTrial()),
        [v, b] = r.useState(!1),
        [I, T] = r.useState([]);
    r.useEffect(() => {
        null != e && a.Z.wait(() => _.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let S = r.useCallback((e) => {
            T((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        y = u.ZP.isPremiumExactly(t, h.p9.TIER_2),
        A =
            d.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: y
                }
            ).enabled || y;
    r.useEffect(() => {
        a.Z.wait(() => {
            A && null == e && _.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, A]),
        r.useEffect(() => {
            a.Z.wait(() => {
                (0, f.t8)()
                    .then((e) => {
                        T(e), b(!0);
                    })
                    .catch(() => {
                        T([]), b(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: t } of I) N[t.id] = e;
    let C = m(n, g, E, N),
        R = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            })
        ),
        O = I.filter((e) => {
            let { promotion: t } = e;
            return !R.has(t.id);
        });
    return {
        promotionsLoaded: v && (!A || null != e),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: O.filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: S
    };
}
function E() {
    let e = (0, i.e7)([p.Z], () => p.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        a = m(
            t,
            n,
            (0, i.e7)([o.ZP], () => o.ZP.inReverseTrial()),
            {}
        );
    return r
        .useMemo(
            () =>
                null == e
                    ? a
                    : a.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [a, e]
        )
        .filter((e) => (0, f.ZC)(e));
}
function v() {
    return { promotion: (0, i.e7)([p.Z], () => p.Z.bogoPromotion) };
}
