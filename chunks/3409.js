n.d(t, {
    fL: function () {
        return eN;
    },
    kx: function () {
        return eA;
    },
    vP: function () {
        return eE;
    }
}),
    n(47120),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    s = n(512722),
    i = n.n(s),
    o = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(355467),
    m = n(873115),
    p = n(159351),
    h = n(801937),
    A = n(282164),
    E = n(915271),
    N = n(228666),
    f = n(723484),
    y = n(122192),
    P = n(581813),
    _ = n(870630),
    b = n(710845),
    g = n(563132),
    C = n(409813),
    I = n(51499),
    T = n(586585),
    S = n(614277),
    v = n(737143),
    x = n(35248),
    R = n(698708),
    L = n(351402),
    M = n(975060),
    O = n(505649),
    D = n(853872),
    j = n(882712),
    w = n(358085),
    Z = n(622999),
    H = n(176919),
    k = n(185139),
    Y = n(559725),
    F = n(439041),
    B = n(850228),
    U = n(231338),
    W = n(388032),
    G = n(802543),
    Q = n(719919);
let V = new b.Z('AddPaymentStep.tsx'),
    K = [C.h8.PAYMENT_TYPE],
    q = [C.h8.PAYMENT_TYPE, C.h8.CREDIT_CARD_INFORMATION, C.h8.ADDRESS],
    z = [C.h8.PAYMENT_TYPE, C.h8.PAYPAL_INFORMATION, C.h8.ADDRESS],
    J = [C.h8.PAYMENT_TYPE, C.h8.VENMO_INFORMATION, C.h8.ADDRESS];
