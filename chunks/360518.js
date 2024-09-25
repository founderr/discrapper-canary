var r = n(668530),
    i = n(293303),
    a = n(141603),
    o = n(348343),
    s = n(828596),
    l = n(756234),
    u = r.Symbol,
    c = i('wks'),
    d = l ? u.for || u : (u && u.withoutSetter) || o;
e.exports = function (e) {
    return !a(c, e) && (c[e] = s && a(u, e) ? u[e] : d('Symbol.' + e)), c[e];
};
