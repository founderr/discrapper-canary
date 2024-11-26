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
    E = n(915271),
    N = n(228666),
    f = n(723484),
    _ = n(122192),
    y = n(581813),
    b = n(870630),
    P = n(710845),
    C = n(563132),
    g = n(409813),
    I = n(51499),
    T = n(586585),
    S = n(614277),
    v = n(737143),
    x = n(35248),
    L = n(698708),
    R = n(351402),
    M = n(975060),
    O = n(505649),
    D = n(853872),
    Z = n(882712),
    j = n(358085),
    w = n(622999),
    H = n(176919),
    k = n(185139),
    Y = n(559725),
    F = n(439041),
    B = n(850228),
    U = n(231338),
    W = n(388032),
    Q = n(802543),
    V = n(719919);
let G = new P.Z('AddPaymentStep.tsx'),
    K = [g.h8.PAYMENT_TYPE],
    q = [g.h8.PAYMENT_TYPE, g.h8.CREDIT_CARD_INFORMATION, g.h8.ADDRESS],
    z = [g.h8.PAYMENT_TYPE, g.h8.PAYPAL_INFORMATION, g.h8.ADDRESS],
    J = [g.h8.PAYMENT_TYPE, g.h8.VENMO_INFORMATION, g.h8.ADDRESS];
