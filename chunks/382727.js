"use strict";
s.r(t), s("47120");
var n, a = s("735250"),
  r = s("470079"),
  l = s("442837"),
  i = s("355467"),
  o = s("976255"),
  d = s("975060"),
  u = s("505649"),
  c = s("853872"),
  p = s("603421"),
  h = s("866071"),
  f = s("981631");

function S(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let P = [p.Steps.REVIEW, p.Steps.CONFIRM];
class A extends(n = r.Component) {
  get stepsToRender() {
    let {
      prependSteps: e
    } = this.props, {
      steps: t
    } = this.state;
    return null != e ? [...e, ...t] : t
  }
  get closable() {
    let {
      step: e
    } = this.state;
    return 0 === (0, p.getStepIndex)(e, this.stepsToRender) || !this._hasChangedSteps
  }
  componentDidMount() {
    !c.default.hasFetchedPaymentSources && i.fetchPaymentSources()
  }
  componentDidUpdate(e, t) {
    let {
      onStepChange: s
    } = this.props, {
      step: n
    } = this.state;
    n !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, n))
  }
  static getDerivedStateFromProps(e, t) {
    let {
      billingError: s,
      isAwaitingAuthentication: n
    } = e, {
      errorStep: a
    } = t, r = {};
    if (null == s) null != a && (r.errorStep = null);
    else {
      let e = (0, p.errorToStep)(s);
      null != e && e !== t.errorStep && (r.step = e, r.errorStep = e)
    }
    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (r.paymentSourceId = e.defaultPaymentSourceId), n ? r.step = p.Steps.AWAITING_AUTHENTICATION : t.step === p.Steps.AWAITING_AUTHENTICATION && (null != s ? r.step = p.Steps.REVIEW : r.step = p.Steps.CONFIRM), r
  }
  render() {
    let {
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: r,
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: d,
      size: u,
      renderConfirmationBody: c,
      renderConfirmationFooter: f,
      className: S,
      isGift: P,
      isGiftable: A,
      needsToBeGift: _,
      onIsGiftUpdate: m,
      transitionState: E
    } = this.props, T = {
      [p.Steps.CONFIRM]: {
        renderBody: c,
        renderFooter: f
      },
      [p.Steps.SELECT_PLAN]: {
        renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
        renderFooter: () => this.props.renderSelectPlanFooter()
      }
    }, {
      step: C,
      paymentSourceId: y
    } = this.state, g = this.stepsToRender;
    return (0, a.jsx)(h.default, {
      transitionState: E,
      className: S,
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: r,
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: d,
      size: u,
      extraRenderers: T,
      step: C,
      steps: g,
      paymentSourceId: y,
      isGiftable: A,
      isGift: P,
      needsToBeGift: _,
      onIsGiftUpdate: m,
      onBack: this.handleBack,
      onChoosePaymentType: this.handleChoosePaymentType,
      onCreditCardContinue: this.handleCreditCardContinue,
      onPaymentSourceAdd: this.handlePaymentSourceAdd,
      onPurchase: this.handlePurchase,
      onPaypalContinue: this.handlePaypalContinue,
      onVenmoContinue: this.handleVenmoContinue,
      onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
      onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
    })
  }
  constructor(e) {
    super(e), S(this, "_hasChangedSteps", !1), S(this, "handlePaypalContinue", () => {
      this.setState({
        step: p.Steps.PAYPAL_ADDRESS
      })
    }), S(this, "handleVenmoContinue", () => {
      this.setState({
        step: p.Steps.VENMO_ADDRESS
      })
    }), S(this, "handleCreditCardContinue", () => {
      this.setState({
        step: p.Steps.ADDRESS
      })
    }), S(this, "handleReviewPaymentSourceChange", e => {
      this.setState({
        paymentSourceId: null != e ? e.id : null
      })
    }), S(this, "handleReviewPaymentSourceAdd", () => {
      this.setState({
        step: p.Steps.PAYMENT_TYPE,
        steps: h.ADD_PAYMENT_STEPS,
        paymentSourceId: null
      });
      let {
        onClearError: e
      } = this.props;
      e && e()
    }), S(this, "handleBack", () => {
      let {
        paymentSources: e,
        onClose: t
      } = this.props, {
        step: s,
        steps: n
      } = this.state, a = this.stepsToRender, r = (0, p.getStepIndex)(s, a);
      if (r > 0) {
        let e = a[r - 1],
          t = e === p.Steps.PAYMENT_TYPE;
        t && o.clearError(), this.setState({
          step: e,
          steps: t ? h.ADD_PAYMENT_STEPS : n
        })
      } else if ((0, p.canGoBack)(r, e)) {
        let {
          defaultPaymentSourceId: e
        } = this.props;
        this.setState({
          step: p.Steps.REVIEW,
          steps: h.REVIEW_PAYMENT_STEPS,
          paymentSourceId: e
        })
      } else t()
    }), S(this, "handleChoosePaymentType", e => {
      switch (e) {
        case f.PaymentSourceTypes.PAYPAL:
          this.setState({
            step: p.Steps.PAYPAL,
            steps: h.ADD_PAYPAL_STEPS
          });
          break;
        case f.PaymentSourceTypes.CARD:
          this.setState({
            step: p.Steps.CREDIT_CARD_INFORMATION,
            steps: h.ADD_CARD_STEPS
          });
          break;
        case f.PaymentSourceTypes.PAYMENT_REQUEST:
          this.setState({
            step: p.Steps.PAYMENT_REQUEST_INFO,
            steps: h.ADD_PAYMENT_REQUEST_STEPS
          });
          break;
        case f.PaymentSourceTypes.GIROPAY:
          this.setState({
            step: p.Steps.ADDRESS,
            steps: h.ADD_GIROPAY_STEPS
          });
          break;
        case f.PaymentSourceTypes.PAYSAFE_CARD:
          this.setState({
            step: p.Steps.ADDRESS,
            steps: h.ADD_PAYSAFECARD_STEPS
          });
          break;
        case f.PaymentSourceTypes.VENMO:
          this.setState({
            step: p.Steps.VENMO,
            steps: h.ADD_VENMO_STEPS
          })
      }
    }), S(this, "handlePaymentSourceAdd", e => {
      this.setState({
        step: p.Steps.REVIEW,
        paymentSourceId: e
      })
    }), S(this, "handlePurchase", async () => {
      let {
        paymentSources: e,
        onPurchase: t,
        isGift: s
      } = this.props, {
        paymentSourceId: n
      } = this.state;
      if (null != n) try {
        await t(e[n], s), this.setState({
          steps: P,
          step: p.Steps.CONFIRM
        })
      } catch (e) {}
    }), S(this, "handleSelectPlan", () => {
      let {
        paymentSources: e
      } = this.props, t = Object.values(e).length > 0;
      this.setState({
        step: t ? p.Steps.REVIEW : p.Steps.PAYMENT_TYPE
      })
    });
    let {
      defaultPaymentSourceId: t,
      paymentSources: s,
      initialStep: n
    } = e, a = Object.values(s).length > 0, r = n;
    null == r && (r = a ? p.Steps.REVIEW : p.Steps.PAYMENT_TYPE), this.state = {
      paymentSourceId: t,
      steps: a ? h.REVIEW_PAYMENT_STEPS : h.ADD_PAYMENT_STEPS,
      step: r,
      errorStep: null
    }
  }
}
S(A, "defaultProps", {
  useShinySubmitButton: !1,
  needsToBeGift: !1,
  isGiftable: !1,
  isGift: !1,
  renderConfirmationBody: f.NOOP_NULL,
  renderConfirmationFooter: f.NOOP_NULL,
  renderSelectPlanBody: f.NOOP_NULL,
  renderSelectPlanFooter: f.NOOP_NULL
}), t.default = r.forwardRef((e, t) => {
  let [s, n] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.paymentSources, c.default.defaultPaymentSourceId]), r = (0, l.useStateFromStores)([d.default], () => d.default.error), [i, o] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
  return (0, a.jsx)(A, {
    ...e,
    ref: t,
    billingError: null != i ? i : r,
    paymentSources: s,
    defaultPaymentSourceId: n,
    isAwaitingAuthentication: o
  })
})