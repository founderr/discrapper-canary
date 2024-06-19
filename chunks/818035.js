t(653041), t(47120);
var n, a, i, l, r = t(442837),
  o = t(570140),
  c = t(461655);
let u = [];

function d(e) {
  let {
    payment: s
  } = e, t = c.Z.createFromServer(s), n = u.findIndex(e => e.id === s.id); - 1 === n ? (u.push(t), u.sort((e, s) => s.createdAt.getTime() - e.createdAt.getTime())) : u[n] = t, u = [...u]
}
class E extends(n = r.ZP.Store) {
  getPayment(e) {
    return u.find(s => s.id === e)
  }
  getPayments() {
    return u
  }
}
l = "PaymentStore", (i = "displayName") in(a = E) ? Object.defineProperty(a, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = l, s.Z = new E(o.Z, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: s
    } = e;
    for (let e of s) {
      let s = c.Z.createFromServer(e),
        t = u.findIndex(s => s.id === e.id); - 1 !== t ? u[t] = s : u.push(s)
    }
    u.sort((e, s) => s.createdAt.getTime() - e.createdAt.getTime()), u = [...u]
  },
  PAYMENT_UPDATE: d,
  BILLING_PAYMENT_FETCH_SUCCESS: d,
  LOGOUT: function() {
    u = []
  }
})