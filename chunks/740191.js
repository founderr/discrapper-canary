IntlMessageFormat.__addLocaleData({
    locale: 'pl',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1],
            s = i.slice(-1),
            o = i.slice(-2);
        return n ? 'other' : 1 == e && a ? 'one' : a && s >= 2 && s <= 4 && (o < 12 || o > 14) ? 'few' : (a && 1 != i && (0 == s || 1 == s)) || (a && s >= 5 && s <= 9) || (a && o >= 12 && o <= 14) ? 'many' : 'other';
    }
});
