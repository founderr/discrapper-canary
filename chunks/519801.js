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
    c = t(171246),
    s = t(689011),
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
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: k } = e,
        { updatedSubscription: y, readySlideId: j, selectedSku: T, selectedStoreListing: P, application: O } = (0, u.usePaymentContext)(),
        B = (0, o.Z)(g.i),
        { createMultipleConfettiAt: E } = r.useContext(l.h),
        N = null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : '',
        I = () => {
            S(), null == k || k();
        },
        A = j === p.h8.CONFIRM,
        w = (0, c.KW)(null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0),
        M = null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t['+IQQVF'], { benefitCount: P.benefits.length }) : null;
    return (
        C
            ? B
                ? (_ = (0, i.jsx)(d.h, {
                      title: x.intl.format(x.t.ea6tZm, { tierName: N }),
                      subtitle: null != P && P.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: M }) : null,
                      onConfirm: I,
                      confirmCta: x.intl.string(x.t.nlkyw8)
                  }))
                : ((_ =
                      null != P && null != O
                          ? (0, i.jsx)(s.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: O,
                                title: x.intl.format(x.t['Q+qktb'], { tier: N }),
                                subtitle: x.intl.string(x.t.ECKxXV),
                                description: w ? x.intl.format(x.t.MAtQk5, { applicationName: null == O ? void 0 : O.name }) : x.intl.format(x.t.vHkMFx, { tier: N })
                            })
                          : (0, i.jsx)(m.Z, {})),
                  (v = (0, i.jsx)(f.Z, {
                      onPrimary: I,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: x.intl.string(x.t['JtWl+f'])
                  })))
            : (_ = B
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
            a.Z.useReducedMotion && A && E(window.innerWidth / 2, window.innerHeight / 2);
        }, [E, A]),
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
