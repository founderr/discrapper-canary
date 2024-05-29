"use strict";
a.r(t), a.d(t, {
  AddPaymentFlow: function() {
    return eA
  },
  AddPaymentStep: function() {
    return eS
  },
  useSharedPaymentModal: function() {
    return ef
  }
}), a("47120"), a("411104");
var n = a("735250"),
  s = a("470079"),
  l = a("160612"),
  r = a("512722"),
  o = a.n(r),
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
  y = a("122192"),
  N = a("296214"),
  P = a("870630"),
  C = a("710845"),
  h = a("598"),
  I = a("409813"),
  R = a("51499"),
  b = a("586585"),
  M = a("614277"),
  O = a("812169"),
  g = a("698708"),
  L = a("351402"),
  D = a("975060"),
  v = a("505649"),
  x = a("853872"),
  Y = a("882712"),
  B = a("358085"),
  U = a("622999"),
  k = a("176919"),
  F = a("185139"),
  w = a("559725"),
  j = a("850228"),
  G = a("231338"),
  V = a("689938"),
  W = a("329677"),
  H = a("913175");
let K = new C.default("AddPaymentStep.tsx"),
  z = [I.Step.PAYMENT_TYPE],
  Z = [I.Step.PAYMENT_TYPE, I.Step.CREDIT_CARD_INFORMATION, I.Step.ADDRESS],
  Q = [I.Step.PAYMENT_TYPE, I.Step.PAYPAL_INFORMATION, I.Step.ADDRESS],
  q = [I.Step.PAYMENT_TYPE, I.Step.VENMO_INFORMATION, I.Step.ADDRESS],
  X = [I.Step.PAYMENT_TYPE, I.Step.SOFORT_INFORMATION, I.Step.ADDRESS];
I.Step.PAYMENT_TYPE, I.Step.PAYMENT_REQUEST_INFORMATION, I.Step.ADDRESS;
let J = [I.Step.PAYMENT_TYPE, I.Step.PRZELEWY24_INFORMATION, I.Step.ADDRESS],
  $ = [I.Step.PAYMENT_TYPE, I.Step.EPS_INFORMATION, I.Step.ADDRESS],
  ee = [I.Step.PAYMENT_TYPE, I.Step.IDEAL_INFORMATION, I.Step.ADDRESS],
  et = [I.Step.PAYMENT_TYPE, I.Step.CASH_APP_INFORMATION, I.Step.ADDRESS],
  ea = [I.Step.PAYMENT_TYPE, I.Step.ADDRESS],
  en = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  es = {
    email: "",
    name: "",
    country: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: ""
  };

function el(e) {
  let {
    onChooseType: t,
    onPaymentRequestSourceReceived: a,
    onPaymentRequestSourceFailed: s,
    analyticsLocation: l,
    isEligibleForTrial: r
  } = e;
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(m.default, {
      onChooseType: t,
      allowStripeRequestPayments: !B.isPlatformEmbedded,
      onStripePaymentMethodReceived: async e => {
        if ((0, E.updateStripePaymentRequest)(e), null == e) {
          s();
          return
        }
        try {
          let t = await (0, d.createPaymentRequestPaymentSource)(e, void 0, l),
            {
              billingAddressInfo: n
            } = (0, U.parseStripePaymentMethod)(e);
          a(t, n)
        } catch (e) {}
      },
      isEligibleForTrial: r
    })
  })
}

function er(e) {
  let {
    onCardInfoChange: t
  } = e, a = (0, i.useStateFromStores)([D.default], () => D.default.error);
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(y.CreditCardInformationBody, {
      billingError: a,
      onCardInfoChange: t
    })
  })
}

function eo() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(S.default, {})
  })
}

function ei() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(f.default, {})
  })
}

function eu() {
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(j.default, {})
  })
}

function ec() {
  let e = (0, i.useStateFromStores)([L.default], () => L.default.isBusy),
    t = (0, i.useStateFromStores)([D.default], () => D.default.stripePaymentMethod);
  return (0, n.jsx)(N.PaymentRequestStepBody, {
    className: W.body,
    stripePaymentMethod: t,
    submitting: e
  })
}

function ed(e) {
  let {
    billingAddressInfo: t,
    onBillingAddressChange: a,
    paymentSourceType: s
  } = e, l = (0, i.useStateFromStores)([D.default], () => D.default.error);
  return (0, n.jsx)("div", {
    className: W.body,
    children: (0, n.jsx)(T.AddressStepBody, {
      billingAddressInfo: t,
      billingError: l,
      onBillingAddressChange: a,
      paymentSourceType: s
    })
  })
}

