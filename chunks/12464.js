t(47120);
var n, s, r, l, o = t(735250),
  i = t(470079),
  c = t(160612),
  u = t(120356),
  d = t.n(u),
  E = t(692547),
  _ = t(481060),
  m = t(219929),
  p = t(689938),
  A = t(858594),
  N = t(216315);
(r = n || (n = {})).CardNumber = 'cardNumber', r.CardExpiry = 'cardExpiry', r.CardCvc = 'cardCvc', (l = s || (s = {})).Change = 'change', l.Focus = 'focus', l.Blur = 'blur';
a.Z = function(e) {
  let a = i.useRef(null),
{
  stripeType: t,
  flipped: n,
  updateCompleted: s,
  onFocus: r,
  onBlur: l
} = e,
[u, h] = i.useState(m.Qy.UNKNOWN),
[T, I] = i.useState(!1),
[S, C] = i.useState(!1),
[P, R] = i.useState(null),
[b, f] = i.useState({}),
y = (0, c.useElements)(),
{
  theme: M
} = (0, _.useThemeContext)(),
g = i.useCallback(() => {
  if (null != y)
    switch (t) {
      case 'cardNumber': {
        let e = y.getElement(c.CardNumberElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
        break;
      }
      case 'cardExpiry': {
        let e = y.getElement(c.CardExpiryElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
        break;
      }
      case 'cardCvc': {
        let e = y.getElement(c.CardCvcElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
      }
    }
}, [
  y,
  t
]),
O = i.useCallback(e => {
  !S && !e.empty && C(!0), null != s && s(e.complete), null != e.error && I(!1);
}, [
  S,
  s
]),
L = i.useCallback(() => {
  I(!0), null == r || r();
}, [r]),
v = i.useCallback(() => {
  I(!1), null == l || l();
}, [l]),
D = i.useCallback(() => {
  if (null != y)
    switch (t) {
      case 'cardNumber': {
        let e = y.getElement(c.CardNumberElement);
        if (null == e)
          return;
        e.on('change', e => {
          u !== e.brand && h(e.brand), e.empty && S ? R(p.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? R(p.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : R(null), O(e);
        }), e.on('focus', L), e.on('blur', v);
        break;
      }
      case 'cardExpiry': {
        let e = y.getElement(c.CardExpiryElement);
        if (null == e)
          return;
        e.on('change', e => {
          null != e.error || e.empty && S ? R(p.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : R(null), O(e);
        }), e.on('focus', L), e.on('blur', v);
        break;
      }
      case 'cardCvc': {
        let e = y.getElement(c.CardCvcElement);
        if (null == e)
          return;
        e.on('change', e => {
          null != e.error || e.empty && S ? R(p.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : R(null), O(e);
        }), e.on('focus', L), e.on('blur', v);
      }
    }
}, [
  v,
  O,
  L,
  u,
  y,
  S,
  t
]);

  function x() {
return d()(A.cardInput, {
  [A.cardInputError]: null !== P,
  [A.cardInputFocused]: T,
  [A.cardNumberInput]: 'cardNumber' === t
});
  }
  return i.useEffect(() => (D(), () => {
g();
  }), [
D,
g
  ]), i.useLayoutEffect(() => {
let {
  current: e
} = a;
if (null == e)
  return;
let t = window.getComputedStyle(e),
  n = window.getComputedStyle(e, '::placeholder'),
  s = t.getPropertyValue('font-family'),
  r = t.getPropertyValue('font-weight'),
  l = E.Z.colors.TEXT_PRIMARY.resolve({
    theme: M,
    saturation: 1
  }).hex();
f({
  base: {
    fontFamily: s,
    fontWeight: r,
    color: l,
    fontSize: t.getPropertyValue('font-size'),
    '::placeholder': {
      color: n.getPropertyValue('color')
    }
  }
});
  }, [
a,
M
  ]), (0, o.jsxs)('div', {
className: d()(A.cardNumberWrapper),
'data-stripe-type': t,
children: [
  (0, o.jsx)('div', {
    ref: a,
    className: d()(A.hiddenDiv, N.input)
  }),
  function() {
    switch (t) {
      case 'cardNumber':
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(m.ZP, {
              className: A.cardIcon,
              type: u,
              flipped: n
            }),
            (0, o.jsx)(c.CardNumberElement, {
              options: {
                style: b,
                placeholder: p.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: !1
              },
              className: x()
            })
          ]
        });
      case 'cardExpiry':
        return (0, o.jsx)(c.CardExpiryElement, {
          options: {
            style: b,
            placeholder: p.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
          },
          className: x()
        });
      case 'cardCvc':
        return (0, o.jsx)(c.CardCvcElement, {
          options: {
            style: b,
            placeholder: p.Z.Messages.CREDIT_CARD_SECURITY_CODE
          },
          className: x()
        });
    }
  }(),
  (0, o.jsx)(_.InputError, {
    error: P
  })
]
  });
};