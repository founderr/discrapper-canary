n.d(t, {
    fL: function () {
        return ey;
    },
    kx: function () {
        return eN;
    },
    vP: function () {
        return ef;
    }
}),
    n(47120),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    i = n(512722),
    o = n.n(i),
    s = n(442837),
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
    _ = n(581813),
    P = n(870630),
    b = n(710845),
    g = n(563132),
    C = n(409813),
    T = n(51499),
    I = n(586585),
    S = n(614277),
    v = n(737143),
    x = n(926841),
    R = n(35248),
    L = n(233138),
    M = n(698708),
    O = n(351402),
    D = n(975060),
    j = n(505649),
    w = n(853872),
    Z = n(882712),
    H = n(358085),
    k = n(622999),
    Y = n(176919),
    B = n(185139),
    F = n(559725),
    U = n(439041),
    W = n(850228),
    G = n(231338),
    Q = n(388032),
    V = n(802543),
    K = n(719919);
let q = new b.Z('AddPaymentStep.tsx'),
    z = [C.h8.PAYMENT_TYPE],
    J = [C.h8.PAYMENT_TYPE, C.h8.CREDIT_CARD_INFORMATION, C.h8.ADDRESS],
    X = [C.h8.PAYMENT_TYPE, C.h8.PAYPAL_INFORMATION, C.h8.ADDRESS],
    $ = [C.h8.PAYMENT_TYPE, C.h8.VENMO_INFORMATION, C.h8.ADDRESS];
