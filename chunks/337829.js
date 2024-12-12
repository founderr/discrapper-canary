e.exports = function () {
    var e,
        n = this,
        i = n.constructor;
    if (!i.REVERSE_MAP)
        for (var a in ((i.REVERSE_MAP = {}), (e = r(618336)))) {
            if (!(a > 95) || !(a < 112)) e.hasOwnProperty(a) && (i.REVERSE_MAP[e[a]] = a);
        }
    return i.REVERSE_MAP;
};
