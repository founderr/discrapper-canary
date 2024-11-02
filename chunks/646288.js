n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(937615),
    r = n(388032);
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return r.intl.string(r.t.RWouSU);
    if (e.premium && !n) return r.intl.string(r.t.QGUSz8);
    let l = e.getPrice(null, t);
    if (null != l) return l.amount > 0 ? (0, i.T4)(l.amount, l.currency) : r.intl.string(r.t.QQsaCQ);
    return r.intl.string(r.t.RWouSU);
}
