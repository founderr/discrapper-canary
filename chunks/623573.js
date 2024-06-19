t.r(s), t.d(s, {
  AddPaymentModalOld: function() {
    return z
  },
  default: function() {
    return X
  }
}), t(411104), t(47120);
var n, a, i = t(735250),
  l = t(470079),
  r = t(160612),
  o = t(120356),
  c = t.n(o),
  u = t(512722),
  d = t.n(u),
  E = t(442837),
  _ = t(481060),
  p = t(570140),
  I = t(355467),
  m = t(873115),
  N = t(976255),
  C = t(598),
  h = t(409813),
  P = t(3409),
  T = t(351402),
  A = t(975060),
  R = t(505649),
  S = t(285952),
  M = t(358085),
  f = t(622999),
  g = t(462566),
  L = t(801937),
  x = t(282164),
  O = t(738342),
  D = t(228666),
  y = t(581813),
  U = t(981631),
  Z = t(689938),
  v = t(512288),
  B = t(83922);

function j(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}(a = n || (n = {})).PAYMENT_TYPE = "payment_type", a.CARD_INFO = "card_info", a.SOFORT_INFO = "sofort_info", a.ADDRESS = "billing_address", a.PAYMENT_REQUEST_INFO = "payment_request_info", a.PAYPAL = "paypal", a.PRZELEWY24_INFO = "przelewy24_info";
let b = ["payment_type", "card_info", "billing_address"],
  G = ["payment_type", "sofort_info", "billing_address"],
  k = ["payment_type", "paypal", "billing_address"],
  w = ["payment_type", "payment_request_info"],
  Y = ["payment_type", "billing_address"],
  F = ["payment_type", "przelewy24_info", "billing_address"],
  H = ["payment_type", "billing_address"];

