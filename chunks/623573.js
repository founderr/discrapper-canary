"use strict";
s.r(t), s.d(t, {
  AddPaymentModalOld: function() {
    return V
  },
  default: function() {
    return Z
  }
}), s("411104"), s("47120");
var a, n, i = s("735250"),
  r = s("470079"),
  l = s("160612"),
  u = s("120356"),
  o = s.n(u),
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
  M = s("462566"),
  y = s("801937"),
  g = s("282164"),
  L = s("738342"),
  x = s("228666"),
  D = s("296214"),
  b = s("981631"),
  U = s("689938"),
  v = s("388278"),
  O = s("961047");

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
class K extends r.PureComponent {
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
      case b.PaymentSourceTypes.PAYMENT_REQUEST:
        return F;
      case b.PaymentSourceTypes.PAYPAL:
        return k;
      case b.PaymentSourceTypes.SOFORT:
        return G;
      case b.PaymentSourceTypes.GIROPAY:
        return w;
      case b.PaymentSourceTypes.PRZELEWY24:
        return Y;
      case b.PaymentSourceTypes.PAYSAFE_CARD:
      case b.PaymentSourceTypes.GCASH:
      case b.PaymentSourceTypes.GRABPAY_MY:
      case b.PaymentSourceTypes.MOMO_WALLET:
      case b.PaymentSourceTypes.KAKAOPAY:
      case b.PaymentSourceTypes.GOPAY_WALLET:
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
      className: v.errorBlock,
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
          children: U.default.Messages.BACK
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
            return U.default.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return U.default.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return U.default.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return U.default.Messages.BILLING_ADDRESS;
          case "paypal":
            return U.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return U.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return U.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(l.Elements, {
      options: b.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, i.jsx)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.SMALL,
        className: v.modal,
        "aria-label": U.default.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: v.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(c.ModalHeader, {
            direction: h.default.Direction.VERTICAL,
            align: h.default.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(h.default, {
              className: v.modalTitle,
              justify: h.default.Justify.BETWEEN,
              align: h.default.Align.CENTER,
              children: [(0, i.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.H4,
                children: U.default.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(c.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(T.default, {
              breadcrumbs: a,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: v.divider
          }), (0, i.jsx)(c.Sequencer, {
            fillParent: !0,
            className: v.sequencer,
            step: e,
            steps: t,
            children: (0, i.jsx)(c.ModalContent, {
              className: v.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      type: b.PaymentSourceTypes.CARD,
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
          return (0, i.jsx)(L.P24DetailForm, {
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
            children: U.default.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(L.default, {
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
            children: U.default.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(y.default, {
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
              className: v.errorBlock,
              children: U.default.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(M.default, {
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
          return (0, i.jsx)(l.ElementsConsumer, {
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
                children: U.default.Messages.NEXT
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
            children: U.default.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(g.default, {}),
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
            children: a ? U.default.Messages.NEXT : U.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
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
        case b.PaymentSourceTypes.PAYPAL:
          return this.handlePaypalSave();
        case b.PaymentSourceTypes.CARD:
          return this.handleCardSave();
        case b.PaymentSourceTypes.SOFORT:
          return this.handleSofortSave();
        case b.PaymentSourceTypes.GIROPAY:
          return this.handleGiropaySave();
        case b.PaymentSourceTypes.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case b.PaymentSourceTypes.PAYSAFE_CARD:
        case b.PaymentSourceTypes.GRABPAY_MY:
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
        stripeToken: r
      } = this.state;
      if (t && s) try {
        let t = await f.confirmCardPaymentSource(i, r, e, n);
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
        let t = await f.createStripePaymentSource(n, e, b.PaymentSourceTypes.GIROPAY, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let V = d.default.connectStores([P.default, N.default, C.default], () => ({
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
}))(K);

function z(e) {
  let {
    transitionState: t,
    analyticsLocation: s,
    onClose: a,
    onAddPaymentSource: n
  } = e, r = (0, I.useSharedPaymentModal)(), l = (0, I.AddPaymentFlow)({
    paymentModalArgs: r,
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
      className: o()(v.modalTitle, O.flex, O.justifyBetween, O.alignCenter),
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: U.default.Messages.PAYMENT_SOURCES_ADD
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
    className: v.modal,
    "aria-label": U.default.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: v.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: l
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