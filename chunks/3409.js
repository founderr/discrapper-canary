"use strict";
a.r(t), a.d(t, {
  AddPaymentFlow: function() {
    return eT
  },
  AddPaymentStep: function() {
    return ef
  },
  useSharedPaymentModal: function() {
    return e_
  }
}), a("47120"), a("411104");
var n = a("735250"),
  s = a("470079"),
  r = a("160612"),
  l = a("512722"),
  o = a.n(l),
  i = a("442837"),
  u = a("481060"),
  c = a("570140"),
  d = a("355467"),
  p = a("873115"),
  E = a("976255"),
  m = a("801937"),
  S = a("282164"),
  A = a("738342"),
  f = a("915271"),
  T = a("228666"),
  _ = a("723484"),
  N = a("122192"),
  y = a("296214"),
  C = a("870630"),
  P = a("710845"),
  h = a("598"),
  I = a("409813"),
  R = a("51499"),
  O = a("586585"),
  b = a("614277"),
  M = a("737143"),
  g = a("812169"),
  L = a("35248"),
  D = a("698708"),
  v = a("351402"),
  x = a("975060"),
  Y = a("505649"),
  B = a("853872"),
  U = a("882712"),
  k = a("358085"),
  w = a("622999"),
  F = a("176919"),
  j = a("185139"),
  G = a("559725"),
  W = a("850228"),
  H = a("231338"),
  V = a("689938"),
  K = a("329677"),
  z = a("913175");
let Z = new P.default("AddPaymentStep.tsx"),
  Q = [I.Step.PAYMENT_TYPE],
  q = [I.Step.PAYMENT_TYPE, I.Step.CREDIT_CARD_INFORMATION, I.Step.ADDRESS],
  X = [I.Step.PAYMENT_TYPE, I.Step.PAYPAL_INFORMATION, I.Step.ADDRESS],
  J = [I.Step.PAYMENT_TYPE, I.Step.VENMO_INFORMATION, I.Step.ADDRESS],
  $ = [I.Step.PAYMENT_TYPE, I.Step.SOFORT_INFORMATION, I.Step.ADDRESS];
I.Step.PAYMENT_TYPE, I.Step.PAYMENT_REQUEST_INFORMATION, I.Step.ADDRESS;
let ee = [I.Step.PAYMENT_TYPE, I.Step.PRZELEWY24_INFORMATION, I.Step.ADDRESS],
  et = [I.Step.PAYMENT_TYPE, I.Step.EPS_INFORMATION, I.Step.ADDRESS],
  ea = [I.Step.PAYMENT_TYPE, I.Step.IDEAL_INFORMATION, I.Step.ADDRESS],
  en = [I.Step.PAYMENT_TYPE, I.Step.CASH_APP_INFORMATION, I.Step.ADDRESS],
  es = [I.Step.PAYMENT_TYPE, I.Step.ADDRESS],
  er = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  el = {
    email: "",
    name: "",
    country: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: ""
  };

function eo(e) {
  let {
    onChooseType: t,
    onPaymentRequestSourceReceived: a,
    onPaymentRequestSourceFailed: s,
    analyticsLocation: r,
    isEligibleForTrial: l
  } = e;
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(m.default, {
      onChooseType: t,
      allowStripeRequestPayments: !k.isPlatformEmbedded,
      onStripePaymentMethodReceived: async e => {
        if ((0, E.updateStripePaymentRequest)(e), null == e) {
          s();
          return
        }
        try {
          let t = await (0, d.createPaymentRequestPaymentSource)(e, void 0, r),
            {
              billingAddressInfo: n
            } = (0, w.parseStripePaymentMethod)(e);
          a(t, n)
        } catch (e) {}
      },
      isEligibleForTrial: l
    })
  })
}

function ei(e) {
  let {
    onCardInfoChange: t
  } = e, a = (0, i.useStateFromStores)([x.default], () => x.default.error);
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(N.CreditCardInformationBody, {
      billingError: a,
      onCardInfoChange: t
    })
  })
}

function eu() {
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(S.default, {})
  })
}

