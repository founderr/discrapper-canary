t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(131388),
    a = t(607070),
    s = t(745510),
    l = t(171246),
    c = t(689011),
    d = t(931905),
    u = t(598),
    _ = t(409813),
    p = t(586585),
    f = t(456251),
    I = t(614277),
    C = t(698708),
    m = t(750143),
    b = t(689938);
function S(e) {
    var n, t;
    let S,
        h,
        { showBenefits: T, handleClose: g, onSubscriptionConfirmation: x } = e,
        { updatedSubscription: O, readySlideId: N, selectedSku: A, selectedStoreListing: P, application: E } = (0, u.usePaymentContext)(),
        v = (0, o.Z)(m.i),
        { createMultipleConfettiAt: R } = r.useContext(s.h),
        L = null !== (n = null == A ? void 0 : A.name) && void 0 !== n ? n : '',
        M = () => {
            g(), null == x || x();
        },
        B = N === _.h8.CONFIRM,
        k = (0, l.KW)(null !== (t = null == A ? void 0 : A.flags) && void 0 !== t ? t : 0),
        j = null != P && P.benefits.length > 0 ? b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: P.benefits.length }) : null;
    return (
        T
            ? v
                ? (S = (0, i.jsx)(d.h, {
                      title: b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: L }),
                      subtitle: null != P && P.benefits.length > 0 ? b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: j }) : null,
                      onConfirm: M,
                      confirmCta: b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((S =
                      null != P && null != E
                          ? (0, i.jsx)(c.Oc, {
                                icon: P.thumbnail,
                                storeListingBenefits: P.benefits,
                                application: E,
                                title: b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: L }),
                                subtitle: b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: k ? b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == E ? void 0 : E.name }) : b.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: L })
                            })
                          : (0, i.jsx)(f.Z, {})),
                  (h = (0, i.jsx)(p.Z, {
                      onPrimary: M,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                  })))
            : (S = v
                  ? (0, i.jsx)(d.m, {
                        tierName: L,
                        onConfirm: M,
                        subscription: O
                    })
                  : (0, i.jsx)(c.xe, {
                        tierName: L,
                        onConfirm: M,
                        subscription: O
                    })),
        r.useEffect(() => {
            a.Z.useReducedMotion && B && R(window.innerWidth / 2, window.innerHeight / 2);
        }, [R, B]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(I.C3, {
                    children: [(0, i.jsx)(C.Z, {}), S]
                }),
                null != h && (0, i.jsx)(I.O3, { children: h })
            ]
        })
    );
}