C.h8.PAYMENT_TYPE, C.h8.PAYMENT_REQUEST_INFORMATION, C.h8.ADDRESS;
let ee = [C.h8.PAYMENT_TYPE, C.h8.PRZELEWY24_INFORMATION, C.h8.ADDRESS],
    et = [C.h8.PAYMENT_TYPE, C.h8.EPS_INFORMATION, C.h8.ADDRESS],
    en = [C.h8.PAYMENT_TYPE, C.h8.IDEAL_INFORMATION, C.h8.ADDRESS],
    ea = [C.h8.PAYMENT_TYPE, C.h8.CASH_APP_INFORMATION, C.h8.ADDRESS],
    er = [C.h8.PAYMENT_TYPE, C.h8.ADDRESS],
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
function eo(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, isEligibleForTrial: r, allowStripeRequestPayments: l } = e;
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            allowStripeRequestPayments: l,
            onStripePaymentMethodReceived: n,
            isEligibleForTrial: r
        })
    });
}
function es(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        r = (0, s.e7)([D.Z], () => D.Z.error);
    return (0, a.jsxs)('div', {
        className: V.body,
        children: [
            null != n &&
                (0, a.jsx)(c.FormErrorBlock, {
                    className: V.infoNotice,
                    backgroundColor: c.FormErrorBlockColors.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, a.jsx)(y.j, {
                billingError: r,
                onCardInfoChange: t
            })
        ]
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
        children: (0, a.jsx)(E.Z, {})
    });
}
function ed() {
    return (0, a.jsx)('div', {
        className: V.body,
        children: (0, a.jsx)(W.Z, {})
    });
}
function em() {
    let e = (0, s.e7)([O.Z], () => O.Z.isBusy),
        t = (0, s.e7)([D.Z], () => D.Z.stripePaymentMethod);
    return (0, a.jsx)(_.k, {
        className: V.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ep(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, s.e7)([D.Z], () => D.Z.error);
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
    return (0, a.jsx)(f.F, { className: V.body });
}
function eA(e) {
    return () => (null != D.Z.error && (0, p.fw)(), e());
}
function eE(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = eA(t));
    let i = n;
    return (
        null != n && (i = eA(n)),
        (0, a.jsx)(I.Z, {
            ...r,
            onPrimary: l,
            onBack: i
        })
    );
}
function eN(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: i, purchaseError: s, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, g.usePaymentContext)(),
        m = {
            ...ey(),
            paymentSources: r,
            paymentSourceId: l,
            setPaymentSourceId: i,
            purchaseError: s,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        o()(n, 'Step should be set here'),
        ef({
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
function ef(e) {
    let t,
        n,
        i,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: N, onReturn: f, onComplete: y, onStepChange: _, breadcrumpSteps: b, currentBreadcrumpStep: O, header: j, analyticsLocation: Z, hideBreadcrumbs: Y = !1, usePaymentModalStep: W = !1, isEligibleForTrial: el = !1, allowDesktopRedirectPurchase: ei = !1, toastContent: eA, overwriteSubscriptionPaymentSource: eN = !1 } = e,
        ef = {
            steps: [...E, ...J, ...N],
            methodType: G.He.CARD
        },
        ey = {
            steps: [...E, ...z, ...N],
            methodType: G.He.PAYMENT_REQUEST
        },
        e_ = {
            steps: [...E, ...X, ...N],
            methodType: G.He.PAYPAL
        },
        eP = {
            steps: [...E, ...$, ...N],
            methodType: G.He.VENMO
        },
        eb = {
            steps: [...E, ...z, ...N]
        },
        eg = {
            steps: [...E, ...ee, ...N],
            methodType: G.He.PRZELEWY24
        },
        eC = {
            steps: [...E, ...et, ...N],
            methodType: G.He.EPS
        },
        eT = {
            steps: [...E, ...en, ...N],
            methodType: G.He.IDEAL
        },
        eI = {
            steps: [...E, ...ea, ...N],
            methodType: G.He.CASH_APP
        },
        [eS, ev] = r.useState(A),
        [ex, eR] = r.useState(null),
        [eL, eM] = r.useState(!1),
        [eO, eD] = r.useState(
            (function (e) {
                switch (e) {
                    case C.h8.CREDIT_CARD_INFORMATION:
                        return ef;
                    case C.h8.CASH_APP_INFORMATION:
                        return eI;
                    default:
                        return { steps: [C.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: ej } = (0, g.usePaymentContext)(),
        ew = (0, s.e7)([D.Z], () => D.Z.redirectedPaymentSourceId),
        eZ = (0, s.e7)([U.Z], () => U.Z.cashAppPayComponent);
    function eH(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eR(null),
            ev(e),
            t &&
                _({
                    currentStep: eS,
                    toStep: e
                });
    }
    r.useEffect(() => {
        (() => {
            if (null == ew) return;
            let e = w.Z.getPaymentSource(ew);
            if (null != e) e3(e), eV(!1);
        })();
    }, [ew]);
    let { setPaymentSourceId: ek, creditCardState: eY, setCreditCardState: eB, tokenState: eF, setTokenState: eU, isSubmittingCurrentStep: eW, billingAddressState: eG, setBillingAddressState: eQ, setIsSubmittingCurrentStep: eV, hasRedirectURL: eK, setHasRedirectURL: eq, braintreeEmail: ez, braintreeNonce: eJ, venmoUsername: eX, adyenPaymentData: e$, isAuthenticating: e0, epsBankState: e1, setEpsBankState: e2, idealBankState: e8, setIdealBankState: e4, p24BankState: e7, setP24BankState: e6 } = h;
    function e3(e) {
        var t;
        ek(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== eA ? eA : Q.intl.string(Q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eS, t), eH(A, !1);
    }
    let e9 = (0, v.q1)().enabled && ei,
        e5 = (0, x.a)().enabled && ei,
        te = !(0, H.isDesktop)() || e5,
        tt = r.useRef(null),
        tn = () => {
            null != tt.current && tt.current.show();
        };
    switch (eS) {
        case C.h8.ATTEMPT_GOOGLE_PAY:
        case C.h8.PAYMENT_TYPE:
            let ta = (e) => {
                    switch (e) {
                        case G.He.CARD:
                            e9 ? eH(C.h8.AWAITING_BROWSER_CHECKOUT) : (eD(ef), eH(C.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case G.He.PAYPAL:
                            eD(e_), eH(C.h8.PAYPAL_INFORMATION);
                            break;
                        case G.He.VENMO:
                            eD(eP), eH(C.h8.VENMO_INFORMATION);
                            break;
                        case G.He.PAYMENT_REQUEST:
                            e5 ? eH(C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : (eD(ey), eH(C.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case G.He.PRZELEWY24:
                            eD(eg), eH(C.h8.PRZELEWY24_INFORMATION);
                            break;
                        case G.He.EPS:
                            eD(eC), eH(C.h8.EPS_INFORMATION);
                            break;
                        case G.He.IDEAL:
                            eD(eT), eH(C.h8.IDEAL_INFORMATION);
                            break;
                        case G.He.CASH_APP:
                            eD(eI), eH(C.h8.CASH_APP_INFORMATION);
                            break;
                        case G.He.GIROPAY:
                        case G.He.PAYSAFE_CARD:
                        case G.He.GCASH:
                        case G.He.GRABPAY_MY:
                        case G.He.MOMO_WALLET:
                        case G.He.KAKAOPAY:
                        case G.He.GOPAY_WALLET:
                        case G.He.BANCONTACT:
                            eD({
                                steps: [...E, ...er, ...N],
                                methodType: e
                            }),
                                eH(C.h8.ADDRESS);
                    }
                    null != D.Z.error && (0, p.fw)();
                },
                tr = (e, t) => {
                    eQ((e) => ({
                        ...e,
                        info: t
                    })),
                        eD(ey),
                        e3(e);
                },
                tl = () => {
                    eD(eb), eH(C.h8.PAYMENT_TYPE);
                },
                ti = async (e) => {
                    if (((0, p.Xt)(e), null == e)) {
                        tl();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, Z),
                            { billingAddressInfo: n } = (0, k.az)(e);
                        tr(t, n);
                    } catch (e) {}
                };
            if (eS === C.h8.ATTEMPT_GOOGLE_PAY) {
                (t = (0, a.jsx)(L.z, {
                    onChooseType: ta,
                    onStripePaymentMethodReceived: ti,
                    onPaymentRequestFailure: () => {
                        ta(G.He.CARD), eR(Q.intl.string(Q.t.Zj2xQ0));
                    },
                    onValidGooglePay: () => eM(!0),
                    paymentRequestRef: tt
                })),
                    (n = (0, a.jsx)(eE, {
                        onBack: () => eH(C.h8.PAYMENT_TYPE),
                        primaryCTA: I.Z.CTAType.CONTINUE,
                        primaryText: Q.intl.string(Q.t.wnVVr6),
                        onPrimary: () => tn(),
                        primaryDisabled: !eL
                    }));
                break;
            }
            (t = (0, a.jsx)(eo, {
                onChooseType: ta,
                onStripePaymentMethodReceived: ti,
                allowStripeRequestPayments: te,
                isEligibleForTrial: el
            })),
                (n = (0, a.jsx)(eE, { onBack: f }));
            break;
        case C.h8.CREDIT_CARD_INFORMATION:
            let to = async (e) => {
                eV(!0);
                try {
                    let t = await (0, d.qv)(ej, e);
                    eU({ token: t }), eH(C.h8.ADDRESS);
                } catch (e) {
                    var t;
                    q.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eV(!1);
                }
            };
            (t = (0, a.jsx)(es, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    eB({
                        info: e,
                        isValid: t
                    }),
                        eQ((t) => ({
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
                            onBack: () => eH(C.h8.PAYMENT_TYPE),
                            primaryCTA: I.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: Q.intl.string(Q.t.PDTjLC),
                            primarySubmitting: eW,
                            primaryDisabled: !eY.isValid,
                            onPrimary: () => to(t)
                        });
                    }
                }));
            break;
        case C.h8.AWAITING_BROWSER_CHECKOUT:
        case C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            (t = (0, a.jsx)('div', {
                className: V.body,
                children: (0, a.jsx)(R.M, {
                    step: eS,
                    onPurchaseComplete: () => y(eS),
                    onHandoffFailure: () => {
                        eD(ef), eH(C.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(R.a, {
                    onPrimaryClick: () => {
                        eD(ef), eH(C.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eD(eb), eH(C.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case C.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eQ({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onEPSBankChange: (e) => e2(e),
                epsBankValue: e1,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === e1 || '' === e1 || '' === eG.info.name,
                    onPrimary: () => eH(C.h8.ADDRESS)
                }));
            break;
        case C.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eQ({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onIdealBankChange: (e) => e4(e),
                idealBankValue: e8,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === e8 || '' === e8 || '' === eG.info.name,
                    onPrimary: () => eH(C.h8.ADDRESS)
                }));
            break;
        case C.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.PRZELEWY24,
                onNameChange: (e) =>
                    eQ({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onEmailChange: (e) =>
                    eQ({
                        info: {
                            ...eG.info,
                            email: e
                        },
                        isValid: eG.isValid
                    }),
                onP24BankChange: (e) => {
                    e6(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === eG.info.name || '' === eG.info.name || void 0 === eG.info.email || '' === eG.info.email || void 0 === e7 || '' === e7,
                    onPrimary: () => eH(C.h8.ADDRESS)
                }));
            break;
        case C.h8.PAYPAL_INFORMATION:
            let ts = 0 !== ez.length && null != eJ;
            (t = (0, a.jsx)(ec, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: ts ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t.Djzd7O),
                    onPrimary: () => (ts ? eH(C.h8.ADDRESS) : (0, m.i0)())
                }));
            break;
        case C.h8.VENMO_INFORMATION:
            let tc = 0 !== eX.length && null != eJ;
            (t = (0, a.jsx)(eu, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: tc ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['4KoTLC']),
                    onPrimary: () => (tc ? eH(C.h8.ADDRESS) : (0, m.og)())
                }));
            break;
        case C.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(em, {})), (n = (0, a.jsx)(eE, { onBack: () => eH(C.h8.PAYMENT_TYPE) }));
            break;
        case C.h8.CASH_APP_INFORMATION:
            let tu = null != e$;
            (t = (0, a.jsx)(ed, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(C.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: tu ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['9ALP8/']),
                    onPrimary: () => (tu ? eH(C.h8.ADDRESS) : (0, F.cp)()),
                    primaryDisabled: !(null != eZ)
                }));
            break;
        case C.h8.ADDRESS:
            let td = async () => {
                eV(!0);
                let e = eO.methodType;
                switch (e) {
                    case G.He.CARD:
                        try {
                            let e = await (0, d.f0)(ej, eF.token, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.VENMO:
                    case G.He.PAYPAL:
                        try {
                            o()(null != eJ, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eJ, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ej, e1, eG.info, Z);
                            e3(e);
                        } catch (e) {
                            q.warn(e);
                        }
                        break;
                    case G.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ej, e8, eG.info, Z);
                            e3(e);
                        } catch (e) {
                            q.warn(e);
                        }
                        break;
                    case G.He.PRZELEWY24:
                        try {
                            if (void 0 === e7) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ej, { p24Bank: e7 }, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.PAYSAFE_CARD:
                    case G.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eG.info, e, Z);
                            e3(t);
                        } catch {}
                        break;
                    case G.He.GCASH:
                    case G.He.MOMO_WALLET:
                    case G.He.KAKAOPAY:
                    case G.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eG.info, e, Z);
                            eq(t);
                        } catch {}
                        break;
                    case G.He.GIROPAY:
                    case G.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(ej, eG.info, e, Z);
                            e3(t);
                        } catch {}
                        break;
                    case G.He.CASH_APP:
                        try {
                            o()(null != e$, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eG.info, e, Z, e$, eN);
                            o()(null != t, 'Cash App Pay Payment Source missing'), e3(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eK && eV(!1);
            };
            switch (eO.methodType) {
                case G.He.CARD:
                    (u = C.h8.CREDIT_CARD_INFORMATION), (i = G.He.CARD);
                    break;
                case G.He.PAYPAL:
                    (u = C.h8.PAYPAL_INFORMATION), (i = G.He.PAYPAL);
                    break;
                case G.He.VENMO:
                    (u = C.h8.VENMO_INFORMATION), (i = G.He.VENMO);
                    break;
                case G.He.GIROPAY:
                    (u = C.h8.PAYMENT_TYPE), (i = G.He.GIROPAY);
                    break;
                case G.He.PAYSAFE_CARD:
                case G.He.GCASH:
                case G.He.GRABPAY_MY:
                case G.He.MOMO_WALLET:
                case G.He.KAKAOPAY:
                case G.He.GOPAY_WALLET:
                case G.He.BANCONTACT:
                    (u = C.h8.PAYMENT_TYPE), (i = eO.methodType);
                    break;
                case G.He.EPS:
                    (u = C.h8.EPS_INFORMATION), (i = G.He.EPS);
                    break;
                case G.He.IDEAL:
                    (u = C.h8.IDEAL_INFORMATION), (i = G.He.IDEAL);
                    break;
                case G.He.PRZELEWY24:
                    (u = C.h8.PRZELEWY24_INFORMATION), (i = G.He.PRZELEWY24);
                    break;
                case G.He.CASH_APP:
                    (u = C.h8.CASH_APP_INFORMATION), (i = G.He.CASH_APP);
                    break;
                default:
                    (u = C.h8.PAYMENT_TYPE), (i = G.He.CARD);
            }
            (t = (0, a.jsx)(ep, {
                billingAddressInfo: eG.info,
                onBillingAddressChange: (e, t) => {
                    eQ({
                        info: {
                            ...eG.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: i
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => eH(u),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primarySubmitting: eW,
                    primaryDisabled: !eG.isValid || e0,
                    onPrimary: td
                }));
            break;
        case C.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(eh, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eS));
    }
    let tm = (0, a.jsx)(c.Sequencer, {
            className: K.sequencer,
            staticClassName: K.sequencerStatic,
            animatedNodeClassName: K.sequencerAnimatedNode,
            fillParent: !0,
            step: eS,
            steps: eO.steps,
            sideMargin: 20,
            children: t
        }),
        tp = eS === C.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return W
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  el &&
                      (0, a.jsx)(T.Z, {
                          className: V.paymentModalBreadcrumbs,
                          isEligibleForTrial: el
                      }),
                  (0, a.jsxs)(S.C3, {
                      children: [(0, a.jsx)(M.Z, { className: V.paymentModalError }), tm]
                  }),
                  (0, a.jsx)(S.O3, { children: tp })
              ]
          })
        : (0, a.jsx)(B.Z, {
              steps: null != b ? b : eO.steps,
              currentStep: null != O ? O : eS,
              paymentError: h.paymentError,
              header: j,
              hideBreadcrumbs: Y,
              body: tm,
              footer: tp
          });
}
function ey(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: a
    } = (0, s.cj)([w.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : w.Z.defaultPaymentSourceId,
        paymentSources: w.Z.paymentSources,
        hasFetchedPaymentSources: w.Z.hasFetchedPaymentSources
    }));
    r.useEffect(() => {
        null == U.Z.cashAppPayComponent && (0, F.eI)(), (0, m.eI)(), !a && (0, d.tZ)();
    }, []);
    let [l, i] = r.useState(t);
    null != t && null == l && i(t);
    let [o, c] = r.useState(() => ({
            info: el,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: ei,
            isValid: !1
        })),
        [E, N] = r.useState(''),
        [f, y] = r.useState(''),
        [_, P] = r.useState(''),
        [b, g] = r.useState(() => ({ token: null })),
        [C, T, I, S, v] = (0, s.Wu)([D.Z], () => [D.Z.braintreeEmail, D.Z.braintreeNonce, D.Z.error, D.Z.venmoUsername, D.Z.adyenPaymentData]),
        [x, R] = (0, s.Wu)([j.Z], () => [j.Z.error, j.Z.isAwaitingAuthentication]);
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
    let [L, M] = r.useState(!1),
        [O, H] = r.useState(!1),
        [k, B] = r.useState(null),
        W = r.useRef(null),
        G = (0, s.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [Q, V] = (0, s.Wu)([Z.Z], () => [Z.Z.purchaseTokenAuthState, Z.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != k && null != W.current && W.current.scrollIntoView({ behavior: 'smooth' });
        }, [k]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: i,
            creditCardState: o,
            setCreditCardState: c,
            tokenState: b,
            setTokenState: g,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: M,
            hasRedirectURL: O,
            setHasRedirectURL: H,
            braintreeEmail: C,
            braintreeNonce: T,
            venmoUsername: S,
            adyenPaymentData: v,
            paymentError: null != x ? x : I,
            paymentAuthenticationState: R ? Y.wr.PENDING : null != x ? Y.wr.ERROR : Y.wr.NONE,
            purchaseError: k,
            setPurchaseError: B,
            purchaseErrorBlockRef: W,
            isAuthenticating: G,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: V,
            epsBankState: f,
            setEpsBankState: y,
            idealBankState: _,
            setIdealBankState: P,
            p24BankState: E,
            setP24BankState: N
        }
    );
}
