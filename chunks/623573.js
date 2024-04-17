"use strict";
s.r(t), s.d(t, {
  AddPaymentModalOld: function() {
    return K
  },
  default: function() {
    return Z
  }
}), s("411104"), s("47120");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("452079"),
  o = s("120356"),
  u = s.n(o),
  d = s("442837"),
  c = s("481060"),
  p = s("570140"),
  f = s("355467"),
  E = s("873115"),
  m = s("976255"),
  _ = s("598"),
  S = s("409813"),
  I = s("3409"),
  N = s("351402"),
  P = s("975060"),
  C = s("505649"),
  T = s("66579"),
  h = s("285952"),
  A = s("358085"),
  R = s("622999"),
  y = s("462566"),
  M = s("801937"),
  L = s("282164"),
  g = s("738342"),
  x = s("228666"),
  D = s("296214"),
  U = s("981631"),
  b = s("689938"),
  O = s("255235"),
  v = s("605094");

function B(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {})).PAYMENT_TYPE = "payment_type", n.CARD_INFO = "card_info", n.SOFORT_INFO = "sofort_info", n.ADDRESS = "billing_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.PAYPAL = "paypal", n.PRZELEWY24_INFO = "przelewy24_info";
let j = ["payment_type", "card_info", "billing_address"],
  G = ["payment_type", "sofort_info", "billing_address"],
  k = ["payment_type", "paypal", "billing_address"],
  F = ["payment_type", "payment_request_info"],
  w = ["payment_type", "billing_address"],
  Y = ["payment_type", "przelewy24_info", "billing_address"],
  H = ["payment_type", "billing_address"];

