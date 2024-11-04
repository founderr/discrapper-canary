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
    u = n(598),
    p = n(409813),
    f = n(586585),
    m = n(456251),
    b = n(614277),
    h = n(698708),
    g = n(750143),
    x = n(388032);
function _(e) {
    var t, n;
    let _,
        v,
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: k } = e,
        { updatedSubscription: y, readySlideId: T, selectedSku: j, selectedStoreListing: E, application: P } = (0, u.usePaymentContext)(),
        A = (0, o.Z)(g.i),
        { createMultipleConfettiAt: O } = r.useContext(l.h),
        N = null !== (t = null == j ? void 0 : j.name) && void 0 !== t ? t : '',
        I = () => {
            S(), null == k || k();
        },
        B = T === p.h8.CONFIRM,
        w = (0, c.KW)(null !== (n = null == j ? void 0 : j.flags) && void 0 !== n ? n : 0),
        M = null != E && E.benefits.length > 0 ? x.intl.formatToPlainString(x.t['+IQQVF'], { benefitCount: E.benefits.length }) : null;
    return (
        C
            ? A
                ? (_ = (0, i.jsx)(d.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: N }),
                      subtitle: null != E && E.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: M }) : null,
                      onConfirm: I,
                      confirmCta: x.intl.string(x.t.nlkyw8)
                  }))
                : ((_ =
                      null != E && null != P
                          ? (0, i.jsx)(s.Oc, {
                                icon: E.thumbnail,
                                storeListingBenefits: E.benefits,
                                application: P,
                                title: x.intl.format(x.t['Q+qktb'], { tier: N }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: w ? x.intl.format(x.t.MAtQk5, { applicationName: null == P ? void 0 : P.name }) : x.intl.format(x.t.vHkMFx, { tier: N })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (v = (0, i.jsx)(f.Z, {
                      onPrimary: I,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: x.intl.string(x.t['JtWl+f'])
                  })))
            : (_ = A
                  ? (0, i.jsx)(d.m, {
                        tierName: N,
                        onConfirm: I,
                        subscription: y
                    })
                  : (0, i.jsx)(s.xe, {
                        tierName: N,
                        onConfirm: I,
                        subscription: y
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && B && O(window.innerWidth / 2, window.innerHeight / 2);
        }, [O, B]),
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
