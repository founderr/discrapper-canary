n.default = {
    locale: 'en',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = !r[1],
            a = Number(r[0]) == e,
            s = a && r[0].slice(-1),
            o = a && r[0].slice(-2);
        return n ? (1 == s && 11 != o ? 'one' : 2 == s && 12 != o ? 'two' : 3 == s && 13 != o ? 'few' : 'other') : 1 == e && i ? 'one' : 'other';
    }
};