function ep() {
  return (0, n.jsx)(_.AwaitingAuthenticationStepBody, {
    className: W.body
  })
}

function eE(e) {
  return () => (null != D.default.error && (0, E.clearError)(), e())
}

function em(e) {
  let {
    onPrimary: t,
    onBack: a,
    ...s
  } = e, l = t;
  null != t && (l = eE(t));
  let r = a;
  return null != a && (r = eE(a)), (0, n.jsx)(b.default, {
    ...s,
    onPrimary: l,
    onBack: r
  })
}

function eS(e) {
  let {
    breadcrumbSteps: t
  } = e, {
    step: a,
    setStep: n,
    paymentSources: s,
    paymentSourceId: l,
    setPaymentSourceId: r,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  } = (0, h.usePaymentContext)(), p = {
    ...ef(),
    paymentSources: s,
    paymentSourceId: l,
    setPaymentSourceId: r,
    purchaseError: i,
    setPurchaseError: u,
    purchaseErrorBlockRef: c,
    paymentAuthenticationState: d
  };
  return o()(a, "Step should be set here"), eA({
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

function eA(e) {
  let t, a, r, c, {
      paymentModalArgs: m,
      initialStep: S,
      prependSteps: f,
      appendSteps: T,
      onReturn: _,
      onComplete: y,
      onStepChange: N,
      breadcrumpSteps: C,
      currentBreadcrumpStep: L,
      header: v,
      analyticsLocation: Y,
      hideBreadcrumbs: B = !1,
      usePaymentModalStep: U = !1,
      isEligibleForTrial: k = !1
    } = e,
    j = {
      steps: [...f, ...Z, ...T],
      methodType: G.PaymentSourceTypes.CARD
    },
    en = {
      steps: [...f, ...z, ...T],
      methodType: G.PaymentSourceTypes.PAYMENT_REQUEST
    },
    es = {
      steps: [...f, ...Q, ...T],
      methodType: G.PaymentSourceTypes.PAYPAL
    },
    eE = {
      steps: [...f, ...q, ...T],
      methodType: G.PaymentSourceTypes.VENMO
    },
    eS = {
      steps: [...f, ...z, ...T]
    },
    eA = {
      steps: [...f, ...X, ...T],
      methodType: G.PaymentSourceTypes.SOFORT
    },
    ef = {
      steps: [...f, ...J, ...T],
      methodType: G.PaymentSourceTypes.PRZELEWY24
    },
    eT = {
      steps: [...f, ...$, ...T],
      methodType: G.PaymentSourceTypes.EPS
    },
    e_ = {
      steps: [...f, ...ee, ...T],
      methodType: G.PaymentSourceTypes.IDEAL
    },
    ey = {
      steps: [...f, ...et, ...T],
      methodType: G.PaymentSourceTypes.CASH_APP
    },
    [eN, eP] = s.useState(S),
    [eC, eh] = s.useState(null == C ? j : {
      steps: [I.Step.ADD_PAYMENT_STEPS]
    }),
    {
      stripe: eI
    } = (0, h.usePaymentContext)(),
    eR = (0, i.useStateFromStores)([D.default], () => D.default.redirectedPaymentSourceId);

  function eb(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    eP(e), t && N({
      currentStep: eN,
      toStep: e
    })
  }
  s.useEffect(() => {
    (() => {
      if (null == eR) return;
      let e = x.default.getPaymentSource(eR);
      null != e && (eq(e), eB(!1))
    })()
  }, [eR]);
  let {
    setPaymentSourceId: eM,
    creditCardState: eO,
    setCreditCardState: eg,
    tokenState: eL,
    setTokenState: eD,
    isSubmittingCurrentStep: ev,
    billingAddressState: ex,
    setBillingAddressState: eY,
    setIsSubmittingCurrentStep: eB,
    hasRedirectURL: eU,
    setHasRedirectURL: ek,
    braintreeEmail: eF,
    braintreeNonce: ew,
    venmoUsername: ej,
    adyenPaymentData: eG,
    isAuthenticating: eV,
    epsBankState: eW,
    setEpsBankState: eH,
    idealBankState: eK,
    setIdealBankState: ez,
    p24BankState: eZ,
    setP24BankState: eQ
  } = m;

  function eq(e) {
    eM(e.id), y(eN, e), eb(S, !1)
  }
  switch (eN) {
    case I.Step.PAYMENT_TYPE:
      t = (0, n.jsx)(el, {
        onChooseType: e => {
          switch (e) {
            case G.PaymentSourceTypes.CARD:
              eh(j), eb(I.Step.CREDIT_CARD_INFORMATION);
              break;
            case G.PaymentSourceTypes.PAYPAL:
              eh(es), eb(I.Step.PAYPAL_INFORMATION);
              break;
            case G.PaymentSourceTypes.VENMO:
              eh(eE), eb(I.Step.VENMO_INFORMATION);
              break;
            case G.PaymentSourceTypes.PAYMENT_REQUEST:
              eh(en), eb(I.Step.PAYMENT_REQUEST_INFORMATION);
              break;
            case G.PaymentSourceTypes.SOFORT:
              eh(eA), eb(I.Step.SOFORT_INFORMATION);
              break;
            case G.PaymentSourceTypes.PRZELEWY24:
              eh(ef), eb(I.Step.PRZELEWY24_INFORMATION);
              break;
            case G.PaymentSourceTypes.EPS:
              eh(eT), eb(I.Step.EPS_INFORMATION);
              break;
            case G.PaymentSourceTypes.IDEAL:
              eh(e_), eb(I.Step.IDEAL_INFORMATION);
              break;
            case G.PaymentSourceTypes.CASH_APP:
              eh(ey), eb(I.Step.CASH_APP_INFORMATION);
              break;
            case G.PaymentSourceTypes.GIROPAY:
            case G.PaymentSourceTypes.PAYSAFE_CARD:
            case G.PaymentSourceTypes.GCASH:
            case G.PaymentSourceTypes.GRABPAY_MY:
            case G.PaymentSourceTypes.MOMO_WALLET:
            case G.PaymentSourceTypes.KAKAOPAY:
            case G.PaymentSourceTypes.GOPAY_WALLET:
            case G.PaymentSourceTypes.BANCONTACT:
              eh({
                steps: [...f, ...ea, ...T],
                methodType: e
              }), eb(I.Step.ADDRESS)
          }
          null != D.default.error && (0, E.clearError)()
        },
        onPaymentRequestSourceReceived: (e, t) => {
          eY(e => ({
            ...e,
            info: t
          })), eh(en), eq(e)
        },
        onPaymentRequestSourceFailed: () => {
          eh(eS), eb(I.Step.PAYMENT_TYPE)
        },
        analyticsLocation: Y,
        isEligibleForTrial: k
      }), a = (0, n.jsx)(em, {
        onBack: _
      });
      break;
    case I.Step.CREDIT_CARD_INFORMATION:
      let eX = 2 === (0, O.reducedPaymentInfoExperiment)().bucket,
        eJ = async e => {
          eB(!0);
          try {
            let t = await (0, d.createCardToken)(eI, e);
            if (eD({
                token: t
              }), eX) try {
              let e = await (0, d.confirmCardPaymentSource)(eI, t, ex.info, Y);
              eq(e)
            } catch {} else eb(I.Step.ADDRESS)
          } catch (e) {
            var t;
            K.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e))
          } finally {
            eB(!1)
          }
        };
      t = (0, n.jsx)(er, {
        onCardInfoChange: (e, t) => {
          eg({
            info: e,
            isValid: t
          }), eY(t => {
            let a = {
              ...t,
              info: {
                ...t.info,
                name: e.name
              }
            };
            if (eX) {
              var n, s;
              a.info.country = null !== (n = e.country) && void 0 !== n ? n : "", a.info.postalCode = null !== (s = e.postalCode) && void 0 !== s ? s : ""
            }
            return a
          })
        }
      }), a = (0, n.jsx)(l.ElementsConsumer, {
        children: e => {
          let {
            elements: t
          } = e;
          return (0, n.jsx)(em, {
            onBack: () => eb(I.Step.PAYMENT_TYPE),
            primaryCTA: b.default.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: V.default.Messages.NEXT,
            primarySubmitting: ev,
            primaryDisabled: eX ? !eO.isValid || eV : !eO.isValid,
            onPrimary: () => eJ(t)
          })
        }
      });
      break;
    case I.Step.SOFORT_INFORMATION:
      let e$ = ex.info;
      t = (0, n.jsx)("div", {
        className: W.body,
        children: (0, n.jsx)(A.default, {
          billingAddressInfo: e$,
          onChange: e => {
            eY({
              info: {
                ...e$,
                ...e
              },
              isValid: !1
            })
          },
          error: D.default.error
        })
      }), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: "" === e$.name || "" === e$.email || void 0 === e$.email,
        onPrimary: () => eb(I.Step.ADDRESS)
      });
      break;
    case I.Step.EPS_INFORMATION:
      t = (0, n.jsx)(P.default, {
        type: G.PaymentSourceTypes.EPS,
        onAccountHolderNameChange: e => eY({
          info: {
            ...ex.info,
            name: e
          },
          isValid: ex.isValid
        }),
        onEPSBankChange: e => eH(e),
        epsBankValue: eW,
        billingAddressInfo: ex.info
      }), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === eW || "" === eW || "" === ex.info.name,
        onPrimary: () => eb(I.Step.ADDRESS)
      });
      break;
    case I.Step.IDEAL_INFORMATION:
      t = (0, n.jsx)(P.default, {
        type: G.PaymentSourceTypes.IDEAL,
        onAccountHolderNameChange: e => eY({
          info: {
            ...ex.info,
            name: e
          },
          isValid: ex.isValid
        }),
        onIdealBankChange: e => ez(e),
        idealBankValue: eK,
        billingAddressInfo: ex.info
      }), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === eK || "" === eK || "" === ex.info.name,
        onPrimary: () => eb(I.Step.ADDRESS)
      });
      break;
    case I.Step.PRZELEWY24_INFORMATION:
      t = (0, n.jsx)(P.default, {
        type: G.PaymentSourceTypes.PRZELEWY24,
        onNameChange: e => eY({
          info: {
            ...ex.info,
            name: e
          },
          isValid: ex.isValid
        }),
        onEmailChange: e => eY({
          info: {
            ...ex.info,
            email: e
          },
          isValid: ex.isValid
        }),
        onP24BankChange: e => {
          eQ(e)
        },
        p24BankValue: eZ,
        billingAddressInfo: ex.info
      }), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primaryDisabled: void 0 === ex.info.name || "" === ex.info.name || void 0 === ex.info.email || "" === ex.info.email || void 0 === eZ || "" === eZ,
        onPrimary: () => eb(I.Step.ADDRESS)
      });
      break;
    case I.Step.PAYPAL_INFORMATION:
      let e0 = 0 !== eF.length && null != ew;
      t = (0, n.jsx)(eo, {}), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: e0 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
        onPrimary: () => e0 ? eb(I.Step.ADDRESS) : (0, p.reopenPayPalWindow)()
      });
      break;
    case I.Step.VENMO_INFORMATION:
      let e1 = 0 !== ej.length && null != ew;
      t = (0, n.jsx)(ei, {}), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: e1 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
        onPrimary: () => e1 ? eb(I.Step.ADDRESS) : (0, p.reopenVenmoWindow)()
      });
      break;
    case I.Step.PAYMENT_REQUEST_INFORMATION:
      t = (0, n.jsx)(ec, {}), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE)
      });
      break;
    case I.Step.CASH_APP_INFORMATION:
      let e2 = null != eG;
      t = (0, n.jsx)(eu, {}), a = (0, n.jsx)(em, {
        onBack: () => eb(I.Step.PAYMENT_TYPE),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: e2 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
        onPrimary: () => e2 ? eb(I.Step.ADDRESS) : (0, w.reopenCashAppPayWindow)()
      });
      break;
    case I.Step.ADDRESS:
      let e4 = async () => {
        eB(!0);
        let e = eC.methodType;
        switch (e) {
          case G.PaymentSourceTypes.CARD:
            try {
              let e = await (0, d.confirmCardPaymentSource)(eI, eL.token, ex.info, Y);
              eq(e)
            } catch {}
            break;
          case G.PaymentSourceTypes.VENMO:
          case G.PaymentSourceTypes.PAYPAL:
            try {
              o()(null != ew, "Missing braintreeNonce");
              let e = await (0, d.createBraintreePaymentSource)(ew, ex.info, Y);
              eq(e)
            } catch {}
            break;
          case G.PaymentSourceTypes.SOFORT:
            try {
              let e = await (0, d.confirmSofort)(eI, ex.info, Y);
              eq(e)
            } catch {}
            break;
          case G.PaymentSourceTypes.EPS:
            try {
              let e = await (0, d.confirmEPS)(eI, eW, ex.info, Y);
              eq(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case G.PaymentSourceTypes.IDEAL:
            try {
              let e = await (0, d.confirmIdeal)(eI, eK, ex.info, Y);
              eq(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case G.PaymentSourceTypes.PRZELEWY24:
            try {
              if (void 0 === eZ) throw (0, d.dispatchConfirmationError)("Bank required for Przelewy24");
              let e = await (0, d.confirmPrzelewy24)(eI, {
                p24Bank: eZ
              }, ex.info, Y);
              eq(e)
            } catch {}
            break;
          case G.PaymentSourceTypes.PAYSAFE_CARD:
          case G.PaymentSourceTypes.GRABPAY_MY:
            try {
              let t = await (0, d.createAdyenPrepaidPaymentSource)(ex.info, e, Y);
              eq(t)
            } catch {}
            break;
          case G.PaymentSourceTypes.GCASH:
          case G.PaymentSourceTypes.MOMO_WALLET:
          case G.PaymentSourceTypes.KAKAOPAY:
          case G.PaymentSourceTypes.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: t
              } = await (0, d.createAdyenVaultablePaymentSource)(ex.info, e, Y);
              ek(t)
            } catch {}
            break;
          case G.PaymentSourceTypes.GIROPAY:
          case G.PaymentSourceTypes.BANCONTACT:
            try {
              let t = await (0, d.createStripePaymentSource)(eI, ex.info, e, Y);
              eq(t)
            } catch {}
            break;
          case G.PaymentSourceTypes.CASH_APP:
            try {
              o()(null != eG, "Missing adyenPaymentData");
              let {
                paymentSource: t
              } = await (0, d.createAdyenVaultablePaymentSource)(ex.info, e, Y, eG);
              o()(null != t, "Cash App Pay Payment Source missing"), eq(t)
            } catch {}
            break;
          default:
            throw Error("unknown step not handled")
        }!eU && eB(!1)
      };
      switch (eC.methodType) {
        case G.PaymentSourceTypes.CARD:
          c = I.Step.CREDIT_CARD_INFORMATION, r = G.PaymentSourceTypes.CARD;
          break;
        case G.PaymentSourceTypes.PAYPAL:
          c = I.Step.PAYPAL_INFORMATION, r = G.PaymentSourceTypes.PAYPAL;
          break;
        case G.PaymentSourceTypes.VENMO:
          c = I.Step.VENMO_INFORMATION, r = G.PaymentSourceTypes.VENMO;
          break;
        case G.PaymentSourceTypes.GIROPAY:
          c = I.Step.PAYMENT_TYPE, r = G.PaymentSourceTypes.GIROPAY;
          break;
        case G.PaymentSourceTypes.SOFORT:
          c = I.Step.SOFORT_INFORMATION, r = G.PaymentSourceTypes.SOFORT;
          break;
        case G.PaymentSourceTypes.PAYSAFE_CARD:
        case G.PaymentSourceTypes.GCASH:
        case G.PaymentSourceTypes.GRABPAY_MY:
        case G.PaymentSourceTypes.MOMO_WALLET:
        case G.PaymentSourceTypes.KAKAOPAY:
        case G.PaymentSourceTypes.GOPAY_WALLET:
        case G.PaymentSourceTypes.BANCONTACT:
          c = I.Step.PAYMENT_TYPE, r = eC.methodType;
          break;
        case G.PaymentSourceTypes.EPS:
          c = I.Step.EPS_INFORMATION, r = G.PaymentSourceTypes.EPS;
          break;
        case G.PaymentSourceTypes.IDEAL:
          c = I.Step.IDEAL_INFORMATION, r = G.PaymentSourceTypes.IDEAL;
          break;
        case G.PaymentSourceTypes.PRZELEWY24:
          c = I.Step.PRZELEWY24_INFORMATION, r = G.PaymentSourceTypes.PRZELEWY24;
          break;
        case G.PaymentSourceTypes.CASH_APP:
          c = I.Step.CASH_APP_INFORMATION, r = G.PaymentSourceTypes.CASH_APP;
          break;
        default:
          c = I.Step.PAYMENT_TYPE, r = G.PaymentSourceTypes.CARD
      }
      t = (0, n.jsx)(ed, {
        billingAddressInfo: ex.info,
        onBillingAddressChange: (e, t) => {
          eY({
            info: {
              ...ex.info,
              ...e
            },
            isValid: t
          })
        },
        paymentSourceType: r
      }), a = (0, n.jsx)(em, {
        onBack: () => eb(c),
        primaryCTA: b.default.CTAType.CONTINUE,
        primaryText: V.default.Messages.NEXT,
        primarySubmitting: ev,
        primaryDisabled: !ex.isValid || eV,
        onPrimary: e4
      });
      break;
    case I.Step.AWAITING_AUTHENTICATION:
      t = (0, n.jsx)(ep, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eN))
  }
  let e5 = (0, n.jsx)(u.Sequencer, {
      className: H.sequencer,
      staticClassName: H.sequencerStatic,
      animatedNodeClassName: H.sequencerAnimatedNode,
      fillParent: !0,
      step: eN,
      steps: eC.steps,
      sideMargin: 20,
      children: t
    }),
    e8 = eN === I.Step.PAYMENT_TYPE && 0 === f.length ? null : a;
  return U ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(g.default, {
      className: W.paymentModalError
    }), k && (0, n.jsx)(R.default, {
      className: W.paymentModalBreadcrumbs,
      isEligibleForTrial: k
    }), (0, n.jsx)(M.PaymentPortalBody, {
      children: e5
    }), (0, n.jsx)(M.PaymentPortalFooter, {
      children: e8
    })]
  }) : (0, n.jsx)(F.default, {
    steps: null != C ? C : eC.steps,
    currentStep: null != L ? L : eN,
    paymentError: m.paymentError,
    header: v,
    hideBreadcrumbs: B,
    body: e5,
    footer: e8
  })
}

