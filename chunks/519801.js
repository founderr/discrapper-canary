t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(789020);
var r = t(735250),
    i = t(470079),
    a = t(131388),
    s = t(607070),
    o = t(745510),
    l = t(171246),
    c = t(689011),
    u = t(931905),
    d = t(598),
    I = t(409813),
    _ = t(586585),
    m = t(456251),
    f = t(614277),
    p = t(698708),
    T = t(750143),
    h = t(689938);
function N(e) {
    var n, t;
    let N,
        E,
        { showBenefits: C, handleClose: S, onSubscriptionConfirmation: P } = e,
        { updatedSubscription: g, readySlideId: A, selectedSku: O, selectedStoreListing: x, application: v } = (0, d.usePaymentContext)(),
        R = (0, a.Z)(T.i),
        { createMultipleConfettiAt: b } = i.useContext(o.h),
        M = null !== (n = null == O ? void 0 : O.name) && void 0 !== n ? n : '',
        L = () => {
            S(), null == P || P();
        },
        B = A === I.h8.CONFIRM,
        U = (0, l.KW)(null !== (t = null == O ? void 0 : O.flags) && void 0 !== t ? t : 0),
        j = null != x && x.benefits.length > 0 ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: x.benefits.length }) : null;
    return (
        C
            ? R
                ? (N = (0, r.jsx)(u.h, {
                      title: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: M }),
                      subtitle: null != x && x.benefits.length > 0 ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: j }) : null,
                      onConfirm: L,
                      confirmCta: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((N =
                      null != x && null != v
                          ? (0, r.jsx)(c.Oc, {
                                icon: x.thumbnail,
                                storeListingBenefits: x.benefits,
                                application: v,
                                title: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: M }),
                                subtitle: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: U ? h.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == v ? void 0 : v.name }) : h.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: M })
                            })
                          : (0, r.jsx)(m.Z, {})),
                  (E = (0, r.jsx)(_.Z, {
                      onPrimary: L,
                      primaryCTA: _.g.CONTINUE,
                      primaryText: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                  })))
            : (N = R
                  ? (0, r.jsx)(u.m, {
                        tierName: M,
                        onConfirm: L,
                        subscription: g
                    })
                  : (0, r.jsx)(c.xe, {
                        tierName: M,
                        onConfirm: L,
                        subscription: g
                    })),
        i.useEffect(() => {
            s.Z.useReducedMotion && B && b(window.innerWidth / 2, window.innerHeight / 2);
        }, [b, B]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(p.Z, {}), N]
                }),
                null != E && (0, r.jsx)(f.O3, { children: E })
            ]
        })
    );
}
