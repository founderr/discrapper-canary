t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(200651);
t(192379);
var i = t(937615),
    a = t(653798),
    l = t(388032);
function s(e) {
    let { invoice: n } = e;
    return n.taxInclusive || n.tax <= 0
        ? null
        : (0, r.jsx)(a.R$, {
              label: l.intl.string(l.t.jiRvCw),
              value: (0, i.T4)(n.tax, n.currency)
          });
}
