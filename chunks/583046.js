"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(442837),
  r = n(509545),
  s = n(212895),
  o = n(474936),
  a = n(231338);

function l(e) {
  var t, n;
  let {
    activeSubscription: l,
    skuIDs: u,
    paymentSourceId: _,
    isGift: c
  } = e;
  u = u.filter(e => e !== o.Si.NONE);
  let d = (0, i.e7)([r.Z], () => {
      let e = r.Z.getPlanIdsForSkus(u).filter(e => !c || o.dJ.has(e));
      return e.length > 0 ? r.Z.get(e[0]) : null
    }),
    E = null == d ? [] : (0, s.DE)(d.id, _, c),
    I = null !== (n = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : a.pK.USD;
  return {
    ...(0, s.gr)(I, null == d ? void 0 : d.id, _, c, u),
    currencies: E
  }
}