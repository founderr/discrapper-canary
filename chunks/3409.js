t.d(a, {
  fL: function() {
    return eT
  },
  kx: function() {
    return em
  },
  vP: function() {
    return eh
  }
}), t(47120), t(411104);
var n = t(735250),
  s = t(470079),
  l = t(160612),
  r = t(512722),
  o = t.n(r),
  i = t(442837),
  c = t(481060),
  u = t(570140),
  d = t(355467),
  E = t(873115),
  A = t(976255),
  p = t(801937),
  _ = t(282164),
  N = t(738342),
  m = t(915271),
  h = t(228666),
  T = t(723484),
  C = t(122192),
  S = t(581813),
  I = t(870630),
  R = t(710845),
  P = t(598),
  M = t(409813),
  b = t(51499),
  f = t(586585),
  O = t(614277),
  y = t(737143),
  g = t(812169),
  L = t(35248),
  D = t(698708),
  v = t(351402),
  Z = t(975060),
  x = t(505649),
  Y = t(853872),
  U = t(882712),
  k = t(358085),
  H = t(622999),
  B = t(176919),
  j = t(185139),
  F = t(559725),
  w = t(850228),
  G = t(231338),
  W = t(689938),
  V = t(780045),
  Q = t(40230);
let K = new R.Z("AddPaymentStep.tsx"),
  z = [M.h8.PAYMENT_TYPE],
  q = [M.h8.PAYMENT_TYPE, M.h8.CREDIT_CARD_INFORMATION, M.h8.ADDRESS],
  X = [M.h8.PAYMENT_TYPE, M.h8.PAYPAL_INFORMATION, M.h8.ADDRESS],
  J = [M.h8.PAYMENT_TYPE, M.h8.VENMO_INFORMATION, M.h8.ADDRESS],
  $ = [M.h8.PAYMENT_TYPE, M.h8.SOFORT_INFORMATION, M.h8.ADDRESS];
M.h8.PAYMENT_TYPE, M.h8.PAYMENT_REQUEST_INFORMATION, M.h8.ADDRESS;
let ee = [M.h8.PAYMENT_TYPE, M.h8.PRZELEWY24_INFORMATION, M.h8.ADDRESS],
  ea = [M.h8.PAYMENT_TYPE, M.h8.EPS_INFORMATION, M.h8.ADDRESS],
  et = [M.h8.PAYMENT_TYPE, M.h8.IDEAL_INFORMATION, M.h8.ADDRESS],
  en = [M.h8.PAYMENT_TYPE, M.h8.CASH_APP_INFORMATION, M.h8.ADDRESS],
  es = [M.h8.PAYMENT_TYPE, M.h8.ADDRESS],
  el = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  er = {
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
    onPaymentRequestSourceFailed: s,
    analyticsLocation: l,
    isEligibleForTrial: r
  } = e;
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(p.Z, {
      onChooseType: a,
      allowStripeRequestPayments: !k.isPlatformEmbedded,
      onStripePaymentMethodReceived: async e => {
        if ((0, A.Xt)(e), null == e) {
          s();
          return
        }
        try {
          let a = await (0, d.i6)(e, void 0, l),
            {
              billingAddressInfo: n
            } = (0, H.az)(e);
          t(a, n)
        } catch (e) {}
      },
      isEligibleForTrial: r
    })
  })
}

function ei(e) {
  let {
    onCardInfoChange: a
  } = e, t = (0, i.e7)([Z.Z], () => Z.Z.error);
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(C.j, {
      billingError: t,
      onCardInfoChange: a
    })
  })
}

function ec() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(_.Z, {})
  })
}

function eu() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(m.Z, {})
  })
}

