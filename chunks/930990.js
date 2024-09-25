var r = n(545576),
    i = n(4340),
    a = n(641236),
    o = n(325008),
    s = a('species');
e.exports = function (e) {
    var t = r(e);
    o &&
        t &&
        !t[s] &&
        i(t, s, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
