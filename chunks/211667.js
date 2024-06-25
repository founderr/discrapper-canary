t(47120);
var n, a = t(735250),
  i = t(470079),
  r = t(153124),
  o = t(622999),
  l = t(655868),
  c = t(754103),
  d = t(689938),
  _ = t(538298);
(n || (n = {})).EXPIRATION_DATE = "expirationDate";
let E = [{
  fields: [{
    expirationDate: {
      name: "expirationDate",
      id: (0, r.hQ)(),
      title: () => d.Z.Messages.CREDIT_CARD_EXPIRATION_DATE,
      autoComplete: "cc-exp",
      placeholder: () => d.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER,
      pattern: "\\d*",
      getClassNameForLayout: () => _.width50,
      renderInput: e => (0, a.jsx)(l.Z, {
        ...e
      })
    }
  }.expirationDate]
}];
s.Z = function(e) {
  let {
    onCardInfoChange: s,
    className: t,
    expirationDate: n,
    error: r
  } = e, [l, _] = i.useState(!1), [u, T] = i.useState(null), [S, I] = i.useState(n);
  return i.useEffect(() => {
    s({
      expirationDate: S
    }, null === u)
  }, [S, s, u]), (0, a.jsx)(c.Z, {
    className: t,
    form: E,
    values: {
      expirationDate: S
    },
    errors: null != u ? {
      expirationDate: u
    } : {},
    formError: r,
    onFieldChange: e => {
      !l && "" !== e && _(!0), l && "" === e || !(0, o.eH)(e) ? T(d.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : T(null), I(e)
    }
  })
}