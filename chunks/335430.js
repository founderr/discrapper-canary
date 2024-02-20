"use strict";
n.r(t), n.d(t, {
  CurrencyWrapper: function() {
    return l
  },
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  a = n("575209");

function l(e) {
  let {
    currencies: t,
    className: n,
    children: r
  } = e;
  return t.length < 2 ? null : (0, s.jsx)("div", {
    className: n,
    children: r
  })
}
var i = function(e) {
  let {
    currencies: t,
    onChange: n,
    selectedCurrency: l,
    className: i,
    disabled: u = !1
  } = e;
  if (t.length < 2) return null;
  let c = t.map((e, t) => ({
    key: t,
    value: e,
    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
  }));
  return (0, s.jsx)(r.SingleSelect, {
    value: l,
    options: c,
    onChange: e => {
      null != e && n(e)
    },
    className: i,
    isDisabled: u
  })
}