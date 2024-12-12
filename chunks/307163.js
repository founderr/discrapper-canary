IntlMessageFormat.__addLocaleData({
    locale: 'ko',
    pluralRuleFunction: function (e, n) {
        return 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ko-KP',
        parentLocale: 'ko'
    });
