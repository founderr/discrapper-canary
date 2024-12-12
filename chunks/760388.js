IntlMessageFormat.__addLocaleData({
    locale: 'fi',
    pluralRuleFunction: function (e, n) {
        var r = !String(e).split('.')[1];
        return n ? 'other' : 1 == e && r ? 'one' : 'other';
    }
});
