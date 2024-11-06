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
    b = t(456251),
    m = t(614277),
    h = t(698708),
    x = t(750143),
    g = t(388032);
function _(e) {
    var n, t;
    let _,
        v,
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: k } = e,
        { updatedSubscription: y, readySlideId: j, selectedSku: T, selectedStoreListing: P, application: B } = (0, u.usePaymentContext)(),
        E = (0, o.Z)(x.i),
        { createMultipleConfettiAt: N } = r.useContext(l.h),
        O = null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : '',
        I = () => {
            S(), null == k || k();
        },
        w = j === p.h8.CONFIRM,
        A = (0, c.KW)(null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0),
        M = null != P && P.benefits.length > 0 ? g.intl.formatToPlainString(g.t['+IQQVF'], { benefitCount: P.benefits.length }) : null;
    return (
        C
            ? E
                ? (_ = (0, i.jsx)(d.h, {
                      title: g.intl.format(g.t.ea6tZm, { tierName: O }),
                      subtitle: null != P && P.benefits.length > 0 ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M }) : null,
                      onConfirm: I,
                      confirmCta: g.intl.string(g.t.nlkyw8)
                  }))
                : ((_ =
                      null != P && null != B
                          ? (0, i.jsx)(s.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: B,
                                title: g.intl.format(g.t['Q+qktb'], { tier: O }),
                                subtitle: g.intl.string(g.t.ECKxXV),
                                description: A ? g.intl.format(g.t.MAtQk5, { applicationName: null == B ? void 0 : B.name }) : g.intl.format(g.t.vHkMFx, { tier: O })
                            })
                          : (0, i.jsx)(b.Z, {})),
                  (v = (0, i.jsx)(f.Z, {
                      onPrimary: I,
                      primaryCTA: f.g.CONTINUE,
                      primaryText: g.intl.string(g.t['JtWl+f'])
                  })))
            : (_ = E
                  ? (0, i.jsx)(d.m, {
                        tierName: O,
                        onConfirm: I,
                        subscription: y
                    })
                  : (0, i.jsx)(s.xe, {
                        tierName: O,
                        onConfirm: I,
                        subscription: y
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && w && N(window.innerWidth / 2, window.innerHeight / 2);
        }, [N, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(m.C3, {
                    children: [(0, i.jsx)(h.Z, {}), _]
                }),
                null != v && (0, i.jsx)(m.O3, { children: v })
            ]
        })
    );
}
