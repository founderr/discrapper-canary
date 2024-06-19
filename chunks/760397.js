t(411104);
var n, r, i, a, l, o, c, u, I, T = t(735250),
  d = t(470079);

function _(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}(o = n || (n = {})).THING = "Thing", o.PERSON = "Person", o.PRODUCT = "Product", o.OFFER = "Offer", o.AGGREGATE_OFFER = "AggregateOffer", o.RATING = "Rating", o.AGGREGATE_RATING = "AggregateRating", o.ORGANIZATION = "Organization", o.ITEM_PAGE = "ItemPage", o.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", o.QUANTITATIVE_VALUE = "QuantitativeValue";

function E(e, s) {
  return {
    "@type": e,
    ... function e(s) {
      return Object.keys(s).forEach(t => {
        null == s[t] ? delete s[t] : "object" == typeof s[t] && (s[t] = e(s[t]))
      }), s
    }(function(e) {
      let s;
      try {
        s = JSON.parse(JSON.stringify(e))
      } catch (e) {
        throw Error("[JSONLD] Invalid object format")
      }
      return s
    }(s))
  }
}

function S(e) {
  return E("Thing", e)
}

function O(e) {
  return E("Product", e)
}
O.Image = function(e) {
  if (null == e) return null;
  let s = e.filter(e => null != e && "" !== e);
  return 0 === s.length ? null : 1 === s.length ? s[0] : s
};

function A(e) {
  return E("Offer", e)
}

function N(e) {
  return E("QuantitativeValue", e)
}(c = r || (r = {})).DAMAGED = "http://schema.org/DamagedCondition", c.NEW = "http://schema.org/NewCondition", c.REFURBISHED = "http://schema.org/RefurbishedCondition", c.USED = "http://schema.org/UsedCondition", (u = i || (i = {})).DISCONTINUED = "http://schema.org/Discontinued", u.IN_STOCK = "http://schema.org/InStock", u.IN_STORE_ONLY = "http://schema.org/InStoreOnly", u.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", u.ONLINE_ONLY = "http://schema.org/OnlineOnly", u.OUT_OF_STOCK = "http://schema.org/OutOfStock", u.PREORDER = "http://schema.org/PreOrder", u.PRESALE = "http://schema.org/PreSale", u.SOLD_OUT = "http://schema.org/SoldOut", A.ItemConditions = r, A.ItemAvailability = i, (I = a || (a = {})).YEARLY = "ANN", I.MONTHLY = "MON", N.UnitCodes = a;
class R extends(l = d.Component) {
  render() {
    let {
      debug: e,
      data: s
    } = this.props, t = JSON.stringify({
      "@context": "http://schema.org",
      ...s
    });
    return (0, T.jsx)("script", {
      type: "application/ld+json",
      children: t
    })
  }
}
_(R, "Thing", S), _(R, "Brand", S), _(R, "Person", function(e) {
  return E("Person", e)
}), _(R, "Organization", function(e) {
  return E("Organization", e)
}), _(R, "ItemPage", function(e) {
  return E("ItemPage", e)
}), _(R, "Product", O), _(R, "Offer", A), _(R, "Rating", function(e) {
  return E("Rating", e)
}), _(R, "AggregateRating", function(e) {
  return E("AggregateRating", e)
}), _(R, "AggregateOffer", function(e) {
  return E("AggregateOffer", e)
}), _(R, "QuantitativeValue", N), _(R, "UnitPriceSpecification", function(e) {
  return E("UnitPriceSpecification", e)
}), s.Z = R