"use strict";
s.r(t), s("411104");
var n, a, r, l, i, u, o, d, c, I = s("735250"),
  T = s("470079");

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(u = n || (n = {})).THING = "Thing", u.PERSON = "Person", u.PRODUCT = "Product", u.OFFER = "Offer", u.AGGREGATE_OFFER = "AggregateOffer", u.RATING = "Rating", u.AGGREGATE_RATING = "AggregateRating", u.ORGANIZATION = "Organization", u.ITEM_PAGE = "ItemPage", u.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", u.QUANTITATIVE_VALUE = "QuantitativeValue";

function f(e, t) {
  return {
    "@type": e,
    ... function e(t) {
      return Object.keys(t).forEach(s => {
        null == t[s] ? delete t[s] : "object" == typeof t[s] && (t[s] = e(t[s]))
      }), t
    }(function(e) {
      let t;
      try {
        t = JSON.parse(JSON.stringify(e))
      } catch (e) {
        throw Error("[JSONLD] Invalid object format")
      }
      return t
    }(t))
  }
}

function _(e) {
  return f("Thing", e)
}

function S(e) {
  return f("Product", e)
}
S.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};

function A(e) {
  return f("Offer", e)
}

function O(e) {
  return f("QuantitativeValue", e)
}(o = a || (a = {})).DAMAGED = "http://schema.org/DamagedCondition", o.NEW = "http://schema.org/NewCondition", o.REFURBISHED = "http://schema.org/RefurbishedCondition", o.USED = "http://schema.org/UsedCondition", (d = r || (r = {})).DISCONTINUED = "http://schema.org/Discontinued", d.IN_STOCK = "http://schema.org/InStock", d.IN_STORE_ONLY = "http://schema.org/InStoreOnly", d.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", d.ONLINE_ONLY = "http://schema.org/OnlineOnly", d.OUT_OF_STOCK = "http://schema.org/OutOfStock", d.PREORDER = "http://schema.org/PreOrder", d.PRESALE = "http://schema.org/PreSale", d.SOLD_OUT = "http://schema.org/SoldOut", A.ItemConditions = a, A.ItemAvailability = r, (c = l || (l = {})).YEARLY = "ANN", c.MONTHLY = "MON", O.UnitCodes = l;
class R extends(i = T.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, s = JSON.stringify({
      "@context": "http://schema.org",
      ...t
    });
    return (0, I.jsx)("script", {
      type: "application/ld+json",
      children: s
    })
  }
}
E(R, "Thing", _), E(R, "Brand", _), E(R, "Person", function(e) {
  return f("Person", e)
}), E(R, "Organization", function(e) {
  return f("Organization", e)
}), E(R, "ItemPage", function(e) {
  return f("ItemPage", e)
}), E(R, "Product", S), E(R, "Offer", A), E(R, "Rating", function(e) {
  return f("Rating", e)
}), E(R, "AggregateRating", function(e) {
  return f("AggregateRating", e)
}), E(R, "AggregateOffer", function(e) {
  return f("AggregateOffer", e)
}), E(R, "QuantitativeValue", O), E(R, "UnitPriceSpecification", function(e) {
  return f("UnitPriceSpecification", e)
}), t.default = R