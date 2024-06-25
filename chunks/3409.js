t.d(a, {
  fL: function() {
    return eT
  },
  kx: function() {
    return eN
  },
  vP: function() {
    return eh
  }
}), t(47120), t(411104);
var n = t(735250),
  r = t(470079),
  s = t(160612),
  l = t(512722),
  o = t.n(l),
  i = t(442837),
  c = t(481060),
  u = t(570140),
  d = t(355467),
  E = t(873115),
  _ = t(976255),
  p = t(801937),
  m = t(282164),
  A = t(738342),
  N = t(915271),
  h = t(228666),
  T = t(723484),
  I = t(122192),
  S = t(581813),
  C = t(870630),
  P = t(710845),
  b = t(598),
  R = t(409813),
  f = t(51499),
  y = t(586585),
  M = t(614277),
  g = t(737143),
  O = t(812169),
  L = t(35248),
  D = t(698708),
  v = t(351402),
  Z = t(975060),
  x = t(505649),
  Y = t(853872),
  U = t(882712),
  w = t(358085),
  B = t(622999),
  H = t(176919),
  k = t(185139),
  j = t(559725),
  F = t(850228),
  W = t(231338),
  G = t(689938),
  V = t(780045),
  Q = t(40230);
let K = new P.Z("AddPaymentStep.tsx"),
  z = [R.h8.PAYMENT_TYPE],
  q = [R.h8.PAYMENT_TYPE, R.h8.CREDIT_CARD_INFORMATION, R.h8.ADDRESS],
  X = [R.h8.PAYMENT_TYPE, R.h8.PAYPAL_INFORMATION, R.h8.ADDRESS],
  J = [R.h8.PAYMENT_TYPE, R.h8.VENMO_INFORMATION, R.h8.ADDRESS],
  $ = [R.h8.PAYMENT_TYPE, R.h8.SOFORT_INFORMATION, R.h8.ADDRESS];
R.h8.PAYMENT_TYPE, R.h8.PAYMENT_REQUEST_INFORMATION, R.h8.ADDRESS;
let ee = [R.h8.PAYMENT_TYPE, R.h8.PRZELEWY24_INFORMATION, R.h8.ADDRESS],
  ea = [R.h8.PAYMENT_TYPE, R.h8.EPS_INFORMATION, R.h8.ADDRESS],
  et = [R.h8.PAYMENT_TYPE, R.h8.IDEAL_INFORMATION, R.h8.ADDRESS],
  en = [R.h8.PAYMENT_TYPE, R.h8.CASH_APP_INFORMATION, R.h8.ADDRESS],
  er = [R.h8.PAYMENT_TYPE, R.h8.ADDRESS],
  es = {
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
    onChooseType: a,
    onPaymentRequestSourceReceived: t,
    onPaymentRequestSourceFailed: r,
    analyticsLocation: s,
    isEligibleForTrial: l
  } = e;
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(p.Z, {
      onChooseType: a,
      allowStripeRequestPayments: !w.isPlatformEmbedded,
      onStripePaymentMethodReceived: async e => {
        if ((0, _.Xt)(e), null == e) {
          r();
          return
        }
        try {
          let a = await (0, d.i6)(e, void 0, s),
            {
              billingAddressInfo: n
            } = (0, B.az)(e);
          t(a, n)
        } catch (e) {}
      },
      isEligibleForTrial: l
    })
  })
}

function ei(e) {
  let {
    onCardInfoChange: a
  } = e, t = (0, i.e7)([Z.Z], () => Z.Z.error);
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(I.j, {
      billingError: t,
      onCardInfoChange: a
    })
  })
}

function ec() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(m.Z, {})
  })
}

function eu() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(N.Z, {})
  })
}

function ed() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(F.Z, {})
  })
}

function eE() {
  let e = (0, i.e7)([v.Z], () => v.Z.isBusy),
    a = (0, i.e7)([Z.Z], () => Z.Z.stripePaymentMethod);
  return (0, n.jsx)(S.k, {
    className: V.body,
    stripePaymentMethod: a,
    submitting: e
  })
}

function e_(e) {
  let {
    billingAddressInfo: a,
    onBillingAddressChange: t,
    paymentSourceType: r
  } = e, s = (0, i.e7)([Z.Z], () => Z.Z.error);
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(h.P, {
      billingAddressInfo: a,
      billingError: s,
      onBillingAddressChange: t,
      paymentSourceType: r
    })
  })
}