function W(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class V extends l.PureComponent {
  static getDerivedStateFromProps(e, s) {
    let {
      error: t
    } = e, {
      errorStep: n
    } = s;
    if (null == t) return null == n ? null : {
      errorStep: null
    };
    let a = W(t);
    return null != a && a !== s.errorStep ? {
      step: a,
      errorStep: a
    } : null
  }
  async componentDidMount() {
    m.eI();
    let e = await (0, f.d2)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    p.Z.wait(() => m.gy()), (0, N.tt)()
  }
  get stepData() {
    let {
      step: e
    } = this.state, s = this.STEPS_DATA[e];
    if (null == s) throw Error("Invalid step ".concat(e));
    return s
  }
  getSteps(e) {
    switch (null != e ? e : this.state.type) {
      case U.HeQ.PAYMENT_REQUEST:
        return w;
      case U.HeQ.PAYPAL:
        return k;
      case U.HeQ.SOFORT:
        return G;
      case U.HeQ.GIROPAY:
        return Y;
      case U.HeQ.PRZELEWY24:
        return F;
      case U.HeQ.PAYSAFE_CARD:
      case U.HeQ.GCASH:
      case U.HeQ.GRABPAY_MY:
      case U.HeQ.MOMO_WALLET:
      case U.HeQ.KAKAOPAY:
      case U.HeQ.GOPAY_WALLET:
        return H;
      default:
        return b
    }
  }
  getNextStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: s
      } = this.state,
      t = e.indexOf(s);
    return e[t + 1]
  }
  getPreviousStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: s
      } = this.state,
      t = e.indexOf(s);
    return e[t - 1]
  }
  preventDefault(e) {
    e.preventDefault()
  }
  handleReopenPaypal() {
    m.i0()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != W(e) ? null : (0, i.jsx)(_.FormErrorBlock, {
      className: v.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, i.jsx)(_.ModalFooter, {
      children: (0, i.jsxs)(S.Z, {
        justify: S.Z.Justify.BETWEEN,
        children: [(0, i.jsx)(_.Button, {
          onClick: this.handleBackClick,
          color: _.Button.Colors.PRIMARY,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.MIN,
          children: Z.Z.Messages.BACK
        }), e.renderNextButton()]
      })
    })
  }
  render() {
    let {
      step: e,
      steps: s
    } = this.state, {
      transitionState: t
    } = this.props, n = s.map(e => ({
      id: e,
      label: function(e) {
        switch (e) {
          case "payment_type":
            return Z.Z.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return Z.Z.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return Z.Z.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return Z.Z.Messages.BILLING_ADDRESS;
          case "paypal":
            return Z.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return Z.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return Z.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(r.Elements, {
      options: U.OBo,
      stripe: this.state.stripe,
      children: (0, i.jsx)(_.ModalRoot, {
        transitionState: t,
        size: _.ModalSize.SMALL,
        className: v.modal,
        "aria-label": Z.Z.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: v.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(_.ModalHeader, {
            direction: S.Z.Direction.VERTICAL,
            align: S.Z.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(S.Z, {
              className: v.modalTitle,
              justify: S.Z.Justify.BETWEEN,
              align: S.Z.Align.CENTER,
              children: [(0, i.jsx)(_.FormTitle, {
                tag: _.FormTitleTags.H4,
                children: Z.Z.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(_.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(_.Breadcrumbs, {
              breadcrumbs: n,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: v.divider
          }), (0, i.jsx)(_.Sequencer, {
            fillParent: !0,
            className: v.sequencer,
            step: e,
            steps: s,
            children: (0, i.jsx)(_.ModalContent, {
              className: v.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      type: U.HeQ.CARD,
      step: "payment_type",
      steps: b,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), j(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: s
          } = this.props;
          return (0, i.jsx)(O.w, {
            billingAddressInfo: s,
            onDetailsChange: this.handlePaymentDetailsChange,
            onP24BankChange: this.handleP24BankChange,
            p24BankValue: this.state.paymentDetails.p24Bank,
            error: e
          })
        },
        renderNextButton: () => {
          var e;
          let {
            billingAddressInfo: s
          } = this.props, t = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
          return (0, i.jsx)(_.Button, {
            type: "submit",
            disabled: "" === s.name || "" === s.email || "" === t,
            onClick: this.handleNextClick,
            children: Z.Z.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: s
          } = this.props;
          return (0, i.jsx)(O.Z, {
            billingAddressInfo: s,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, i.jsx)(_.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: Z.Z.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(L.Z, {
          allowStripeRequestPayments: !M.isPlatformEmbedded,
          onChooseType: this.handleChooseType,
          onStripePaymentMethodReceived: this.handleStripePaymentMethod
        })
      },
      payment_request_info: {
        renderBody: () => {
          let {
            stripePaymentMethod: e,
            submitting: s
          } = this.props;
          return (0, i.jsx)(y.k, {
            stripePaymentMethod: e,
            submitting: s
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, i.jsx)(_.Button, {
            submitting: e,
            look: _.Button.Looks.OUTLINED,
            disabled: !0
          })
        }
      },
      card_info: {
        renderBody: () => {
          let {
            error: e
          } = this.props, s = null != e && (null == e.code || "card_info" === W(e));
          return (0, i.jsxs)(i.Fragment, {
            children: [s ? (0, i.jsx)(_.FormErrorBlock, {
              className: v.errorBlock,
              children: Z.Z.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(g.Z, {
              onCardInfoChange: this.handleCardInfoChange,
              error: s ? e : null
            })]
          })
        },
        renderNextButton: () => {
          let {
            isCreditCardInfoValid: e
          } = this.props, {
            tokenSubmitting: s
          } = this.state;
          return (0, i.jsx)(r.ElementsConsumer, {
            children: t => {
              let {
                elements: n
              } = t;
              return (0, i.jsx)(_.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(n)
                },
                type: "submit",
                submitting: s,
                children: Z.Z.Messages.NEXT
              })
            }
          })
        }
      },
      billing_address: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            error: s
          } = this.props, {
            type: t
          } = this.state;
          return (0, i.jsx)(D.P, {
            billingAddressInfo: e,
            billingError: s,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e,
            isBillingAddressInfoValid: s,
            isAuthenticating: t
          } = this.props;
          return (0, i.jsx)(_.Button, {
            type: "submit",
            submitting: e,
            disabled: !s || t,
            onClick: this.handleSave,
            children: Z.Z.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(x.Z, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: s,
            braintreeEmail: t
          } = this.props, n = null != t && null != s;
          return (0, i.jsx)(_.Button, {
            submitting: e,
            color: n ? _.Button.Colors.BRAND : _.Button.Colors.PRIMARY,
            onClick: n ? this.handleNextClick : this.handleReopenPaypal,
            children: n ? Z.Z.Messages.NEXT : Z.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), j(this, "handleChooseType", e => {
      let s = this.getSteps(e),
        t = this.getNextStep(s);
      null != t && this.setState({
        type: e,
        steps: s,
        step: t
      })
    }), j(this, "handleCardInfoChange", (e, s) => {
      p.Z.wait(() => (0, N.sn)(e, s))
    }), j(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: s
      } = this.props;
      s.name = e.name, p.Z.wait(() => (0, N.Ow)({
        ...s,
        ...e
      }, !1))
    }), j(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), j(this, "handleBillingAddressChange", (e, s) => {
      let {
        billingAddressInfo: t
      } = this.props;
      p.Z.wait(() => (0, N.Ow)({
        ...t,
        ...e
      }, s))
    }), j(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, N.fw)();
        this.setState({
          step: e
        })
      }
    }), j(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), j(this, "handleClose", () => {
      (0, N.fw)(), this.props.onClose()
    }), j(this, "handleStripePaymentMethod", e => {
      if ((0, N.Xt)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), j(this, "handleStripePaymentRequestSave", async e => {
      try {
        let s = await I.i6(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: t
          } = this.props;
        null == t || t(s), this.handleClose()
      } catch (e) {}
    }), j(this, "createToken", async e => {
      let {
        stripe: s
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let t = await I.qv(s, e);
        this.setState({
          stripeToken: t
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), j(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case U.HeQ.PAYPAL:
          return this.handlePaypalSave();
        case U.HeQ.CARD:
          return this.handleCardSave();
        case U.HeQ.SOFORT:
          return this.handleSofortSave();
        case U.HeQ.GIROPAY:
          return this.handleGiropaySave();
        case U.HeQ.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case U.HeQ.PAYSAFE_CARD:
        case U.HeQ.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          I.SQ("user used a unsupported payment type: ".concat(e))
      }
    }), j(this, "handlePrzelewy24Save", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: t,
        analyticsLocation: n
      } = this.props, {
        stripe: a,
        paymentDetails: i
      } = this.state;
      if (!!s) try {
        let s = await I.pF(a, i, e, n);
        null == t || t(s), this.handleClose()
      } catch (e) {}
    }), j(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: t,
        analyticsLocation: n
      } = this.props, {
        stripe: a
      } = this.state;
      if (!!s) try {
        let s = await I.av(a, e, n);
        null == t || t(s), this.handleClose()
      } catch (e) {}
    }), j(this, "handleCardSave", async () => {
      let {
        billingAddressInfo: e,
        isCreditCardInfoValid: s,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: n,
        analyticsLocation: a
      } = this.props, {
        stripe: i,
        stripeToken: l
      } = this.state;
      if (!!s && !!t) try {
        let s = await I.f0(i, l, e, a);
        null == n || n(s), this.handleClose()
      } catch (e) {}
    }), j(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: s,
        billingAddressInfo: t,
        onAddPaymentSource: n,
        analyticsLocation: a
      } = this.props;
      if (null != e && null != s) try {
        let e = await I.lP(s, t, a);
        null == n || n(e), this.handleClose()
      } catch (e) {}
    }), j(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: s,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: n,
        analyticsLocation: a
      } = this.props;
      if (!!t) try {
        let t = await I.sF(s, e, a);
        null == n || n(t), this.handleClose()
      } catch (e) {}
    }), j(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: s,
        onAddPaymentSource: t,
        analyticsLocation: n
      } = this.props, {
        stripe: a
      } = this.state;
      if (!!s) try {
        let s = await I.GV(a, e, U.HeQ.GIROPAY, n);
        null == t || t(s), this.handleClose()
      } catch (e) {}
    })
  }
}
let z = E.ZP.connectStores([A.Z, T.Z, R.Z], () => ({
  braintreeEmail: A.Z.braintreeEmail,
  braintreeNonce: A.Z.braintreeNonce,
  stripePaymentMethod: A.Z.stripePaymentMethod,
  creditCardInfo: A.Z.getCreditCardInfo(),
  isCreditCardInfoValid: A.Z.isCardInfoValid,
  billingAddressInfo: A.Z.getBillingAddressInfo(),
  isBillingAddressInfoValid: A.Z.isBillingAddressInfoValid,
  error: A.Z.error,
  popupCallbackCalled: A.Z.popupCallbackCalled,
  submitting: T.Z.isBusy,
  isAuthenticating: R.Z.isAwaitingAuthentication
}))(V);

function K(e) {
  let {
    transitionState: s,
    analyticsLocation: t,
    onClose: n,
    onAddPaymentSource: a
  } = e, l = (0, P.fL)(), r = (0, P.vP)({
    paymentModalArgs: l,
    initialStep: h.h8.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      n()
    },
    onComplete: (e, s) => {
      d()(null != s, "paymentSource missing"), null == a || a(s), n()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: c()(v.modalTitle, B.flex, B.justifyBetween, B.alignCenter),
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: Z.Z.Messages.PAYMENT_SOURCES_ADD
      }), (0, i.jsx)(_.ModalCloseButton, {
        onClick: n
      })]
    }),
    analyticsLocation: t,
    hideBreadcrumbs: !0
  });
  return (0, i.jsx)(_.ModalRoot, {
    transitionState: s,
    size: _.ModalSize.SMALL,
    className: v.modal,
    "aria-label": Z.Z.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: v.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: r
    })
  })
}

function X(e) {
  return (0, i.jsx)(C.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(K, {
      ...e
    })
  })
}