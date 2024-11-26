t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(131388),
    a = t(607070),
    l = t(745510),
    c = t(171246),
    d = t(689011),
    s = t(931905),
    u = t(563132),
    f = t(409813),
    p = t(586585),
    m = t(456251),
    b = t(614277),
    _ = t(698708),
    x = t(750143),
    g = t(388032);
function h(e) {
    var n, t;
    let h,
        C,
        { showBenefits: v, handleClose: S, onSubscriptionConfirmation: j } = e,
        { updatedSubscription: k, readySlideId: T, selectedSku: y, selectedStoreListing: P, application: B } = (0, u.usePaymentContext)(),
        N = (0, o.Z)(x.i),
        { createMultipleConfettiAt: E } = r.useContext(l.h),
        A = null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
        I = () => {
            S(), null == j || j();
        },
        O = T === f.h8.CONFIRM,
        Z = (0, c.KW)(null !== (t = null == y ? void 0 : y.flags) && void 0 !== t ? t : 0),
        M = null != P && P.benefits.length > 0 ? g.intl.formatToPlainString(g.t['+IQQVF'], { benefitCount: P.benefits.length }) : null;
    return (
        v
            ? N
                ? (h = (0, i.jsx)(s.h, {
                      title: g.intl.format(g.t.ea6tZm, { tierName: A }),
                      subtitle: null != P && P.benefits.length > 0 ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M }) : null,
                      onConfirm: I,
                      confirmCta: g.intl.string(g.t.nlkyw8)
                  }))
                : ((h =
                      null != P && null != B
                          ? (0, i.jsx)(d.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: B,
                                title: g.intl.format(g.t['Q+qktb'], { tier: A }),
                                subtitle: g.intl.string(g.t.ECKxXV),
                                description: Z ? g.intl.format(g.t.MAtQk5, { applicationName: null == B ? void 0 : B.name }) : g.intl.format(g.t.vHkMFx, { tier: A })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (C = (0, i.jsx)(p.Z, {
                      onPrimary: I,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: g.intl.string(g.t['JtWl+f'])
                  })))
            : (h = N
                  ? (0, i.jsx)(s.m, {
                        tierName: A,
                        onConfirm: I,
                        subscription: k
                    })
                  : (0, i.jsx)(d.xe, {
                        tierName: A,
                        onConfirm: I,
                        subscription: k
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && O && E(window.innerWidth / 2, window.innerHeight / 2);
        }, [E, O]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(b.C3, {
                    children: [(0, i.jsx)(_.Z, {}), h]
                }),
                null != C && (0, i.jsx)(b.O3, { children: C })
            ]
        })
    );
}
