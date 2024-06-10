"use strict";
s.r(t), s.d(t, {
  AddPaymentModalOld: function() {
    return Z
  },
  default: function() {
    return X
  }
}), s("411104"), s("47120");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("160612"),
  u = s("120356"),
  o = s.n(u),
  d = s("512722"),
  c = s.n(d),
  p = s("442837"),
  f = s("481060"),
  m = s("570140"),
  E = s("355467"),
  _ = s("873115"),
  S = s("976255"),
  I = s("598"),
  N = s("409813"),
  P = s("3409"),
  C = s("351402"),
  h = s("975060"),
  T = s("505649"),
  A = s("66579"),
  R = s("285952"),
  y = s("358085"),
  M = s("622999"),
  g = s("462566"),
  L = s("801937"),
  x = s("282164"),
  D = s("738342"),
  b = s("228666"),
  U = s("296214"),
  v = s("981631"),
  O = s("689938"),
  B = s("388278"),
  j = s("961047");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {})).PAYMENT_TYPE = "payment_type", n.CARD_INFO = "card_info", n.SOFORT_INFO = "sofort_info", n.ADDRESS = "billing_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.PAYPAL = "paypal", n.PRZELEWY24_INFO = "przelewy24_info";
let k = ["payment_type", "card_info", "billing_address"],
  w = ["payment_type", "sofort_info", "billing_address"],
  F = ["payment_type", "paypal", "billing_address"],
  Y = ["payment_type", "payment_request_info"],
  H = ["payment_type", "billing_address"],
  W = ["payment_type", "przelewy24_info", "billing_address"],
  V = ["payment_type", "billing_address"];

