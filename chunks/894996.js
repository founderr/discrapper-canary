IntlMessageFormat.__addLocaleData({
    locale: 'ru',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1],
            s = i.slice(-1),
            o = i.slice(-2);
        return n ? 'other' : a && 1 == s && 11 != o ? 'one' : a && s >= 2 && s <= 4 && (o < 12 || o > 14) ? 'few' : (a && 0 == s) || (a && s >= 5 && s <= 9) || (a && o >= 11 && o <= 14) ? 'many' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-BY',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-KG',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-KZ',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-MD',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-UA',
        parentLocale: 'ru'
    });
