t.d(s, {
  Z: function() {
    return A
  }
}), t(47120), t(411104);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(533307),
  o = t(930114),
  c = t(246946),
  E = t(285952),
  d = t(626135),
  _ = t(669079),
  T = t(981631),
  S = t(689938),
  u = t(817271);

function I(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class N extends i.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      object: T.qAy.BUTTON_CTA
    }
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: s,
      submitting: t,
      hasError: i,
      isPromoCode: a
    } = this.state;
    return (0, n.jsxs)(l.FormSection, {
      tag: l.FormTitleTags.H1,
      title: S.Z.Messages.GIFT_INVENTORY_REDEEM_CODES,
      children: [(0, n.jsx)(l.FormTitle, {
        children: S.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMPT
      }), (0, n.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, n.jsxs)(E.Z, {
          children: [(0, n.jsx)(l.TextInput, {
            type: e ? "password" : "text",
            value: s,
            onChange: this.handleChange,
            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
            error: !a && i ? S.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_INVALID : null,
            className: u.codeRedemptionInput
          }), (0, n.jsx)(l.Button, {
            type: "submit",
            submitting: t,
            children: S.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_REDEEM
          })]
        })
      }), a ? (0, n.jsx)(l.Text, {
        className: u.errorMessage,
        variant: "text-sm/normal",
        children: S.Z.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMOTION.format({
          promoLink: () => {
            window.open("https://discord.com/billing/promotions/".concat(s))
          }
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      codeInput: "",
      submitting: !1,
      hasError: !1,
      isPromoCode: !1
    }), I(this, "handleChange", e => {
      this.setState({
        codeInput: e,
        hasError: !1
      })
    }), I(this, "handleSubmit", async e => {
      e.preventDefault();
      let {
        codeInput: s
      } = this.state;
      if ("" === s) return;
      let t = (0, _.JT)(s);
      if (null == t) {
        this.setState({
          hasError: !0
        });
        return
      }
      this.setState({
        submitting: !0
      });
      try {
        let e = await r.Z.resolveGiftCode(t);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: !0
        }), Error("Cannnot redeem promotion code as gift");
        d.default.track(T.rMx.OPEN_MODAL, {
          type: "gift_accept",
          location: {
            ...this.analyticsLocation,
            object: T.qAy.BUTTON_CTA
          }
        }), (0, o.V)({
          processedCode: t
        }), this.setState({
          codeInput: ""
        })
      } catch (e) {
        this.setState({
          hasError: !0
        })
      } finally {
        this.setState({
          submitting: !1
        })
      }
    })
  }
}

function A() {
  let e = i.useContext(d.AnalyticsContext),
    s = (0, a.e7)([c.Z], () => c.Z.enabled);
  return (0, n.jsx)(N, {
    analyticsContext: e,
    obscureInput: s
  })
}