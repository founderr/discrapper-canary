n.d(t, {
    YO: function () {
        return T;
    },
    lG: function () {
        return I;
    },
    mq: function () {
        return g;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(78839),
    u = n(295226),
    c = n(74538),
    d = n(775412),
    _ = n(163684),
    E = n(518638),
    f = n(748770),
    h = n(1844),
    p = n(474936);
function m(e, t, n, r) {
    let o = (0, a.Wu)([h.Z], () => h.Z.outboundPromotions),
        s = (0, a.e7)([h.Z], () => h.Z.consumedInboundPromotionId);
    return i.useMemo(() => o.filter((i) => i.id !== s && !!(0, E.ZC)(i) && !n && ((!e && !t) || (0, E.Qf)(i, r))), [o, s, n, e, t, r]);
}
function I() {
    let e = (0, a.e7)([h.Z], () => h.Z.lastFetchedActivePromotions),
        t = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, d._O)(),
        r = (0, a.e7)([u.Z], () => u.Z.hasAnyUnexpiredOffer()),
        I = (0, a.e7)([l.ZP], () => l.ZP.inReverseTrial()),
        [T, g] = i.useState(!1),
        [S, A] = i.useState([]);
    i.useEffect(() => {
        null != e && o.Z.wait(() => f.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let v = i.useCallback((e) => {
            A((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        N = c.ZP.isPremiumExactly(t, p.p9.TIER_2),
        O =
            _.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: N
                }
            ).enabled || N;
    i.useEffect(() => {
        o.Z.wait(() => {
            O && null == e && f.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, O]),
        i.useEffect(() => {
            o.Z.wait(() => {
                (0, E.t8)()
                    .then((e) => {
                        A(e), g(!0);
                    })
                    .catch(() => {
                        A([]), g(!0);
                    });
            });
        }, []);
    let R = {};
    for (let { code: e, promotion: t } of S) R[t.id] = e;
    let C = m(n, r, I, R),
        y = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            })
        ),
        b = S.filter((e) => {
            let { promotion: t } = e;
            return !y.has(t.id);
        });
    return {
        promotionsLoaded: T && (!O || null != e),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: b.filter((e) => (0, E.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: R,
        addClaimedOutboundPromotionCode: v
    };
}
function T() {
    let e = (0, a.e7)([h.Z], () => h.Z.lastSeenOutboundPromotionStartDate),
        t = (0, d._O)(),
        n = (0, a.e7)([u.Z], () => u.Z.hasAnyUnexpiredOffer()),
        r = m(
            t,
            n,
            (0, a.e7)([l.ZP], () => l.ZP.inReverseTrial()),
            {}
        );
    return i
        .useMemo(
            () =>
                null == e
                    ? r
                    : r.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [r, e]
        )
        .filter((e) => (0, E.ZC)(e));
}
function g() {
    return { promotion: (0, a.e7)([h.Z], () => h.Z.bogoPromotion) };
}
