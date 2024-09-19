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
    m = n(750143),
    E = n(689938);
function p(e) {
    var t, n;
    let p,
        T,
        { showBenefits: C, handleClose: N, onSubscriptionConfirmation: A } = e,
        { updatedSubscription: O, readySlideId: P, selectedSku: g, selectedStoreListing: b, application: R } = (0, d.usePaymentContext)(),
        v = (0, i.Z)(m.i),
        { createMultipleConfettiAt: L } = a.useContext(s.h),
        x = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : '',
        M = () => {
            N(), null == A || A();
        },
        k = P === I.h8.CONFIRM,
        B = (0, o.KW)(null !== (n = null == g ? void 0 : g.flags) && void 0 !== n ? n : 0),
        j = null != b && b.benefits.length > 0 ? E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: b.benefits.length }) : null;
    return (
        C
            ? v
                ? (p = (0, r.jsx)(c.h, {
                      title: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: x }),
                      subtitle: null != b && b.benefits.length > 0 ? E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: j }) : null,
                      onConfirm: M,
                      confirmCta: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((p =
                      null != b && null != R
                          ? (0, r.jsx)(u.Oc, {
                                icon: b.thumbnail,
                                storeListingBenefits: b.benefits,
                                application: R,
                                title: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: x }),
                                subtitle: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: B ? E.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == R ? void 0 : R.name }) : E.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: x })
                            })
                          : (0, r.jsx)(h.Z, {})),
                  (T = (0, r.jsx)(_.Z, {
                      onPrimary: M,
                      primaryCTA: _.g.CONTINUE,
                      primaryText: E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
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
