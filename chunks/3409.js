t.d(a, {
    fL: function () {
        return eC;
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
var n = t(735250),
    s = t(470079),
    r = t(160612),
    l = t(512722),
    o = t.n(l),
    i = t(442837),
    c = t(481060),
    u = t(570140),
    d = t(355467),
    E = t(873115),
    _ = t(976255),
    A = t(801937),
    m = t(282164),
    N = t(738342),
    p = t(915271),
    h = t(228666),
    C = t(723484),
    I = t(122192),
    T = t(581813),
    P = t(870630),
    S = t(710845),
    R = t(598),
    f = t(409813),
    M = t(51499),
    O = t(586585),
    b = t(614277),
    y = t(737143),
    g = t(35248),
    L = t(698708),
    D = t(351402),
    v = t(975060),
    Z = t(505649),
    x = t(853872),
    Y = t(882712),
    U = t(358085),
    B = t(622999),
    H = t(176919),
    w = t(185139),
    k = t(559725),
    j = t(439041),
    F = t(850228),
    G = t(231338),
    W = t(689938),
    Q = t(100401),
    V = t(896769);
let K = new S.Z('AddPaymentStep.tsx'),
    z = [f.h8.PAYMENT_TYPE],
    q = [f.h8.PAYMENT_TYPE, f.h8.CREDIT_CARD_INFORMATION, f.h8.ADDRESS],
    X = [f.h8.PAYMENT_TYPE, f.h8.PAYPAL_INFORMATION, f.h8.ADDRESS],
    J = [f.h8.PAYMENT_TYPE, f.h8.VENMO_INFORMATION, f.h8.ADDRESS],
    $ = [f.h8.PAYMENT_TYPE, f.h8.SOFORT_INFORMATION, f.h8.ADDRESS];
f.h8.PAYMENT_TYPE, f.h8.PAYMENT_REQUEST_INFORMATION, f.h8.ADDRESS;
let ee = [f.h8.PAYMENT_TYPE, f.h8.PRZELEWY24_INFORMATION, f.h8.ADDRESS],
    ea = [f.h8.PAYMENT_TYPE, f.h8.EPS_INFORMATION, f.h8.ADDRESS],
    et = [f.h8.PAYMENT_TYPE, f.h8.IDEAL_INFORMATION, f.h8.ADDRESS],
    en = [f.h8.PAYMENT_TYPE, f.h8.CASH_APP_INFORMATION, f.h8.ADDRESS],
    es = [f.h8.PAYMENT_TYPE, f.h8.ADDRESS],
    er = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    el = {
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
    let { onChooseType: a, onPaymentRequestSourceReceived: t, onPaymentRequestSourceFailed: s, analyticsLocation: r, isEligibleForTrial: l } = e;
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(A.Z, {
            onChooseType: a,
            allowStripeRequestPayments: !U.isPlatformEmbedded,
            onStripePaymentMethodReceived: async (e) => {
                if (((0, _.Xt)(e), null == e)) {
                    s();
                    return;
                }
                try {
                    let a = await (0, d.i6)(e, void 0, r),
                        { billingAddressInfo: n } = (0, B.az)(e);
                    t(a, n);
                } catch (e) {}
            },
            isEligibleForTrial: l
        })
    });
}
function ei(e) {
    let { onCardInfoChange: a } = e,
        t = (0, i.e7)([v.Z], () => v.Z.error);
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(I.j, {
            billingError: t,
            onCardInfoChange: a
        })
    });
}
function ec() {
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(m.Z, {})
    });
}
function eu() {
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(p.Z, {})
    });
}
function ed() {
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(F.Z, {})
    });
}
function eE() {
    let e = (0, i.e7)([D.Z], () => D.Z.isBusy),
        a = (0, i.e7)([v.Z], () => v.Z.stripePaymentMethod);
    return (0, n.jsx)(T.k, {
        className: Q.body,
        stripePaymentMethod: a,
        submitting: e
    });
}
function e_(e) {
    let { billingAddressInfo: a, onBillingAddressChange: t, paymentSourceType: s } = e,
        r = (0, i.e7)([v.Z], () => v.Z.error);
    return (0, n.jsx)('div', {
        className: Q.body,
        children: (0, n.jsx)(h.P, {
            billingAddressInfo: a,
            billingError: r,
            onBillingAddressChange: t,
            paymentSourceType: s
        })
    });
}
function eA() {
    return (0, n.jsx)(C.F, { className: Q.body });
}
function em(e) {
    return () => (null != v.Z.error && (0, _.fw)(), e());
}
function eN(e) {
    let { onPrimary: a, onBack: t, ...s } = e,
        r = a;
    null != a && (r = em(a));
    let l = t;
    return (
        null != t && (l = em(t)),
        (0, n.jsx)(O.Z, {
            ...s,
            onPrimary: r,
            onBack: l
        })
    );
}
function ep(e) {
    let { breadcrumbSteps: a } = e,
        { step: t, setStep: n, paymentSources: s, paymentSourceId: r, setPaymentSourceId: l, purchaseError: i, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, R.usePaymentContext)(),
        E = {
            ...eC(),
            paymentSources: s,
            paymentSourceId: r,
            setPaymentSourceId: l,
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
            onReturn: () => n(f.h8.REVIEW),
            onComplete: () => n(f.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eh(e) {
    let a,
        t,
        l,
        u,
        { paymentModalArgs: A, initialStep: m, prependSteps: p, appendSteps: h, onReturn: C, onComplete: I, onStepChange: T, breadcrumpSteps: S, currentBreadcrumpStep: D, header: Z, analyticsLocation: Y, hideBreadcrumbs: U = !1, usePaymentModalStep: B = !1, isEligibleForTrial: H = !1, allowDesktopRedirectPurchase: F = !1, toastContent: er, overwriteSubscriptionPaymentSource: el = !1 } = e,
        em = {
            steps: [...p, ...q, ...h],
            methodType: G.He.CARD
        },
        ep = {
            steps: [...p, ...z, ...h],
            methodType: G.He.PAYMENT_REQUEST
        },
        eh = {
            steps: [...p, ...X, ...h],
            methodType: G.He.PAYPAL
        },
        eC = {
            steps: [...p, ...J, ...h],
            methodType: G.He.VENMO
        },
        eI = {
            steps: [...p, ...z, ...h]
        },
        eT = {
            steps: [...p, ...$, ...h],
            methodType: G.He.SOFORT
        },
        eP = {
            steps: [...p, ...ee, ...h],
            methodType: G.He.PRZELEWY24
        },
        eS = {
            steps: [...p, ...ea, ...h],
            methodType: G.He.EPS
        },
        eR = {
            steps: [...p, ...et, ...h],
            methodType: G.He.IDEAL
        },
        ef = {
            steps: [...p, ...en, ...h],
            methodType: G.He.CASH_APP
        },
        [eM, eO] = s.useState(m),
        [eb, ey] = s.useState(
            (function (e) {
                switch (e) {
                    case f.h8.CREDIT_CARD_INFORMATION:
                        return em;
                    case f.h8.CASH_APP_INFORMATION:
                        return ef;
                    default:
                        return { steps: [f.h8.ADD_PAYMENT_STEPS] };
                }
            })(m)
        ),
        { stripe: eg } = (0, R.usePaymentContext)(),
        eL = (0, i.e7)([v.Z], () => v.Z.redirectedPaymentSourceId),
        eD = (0, i.e7)([j.Z], () => j.Z.cashAppPayComponent);
    function ev(e) {
        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eO(e),
            a &&
                T({
                    currentStep: eM,
                    toStep: e
                });
    }
    s.useEffect(() => {
        (() => {
            if (null == eL) return;
            let e = x.Z.getPaymentSource(eL);
            if (null != e) e8(e), ej(!1);
        })();
    }, [eL]);
    let { setPaymentSourceId: eZ, creditCardState: ex, setCreditCardState: eY, tokenState: eU, setTokenState: eB, isSubmittingCurrentStep: eH, billingAddressState: ew, setBillingAddressState: ek, setIsSubmittingCurrentStep: ej, hasRedirectURL: eF, setHasRedirectURL: eG, braintreeEmail: eW, braintreeNonce: eQ, venmoUsername: eV, adyenPaymentData: eK, isAuthenticating: ez, epsBankState: eq, setEpsBankState: eX, idealBankState: eJ, setIdealBankState: e$, p24BankState: e0, setP24BankState: e1 } = A;
    function e8(e) {
        var a;
        eZ(e.id), (a = e), (0, c.showToast)((0, c.createToast)(void 0 !== er ? er : W.Z.Messages.PAYMENT_SOURCE_ADD_SUCCESS_TOAST, c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), I(eM, a), ev(m, !1);
    }
    let e2 = (0, y.q1)().enabled && F;
    switch (eM) {
        case f.h8.PAYMENT_TYPE:
            (a = (0, n.jsx)(eo, {
                onChooseType: (e) => {
                    switch (e) {
                        case G.He.CARD:
                            e2 ? ev(f.h8.AWAITING_BROWSER_CHECKOUT) : (ey(em), ev(f.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case G.He.PAYPAL:
                            ey(eh), ev(f.h8.PAYPAL_INFORMATION);
                            break;
                        case G.He.VENMO:
                            ey(eC), ev(f.h8.VENMO_INFORMATION);
                            break;
                        case G.He.PAYMENT_REQUEST:
                            ey(ep), ev(f.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case G.He.SOFORT:
                            ey(eT), ev(f.h8.SOFORT_INFORMATION);
                            break;
                        case G.He.PRZELEWY24:
                            ey(eP), ev(f.h8.PRZELEWY24_INFORMATION);
                            break;
                        case G.He.EPS:
                            ey(eS), ev(f.h8.EPS_INFORMATION);
                            break;
                        case G.He.IDEAL:
                            ey(eR), ev(f.h8.IDEAL_INFORMATION);
                            break;
                        case G.He.CASH_APP:
                            ey(ef), ev(f.h8.CASH_APP_INFORMATION);
                            break;
                        case G.He.GIROPAY:
                        case G.He.PAYSAFE_CARD:
                        case G.He.GCASH:
                        case G.He.GRABPAY_MY:
                        case G.He.MOMO_WALLET:
                        case G.He.KAKAOPAY:
                        case G.He.GOPAY_WALLET:
                        case G.He.BANCONTACT:
                            ey({
                                steps: [...p, ...es, ...h],
                                methodType: e
                            }),
                                ev(f.h8.ADDRESS);
                    }
                    null != v.Z.error && (0, _.fw)();
                },
                onPaymentRequestSourceReceived: (e, a) => {
                    ek((e) => ({
                        ...e,
                        info: a
                    })),
                        ey(ep),
                        e8(e);
                },
                onPaymentRequestSourceFailed: () => {
                    ey(eI), ev(f.h8.PAYMENT_TYPE);
                },
                analyticsLocation: Y,
                isEligibleForTrial: H
            })),
                (t = (0, n.jsx)(eN, { onBack: C }));
            break;
        case f.h8.CREDIT_CARD_INFORMATION:
            let e4 = async (e) => {
                ej(!0);
                try {
                    let a = await (0, d.qv)(eg, e);
                    eB({ token: a }), ev(f.h8.ADDRESS);
                } catch (e) {
                    var a;
                    K.error(null !== (a = e.message) && void 0 !== a ? a : JSON.stringify(e));
                } finally {
                    ej(!1);
                }
            };
            (a = (0, n.jsx)(ei, {
                onCardInfoChange: (e, a) => {
                    eY({
                        info: e,
                        isValid: a
                    }),
                        ek((a) => ({
                            ...a,
                            info: {
                                ...a.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (t = (0, n.jsx)(r.ElementsConsumer, {
                    children: (e) => {
                        let { elements: a } = e;
                        return (0, n.jsx)(eN, {
                            onBack: () => ev(f.h8.PAYMENT_TYPE),
                            primaryCTA: O.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.Z.Messages.NEXT,
                            primarySubmitting: eH,
                            primaryDisabled: !ex.isValid,
                            onPrimary: () => e4(a)
                        });
                    }
                }));
            break;
        case f.h8.AWAITING_BROWSER_CHECKOUT:
            (a = (0, n.jsx)('div', {
                className: Q.body,
                children: (0, n.jsx)(g.M, {
                    onPurchaseComplete: () => I(eM),
                    onHandoffFailure: () => {
                        ey(em), ev(f.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (t = (0, n.jsx)(g.a, {
                    onPrimaryClick: () => {
                        ey(em), ev(f.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ey(eI), ev(f.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case f.h8.SOFORT_INFORMATION:
            let e7 = ew.info;
            (a = (0, n.jsx)('div', {
                className: Q.body,
                children: (0, n.jsx)(N.Z, {
                    billingAddressInfo: e7,
                    onChange: (e) => {
                        ek({
                            info: {
                                ...e7,
                                ...e
                            },
                            isValid: !1
                        });
                    },
                    error: v.Z.error
                })
            })),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: '' === e7.name || '' === e7.email || void 0 === e7.email,
                    onPrimary: () => ev(f.h8.ADDRESS)
                }));
            break;
        case f.h8.EPS_INFORMATION:
            (a = (0, n.jsx)(P.Z, {
                type: G.He.EPS,
                onAccountHolderNameChange: (e) =>
                    ek({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onEPSBankChange: (e) => eX(e),
                epsBankValue: eq,
                billingAddressInfo: ew.info
            })),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eq || '' === eq || '' === ew.info.name,
                    onPrimary: () => ev(f.h8.ADDRESS)
                }));
            break;
        case f.h8.IDEAL_INFORMATION:
            (a = (0, n.jsx)(P.Z, {
                type: G.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    ek({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onIdealBankChange: (e) => e$(e),
                idealBankValue: eJ,
                billingAddressInfo: ew.info
            })),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eJ || '' === eJ || '' === ew.info.name,
                    onPrimary: () => ev(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PRZELEWY24_INFORMATION:
            (a = (0, n.jsx)(P.Z, {
                type: G.He.PRZELEWY24,
                onNameChange: (e) =>
                    ek({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onEmailChange: (e) =>
                    ek({
                        info: {
                            ...ew.info,
                            email: e
                        },
                        isValid: ew.isValid
                    }),
                onP24BankChange: (e) => {
                    e1(e);
                },
                p24BankValue: e0,
                billingAddressInfo: ew.info
            })),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === ew.info.name || '' === ew.info.name || void 0 === ew.info.email || '' === ew.info.email || void 0 === e0 || '' === e0,
                    onPrimary: () => ev(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PAYPAL_INFORMATION:
            let e6 = 0 !== eW.length && null != eQ;
            (a = (0, n.jsx)(ec, {})),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: e6 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                    onPrimary: () => (e6 ? ev(f.h8.ADDRESS) : (0, E.i0)())
                }));
            break;
        case f.h8.VENMO_INFORMATION:
            let e9 = 0 !== eV.length && null != eQ;
            (a = (0, n.jsx)(eu, {})),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: e9 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
                    onPrimary: () => (e9 ? ev(f.h8.ADDRESS) : (0, E.og)())
                }));
            break;
        case f.h8.PAYMENT_REQUEST_INFORMATION:
            (a = (0, n.jsx)(eE, {})), (t = (0, n.jsx)(eN, { onBack: () => ev(f.h8.PAYMENT_TYPE) }));
            break;
        case f.h8.CASH_APP_INFORMATION:
            let e5 = null != eK;
            (a = (0, n.jsx)(ed, {})),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(f.h8.PAYMENT_TYPE),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: e5 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
                    onPrimary: () => (e5 ? ev(f.h8.ADDRESS) : (0, k.cp)()),
                    primaryDisabled: !(null != eD)
                }));
            break;
        case f.h8.ADDRESS:
            let e3 = async () => {
                ej(!0);
                let e = eb.methodType;
                switch (e) {
                    case G.He.CARD:
                        try {
                            let e = await (0, d.f0)(eg, eU.token, ew.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.VENMO:
                    case G.He.PAYPAL:
                        try {
                            o()(null != eQ, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eQ, ew.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.SOFORT:
                        try {
                            let e = await (0, d.av)(eg, ew.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eg, eq, ew.info, Y);
                            e8(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eg, eJ, ew.info, Y);
                            e8(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.PRZELEWY24:
                        try {
                            if (void 0 === e0) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eg, { p24Bank: e0 }, ew.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.PAYSAFE_CARD:
                    case G.He.GRABPAY_MY:
                        try {
                            let a = await (0, d.sF)(ew.info, e, Y);
                            e8(a);
                        } catch {}
                        break;
                    case G.He.GCASH:
                    case G.He.MOMO_WALLET:
                    case G.He.KAKAOPAY:
                    case G.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: a } = await (0, d.Dk)(ew.info, e, Y);
                            eG(a);
                        } catch {}
                        break;
                    case G.He.GIROPAY:
                    case G.He.BANCONTACT:
                        try {
                            let a = await (0, d.GV)(eg, ew.info, e, Y);
                            e8(a);
                        } catch {}
                        break;
                    case G.He.CASH_APP:
                        try {
                            o()(null != eK, 'Missing adyenPaymentData');
                            let { paymentSource: a } = await (0, d.Dk)(ew.info, e, Y, eK, el);
                            o()(null != a, 'Cash App Pay Payment Source missing'), e8(a);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eF && ej(!1);
            };
            switch (eb.methodType) {
                case G.He.CARD:
                    (u = f.h8.CREDIT_CARD_INFORMATION), (l = G.He.CARD);
                    break;
                case G.He.PAYPAL:
                    (u = f.h8.PAYPAL_INFORMATION), (l = G.He.PAYPAL);
                    break;
                case G.He.VENMO:
                    (u = f.h8.VENMO_INFORMATION), (l = G.He.VENMO);
                    break;
                case G.He.GIROPAY:
                    (u = f.h8.PAYMENT_TYPE), (l = G.He.GIROPAY);
                    break;
                case G.He.SOFORT:
                    (u = f.h8.SOFORT_INFORMATION), (l = G.He.SOFORT);
                    break;
                case G.He.PAYSAFE_CARD:
                case G.He.GCASH:
                case G.He.GRABPAY_MY:
                case G.He.MOMO_WALLET:
                case G.He.KAKAOPAY:
                case G.He.GOPAY_WALLET:
                case G.He.BANCONTACT:
                    (u = f.h8.PAYMENT_TYPE), (l = eb.methodType);
                    break;
                case G.He.EPS:
                    (u = f.h8.EPS_INFORMATION), (l = G.He.EPS);
                    break;
                case G.He.IDEAL:
                    (u = f.h8.IDEAL_INFORMATION), (l = G.He.IDEAL);
                    break;
                case G.He.PRZELEWY24:
                    (u = f.h8.PRZELEWY24_INFORMATION), (l = G.He.PRZELEWY24);
                    break;
                case G.He.CASH_APP:
                    (u = f.h8.CASH_APP_INFORMATION), (l = G.He.CASH_APP);
                    break;
                default:
                    (u = f.h8.PAYMENT_TYPE), (l = G.He.CARD);
            }
            (a = (0, n.jsx)(e_, {
                billingAddressInfo: ew.info,
                onBillingAddressChange: (e, a) => {
                    ek({
                        info: {
                            ...ew.info,
                            ...e
                        },
                        isValid: a
                    });
                },
                paymentSourceType: l
            })),
                (t = (0, n.jsx)(eN, {
                    onBack: () => ev(u),
                    primaryCTA: O.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primarySubmitting: eH,
                    primaryDisabled: !ew.isValid || ez,
                    onPrimary: e3
                }));
            break;
        case f.h8.AWAITING_AUTHENTICATION:
            a = (0, n.jsx)(eA, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eM));
    }
    let ae = (0, n.jsx)(c.Sequencer, {
            className: V.sequencer,
            staticClassName: V.sequencerStatic,
            animatedNodeClassName: V.sequencerAnimatedNode,
            fillParent: !0,
            step: eM,
            steps: eb.steps,
            sideMargin: 20,
            children: a
        }),
        aa = eM === f.h8.PAYMENT_TYPE && 0 === p.length ? null : t;
    return B
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(L.Z, { className: Q.paymentModalError }),
                  H &&
                      (0, n.jsx)(M.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: H
                      }),
                  (0, n.jsx)(b.C3, { children: ae }),
                  (0, n.jsx)(b.O3, { children: aa })
              ]
          })
        : (0, n.jsx)(w.Z, {
              steps: null != S ? S : eb.steps,
              currentStep: null != D ? D : eM,
              paymentError: A.paymentError,
              header: Z,
              hideBreadcrumbs: U,
              body: ae,
              footer: aa
          });
}
function eC(e) {
    let {
        defaultPaymentSourceId: a,
        paymentSources: t,
        hasFetchedPaymentSources: n
    } = (0, i.cj)([x.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : x.Z.defaultPaymentSourceId,
        paymentSources: x.Z.paymentSources,
        hasFetchedPaymentSources: x.Z.hasFetchedPaymentSources
    }));
    s.useEffect(() => {
        null == j.Z.cashAppPayComponent && (0, k.eI)(), (0, E.eI)(), !n && (0, d.tZ)();
    }, []);
    let [r, l] = s.useState(a);
    null != a && null == r && l(a);
    let [o, c] = s.useState(() => ({
            info: er,
            isValid: !1
        })),
        [A, m] = s.useState(() => ({
            info: el,
            isValid: !1
        })),
        [N, p] = s.useState(''),
        [h, C] = s.useState(''),
        [I, T] = s.useState(''),
        [P, S] = s.useState(() => ({ token: null })),
        [R, f, M, O, b] = (0, i.Wu)([v.Z], () => [v.Z.braintreeEmail, v.Z.braintreeNonce, v.Z.error, v.Z.venmoUsername, v.Z.adyenPaymentData]),
        [y, g] = (0, i.Wu)([Z.Z], () => [Z.Z.error, Z.Z.isAwaitingAuthentication]);
    s.useEffect(() => {
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
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, _.fw)();
            }
        );
    }, []);
    let [L, D] = s.useState(!1),
        [U, B] = s.useState(!1),
        [w, F] = s.useState(null),
        G = s.useRef(null),
        W = (0, i.e7)([Z.Z], () => Z.Z.isAwaitingAuthentication),
        [Q, V] = (0, i.Wu)([Y.Z], () => [Y.Z.purchaseTokenAuthState, Y.Z.purchaseTokenHash]);
    return (
        s.useEffect(() => {
            null != w && null != G.current && G.current.scrollIntoView({ behavior: 'smooth' });
        }, [w]),
        {
            paymentSources: t,
            paymentSourceId: r,
            hasFetchedPaymentSources: n,
            setPaymentSourceId: l,
            creditCardState: o,
            setCreditCardState: c,
            tokenState: P,
            setTokenState: S,
            billingAddressState: A,
            setBillingAddressState: m,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: D,
            hasRedirectURL: U,
            setHasRedirectURL: B,
            braintreeEmail: R,
            braintreeNonce: f,
            venmoUsername: O,
            adyenPaymentData: b,
            paymentError: null != y ? y : M,
            paymentAuthenticationState: g ? H.wr.PENDING : null != y ? H.wr.ERROR : H.wr.NONE,
            purchaseError: w,
            setPurchaseError: F,
            purchaseErrorBlockRef: G,
            isAuthenticating: W,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: V,
            epsBankState: h,
            setEpsBankState: C,
            idealBankState: I,
            setIdealBankState: T,
            p24BankState: N,
            setP24BankState: p
        }
    );
}
