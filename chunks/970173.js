var r = n(192291),
    i = n(49693),
    a = n(959318),
    s = r.aTypedArray;
(0, r.exportTypedArrayMethod)('at', function (e) {
    var t = s(this),
        n = i(t),
        r = a(e),
        o = r >= 0 ? r : n + r;
    return o < 0 || o >= n ? void 0 : t[o];
});
