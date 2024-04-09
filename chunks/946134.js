"use strict";
a.r(t);
var s, r = a("442837"),
  l = a("570140");

function i(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function o(e, t) {
  let a = {};
  return e.forEach(e => {
    a[e] = t
  }), a
}
let n = {},
  u = new Date("2024-03-13").getTime(),
  c = new Date("2024-03-27").getTime(),
  d = ["1212569433839636530", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581147675205652", "1212581390936178768", "1212582298893946880", "1212582372877541427", "1212582452640350238"],
  h = ["1217624148080332820", "1217625289681801316", "1217625572168044604", "1217625794382401577", "1217626024540508170", "1217626509737459852", "1217627051217911848", "1217627230818009171"];
class m extends(s = r.default.PersistedStore) {
  initialize(e) {
    n = null != e ? e : {}
  }
  getState() {
    return n
  }
  getIsProductNew(e) {
    var t;
    return Date.now() < (null !== (t = n[e]) && void 0 !== t ? t : 0)
  }
}
i(m, "displayName", "CollectiblesProductFreshnessStore"), i(m, "persistKey", "CollectiblesProductFreshnessStore"), i(m, "migrations", [() => o(d, u), () => o(h, c), e => ({
  ...e,
  "1217626219651006495": c
})]), t.default = new m(l.default, {
  COLLECTIBLES_PRODUCT_DETAILS_CLOSE: function(e) {
    delete n[e.item.skuId]
  }
})