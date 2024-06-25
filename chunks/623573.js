n.r(t), n.d(t, {
  AddPaymentModalOld: function() {
    return z
  },
  default: function() {
    return q
  }
}), n(411104), n(47120);
var s, a, i = n(735250),
  o = n(470079),
  r = n(160612),
  l = n(120356),
  c = n.n(l),
  d = n(512722),
  u = n.n(d),
  _ = n(442837),
  p = n(481060),
  m = n(570140),
  f = n(355467),
  E = n(873115),
  I = n(976255),
  C = n(598),
  h = n(409813),
  N = n(3409),
  P = n(351402),
  g = n(975060),
  T = n(505649),
  S = n(285952),
  R = n(358085),
  A = n(622999),
  b = n(462566),
  x = n(801937),
  M = n(282164),
  L = n(738342),
  y = n(228666),
  B = n(581813),
  D = n(981631),
  O = n(689938),
  v = n(512288),
  U = n(83922);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = s || (s = {})).PAYMENT_TYPE = "payment_type", a.CARD_INFO = "card_info", a.SOFORT_INFO = "sofort_info", a.ADDRESS = "billing_address", a.PAYMENT_REQUEST_INFO = "payment_request_info", a.PAYPAL = "paypal", a.PRZELEWY24_INFO = "przelewy24_info";
let j = ["payment_type", "card_info", "billing_address"],
  w = ["payment_type", "sofort_info", "billing_address"],
  k = ["payment_type", "paypal", "billing_address"],
  G = ["payment_type", "payment_request_info"],
  F = ["payment_type", "billing_address"],
  Y = ["payment_type", "przelewy24_info", "billing_address"],
  H = ["payment_type", "billing_address"];

