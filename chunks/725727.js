r.d(n, {
    YO: function () {
        return I;
    },
    lG: function () {
        return v;
    },
    mq: function () {
        return T;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(570140),
    l = r(594174),
    u = r(78839),
    c = r(431),
    d = r(74538),
    f = r(775412),
    _ = r(163684),
    h = r(518638),
    p = r(748770),
    m = r(1844),
    g = r(474936);
function E(e, n, r, i) {
    let o = (0, s.Wu)([m.Z], () => m.Z.outboundPromotions),
        l = (0, s.e7)([m.Z], () => m.Z.consumedInboundPromotionId);
    return a.useMemo(() => o.filter((a) => a.id !== l && !!(0, h.ZC)(a) && !r && ((!e && !n) || (0, h.Qf)(a, i))), [o, l, r, e, n, i]);
}
function v() {
    let e = (0, s.e7)([m.Z], () => m.Z.lastFetchedActivePromotions),
        n = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
        r = (0, f._O)(),
        i = (0, s.e7)([c.Z], () => c.Z.hasAnyUnexpiredOffer()),
        v = (0, s.e7)([u.ZP], () => u.ZP.inReverseTrial()),
        [I, T] = a.useState(!1),
        [b, y] = a.useState([]);
    a.useEffect(() => {
        null != e && o.Z.wait(() => p.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let S = a.useCallback((e) => {
            y((n) =>
                n.some((n) => {
                    let { promotion: r } = n;
                    return r.id === e.promotion.id;
                })
                    ? n
                    : [...n, e]
            );
        }, []),
        A = d.ZP.isPremiumExactly(n, g.p9.TIER_2),
        N =
            _.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: A
                }
            ).enabled || A;
    a.useEffect(() => {
        o.Z.wait(() => {
            N && null == e && p.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, N]),
        a.useEffect(() => {
            o.Z.wait(() => {
                (0, h.t8)()
                    .then((e) => {
                        y(e), T(!0);
                    })
                    .catch(() => {
                        y([]), T(!0);
                    });
            });
        }, []);
    let C = {};
    for (let { code: e, promotion: n } of b) C[n.id] = e;
    let R = E(r, i, v, C),
        O = new Set(
            R.map((e) => {
                let { id: n } = e;
                return n;
            })
        ),
        D = b.filter((e) => {
            let { promotion: n } = e;
            return !O.has(n.id);
        });
    return {
        promotionsLoaded: I && (!N || null != e),
        activeOutboundPromotions: R,
        claimedEndedOutboundPromotions: D.filter((e) => (0, h.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: C,
        addClaimedOutboundPromotionCode: S
    };
}
function I() {
    let e = (0, s.e7)([m.Z], () => m.Z.lastSeenOutboundPromotionStartDate),
        n = (0, f._O)(),
        r = (0, s.e7)([c.Z], () => c.Z.hasAnyUnexpiredOffer()),
        i = E(
            n,
            r,
            (0, s.e7)([u.ZP], () => u.ZP.inReverseTrial()),
            {}
        );
    return a
        .useMemo(
            () =>
                null == e
                    ? i
                    : i.filter((n) => {
                          let { startDate: r } = n;
                          return new Date(r) > new Date(e);
                      }),
            [i, e]
        )
        .filter((e) => (0, h.ZC)(e));
}
function T() {
    return { promotion: (0, s.e7)([m.Z], () => m.Z.bogoPromotion) };
}
