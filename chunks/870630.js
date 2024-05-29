"use strict";
a.r(t), a("47120"), a("411104");
var n = a("735250"),
  s = a("470079"),
  l = a("160612"),
  r = a("780384"),
  o = a("481060"),
  i = a("410030"),
  u = a("231338"),
  c = a("689938"),
  d = a("643139"),
  p = a("744481"),
  E = a("724641"),
  m = a("811974"),
  S = a("212545"),
  A = a("184229"),
  f = a("504309");
t.default = function(e) {
  let t = (0, i.default)(),
    a = s.useRef(null),
    [T, _] = s.useState({});
  switch (s.useLayoutEffect(() => {
      let {
        current: e
      } = a;
      if (null == e) return;
      let t = window.getComputedStyle(e),
        n = window.getComputedStyle(e, "::placeholder"),
        s = t.getPropertyValue("font-family"),
        l = t.getPropertyValue("font-weight"),
        r = t.getPropertyValue("color"),
        o = t.getPropertyValue("font-size");
      _({
        base: {
          fontFamily: s,
          fontWeight: l,
          color: r,
          fontSize: o,
          backgroundColor: t.getPropertyValue("background-color"),
          padding: "12px",
          "::placeholder": {
            color: n.getPropertyValue("color")
          }
        }
      })
    }, [a]), e.type) {
    case u.PaymentSourceTypes.PRZELEWY24: {
      let s = (0, r.isThemeDark)(t) ? A : f,
        {
          onNameChange: i,
          onEmailChange: u,
          onP24BankChange: p,
          p24BankValue: E,
          billingAddressInfo: m
        } = e;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.EMAIL,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.EMAIL,
            placeholder: c.default.Messages.EMAIL,
            onChange: e => u(e),
            value: m.email
          })
        }), (0, n.jsx)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.CREDIT_CARD_NAME,
          children: (0, n.jsx)(o.TextInput, {
            name: c.default.Messages.CREDIT_CARD_NAME,
            placeholder: c.default.Messages.CREDIT_CARD_NAME,
            onChange: e => i(e),
            value: m.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
          children: [(0, n.jsx)(l.P24BankElement, {
            options: {
              value: E,
              style: T
            },
            onChange: e => p(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: s,
              alt: "Przelewy24"
            })
          })]
        })]
      })
    }
    case u.PaymentSourceTypes.EPS: {
      let {
        onAccountHolderNameChange: s,
        onEPSBankChange: i,
        epsBankValue: u,
        billingAddressInfo: m
      } = e, S = (0, r.isThemeDark)(t) ? p : E;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => s(e),
            value: m.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
          children: [(0, n.jsx)(l.EpsBankElement, {
            options: {
              value: u,
              style: T
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: S,
              alt: "EPS"
            })
          })]
        })]
      })
    }
    case u.PaymentSourceTypes.IDEAL: {
      let {
        onAccountHolderNameChange: s,
        onIdealBankChange: i,
        idealBankValue: u,
        billingAddressInfo: p
      } = e, E = (0, r.isThemeDark)(t) ? m : S;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => s(e),
            value: p.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
          children: [(0, n.jsx)(l.IdealBankElement, {
            options: {
              value: u,
              style: T
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: E,
              alt: "iDeal"
            })
          })]
        })]
      })
    }
    default:
      throw Error("unknown payment source type")
  }
}