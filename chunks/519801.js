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
    h = n(409813),
    I = n(586585),
    _ = n(456251),
    f = n(614277),
    m = n(698708),
    E = n(750143),
    S = n(689938);
function p(e) {
    var t, n;
    let p,
        T,
        { showBenefits: C, handleClose: N, onSubscriptionConfirmation: A } = e,
        { updatedSubscription: O, readySlideId: P, selectedSku: b, selectedStoreListing: g, application: R } = (0, d.usePaymentContext)(),
        v = (0, i.Z)(E.i),
        { createMultipleConfettiAt: x } = a.useContext(s.h),
        L = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : '',
        M = () => {
            N(), null == A || A();
        },
        k = P === h.h8.CONFIRM,
        j = (0, o.KW)(null !== (n = null == b ? void 0 : b.flags) && void 0 !== n ? n : 0),
        B = null != g && g.benefits.length > 0 ? S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: g.benefits.length }) : null;
    return (
        C
            ? v
                ? (p = (0, r.jsx)(c.h, {
                      title: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: L }),
                      subtitle: null != g && g.benefits.length > 0 ? S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: B }) : null,
                      onConfirm: M,
                      confirmCta: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((p =
                      null != g && null != R
                          ? (0, r.jsx)(u.Oc, {
                                icon: g.thumbnail,
                                storeListingBenefits: g.benefits,
                                application: R,
                                title: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: L }),
                                subtitle: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: j ? S.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == R ? void 0 : R.name }) : S.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: L })
                            })
                          : (0, r.jsx)(_.Z, {})),
                  (T = (0, r.jsx)(I.Z, {
                      onPrimary: M,
                      primaryCTA: I.g.CONTINUE,
                      primaryText: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                  })))
            : (p = v
                  ? (0, r.jsx)(c.m, {
                        tierName: L,
                        onConfirm: M,
                        subscription: O
                    })
                  : (0, r.jsx)(u.xe, {
                        tierName: L,
                        onConfirm: M,
                        subscription: O
                    })),
        a.useEffect(() => {
            l.Z.useReducedMotion && k && x(window.innerWidth / 2, window.innerHeight / 2);
        }, [x, k]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(m.Z, {}), p]
                }),
                null != T && (0, r.jsx)(f.O3, { children: T })
            ]
        })
    );
}
