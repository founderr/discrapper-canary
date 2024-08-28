var r = n(173850),
    i = n(526988),
    a = n(962557),
    s = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : a
              ? s(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