function ed() {
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(w.Z, {})
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

function eA(e) {
  let {
    billingAddressInfo: a,
    onBillingAddressChange: t,
    paymentSourceType: s
  } = e, l = (0, i.e7)([Z.Z], () => Z.Z.error);
  return (0, n.jsx)("div", {
    className: V.body,
    children: (0, n.jsx)(h.P, {
      billingAddressInfo: a,
      billingError: l,
      onBillingAddressChange: t,
      paymentSourceType: s
    })
  })
}

function ep() {
  return (0, n.jsx)(T.F, {
    className: V.body
  })
}

function e_(e) {
  return () => (null != Z.Z.error && (0, A.fw)(), e())
}

function eN(e) {
  let {
    onPrimary: a,
    onBack: t,
    ...s
  } = e, l = a;
  null != a && (l = e_(a));
  let r = t;
  return null != t && (r = e_(t)), (0, n.jsx)(f.Z, {
    ...s,
    onPrimary: l,
    onBack: r
  })
}

function em(e) {
  let {
    breadcrumbSteps: a
  } = e, {
    step: t,
    setStep: n,
    paymentSources: s,
    paymentSourceId: l,
    setPaymentSourceId: r,
    purchaseError: i,
    setPurchaseError: c,
    purchaseErrorBlockRef: u,
    paymentAuthenticationState: d
  } = (0, P.usePaymentContext)(), E = {
    ...eT(),
    paymentSources: s,
    paymentSourceId: l,
    setPaymentSourceId: r,
    purchaseError: i,
    setPurchaseError: c,
    purchaseErrorBlockRef: u,
    paymentAuthenticationState: d
  };
  return o()(t, "Step should be set here"), eh({
    paymentModalArgs: E,
    initialStep: M.h8.PAYMENT_TYPE,
    prependSteps: [M.h8.PROMOTION_INFO],
    appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
    breadcrumpSteps: a,
    currentBreadcrumpStep: t,
    onReturn: () => n(M.h8.REVIEW),
    onComplete: () => n(M.h8.REVIEW),
    onStepChange: () => {}
  })
}

function eh(e) {
  let a, t, r, u, {
      paymentModalArgs: p,
      initialStep: _,
      prependSteps: m,
      appendSteps: h,
      onReturn: T,
      onComplete: C,
      onStepChange: S,
      breadcrumpSteps: R,
      currentBreadcrumpStep: v,
      header: x,
      analyticsLocation: U,
      hideBreadcrumbs: k = !1,
      usePaymentModalStep: H = !1,
      isEligibleForTrial: B = !1,
      allowDesktopRedirectPurchase: w = !1
    } = e,
    el = {
      steps: [...m, ...q, ...h],
      methodType: G.He.CARD
    },
    er = {
      steps: [...m, ...z, ...h],
      methodType: G.He.PAYMENT_REQUEST
    },
    e_ = {
      steps: [...m, ...X, ...h],
      methodType: G.He.PAYPAL
    },
    em = {
      steps: [...m, ...J, ...h],
      methodType: G.He.VENMO
    },
    eh = {
      steps: [...m, ...z, ...h]
    },
    eT = {
      steps: [...m, ...$, ...h],
      methodType: G.He.SOFORT
    },
    eC = {
      steps: [...m, ...ee, ...h],
      methodType: G.He.PRZELEWY24
    },
    eS = {
      steps: [...m, ...ea, ...h],
      methodType: G.He.EPS
    },
    eI = {
      steps: [...m, ...et, ...h],
      methodType: G.He.IDEAL
    },
    eR = {
      steps: [...m, ...en, ...h],
      methodType: G.He.CASH_APP
    },
    [eP, eM] = s.useState(_),
    [eb, ef] = s.useState(_ === M.h8.CREDIT_CARD_INFORMATION ? el : {
      steps: [M.h8.ADD_PAYMENT_STEPS]
    }),
    {
      stripe: eO
    } = (0, P.usePaymentContext)(),
    ey = (0, i.e7)([Z.Z], () => Z.Z.redirectedPaymentSourceId);

  function eg(e) {
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    eM(e), a && S({
      currentStep: eP,
      toStep: e
    })
  }
  s.useEffect(() => {
    (() => {
      if (null == ey) return;
      let e = Y.Z.getPaymentSource(ey);
      if (null != e) e$(e), eH(!1)
    })()
  }, [ey]);
  let {
    setPaymentSourceId: eL,
    creditCardState: eD,
    setCreditCardState: ev,
    tokenState: eZ,
    setTokenState: ex,
    isSubmittingCurrentStep: eY,
    billingAddressState: eU,
    setBillingAddressState: ek,
    setIsSubmittingCurrentStep: eH,
    hasRedirectURL: eB,
    setHasRedirectURL: ej,
    braintreeEmail: eF,
    braintreeNonce: ew,
    venmoUsername: eG,
    adyenPaymentData: eW,
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
    eL(e.id), a = e, (0, c.showToast)((0, c.createToast)(W.Z.Messages.PAYMENT_SOURCE_ADD_SUCCESS_TOAST, c.ToastType.SUCCESS, {
      position: c.ToastPosition.BOTTOM
    })), C(eP, a), eg(_, !1)
  }
  let e0 = w && (0, y.q1)().enabled;
  switch (eP) {
    case M.h8.PAYMENT_TYPE:
      a = (0, n.jsx)(eo, {
        onChooseType: e => {
          switch (e) {
            case G.He.CARD:
              e0 ? eg(M.h8.AWAITING_BROWSER_CHECKOUT) : (ef(el), eg(M.h8.CREDIT_CARD_INFORMATION));
              break;
            case G.He.PAYPAL:
              ef(e_), eg(M.h8.PAYPAL_INFORMATION);
              break;
            case G.He.VENMO:
              ef(em), eg(M.h8.VENMO_INFORMATION);
              break;
            case G.He.PAYMENT_REQUEST:
              ef(er), eg(M.h8.PAYMENT_REQUEST_INFORMATION);
              break;
            case G.He.SOFORT:
              ef(eT), eg(M.h8.SOFORT_INFORMATION);
              break;
            case G.He.PRZELEWY24:
              ef(eC), eg(M.h8.PRZELEWY24_INFORMATION);
              break;
            case G.He.EPS:
              ef(eS), eg(M.h8.EPS_INFORMATION);
              break;
            case G.He.IDEAL:
              ef(eI), eg(M.h8.IDEAL_INFORMATION);
              break;
            case G.He.CASH_APP:
              ef(eR), eg(M.h8.CASH_APP_INFORMATION);
              break;
            case G.He.GIROPAY:
            case G.He.PAYSAFE_CARD:
            case G.He.GCASH:
            case G.He.GRABPAY_MY:
            case G.He.MOMO_WALLET:
            case G.He.KAKAOPAY:
            case G.He.GOPAY_WALLET:
            case G.He.BANCONTACT:
              ef({
                steps: [...m, ...es, ...h],
                methodType: e
              }), eg(M.h8.ADDRESS)
          }
          null != Z.Z.error && (0, A.fw)()
        },
        onPaymentRequestSourceReceived: (e, a) => {
          ek(e => ({
            ...e,
            info: a
          })), ef(er), e$(e)
        },
        onPaymentRequestSourceFailed: () => {
          ef(eh), eg(M.h8.PAYMENT_TYPE)
        },
        analyticsLocation: U,
        isEligibleForTrial: B
      }), t = (0, n.jsx)(eN, {
        onBack: T
      });
      break;
    case M.h8.CREDIT_CARD_INFORMATION:
      let e1 = 2 === (0, g._)().bucket,
        e8 = async e => {
          eH(!0);
          try {
            let a = await (0, d.qv)(eO, e);
            if (ex({
                token: a
              }), e1) try {
              let e = await (0, d.f0)(eO, a, eU.info, U);
              e$(e)
            } catch {} else eg(M.h8.ADDRESS)
          } catch (e) {
            var a;
            K.error(null !== (a = e.message) && void 0 !== a ? a : JSON.stringify(e))
          } finally {
            eH(!1)
          }
        };
      a = (0, n.jsx)(ei, {
        onCardInfoChange: (e, a) => {
          ev({
            info: e,
            isValid: a
          }), ek(a => {
            let t = {
              ...a,
              info: {
                ...a.info,
                name: e.name
              }
            };
            if (e1) {
              var n, s;
              t.info.country = null !== (n = e.country) && void 0 !== n ? n : "", t.info.postalCode = null !== (s = e.postalCode) && void 0 !== s ? s : ""
            }
            return t
          })
        }
      }), t = (0, n.jsx)(l.ElementsConsumer, {
        children: e => {
          let {
            elements: a
          } = e;
          return (0, n.jsx)(eN, {
            onBack: () => eg(M.h8.PAYMENT_TYPE),
            primaryCTA: f.Z.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: W.Z.Messages.NEXT,
            primarySubmitting: eY,
            primaryDisabled: e1 ? !eD.isValid || eV : !eD.isValid,
            onPrimary: () => e8(a)
          })
        }
      });
      break;
    case M.h8.AWAITING_BROWSER_CHECKOUT:
      a = (0, n.jsx)("div", {
        className: V.body,
        children: (0, n.jsx)(L.M, {
          onPurchaseComplete: () => C(eP),
          onHandoffFailure: () => {
            ef(el), eg(M.h8.CREDIT_CARD_INFORMATION)
          }
        })
      }), t = (0, n.jsx)(L.a, {
        onPrimaryClick: () => {
          ef(el), eg(M.h8.CREDIT_CARD_INFORMATION)
        },
        onBackClick: () => {
          ef(eh), eg(M.h8.PAYMENT_TYPE)
        }
      });
      break;
    case M.h8.SOFORT_INFORMATION:
      let e2 = eU.info;
      a = (0, n.jsx)("div", {
        className: V.body,
        children: (0, n.jsx)(N.Z, {
          billingAddressInfo: e2,
          onChange: e => {
            ek({
              info: {
                ...e2,
                ...e
              },
              isValid: !1
            })
          },
          error: Z.Z.error
        })
      }), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: W.Z.Messages.NEXT,
        primaryDisabled: "" === e2.name || "" === e2.email || void 0 === e2.email,
        onPrimary: () => eg(M.h8.ADDRESS)
      });
      break;
    case M.h8.EPS_INFORMATION:
      a = (0, n.jsx)(I.Z, {
        type: G.He.EPS,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onEPSBankChange: e => eK(e),
        epsBankValue: eQ,
        billingAddressInfo: eU.info
      }), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: W.Z.Messages.NEXT,
        primaryDisabled: void 0 === eQ || "" === eQ || "" === eU.info.name,
        onPrimary: () => eg(M.h8.ADDRESS)
      });
      break;
    case M.h8.IDEAL_INFORMATION:
      a = (0, n.jsx)(I.Z, {
        type: G.He.IDEAL,
        onAccountHolderNameChange: e => ek({
          info: {
            ...eU.info,
            name: e
          },
          isValid: eU.isValid
        }),
        onIdealBankChange: e => eq(e),
        idealBankValue: ez,
        billingAddressInfo: eU.info
      }), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: W.Z.Messages.NEXT,
        primaryDisabled: void 0 === ez || "" === ez || "" === eU.info.name,
        onPrimary: () => eg(M.h8.ADDRESS)
      });
      break;
    case M.h8.PRZELEWY24_INFORMATION:
      a = (0, n.jsx)(I.Z, {
        type: G.He.PRZELEWY24,
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
      }), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: W.Z.Messages.NEXT,
        primaryDisabled: void 0 === eU.info.name || "" === eU.info.name || void 0 === eU.info.email || "" === eU.info.email || void 0 === eX || "" === eX,
        onPrimary: () => eg(M.h8.ADDRESS)
      });
      break;
    case M.h8.PAYPAL_INFORMATION:
      let e4 = 0 !== eF.length && null != ew;
      a = (0, n.jsx)(ec, {}), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: e4 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
        onPrimary: () => e4 ? eg(M.h8.ADDRESS) : (0, E.i0)()
      });
      break;
    case M.h8.VENMO_INFORMATION:
      let e5 = 0 !== eG.length && null != ew;
      a = (0, n.jsx)(eu, {}), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: e5 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
        onPrimary: () => e5 ? eg(M.h8.ADDRESS) : (0, E.og)()
      });
      break;
    case M.h8.PAYMENT_REQUEST_INFORMATION:
      a = (0, n.jsx)(eE, {}), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE)
      });
      break;
    case M.h8.CASH_APP_INFORMATION:
      let e7 = null != eW;
      a = (0, n.jsx)(ed, {}), t = (0, n.jsx)(eN, {
        onBack: () => eg(M.h8.PAYMENT_TYPE),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: e7 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
        onPrimary: () => e7 ? eg(M.h8.ADDRESS) : (0, F.cp)()
      });
      break;
    case M.h8.ADDRESS:
      let e9 = async () => {
        eH(!0);
        let e = eb.methodType;
        switch (e) {
          case G.He.CARD:
            try {
              let e = await (0, d.f0)(eO, eZ.token, eU.info, U);
              e$(e)
            } catch {}
            break;
          case G.He.VENMO:
          case G.He.PAYPAL:
            try {
              o()(null != ew, "Missing braintreeNonce");
              let e = await (0, d.lP)(ew, eU.info, U);
              e$(e)
            } catch {}
            break;
          case G.He.SOFORT:
            try {
              let e = await (0, d.av)(eO, eU.info, U);
              e$(e)
            } catch {}
            break;
          case G.He.EPS:
            try {
              let e = await (0, d.YQ)(eO, eQ, eU.info, U);
              e$(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case G.He.IDEAL:
            try {
              let e = await (0, d.aN)(eO, ez, eU.info, U);
              e$(e)
            } catch (e) {
              K.warn(e)
            }
            break;
          case G.He.PRZELEWY24:
            try {
              if (void 0 === eX) throw (0, d.SQ)("Bank required for Przelewy24");
              let e = await (0, d.pF)(eO, {
                p24Bank: eX
              }, eU.info, U);
              e$(e)
            } catch {}
            break;
          case G.He.PAYSAFE_CARD:
          case G.He.GRABPAY_MY:
            try {
              let a = await (0, d.sF)(eU.info, e, U);
              e$(a)
            } catch {}
            break;
          case G.He.GCASH:
          case G.He.MOMO_WALLET:
          case G.He.KAKAOPAY:
          case G.He.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: a
              } = await (0, d.Dk)(eU.info, e, U);
              ej(a)
            } catch {}
            break;
          case G.He.GIROPAY:
          case G.He.BANCONTACT:
            try {
              let a = await (0, d.GV)(eO, eU.info, e, U);
              e$(a)
            } catch {}
            break;
          case G.He.CASH_APP:
            try {
              o()(null != eW, "Missing adyenPaymentData");
              let {
                paymentSource: a
              } = await (0, d.Dk)(eU.info, e, U, eW);
              o()(null != a, "Cash App Pay Payment Source missing"), e$(a)
            } catch {}
            break;
          default:
            throw Error("unknown step not handled")
        }!eB && eH(!1)
      };
      switch (eb.methodType) {
        case G.He.CARD:
          u = M.h8.CREDIT_CARD_INFORMATION, r = G.He.CARD;
          break;
        case G.He.PAYPAL:
          u = M.h8.PAYPAL_INFORMATION, r = G.He.PAYPAL;
          break;
        case G.He.VENMO:
          u = M.h8.VENMO_INFORMATION, r = G.He.VENMO;
          break;
        case G.He.GIROPAY:
          u = M.h8.PAYMENT_TYPE, r = G.He.GIROPAY;
          break;
        case G.He.SOFORT:
          u = M.h8.SOFORT_INFORMATION, r = G.He.SOFORT;
          break;
        case G.He.PAYSAFE_CARD:
        case G.He.GCASH:
        case G.He.GRABPAY_MY:
        case G.He.MOMO_WALLET:
        case G.He.KAKAOPAY:
        case G.He.GOPAY_WALLET:
        case G.He.BANCONTACT:
          u = M.h8.PAYMENT_TYPE, r = eb.methodType;
          break;
        case G.He.EPS:
          u = M.h8.EPS_INFORMATION, r = G.He.EPS;
          break;
        case G.He.IDEAL:
          u = M.h8.IDEAL_INFORMATION, r = G.He.IDEAL;
          break;
        case G.He.PRZELEWY24:
          u = M.h8.PRZELEWY24_INFORMATION, r = G.He.PRZELEWY24;
          break;
        case G.He.CASH_APP:
          u = M.h8.CASH_APP_INFORMATION, r = G.He.CASH_APP;
          break;
        default:
          u = M.h8.PAYMENT_TYPE, r = G.He.CARD
      }
      a = (0, n.jsx)(eA, {
        billingAddressInfo: eU.info,
        onBillingAddressChange: (e, a) => {
          ek({
            info: {
              ...eU.info,
              ...e
            },
            isValid: a
          })
        },
        paymentSourceType: r
      }), t = (0, n.jsx)(eN, {
        onBack: () => eg(u),
        primaryCTA: f.Z.CTAType.CONTINUE,
        primaryText: W.Z.Messages.NEXT,
        primarySubmitting: eY,
        primaryDisabled: !eU.isValid || eV,
        onPrimary: e9
      });
      break;
    case M.h8.AWAITING_AUTHENTICATION:
      a = (0, n.jsx)(ep, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eP))
  }
  let e3 = (0, n.jsx)(c.Sequencer, {
      className: Q.sequencer,
      staticClassName: Q.sequencerStatic,
      animatedNodeClassName: Q.sequencerAnimatedNode,
      fillParent: !0,
      step: eP,
      steps: eb.steps,
      sideMargin: 20,
      children: a
    }),
    e6 = eP === M.h8.PAYMENT_TYPE && 0 === m.length ? null : t;
  return H ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(D.Z, {
      className: V.paymentModalError
    }), B && (0, n.jsx)(b.Z, {
      className: V.paymentModalBreadcrumbs,
      isEligibleForTrial: B
    }), (0, n.jsx)(O.C3, {
      children: e3
    }), (0, n.jsx)(O.O3, {
      children: e6
    })]
  }) : (0, n.jsx)(j.Z, {
    steps: null != R ? R : eb.steps,
    currentStep: null != v ? v : eP,
    paymentError: p.paymentError,
    header: x,
    hideBreadcrumbs: k,
    body: e3,
    footer: e6
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
  s.useEffect(() => {
    (0, E.eI)(), (0, F.eI)(), !n && (0, d.tZ)()
  }, []);
  let [l, r] = s.useState(a);
  null != a && null == l && r(a);
  let [o, c] = s.useState(() => ({
    info: el,
    isValid: !1
  })), [p, _] = s.useState(() => ({
    info: er,
    isValid: !1
  })), [N, m] = s.useState(""), [h, T] = s.useState(""), [C, S] = s.useState(""), [I, R] = s.useState(() => ({
    token: null
  })), [P, M, b, f, O] = (0, i.Wu)([Z.Z], () => [Z.Z.braintreeEmail, Z.Z.braintreeNonce, Z.Z.error, Z.Z.venmoUsername, Z.Z.adyenPaymentData]), [y, g] = (0, i.Wu)([x.Z], () => [x.Z.error, x.Z.isAwaitingAuthentication]);
  s.useEffect(() => {
    let e = e => {
      let {
        billingAddress: a
      } = e;
      _({
        info: a,
        isValid: a.country.length > 0
      })
    };
    return u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, A.fw)()
    }
  }, []);
  let [L, D] = s.useState(!1), [v, k] = s.useState(!1), [H, j] = s.useState(null), w = s.useRef(null), G = (0, i.e7)([x.Z], () => x.Z.isAwaitingAuthentication), [W, V] = (0, i.Wu)([U.Z], () => [U.Z.purchaseTokenAuthState, U.Z.purchaseTokenHash]);
  return s.useEffect(() => {
    null != H && null != w.current && w.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]), {
    paymentSources: t,
    paymentSourceId: l,
    hasFetchedPaymentSources: n,
    setPaymentSourceId: r,
    creditCardState: o,
    setCreditCardState: c,
    tokenState: I,
    setTokenState: R,
    billingAddressState: p,
    setBillingAddressState: _,
    isSubmittingCurrentStep: L,
    setIsSubmittingCurrentStep: D,
    hasRedirectURL: v,
    setHasRedirectURL: k,
    braintreeEmail: P,
    braintreeNonce: M,
    venmoUsername: f,
    adyenPaymentData: O,
    paymentError: null != y ? y : b,
    paymentAuthenticationState: g ? B.wr.PENDING : null != y ? B.wr.ERROR : B.wr.NONE,
    purchaseError: H,
    setPurchaseError: j,
    purchaseErrorBlockRef: w,
    isAuthenticating: G,
    purchaseTokenAuthState: W,
    purchaseTokenHash: V,
    epsBankState: h,
    setEpsBankState: T,
    idealBankState: C,
    setIdealBankState: S,
    p24BankState: N,
    setP24BankState: m
  }
}