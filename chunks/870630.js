t(47120), t(411104);
var n = t(735250),
  s = t(470079),
  l = t(160612),
  r = t(780384),
  o = t(481060),
  i = t(410030),
  c = t(231338),
  u = t(689938),
  d = t(528241),
  E = t(744481),
  A = t(724641),
  p = t(811974),
  _ = t(212545),
  N = t(184229),
  m = t(504309);
a.Z = function(e) {
  let a = (0, i.ZP)(),
    t = s.useRef(null),
    [h, T] = s.useState({});
  switch (s.useLayoutEffect(() => {
      let {
        current: e
      } = t;
      if (null == e) return;
      let a = window.getComputedStyle(e),
        n = window.getComputedStyle(e, "::placeholder"),
        s = a.getPropertyValue("font-family"),
        l = a.getPropertyValue("font-weight"),
        r = a.getPropertyValue("color"),
        o = a.getPropertyValue("font-size");
      T({
        base: {
          fontFamily: s,
          fontWeight: l,
          color: r,
          fontSize: o,
          backgroundColor: a.getPropertyValue("background-color"),
          padding: "12px",
          "::placeholder": {
            color: n.getPropertyValue("color")
          }
        }
      })
    }, [t]), e.type) {
    case c.He.PRZELEWY24: {
      let s = (0, r.wj)(a) ? N : m,
        {
          onNameChange: i,
          onEmailChange: c,
          onP24BankChange: E,
          p24BankValue: A,
          billingAddressInfo: p
        } = e;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: u.Z.Messages.EMAIL,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: t,
            name: u.Z.Messages.EMAIL,
            placeholder: u.Z.Messages.EMAIL,
            onChange: e => c(e),
            value: p.email
          })
        }), (0, n.jsx)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: u.Z.Messages.CREDIT_CARD_NAME,
          children: (0, n.jsx)(o.TextInput, {
            name: u.Z.Messages.CREDIT_CARD_NAME,
            placeholder: u.Z.Messages.CREDIT_CARD_NAME,
            onChange: e => i(e),
            value: p.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
          children: [(0, n.jsx)(l.P24BankElement, {
            options: {
              value: A,
              style: h
            },
            onChange: e => E(e.value)
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
    case c.He.EPS: {
      let {
        onAccountHolderNameChange: s,
        onEPSBankChange: i,
        epsBankValue: c,
        billingAddressInfo: p
      } = e, _ = (0, r.wj)(a) ? E : A;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: t,
            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => s(e),
            value: p.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: u.Z.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
          children: [(0, n.jsx)(l.EpsBankElement, {
            options: {
              value: c,
              style: h
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: _,
              alt: "EPS"
            })
          })]
        })]
      })
    }
    case c.He.IDEAL: {
      let {
        onAccountHolderNameChange: s,
        onIdealBankChange: i,
        idealBankValue: c,
        billingAddressInfo: E
      } = e, A = (0, r.wj)(a) ? p : _;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: t,
            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => s(e),
            value: E.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: u.Z.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
          children: [(0, n.jsx)(l.IdealBankElement, {
            options: {
              value: c,
              style: h
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: A,
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