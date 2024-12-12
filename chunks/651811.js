IntlMessageFormat.__addLocaleData({
    locale: 'no',
    pluralRuleFunction: function (e, n) {
        return n ? 'other' : 1 == e ? 'one' : 'other';
    }
});
