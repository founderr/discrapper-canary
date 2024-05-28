"use strict";
s.r(t), s.d(t, {
  CurrencyWrapper: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("991862");

function l(e) {
  let {
    currencies: t,
    className: s,
    children: n
  } = e;
  return t.length < 2 ? null : (0, a.jsx)("div", {
    className: s,
    children: n
  })
}
t.default = function(e) {
  let {
    currencies: t,
    onChange: s,
    selectedCurrency: l,
    className: u,
    disabled: i = !1
  } = e;
  if (t.length < 2) return null;
  let c = t.map((e, t) => ({
    key: t,
    value: e,
    label: "".concat(e.toUpperCase(), " - ").concat((0, r.getCurrencyFullName)(e))
  }));
  return (0, a.jsx)(n.SingleSelect, {
    value: l,
    options: c,
    onChange: e => {
      null != e && s(e)
    },
    className: u,
    isDisabled: i
  })
}