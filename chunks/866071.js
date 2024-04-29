"use strict";
s.r(t), s.d(t, {
  ADD_CARD_STEPS: function() {
    return G
  },
  ADD_GIROPAY_STEPS: function() {
    return w
  },
  ADD_PAYMENT_REQUEST_STEPS: function() {
    return Y
  },
  ADD_PAYMENT_STEPS: function() {
    return j
  },
  ADD_PAYPAL_STEPS: function() {
    return U
  },
  ADD_PAYSAFECARD_STEPS: function() {
    return H
  },
  ADD_VENMO_STEPS: function() {
    return V
  },
  REVIEW_PAYMENT_STEPS: function() {
    return F
  }
}), s("47120");
var n, a = s("735250"),
  r = s("470079"),
  l = s("452079"),
  i = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("873115"),
  p = s("976255"),
  f = s("246946"),
  h = s("351402"),
  S = s("618541"),
  P = s("975060"),
  A = s("853872"),
  _ = s("285952"),
  m = s("603421"),
  E = s("358085"),
  T = s("624138"),
  C = s("622999"),
  y = s("801937"),
  g = s("282164"),
  I = s("915271"),
  R = s("228666"),
  N = s("122192"),
  b = s("296214"),
  O = s("640789"),
  M = s("31820"),
  L = s("693313"),
  B = s("981631"),
  x = s("689938"),
  v = s("759853"),
  k = s("131298");

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let F = [m.Steps.PAYMENT_TYPE, m.Steps.CREDIT_CARD_INFORMATION, m.Steps.REVIEW],
  j = [m.Steps.PAYMENT_TYPE, m.Steps.CREDIT_CARD_INFORMATION, m.Steps.REVIEW],
  G = [m.Steps.PAYMENT_TYPE, m.Steps.CREDIT_CARD_INFORMATION, m.Steps.ADDRESS, m.Steps.REVIEW],
  U = [m.Steps.PAYMENT_TYPE, m.Steps.PAYPAL, m.Steps.PAYPAL_ADDRESS, m.Steps.REVIEW],
  Y = [m.Steps.PAYMENT_TYPE, m.Steps.PAYMENT_REQUEST_INFO, m.Steps.REVIEW],
  w = [m.Steps.PAYMENT_TYPE, m.Steps.ADDRESS, m.Steps.REVIEW],
  H = [m.Steps.PAYMENT_TYPE, m.Steps.ADDRESS, m.Steps.REVIEW],
  V = [m.Steps.PAYMENT_TYPE, m.Steps.VENMO, m.Steps.VENMO_ADDRESS, m.Steps.REVIEW],
  W = (0, T.cssValueToNumber)(k.__invalid_innerPadding);
