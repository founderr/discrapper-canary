var n = r(161581),
    a = r(972277),
    o = r(740362),
    i = r(457507),
    _ = r(400957),
    E = r(769992),
    s = n.Symbol,
    c = a('wks'),
    I = E ? s.for || s : (s && s.withoutSetter) || i;
e.exports = function (e) {
    return !o(c, e) && (c[e] = _ && o(s, e) ? s[e] : I('Symbol.' + e)), c[e];
};