function W(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class V extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      error: s
    } = e, {
      errorStep: a
    } = t;
    if (null == s) return null == a ? null : {
      errorStep: null
    };
    let n = W(s);
    return null != n && n !== t.errorStep ? {
      step: n,
      errorStep: n
    } : null
  }
  async componentDidMount() {
    E.createClient();
    let e = await (0, R.getStripe)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    p.default.wait(() => E.teardownClients()), (0, m.clearCardInfo)()
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
      case U.PaymentSourceTypes.PAYMENT_REQUEST:
        return F;
      case U.PaymentSourceTypes.PAYPAL:
        return k;
      case U.PaymentSourceTypes.SOFORT:
        return G;
      case U.PaymentSourceTypes.GIROPAY:
        return w;
      case U.PaymentSourceTypes.PRZELEWY24:
        return Y;
      case U.PaymentSourceTypes.PAYSAFE_CARD:
      case U.PaymentSourceTypes.GCASH:
      case U.PaymentSourceTypes.GRABPAY_MY:
      case U.PaymentSourceTypes.MOMO_WALLET:
      case U.PaymentSourceTypes.KAKAOPAY:
      case U.PaymentSourceTypes.GOPAY_WALLET:
        return H;
      default:
        return j
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
    E.reopenPayPalWindow()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != W(e) ? null : (0, i.jsx)(c.FormErrorBlock, {
      className: O.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, i.jsx)(c.ModalFooter, {
      children: (0, i.jsxs)(h.default, {
        justify: h.default.Justify.BETWEEN,
        children: [(0, i.jsx)(c.Button, {
          onClick: this.handleBackClick,
          color: c.Button.Colors.PRIMARY,
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          children: b.default.Messages.BACK
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
            return b.default.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return b.default.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return b.default.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return b.default.Messages.BILLING_ADDRESS;
          case "paypal":
            return b.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return b.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return b.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(r.Elements, {
      options: U.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, i.jsx)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.SMALL,
        className: O.modal,
        "aria-label": b.default.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: O.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(c.ModalHeader, {
            direction: h.default.Direction.VERTICAL,
            align: h.default.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(h.default, {
              className: O.modalTitle,
              justify: h.default.Justify.BETWEEN,
              align: h.default.Align.CENTER,
              children: [(0, i.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.H4,
                children: b.default.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(c.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(T.default, {
              breadcrumbs: a,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: O.divider
          }), (0, i.jsx)(c.Sequencer, {
            fillParent: !0,
            className: O.sequencer,
            step: e,
            steps: t,
            children: (0, i.jsx)(c.ModalContent, {
              className: O.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      type: U.PaymentSourceTypes.CARD,
      step: "payment_type",
      steps: j,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), B(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(g.P24DetailForm, {
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
          return (0, i.jsx)(c.Button, {
            type: "submit",
            disabled: "" === t.name || "" === t.email || "" === s,
            onClick: this.handleNextClick,
            children: b.default.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(g.default, {
            billingAddressInfo: t,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, i.jsx)(c.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: b.default.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(M.default, {
          allowStripeRequestPayments: !A.isPlatformEmbedded,
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
          return (0, i.jsx)(D.PaymentRequestStepBody, {
            stripePaymentMethod: e,
            submitting: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, i.jsx)(c.Button, {
            submitting: e,
            look: c.Button.Looks.OUTLINED,
            disabled: !0
          })
        }
      },
      card_info: {
        renderBody: () => {
          let {
            error: e
          } = this.props, t = null != e && (null == e.code || "card_info" === W(e));
          return (0, i.jsxs)(i.Fragment, {
            children: [t ? (0, i.jsx)(c.FormErrorBlock, {
              className: O.errorBlock,
              children: b.default.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(y.default, {
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
              return (0, i.jsx)(c.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(a)
                },
                type: "submit",
                submitting: t,
                children: b.default.Messages.NEXT
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
          return (0, i.jsx)(x.AddressStepBody, {
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
          return (0, i.jsx)(c.Button, {
            type: "submit",
            submitting: e,
            disabled: !t || s,
            onClick: this.handleSave,
            children: b.default.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(L.default, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s
          } = this.props, a = null != s && null != t;
          return (0, i.jsx)(c.Button, {
            submitting: e,
            color: a ? c.Button.Colors.BRAND : c.Button.Colors.PRIMARY,
            onClick: a ? this.handleNextClick : this.handleReopenPaypal,
            children: a ? b.default.Messages.NEXT : b.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), B(this, "handleChooseType", e => {
      let t = this.getSteps(e),
        s = this.getNextStep(t);
      null != s && this.setState({
        type: e,
        steps: t,
        step: s
      })
    }), B(this, "handleCardInfoChange", (e, t) => {
      p.default.wait(() => (0, m.updateCardInfo)(e, t))
    }), B(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: t
      } = this.props;
      t.name = e.name, p.default.wait(() => (0, m.updateAddressInfo)({
        ...t,
        ...e
      }, !1))
    }), B(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), B(this, "handleBillingAddressChange", (e, t) => {
      let {
        billingAddressInfo: s
      } = this.props;
      p.default.wait(() => (0, m.updateAddressInfo)({
        ...s,
        ...e
      }, t))
    }), B(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, m.clearError)();
        this.setState({
          step: e
        })
      }
    }), B(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), B(this, "handleClose", () => {
      (0, m.clearError)(), this.props.onClose()
    }), B(this, "handleStripePaymentMethod", e => {
      if ((0, m.updateStripePaymentRequest)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), B(this, "handleStripePaymentRequestSave", async e => {
      try {
        let t = await f.createPaymentRequestPaymentSource(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: s
          } = this.props;
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), B(this, "createToken", async e => {
      let {
        stripe: t
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let s = await f.createCardToken(t, e);
        this.setState({
          stripeToken: s
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), B(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case U.PaymentSourceTypes.PAYPAL:
          return this.handlePaypalSave();
        case U.PaymentSourceTypes.CARD:
          return this.handleCardSave();
        case U.PaymentSourceTypes.SOFORT:
          return this.handleSofortSave();
        case U.PaymentSourceTypes.GIROPAY:
          return this.handleGiropaySave();
        case U.PaymentSourceTypes.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case U.PaymentSourceTypes.PAYSAFE_CARD:
        case U.PaymentSourceTypes.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          f.dispatchConfirmationError("user used a unsupported payment type: ".concat(e))
      }
    }), B(this, "handlePrzelewy24Save", async () => {
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
        let t = await f.confirmPrzelewy24(n, i, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), B(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await f.confirmSofort(n, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), B(this, "handleCardSave", async () => {
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
        let t = await f.confirmCardPaymentSource(i, l, e, n);
        null == a || a(t), this.handleClose()
      } catch (e) {}
    }), B(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (null != e && null != t) try {
        let e = await f.createBraintreePaymentSource(t, s, n);
        null == a || a(e), this.handleClose()
      } catch (e) {}
    }), B(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: t,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: a,
        analyticsLocation: n
      } = this.props;
      if (s) try {
        let s = await f.createAdyenPrepaidPaymentSource(t, e, n);
        null == a || a(s), this.handleClose()
      } catch (e) {}
    }), B(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: n
      } = this.state;
      if (t) try {
        let t = await f.createStripePaymentSource(n, e, U.PaymentSourceTypes.GIROPAY, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let K = d.default.connectStores([P.default, N.default, C.default], () => ({
  braintreeEmail: P.default.braintreeEmail,
  braintreeNonce: P.default.braintreeNonce,
  stripePaymentMethod: P.default.stripePaymentMethod,
  creditCardInfo: P.default.getCreditCardInfo(),
  isCreditCardInfoValid: P.default.isCardInfoValid,
  billingAddressInfo: P.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: P.default.isBillingAddressInfoValid,
  error: P.default.error,
  popupCallbackCalled: P.default.popupCallbackCalled,
  submitting: N.default.isBusy,
  isAuthenticating: C.default.isAwaitingAuthentication
}))(V);

function z(e) {
  let {
    transitionState: t,
    analyticsLocation: s,
    onClose: a,
    onAddPaymentSource: n
  } = e, l = (0, I.useSharedPaymentModal)(), r = (0, I.AddPaymentFlow)({
    paymentModalArgs: l,
    initialStep: S.Step.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      a()
    },
    onComplete: (e, t) => {
      null == n || n(t), a()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: u()(O.modalTitle, v.flex, v.justifyBetween, v.alignCenter),
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: b.default.Messages.PAYMENT_SOURCES_ADD
      }), (0, i.jsx)(c.ModalCloseButton, {
        onClick: a
      })]
    }),
    analyticsLocation: s,
    hideBreadcrumbs: !0
  });
  return (0, i.jsx)(c.ModalRoot, {
    transitionState: t,
    size: c.ModalSize.SMALL,
    className: O.modal,
    "aria-label": b.default.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: O.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: r
    })
  })
}

function Z(e) {
  return (0, i.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(z, {
      ...e
    })
  })
}