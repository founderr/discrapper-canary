IntlMessageFormat.__addLocaleData({
    locale: 'bg',
    pluralRuleFunction: function (e, n) {
        return n ? 'other' : 1 == e ? 'one' : 'other';
    }
});
