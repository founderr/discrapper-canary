"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  l = s("153124"),
  r = s("622999"),
  o = s("655868"),
  d = s("754103"),
  u = s("689938"),
  c = s("282605");
(a || (a = {})).EXPIRATION_DATE = "expirationDate";
let S = [{
  fields: [{
    expirationDate: {
      name: "expirationDate",
      id: (0, l.uid)(),
      title: () => u.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
      autoComplete: "cc-exp",
      placeholder: () => u.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER,
      pattern: "\\d*",
      getClassNameForLayout: () => c.width50,
      renderInput: e => (0, n.jsx)(o.default, {
        ...e
      })
    }
  }.expirationDate]
}];
t.default = function(e) {
  let {
    onCardInfoChange: t,
    className: s,
    expirationDate: a,
    error: l
  } = e, [o, c] = i.useState(!1), [E, T] = i.useState(null), [_, I] = i.useState(a);
  return i.useEffect(() => {
    t({
      expirationDate: _
    }, null === E)
  }, [_, t, E]), (0, n.jsx)(d.default, {
    className: s,
    form: S,
    values: {
      expirationDate: _
    },
    errors: null != E ? {
      expirationDate: E
    } : {},
    formError: l,
    onFieldChange: e => {
      !o && "" !== e && c(!0), o && "" === e || !(0, r.validateExpiry)(e) ? T(u.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : T(null), I(e)
    }
  })
}