function ec() {
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(f.default, {})
  })
}

function ed() {
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(W.default, {})
  })
}

function ep() {
  let e = (0, i.useStateFromStores)([v.default], () => v.default.isBusy),
    t = (0, i.useStateFromStores)([x.default], () => x.default.stripePaymentMethod);
  return (0, n.jsx)(y.PaymentRequestStepBody, {
    className: K.body,
    stripePaymentMethod: t,
    submitting: e
  })
}

function eE(e) {
  let {
    billingAddressInfo: t,
    onBillingAddressChange: a,
    paymentSourceType: s
  } = e, r = (0, i.useStateFromStores)([x.default], () => x.default.error);
  return (0, n.jsx)("div", {
    className: K.body,
    children: (0, n.jsx)(T.AddressStepBody, {
      billingAddressInfo: t,
      billingError: r,
      onBillingAddressChange: a,
      paymentSourceType: s
    })
  })
}

function em() {
  return (0, n.jsx)(_.AwaitingAuthenticationStepBody, {
    className: K.body
  })
}

function eS(e) {
  return () => (null != x.default.error && (0, E.clearError)(), e())
}

function eA(e) {
  let {
    onPrimary: t,
    onBack: a,
    ...s
  } = e, r = t;
  null != t && (r = eS(t));
  let l = a;
  return null != a && (l = eS(a)), (0, n.jsx)(O.default, {
    ...s,
    onPrimary: r,
    onBack: l
  })
}

function ef(e) {
  let {
    breadcrumbSteps: t
  } = e, {
    step: a,
    setStep: n,
    paymentSources: s,
    paymentSourceId: r,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  } = (0, h.usePaymentContext)(), p = {
    ...e_(),
    paymentSources: s,
    paymentSourceId: r,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  };
  return o()(a, "Step should be set here"), eT({
    paymentModalArgs: p,
    initialStep: I.Step.PAYMENT_TYPE,
    prependSteps: [I.Step.PROMOTION_INFO],
    appendSteps: [I.Step.REVIEW, I.Step.CONFIRM],
    breadcrumpSteps: t,
    currentBreadcrumpStep: a,
    onReturn: () => n(I.Step.REVIEW),
    onComplete: () => n(I.Step.REVIEW),
    onStepChange: () => {}
  })
}