g.h8.PAYMENT_TYPE, g.h8.PAYMENT_REQUEST_INFORMATION, g.h8.ADDRESS;
let X = [g.h8.PAYMENT_TYPE, g.h8.PRZELEWY24_INFORMATION, g.h8.ADDRESS],
    $ = [g.h8.PAYMENT_TYPE, g.h8.EPS_INFORMATION, g.h8.ADDRESS],
    ee = [g.h8.PAYMENT_TYPE, g.h8.IDEAL_INFORMATION, g.h8.ADDRESS],
    et = [g.h8.PAYMENT_TYPE, g.h8.CASH_APP_INFORMATION, g.h8.ADDRESS],
    en = [g.h8.PAYMENT_TYPE, g.h8.ADDRESS],
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
    let { onChooseType: t, onPaymentRequestSourceReceived: n, onPaymentRequestSourceFailed: r, analyticsLocation: l, isEligibleForTrial: i } = e;
    return (0, a.jsx)('div', {
        className: Q.body,
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
                        { billingAddressInfo: a } = (0, w.az)(e);
                    n(t, a);
                } catch (e) {}
            },
            isEligibleForTrial: i
        })
    });
}
function ei(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(_.j, {
            billingError: n,
            onCardInfoChange: t
        })
    });
}
function es() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function eo() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(E.Z, {})
    });
}
function ec() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(B.Z, {})
    });
}
function eu() {
    let e = (0, o.e7)([R.Z], () => R.Z.isBusy),
        t = (0, o.e7)([M.Z], () => M.Z.stripePaymentMethod);
    return (0, a.jsx)(y.k, {
        className: Q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ed(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([M.Z], () => M.Z.error);
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(N.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function em() {
    return (0, a.jsx)(f.F, { className: Q.body });
}
function ep(e) {
    return () => (null != M.Z.error && (0, p.fw)(), e());
}
function eh(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = ep(t));
    let i = n;
    return (
        null != n && (i = ep(n)),
        (0, a.jsx)(T.Z, {
            ...r,
            onPrimary: l,
            onBack: i
        })
    );
}
function eA(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: i, purchaseError: o, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, C.usePaymentContext)(),
        m = {
            ...eN(),
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
        eE({
            paymentModalArgs: m,
            initialStep: g.h8.PAYMENT_TYPE,
            prependSteps: [g.h8.PROMOTION_INFO],
            appendSteps: [g.h8.REVIEW, g.h8.CONFIRM],
            breadcrumpSteps: t,
            currentBreadcrumpStep: n,
            onReturn: () => a(g.h8.REVIEW),
            onComplete: () => a(g.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eE(e) {
    let t,
        n,
        i,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: N, onReturn: f, onComplete: _, onStepChange: y, breadcrumpSteps: P, currentBreadcrumpStep: R, header: O, analyticsLocation: Z, hideBreadcrumbs: j = !1, usePaymentModalStep: w = !1, isEligibleForTrial: H = !1, allowDesktopRedirectPurchase: B = !1, toastContent: ea, overwriteSubscriptionPaymentSource: er = !1 } = e,
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
        e_ = {
            steps: [...E, ...X, ...N],
            methodType: U.He.PRZELEWY24
        },
        ey = {
            steps: [...E, ...$, ...N],
            methodType: U.He.EPS
        },
        eb = {
            steps: [...E, ...ee, ...N],
            methodType: U.He.IDEAL
        },
        eP = {
            steps: [...E, ...et, ...N],
            methodType: U.He.CASH_APP
        },
        [eC, eg] = r.useState(A),
        [eI, eT] = r.useState(
            (function (e) {
                switch (e) {
                    case g.h8.CREDIT_CARD_INFORMATION:
                        return ep;
                    case g.h8.CASH_APP_INFORMATION:
                        return eP;
                    default:
                        return { steps: [g.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: eS } = (0, C.usePaymentContext)(),
        ev = (0, o.e7)([M.Z], () => M.Z.redirectedPaymentSourceId),
        ex = (0, o.e7)([F.Z], () => F.Z.cashAppPayComponent);
    function eL(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eg(e),
            t &&
                y({
                    currentStep: eC,
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
    let { setPaymentSourceId: eR, creditCardState: eM, setCreditCardState: eO, tokenState: eD, setTokenState: eZ, isSubmittingCurrentStep: ej, billingAddressState: ew, setBillingAddressState: eH, setIsSubmittingCurrentStep: ek, hasRedirectURL: eY, setHasRedirectURL: eF, braintreeEmail: eB, braintreeNonce: eU, venmoUsername: eW, adyenPaymentData: eQ, isAuthenticating: eV, epsBankState: eG, setEpsBankState: eK, idealBankState: eq, setIdealBankState: ez, p24BankState: eJ, setP24BankState: eX } = h;
    function e$(e) {
        var t;
        eR(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== ea ? ea : W.intl.string(W.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), _(eC, t), eL(A, !1);
    }
    let e0 = (0, v.q)().enabled && B;
    switch (eC) {
        case g.h8.PAYMENT_TYPE:
            (t = (0, a.jsx)(el, {
                onChooseType: (e) => {
                    switch (e) {
                        case U.He.CARD:
                            e0 ? eL(g.h8.AWAITING_BROWSER_CHECKOUT) : (eT(ep), eL(g.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case U.He.PAYPAL:
                            eT(eE), eL(g.h8.PAYPAL_INFORMATION);
                            break;
                        case U.He.VENMO:
                            eT(eN), eL(g.h8.VENMO_INFORMATION);
                            break;
                        case U.He.PAYMENT_REQUEST:
                            eT(eA), eL(g.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case U.He.PRZELEWY24:
                            eT(e_), eL(g.h8.PRZELEWY24_INFORMATION);
                            break;
                        case U.He.EPS:
                            eT(ey), eL(g.h8.EPS_INFORMATION);
                            break;
                        case U.He.IDEAL:
                            eT(eb), eL(g.h8.IDEAL_INFORMATION);
                            break;
                        case U.He.CASH_APP:
                            eT(eP), eL(g.h8.CASH_APP_INFORMATION);
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
                                eL(g.h8.ADDRESS);
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
                    eT(ef), eL(g.h8.PAYMENT_TYPE);
                },
                analyticsLocation: Z,
                isEligibleForTrial: H
            })),
                (n = (0, a.jsx)(eh, { onBack: f }));
            break;
        case g.h8.CREDIT_CARD_INFORMATION:
            let e1 = async (e) => {
                ek(!0);
                try {
                    let t = await (0, d.qv)(eS, e);
                    eZ({ token: t }), eL(g.h8.ADDRESS);
                } catch (e) {
                    var t;
                    G.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    ek(!1);
                }
            };
            (t = (0, a.jsx)(ei, {
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
                            onBack: () => eL(g.h8.PAYMENT_TYPE),
                            primaryCTA: T.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.intl.string(W.t.PDTjLC),
                            primarySubmitting: ej,
                            primaryDisabled: !eM.isValid,
                            onPrimary: () => e1(t)
                        });
                    }
                }));
            break;
        case g.h8.AWAITING_BROWSER_CHECKOUT:
            (t = (0, a.jsx)('div', {
                className: Q.body,
                children: (0, a.jsx)(x.M, {
                    onPurchaseComplete: () => _(eC),
                    onHandoffFailure: () => {
                        eT(ep), eL(g.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(x.a, {
                    onPrimaryClick: () => {
                        eT(ep), eL(g.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eT(ef), eL(g.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case g.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: U.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eH({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onEPSBankChange: (e) => eK(e),
                epsBankValue: eG,
                billingAddressInfo: ew.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eG || '' === eG || '' === ew.info.name,
                    onPrimary: () => eL(g.h8.ADDRESS)
                }));
            break;
        case g.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: U.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eH({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onIdealBankChange: (e) => ez(e),
                idealBankValue: eq,
                billingAddressInfo: ew.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eq || '' === eq || '' === ew.info.name,
                    onPrimary: () => eL(g.h8.ADDRESS)
                }));
            break;
        case g.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: U.He.PRZELEWY24,
                onNameChange: (e) =>
                    eH({
                        info: {
                            ...ew.info,
                            name: e
                        },
                        isValid: ew.isValid
                    }),
                onEmailChange: (e) =>
                    eH({
                        info: {
                            ...ew.info,
                            email: e
                        },
                        isValid: ew.isValid
                    }),
                onP24BankChange: (e) => {
                    eX(e);
                },
                p24BankValue: eJ,
                billingAddressInfo: ew.info
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === ew.info.name || '' === ew.info.name || void 0 === ew.info.email || '' === ew.info.email || void 0 === eJ || '' === eJ,
                    onPrimary: () => eL(g.h8.ADDRESS)
                }));
            break;
        case g.h8.PAYPAL_INFORMATION:
            let e2 = 0 !== eB.length && null != eU;
            (t = (0, a.jsx)(es, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e2 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t.Djzd7O),
                    onPrimary: () => (e2 ? eL(g.h8.ADDRESS) : (0, m.i0)())
                }));
            break;
        case g.h8.VENMO_INFORMATION:
            let e8 = 0 !== eW.length && null != eU;
            (t = (0, a.jsx)(eo, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e8 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['4KoTLC']),
                    onPrimary: () => (e8 ? eL(g.h8.ADDRESS) : (0, m.og)())
                }));
            break;
        case g.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(eu, {})), (n = (0, a.jsx)(eh, { onBack: () => eL(g.h8.PAYMENT_TYPE) }));
            break;
        case g.h8.CASH_APP_INFORMATION:
            let e4 = null != eQ;
            (t = (0, a.jsx)(ec, {})),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(g.h8.PAYMENT_TYPE),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: e4 ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['9ALP8/']),
                    onPrimary: () => (e4 ? eL(g.h8.ADDRESS) : (0, Y.cp)()),
                    primaryDisabled: !(null != ex)
                }));
            break;
        case g.h8.ADDRESS:
            let e7 = async () => {
                ek(!0);
                let e = eI.methodType;
                switch (e) {
                    case U.He.CARD:
                        try {
                            let e = await (0, d.f0)(eS, eD.token, ew.info, Z);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.VENMO:
                    case U.He.PAYPAL:
                        try {
                            s()(null != eU, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eU, ew.info, Z);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eS, eG, ew.info, Z);
                            e$(e);
                        } catch (e) {
                            G.warn(e);
                        }
                        break;
                    case U.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eS, eq, ew.info, Z);
                            e$(e);
                        } catch (e) {
                            G.warn(e);
                        }
                        break;
                    case U.He.PRZELEWY24:
                        try {
                            if (void 0 === eJ) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eS, { p24Bank: eJ }, ew.info, Z);
                            e$(e);
                        } catch {}
                        break;
                    case U.He.PAYSAFE_CARD:
                    case U.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(ew.info, e, Z);
                            e$(t);
                        } catch {}
                        break;
                    case U.He.GCASH:
                    case U.He.MOMO_WALLET:
                    case U.He.KAKAOPAY:
                    case U.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(ew.info, e, Z);
                            eF(t);
                        } catch {}
                        break;
                    case U.He.GIROPAY:
                    case U.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eS, ew.info, e, Z);
                            e$(t);
                        } catch {}
                        break;
                    case U.He.CASH_APP:
                        try {
                            s()(null != eQ, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(ew.info, e, Z, eQ, er);
                            s()(null != t, 'Cash App Pay Payment Source missing'), e$(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eY && ek(!1);
            };
            switch (eI.methodType) {
                case U.He.CARD:
                    (u = g.h8.CREDIT_CARD_INFORMATION), (i = U.He.CARD);
                    break;
                case U.He.PAYPAL:
                    (u = g.h8.PAYPAL_INFORMATION), (i = U.He.PAYPAL);
                    break;
                case U.He.VENMO:
                    (u = g.h8.VENMO_INFORMATION), (i = U.He.VENMO);
                    break;
                case U.He.GIROPAY:
                    (u = g.h8.PAYMENT_TYPE), (i = U.He.GIROPAY);
                    break;
                case U.He.PAYSAFE_CARD:
                case U.He.GCASH:
                case U.He.GRABPAY_MY:
                case U.He.MOMO_WALLET:
                case U.He.KAKAOPAY:
                case U.He.GOPAY_WALLET:
                case U.He.BANCONTACT:
                    (u = g.h8.PAYMENT_TYPE), (i = eI.methodType);
                    break;
                case U.He.EPS:
                    (u = g.h8.EPS_INFORMATION), (i = U.He.EPS);
                    break;
                case U.He.IDEAL:
                    (u = g.h8.IDEAL_INFORMATION), (i = U.He.IDEAL);
                    break;
                case U.He.PRZELEWY24:
                    (u = g.h8.PRZELEWY24_INFORMATION), (i = U.He.PRZELEWY24);
                    break;
                case U.He.CASH_APP:
                    (u = g.h8.CASH_APP_INFORMATION), (i = U.He.CASH_APP);
                    break;
                default:
                    (u = g.h8.PAYMENT_TYPE), (i = U.He.CARD);
            }
            (t = (0, a.jsx)(ed, {
                billingAddressInfo: ew.info,
                onBillingAddressChange: (e, t) => {
                    eH({
                        info: {
                            ...ew.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: i
            })),
                (n = (0, a.jsx)(eh, {
                    onBack: () => eL(u),
                    primaryCTA: T.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primarySubmitting: ej,
                    primaryDisabled: !ew.isValid || eV,
                    onPrimary: e7
                }));
            break;
        case g.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(em, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eC));
    }
    let e6 = (0, a.jsx)(c.Sequencer, {
            className: V.sequencer,
            staticClassName: V.sequencerStatic,
            animatedNodeClassName: V.sequencerAnimatedNode,
            fillParent: !0,
            step: eC,
            steps: eI.steps,
            sideMargin: 20,
            children: t
        }),
        e3 = eC === g.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return w
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(L.Z, { className: Q.paymentModalError }),
                  H &&
                      (0, a.jsx)(I.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: H
                      }),
                  (0, a.jsx)(S.C3, { children: e6 }),
                  (0, a.jsx)(S.O3, { children: e3 })
              ]
          })
        : (0, a.jsx)(k.Z, {
              steps: null != P ? P : eI.steps,
              currentStep: null != R ? R : eC,
              paymentError: h.paymentError,
              header: O,
              hideBreadcrumbs: j,
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
    let [l, i] = r.useState(t);
    null != t && null == l && i(t);
    let [s, c] = r.useState(() => ({
            info: ea,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: er,
            isValid: !1
        })),
        [E, N] = r.useState(''),
        [f, _] = r.useState(''),
        [y, b] = r.useState(''),
        [P, C] = r.useState(() => ({ token: null })),
        [g, I, T, S, v] = (0, o.Wu)([M.Z], () => [M.Z.braintreeEmail, M.Z.braintreeNonce, M.Z.error, M.Z.venmoUsername, M.Z.adyenPaymentData]),
        [x, L] = (0, o.Wu)([O.Z], () => [O.Z.error, O.Z.isAwaitingAuthentication]);
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
    let [R, j] = r.useState(!1),
        [w, k] = r.useState(!1),
        [B, U] = r.useState(null),
        W = r.useRef(null),
        Q = (0, o.e7)([O.Z], () => O.Z.isAwaitingAuthentication),
        [V, G] = (0, o.Wu)([Z.Z], () => [Z.Z.purchaseTokenAuthState, Z.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != B && null != W.current && W.current.scrollIntoView({ behavior: 'smooth' });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: i,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: P,
            setTokenState: C,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: R,
            setIsSubmittingCurrentStep: j,
            hasRedirectURL: w,
            setHasRedirectURL: k,
            braintreeEmail: g,
            braintreeNonce: I,
            venmoUsername: S,
            adyenPaymentData: v,
            paymentError: null != x ? x : T,
            paymentAuthenticationState: L ? H.wr.PENDING : null != x ? H.wr.ERROR : H.wr.NONE,
            purchaseError: B,
            setPurchaseError: U,
            purchaseErrorBlockRef: W,
            isAuthenticating: Q,
            purchaseTokenAuthState: V,
            purchaseTokenHash: G,
            epsBankState: f,
            setEpsBankState: _,
            idealBankState: y,
            setIdealBankState: b,
            p24BankState: E,
            setP24BankState: N
        }
    );
}
