IntlMessageFormat.__addLocaleData({
    locale: 'tr',
    pluralRuleFunction: function (e, n) {
        return n ? 'other' : 1 == e ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'tr-CY',
        parentLocale: 'tr'
    });
