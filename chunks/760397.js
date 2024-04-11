"use strict";
s.r(t), s("411104");
var a, i, r, l, n, o, u, d, c, _ = s("735250"),
  E = s("470079");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(o = a || (a = {})).THING = "Thing", o.PERSON = "Person", o.PRODUCT = "Product", o.OFFER = "Offer", o.AGGREGATE_OFFER = "AggregateOffer", o.RATING = "Rating", o.AGGREGATE_RATING = "AggregateRating", o.ORGANIZATION = "Organization", o.ITEM_PAGE = "ItemPage", o.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", o.QUANTITATIVE_VALUE = "QuantitativeValue";

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

function T(e) {
  return f("Thing", e)
}

function I(e) {
  return f("Product", e)
}
I.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};

function R(e) {
  return f("Offer", e)
}

function S(e) {
  return f("QuantitativeValue", e)
}(u = i || (i = {})).DAMAGED = "http://schema.org/DamagedCondition", u.NEW = "http://schema.org/NewCondition", u.REFURBISHED = "http://schema.org/RefurbishedCondition", u.USED = "http://schema.org/UsedCondition", (d = r || (r = {})).DISCONTINUED = "http://schema.org/Discontinued", d.IN_STOCK = "http://schema.org/InStock", d.IN_STORE_ONLY = "http://schema.org/InStoreOnly", d.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", d.ONLINE_ONLY = "http://schema.org/OnlineOnly", d.OUT_OF_STOCK = "http://schema.org/OutOfStock", d.PREORDER = "http://schema.org/PreOrder", d.PRESALE = "http://schema.org/PreSale", d.SOLD_OUT = "http://schema.org/SoldOut", R.ItemConditions = i, R.ItemAvailability = r, (c = l || (l = {})).YEARLY = "ANN", c.MONTHLY = "MON", S.UnitCodes = l;
class p extends(n = E.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, s = JSON.stringify({
      "@context": "http://schema.org",
      ...t
    });
    return (0, _.jsx)("script", {
      type: "application/ld+json",
      children: s
    })
  }
}
C(p, "Thing", T), C(p, "Brand", T), C(p, "Person", function(e) {
  return f("Person", e)
}), C(p, "Organization", function(e) {
  return f("Organization", e)
}), C(p, "ItemPage", function(e) {
  return f("ItemPage", e)
}), C(p, "Product", I), C(p, "Offer", R), C(p, "Rating", function(e) {
  return f("Rating", e)
}), C(p, "AggregateRating", function(e) {
  return f("AggregateRating", e)
}), C(p, "AggregateOffer", function(e) {
  return f("AggregateOffer", e)
}), C(p, "QuantitativeValue", S), C(p, "UnitPriceSpecification", function(e) {
  return f("UnitPriceSpecification", e)
}), t.default = p