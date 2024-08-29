t.d(a, {
    fL: function () {
        return eT;
    },
    kx: function () {
        return ep;
    },
    vP: function () {
        return eh;
    }
}),
    t(47120),
    t(411104);
var s = t(735250),
    n = t(470079),
    l = t(160612),
    r = t(512722),
    o = t.n(r),
    i = t(442837),
    c = t(481060),
    u = t(570140),
    d = t(355467),
    E = t(873115),
    A = t(976255),
    N = t(801937),
    m = t(282164),
    _ = t(738342),
    p = t(915271),
    h = t(228666),
    T = t(723484),
    C = t(122192),
    S = t(581813),
    I = t(870630),
    P = t(710845),
    R = t(598),
    f = t(409813),
    M = t(51499),
    b = t(586585),
    O = t(614277),
    g = t(737143),
    y = t(35248),
    L = t(698708),
    v = t(351402),
    D = t(975060),
    x = t(505649),
    Z = t(853872),
    Y = t(882712),
    U = t(358085),
    H = t(622999),
    j = t(176919),
    B = t(185139),
    F = t(559725),
    k = t(439041),
    w = t(850228),
    G = t(231338),
    W = t(689938),
    V = t(260173),
    Q = t(83644);
let K = new P.Z('AddPaymentStep.tsx'),
    z = [f.h8.PAYMENT_TYPE],
    X = [f.h8.PAYMENT_TYPE, f.h8.CREDIT_CARD_INFORMATION, f.h8.ADDRESS],
    q = [f.h8.PAYMENT_TYPE, f.h8.PAYPAL_INFORMATION, f.h8.ADDRESS],
    J = [f.h8.PAYMENT_TYPE, f.h8.VENMO_INFORMATION, f.h8.ADDRESS],
    $ = [f.h8.PAYMENT_TYPE, f.h8.SOFORT_INFORMATION, f.h8.ADDRESS];
