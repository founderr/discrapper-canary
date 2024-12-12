IntlMessageFormat.__addLocaleData({
    locale: 'da',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = Number(r[0]) == e;
        return n ? 'other' : 1 != e && (a || (0 != i && 1 != i)) ? 'other' : 'one';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'da-GL',
        parentLocale: 'da'
    });
