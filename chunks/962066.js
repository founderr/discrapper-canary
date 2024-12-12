IntlMessageFormat.__addLocaleData({
    locale: 'vi',
    pluralRuleFunction: function (e, n) {
        return n ? (1 == e ? 'one' : 'other') : 'other';
    }
});