f.h8.PAYMENT_TYPE, f.h8.PAYMENT_REQUEST_INFORMATION, f.h8.ADDRESS;
let ee = [f.h8.PAYMENT_TYPE, f.h8.PRZELEWY24_INFORMATION, f.h8.ADDRESS],
    ea = [f.h8.PAYMENT_TYPE, f.h8.EPS_INFORMATION, f.h8.ADDRESS],
    et = [f.h8.PAYMENT_TYPE, f.h8.IDEAL_INFORMATION, f.h8.ADDRESS],
    es = [f.h8.PAYMENT_TYPE, f.h8.CASH_APP_INFORMATION, f.h8.ADDRESS],
    en = [f.h8.PAYMENT_TYPE, f.h8.ADDRESS],
    el = {
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
function eo(e) {
    let { onChooseType: a, onPaymentRequestSourceReceived: t, onPaymentRequestSourceFailed: n, analyticsLocation: l, isEligibleForTrial: r } = e;
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(N.Z, {
            onChooseType: a,
            allowStripeRequestPayments: !U.isPlatformEmbedded,
            onStripePaymentMethodReceived: async (e) => {
                if (((0, A.Xt)(e), null == e)) {
                    n();
                    return;
                }
                try {
                    let a = await (0, d.i6)(e, void 0, l),
                        { billingAddressInfo: s } = (0, H.az)(e);
                    t(a, s);
                } catch (e) {}
            },
            isEligibleForTrial: r
        })
    });
}
function ei(e) {
    let { onCardInfoChange: a } = e,
        t = (0, i.e7)([D.Z], () => D.Z.error);
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(C.j, {
            billingError: t,
            onCardInfoChange: a
        })
    });
}
function ec() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(m.Z, {})
    });
}
function eu() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(p.Z, {})
    });
}
function ed() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(w.Z, {})
    });
}
function eE() {
    let e = (0, i.e7)([v.Z], () => v.Z.isBusy),
        a = (0, i.e7)([D.Z], () => D.Z.stripePaymentMethod);
    return (0, s.jsx)(S.k, {
        className: V.body,
        stripePaymentMethod: a,
        submitting: e
    });
}
function eA(e) {
    let { billingAddressInfo: a, onBillingAddressChange: t, paymentSourceType: n } = e,
        l = (0, i.e7)([D.Z], () => D.Z.error);
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(h.P, {
            billingAddressInfo: a,
            billingError: l,
            onBillingAddressChange: t,
            paymentSourceType: n
        })
    });
}
function eN() {
    return (0, s.jsx)(T.F, { className: V.body });
}
function em(e) {
    return () => (null != D.Z.error && (0, A.fw)(), e());
}
function e_(e) {
    let { onPrimary: a, onBack: t, ...n } = e,
        l = a;
    null != a && (l = em(a));
    let r = t;
    return (
        null != t && (r = em(t)),
        (0, s.jsx)(b.Z, {
            ...n,
            onPrimary: l,
            onBack: r
        })
    );
}
function ep(e) {
    let { breadcrumbSteps: a } = e,
        { step: t, setStep: s, paymentSources: n, paymentSourceId: l, setPaymentSourceId: r, purchaseError: i, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, R.usePaymentContext)(),
        E = {
            ...eT(),
            paymentSources: n,
            paymentSourceId: l,
            setPaymentSourceId: r,
            purchaseError: i,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        o()(t, 'Step should be set here'),
        eh({
            paymentModalArgs: E,
            initialStep: f.h8.PAYMENT_TYPE,
            prependSteps: [f.h8.PROMOTION_INFO],
            appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
            breadcrumpSteps: a,
            currentBreadcrumpStep: t,
            onReturn: () => s(f.h8.REVIEW),
            onComplete: () => s(f.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eh(e) {
    let a,
        t,
        r,
        u,
        { paymentModalArgs: N, initialStep: m, prependSteps: p, appendSteps: h, onReturn: T, onComplete: C, onStepChange: S, breadcrumpSteps: P, currentBreadcrumpStep: v, header: x, analyticsLocation: Y, hideBreadcrumbs: U = !1, usePaymentModalStep: H = !1, isEligibleForTrial: j = !1, allowDesktopRedirectPurchase: k = !1, toastContent: w, overwriteSubscriptionPaymentSource: el = !1 } = e,
        er = {
            steps: [...p, ...X, ...h],
            methodType: G.He.CARD
        },
        em = {
            steps: [...p, ...z, ...h],
            methodType: G.He.PAYMENT_REQUEST
        },
        ep = {
            steps: [...p, ...q, ...h],
            methodType: G.He.PAYPAL
        },
        eh = {
            steps: [...p, ...J, ...h],
            methodType: G.He.VENMO
        },
        eT = {
            steps: [...p, ...z, ...h]
        },
        eC = {
            steps: [...p, ...$, ...h],
            methodType: G.He.SOFORT
        },
        eS = {
            steps: [...p, ...ee, ...h],
            methodType: G.He.PRZELEWY24
        },
        eI = {
            steps: [...p, ...ea, ...h],
            methodType: G.He.EPS
        },
        eP = {
            steps: [...p, ...et, ...h],
            methodType: G.He.IDEAL
        },
        eR = {
            steps: [...p, ...es, ...h],
            methodType: G.He.CASH_APP
        },
        [ef, eM] = n.useState(m),
        [eb, eO] = n.useState(
            (function (e) {
                switch (e) {
                    case f.h8.CREDIT_CARD_INFORMATION:
                        return er;
                    case f.h8.CASH_APP_INFORMATION:
                        return eR;
                    default:
                        return { steps: [f.h8.ADD_PAYMENT_STEPS] };
                }
            })(m)
        ),
        { stripe: eg } = (0, R.usePaymentContext)(),
        ey = (0, i.e7)([D.Z], () => D.Z.redirectedPaymentSourceId);
    function eL(e) {
        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eM(e),
            a &&
                S({
                    currentStep: ef,
                    toStep: e
                });
    }
    n.useEffect(() => {
        (() => {
            if (null == ey) return;
            let e = Z.Z.getPaymentSource(ey);
            if (null != e) e0(e), eB(!1);
        })();
    }, [ey]);
    let { setPaymentSourceId: ev, creditCardState: eD, setCreditCardState: ex, tokenState: eZ, setTokenState: eY, isSubmittingCurrentStep: eU, billingAddressState: eH, setBillingAddressState: ej, setIsSubmittingCurrentStep: eB, hasRedirectURL: eF, setHasRedirectURL: ek, braintreeEmail: ew, braintreeNonce: eG, venmoUsername: eW, adyenPaymentData: eV, isAuthenticating: eQ, epsBankState: eK, setEpsBankState: ez, idealBankState: eX, setIdealBankState: eq, p24BankState: eJ, setP24BankState: e$ } = N;
    function e0(e) {
        var a;
        ev(e.id), (a = e), (0, c.showToast)((0, c.createToast)(void 0 !== w ? w : W.Z.Messages.PAYMENT_SOURCE_ADD_SUCCESS_TOAST, c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), C(ef, a), eL(m, !1);
    }
    let e1 = (0, g.q1)().enabled && k;
    switch (ef) {
        case f.h8.PAYMENT_TYPE:
            (a = (0, s.jsx)(eo, {
                onChooseType: (e) => {
                    switch (e) {
                        case G.He.CARD:
                            e1 ? eL(f.h8.AWAITING_BROWSER_CHECKOUT) : (eO(er), eL(f.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case G.He.PAYPAL:
                            eO(ep), eL(f.h8.PAYPAL_INFORMATION);
                            break;
                        case G.He.VENMO:
                            eO(eh), eL(f.h8.VENMO_INFORMATION);
                            break;
                        case G.He.PAYMENT_REQUEST:
                            eO(em), eL(f.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case G.He.SOFORT:
                            eO(eC), eL(f.h8.SOFORT_INFORMATION);
                            break;
                        case G.He.PRZELEWY24:
                            eO(eS), eL(f.h8.PRZELEWY24_INFORMATION);
                            break;
                        case G.He.EPS:
                            eO(eI), eL(f.h8.EPS_INFORMATION);
                            break;
                        case G.He.IDEAL:
                            eO(eP), eL(f.h8.IDEAL_INFORMATION);
                            break;
                        case G.He.CASH_APP:
                            eO(eR), eL(f.h8.CASH_APP_INFORMATION);
                            break;
                        case G.He.GIROPAY:
                        case G.He.PAYSAFE_CARD:
                        case G.He.GCASH:
                        case G.He.GRABPAY_MY:
                        case G.He.MOMO_WALLET:
                        case G.He.KAKAOPAY:
                        case G.He.GOPAY_WALLET:
                        case G.He.BANCONTACT:
                            eO({
                                steps: [...p, ...en, ...h],
                                methodType: e
                            }),
                                eL(f.h8.ADDRESS);
                    }
                    null != D.Z.error && (0, A.fw)();
                },
                onPaymentRequestSourceReceived: (e, a) => {
                    ej((e) => ({
                        ...e,
                        info: a
                    })),
                        eO(em),
                        e0(e);
                },
                onPaymentRequestSourceFailed: () => {
                    eO(eT), eL(f.h8.PAYMENT_TYPE);
                },
                analyticsLocation: Y,
                isEligibleForTrial: j
            })),
                (t = (0, s.jsx)(e_, { onBack: T }));
            break;
        case f.h8.CREDIT_CARD_INFORMATION:
            let e8 = async (e) => {
                eB(!0);
                try {
                    let a = await (0, d.qv)(eg, e);
                    eY({ token: a }), eL(f.h8.ADDRESS);
                } catch (e) {
                    var a;
                    K.error(null !== (a = e.message) && void 0 !== a ? a : JSON.stringify(e));
                } finally {
                    eB(!1);
                }
            };
            (a = (0, s.jsx)(ei, {
                onCardInfoChange: (e, a) => {
                    ex({
                        info: e,
                        isValid: a
                    }),
                        ej((a) => ({
                            ...a,
                            info: {
                                ...a.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (t = (0, s.jsx)(l.ElementsConsumer, {
                    children: (e) => {
                        let { elements: a } = e;
                        return (0, s.jsx)(e_, {
                            onBack: () => eL(f.h8.PAYMENT_TYPE),
                            primaryCTA: b.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.Z.Messages.NEXT,
                            primarySubmitting: eU,
                            primaryDisabled: !eD.isValid,
                            onPrimary: () => e8(a)
                        });
                    }
                }));
            break;
        case f.h8.AWAITING_BROWSER_CHECKOUT:
            (a = (0, s.jsx)('div', {
                className: V.body,
                children: (0, s.jsx)(y.M, {
                    onPurchaseComplete: () => C(ef),
                    onHandoffFailure: () => {
                        eO(er), eL(f.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (t = (0, s.jsx)(y.a, {
                    onPrimaryClick: () => {
                        eO(er), eL(f.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eO(eT), eL(f.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case f.h8.SOFORT_INFORMATION:
            let e2 = eH.info;
            (a = (0, s.jsx)('div', {
                className: V.body,
                children: (0, s.jsx)(_.Z, {
                    billingAddressInfo: e2,
                    onChange: (e) => {
                        ej({
                            info: {
                                ...e2,
                                ...e
                            },
                            isValid: !1
                        });
                    },
                    error: D.Z.error
                })
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: '' === e2.name || '' === e2.email || void 0 === e2.email,
                    onPrimary: () => eL(f.h8.ADDRESS)
                }));
            break;
        case f.h8.EPS_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.EPS,
                onAccountHolderNameChange: (e) =>
                    ej({
                        info: {
                            ...eH.info,
                            name: e
                        },
                        isValid: eH.isValid
                    }),
                onEPSBankChange: (e) => ez(e),
                epsBankValue: eK,
                billingAddressInfo: eH.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eK || '' === eK || '' === eH.info.name,
                    onPrimary: () => eL(f.h8.ADDRESS)
                }));
            break;
        case f.h8.IDEAL_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    ej({
                        info: {
                            ...eH.info,
                            name: e
                        },
                        isValid: eH.isValid
                    }),
                onIdealBankChange: (e) => eq(e),
                idealBankValue: eX,
                billingAddressInfo: eH.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eX || '' === eX || '' === eH.info.name,
                    onPrimary: () => eL(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PRZELEWY24_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.PRZELEWY24,
                onNameChange: (e) =>
                    ej({
                        info: {
                            ...eH.info,
                            name: e
                        },
                        isValid: eH.isValid
                    }),
                onEmailChange: (e) =>
                    ej({
                        info: {
                            ...eH.info,
                            email: e
                        },
                        isValid: eH.isValid
                    }),
                onP24BankChange: (e) => {
                    e$(e);
                },
                p24BankValue: eJ,
                billingAddressInfo: eH.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eH.info.name || '' === eH.info.name || void 0 === eH.info.email || '' === eH.info.email || void 0 === eJ || '' === eJ,
                    onPrimary: () => eL(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PAYPAL_INFORMATION:
            let e4 = 0 !== ew.length && null != eG;
            (a = (0, s.jsx)(ec, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e4 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                    onPrimary: () => (e4 ? eL(f.h8.ADDRESS) : (0, E.i0)())
                }));
            break;
        case f.h8.VENMO_INFORMATION:
            let e7 = 0 !== eW.length && null != eG;
            (a = (0, s.jsx)(eu, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e7 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
                    onPrimary: () => (e7 ? eL(f.h8.ADDRESS) : (0, E.og)())
                }));
            break;
        case f.h8.PAYMENT_REQUEST_INFORMATION:
            (a = (0, s.jsx)(eE, {})), (t = (0, s.jsx)(e_, { onBack: () => eL(f.h8.PAYMENT_TYPE) }));
            break;
        case f.h8.CASH_APP_INFORMATION:
            let e5 = null != eV;
            (a = (0, s.jsx)(ed, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e5 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
                    onPrimary: () => (e5 ? eL(f.h8.ADDRESS) : (0, F.cp)())
                }));
            break;
        case f.h8.ADDRESS:
            let e9 = async () => {
                eB(!0);
                let e = eb.methodType;
                switch (e) {
                    case G.He.CARD:
                        try {
                            let e = await (0, d.f0)(eg, eZ.token, eH.info, Y);
                            e0(e);
                        } catch {}
                        break;
                    case G.He.VENMO:
                    case G.He.PAYPAL:
                        try {
                            o()(null != eG, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eG, eH.info, Y);
                            e0(e);
                        } catch {}
                        break;
                    case G.He.SOFORT:
                        try {
                            let e = await (0, d.av)(eg, eH.info, Y);
                            e0(e);
                        } catch {}
                        break;
                    case G.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eg, eK, eH.info, Y);
                            e0(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eg, eX, eH.info, Y);
                            e0(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.PRZELEWY24:
                        try {
                            if (void 0 === eJ) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eg, { p24Bank: eJ }, eH.info, Y);
                            e0(e);
                        } catch {}
                        break;
                    case G.He.PAYSAFE_CARD:
                    case G.He.GRABPAY_MY:
                        try {
                            let a = await (0, d.sF)(eH.info, e, Y);
                            e0(a);
                        } catch {}
                        break;
                    case G.He.GCASH:
                    case G.He.MOMO_WALLET:
                    case G.He.KAKAOPAY:
                    case G.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: a } = await (0, d.Dk)(eH.info, e, Y);
                            ek(a);
                        } catch {}
                        break;
                    case G.He.GIROPAY:
                    case G.He.BANCONTACT:
                        try {
                            let a = await (0, d.GV)(eg, eH.info, e, Y);
                            e0(a);
                        } catch {}
                        break;
                    case G.He.CASH_APP:
                        try {
                            o()(null != eV, 'Missing adyenPaymentData');
                            let { paymentSource: a } = await (0, d.Dk)(eH.info, e, Y, eV, el);
                            o()(null != a, 'Cash App Pay Payment Source missing'), e0(a);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eF && eB(!1);
            };
            switch (eb.methodType) {
                case G.He.CARD:
                    (u = f.h8.CREDIT_CARD_INFORMATION), (r = G.He.CARD);
                    break;
                case G.He.PAYPAL:
                    (u = f.h8.PAYPAL_INFORMATION), (r = G.He.PAYPAL);
                    break;
                case G.He.VENMO:
                    (u = f.h8.VENMO_INFORMATION), (r = G.He.VENMO);
                    break;
                case G.He.GIROPAY:
                    (u = f.h8.PAYMENT_TYPE), (r = G.He.GIROPAY);
                    break;
                case G.He.SOFORT:
                    (u = f.h8.SOFORT_INFORMATION), (r = G.He.SOFORT);
                    break;
                case G.He.PAYSAFE_CARD:
                case G.He.GCASH:
                case G.He.GRABPAY_MY:
                case G.He.MOMO_WALLET:
                case G.He.KAKAOPAY:
                case G.He.GOPAY_WALLET:
                case G.He.BANCONTACT:
                    (u = f.h8.PAYMENT_TYPE), (r = eb.methodType);
                    break;
                case G.He.EPS:
                    (u = f.h8.EPS_INFORMATION), (r = G.He.EPS);
                    break;
                case G.He.IDEAL:
                    (u = f.h8.IDEAL_INFORMATION), (r = G.He.IDEAL);
                    break;
                case G.He.PRZELEWY24:
                    (u = f.h8.PRZELEWY24_INFORMATION), (r = G.He.PRZELEWY24);
                    break;
                case G.He.CASH_APP:
                    (u = f.h8.CASH_APP_INFORMATION), (r = G.He.CASH_APP);
                    break;
                default:
                    (u = f.h8.PAYMENT_TYPE), (r = G.He.CARD);
            }
            (a = (0, s.jsx)(eA, {
                billingAddressInfo: eH.info,
                onBillingAddressChange: (e, a) => {
                    ej({
                        info: {
                            ...eH.info,
                            ...e
                        },
                        isValid: a
                    });
                },
                paymentSourceType: r
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eL(u),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primarySubmitting: eU,
                    primaryDisabled: !eH.isValid || eQ,
                    onPrimary: e9
                }));
            break;
        case f.h8.AWAITING_AUTHENTICATION:
            a = (0, s.jsx)(eN, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(ef));
    }
    let e6 = (0, s.jsx)(c.Sequencer, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: ef,
            steps: eb.steps,
            sideMargin: 20,
            children: a
        }),
        e3 = ef === f.h8.PAYMENT_TYPE && 0 === p.length ? null : t;
    return H
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(L.Z, { className: V.paymentModalError }),
                  j &&
                      (0, s.jsx)(M.Z, {
                          className: V.paymentModalBreadcrumbs,
                          isEligibleForTrial: j
                      }),
                  (0, s.jsx)(O.C3, { children: e6 }),
                  (0, s.jsx)(O.O3, { children: e3 })
              ]
          })
        : (0, s.jsx)(B.Z, {
              steps: null != P ? P : eb.steps,
              currentStep: null != v ? v : ef,
              paymentError: N.paymentError,
              header: x,
              hideBreadcrumbs: U,
              body: e6,
              footer: e3
          });
}
function eT(e) {
    let {
        defaultPaymentSourceId: a,
        paymentSources: t,
        hasFetchedPaymentSources: s
    } = (0, i.cj)([Z.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : Z.Z.defaultPaymentSourceId,
        paymentSources: Z.Z.paymentSources,
        hasFetchedPaymentSources: Z.Z.hasFetchedPaymentSources
    }));
    n.useEffect(() => {
        null == k.Z.cashAppPayComponent && (0, F.eI)(), (0, E.eI)(), !s && (0, d.tZ)();
    }, []);
    let [l, r] = n.useState(a);
    null != a && null == l && r(a);
    let [o, c] = n.useState(() => ({
            info: el,
            isValid: !1
        })),
        [N, m] = n.useState(() => ({
            info: er,
            isValid: !1
        })),
        [_, p] = n.useState(''),
        [h, T] = n.useState(''),
        [C, S] = n.useState(''),
        [I, P] = n.useState(() => ({ token: null })),
        [R, f, M, b, O] = (0, i.Wu)([D.Z], () => [D.Z.braintreeEmail, D.Z.braintreeNonce, D.Z.error, D.Z.venmoUsername, D.Z.adyenPaymentData]),
        [g, y] = (0, i.Wu)([x.Z], () => [x.Z.error, x.Z.isAwaitingAuthentication]);
    n.useEffect(() => {
        let e = (e) => {
            let { billingAddress: a } = e;
            m({
                info: a,
                isValid: a.country.length > 0
            });
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, A.fw)();
            }
        );
    }, []);
    let [L, v] = n.useState(!1),
        [U, H] = n.useState(!1),
        [B, w] = n.useState(null),
        G = n.useRef(null),
        W = (0, i.e7)([x.Z], () => x.Z.isAwaitingAuthentication),
        [V, Q] = (0, i.Wu)([Y.Z], () => [Y.Z.purchaseTokenAuthState, Y.Z.purchaseTokenHash]);
    return (
        n.useEffect(() => {
            null != B && null != G.current && G.current.scrollIntoView({ behavior: 'smooth' });
        }, [B]),
        {
            paymentSources: t,
            paymentSourceId: l,
            hasFetchedPaymentSources: s,
            setPaymentSourceId: r,
            creditCardState: o,
            setCreditCardState: c,
            tokenState: I,
            setTokenState: P,
            billingAddressState: N,
            setBillingAddressState: m,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: v,
            hasRedirectURL: U,
            setHasRedirectURL: H,
            braintreeEmail: R,
            braintreeNonce: f,
            venmoUsername: b,
            adyenPaymentData: O,
            paymentError: null != g ? g : M,
            paymentAuthenticationState: y ? j.wr.PENDING : null != g ? j.wr.ERROR : j.wr.NONE,
            purchaseError: B,
            setPurchaseError: w,
            purchaseErrorBlockRef: G,
            isAuthenticating: W,
            purchaseTokenAuthState: V,
            purchaseTokenHash: Q,
            epsBankState: h,
            setEpsBankState: T,
            idealBankState: C,
            setIdealBankState: S,
            p24BankState: _,
            setP24BankState: p
        }
    );
}
