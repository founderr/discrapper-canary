"use strict";
a.r(t), a("47120");
var n, s, l, r, o = a("735250"),
  i = a("470079"),
  u = a("160612"),
  d = a("120356"),
  c = a.n(d),
  E = a("481060"),
  m = a("818083"),
  p = a("912454"),
  _ = a("689938"),
  S = a("589695"),
  f = a("12349");
(l = n || (n = {})).CardNumber = "cardNumber", l.CardExpiry = "cardExpiry", l.CardCvc = "cardCvc", (r = s || (s = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
let N = (0, m.createExperiment)({
  kind: "user",
  id: "2024-05_enable_stripe_link_on_split_cardelement",
  label: "Enable Stripe Link Experiment on Split CardElement",
  defaultConfig: {
    disableLink: !0
  },
  treatments: [{
    id: 1,
    label: "Enable Stripe Link",
    config: {
      disableLink: !1
    }
  }]
});
t.default = function(e) {
  let t = i.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: s,
      onFocus: l,
      onBlur: r
    } = e,
    [d, m] = i.useState(p.IconTypes.UNKNOWN),
    [A, I] = i.useState(!1),
    [C, T] = i.useState(!1),
    [h, y] = i.useState(null),
    [R, L] = i.useState({}),
    P = (0, u.useElements)(),
    {
      disableLink: g
    } = N.useExperiment({
      location: "adding_new_card_modal"
    }, {
      autoTrackExposure: !0
    }),
    M = i.useCallback(() => {
      if (null != P) switch (a) {
        case "cardNumber": {
          let e = P.getElement(u.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = P.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = P.getElement(u.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [P, a]),
    D = i.useCallback(e => {
      !C && !e.empty && T(!0), null != s && s(e.complete), null != e.error && I(!1)
    }, [C, s]),
    b = i.useCallback(() => {
      I(!0), null == l || l()
    }, [l]),
    O = i.useCallback(() => {
      I(!1), null == r || r()
    }, [r]),
    v = i.useCallback(() => {
      if (null != P) switch (a) {
        case "cardNumber": {
          let e = P.getElement(u.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            d !== e.brand && m(e.brand), e.empty && C ? y(_.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? y(_.default.Messages.CREDIT_CARD_ERROR_NUMBER) : y(null), D(e)
          }), e.on("focus", b), e.on("blur", O);
          break
        }
        case "cardExpiry": {
          let e = P.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && C ? y(_.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : y(null), D(e)
          }), e.on("focus", b), e.on("blur", O);
          break
        }
        case "cardCvc": {
          let e = P.getElement(u.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && C ? y(_.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : y(null), D(e)
          }), e.on("focus", b), e.on("blur", O)
        }
      }
    }, [O, D, b, d, P, C, a]);

  function x() {
    return c()(S.cardInput, {
      [S.cardInputError]: null !== h,
      [S.cardInputFocused]: A,
      [S.cardNumberInput]: "cardNumber" === a
    })
  }
  return i.useEffect(() => (v(), () => {
    M()
  }), [v, M]), i.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      s = a.getPropertyValue("font-family"),
      l = a.getPropertyValue("font-weight"),
      r = a.getPropertyValue("color");
    L({
      base: {
        fontFamily: s,
        fontWeight: l,
        color: r,
        fontSize: a.getPropertyValue("font-size"),
        "::placeholder": {
          color: n.getPropertyValue("color")
        }
      }
    })
  }, [t]), (0, o.jsxs)("div", {
    className: c()(S.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: c()(S.hiddenDiv, f.input)
    }), function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(p.default, {
              className: S.cardIcon,
              type: d,
              flipped: n
            }), (0, o.jsx)(u.CardNumberElement, {
              options: {
                style: R,
                placeholder: _.default.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: e
              },
              className: x()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(u.CardExpiryElement, {
            options: {
              style: R,
              placeholder: _.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: x()
          });
        case "cardCvc":
          return (0, o.jsx)(u.CardCvcElement, {
            options: {
              style: R,
              placeholder: _.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: x()
          })
      }
    }(g), (0, o.jsx)(E.InputError, {
      error: h
    })]
  })
}