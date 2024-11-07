n.d(t, {
    fL: function () {
        return eb;
    },
    kx: function () {
        return ef;
    },
    vP: function () {
        return eN;
    }
}),
    n(47120),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    i = n(512722),
    s = n.n(i),
    o = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(355467),
    m = n(873115),
    p = n(159351),
    h = n(801937),
    A = n(282164),
    E = n(738342),
    f = n(915271),
    N = n(228666),
    b = n(723484),
    _ = n(122192),
    y = n(581813),
    P = n(870630),
    g = n(710845),
    C = n(563132),
    T = n(409813),
    I = n(51499),
    S = n(586585),
    v = n(614277),
    x = n(737143),
    L = n(35248),
    R = n(698708),
    O = n(351402),
    M = n(975060),
    w = n(505649),
    D = n(853872),
    Z = n(882712),
    j = n(358085),
    k = n(622999),
    H = n(176919),
    Y = n(185139),
    F = n(559725),
    B = n(439041),
    U = n(850228),
    W = n(231338),
    Q = n(388032),
    V = n(239811),
    G = n(609917);
let K = new g.Z('AddPaymentStep.tsx'),
    z = [T.h8.PAYMENT_TYPE],
    q = [T.h8.PAYMENT_TYPE, T.h8.CREDIT_CARD_INFORMATION, T.h8.ADDRESS],
    J = [T.h8.PAYMENT_TYPE, T.h8.PAYPAL_INFORMATION, T.h8.ADDRESS],
    X = [T.h8.PAYMENT_TYPE, T.h8.VENMO_INFORMATION, T.h8.ADDRESS],
    $ = [T.h8.PAYMENT_TYPE, T.h8.SOFORT_INFORMATION, T.h8.ADDRESS];