function eT(e) {
  let t, a, l, c, {
      paymentModalArgs: m,
      initialStep: S,
      prependSteps: f,
      appendSteps: T,
      onReturn: _,
      onComplete: N,
      onStepChange: y,
      breadcrumpSteps: P,
      currentBreadcrumpStep: v,
      header: Y,
      analyticsLocation: U,
      hideBreadcrumbs: k = !1,
      usePaymentModalStep: w = !1,
      isEligibleForTrial: F = !1,
      allowDesktopRedirectPurchase: W = !1
    } = e,
    er = {
      steps: [...f, ...q, ...T],
      methodType: H.PaymentSourceTypes.CARD
    },
    el = {
      steps: [...f, ...Q, ...T],
      methodType: H.PaymentSourceTypes.PAYMENT_REQUEST
    },
    eS = {
      steps: [...f, ...X, ...T],
      methodType: H.PaymentSourceTypes.PAYPAL
    },
    ef = {
      steps: [...f, ...J, ...T],
      methodType: H.PaymentSourceTypes.VENMO
    },
    eT = {
      steps: [...f, ...Q, ...T]
    },
    e_ = {
      steps: [...f, ...$, ...T],
      methodType: H.PaymentSourceTypes.SOFORT
    },
    eN = {
      steps: [...f, ...ee, ...T],
      methodType: H.PaymentSourceTypes.PRZELEWY24
    },
    ey = {
      steps: [...f, ...et, ...T],
      methodType: H.PaymentSourceTypes.EPS
    },
    eC = {
      steps: [...f, ...ea, ...T],
      methodType: H.PaymentSourceTypes.IDEAL
    },
    eP = {
      steps: [...f, ...en, ...T],
      methodType: H.PaymentSourceTypes.CASH_APP
    },
    [eh, eI] = s.useState(S),
    [eR, eO] = s.useState(S === I.Step.CREDIT_CARD_INFORMATION ? er : {
      steps: [I.Step.ADD_PAYMENT_STEPS]
    }),
    {
      stripe: eb
    } = (0, h.usePaymentContext)(),
    eM = (0, i.useStateFromStores)([x.default], () => x.default.redirectedPaymentSourceId);

  function eg(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    eI(e), t && y({
      currentStep: eh,
      toStep: e
    })
  }
  s.useEffect(() => {
    (() => {
      if (null == eM) return;
      let e = B.default.getPaymentSource(eM);
      null != e && (e$(e), ew(!1))
    })()
  }, [eM]);
  let {
    setPaymentSourceId: eL,
    creditCardState: eD,
    setCreditCardState: ev,
    tokenState: ex,
    setTokenState: eY,
    isSubmittingCurrentStep: eB,
    billingAddressState: eU,
    setBillingAddressState: ek,
    setIsSubmittingCurrentStep: ew,
    hasRedirectURL: eF,
    setHasRedirectURL: ej,
    braintreeEmail: eG,
    braintreeNonce: eW,
    venmoUsername: eH,
    adyenPaymentData: eV,
    isAuthenticating: eK,
    epsBankState: ez,
    setEpsBankState: eZ,
    idealBankState: eQ,
    setIdealBankState: eq,
    p24BankState: eX,
    setP24BankState: eJ
  } = m;

  function e$(e) {
    eL(e.id), N(eh, e), eg(S, !1)
  }
  let e0 = W && (0, M.inBrowserAutofillExperiment)();
  switch (eh) {
    case I.Step.PAYMENT_TYPE:
      t = (0, n.jsx)(eo, {
        onChooseType: e => {
          switch (e) {
            case H.PaymentSourceTypes.CARD:
              e0 ? eg(I.Step.AWAITING_BROWSER_CHECKOUT) : (eO(er), eg(I.Step.CREDIT_CARD_INFORMATION));
              break;
            case H.PaymentSourceTypes.PAYPAL:
              eO(eS), eg(I.Step.PAYPAL_INFORMATION);
              break;
            case H.PaymentSourceTypes.VENMO:
              eO(ef), eg(I.Step.VENMO_INFORMATION);
              break;
            case H.PaymentSourceTypes.PAYMENT_REQUEST:
              eO(el), eg(I.Step.PAYMENT_REQUEST_INFORMATION);
              break;
            case H.PaymentSourceTypes.SOFORT:
              eO(e_), eg(I.Step.SOFORT_INFORMATION);
              break;
            case H.PaymentSourceTypes.PRZELEWY24:
              eO(eN), eg(I.Step.PRZELEWY24_INFORMATION);
              break;
            case H.PaymentSourceTypes.EPS:
              eO(ey), eg(I.Step.EPS_INFORMATION);
              break;
            case H.PaymentSourceTypes.IDEAL:
              eO(eC), eg(I.Step.IDEAL_INFORMATION);
              break;
            case H.PaymentSourceTypes.CASH_APP:
              eO(eP), eg(I.Step.CASH_APP_INFORMATION);
              break;
            case H.PaymentSourceTypes.GIROPAY:
            case H.PaymentSourceTypes.PAYSAFE_CARD:
            case H.PaymentSourceTypes.GCASH:
            case H.PaymentSourceTypes.GRABPAY_MY:
            case H.PaymentSourceTypes.MOMO_WALLET:
            case H.PaymentSourceTypes.KAKAOPAY:
            case H.PaymentSourceTypes.GOPAY_WALLET:
            case H.PaymentSourceTypes.BANCONTACT:
              eO({
                steps: [...f, ...es, ...T],
                methodType: e
              }), eg(I.Step.ADDRESS)
          }
          null != x.default.error && (0, E.clearError)()
        },
        onPaymentRequestSourceReceived: (e, t) => {
          ek(e => ({
            ...e,
            info: t
          })), eO(el), e$(e)
        },
        onPaymentRequestSourceFailed: () => {
          eO(eT), eg(I.Step.PAYMENT_TYPE)
        },
        analyticsLocation: U,
        isEligibleForTrial: F
      }), a = (0, n.jsx)(eA, {
        onBack: _
      });
      break;
    case I.Step.CREDIT_CARD_INFORMATION:
      let e1 = 2 === (0, g.reducedPaymentInfoExperiment)().bucket,
        e2 = async e => {
          ew(!0);
          try {
            let t = await (0, d.createCardToken)(eb, e);
            if (eY({
                token: t
              }), e1) try {
              let e = await (0, d.confirmCardPaymentSource)(eb, t, eU.info, U);
              e$(e)
            } catch {} else eg(I.Step.ADDRESS)
          } catch (e) {
            var t;
            Z.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e))
          } finally {
            ew(!1)
          }
        };
      t = (0, n.jsx)(ei, {
        onCardInfoChange: (e, t) => {
          ev({
            info: e,
            isValid: t
          }), ek(t => {
            let a = {
              ...t,
              info: {
                ...t.info,
                name: e.name
              }
            };
            if (e1) {
              var n, s;
              a.info.country = null !== (n = e.country) && void 0 !== n ? n : "", a.info.postalCode = null !== (s = e.postalCode) && void 0 !== s ? s : ""
            }
            return a
          })
        }
      }), a = (0, n.jsx)(r.ElementsConsumer, {
        children: e => {
          let {
            elements: t
          } = e;
          return (0, n.jsx)(eA, {
            onBack: () => eg(I.Step.PAYMENT_TYPE),
            primaryCTA: O.default.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: V.default.Messages.NEXT,
            primarySubmitting: eB,
            primaryDisabled: e1 ? !eD.isValid || eK : !eD.isValid,
            onPrimary: () => e2(t)
          })
        }
      });
      break;
    case I.Step.AWAITING_BROWSER_CHECKOUT:
      t = (0, n.jsx)("div", {
        className: K.body,
        children: (0, n.jsx)(L.AwaitingBrowserCheckoutStepBody, {
          onPurchaseComplete: () => N(eh),
          onHandoffFailure: () => {
            eO(er), eg(I.Step.CREDIT_CARD_INFORMATION)
          }
        })
      }), a = (0, n.jsx)(L.AwaitingBrowserCheckoutStepFooter, {
        onPrimaryClick: () => {
          eO(er), eg(I.Step.CREDIT_CARD_INFORMATION)
        },
        onBackClick: () => {
          eO(eT), eg(I.Step.PAYMENT_TYPE)
        }
      });
      break;
    case I.Step.SOFORT_INFORMATION:
      let e4 = eU.info;
      t = (0, n.jsx)("div", {
        className: K.body,
        children: (0, n.jsx)(A.default, {
          billingAddressInfo: e4,
          onChange: e => {
            ek({
              info: {
                ...e4,
                ...e
              },
              isValid: !1
            })
          },
          error: x.default.error
        })
      }), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: "" === e4.name || "" === e4.email || void 0 === e4.email,
        onPrimary: () => eg(I.Step.ADDRESS)
      });
      break;
    case I.Step.EPS_INFORMATION:
      t = (0, n.jsx)(C.default, {
        type: H.PaymentSourceTypes.EPS,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onEPSBankChange: e => eZ(e),
        epsBankValue: ez,
        billingAddressInfo: eU.info
      }), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === ez || "" === ez || "" === eU.info.name,
        onPrimary: () => eg(I.Step.ADDRESS)
      });
      break;
    case I.Step.IDEAL_INFORMATION:
      t = (0, n.jsx)(C.default, {
        type: H.PaymentSourceTypes.IDEAL,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onIdealBankChange: e => eq(e),
        idealBankValue: eQ,
        billingAddressInfo: eU.info
      }), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === eQ || "" === eQ || "" === eU.info.name,
        onPrimary: () => eg(I.Step.ADDRESS)
      });
      break;
    case I.Step.PRZELEWY24_INFORMATION:
      t = (0, n.jsx)(C.default, {
        type: H.PaymentSourceTypes.PRZELEWY24,
        onNameChange: e => ek({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onEmailChange: e => ek({
          info: {
            ...eU.info,
            email: e
          },
          isValid: eU.isValid
        }),
        onP24BankChange: e => {
          eJ(e)
        },
        p24BankValue: eX,
        billingAddressInfo: eU.info
      }), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === eU.info.name || "" === eU.info.name || void 0 === eU.info.email || "" === eU.info.email || void 0 === eX || "" === eX,
        onPrimary: () => eg(I.Step.ADDRESS)
      });
      break;
    case I.Step.PAYPAL_INFORMATION:
      let e5 = 0 !== eG.length && null != eW;
      t = (0, n.jsx)(eu, {}), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: e5 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
        onPrimary: () => e5 ? eg(I.Step.ADDRESS) : (0, p.reopenPayPalWindow)()
      });
      break;
    case I.Step.VENMO_INFORMATION:
      let e8 = 0 !== eH.length && null != eW;
      t = (0, n.jsx)(ec, {}), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: e8 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
        onPrimary: () => e8 ? eg(I.Step.ADDRESS) : (0, p.reopenVenmoWindow)()
      });
      break;
    case I.Step.PAYMENT_REQUEST_INFORMATION:
      t = (0, n.jsx)(ep, {}), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE)
      });
      break;
    case I.Step.CASH_APP_INFORMATION:
      let e9 = null != eV;
      t = (0, n.jsx)(ed, {}), a = (0, n.jsx)(eA, {
        onBack: () => eg(I.Step.PAYMENT_TYPE),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: e9 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
        onPrimary: () => e9 ? eg(I.Step.ADDRESS) : (0, G.reopenCashAppPayWindow)()
      });
      break;
    case I.Step.ADDRESS:
      let e7 = async () => {
        ew(!0);
        let e = eR.methodType;
        switch (e) {
          case H.PaymentSourceTypes.CARD:
            try {
              let e = await (0, d.confirmCardPaymentSource)(eb, ex.token, eU.info, U);
              e$(e)
            } catch {}
            break;
          case H.PaymentSourceTypes.VENMO:
          case H.PaymentSourceTypes.PAYPAL:
            try {
              o()(null != eW, "Missing braintreeNonce");
              let e = await (0, d.createBraintreePaymentSource)(eW, eU.info, U);
              e$(e)
            } catch {}
            break;
          case H.PaymentSourceTypes.SOFORT:
            try {
              let e = await (0, d.confirmSofort)(eb, eU.info, U);
              e$(e)
            } catch {}
            break;
          case H.PaymentSourceTypes.EPS:
            try {
              let e = await (0, d.confirmEPS)(eb, ez, eU.info, U);
              e$(e)
            } catch (e) {
              Z.warn(e)
            }
            break;
          case H.PaymentSourceTypes.IDEAL:
            try {
              let e = await (0, d.confirmIdeal)(eb, eQ, eU.info, U);
              e$(e)
            } catch (e) {
              Z.warn(e)
            }
            break;
          case H.PaymentSourceTypes.PRZELEWY24:
            try {
              if (void 0 === eX) throw (0, d.dispatchConfirmationError)("Bank required for Przelewy24");
              let e = await (0, d.confirmPrzelewy24)(eb, {
                p24Bank: eX
              }, eU.info, U);
              e$(e)
            } catch {}
            break;
          case H.PaymentSourceTypes.PAYSAFE_CARD:
          case H.PaymentSourceTypes.GRABPAY_MY:
            try {
              let t = await (0, d.createAdyenPrepaidPaymentSource)(eU.info, e, U);
              e$(t)
            } catch {}
            break;
          case H.PaymentSourceTypes.GCASH:
          case H.PaymentSourceTypes.MOMO_WALLET:
          case H.PaymentSourceTypes.KAKAOPAY:
          case H.PaymentSourceTypes.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: t
              } = await (0, d.createAdyenVaultablePaymentSource)(eU.info, e, U);
              ej(t)
            } catch {}
            break;
          case H.PaymentSourceTypes.GIROPAY:
          case H.PaymentSourceTypes.BANCONTACT:
            try {
              let t = await (0, d.createStripePaymentSource)(eb, eU.info, e, U);
              e$(t)
            } catch {}
            break;
          case H.PaymentSourceTypes.CASH_APP:
            try {
              o()(null != eV, "Missing adyenPaymentData");
              let {
                paymentSource: t
              } = await (0, d.createAdyenVaultablePaymentSource)(eU.info, e, U, eV);
              o()(null != t, "Cash App Pay Payment Source missing"), e$(t)
            } catch {}
            break;
          default:
            throw Error("unknown step not handled")
        }!eF && ew(!1)
      };
      switch (eR.methodType) {
        case H.PaymentSourceTypes.CARD:
          c = I.Step.CREDIT_CARD_INFORMATION, l = H.PaymentSourceTypes.CARD;
          break;
        case H.PaymentSourceTypes.PAYPAL:
          c = I.Step.PAYPAL_INFORMATION, l = H.PaymentSourceTypes.PAYPAL;
          break;
        case H.PaymentSourceTypes.VENMO:
          c = I.Step.VENMO_INFORMATION, l = H.PaymentSourceTypes.VENMO;
          break;
        case H.PaymentSourceTypes.GIROPAY:
          c = I.Step.PAYMENT_TYPE, l = H.PaymentSourceTypes.GIROPAY;
          break;
        case H.PaymentSourceTypes.SOFORT:
          c = I.Step.SOFORT_INFORMATION, l = H.PaymentSourceTypes.SOFORT;
          break;
        case H.PaymentSourceTypes.PAYSAFE_CARD:
        case H.PaymentSourceTypes.GCASH:
        case H.PaymentSourceTypes.GRABPAY_MY:
        case H.PaymentSourceTypes.MOMO_WALLET:
        case H.PaymentSourceTypes.KAKAOPAY:
        case H.PaymentSourceTypes.GOPAY_WALLET:
        case H.PaymentSourceTypes.BANCONTACT:
          c = I.Step.PAYMENT_TYPE, l = eR.methodType;
          break;
        case H.PaymentSourceTypes.EPS:
          c = I.Step.EPS_INFORMATION, l = H.PaymentSourceTypes.EPS;
          break;
        case H.PaymentSourceTypes.IDEAL:
          c = I.Step.IDEAL_INFORMATION, l = H.PaymentSourceTypes.IDEAL;
          break;
        case H.PaymentSourceTypes.PRZELEWY24:
          c = I.Step.PRZELEWY24_INFORMATION, l = H.PaymentSourceTypes.PRZELEWY24;
          break;
        case H.PaymentSourceTypes.CASH_APP:
          c = I.Step.CASH_APP_INFORMATION, l = H.PaymentSourceTypes.CASH_APP;
          break;
        default:
          c = I.Step.PAYMENT_TYPE, l = H.PaymentSourceTypes.CARD
      }
      t = (0, n.jsx)(eE, {
        billingAddressInfo: eU.info,
        onBillingAddressChange: (e, t) => {
          ek({
            info: {
              ...eU.info,
              ...e
            },
            isValid: t
          })
        },
        paymentSourceType: l
      }), a = (0, n.jsx)(eA, {
        onBack: () => eg(c),
        primaryCTA: O.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primarySubmitting: eB,
        primaryDisabled: !eU.isValid || eK,
        onPrimary: e7
      });
      break;
    case I.Step.AWAITING_AUTHENTICATION:
      t = (0, n.jsx)(em, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eh))
  }
  let e3 = (0, n.jsx)(u.Sequencer, {
      className: z.sequencer,
      staticClassName: z.sequencerStatic,
      animatedNodeClassName: z.sequencerAnimatedNode,
      fillParent: !0,
      step: eh,
      steps: eR.steps,
      sideMargin: 20,
      children: t
    }),
    e6 = eh === I.Step.PAYMENT_TYPE && 0 === f.length ? null : a;
  return w ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(D.default, {
      className: K.paymentModalError
    }), F && (0, n.jsx)(R.default, {
      className: K.paymentModalBreadcrumbs,
      isEligibleForTrial: F
    }), (0, n.jsx)(b.PaymentPortalBody, {
      children: e3
    }), (0, n.jsx)(b.PaymentPortalFooter, {
      children: e6
    })]
  }) : (0, n.jsx)(j.default, {
    steps: null != P ? P : eR.steps,
    currentStep: null != v ? v : eh,
    paymentError: m.paymentError,
    header: Y,
    hideBreadcrumbs: k,
    body: e3,
    footer: e6
  })
}

