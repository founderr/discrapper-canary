var r = n(192291),
    i = n(49693),
    a = n(959318),
    o = r.aTypedArray;
(0, r.exportTypedArrayMethod)('at', function (e) {
    var t = o(this),
        n = i(t),
        r = a(e),
        s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : t[s];
});
