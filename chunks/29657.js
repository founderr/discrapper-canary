var r = n(570596),
    i = n(294377),
    a = n(360518),
    o = n(691244);
e.exports = function () {
    var e = i('Symbol'),
        t = e && e.prototype,
        n = t && t.valueOf,
        s = a('toPrimitive');
    t &&
        !t[s] &&
        o(
            t,
            s,
            function (e) {
                return r(n, this);
            },
            { arity: 1 }
        );
};