function ep() {
  return (0, n.jsx)(T.F, {
    className: V.body
  })
}

function em(e) {
  return () => (null != Z.Z.error && (0, _.fw)(), e())
}

function eA(e) {
  let {
    onPrimary: a,
    onBack: t,
    ...r
  } = e, s = a;
  null != a && (s = em(a));
  let l = t;
  return null != t && (l = em(t)), (0, n.jsx)(y.Z, {
    ...r,
    onPrimary: s,
    onBack: l
  })
}

function eN(e) {
  let {
    breadcrumbSteps: a
  } = e, {
    step: t,
    setStep: n,
    paymentSources: r,
    paymentSourceId: s,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: c,
    purchaseErrorBlockRef: u,
    paymentAuthenticationState: d
  } = (0, b.usePaymentContext)(), E = {
    ...eT(),
    paymentSources: r,
    paymentSourceId: s,
    setPaymentSourceId: l,
    purchaseError: i,
    setPurchaseError: c,
    purchaseErrorBlockRef: u,
    paymentAuthenticationState: d
  };
  return o()(t, "Step should be set here"), eh({
    paymentModalArgs: E,
    initialStep: R.h8.PAYMENT_TYPE,
    prependSteps: [R.h8.PROMOTION_INFO],
    appendSteps: [R.h8.REVIEW, R.h8.CONFIRM],
    breadcrumpSteps: a,
    currentBreadcrumpStep: t,
    onReturn: () => n(R.h8.REVIEW),
    onComplete: () => n(R.h8.REVIEW),
    onStepChange: () => {}
  })
}

