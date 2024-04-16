"use strict";
a.r(t), a("47120");
var n, s, l, r, o = a("735250"),
  i = a("470079"),
  u = a("452079"),
  d = a("120356"),
  c = a.n(d),
  E = a("481060"),
  m = a("912454"),
  p = a("689938"),
  S = a("38045"),
  _ = a("717897");
(l = n || (n = {})).CardNumber = "cardNumber", l.CardExpiry = "cardExpiry", l.CardCvc = "cardCvc", (r = s || (s = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
t.default = function(e) {
  let t = i.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: s,
      onFocus: l,
      onBlur: r
    } = e,
    [d, f] = i.useState(m.IconTypes.UNKNOWN),
    [N, A] = i.useState(!1),
    [I, C] = i.useState(!1),
    [T, h] = i.useState(null),
    [y, R] = i.useState({}),
    L = (0, u.useElements)(),
    P = i.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(u.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = L.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = L.getElement(u.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [L, a]),
    g = i.useCallback(e => {
      !I && !e.empty && C(!0), null != s && s(e.complete), null != e.error && A(!1)
    }, [I, s]),
    M = i.useCallback(() => {
      A(!0), null == l || l()
    }, [l]),
    D = i.useCallback(() => {
      A(!1), null == r || r()
    }, [r]),
    O = i.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(u.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            d !== e.brand && f(e.brand), e.empty && I ? h(p.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? h(p.default.Messages.CREDIT_CARD_ERROR_NUMBER) : h(null), g(e)
          }), e.on("focus", M), e.on("blur", D);
          break
        }
        case "cardExpiry": {
          let e = L.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && I ? h(p.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : h(null), g(e)
          }), e.on("focus", M), e.on("blur", D);
          break
        }
        case "cardCvc": {
          let e = L.getElement(u.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && I ? h(p.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : h(null), g(e)
          }), e.on("focus", M), e.on("blur", D)
        }
      }
    }, [D, g, M, d, L, I, a]);

  function b() {
    return c()(S.cardInput, {
      [S.cardInputError]: null !== T,
      [S.cardInputFocused]: N,
      [S.cardNumberInput]: "cardNumber" === a
    })
  }
  return i.useEffect(() => (O(), () => {
    P()
  }), [O, P]), i.useLayoutEffect(() => {
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
    className: c()(S.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: c()(S.hiddenDiv, _.input)
    }), function() {
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(m.default, {
              className: S.cardIcon,
              type: d,
              flipped: n
            }), (0, o.jsx)(u.CardNumberElement, {
              options: {
                style: y,
                placeholder: p.default.Messages.PAYMENT_SOURCE_CARD_NUMBER
              },
              className: b()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(u.CardExpiryElement, {
            options: {
              style: y,
              placeholder: p.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: b()
          });
        case "cardCvc":
          return (0, o.jsx)(u.CardCvcElement, {
            options: {
              style: y,
              placeholder: p.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: b()
          })
      }
    }(), (0, o.jsx)(E.InputError, {
      error: T
    })]
  })
}