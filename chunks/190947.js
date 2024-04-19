"use strict";
n.r(t), n.d(t, {
  CurrencyWrapper: function() {
    return r
  }
});
var i = n("735250");
n("470079");
var s = n("481060"),
  l = n("991862");

function r(e) {
  let {
    currencies: t,
    className: n,
    children: s
  } = e;
  return t.length < 2 ? null : (0, i.jsx)("div", {
    className: n,
    children: s
  })
}
t.default = function(e) {
  let {
    currencies: t,
    onChange: n,
    selectedCurrency: r,
    className: a,
    disabled: u = !1
  } = e;
  if (t.length < 2) return null;
  let o = t.map((e, t) => ({
    key: t,
    value: e,
    label: "".concat(e.toUpperCase(), " - ").concat((0, l.getCurrencyFullName)(e))
  }));
  return (0, i.jsx)(s.SingleSelect, {
    value: r,
    options: o,
    onChange: e => {
      null != e && n(e)
    },
    className: a,
    isDisabled: u
  })
}