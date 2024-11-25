n.d(t, {
    Z: function () {
        return _;
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
    h = n(698708),
    g = n(750143),
    x = n(388032);
function _(e) {
    var t, n;
    let _,
        v,
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: j } = e,
        { updatedSubscription: k, readySlideId: y, selectedSku: T, selectedStoreListing: P, application: B } = (0, u.usePaymentContext)(),
        E = (0, o.Z)(g.i),
        { createMultipleConfettiAt: N } = r.useContext(l.h),
        O = null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : '',
        I = () => {
            S(), null == j || j();
        },
        A = y === f.h8.CONFIRM,
        M = (0, c.KW)(null !== (n = null == T ? void 0 : T.flags) && void 0 !== n ? n : 0),
        w = null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t['+IQQVF'], { benefitCount: P.benefits.length }) : null;
    return (
        C
            ? E
                ? (_ = (0, i.jsx)(d.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: O }),
                      subtitle: null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: w }) : null,
                      onConfirm: I,
                      confirmCta: x.intl.string(x.t.nlkyw8)
                  }))
                : ((_ =
                      null != P && null != B
                          ? (0, i.jsx)(s.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: B,
                                title: x.intl.format(x.t['Q+qktb'], { tier: O }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: M ? x.intl.format(x.t.MAtQk5, { applicationName: null == B ? void 0 : B.name }) : x.intl.format(x.t.vHkMFx, { tier: O })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (v = (0, i.jsx)(p.Z, {
                      onPrimary: I,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: x.intl.string(x.t['JtWl+f'])
                  })))
            : (_ = E
                  ? (0, i.jsx)(d.m, {
                        tierName: O,
                        onConfirm: I,
                        subscription: k
                    })
                  : (0, i.jsx)(s.xe, {
                        tierName: O,
                        onConfirm: I,
                        subscription: k
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && A && N(window.innerWidth / 2, window.innerHeight / 2);
        }, [N, A]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(b.C3, {
                    children: [(0, i.jsx)(h.Z, {}), _]
                }),
                null != v && (0, i.jsx)(b.O3, { children: v })
            ]
        })
    );
}
