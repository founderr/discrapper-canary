IntlMessageFormat.__addLocaleData({
    locale: 'ro',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = !r[1],
            a = Number(r[0]) == e && r[0].slice(-2);
        return n ? (1 == e ? 'one' : 'other') : 1 == e && i ? 'one' : !i || 0 == e || (1 != e && a >= 1 && a <= 19) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ro-MD',
        parentLocale: 'ro'
    });