T.h8.PAYMENT_TYPE, T.h8.PAYMENT_REQUEST_INFORMATION, T.h8.ADDRESS;
let ee = [T.h8.PAYMENT_TYPE, T.h8.PRZELEWY24_INFORMATION, T.h8.ADDRESS],
    et = [T.h8.PAYMENT_TYPE, T.h8.EPS_INFORMATION, T.h8.ADDRESS],
    en = [T.h8.PAYMENT_TYPE, T.h8.IDEAL_INFORMATION, T.h8.ADDRESS],
    ea = [T.h8.PAYMENT_TYPE, T.h8.CASH_APP_INFORMATION, T.h8.ADDRESS],
    er = [T.h8.PAYMENT_TYPE, T.h8.ADDRESS],
    el = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    ei = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function es(e) {
    let { onChooseType: t, onPaymentRequestSourceReceived: n, onPaymentRequestSourceFailed: r, analyticsLocation: l, isEligibleForTrial: i } = e;
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            allowStripeRequestPayments: !j.isPlatformEmbedded,
            onStripePaymentMethodReceived: async (e) => {
                if (((0, p.Xt)(e), null == e)) {
                    r();
                    return;
                }
                try {
                    let t = await (0, d.i6)(e, void 0, l),
                        { billingAddressInfo: a } = (0, k.az)(e);
                    n(t, a);
                } catch (e) {}
            },
            isEligibleForTrial: i
        })
    });
}
function eo(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(_.j, {
            billingError: n,
            onCardInfoChange: t
        })
    });
}
function ec() {
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function eu() {
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(f.Z, {})
    });
}
function ed() {
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(U.Z, {})
    });
}
function em() {
    let e = (0, o.e7)([O.Z], () => O.Z.isBusy),
        t = (0, o.e7)([M.Z], () => M.Z.stripePaymentMethod);
    return (0, a.jsx)(y.k, {
        className: V.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ep(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(N.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function eh() {
    return (0, a.jsx)(b.F, { className: V.body });
}
function eA(e) {
    return () => (null != M.Z.error && (0, p.fw)(), e());
}
function eE(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = eA(t));
    let i = n;
    return (
        null != n && (i = eA(n)),
        (0, a.jsx)(S.Z, {
            ...r,
            onPrimary: l,
            onBack: i
        })
    );
}
function ef(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: i, purchaseError: o, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, C.usePaymentContext)(),
        m = {
            ...eb(),
            paymentSources: r,
            paymentSourceId: l,
            setPaymentSourceId: i,
            purchaseError: o,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        s()(n, 'Step should be set here'),
        eN({
            paymentModalArgs: m,
            initialStep: T.h8.PAYMENT_TYPE,
            prependSteps: [T.h8.PROMOTION_INFO],
            appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
            breadcrumpSteps: t,
            currentBreadcrumpStep: n,
            onReturn: () => a(T.h8.REVIEW),
            onComplete: () => a(T.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eN(e) {
    let t,
        n,
        i,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: f, appendSteps: N, onReturn: b, onComplete: _, onStepChange: y, breadcrumpSteps: g, currentBreadcrumpStep: O, header: w, analyticsLocation: Z, hideBreadcrumbs: j = !1, usePaymentModalStep: k = !1, isEligibleForTrial: H = !1, allowDesktopRedirectPurchase: U = !1, toastContent: el, overwriteSubscriptionPaymentSource: ei = !1 } = e,
        eA = {
            steps: [...f, ...q, ...N],
            methodType: W.He.CARD
        },
        ef = {
            steps: [...f, ...z, ...N],
            methodType: W.He.PAYMENT_REQUEST
        },
        eN = {
            steps: [...f, ...J, ...N],
            methodType: W.He.PAYPAL
        },
        eb = {
            steps: [...f, ...X, ...N],
            methodType: W.He.VENMO
        },
        e_ = {
            steps: [...f, ...z, ...N]
        },
        ey = {
            steps: [...f, ...$, ...N],
            methodType: W.He.SOFORT
        },
        eP = {
            steps: [...f, ...ee, ...N],
            methodType: W.He.PRZELEWY24
        },
        eg = {
            steps: [...f, ...et, ...N],
            methodType: W.He.EPS
        },
        eC = {
            steps: [...f, ...en, ...N],
            methodType: W.He.IDEAL
        },
        eT = {
            steps: [...f, ...ea, ...N],
            methodType: W.He.CASH_APP
        },
        [eI, eS] = r.useState(A),
        [ev, ex] = r.useState(
            (function (e) {
                switch (e) {
                    case T.h8.CREDIT_CARD_INFORMATION:
                        return eA;
                    case T.h8.CASH_APP_INFORMATION:
                        return eT;
                    default:
                        return { steps: [T.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: eL } = (0, C.usePaymentContext)(),
        eR = (0, o.e7)([M.Z], () => M.Z.redirectedPaymentSourceId),
        eO = (0, o.e7)([B.Z], () => B.Z.cashAppPayComponent);
    function eM(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eS(e),
            t &&
                y({
                    currentStep: eI,
                    toStep: e
                });
    }
    r.useEffect(() => {
        (() => {
            if (null == eR) return;
            let e = D.Z.getPaymentSource(eR);
            if (null != e) e2(e), eB(!1);
        })();
    }, [eR]);
    let { setPaymentSourceId: ew, creditCardState: eD, setCreditCardState: eZ, tokenState: ej, setTokenState: ek, isSubmittingCurrentStep: eH, billingAddressState: eY, setBillingAddressState: eF, setIsSubmittingCurrentStep: eB, hasRedirectURL: eU, setHasRedirectURL: eW, braintreeEmail: eQ, braintreeNonce: eV, venmoUsername: eG, adyenPaymentData: eK, isAuthenticating: ez, epsBankState: eq, setEpsBankState: eJ, idealBankState: eX, setIdealBankState: e$, p24BankState: e0, setP24BankState: e1 } = h;
    function e2(e) {
        var t;
        ew(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== el ? el : Q.intl.string(Q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), _(eI, t), eM(A, !1);
    }
    let e8 = (0, x.q)().enabled && U;
    switch (eI) {
        case T.h8.PAYMENT_TYPE:
            (t = (0, a.jsx)(es, {
                onChooseType: (e) => {
                    switch (e) {
                        case W.He.CARD:
                            e8 ? eM(T.h8.AWAITING_BROWSER_CHECKOUT) : (ex(eA), eM(T.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case W.He.PAYPAL:
                            ex(eN), eM(T.h8.PAYPAL_INFORMATION);
                            break;
                        case W.He.VENMO:
                            ex(eb), eM(T.h8.VENMO_INFORMATION);
                            break;
                        case W.He.PAYMENT_REQUEST:
                            ex(ef), eM(T.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case W.He.SOFORT:
                            ex(ey), eM(T.h8.SOFORT_INFORMATION);
                            break;
                        case W.He.PRZELEWY24:
                            ex(eP), eM(T.h8.PRZELEWY24_INFORMATION);
                            break;
                        case W.He.EPS:
                            ex(eg), eM(T.h8.EPS_INFORMATION);
                            break;
                        case W.He.IDEAL:
                            ex(eC), eM(T.h8.IDEAL_INFORMATION);
                            break;
                        case W.He.CASH_APP:
                            ex(eT), eM(T.h8.CASH_APP_INFORMATION);
                            break;
                        case W.He.GIROPAY:
                        case W.He.PAYSAFE_CARD:
                        case W.He.GCASH:
                        case W.He.GRABPAY_MY:
                        case W.He.MOMO_WALLET:
                        case W.He.KAKAOPAY:
                        case W.He.GOPAY_WALLET:
                        case W.He.BANCONTACT:
                            ex({
                                steps: [...f, ...er, ...N],
                                methodType: e
                            }),
                                eM(T.h8.ADDRESS);
                    }
                    null != M.Z.error && (0, p.fw)();
                },
                onPaymentRequestSourceReceived: (e, t) => {
                    eF((e) => ({
                        ...e,
                        info: t
                    })),
                        ex(ef),
                        e2(e);
                },
                onPaymentRequestSourceFailed: () => {
                    ex(e_), eM(T.h8.PAYMENT_TYPE);
                },
                analyticsLocation: Z,
                isEligibleForTrial: H
            })),
                (n = (0, a.jsx)(eE, { onBack: b }));
            break;
        case T.h8.CREDIT_CARD_INFORMATION:
            let e4 = async (e) => {
                eB(!0);
                try {
                    let t = await (0, d.qv)(eL, e);
                    ek({ token: t }), eM(T.h8.ADDRESS);
                } catch (e) {
                    var t;
                    K.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eB(!1);
                }
            };
            (t = (0, a.jsx)(eo, {
                onCardInfoChange: (e, t) => {
                    eZ({
                        info: e,
                        isValid: t
                    }),
                        eF((t) => ({
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
                        return (0, a.jsx)(eE, {
                            onBack: () => eM(T.h8.PAYMENT_TYPE),
                            primaryCTA: S.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: Q.intl.string(Q.t.PDTjLC),
                            primarySubmitting: eH,
                            primaryDisabled: !eD.isValid,
                            onPrimary: () => e4(t)
                        });
                    }
                }));
            break;
        case T.h8.AWAITING_BROWSER_CHECKOUT:
            (t = (0, a.jsx)('div', {
                className: V.body,
                children: (0, a.jsx)(L.M, {
                    onPurchaseComplete: () => _(eI),
                    onHandoffFailure: () => {
                        ex(eA), eM(T.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(L.a, {
                    onPrimaryClick: () => {
                        ex(eA), eM(T.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ex(e_), eM(T.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case T.h8.SOFORT_INFORMATION:
            let e7 = eY.info;
            (t = (0, a.jsx)('div', {
                className: V.body,
                children: (0, a.jsx)(E.Z, {
                    billingAddressInfo: e7,
                    onChange: (e) => {
                        eF({
                            info: {
                                ...e7,
                                ...e
                            },
                            isValid: !1
                        });
                    },
                    error: M.Z.error
                })
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: '' === e7.name || '' === e7.email || void 0 === e7.email,
                    onPrimary: () => eM(T.h8.ADDRESS)
                }));
            break;
        case T.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: W.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eF({
                        info: {
                            ...eY.info,
                            name: e
                        },
                        isValid: eY.isValid
                    }),
                onEPSBankChange: (e) => eJ(e),
                epsBankValue: eq,
                billingAddressInfo: eY.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === eq || '' === eq || '' === eY.info.name,
                    onPrimary: () => eM(T.h8.ADDRESS)
                }));
            break;
        case T.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: W.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eF({
                        info: {
                            ...eY.info,
                            name: e
                        },
                        isValid: eY.isValid
                    }),
                onIdealBankChange: (e) => e$(e),
                idealBankValue: eX,
                billingAddressInfo: eY.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === eX || '' === eX || '' === eY.info.name,
                    onPrimary: () => eM(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: W.He.PRZELEWY24,
                onNameChange: (e) =>
                    eF({
                        info: {
                            ...eY.info,
                            name: e
                        },
                        isValid: eY.isValid
                    }),
                onEmailChange: (e) =>
                    eF({
                        info: {
                            ...eY.info,
                            email: e
                        },
                        isValid: eY.isValid
                    }),
                onP24BankChange: (e) => {
                    e1(e);
                },
                p24BankValue: e0,
                billingAddressInfo: eY.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === eY.info.name || '' === eY.info.name || void 0 === eY.info.email || '' === eY.info.email || void 0 === e0 || '' === e0,
                    onPrimary: () => eM(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PAYPAL_INFORMATION:
            let e6 = 0 !== eQ.length && null != eV;
            (t = (0, a.jsx)(ec, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: e6 ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t.Djzd7O),
                    onPrimary: () => (e6 ? eM(T.h8.ADDRESS) : (0, m.i0)())
                }));
            break;
        case T.h8.VENMO_INFORMATION:
            let e3 = 0 !== eG.length && null != eV;
            (t = (0, a.jsx)(eu, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: e3 ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['4KoTLC']),
                    onPrimary: () => (e3 ? eM(T.h8.ADDRESS) : (0, m.og)())
                }));
            break;
        case T.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(em, {})), (n = (0, a.jsx)(eE, { onBack: () => eM(T.h8.PAYMENT_TYPE) }));
            break;
        case T.h8.CASH_APP_INFORMATION:
            let e5 = null != eK;
            (t = (0, a.jsx)(ed, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: e5 ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['9ALP8/']),
                    onPrimary: () => (e5 ? eM(T.h8.ADDRESS) : (0, F.cp)()),
                    primaryDisabled: !(null != eO)
                }));
            break;
        case T.h8.ADDRESS:
            let e9 = async () => {
                eB(!0);
                let e = ev.methodType;
                switch (e) {
                    case W.He.CARD:
                        try {
                            let e = await (0, d.f0)(eL, ej.token, eY.info, Z);
                            e2(e);
                        } catch {}
                        break;
                    case W.He.VENMO:
                    case W.He.PAYPAL:
                        try {
                            s()(null != eV, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eV, eY.info, Z);
                            e2(e);
                        } catch {}
                        break;
                    case W.He.SOFORT:
                        try {
                            let e = await (0, d.av)(eL, eY.info, Z);
                            e2(e);
                        } catch {}
                        break;
                    case W.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eL, eq, eY.info, Z);
                            e2(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case W.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eL, eX, eY.info, Z);
                            e2(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case W.He.PRZELEWY24:
                        try {
                            if (void 0 === e0) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eL, { p24Bank: e0 }, eY.info, Z);
                            e2(e);
                        } catch {}
                        break;
                    case W.He.PAYSAFE_CARD:
                    case W.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eY.info, e, Z);
                            e2(t);
                        } catch {}
                        break;
                    case W.He.GCASH:
                    case W.He.MOMO_WALLET:
                    case W.He.KAKAOPAY:
                    case W.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eY.info, e, Z);
                            eW(t);
                        } catch {}
                        break;
                    case W.He.GIROPAY:
                    case W.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eL, eY.info, e, Z);
                            e2(t);
                        } catch {}
                        break;
                    case W.He.CASH_APP:
                        try {
                            s()(null != eK, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eY.info, e, Z, eK, ei);
                            s()(null != t, 'Cash App Pay Payment Source missing'), e2(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eU && eB(!1);
            };
            switch (ev.methodType) {
                case W.He.CARD:
                    (u = T.h8.CREDIT_CARD_INFORMATION), (i = W.He.CARD);
                    break;
                case W.He.PAYPAL:
                    (u = T.h8.PAYPAL_INFORMATION), (i = W.He.PAYPAL);
                    break;
                case W.He.VENMO:
                    (u = T.h8.VENMO_INFORMATION), (i = W.He.VENMO);
                    break;
                case W.He.GIROPAY:
                    (u = T.h8.PAYMENT_TYPE), (i = W.He.GIROPAY);
                    break;
                case W.He.SOFORT:
                    (u = T.h8.SOFORT_INFORMATION), (i = W.He.SOFORT);
                    break;
                case W.He.PAYSAFE_CARD:
                case W.He.GCASH:
                case W.He.GRABPAY_MY:
                case W.He.MOMO_WALLET:
                case W.He.KAKAOPAY:
                case W.He.GOPAY_WALLET:
                case W.He.BANCONTACT:
                    (u = T.h8.PAYMENT_TYPE), (i = ev.methodType);
                    break;
                case W.He.EPS:
                    (u = T.h8.EPS_INFORMATION), (i = W.He.EPS);
                    break;
                case W.He.IDEAL:
                    (u = T.h8.IDEAL_INFORMATION), (i = W.He.IDEAL);
                    break;
                case W.He.PRZELEWY24:
                    (u = T.h8.PRZELEWY24_INFORMATION), (i = W.He.PRZELEWY24);
                    break;
                case W.He.CASH_APP:
                    (u = T.h8.CASH_APP_INFORMATION), (i = W.He.CASH_APP);
                    break;
                default:
                    (u = T.h8.PAYMENT_TYPE), (i = W.He.CARD);
            }
            (t = (0, a.jsx)(ep, {
                billingAddressInfo: eY.info,
                onBillingAddressChange: (e, t) => {
                    eF({
                        info: {
                            ...eY.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: i
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eM(u),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primarySubmitting: eH,
                    primaryDisabled: !eY.isValid || ez,
                    onPrimary: e9
                }));
            break;
        case T.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(eh, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eI));
    }
    let te = (0, a.jsx)(c.Sequencer, {
            className: G.sequencer,
            staticClassName: G.sequencerStatic,
            animatedNodeClassName: G.sequencerAnimatedNode,
            fillParent: !0,
            step: eI,
            steps: ev.steps,
            sideMargin: 20,
            children: t
        }),
        tt = eI === T.h8.PAYMENT_TYPE && 0 === f.length ? null : n;
    return k
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(R.Z, { className: V.paymentModalError }),
                  H &&
                      (0, a.jsx)(I.Z, {
                          className: V.paymentModalBreadcrumbs,
                          isEligibleForTrial: H
                      }),
                  (0, a.jsx)(v.C3, { children: te }),
                  (0, a.jsx)(v.O3, { children: tt })
              ]
          })
        : (0, a.jsx)(Y.Z, {
              steps: null != g ? g : ev.steps,
              currentStep: null != O ? O : eI,
              paymentError: h.paymentError,
              header: w,
              hideBreadcrumbs: j,
              body: te,
              footer: tt
          });
}
function eb(e) {
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
        null == B.Z.cashAppPayComponent && (0, F.eI)(), (0, m.eI)(), !a && (0, d.tZ)();
    }, []);
    let [l, i] = r.useState(t);
    null != t && null == l && i(t);
    let [s, c] = r.useState(() => ({
            info: el,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: ei,
            isValid: !1
        })),
        [E, f] = r.useState(''),
        [N, b] = r.useState(''),
        [_, y] = r.useState(''),
        [P, g] = r.useState(() => ({ token: null })),
        [C, T, I, S, v] = (0, o.Wu)([M.Z], () => [M.Z.braintreeEmail, M.Z.braintreeNonce, M.Z.error, M.Z.venmoUsername, M.Z.adyenPaymentData]),
        [x, L] = (0, o.Wu)([w.Z], () => [w.Z.error, w.Z.isAwaitingAuthentication]);
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
    let [R, O] = r.useState(!1),
        [j, k] = r.useState(!1),
        [Y, U] = r.useState(null),
        W = r.useRef(null),
        Q = (0, o.e7)([w.Z], () => w.Z.isAwaitingAuthentication),
        [V, G] = (0, o.Wu)([Z.Z], () => [Z.Z.purchaseTokenAuthState, Z.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != Y && null != W.current && W.current.scrollIntoView({ behavior: 'smooth' });
        }, [Y]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: i,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: P,
            setTokenState: g,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: R,
            setIsSubmittingCurrentStep: O,
            hasRedirectURL: j,
            setHasRedirectURL: k,
            braintreeEmail: C,
            braintreeNonce: T,
            venmoUsername: S,
            adyenPaymentData: v,
            paymentError: null != x ? x : I,
            paymentAuthenticationState: L ? H.wr.PENDING : null != x ? H.wr.ERROR : H.wr.NONE,
            purchaseError: Y,
            setPurchaseError: U,
            purchaseErrorBlockRef: W,
            isAuthenticating: Q,
            purchaseTokenAuthState: V,
            purchaseTokenHash: G,
            epsBankState: N,
            setEpsBankState: b,
            idealBankState: _,
            setIdealBankState: y,
            p24BankState: E,
            setP24BankState: f
        }
    );
}
