t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(131388),
    a = t(607070),
    l = t(745510),
    s = t(171246),
    c = t(689011),
    d = t(931905),
    u = t(563132),
    p = t(409813),
    f = t(586585),
    m = t(456251),
    b = t(614277),
    h = t(698708),
    g = t(750143),
    x = t(388032);
function _(e) {
    var n, t;
    let _,
        v,
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: j } = e,
        { updatedSubscription: k, readySlideId: y, selectedSku: T, selectedStoreListing: P, application: B } = (0, u.usePaymentContext)(),
        N = (0, o.Z)(g.i),
        { createMultipleConfettiAt: O } = r.useContext(l.h),
        E = null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : '',
        I = () => {
            S(), null == j || j();
        },
        M = y === p.h8.CONFIRM,
        A = (0, s.KW)(null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0),
        w = null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t['+IQQVF'], { benefitCount: P.benefits.length }) : null;
    return (
        C
            ? N
                ? (_ = (0, i.jsx)(d.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: E }),
                      subtitle: null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: w }) : null,
                      onConfirm: I,
                      confirmCta: x.intl.string(x.t.nlkyw8)
                  }))
                : ((_ =
                      null != P && null != B
                          ? (0, i.jsx)(c.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: B,
                                title: x.intl.format(x.t['Q+qktb'], { tier: E }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: A ? x.intl.format(x.t.MAtQk5, { applicationName: null == B ? void 0 : B.name }) : x.intl.format(x.t.vHkMFx, { tier: E })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (v = (0, i.jsx)(f.Z, {
                      onPrimary: I,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: x.intl.string(x.t['JtWl+f'])
                  })))
            : (_ = N
                  ? (0, i.jsx)(d.m, {
                        tierName: E,
                        onConfirm: I,
                        subscription: k
                    })
                  : (0, i.jsx)(c.xe, {
                        tierName: E,
                        onConfirm: I,
                        subscription: k
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && M && O(window.innerWidth / 2, window.innerHeight / 2);
        }, [O, M]),
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