class z extends(n = r.PureComponent) {
  async componentDidMount() {
    c.createClient();
    let {
      onPaymentSourceChange: e,
      paymentSources: t,
      defaultPaymentSourceId: s,
      paymentSourceId: n
    } = this.props;
    null != e && e(null != n && n !== s && null != t[n] ? t[n] : null != s && null != t[s] ? t[s] : null);
    let a = await (0, C.getStripe)();
    this.setState({
      stripe: a
    })
  }
  componentDidUpdate(e) {
    let {
      onPaymentSourceChange: t,
      paymentSources: s,
      paymentSourceId: n
    } = this.props;
    e.paymentSourceId !== n && null != n && null != s[n] && (null == t || t(s[n]))
  }
  componentWillUnmount() {
    c.teardownClients(), p.clearCardInfo();
    let {
      onClearError: e
    } = this.props;
    null == e || e(), p.clearError()
  }
  preventDefault(e) {
    e.preventDefault()
  }
  get disabledTooltip() {
    let {
      needsToBeGift: e,
      isGift: t,
      isGiftable: s
    } = this.props;
    if (!this.state.hasAcceptedNeccessaryTerms) return x.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
    if (e && !t) return s ? x.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : x.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
    return null
  }
  renderHeader() {
    let {
      renderHeader: e,
      billingError: t,
      step: s,
      steps: n
    } = this.props;
    return e(s, n.map(e => ({
      id: e,
      label: (0, m.getCrumbLabels)(e)
    })), null == (0, m.errorToStep)(t) ? t : null)
  }
  render() {
    let {
      size: e,
      step: t,
      steps: s,
      className: n,
      transitionState: r
    } = this.props, i = this.stepRenderer[t], d = i.renderBody();
    return (0, a.jsx)(l.Elements, {
      options: B.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, a.jsx)(o.ModalRoot, {
        size: e,
        className: n,
        "aria-label": x.default.Messages.SKU_PAYMENT_STEPS_LABEL,
        transitionState: r,
        children: (0, a.jsx)(o.Scroller, {
          children: (0, a.jsxs)("form", {
            className: v.form,
            onSubmit: this.preventDefault,
            children: [this.renderHeader(), t !== m.Steps.CONFIRM ? (0, a.jsx)("div", {
              className: v.divider
            }) : null, null != d && (0, a.jsx)(o.ModalContent, {
              className: v.modalContent,
              children: (0, a.jsx)("div", {
                className: v.content,
                children: (0, a.jsx)(o.Sequencer, {
                  step: t,
                  steps: s,
                  sideMargin: W,
                  children: d
                })
              })
            }), i.renderFooter()]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      hasAcceptedNeccessaryTerms: !1,
      token: null,
      confirmingCard: !1,
      stripe: null
    }), D(this, "handleToggleIsGift", (e, t) => {
      let {
        onIsGiftUpdate: s
      } = this.props;
      null == s || s(t)
    }), D(this, "handlePurchaseTermsChange", e => {
      this.setState({
        hasAcceptedNeccessaryTerms: e
      })
    }), D(this, "handleReopenPaypal", () => {
      c.reopenPayPalWindow()
    }), D(this, "handleReopenVenmo", () => {
      c.reopenVenmoWindow()
    }), D(this, "handleCardInfoChange", (e, t) => {
      d.default.wait(() => p.updateCardInfo(e, t))
    }), D(this, "handleBillingAddressChange", (e, t) => {
      d.default.wait(() => p.updateAddressInfo(e, t))
    }), D(this, "handleCreditCardAdd", async () => {
      let {
        billingAddressInfo: e
      } = this.props, {
        stripe: t,
        token: s
      } = this.state;
      try {
        let n = await u.confirmCardPaymentSource(t, s, e);
        this.props.onPaymentSourceAdd(n.id)
      } catch (e) {}
    }), D(this, "handleStripePaymentRequestAdd", async e => {
      if (p.updateStripePaymentRequest(e), null == e) {
        this.props.onBack();
        return
      }
      try {
        let t = await u.createPaymentRequestPaymentSource(e);
        this.props.onPaymentSourceAdd(t.id)
      } catch (e) {}
    }), D(this, "handlePaypalAdd", async () => {
      let {
        braintreeEmail: e,
        braintreeNonce: t,
        billingAddressInfo: s
      } = this.props;
      if (0 !== e.length && null != t) try {
        let e = await u.createBraintreePaymentSource(t, s);
        this.props.onPaymentSourceAdd(e.id)
      } catch (e) {}
    }), D(this, "handleVenmoAdd", async () => {
      let {
        venmoUsername: e,
        braintreeNonce: t,
        billingAddressInfo: s
      } = this.props;
      if (0 !== e.length && null != t) try {
        let e = await u.createBraintreePaymentSource(t, s);
        this.props.onPaymentSourceAdd(e.id)
      } catch (e) {}
    }), D(this, "renderBackButton", () => {
      let {
        step: e,
        steps: t,
        paymentSources: s,
        onBack: n
      } = this.props, r = (0, m.getStepIndex)(e, t), l = (0, m.canGoBack)(r, s) ? x.default.Messages.BACK : x.default.Messages.CANCEL;
      return (0, a.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        className: v.backButton,
        color: v.backButtonColor,
        size: v.backButtonSize,
        onClick: n,
        children: l
      })
    }), D(this, "stepRenderer", {
      [m.Steps.PAYMENT_TYPE]: {
        renderBody: () => {
          let {
            hidePersonalInformation: e,
            onChoosePaymentType: t,
            isGiftable: s,
            needsToBeGift: n,
            isGift: l
          } = this.props;
          return e ? (0, a.jsx)(o.FormErrorBlock, {
            className: v.errorBlock,
            children: x.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
          }) : (0, a.jsxs)(r.Fragment, {
            children: [(0, a.jsx)(y.default, {
              className: v.choosePaymentSourceType,
              onChooseType: t,
              allowStripeRequestPayments: !E.isPlatformEmbedded,
              onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
            }), s && (0, a.jsx)(o.Checkbox, {
              disabled: n,
              className: v.giftToggle,
              type: o.Checkbox.Types.INVERTED,
              value: l,
              onChange: this.handleToggleIsGift,
              children: (0, a.jsx)("div", {
                className: v.checkboxLabel,
                children: x.default.Messages.BILLING_IS_GIFT_PURCHASE
              })
            })]
          })
        },
        renderFooter: () => (0, a.jsx)(o.ModalFooter, {
          direction: _.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [m.Steps.PAYMENT_REQUEST_INFO]: {
        renderBody: () => (0, a.jsx)(b.PaymentRequestStepBody, {
          className: v.__invalid_formItem,
          stripePaymentMethod: this.props.stripePaymentMethod,
          submitting: this.props.submitting
        }),
        renderFooter: () => (0, a.jsx)(o.ModalFooter, {
          direction: _.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [m.Steps.PAYPAL]: {
        renderBody: () => (0, a.jsx)(g.default, {
          className: v.__invalid_formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            paypalClient: r
          } = this.props;
          return (0, a.jsx)(O.PaypalStepFooter, {
            submitting: e || null == r,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            onReopenPaypal: this.handleReopenPaypal,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [m.Steps.VENMO]: {
        renderBody: () => (0, a.jsx)(I.default, {
          className: v.__invalid_formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
            venmoClient: r
          } = this.props;
          return (0, a.jsx)(L.VenmoStepFooter, {
            submitting: e || null == r,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
            onReopenVenmo: this.handleReopenVenmo,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [m.Steps.CREDIT_CARD_INFORMATION]: {
        renderBody: () => {
          let {
            billingError: e
          } = this.props;
          return (0, a.jsx)(N.CreditCardInformationBody, {
            billingError: e,
            onCardInfoChange: this.handleCardInfoChange
          })
        },
        renderFooter: () => {
          let {
            isCardInfoValid: e,
            onCreditCardContinue: t
          } = this.props, {
            stripe: s,
            confirmingCard: n
          } = this.state, r = async e => {
            this.setState({
              confirmingCard: !0
            });
            try {
              let n = await u.createCardToken(s, e);
              this.setState({
                token: n
              }), p.clearError(), t()
            } catch (e) {} finally {
              this.setState({
                confirmingCard: !1
              })
            }
          };
          return (0, a.jsx)(l.ElementsConsumer, {
            children: t => {
              let {
                elements: s
              } = t;
              return (0, a.jsx)(N.CreditCardInformationFooter, {
                isCardInfoValid: e,
                submitting: n,
                renderBackButton: this.renderBackButton,
                onCreditCardContinue: () => r(s)
              })
            }
          })
        }
      },
      [m.Steps.PAYPAL_ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t
          } = this.props;
          return (0, a.jsx)(R.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: B.PaymentSourceTypes.PAYPAL
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, a.jsx)(R.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handlePaypalAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [m.Steps.VENMO_ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t
          } = this.props;
          return (0, a.jsx)(R.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: B.PaymentSourceTypes.VENMO
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, a.jsx)(R.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handleVenmoAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [m.Steps.ADDRESS]: {
        renderBody: () => {
          let {
            billingAddressInfo: e,
            billingError: t,
            steps: s
          } = this.props;
          return (0, a.jsx)(R.AddressStepBody, {
            billingAddressInfo: e,
            billingError: t,
            onBillingAddressChange: this.handleBillingAddressChange,
            paymentSourceType: s === w ? B.PaymentSourceTypes.GIROPAY : B.PaymentSourceTypes.CARD
          })
        },
        renderFooter: () => {
          let {
            isBillingAddressInfoValid: e,
            submitting: t
          } = this.props;
          return (0, a.jsx)(R.AddressStepFooter, {
            isBillingAddressInfoValid: e,
            submitting: t,
            onContinue: this.handleCreditCardAdd,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [m.Steps.REVIEW]: {
        renderBody: () => {
          let {
            legalNotice: e,
            paymentSources: t,
            price: s,
            hidePersonalInformation: n,
            paymentSourceId: r,
            onReviewPaymentSourceChange: l,
            onReviewPaymentSourceAdd: i,
            isGiftable: o,
            isGift: d,
            needsToBeGift: u
          } = this.props;
          return (0, a.jsx)(M.ReviewStepBody, {
            legalNotice: e,
            paymentSources: t,
            price: s,
            hidePersonalInformation: n,
            paymentSourceId: r,
            onPaymentSourceChange: l,
            onPaymentSourceAdd: i,
            onPurchaseTermsChange: this.handlePurchaseTermsChange,
            onToggleIsGift: this.handleToggleIsGift,
            isGiftable: o,
            isGift: d,
            needsToBeGift: u
          })
        },
        renderFooter: () => {
          let {
            canSubmit: e,
            submitButtonText: t,
            useShinySubmitButton: s,
            isPurchasing: n,
            paymentSourceId: r,
            onPurchase: l,
            needsToBeGift: i,
            isGift: o,
            paymentSources: d
          } = this.props;
          return (0, a.jsx)(M.ReviewStepFooter, {
            canSubmit: e,
            submitButtonText: t,
            useShinySubmitButton: s,
            isPurchasing: n,
            hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
            paymentSource: null != r ? d[r] : null,
            onPurchase: l,
            tooltipText: this.disabledTooltip,
            needsToBeGift: i,
            isGift: o
          })
        }
      },
      [m.Steps.CONFIRM]: {
        renderBody: B.NOOP_NULL,
        renderFooter: B.NOOP_NULL
      },
      [m.Steps.AWAITING_AUTHENTICATION]: {
        renderBody: () => (0, a.jsx)(o.FormTitle, {
          className: v.formTitle,
          children: x.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
        }),
        renderFooter: B.NOOP_NULL
      },
      ...this.props.extraRenderers
    })
  }
}
D(z, "defaultProps", {
  canSubmit: !0,
  useShinySubmitButton: !1,
  size: o.ModalSize.SMALL,
  billingError: null,
  extraRenderers: {},
  className: v.modal
}), t.default = i.default.connectStores([A.default, P.default, h.default, f.default, S.default], () => ({
  submitting: h.default.isBusy,
  paymentSources: A.default.paymentSources,
  defaultPaymentSourceId: A.default.defaultPaymentSourceId,
  stripePaymentMethod: P.default.stripePaymentMethod,
  creditCardInfo: P.default.getCreditCardInfo(),
  isCardInfoValid: P.default.isCardInfoValid,
  billingAddressInfo: P.default.getBillingAddressInfo(),
  isBillingAddressInfoValid: P.default.isBillingAddressInfoValid,
  braintreeEmail: P.default.braintreeEmail,
  braintreeNonce: P.default.braintreeNonce,
  venmoUsername: P.default.venmoUsername,
  billingError: P.default.error,
  paypalClient: S.default.getPayPalClient(),
  venmoClient: S.default.getVenmoClient(),
  hidePersonalInformation: f.default.hidePersonalInformation
}))(z)