function eh(e) {
  let a, t, l, u, {
      paymentModalArgs: p,
      initialStep: m,
      prependSteps: N,
      appendSteps: h,
      onReturn: T,
      onComplete: I,
      onStepChange: S,
      breadcrumpSteps: P,
      currentBreadcrumpStep: v,
      header: x,
      analyticsLocation: U,
      hideBreadcrumbs: w = !1,
      usePaymentModalStep: B = !1,
      isEligibleForTrial: H = !1,
      allowDesktopRedirectPurchase: F = !1
    } = e,
    es = {
      steps: [...N, ...q, ...h],
      methodType: W.He.CARD
    },
    el = {
      steps: [...N, ...z, ...h],
      methodType: W.He.PAYMENT_REQUEST
    },
    em = {
      steps: [...N, ...X, ...h],
      methodType: W.He.PAYPAL
    },
    eN = {
      steps: [...N, ...J, ...h],
      methodType: W.He.VENMO
    },
    eh = {
      steps: [...N, ...z, ...h]
    },
    eT = {
      steps: [...N, ...$, ...h],
      methodType: W.He.SOFORT
    },
    eI = {
      steps: [...N, ...ee, ...h],
      methodType: W.He.PRZELEWY24
    },
    eS = {
      steps: [...N, ...ea, ...h],
      methodType: W.He.EPS
    },
    eC = {
      steps: [...N, ...et, ...h],
      methodType: W.He.IDEAL
    },
    eP = {
      steps: [...N, ...en, ...h],
      methodType: W.He.CASH_APP
    },
    [eb, eR] = r.useState(m),
    [ef, ey] = r.useState(m === R.h8.CREDIT_CARD_INFORMATION ? es : {
      steps: [R.h8.ADD_PAYMENT_STEPS]
    }),
    {
      stripe: eM
    } = (0, b.usePaymentContext)(),
    eg = (0, i.e7)([Z.Z], () => Z.Z.redirectedPaymentSourceId);

  function eO(e) {
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    eR(e), a && S({
      currentStep: eb,
      toStep: e
    })
  }
  r.useEffect(() => {
    (() => {
      if (null == eg) return;
      let e = Y.Z.getPaymentSource(eg);
      if (null != e) e$(e), eB(!1)
    })()
  }, [eg]);
  let {
    setPaymentSourceId: eL,
    creditCardState: eD,
    setCreditCardState: ev,
    tokenState: eZ,
    setTokenState: ex,
    isSubmittingCurrentStep: eY,
    billingAddressState: eU,
    setBillingAddressState: ew,
    setIsSubmittingCurrentStep: eB,
    hasRedirectURL: eH,
    setHasRedirectURL: ek,
    braintreeEmail: ej,
    braintreeNonce: eF,
    venmoUsername: eW,
    adyenPaymentData: eG,
    isAuthenticating: eV,
    epsBankState: eQ,
    setEpsBankState: eK,
    idealBankState: ez,
    setIdealBankState: eq,
    p24BankState: eX,
    setP24BankState: eJ
  } = p;

  function e$(e) {
    var a;
    eL(e.id), a = e, (0, c.showToast)((0, c.createToast)(G.Z.Messages.PAYMENT_SOURCE_ADD_SUCCESS_TOAST, c.ToastType.SUCCESS, {
      position: c.ToastPosition.BOTTOM
    })), I(eb, a), eO(m, !1)
  }
  let e0 = F && (0, g.q1)().enabled;
  switch (eb) {
    case R.h8.PAYMENT_TYPE:
      a = (0, n.jsx)(eo, {
        onChooseType: e => {
          switch (e) {
            case W.He.CARD:
              e0 ? eO(R.h8.AWAITING_BROWSER_CHECKOUT) : (ey(es), eO(R.h8.CREDIT_CARD_INFORMATION));
              break;
            case W.He.PAYPAL:
              ey(em), eO(R.h8.PAYPAL_INFORMATION);
              break;
            case W.He.VENMO:
              ey(eN), eO(R.h8.VENMO_INFORMATION);
              break;
            case W.He.PAYMENT_REQUEST:
              ey(el), eO(R.h8.PAYMENT_REQUEST_INFORMATION);
              break;
            case W.He.SOFORT:
              ey(eT), eO(R.h8.SOFORT_INFORMATION);
              break;
            case W.He.PRZELEWY24:
              ey(eI), eO(R.h8.PRZELEWY24_INFORMATION);
              break;
            case W.He.EPS:
              ey(eS), eO(R.h8.EPS_INFORMATION);
              break;
            case W.He.IDEAL:
              ey(eC), eO(R.h8.IDEAL_INFORMATION);
              break;
            case W.He.CASH_APP:
              ey(eP), eO(R.h8.CASH_APP_INFORMATION);
              break;
            case W.He.GIROPAY:
            case W.He.PAYSAFE_CARD:
            case W.He.GCASH:
            case W.He.GRABPAY_MY:
            case W.He.MOMO_WALLET:
            case W.He.KAKAOPAY:
            case W.He.GOPAY_WALLET:
            case W.He.BANCONTACT:
              ey({
                steps: [...N, ...er, ...h],
                methodType: e
              }), eO(R.h8.ADDRESS)
          }
          null != Z.Z.error && (0, _.fw)()
        },
        onPaymentRequestSourceReceived: (e, a) => {
          ew(e => ({
            ...e,
            info: a
          })), ey(el), e$(e)
        },
        onPaymentRequestSourceFailed: () => {
          ey(eh), eO(R.h8.PAYMENT_TYPE)
        },
        analyticsLocation: U,
        isEligibleForTrial: H
      }), t = (0, n.jsx)(eA, {
        onBack: T
      });
      break;
    case R.h8.CREDIT_CARD_INFORMATION:
      let e1 = 2 === (0, O._)().bucket,
        e8 = async e => {
          eB(!0);
          try {
            let a = await (0, d.qv)(eM, e);
            if (ex({
                token: a
              }), e1) try {
              let e = await (0, d.f0)(eM, a, eU.info, U);
              e$(e)
            } catch {} else eO(R.h8.ADDRESS)
          } catch (e) {
            var a;
            K.error(null !== (a = e.message) && void 0 !== a ? a : JSON.stringify(e))
          } finally {
            eB(!1)
          }
        };
      a = (0, n.jsx)(ei, {
        onCardInfoChange: (e, a) => {
          ev({
            info: e,
            isValid: a
          }), ew(a => {
            let t = {
              ...a,
              info: {
                ...a.info,
                name: e.name
              }
            };
            if (e1) {
              var n, r;
              t.info.country = null !== (n = e.country) && void 0 !== n ? n : "", t.info.postalCode = null !== (r = e.postalCode) && void 0 !== r ? r : ""
            }
            return t
          })
        }
      }), t = (0, n.jsx)(s.ElementsConsumer, {
        children: e => {
          let {
            elements: a
          } = e;
          return (0, n.jsx)(eA, {
            onBack: () => eO(R.h8.PAYMENT_TYPE),
            primaryCTA: y.Z.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: G.Z.Messages.NEXT,
            primarySubmitting: eY,
            primaryDisabled: e1 ? !eD.isValid || eV : !eD.isValid,
            onPrimary: () => e8(a)
          })
        }
      });
      break;
    case R.h8.AWAITING_BROWSER_CHECKOUT:
      a = (0, n.jsx)("div", {
        className: V.body,
        children: (0, n.jsx)(L.M, {
          onPurchaseComplete: () => I(eb),
          onHandoffFailure: () => {
            ey(es), eO(R.h8.CREDIT_CARD_INFORMATION)
          }
        })
      }), t = (0, n.jsx)(L.a, {
        onPrimaryClick: () => {
          ey(es), eO(R.h8.CREDIT_CARD_INFORMATION)
        },
        onBackClick: () => {
          ey(eh), eO(R.h8.PAYMENT_TYPE)
        }
      });
      break;
    case R.h8.SOFORT_INFORMATION:
      let e2 = eU.info;
      a = (0, n.jsx)("div", {
        className: V.body,
        children: (0, n.jsx)(A.Z, {
          billingAddressInfo: e2,
          onChange: e => {
            ew({
              info: {
                ...e2,
                ...e
              },
              isValid: !1
            })
          },
          error: Z.Z.error
        })
      }), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: G.Z.Messages.NEXT,
        primaryDisabled: "" === e2.name || "" === e2.email || void 0 === e2.email,
        onPrimary: () => eO(R.h8.ADDRESS)
      });
      break;
    case R.h8.EPS_INFORMATION:
      a = (0, n.jsx)(C.Z, {
        type: W.He.EPS,
        onAccountHolderNameChange: e => ew({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onEPSBankChange: e => eK(e),
        epsBankValue: eQ,
        billingAddressInfo: eU.info
      }), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: G.Z.Messages.NEXT,
        primaryDisabled: void 0 === eQ || "" === eQ || "" === eU.info.name,
        onPrimary: () => eO(R.h8.ADDRESS)
      });
      break;
    case R.h8.IDEAL_INFORMATION:
      a = (0, n.jsx)(C.Z, {
        type: W.He.IDEAL,
        onAccountHolderNameChange: e => ew({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onIdealBankChange: e => eq(e),
        idealBankValue: ez,
        billingAddressInfo: eU.info
      }), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: G.Z.Messages.NEXT,
        primaryDisabled: void 0 === ez || "" === ez || "" === eU.info.name,
        onPrimary: () => eO(R.h8.ADDRESS)
      });
      break;
    case R.h8.PRZELEWY24_INFORMATION:
      a = (0, n.jsx)(C.Z, {
        type: W.He.PRZELEWY24,
        onNameChange: e => ew({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onEmailChange: e => ew({
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
      }), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: G.Z.Messages.NEXT,
        primaryDisabled: void 0 === eU.info.name || "" === eU.info.name || void 0 === eU.info.email || "" === eU.info.email || void 0 === eX || "" === eX,
        onPrimary: () => eO(R.h8.ADDRESS)
      });
      break;
    case R.h8.PAYPAL_INFORMATION:
      let e4 = 0 !== ej.length && null != eF;
      a = (0, n.jsx)(ec, {}), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: e4 ? G.Z.Messages.NEXT : G.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
        onPrimary: () => e4 ? eO(R.h8.ADDRESS) : (0, E.i0)()
      });
      break;
    case R.h8.VENMO_INFORMATION:
      let e7 = 0 !== eW.length && null != eF;
      a = (0, n.jsx)(eu, {}), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: e7 ? G.Z.Messages.NEXT : G.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
        onPrimary: () => e7 ? eO(R.h8.ADDRESS) : (0, E.og)()
      });
      break;
    case R.h8.PAYMENT_REQUEST_INFORMATION:
      a = (0, n.jsx)(eE, {}), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE)
      });
      break;
    case R.h8.CASH_APP_INFORMATION:
      let e6 = null != eG;
      a = (0, n.jsx)(ed, {}), t = (0, n.jsx)(eA, {
        onBack: () => eO(R.h8.PAYMENT_TYPE),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: e6 ? G.Z.Messages.NEXT : G.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
        onPrimary: () => e6 ? eO(R.h8.ADDRESS) : (0, j.cp)()
      });
      break;
    case R.h8.ADDRESS:
      let e5 = async () => {
        eB(!0);
        let e = ef.methodType;
        switch (e) {
          case W.He.CARD:
            try {
              let e = await (0, d.f0)(eM, eZ.token, eU.info, U);
              e$(e)
            } catch {}
            break;
          case W.He.VENMO:
          case W.He.PAYPAL:
            try {
              o()(null != eF, "Missing braintreeNonce");
              let e = await (0, d.lP)(eF, eU.info, U);
              e$(e)
            } catch {}
            break;
          case W.He.SOFORT:
            try {
              let e = await (0, d.av)(eM, eU.info, U);
              e$(e)
            } catch {}
            break;
          case W.He.EPS:
            try {
              let e = await (0, d.YQ)(eM, eQ, eU.info, U);
              e$(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case W.He.IDEAL:
            try {
              let e = await (0, d.aN)(eM, ez, eU.info, U);
              e$(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case W.He.PRZELEWY24:
            try {
              if (void 0 === eX) throw (0, d.SQ)("Bank required for Przelewy24");
              let e = await (0, d.pF)(eM, {
                p24Bank: eX
              }, eU.info, U);
              e$(e)
            } catch {}
            break;
          case W.He.PAYSAFE_CARD:
          case W.He.GRABPAY_MY:
            try {
              let a = await (0, d.sF)(eU.info, e, U);
              e$(a)
            } catch {}
            break;
          case W.He.GCASH:
          case W.He.MOMO_WALLET:
          case W.He.KAKAOPAY:
          case W.He.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: a
              } = await (0, d.Dk)(eU.info, e, U);
              ek(a)
            } catch {}
            break;
          case W.He.GIROPAY:
          case W.He.BANCONTACT:
            try {
              let a = await (0, d.GV)(eM, eU.info, e, U);
              e$(a)
            } catch {}
            break;
          case W.He.CASH_APP:
            try {
              o()(null != eG, "Missing adyenPaymentData");
              let {
                paymentSource: a
              } = await (0, d.Dk)(eU.info, e, U, eG);
              o()(null != a, "Cash App Pay Payment Source missing"), e$(a)
            } catch {}
            break;
          default:
            throw Error("unknown step not handled")
        }!eH && eB(!1)
      };
      switch (ef.methodType) {
        case W.He.CARD:
          u = R.h8.CREDIT_CARD_INFORMATION, l = W.He.CARD;
          break;
        case W.He.PAYPAL:
          u = R.h8.PAYPAL_INFORMATION, l = W.He.PAYPAL;
          break;
        case W.He.VENMO:
          u = R.h8.VENMO_INFORMATION, l = W.He.VENMO;
          break;
        case W.He.GIROPAY:
          u = R.h8.PAYMENT_TYPE, l = W.He.GIROPAY;
          break;
        case W.He.SOFORT:
          u = R.h8.SOFORT_INFORMATION, l = W.He.SOFORT;
          break;
        case W.He.PAYSAFE_CARD:
        case W.He.GCASH:
        case W.He.GRABPAY_MY:
        case W.He.MOMO_WALLET:
        case W.He.KAKAOPAY:
        case W.He.GOPAY_WALLET:
        case W.He.BANCONTACT:
          u = R.h8.PAYMENT_TYPE, l = ef.methodType;
          break;
        case W.He.EPS:
          u = R.h8.EPS_INFORMATION, l = W.He.EPS;
          break;
        case W.He.IDEAL:
          u = R.h8.IDEAL_INFORMATION, l = W.He.IDEAL;
          break;
        case W.He.PRZELEWY24:
          u = R.h8.PRZELEWY24_INFORMATION, l = W.He.PRZELEWY24;
          break;
        case W.He.CASH_APP:
          u = R.h8.CASH_APP_INFORMATION, l = W.He.CASH_APP;
          break;
        default:
          u = R.h8.PAYMENT_TYPE, l = W.He.CARD
      }
      a = (0, n.jsx)(e_, {
        billingAddressInfo: eU.info,
        onBillingAddressChange: (e, a) => {
          ew({
            info: {
              ...eU.info,
              ...e
            },
            isValid: a
          })
        },
        paymentSourceType: l
      }), t = (0, n.jsx)(eA, {
        onBack: () => eO(u),
        primaryCTA: y.Z.CTAType.CONTINUE,
        primaryText: G.Z.Messages.NEXT,
        primarySubmitting: eY,
        primaryDisabled: !eU.isValid || eV,
        onPrimary: e5
      });
      break;
    case R.h8.AWAITING_AUTHENTICATION:
      a = (0, n.jsx)(ep, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eb))
  }
  let e9 = (0, n.jsx)(c.Sequencer, {
      className: Q.sequencer,
      staticClassName: Q.sequencerStatic,
      animatedNodeClassName: Q.sequencerAnimatedNode,
      fillParent: !0,
      step: eb,
      steps: ef.steps,
      sideMargin: 20,
      children: a
    }),
    e3 = eb === R.h8.PAYMENT_TYPE && 0 === N.length ? null : t;
  return B ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(D.Z, {
      className: V.paymentModalError
    }), H && (0, n.jsx)(f.Z, {
      className: V.paymentModalBreadcrumbs,
      isEligibleForTrial: H
    }), (0, n.jsx)(M.C3, {
      children: e9
    }), (0, n.jsx)(M.O3, {
      children: e3
    })]
  }) : (0, n.jsx)(k.Z, {
    steps: null != P ? P : ef.steps,
    currentStep: null != v ? v : eb,
    paymentError: p.paymentError,
    header: x,
    hideBreadcrumbs: w,
    body: e9,
    footer: e3
  })
}

