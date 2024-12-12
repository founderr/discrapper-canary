IntlMessageFormat.__addLocaleData({
    locale: 'hu',
    pluralRuleFunction: function (e, n) {
        return n ? (1 == e || 5 == e ? 'one' : 'other') : 1 == e ? 'one' : 'other';
    }
});
