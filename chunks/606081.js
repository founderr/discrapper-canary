n(411104);
var i,
    r,
    l,
    a,
    o,
    s,
    c,
    d,
    u,
    h = n(200651),
    m = n(192379);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((s = i || (i = {})).THING = 'Thing'), (s.PERSON = 'Person'), (s.PRODUCT = 'Product'), (s.OFFER = 'Offer'), (s.AGGREGATE_OFFER = 'AggregateOffer'), (s.RATING = 'Rating'), (s.AGGREGATE_RATING = 'AggregateRating'), (s.ORGANIZATION = 'Organization'), (s.ITEM_PAGE = 'ItemPage'), (s.UNIT_PRICE_SPECIFICATION = 'UnitPriceSpecification'), (s.QUANTITATIVE_VALUE = 'QuantitativeValue');
function g(e, t) {
    return {
        '@type': e,
        ...(function e(t) {
            return (
                Object.keys(t).forEach((n) => {
                    null == t[n] ? delete t[n] : 'object' == typeof t[n] && (t[n] = e(t[n]));
                }),
                t
            );
        })(
            (function (e) {
                let t;
                try {
                    t = JSON.parse(JSON.stringify(e));
                } catch (e) {
                    throw Error('[JSONLD] Invalid object format');
                }
                return t;
            })(t)
        )
    };
}
function f(e) {
    return g('Thing', e);
}
function _(e) {
    return g('Product', e);
}
_.Image = function (e) {
    if (null == e) return null;
    let t = e.filter((e) => null != e && '' !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
function E(e) {
    return g('Offer', e);
}
function I(e) {
    return g('QuantitativeValue', e);
}
((c = r || (r = {})).DAMAGED = 'http://schema.org/DamagedCondition'), (c.NEW = 'http://schema.org/NewCondition'), (c.REFURBISHED = 'http://schema.org/RefurbishedCondition'), (c.USED = 'http://schema.org/UsedCondition'), ((d = l || (l = {})).DISCONTINUED = 'http://schema.org/Discontinued'), (d.IN_STOCK = 'http://schema.org/InStock'), (d.IN_STORE_ONLY = 'http://schema.org/InStoreOnly'), (d.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability'), (d.ONLINE_ONLY = 'http://schema.org/OnlineOnly'), (d.OUT_OF_STOCK = 'http://schema.org/OutOfStock'), (d.PREORDER = 'http://schema.org/PreOrder'), (d.PRESALE = 'http://schema.org/PreSale'), (d.SOLD_OUT = 'http://schema.org/SoldOut'), (E.ItemConditions = r), (E.ItemAvailability = l), ((u = a || (a = {})).YEARLY = 'ANN'), (u.MONTHLY = 'MON'), (I.UnitCodes = a);
class C extends (o = m.Component) {
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify({
                '@context': 'http://schema.org',
                ...t
            });
        return (0, h.jsx)('script', {
            type: 'application/ld+json',
            children: n
        });
    }
}
p(C, 'Thing', f),
    p(C, 'Brand', f),
    p(C, 'Person', function (e) {
        return g('Person', e);
    }),
    p(C, 'Organization', function (e) {
        return g('Organization', e);
    }),
    p(C, 'ItemPage', function (e) {
        return g('ItemPage', e);
    }),
    p(C, 'Product', _),
    p(C, 'Offer', E),
    p(C, 'Rating', function (e) {
        return g('Rating', e);
    }),
    p(C, 'AggregateRating', function (e) {
        return g('AggregateRating', e);
    }),
    p(C, 'AggregateOffer', function (e) {
        return g('AggregateOffer', e);
    }),
    p(C, 'QuantitativeValue', I),
    p(C, 'UnitPriceSpecification', function (e) {
        return g('UnitPriceSpecification', e);
    }),
    (t.Z = C);
