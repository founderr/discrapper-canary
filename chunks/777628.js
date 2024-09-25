var r = n(726433),
    i = n(729605),
    a = n(937443).f,
    o = n(960081),
    s = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    l = function (e) {
        try {
            return a(e);
        } catch (e) {
            return o(s);
        }
    };
e.exports.f = function (e) {
    return s && 'Window' === r(e) ? l(e) : a(i(e));
};
