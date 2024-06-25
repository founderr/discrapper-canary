n(411104);
var s, i, l, a, r, o, c, u, d, E = n(735250),
  h = n(470079);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(o = s || (s = {})).THING = "Thing", o.PERSON = "Person", o.PRODUCT = "Product", o.OFFER = "Offer", o.AGGREGATE_OFFER = "AggregateOffer", o.RATING = "Rating", o.AGGREGATE_RATING = "AggregateRating", o.ORGANIZATION = "Organization", o.ITEM_PAGE = "ItemPage", o.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", o.QUANTITATIVE_VALUE = "QuantitativeValue";

function I(e, t) {
  return {
    "@type": e,
    ... function e(t) {
      return Object.keys(t).forEach(n => {
        null == t[n] ? delete t[n] : "object" == typeof t[n] && (t[n] = e(t[n]))
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

function m(e) {
  return I("Thing", e)
}

function T(e) {
  return I("Product", e)
}
T.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};

function g(e) {
  return I("Offer", e)
}

function p(e) {
  return I("QuantitativeValue", e)
}(c = i || (i = {})).DAMAGED = "http://schema.org/DamagedCondition", c.NEW = "http://schema.org/NewCondition", c.REFURBISHED = "http://schema.org/RefurbishedCondition", c.USED = "http://schema.org/UsedCondition", (u = l || (l = {})).DISCONTINUED = "http://schema.org/Discontinued", u.IN_STOCK = "http://schema.org/InStock", u.IN_STORE_ONLY = "http://schema.org/InStoreOnly", u.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", u.ONLINE_ONLY = "http://schema.org/OnlineOnly", u.OUT_OF_STOCK = "http://schema.org/OutOfStock", u.PREORDER = "http://schema.org/PreOrder", u.PRESALE = "http://schema.org/PreSale", u.SOLD_OUT = "http://schema.org/SoldOut", g.ItemConditions = i, g.ItemAvailability = l, (d = a || (a = {})).YEARLY = "ANN", d.MONTHLY = "MON", p.UnitCodes = a;
class N extends(r = h.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, n = JSON.stringify({
      "@context": "http://schema.org",
      ...t
    });
    return (0, E.jsx)("script", {
      type: "application/ld+json",
      children: n
    })
  }
}
_(N, "Thing", m), _(N, "Brand", m), _(N, "Person", function(e) {
  return I("Person", e)
}), _(N, "Organization", function(e) {
  return I("Organization", e)
}), _(N, "ItemPage", function(e) {
  return I("ItemPage", e)
}), _(N, "Product", T), _(N, "Offer", g), _(N, "Rating", function(e) {
  return I("Rating", e)
}), _(N, "AggregateRating", function(e) {
  return I("AggregateRating", e)
}), _(N, "AggregateOffer", function(e) {
  return I("AggregateOffer", e)
}), _(N, "QuantitativeValue", p), _(N, "UnitPriceSpecification", function(e) {
  return I("UnitPriceSpecification", e)
}), t.Z = N