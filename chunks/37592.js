"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  r = a("710845"),
  o = a("285952"),
  i = a("912454"),
  u = a("358085"),
  d = a("622999"),
  c = a("981631"),
  E = a("689938");

function m(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let p = new r.default("PaymentRequest");
class S extends s.Component {
  componentDidMount() {
    (0, d.getStripe)().then(e => {
      this.initPaymentRequest(e)
    })
  }
  render() {
    let {
      canMakePayment: e
    } = this.state;
    if (null == e) return (0, n.jsx)(l.Button, {
      submitting: !0,
      look: l.Button.Looks.FILLED
    });
    if (!1 === e) return (0, n.jsx)(l.Button, {
      disabled: !0,
      look: l.Button.Looks.FILLED,
      children: E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_UNSUPPORTED
    });
    let t = (0, u.isAndroidChrome)(),
      a = t ? E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GPAY : E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GENERIC,
      s = t ? i.default.Types.G_PAY : i.default.Types.PAYMENT_REQUEST,
      {
        className: r,
        iconClassName: d
      } = this.props;
    return (0, n.jsx)(l.Button, {
      onClick: this.handleOnClick,
      className: r,
      children: (0, n.jsxs)(o.default, {
        align: o.default.Align.CENTER,
        children: [(0, n.jsx)(i.default, {
          className: d,
          type: s
        }), a]
      })
    }, c.PaymentSourceTypes.PAYMENT_REQUEST)
  }
  constructor(...e) {
    super(...e), m(this, "state", {}), m(this, "initPaymentRequest", async e => {
      if (null == e) return;
      let t = e.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: this.props.paymentLabel,
            amount: 0,
            pending: !0
          },
          requestPayerName: !0
        }),
        {
          onStripePaymentMethodReceived: a
        } = this.props;
      t.on("paymentmethod", e => {
        let {
          complete: t,
          paymentMethod: n
        } = e;
        a(n), t("success")
      }), t.on("cancel", () => {
        a(null)
      });
      let n = await t.canMakePayment();
      p.info("PaymentRequest availablity check", n), this.setState({
        canMakePayment: !!n,
        paymentRequest: t
      })
    }), m(this, "handleOnClick", () => {
      let {
        onChooseType: e
      } = this.props;
      e(c.PaymentSourceTypes.PAYMENT_REQUEST);
      let {
        paymentRequest: t
      } = this.state;
      null != t && t.show()
    })
  }
}
t.default = S