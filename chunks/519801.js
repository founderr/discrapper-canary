n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(789020);
var r = n(735250),
    a = n(470079),
    i = n(131388),
    l = n(607070),
    s = n(745510),
    o = n(171246),
    u = n(689011),
    c = n(931905),
    d = n(598),
    I = n(409813),
    _ = n(586585),
    h = n(456251),
    f = n(614277),
    S = n(698708),
    E = n(750143),
    m = n(689938);
function p(e) {
    var t, n;
    let p,
        T,
        { showBenefits: C, handleClose: N, onSubscriptionConfirmation: A } = e,
        { updatedSubscription: O, readySlideId: P, selectedSku: b, selectedStoreListing: g, application: R } = (0, d.usePaymentContext)(),
        v = (0, i.Z)(E.i),
        { createMultipleConfettiAt: L } = a.useContext(s.h),
        x = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : '',
        M = () => {
            N(), null == A || A();
        },
        k = P === I.h8.CONFIRM,
        B = (0, o.KW)(null !== (n = null == b ? void 0 : b.flags) && void 0 !== n ? n : 0),
        j = null != g && g.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: g.benefits.length }) : null;
    return (
        C
            ? v
                ? (p = (0, r.jsx)(c.h, {
                      title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: x }),
                      subtitle: null != g && g.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: j }) : null,
                      onConfirm: M,
                      confirmCta: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((p =
                      null != g && null != R
                          ? (0, r.jsx)(u.Oc, {
                                icon: g.thumbnail,
                                storeListingBenefits: g.benefits,
                                application: R,
                                title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: x }),
                                subtitle: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: B ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == R ? void 0 : R.name }) : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: x })
                            })
                          : (0, r.jsx)(h.Z, {})),
                  (T = (0, r.jsx)(_.Z, {
                      onPrimary: M,
                      primaryCTA: _.g.CONTINUE,
                      primaryText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                  })))
            : (p = v
                  ? (0, r.jsx)(c.m, {
                        tierName: x,
                        onConfirm: M,
                        subscription: O
                    })
                  : (0, r.jsx)(u.xe, {
                        tierName: x,
                        onConfirm: M,
                        subscription: O
                    })),
        a.useEffect(() => {
            l.Z.useReducedMotion && k && L(window.innerWidth / 2, window.innerHeight / 2);
        }, [L, k]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(S.Z, {}), p]
                }),
                null != T && (0, r.jsx)(f.O3, { children: T })
            ]
        })
    );
}
