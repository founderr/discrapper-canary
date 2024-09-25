var r = n(926515),
    i = n(24033),
    a = n(354848),
    o = n(332916),
    s = n(213265),
    l = TypeError;
e.exports = function (e, t) {
    var n = e.exec;
    if (a(n)) {
        var u = r(n, e, t);
        return null !== u && i(u), u;
    }
    if ('RegExp' === o(e)) return r(s, e, t);
    throw l('RegExp#exec called on incompatible receiver');
};
