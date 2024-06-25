n(653041), n(47120);
var s, a, i, o, r = n(442837),
  l = n(570140),
  c = n(461655);
let d = [];

function u(e) {
  let {
    payment: t
  } = e, n = c.Z.createFromServer(t), s = d.findIndex(e => e.id === t.id); - 1 === s ? (d.push(n), d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : d[s] = n, d = [...d]
}
class _ extends(s = r.ZP.Store) {
  getPayment(e) {
    return d.find(t => t.id === e)
  }
  getPayments() {
    return d
  }
}
o = "PaymentStore", (i = "displayName") in(a = _) ? Object.defineProperty(a, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = o, t.Z = new _(l.Z, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = c.Z.createFromServer(e),
        n = d.findIndex(t => t.id === e.id); - 1 !== n ? d[n] = t : d.push(t)
    }
    d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), d = [...d]
  },
  PAYMENT_UPDATE: u,
  BILLING_PAYMENT_FETCH_SUCCESS: u,
  LOGOUT: function() {
    d = []
  }
})