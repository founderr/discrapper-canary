IntlMessageFormat.__addLocaleData({
    locale: 'lt',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[1] || '',
            a = Number(r[0]) == e,
            s = a && r[0].slice(-1),
            o = a && r[0].slice(-2);
        return n ? 'other' : 1 == s && (o < 11 || o > 19) ? 'one' : s >= 2 && s <= 9 && (o < 11 || o > 19) ? 'few' : 0 != i ? 'many' : 'other';
    }
});
