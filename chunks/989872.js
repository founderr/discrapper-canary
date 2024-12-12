var i = r(794399),
    a = r(741346),
    s = r(956656),
    o = r(900013),
    l = s(function (e, n) {
        if (null == e) return [];
        var r = n.length;
        return r > 1 && o(e, n[0], n[1]) ? (n = []) : r > 2 && o(n[0], n[1], n[2]) && (n = [n[0]]), a(e, i(n, 1), []);
    });
e.exports = l;
