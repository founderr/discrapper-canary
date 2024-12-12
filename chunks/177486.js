IntlMessageFormat.__addLocaleData({
    locale: 'cs',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1];
        return n ? 'other' : 1 == e && a ? 'one' : i >= 2 && i <= 4 && a ? 'few' : a ? 'other' : 'many';
    }
});
