IntlMessageFormat.__addLocaleData({
    locale: 'hr',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = r[1] || '',
            s = !r[1],
            o = i.slice(-1),
            l = i.slice(-2),
            u = a.slice(-1),
            c = a.slice(-2);
        return n ? 'other' : (s && 1 == o && 11 != l) || (1 == u && 11 != c) ? 'one' : (s && o >= 2 && o <= 4 && (l < 12 || l > 14)) || (u >= 2 && u <= 4 && (c < 12 || c > 14)) ? 'few' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'hr-BA',
        parentLocale: 'hr'
    });