function ef(e) {
  let {
    defaultPaymentSourceId: t,
    paymentSources: a,
    hasFetchedPaymentSources: n
  } = (0, i.useStateFromStoresObject)([x.default], () => ({
    defaultPaymentSourceId: void 0 !== e ? e : x.default.defaultPaymentSourceId,
    paymentSources: x.default.paymentSources,
    hasFetchedPaymentSources: x.default.hasFetchedPaymentSources
  }));
  s.useEffect(() => {
    (0, p.createClient)(), (0, w.createClient)(), !n && (0, d.fetchPaymentSources)()
  }, []);
  let [l, r] = s.useState(t);
  null != t && null == l && r(t);
  let [o, u] = s.useState(() => ({
    info: en,
    isValid: !1
  })), [m, S] = s.useState(() => ({
    info: es,
    isValid: !1
  })), [A, f] = s.useState(""), [T, _] = s.useState(""), [y, N] = s.useState(""), [P, C] = s.useState(() => ({
    token: null
  })), [h, I, R, b, M] = (0, i.useStateFromStoresArray)([D.default], () => [D.default.braintreeEmail, D.default.braintreeNonce, D.default.error, D.default.venmoUsername, D.default.adyenPaymentData]), [O, g] = (0, i.useStateFromStoresArray)([v.default], () => [v.default.error, v.default.isAwaitingAuthentication]);
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
  let [L, B] = s.useState(!1), [U, F] = s.useState(!1), [j, G] = s.useState(null), V = s.useRef(null), W = (0, i.useStateFromStores)([v.default], () => v.default.isAwaitingAuthentication), [H, K] = (0, i.useStateFromStoresArray)([Y.default], () => [Y.default.purchaseTokenAuthState, Y.default.purchaseTokenHash]);
  return s.useEffect(() => {
    null != j && null != V.current && V.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [j]), {
    paymentSources: a,
    paymentSourceId: l,
    hasFetchedPaymentSources: n,
    setPaymentSourceId: r,
    creditCardState: o,
    setCreditCardState: u,
    tokenState: P,
    setTokenState: C,
    billingAddressState: m,
    setBillingAddressState: S,
    isSubmittingCurrentStep: L,
    setIsSubmittingCurrentStep: B,
    hasRedirectURL: U,
    setHasRedirectURL: F,
    braintreeEmail: h,
    braintreeNonce: I,
    venmoUsername: b,
    adyenPaymentData: M,
    paymentError: null != O ? O : R,
    paymentAuthenticationState: g ? k.PaymentAuthenticationState.PENDING : null != O ? k.PaymentAuthenticationState.ERROR : k.PaymentAuthenticationState.NONE,
    purchaseError: j,
    setPurchaseError: G,
    purchaseErrorBlockRef: V,
    isAuthenticating: W,
    purchaseTokenAuthState: H,
    purchaseTokenHash: K,
    epsBankState: T,
    setEpsBankState: _,
    idealBankState: y,
    setIdealBankState: N,
    p24BankState: A,
    setP24BankState: f
  }
}