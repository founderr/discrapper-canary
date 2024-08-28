var n = r(97131).f;
e.exports = function (e, t, r) {
    r in e ||
        n(e, r, {
            configurable: !0,
            get: function () {
                return t[r];
            },
            set: function (e) {
                t[r] = e;
            }
        });
};