function W(e) {
  return e.hasCardError() ? "card_info" : e.hasAddressError() ? "billing_address" : null
}
class V extends o.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      error: n
    } = e, {
      errorStep: s
    } = t;
    if (null == n) return null == s ? null : {
      errorStep: null
    };
    let a = W(n);
    return null != a && a !== t.errorStep ? {
      step: a,
      errorStep: a
    } : null
  }
  async componentDidMount() {
    E.eI();
    let e = await (0, A.d2)();
    this.setState({
      stripe: e
    })
  }
  componentWillUnmount() {
    m.Z.wait(() => E.gy()), (0, I.tt)()
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
      case D.HeQ.PAYMENT_REQUEST:
        return G;
      case D.HeQ.PAYPAL:
        return k;
      case D.HeQ.SOFORT:
        return w;
      case D.HeQ.GIROPAY:
        return F;
      case D.HeQ.PRZELEWY24:
        return Y;
      case D.HeQ.PAYSAFE_CARD:
      case D.HeQ.GCASH:
      case D.HeQ.GRABPAY_MY:
      case D.HeQ.MOMO_WALLET:
      case D.HeQ.KAKAOPAY:
      case D.HeQ.GOPAY_WALLET:
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
      n = e.indexOf(t);
    return e[n + 1]
  }
  getPreviousStep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
      {
        step: t
      } = this.state,
      n = e.indexOf(t);
    return e[n - 1]
  }
  preventDefault(e) {
    e.preventDefault()
  }
  handleReopenPaypal() {
    E.i0()
  }
  renderGenericError() {
    let {
      error: e
    } = this.props;
    return null == e || null != W(e) ? null : (0, i.jsx)(p.FormErrorBlock, {
      className: v.errorBlock,
      children: e.message
    })
  }
  renderFooter() {
    let e = this.stepData;
    return null == e.renderNextButton ? null : (0, i.jsx)(p.ModalFooter, {
      children: (0, i.jsxs)(S.Z, {
        justify: S.Z.Justify.BETWEEN,
        children: [(0, i.jsx)(p.Button, {
          onClick: this.handleBackClick,
          color: p.Button.Colors.PRIMARY,
          look: p.Button.Looks.LINK,
          size: p.Button.Sizes.MIN,
          children: O.Z.Messages.BACK
        }), e.renderNextButton()]
      })
    })
  }
  render() {
    let {
      step: e,
      steps: t
    } = this.state, {
      transitionState: n
    } = this.props, s = t.map(e => ({
      id: e,
      label: function(e) {
        switch (e) {
          case "payment_type":
            return O.Z.Messages.PAYMENT_SOURCE_TYPE;
          case "payment_request_info":
            return O.Z.Messages.BILLING_STEP_PAYMENT_INFO;
          case "card_info":
            return O.Z.Messages.PAYMENT_SOURCE_INFORMATION;
          case "billing_address":
            return O.Z.Messages.BILLING_ADDRESS;
          case "paypal":
            return O.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
          case "sofort_info":
            return O.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
          case "przelewy24_info":
            return O.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
        }
      }(e)
    }));
    return (0, i.jsx)(r.Elements, {
      options: D.OBo,
      stripe: this.state.stripe,
      children: (0, i.jsx)(p.ModalRoot, {
        transitionState: n,
        size: p.ModalSize.SMALL,
        className: v.modal,
        "aria-label": O.Z.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsxs)("form", {
          className: v.form,
          onSubmit: this.preventDefault,
          children: [(0, i.jsxs)(p.ModalHeader, {
            direction: S.Z.Direction.VERTICAL,
            align: S.Z.Align.STRETCH,
            separator: !1,
            children: [(0, i.jsxs)(S.Z, {
              className: v.modalTitle,
              justify: S.Z.Justify.BETWEEN,
              align: S.Z.Align.CENTER,
              children: [(0, i.jsx)(p.FormTitle, {
                tag: p.FormTitleTags.H4,
                children: O.Z.Messages.PAYMENT_SOURCES_ADD
              }), (0, i.jsx)(p.ModalCloseButton, {
                onClick: this.handleClose
              })]
            }), this.renderGenericError(), (0, i.jsx)(p.Breadcrumbs, {
              breadcrumbs: s,
              activeId: e
            })]
          }), (0, i.jsx)("div", {
            className: v.divider
          }), (0, i.jsx)(p.Sequencer, {
            fillParent: !0,
            className: v.sequencer,
            step: e,
            steps: t,
            children: (0, i.jsx)(p.ModalContent, {
              className: v.content,
              children: this.stepData.renderBody()
            })
          }), this.renderFooter()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), Z(this, "state", {
      type: D.HeQ.CARD,
      step: "payment_type",
      steps: j,
      errorStep: null,
      stripeToken: null,
      stripe: null,
      tokenSubmitting: !1,
      paymentDetails: {
        p24Bank: ""
      }
    }), Z(this, "STEPS_DATA", {
      przelewy24_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(L.w, {
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
          } = this.props, n = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
          return (0, i.jsx)(p.Button, {
            type: "submit",
            disabled: "" === t.name || "" === t.email || "" === n,
            onClick: this.handleNextClick,
            children: O.Z.Messages.NEXT
          })
        }
      },
      sofort_info: {
        renderBody: () => {
          let {
            error: e,
            billingAddressInfo: t
          } = this.props;
          return (0, i.jsx)(L.Z, {
            billingAddressInfo: t,
            onChange: this.handlePaymentDetailsChange,
            error: e
          })
        },
        renderNextButton: () => {
          let {
            billingAddressInfo: e
          } = this.props;
          return (0, i.jsx)(p.Button, {
            type: "submit",
            disabled: "" === e.name || "" === e.email,
            onClick: this.handleNextClick,
            children: O.Z.Messages.NEXT
          })
        }
      },
      payment_type: {
        renderBody: () => (0, i.jsx)(x.Z, {
          allowStripeRequestPayments: !R.isPlatformEmbedded,
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
          return (0, i.jsx)(B.k, {
            stripePaymentMethod: e,
            submitting: t
          })
        },
        renderNextButton: () => {
          let {
            submitting: e
          } = this.props;
          return (0, i.jsx)(p.Button, {
            submitting: e,
            look: p.Button.Looks.OUTLINED,
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
            children: [t ? (0, i.jsx)(p.FormErrorBlock, {
              className: v.errorBlock,
              children: O.Z.Messages.BILLING_ERROR_SECTION_CARD
            }) : null, (0, i.jsx)(b.Z, {
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
            children: n => {
              let {
                elements: s
              } = n;
              return (0, i.jsx)(p.Button, {
                disabled: !e,
                onClick: () => {
                  this.createToken(s)
                },
                type: "submit",
                submitting: t,
                children: O.Z.Messages.NEXT
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
            type: n
          } = this.state;
          return (0, i.jsx)(y.P, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: n
          })
        },
        renderNextButton: () => {
          let {
            submitting: e,
            isBillingAddressInfoValid: t,
            isAuthenticating: n
          } = this.props;
          return (0, i.jsx)(p.Button, {
            type: "submit",
            submitting: e,
            disabled: !t || n,
            onClick: this.handleSave,
            children: O.Z.Messages.SAVE
          })
        }
      },
      paypal: {
        renderBody: () => (0, i.jsx)(M.Z, {}),
        renderNextButton: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: n
          } = this.props, s = null != n && null != t;
          return (0, i.jsx)(p.Button, {
            submitting: e,
            color: s ? p.Button.Colors.BRAND : p.Button.Colors.PRIMARY,
            onClick: s ? this.handleNextClick : this.handleReopenPaypal,
            children: s ? O.Z.Messages.NEXT : O.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
          })
        }
      }
    }), Z(this, "handleChooseType", e => {
      let t = this.getSteps(e),
        n = this.getNextStep(t);
      null != n && this.setState({
        type: e,
        steps: t,
        step: n
      })
    }), Z(this, "handleCardInfoChange", (e, t) => {
      m.Z.wait(() => (0, I.sn)(e, t))
    }), Z(this, "handlePaymentDetailsChange", e => {
      let {
        billingAddressInfo: t
      } = this.props;
      t.name = e.name, m.Z.wait(() => (0, I.Ow)({
        ...t,
        ...e
      }, !1))
    }), Z(this, "handleP24BankChange", e => {
      this.setState({
        paymentDetails: {
          p24Bank: e
        }
      })
    }), Z(this, "handleBillingAddressChange", (e, t) => {
      let {
        billingAddressInfo: n
      } = this.props;
      m.Z.wait(() => (0, I.Ow)({
        ...n,
        ...e
      }, t))
    }), Z(this, "handleBackClick", () => {
      let e = this.getPreviousStep();
      if (null != e) {
        "payment_type" === e && (0, I.fw)();
        this.setState({
          step: e
        })
      }
    }), Z(this, "handleNextClick", () => {
      let e = this.getNextStep();
      null != e && this.setState({
        step: e
      })
    }), Z(this, "handleClose", () => {
      (0, I.fw)(), this.props.onClose()
    }), Z(this, "handleStripePaymentMethod", e => {
      if ((0, I.Xt)(e), null == e) {
        this.handleBackClick();
        return
      }
      this.handleStripePaymentRequestSave(e)
    }), Z(this, "handleStripePaymentRequestSave", async e => {
      try {
        let t = await f.i6(e, void 0, this.props.analyticsLocation),
          {
            onAddPaymentSource: n
          } = this.props;
        null == n || n(t), this.handleClose()
      } catch (e) {}
    }), Z(this, "createToken", async e => {
      let {
        stripe: t
      } = this.state;
      this.setState({
        tokenSubmitting: !0
      });
      try {
        let n = await f.qv(t, e);
        this.setState({
          stripeToken: n
        }), this.handleNextClick()
      } catch (e) {} finally {
        this.setState({
          tokenSubmitting: !1
        })
      }
    }), Z(this, "handleSave", () => {
      let {
        type: e
      } = this.state;
      switch (e) {
        case D.HeQ.PAYPAL:
          return this.handlePaypalSave();
        case D.HeQ.CARD:
          return this.handleCardSave();
        case D.HeQ.SOFORT:
          return this.handleSofortSave();
        case D.HeQ.GIROPAY:
          return this.handleGiropaySave();
        case D.HeQ.PRZELEWY24:
          return this.handlePrzelewy24Save();
        case D.HeQ.PAYSAFE_CARD:
        case D.HeQ.GRABPAY_MY:
          return this.handleAdyenPrepaidPaymentMethodSave(e);
        default:
          f.SQ("user used a unsupported payment type: ".concat(e))
      }
    }), Z(this, "handlePrzelewy24Save", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: n,
        analyticsLocation: s
      } = this.props, {
        stripe: a,
        paymentDetails: i
      } = this.state;
      if (!!t) try {
        let t = await f.pF(a, i, e, s);
        null == n || n(t), this.handleClose()
      } catch (e) {}
    }), Z(this, "handleSofortSave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: n,
        analyticsLocation: s
      } = this.props, {
        stripe: a
      } = this.state;
      if (!!t) try {
        let t = await f.av(a, e, s);
        null == n || n(t), this.handleClose()
      } catch (e) {}
    }), Z(this, "handleCardSave", async () => {
      let {
        billingAddressInfo: e,
        isCreditCardInfoValid: t,
        isBillingAddressInfoValid: n,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props, {
        stripe: i,
        stripeToken: o
      } = this.state;
      if (!!t && !!n) try {
        let t = await f.f0(i, o, e, a);
        null == s || s(t), this.handleClose()
      } catch (e) {}
    }), Z(this, "handlePaypalSave", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: n,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props;
      if (null != e && null != t) try {
        let e = await f.lP(t, n, a);
        null == s || s(e), this.handleClose()
      } catch (e) {}
    }), Z(this, "handleAdyenPrepaidPaymentMethodSave", async e => {
      let {
        billingAddressInfo: t,
        isBillingAddressInfoValid: n,
        onAddPaymentSource: s,
        analyticsLocation: a
      } = this.props;
      if (!!n) try {
        let n = await f.sF(t, e, a);
        null == s || s(n), this.handleClose()
      } catch (e) {}
    }), Z(this, "handleGiropaySave", async () => {
      let {
        billingAddressInfo: e,
        isBillingAddressInfoValid: t,
        onAddPaymentSource: n,
        analyticsLocation: s
      } = this.props, {
        stripe: a
      } = this.state;
      if (!!t) try {
        let t = await f.GV(a, e, D.HeQ.GIROPAY, s);
        null == n || n(t), this.handleClose()
      } catch (e) {}
    })
  }
}
let z = _.ZP.connectStores([g.Z, P.Z, T.Z], () => ({
  braintreeEmail: g.Z.braintreeEmail,
  braintreeNonce: g.Z.braintreeNonce,
  stripePaymentMethod: g.Z.stripePaymentMethod,
  creditCardInfo: g.Z.getCreditCardInfo(),
  isCreditCardInfoValid: g.Z.isCardInfoValid,
  billingAddressInfo: g.Z.getBillingAddressInfo(),
  isBillingAddressInfoValid: g.Z.isBillingAddressInfoValid,
  error: g.Z.error,
  popupCallbackCalled: g.Z.popupCallbackCalled,
  submitting: P.Z.isBusy,
  isAuthenticating: T.Z.isAwaitingAuthentication
}))(V);

function K(e) {
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: s,
    onAddPaymentSource: a
  } = e, o = (0, N.fL)(), r = (0, N.vP)({
    paymentModalArgs: o,
    initialStep: h.h8.PAYMENT_TYPE,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      s()
    },
    onComplete: (e, t) => {
      u()(null != t, "paymentSource missing"), null == a || a(t), s()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: c()(v.modalTitle, U.flex, U.justifyBetween, U.alignCenter),
      children: [(0, i.jsx)(p.FormTitle, {
        tag: p.FormTitleTags.H4,
        children: O.Z.Messages.PAYMENT_SOURCES_ADD
      }), (0, i.jsx)(p.ModalCloseButton, {
        onClick: s
      })]
    }),
    analyticsLocation: n,
    hideBreadcrumbs: !0
  });
  return (0, i.jsx)(p.ModalRoot, {
    transitionState: t,
    size: p.ModalSize.SMALL,
    className: v.modal,
    "aria-label": O.Z.Messages.PAYMENT_SOURCES_ADD,
    children: (0, i.jsx)("form", {
      className: v.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: r
    })
  })
}

function q(e) {
  return (0, i.jsx)(C.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(K, {
      ...e
    })
  })
}