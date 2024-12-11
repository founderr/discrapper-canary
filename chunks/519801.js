n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(131388),
    a = n(607070),
    l = n(745510),
    c = n(171246),
    s = n(689011),
    d = n(931905),
    u = n(563132),
    f = n(409813),
    p = n(586585),
    m = n(456251),
    b = n(614277),
    _ = n(698708),
    x = n(750143),
    g = n(388032);
function h(e) {
    var t, n;
    let h,
        C,
        { showBenefits: v, handleClose: S, onSubscriptionConfirmation: j } = e,
        { updatedSubscription: k, readySlideId: T, selectedSku: y, selectedStoreListing: B, application: P } = (0, u.usePaymentContext)(),
        N = (0, o.Z)(x.i),
        { createMultipleConfettiAt: E } = r.useContext(l.h),
        A = null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : '',
        I = () => {
            S(), null == j || j();
        },
        O = T === f.h8.CONFIRM,
        Z = (0, c.KW)(null !== (n = null == y ? void 0 : y.flags) && void 0 !== n ? n : 0),
        M = null != B && B.benefits.length > 0 ? g.intl.formatToPlainString(g.t['+IQQVF'], { benefitCount: B.benefits.length }) : null;
    return (
        v
            ? N
                ? (h = (0, i.jsx)(d.h, {
                      title: g.intl.format(g.t.ea6tZm, { tierName: A }),
                      subtitle: null != B && B.benefits.length > 0 ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M }) : null,
                      onConfirm: I,
                      confirmCta: g.intl.string(g.t.nlkyw8)
                  }))
                : ((h =
                      null != B && null != P
                          ? (0, i.jsx)(s.Oc, {
                                icon: B.thumbnail,
                                storeListingBenefits: B.benefits,
                                application: P,
                                title: g.intl.format(g.t['Q+qktb'], { tier: A }),
                                subtitle: g.intl.string(g.t.ECKxXV),
                                description: Z ? g.intl.format(g.t.MAtQk5, { applicationName: null == P ? void 0 : P.name }) : g.intl.format(g.t.vHkMFx, { tier: A })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (C = (0, i.jsx)(p.Z, {
                      onPrimary: I,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: g.intl.string(g.t['JtWl+f'])
                  })))
            : (h = N
                  ? (0, i.jsx)(d.m, {
                        tierName: A,
                        onConfirm: I,
                        subscription: k
                    })
                  : (0, i.jsx)(s.xe, {
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
