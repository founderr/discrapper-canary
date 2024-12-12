IntlMessageFormat.__addLocaleData({
    locale: 'sv',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = !r[1],
            a = Number(r[0]) == e,
            s = a && r[0].slice(-1),
            o = a && r[0].slice(-2);
        return n ? ((1 == s || 2 == s) && 11 != o && 12 != o ? 'one' : 'other') : 1 == e && i ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'sv-AX',
        parentLocale: 'sv'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'sv-FI',
        parentLocale: 'sv'
    });
