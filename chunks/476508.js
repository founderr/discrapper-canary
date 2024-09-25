var r = n(43740),
    i = n(548828),
    a = n(809235),
    o = r(r.bind);
e.exports = function (e, t) {
    return (
        i(e),
        void 0 === t
            ? e
            : a
              ? o(e, t)
              : function () {
                    return e.apply(t, arguments);
                }
    );
};
