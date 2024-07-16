a.d(n, {
  Z: function() {
return i;
  }
});
var s = a(735250);
a(470079);
var t = a(937615),
  r = a(653798),
  l = a(689938);

function i(e) {
  let {
invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, s.jsx)(r.R$, {
label: l.Z.Messages.TAX_LABEL,
value: (0, t.T4)(n.tax, n.currency)
  });
}