function K(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class z extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      error: s
    } = e, {
      errorStep: a
    } = t;
    if (null == s) return null == a ? null : {
      errorStep: null
    };
    let n = K(s);
    return null != n && n !== t.errorStep ? {
      step: n,
      errorStep: n
    } : null
  }
  async componentDidMount() {
    _.createClient();
    let e = await (0, M.getStripe)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    m.default.wait(() => _.teardownClients()), (0, S.clearCardInfo)()
  }
  get stepData() {
    let {
      step: e
    } = this.state, t = this.STEPS_DATA[e];
    if (null == t) throw Error("Invalid step ".concat(e));
    return t
  }
  getSteps(e) {
    switch (null != e ? e : this.state.type) {
      case v.PaymentSourceTypes.PAYMENT_REQUEST:
        return Y;
      case v.PaymentSourceTypes.PAYPAL:
        return F;
      case v.PaymentSourceTypes.SOFORT:
        return w;
      case v.PaymentSourceTypes.GIROPAY:
        return H;
      case v.PaymentSourceTypes.PRZELEWY24:
        return W;
      case v.PaymentSourceTypes.PAYSAFE_CARD:
      case v.PaymentSourceTypes.GCASH:
      case v.PaymentSourceTypes.GRABPAY_MY:
      case v.PaymentSourceTypes.MOMO_WALLET:
      case v.PaymentSourceTypes.KAKAOPAY:
      case v.PaymentSourceTypes.GOPAY_WALLET:
        return V;
      default:
        return k
    }
  }
  getNextStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: t
      } = this.state,
      s = e.indexOf(t);
    return e[s + 1]
  }
  getPreviousStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: t
      } = this.state,
      s = e.indexOf(t);
    return e[s - 1]
  }
  preventDefault(e) {
    e.preventDefault()
  }
  handleReopenPaypal() {
    _.reopenPayPalWindow()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != K(e) ? null : (0, i.jsx)(f.FormErrorBlock, {
      className: B.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, i.jsx)(f.ModalFooter, {
      children: (0, i.jsxs)(R.default, {
        justify: R.default.Justify.BETWEEN,
        children: [(0, i.jsx)(f.Button, {
          onClick: this.handleBackClick,
          color: f.Button.Colors.PRIMARY,
          look: f.Button.Looks.LINK,
          size: f.Button.Sizes.MIN,
          children: O.default.Messages.BACK
        }), e.renderNextButton()]
      })
    })
  }
  render() {
    let {
      step: e,
      steps: t
    } = this.state, {
      transitionState: s
    } = this.props, a = t.map(e => ({
      id: e,
      label: function(e) {
        switch (e) {
          case "payment_type":
            return O.default.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return O.default.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return O.default.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return O.default.Messages.BILLING_ADDRESS;
          case "paypal":
            return O.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return O.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return O.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(r.Elements, {
      options: v.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, i.jsx)(f.ModalRoot, {
        transitionState: s,
        size: f.ModalSize.SMALL,
        className: B.modal,
        "aria-label": O.default.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: B.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(f.ModalHeader, {
            direction: R.default.Direction.VERTICAL,
            align: R.default.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(R.default, {
              className: B.modalTitle,
              justify: R.default.Justify.BETWEEN,
              align: R.default.Align.CENTER,
              children: [(0, i.jsx)(f.FormTitle, {
                tag: f.FormTitleTags.H4,
                children: O.default.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(f.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(A.default, {
              breadcrumbs: a,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: B.divider
          }), (0, i.jsx)(f.Sequencer, {
            fillParent: !0,
            className: B.sequencer,
            step: e,
            steps: t,
            children: (0, i.jsx)(f.ModalContent, {
              className: B.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), G(this, "state", {
      type: v.PaymentSourceTypes.CARD,
      step: "payment_type",
      steps: k,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), G(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(D.P24DetailForm, {
            billingAddressInfo: t,
            onDetailsChange: this.handlePaymentDetailsChange,
            onP24BankChange: this.handleP24BankChange,
            p24BankValue: this.state.paymentDetails.p24Bank,
            error: e
          })
        },
        renderNextButton: () => {
          var e;
          let {
            billingAddressInfo: t
          } = this.props, s = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
          return (0, i.jsx)(f.Button, {
            type: "submit",
            disabled: "" === t.name || "" === t.email || "" === s,
            onClick: this.handleNextClick,
            children: O.default.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(D.default, {
            billingAddressInfo: t,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, i.jsx)(f.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: O.default.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(L.default, {
          allowStripeRequestPayments: !y.isPlatformEmbedded,
          onChooseType: this.handleChooseType,
          onStripePaymentMethodReceived: this.handleStripePaymentMethod
        })
      },
      payment_request_info: {
        renderBody: () => {
          let {
            stripePaymentMethod: e,
            submitting: t
          } = this.props;
          return (0, i.jsx)(U.PaymentRequestStepBody, {
            stripePaymentMethod: e,
            submitting: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, i.jsx)(f.Button, {
            submitting: e,
            look: f.Button.Looks.OUTLINED,
            disabled: !0
          })
        }
      },
      card_info: {
        renderBody: () => {
          let {
            error: e
          } = this.props, t = null != e && (null == e.code || "card_info" === K(e));
          return (0, i.jsxs)(i.Fragment, {
            children: [t ? (0, i.jsx)(f.FormErrorBlock, {
              className: B.errorBlock,
              children: O.default.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(g.default, {
              onCardInfoChange: this.handleCardInfoChange,
              error: t ? e : null
            })]
          })
        },
        renderNextButton: () => {
          let {
            isCreditCardInfoValid: e
          } = this.props, {
            tokenSubmitting: t
          } = this.state;
          return (0, i.jsx)(r.ElementsConsumer, {
            children: s => {
              let {
                elements: a
              } = s;
              return (0, i.jsx)(f.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(a)
                },
                type: "submit",
                submitting: t,
                children: O.default.Messages.NEXT
              })
            }
          })
        }
      },
      billing_address: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            error: t
          } = this.props, {
            type: s
          } = this.state;
          return (0, i.jsx)(b.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: s
          })
        },
        renderNextButton: () => {
          let {
            submitting: e,
            isBillingAddressInfoValid: t,
            isAuthenticating: s
          } = this.props;
          return (0, i.jsx)(f.Button, {
            type: "submit",
            submitting: e,
            disabled: !t || s,
            onClick: this.handleSave,
            children: O.default.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(x.default, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s
          } = this.props, a = null != s && null != t;
          return (0, i.jsx)(f.Button, {
            submitting: e,
            color: a ? f.Button.Colors.BRAND : f.Button.Colors.PRIMARY,
            onClick: a ? this.handleNextClick : this.handleReopenPaypal,
            children: a ? O.default.Messages.NEXT : O.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), G(this, "handleChooseType", e => {
      let t = this.getSteps(e),
        s = this.getNextStep(t);
      null != s && this.setState({
        type: e,
        steps: t,
        step: s
      })
    }), G(this, "handleCardInfoChange", (e, t) => {
      m.default.wait(() => (0, S.updateCardInfo)(e, t))
    }), G(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: t
      } = this.props;
      t.name = e.name, m.default.wait(() => (0, S.updateAddressInfo)({
        ...t,
        ...e
      }, !1))
    }), G(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), G(this, "handleBillingAddressChange", (e, t) => {
      let {
        billingAddressInfo: s
      } = this.props;
      m.default.wait(() => (0, S.updateAddressInfo)({
        ...s,
        ...e
      }, t))
    }), G(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, S.clearError)();
        this.setState({
          step: e
        })
      }
    }), G(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), G(this, "handleClose", () => {
      (0, S.clearError)(), this.props.onClose()
    }), G(this, "handleStripePaymentMethod", e => {
      if ((0, S.updateStripePaymentRequest)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), G(this, "handleStripePaymentRequestSave", async e => {
      try {
        let t = await E.createPaymentRequestPaymentSource(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: s
          } = this.props;
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), G(this, "createToken", async e => {
      let {
        stripe: t
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let s = await E.createCardToken(t, e);
        this.setState({
          stripeToken: s
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), G(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case v.PaymentSourceTypes.PAYPAL:
          return this.handlePaypalSave();
        case v.PaymentSourceTypes.CARD:
          return this.handleCardSave();
        case v.PaymentSourceTypes.SOFORT:
          return this.handleSofortSave();
        case v.PaymentSourceTypes.GIROPAY:
          return this.handleGiropaySave();
        case v.PaymentSourceTypes.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case v.PaymentSourceTypes.PAYSAFE_CARD:
        case v.PaymentSourceTypes.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          E.dispatchConfirmationError("user used a unsupported payment type: ".concat(e))
      }
    }), G(this, "handlePrzelewy24Save", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n,
        paymentDetails: i
      } = this.state;
      if (t) try {
        let t = await E.confirmPrzelewy24(n, i, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), G(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await E.confirmSofort(n, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), G(this, "handleCardSave", async () => {
      let {
        billingAddressInfo: e,
        isCreditCardInfoValid: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props, {
        stripe: i,
        stripeToken: l
      } = this.state;
      if (t && s) try {
        let t = await E.confirmCardPaymentSource(i, l, e, n);
        null == a || a(t), this.handleClose()
      } catch (e) {}
    }), G(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (null != e && null != t) try {
        let e = await E.createBraintreePaymentSource(t, s, n);
        null == a || a(e), this.handleClose()
      } catch (e) {}
    }), G(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (s) try {
        let s = await E.createAdyenPrepaidPaymentSource(t, e, n);
        null == a || a(s), this.handleClose()
      } catch (e) {}
    }), G(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await E.createStripePaymentSource(n, e, v.PaymentSourceTypes.GIROPAY, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let Z = p.default.connectStores([h.default, C.default, T.default], () => ({
  braintreeEmail: h.default.braintreeEmail,
  braintreeNonce: h.default.braintreeNonce,
  stripePaymentMethod: h.default.stripePaymentMethod,
  creditCardInfo: h.default.getCreditCardInfo(),
  isCreditCardInfoValid: h.default.isCardInfoValid,
  billingAddressInfo: h.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: h.default.isBillingAddressInfoValid,
  error: h.default.error,
  popupCallbackCalled: h.default.popupCallbackCalled,
  submitting: C.default.isBusy,
  isAuthenticating: T.default.isAwaitingAuthentication
}))(z);

function q(e) {
  let {
    transitionState: t,
    analyticsLocation: s,
    onClose: a,
    onAddPaymentSource: n
  } = e, l = (0, P.useSharedPaymentModal)(), r = (0, P.AddPaymentFlow)({
    paymentModalArgs: l,
    initialStep: N.Step.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      a()
    },
    onComplete: (e, t) => {
      c()(null != t, "paymentSource missing"), null == n || n(t), a()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: o()(B.modalTitle, j.flex, j.justifyBetween, j.alignCenter),
      children: [(0, i.jsx)(f.FormTitle, {
        tag: f.FormTitleTags.H4,
        children: O.default.Messages.PAYMENT_SOURCES_ADD
      }), (0, i.jsx)(f.ModalCloseButton, {
        onClick: a
      })]
    }),
    analyticsLocation: s,
    hideBreadcrumbs: !0
  });
  return (0, i.jsx)(f.ModalRoot, {
    transitionState: t,
    size: f.ModalSize.SMALL,
    className: B.modal,
    "aria-label": O.default.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: B.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: r
    })
  })
}

function X(e) {
  return (0, i.jsx)(I.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(q, {
      ...e
    })
  })
}