function e_(e) {
  let {
    defaultPaymentSourceId: t,
    paymentSources: a,
    hasFetchedPaymentSources: n
  } = (0, i.useStateFromStoresObject)([B.default], () => ({
    defaultPaymentSourceId: void 0 !== e ? e : B.default.defaultPaymentSourceId,
    paymentSources: B.default.paymentSources,
    hasFetchedPaymentSources: B.default.hasFetchedPaymentSources
  }));
  s.useEffect(() => {
    (0, p.createClient)(), (0, G.createClient)(), !n && (0, d.fetchPaymentSources)()
  }, []);
  let [r, l] = s.useState(t);
  null != t && null == r && l(t);
  let [o, u] = s.useState(() => ({
    info: er,
    isValid: !1
  })), [m, S] = s.useState(() => ({
    info: el,
    isValid: !1
  })), [A, f] = s.useState(""), [T, _] = s.useState(""), [N, y] = s.useState(""), [C, P] = s.useState(() => ({
    token: null
  })), [h, I, R, O, b] = (0, i.useStateFromStoresArray)([x.default], () => [x.default.braintreeEmail, x.default.braintreeNonce, x.default.error, x.default.venmoUsername, x.default.adyenPaymentData]), [M, g] = (0, i.useStateFromStoresArray)([Y.default], () => [Y.default.error, Y.default.isAwaitingAuthentication]);
  s.useEffect(() => {
    let e = e => {
      let {
        billingAddress: t
      } = e;
      S({
        info: t,
        isValid: t.country.length > 0
      })
    };
    return c.default.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      c.default.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, E.clearError)()
    }
  }, []);
  let [L, D] = s.useState(!1), [v, k] = s.useState(!1), [w, j] = s.useState(null), W = s.useRef(null), H = (0, i.useStateFromStores)([Y.default], () => Y.default.isAwaitingAuthentication), [V, K] = (0, i.useStateFromStoresArray)([U.default], () => [U.default.purchaseTokenAuthState, U.default.purchaseTokenHash]);
  return s.useEffect(() => {
    null != w && null != W.current && W.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [w]), {
    paymentSources: a,
    paymentSourceId: r,
    hasFetchedPaymentSources: n,
    setPaymentSourceId: l,
    creditCardState: o,
    setCreditCardState: u,
    tokenState: C,
    setTokenState: P,
    billingAddressState: m,
    setBillingAddressState: S,
    isSubmittingCurrentStep: L,
    setIsSubmittingCurrentStep: D,
    hasRedirectURL: v,
    setHasRedirectURL: k,
    braintreeEmail: h,
    braintreeNonce: I,
    venmoUsername: O,
    adyenPaymentData: b,
    paymentError: null != M ? M : R,
    paymentAuthenticationState: g ? F.PaymentAuthenticationState.PENDING : null != M ? F.PaymentAuthenticationState.ERROR : F.PaymentAuthenticationState.NONE,
    purchaseError: w,
    setPurchaseError: j,
    purchaseErrorBlockRef: W,
    isAuthenticating: H,
    purchaseTokenAuthState: V,
    purchaseTokenHash: K,
    epsBankState: T,
    setEpsBankState: _,
    idealBankState: N,
    setIdealBankState: y,
    p24BankState: A,
    setP24BankState: f
  }
}