function eT(e) {
  let {
    defaultPaymentSourceId: a,
    paymentSources: t,
    hasFetchedPaymentSources: n
  } = (0, i.cj)([Y.Z], () => ({
    defaultPaymentSourceId: void 0 !== e ? e : Y.Z.defaultPaymentSourceId,
    paymentSources: Y.Z.paymentSources,
    hasFetchedPaymentSources: Y.Z.hasFetchedPaymentSources
  }));
  r.useEffect(() => {
    (0, E.eI)(), (0, j.eI)(), !n && (0, d.tZ)()
  }, []);
  let [s, l] = r.useState(a);
  null != a && null == s && l(a);
  let [o, c] = r.useState(() => ({
    info: es,
    isValid: !1
  })), [p, m] = r.useState(() => ({
    info: el,
    isValid: !1
  })), [A, N] = r.useState(""), [h, T] = r.useState(""), [I, S] = r.useState(""), [C, P] = r.useState(() => ({
    token: null
  })), [b, R, f, y, M] = (0, i.Wu)([Z.Z], () => [Z.Z.braintreeEmail, Z.Z.braintreeNonce, Z.Z.error, Z.Z.venmoUsername, Z.Z.adyenPaymentData]), [g, O] = (0, i.Wu)([x.Z], () => [x.Z.error, x.Z.isAwaitingAuthentication]);
  r.useEffect(() => {
    let e = e => {
      let {
        billingAddress: a
      } = e;
      m({
        info: a,
        isValid: a.country.length > 0
      })
    };
    return u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.fw)()
    }
  }, []);
  let [L, D] = r.useState(!1), [v, w] = r.useState(!1), [B, k] = r.useState(null), F = r.useRef(null), W = (0, i.e7)([x.Z], () => x.Z.isAwaitingAuthentication), [G, V] = (0, i.Wu)([U.Z], () => [U.Z.purchaseTokenAuthState, U.Z.purchaseTokenHash]);
  return r.useEffect(() => {
    null != B && null != F.current && F.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [B]), {
    paymentSources: t,
    paymentSourceId: s,
    hasFetchedPaymentSources: n,
    setPaymentSourceId: l,
    creditCardState: o,
    setCreditCardState: c,
    tokenState: C,
    setTokenState: P,
    billingAddressState: p,
    setBillingAddressState: m,
    isSubmittingCurrentStep: L,
    setIsSubmittingCurrentStep: D,
    hasRedirectURL: v,
    setHasRedirectURL: w,
    braintreeEmail: b,
    braintreeNonce: R,
    venmoUsername: y,
    adyenPaymentData: M,
    paymentError: null != g ? g : f,
    paymentAuthenticationState: O ? H.wr.PENDING : null != g ? H.wr.ERROR : H.wr.NONE,
    purchaseError: B,
    setPurchaseError: k,
    purchaseErrorBlockRef: F,
    isAuthenticating: W,
    purchaseTokenAuthState: G,
    purchaseTokenHash: V,
    epsBankState: h,
    setEpsBankState: T,
    idealBankState: I,
    setIdealBankState: S,
    p24BankState: A,
    setP24BankState: N
  }
}