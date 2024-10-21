t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(200651);
t(192379);
var s = t(937615),
    r = t(653798),
    i = t(689938);
function l(e) {
    let { invoice: n } = e;
    return n.taxInclusive || n.tax <= 0
        ? null
        : (0, a.jsx)(r.R$, {
              label: i.Z.Messages.TAX_LABEL,
              value: (0, s.T4)(n.tax, n.currency)
          });
}