C.h8.PAYMENT_TYPE, C.h8.PAYMENT_REQUEST_INFORMATION, C.h8.ADDRESS;
let X = [C.h8.PAYMENT_TYPE, C.h8.PRZELEWY24_INFORMATION, C.h8.ADDRESS],
    $ = [C.h8.PAYMENT_TYPE, C.h8.EPS_INFORMATION, C.h8.ADDRESS],
    ee = [C.h8.PAYMENT_TYPE, C.h8.IDEAL_INFORMATION, C.h8.ADDRESS],
    et = [C.h8.PAYMENT_TYPE, C.h8.CASH_APP_INFORMATION, C.h8.ADDRESS],
    en = [C.h8.PAYMENT_TYPE, C.h8.ADDRESS],
    ea = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    er = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function el(e) {
    let { onChooseType: t, onPaymentRequestSourceReceived: n, onPaymentRequestSourceFailed: r, analyticsLocation: l, isEligibleForTrial: s } = e;
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            allowStripeRequestPayments: !w.isPlatformEmbedded,
            onStripePaymentMethodReceived: async (e) => {
                if (((0, p.Xt)(e), null == e)) {
                    r();
                    return;
                }
                try {
                    let t = await (0, d.i6)(e, void 0, l),
                        { billingAddressInfo: a } = (0, Z.az)(e);
                    n(t, a);
                } catch (e) {}
            },
            isEligibleForTrial: s
        })
    });
}
function es(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(y.j, {
            billingError: n,
            onCardInfoChange: t
        })
    });
}
function ei() {
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function eo() {
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(E.Z, {})
    });
}
function ec() {
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(B.Z, {})
    });
}
function eu() {
    let e = (0, o.e7)([L.Z], () => L.Z.isBusy),
        t = (0, o.e7)([M.Z], () => M.Z.stripePaymentMethod);
    return (0, a.jsx)(P.k, {
        className: G.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ed(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: G.body,
        children: (0, a.jsx)(N.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function em() {
    return (0, a.jsx)(f.F, { className: G.body });
}
function ep(e) {
    return () => (null != M.Z.error && (0, p.fw)(), e());
}
function eh(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = ep(t));
    let s = n;
    return (
        null != n && (s = ep(n)),
        (0, a.jsx)(T.Z, {
            ...r,
            onPrimary: l,
            onBack: s
        })
    );
}
function eA(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: s, purchaseError: o, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, g.usePaymentContext)(),
        m = {
            ...eN(),
            paymentSources: r,
            paymentSourceId: l,
            setPaymentSourceId: s,
            purchaseError: o,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        i()(n, 'Step should be set here'),
        eE({
            paymentModalArgs: m,
            initialStep: C.h8.PAYMENT_TYPE,
            prependSteps: [C.h8.PROMOTION_INFO],
            appendSteps: [C.h8.REVIEW, C.h8.CONFIRM],
            breadcrumpSteps: t,
            currentBreadcrumpStep: n,
            onReturn: () => a(C.h8.REVIEW),
            onComplete: () => a(C.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eE(e) {
    let t,
        n,
        s,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: N, onReturn: f, onComplete: y, onStepChange: P, breadcrumpSteps: b, currentBreadcrumpStep: L, header: O, analyticsLocation: j, hideBreadcrumbs: w = !1, usePaymentModalStep: Z = !1, isEligibleForTrial: H = !1, allowDesktopRedirectPurchase: B = !1, toastContent: ea, overwriteSubscriptionPaymentSource: er = !1 } = e,
        ep = {
            steps: [...E, ...q, ...N],
            methodType: U.He.CARD
        },
        eA = {
            steps: [...E, ...K, ...N],
            methodType: U.He.PAYMENT_REQUEST
        },
        eE = {
            steps: [...E, ...z, ...N],
            methodType: U.He.PAYPAL
        },
        eN = {
            steps: [...E, ...J, ...N],
            methodType: U.He.VENMO
        },
        ef = {
            steps: [...E, ...K, ...N]
        },
        ey = {
            steps: [...E, ...X, ...N],
            methodType: U.He.PRZELEWY24
        },
        eP = {
            steps: [...E, ...$, ...N],
            methodType: U.He.EPS
        },
        e_ = {
            steps: [...E, ...ee, ...N],
            methodType: U.He.IDEAL
        },
        eb = {
            steps: [...E, ...et, ...N],
            methodType: U.He.CASH_APP
        },
        [eg, eC] = r.useState(A),
        [eI, eT] = r.useState(
            (function (e) {
                switch (e) {
                    case C.h8.CREDIT_CARD_INFORMATION:
                        return ep;
                    case C.h8.CASH_APP_INFORMATION:
                        return eb;
                    default:
                        return { steps: [C.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: eS } = (0, g.usePaymentContext)(),
        ev = (0, o.e7)([M.Z], () => M.Z.redirectedPaymentSourceId),
        ex = (0, o.e7)([F.Z], () => F.Z.cashAppPayComponent);
    function eR(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eC(e),
            t &&
                P({
                    currentStep: eg,
                    toStep: e
                });
    }
    r.useEffect(() => {
        (() => {
            if (null == ev) return;
            let e = D.Z.getPaymentSource(ev);
            if (null != e) e$(e), ek(!1);
        })();
    }, [ev]);
    let { setPaymentSourceId: eL, creditCardState: eM, setCreditCardState: eO, tokenState: eD, setTokenState: ej, isSubmittingCurrentStep: ew, billingAddressState: eZ, setBillingAddressState: eH, setIsSubmittingCurrentStep: ek, hasRedirectURL: eY, setHasRedirectURL: eF, braintreeEmail: eB, braintreeNonce: eU, venmoUsername: eW, adyenPaymentData: eG, isAuthenticating: eQ, epsBankState: eV, setEpsBankState: eK, idealBankState: eq, setIdealBankState: ez, p24BankState: eJ, setP24BankState: eX } = h;
    function e$(e) {
        var t;
        eL(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== ea ? ea : W.intl.string(W.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eg, t), eR(A, !1);
    }
    let e0 = (0, v.q)().enabled && B;
    switch (eg) {
        case C.h8.PAYMENT_TYPE:
            (t = (0, a.jsx)(el, {
                onChooseType: (e) => {
                    switch (e) {
                        case U.He.CARD:
                            e0 ? eR(C.h8.AWAITING_BROWSER_CHECKOUT) : (eT(ep), eR(C.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case U.He.PAYPAL:
                            eT(eE), eR(C.h8.PAYPAL_INFORMATION);
                            break;
                        case U.He.VENMO:
                            eT(eN), eR(C.h8.VENMO_INFORMATION);
                            break;
                        case U.He.PAYMENT_REQUEST:
                            eT(eA), eR(C.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case U.He.PRZELEWY24:
                            eT(ey), eR(C.h8.PRZELEWY24_INFORMATION);
                            break;
                        case U.He.EPS:
                            eT(eP), eR(C.h8.EPS_INFORMATION);
                            break;
                        case U.He.IDEAL:
                            eT(e_), eR(C.h8.IDEAL_INFORMATION);
                            break;
                        case U.He.CASH_APP:
                            eT(eb), eR(C.h8.CASH_APP_INFORMATION);
                            break;
                        case U.He.GIROPAY:
                        case U.He.PAYSAFE_CARD:
                        case U.He.GCASH:
                        case U.He.GRABPAY_MY:
                        case U.He.MOMO_WALLET:
                        case U.He.KAKAOPAY:
                        case U.He.GOPAY_WALLET:
                        case U.He.BANCONTACT:
                            eT({
                                steps: [...E, ...en, ...N],
                                methodType: e
                            }),
                                eR(C.h8.ADDRESS);
                    }
                    null != M.Z.error && (0, p.fw)();
                },
                onPaymentRequestSourceReceived: (e, t) => {
                    eH((e) => ({
                        ...e,
                        info: t
                    })),
                        eT(eA),
                        e$(e);
                },
                onPaymentRequestSourceFailed: () => {
                    eT(ef), eR(C.h8.PAYMENT_TYPE);
                },
                analyticsLocation: j,
                isEligibleForTrial: H
            })),
                (n = (0, a.jsx)(eh, { onBack: f }));
            break;
        case C.h8.CREDIT_CARD_INFORMATION:
            let e1 = async (e) => {
                ek(!0);
                try {
                    let t = await (0, d.qv)(eS, e);
                    ej({ token: t }), eR(C.h8.ADDRESS);
                } catch (e) {
                    var t;
                    V.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    ek(!1);
                }
            };
            (t = (0, a.jsx)(es, {
                onCardInfoChange: (e, t) => {
                    eO({
                        info: e,
                        isValid: t
                    }),
                        eH((t) => ({
                            ...t,
                            info: {
                                ...t.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (n = (0, a.jsx)(l.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, a.jsx)(eh, {
                            onBack: () => eR(C.h8.PAYMENT_TYPE),
                            primaryCTA: T.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.intl.string(W.t.PDTjLC),
                            primarySubmitting: ew,
                            primaryDisabled: !eM.isValid,
                            onPrimary: () => e1(t)
                        });
                    }
                }));
            break;
        case C.h8.AWAITING_BROWSER_CHECKOUT:
            (t = (0, a.jsx)('div', {
                className: G.body,
                children: (0, a.jsx)(x.M, {
                    onPurchaseComplete: () => y(eg),
                    onHandoffFailure: () => {
                        eT(ep), eR(C.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(x.a, {
                    onPrimaryClick: () => {
                        eT(ep), eR(C.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eT(ef), eR(C.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case C.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(_.Z, {
                type: U.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eH({
                        info: {
                            ...eZ.info,
                            name: e
                        },
                        isValid: eZ.isValid
                    }),
                onEPSBankChange: (e) => eK(e),
                epsBankValue: eV,
                billingAddressInfo: eZ.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eV || '' === eV || '' === eZ.info.name,
                    onPrimary: () => eR(C.h8.ADDRESS)
                }));
            break;
        case C.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(_.Z, {
                type: U.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eH({
                        info: {
                            ...eZ.info,
                            name: e
                        },
                        isValid: eZ.isValid
                    }),
                onIdealBankChange: (e) => ez(e),
                idealBankValue: eq,
                billingAddressInfo: eZ.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eq || '' === eq || '' === eZ.info.name,
                    onPrimary: () => eR(C.h8.ADDRESS)
                }));
            break;
        case C.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(_.Z, {
                type: U.He.PRZELEWY24,
                onNameChange: (e) =>
                    eH({
                        info: {
                            ...eZ.info,
                            name: e
                        },
                        isValid: eZ.isValid
                    }),
                onEmailChange: (e) =>
                    eH({
                        info: {
                            ...eZ.info,
                            email: e
                        },
                        isValid: eZ.isValid
                    }),
                onP24BankChange: (e) => {
                    eX(e);
                },
                p24BankValue: eJ,
                billingAddressInfo: eZ.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eZ.info.name || '' === eZ.info.name || void 0 === eZ.info.email || '' === eZ.info.email || void 0 === eJ || '' === eJ,
                    onPrimary: () => eR(C.h8.ADDRESS)
                }));
            break;
        case C.h8.PAYPAL_INFORMATION:
            let e2 = 0 !== eB.length && null != eU;
            (t = (0, a.jsx)(ei, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e2 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t.Djzd7O),
                    onPrimary: () => (e2 ? eR(C.h8.ADDRESS) : (0, m.i0)())
                }));
            break;
        case C.h8.VENMO_INFORMATION:
            let e8 = 0 !== eW.length && null != eU;
            (t = (0, a.jsx)(eo, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e8 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['4KoTLC']),
                    onPrimary: () => (e8 ? eR(C.h8.ADDRESS) : (0, m.og)())
                }));
            break;
        case C.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(eu, {})), (n = (0, a.jsx)(eh, { onBack: () => eR(C.h8.PAYMENT_TYPE) }));
            break;
        case C.h8.CASH_APP_INFORMATION:
            let e4 = null != eG;
            (t = (0, a.jsx)(ec, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(C.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e4 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['9ALP8/']),
                    onPrimary: () => (e4 ? eR(C.h8.ADDRESS) : (0, Y.cp)()),
                    primaryDisabled: !(null != ex)
                }));
            break;
        case C.h8.ADDRESS:
            let e7 = async () => {
                ek(!0);
                let e = eI.methodType;
                switch (e) {
                    case U.He.CARD:
                        try {
                            let e = await (0, d.f0)(eS, eD.token, eZ.info, j);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.VENMO:
                    case U.He.PAYPAL:
                        try {
                            i()(null != eU, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eU, eZ.info, j);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eS, eV, eZ.info, j);
                            e$(e);
                        } catch (e) {
                            V.warn(e);
                        }
                        break;
                    case U.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eS, eq, eZ.info, j);
                            e$(e);
                        } catch (e) {
                            V.warn(e);
                        }
                        break;
                    case U.He.PRZELEWY24:
                        try {
                            if (void 0 === eJ) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eS, { p24Bank: eJ }, eZ.info, j);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.PAYSAFE_CARD:
                    case U.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eZ.info, e, j);
                            e$(t);
                        } catch {}
                        break;
                    case U.He.GCASH:
                    case U.He.MOMO_WALLET:
                    case U.He.KAKAOPAY:
                    case U.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eZ.info, e, j);
                            eF(t);
                        } catch {}
                        break;
                    case U.He.GIROPAY:
                    case U.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eS, eZ.info, e, j);
                            e$(t);
                        } catch {}
                        break;
                    case U.He.CASH_APP:
                        try {
                            i()(null != eG, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eZ.info, e, j, eG, er);
                            i()(null != t, 'Cash App Pay Payment Source missing'), e$(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eY && ek(!1);
            };
            switch (eI.methodType) {
                case U.He.CARD:
                    (u = C.h8.CREDIT_CARD_INFORMATION), (s = U.He.CARD);
                    break;
                case U.He.PAYPAL:
                    (u = C.h8.PAYPAL_INFORMATION), (s = U.He.PAYPAL);
                    break;
                case U.He.VENMO:
                    (u = C.h8.VENMO_INFORMATION), (s = U.He.VENMO);
                    break;
                case U.He.GIROPAY:
                    (u = C.h8.PAYMENT_TYPE), (s = U.He.GIROPAY);
                    break;
                case U.He.PAYSAFE_CARD:
                case U.He.GCASH:
                case U.He.GRABPAY_MY:
                case U.He.MOMO_WALLET:
                case U.He.KAKAOPAY:
                case U.He.GOPAY_WALLET:
                case U.He.BANCONTACT:
                    (u = C.h8.PAYMENT_TYPE), (s = eI.methodType);
                    break;
                case U.He.EPS:
                    (u = C.h8.EPS_INFORMATION), (s = U.He.EPS);
                    break;
                case U.He.IDEAL:
                    (u = C.h8.IDEAL_INFORMATION), (s = U.He.IDEAL);
                    break;
                case U.He.PRZELEWY24:
                    (u = C.h8.PRZELEWY24_INFORMATION), (s = U.He.PRZELEWY24);
                    break;
                case U.He.CASH_APP:
                    (u = C.h8.CASH_APP_INFORMATION), (s = U.He.CASH_APP);
                    break;
                default:
                    (u = C.h8.PAYMENT_TYPE), (s = U.He.CARD);
            }
            (t = (0, a.jsx)(ed, {
                billingAddressInfo: eZ.info,
                onBillingAddressChange: (e, t) => {
                    eH({
                        info: {
                            ...eZ.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: s
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eR(u),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primarySubmitting: ew,
                    primaryDisabled: !eZ.isValid || eQ,
                    onPrimary: e7
                }));
            break;
        case C.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(em, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eg));
    }
    let e6 = (0, a.jsx)(c.Sequencer, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: eg,
            steps: eI.steps,
            sideMargin: 20,
            children: t
        }),
        e3 = eg === C.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return Z
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(R.Z, { className: G.paymentModalError }),
                  H &&
                      (0, a.jsx)(I.Z, {
                          className: G.paymentModalBreadcrumbs,
                          isEligibleForTrial: H
                      }),
                  (0, a.jsx)(S.C3, { children: e6 }),
                  (0, a.jsx)(S.O3, { children: e3 })
              ]
          })
        : (0, a.jsx)(k.Z, {
              steps: null != b ? b : eI.steps,
              currentStep: null != L ? L : eg,
              paymentError: h.paymentError,
              header: O,
              hideBreadcrumbs: w,
              body: e6,
              footer: e3
          });
}
function eN(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: a
    } = (0, o.cj)([D.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : D.Z.defaultPaymentSourceId,
        paymentSources: D.Z.paymentSources,
        hasFetchedPaymentSources: D.Z.hasFetchedPaymentSources
    }));
    r.useEffect(() => {
        null == F.Z.cashAppPayComponent && (0, Y.eI)(), (0, m.eI)(), !a && (0, d.tZ)();
    }, []);
    let [l, s] = r.useState(t);
    null != t && null == l && s(t);
    let [i, c] = r.useState(() => ({
            info: ea,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: er,
            isValid: !1
        })),
        [E, N] = r.useState(''),
        [f, y] = r.useState(''),
        [P, _] = r.useState(''),
        [b, g] = r.useState(() => ({ token: null })),
        [C, I, T, S, v] = (0, o.Wu)([M.Z], () => [M.Z.braintreeEmail, M.Z.braintreeNonce, M.Z.error, M.Z.venmoUsername, M.Z.adyenPaymentData]),
        [x, R] = (0, o.Wu)([O.Z], () => [O.Z.error, O.Z.isAwaitingAuthentication]);
    r.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            A({
                info: t,
                isValid: t.country.length > 0
            });
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, p.fw)();
            }
        );
    }, []);
    let [L, w] = r.useState(!1),
        [Z, k] = r.useState(!1),
        [B, U] = r.useState(null),
        W = r.useRef(null),
        G = (0, o.e7)([O.Z], () => O.Z.isAwaitingAuthentication),
        [Q, V] = (0, o.Wu)([j.Z], () => [j.Z.purchaseTokenAuthState, j.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != B && null != W.current && W.current.scrollIntoView({ behavior: 'smooth' });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: s,
            creditCardState: i,
            setCreditCardState: c,
            tokenState: b,
            setTokenState: g,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: w,
            hasRedirectURL: Z,
            setHasRedirectURL: k,
            braintreeEmail: C,
            braintreeNonce: I,
            venmoUsername: S,
            adyenPaymentData: v,
            paymentError: null != x ? x : T,
            paymentAuthenticationState: R ? H.wr.PENDING : null != x ? H.wr.ERROR : H.wr.NONE,
            purchaseError: B,
            setPurchaseError: U,
            purchaseErrorBlockRef: W,
            isAuthenticating: G,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: V,
            epsBankState: f,
            setEpsBankState: y,
            idealBankState: P,
            setIdealBankState: _,
            p24BankState: E,
            setP24BankState: N
        }
    );
}
