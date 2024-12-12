IntlMessageFormat.__addLocaleData({
    locale: 'el',
    pluralRuleFunction: function (e, n) {
        return n ? 'other' : 1 == e ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'el-CY',
        parentLocale: 'el'
    });
