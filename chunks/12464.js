"use strict";
a.r(t), a("47120");
var n, s, l, r, o = a("735250"),
  i = a("470079"),
  u = a("160612"),
  c = a("120356"),
  d = a.n(c),
  p = a("481060"),
  E = a("818083"),
  m = a("912454"),
  S = a("689938"),
  A = a("589695"),
  f = a("12349");
(l = n || (n = {})).CardNumber = "cardNumber", l.CardExpiry = "cardExpiry", l.CardCvc = "cardCvc", (r = s || (s = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
let T = (0, E.createExperiment)({
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
    [c, E] = i.useState(m.IconTypes.UNKNOWN),
    [_, y] = i.useState(!1),
    [N, P] = i.useState(!1),
    [C, h] = i.useState(null),
    [I, R] = i.useState({}),
    b = (0, u.useElements)(),
    {
      disableLink: M
    } = T.useExperiment({
      location: "adding_new_card_modal"
    }, {
      autoTrackExposure: !0
    }),
    O = i.useCallback(() => {
      if (null != b) switch (a) {
        case "cardNumber": {
          let e = b.getElement(u.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = b.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = b.getElement(u.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [b, a]),
    g = i.useCallback(e => {
      !N && !e.empty && P(!0), null != s && s(e.complete), null != e.error && y(!1)
    }, [N, s]),
    L = i.useCallback(() => {
      y(!0), null == l || l()
    }, [l]),
    D = i.useCallback(() => {
      y(!1), null == r || r()
    }, [r]),
    v = i.useCallback(() => {
      if (null != b) switch (a) {
        case "cardNumber": {
          let e = b.getElement(u.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            c !== e.brand && E(e.brand), e.empty && N ? h(S.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? h(S.default.Messages.CREDIT_CARD_ERROR_NUMBER) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardExpiry": {
          let e = b.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && N ? h(S.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardCvc": {
          let e = b.getElement(u.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && N ? h(S.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D)
        }
      }
    }, [D, g, L, c, b, N, a]);

  function x() {
    return d()(A.cardInput, {
      [A.cardInputError]: null !== C,
      [A.cardInputFocused]: _,
      [A.cardNumberInput]: "cardNumber" === a
    })
  }
  return i.useEffect(() => (v(), () => {
    O()
  }), [v, O]), i.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      s = a.getPropertyValue("font-family"),
      l = a.getPropertyValue("font-weight"),
      r = a.getPropertyValue("color");
    R({
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
    className: d()(A.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: d()(A.hiddenDiv, f.input)
    }), function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(m.default, {
              className: A.cardIcon,
              type: c,
              flipped: n
            }), (0, o.jsx)(u.CardNumberElement, {
              options: {
                style: I,
                placeholder: S.default.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: e
              },
              className: x()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(u.CardExpiryElement, {
            options: {
              style: I,
              placeholder: S.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: x()
          });
        case "cardCvc":
          return (0, o.jsx)(u.CardCvcElement, {
            options: {
              style: I,
              placeholder: S.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: x()
          })
      }
    }(M), (0, o.jsx)(p.InputError, {
      error: C
    })]
  })
}