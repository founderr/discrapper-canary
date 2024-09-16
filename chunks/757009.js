var n = s(785902),
    l = s(800128),
    i = s(256098),
    a = s(290677);
e.exports = function (e, t) {
    return function (s, r) {
        var o = a(s) ? n : l,
            c = t ? t() : {};
        return o(s, e, i(r, 2), c);
    };
};
