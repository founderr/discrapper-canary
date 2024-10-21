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
    l = t(745510),
    s = t(171246),
    c = t(689011),
    d = t(931905),
    u = t(598),
    _ = t(409813),
    p = t(586585),
    f = t(456251),
    I = t(614277),
    C = t(698708),
    b = t(750143),
    m = t(689938);
function S(e) {
    var n, t;
    let S,
        h,
        { showBenefits: T, handleClose: g, onSubscriptionConfirmation: x } = e,
        { updatedSubscription: O, readySlideId: N, selectedSku: P, selectedStoreListing: A, application: E } = (0, u.usePaymentContext)(),
        v = (0, o.Z)(b.i),
        { createMultipleConfettiAt: R } = r.useContext(l.h),
        L = null !== (n = null == P ? void 0 : P.name) && void 0 !== n ? n : '',
        M = () => {
            g(), null == x || x();
        },
        B = N === _.h8.CONFIRM,
        k = (0, s.KW)(null !== (t = null == P ? void 0 : P.flags) && void 0 !== t ? t : 0),
        j = null != A && A.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: A.benefits.length }) : null;
    return (
        T
            ? v
                ? (S = (0, i.jsx)(d.h, {
                      title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({ tierName: L }),
                      subtitle: null != A && A.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: j }) : null,
                      onConfirm: M,
                      confirmCta: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                  }))
                : ((S =
                      null != A && null != E
                          ? (0, i.jsx)(c.Oc, {
                                icon: A.thumbnail,
                                storeListingBenefits: A.benefits,
                                application: E,
                                title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({ tier: L }),
                                subtitle: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                                description: k ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ applicationName: null == E ? void 0 : E.name }) : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: L })
                            })
                          : (0, i.jsx)(f.Z, {})),
                  (h = (0, i.jsx)(p.Z, {
                      onPrimary: M,
                      primaryCTA: p.g.CONTINUE,
                      primaryText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
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
