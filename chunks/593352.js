for (var r = n(293303), i = n(294377), a = n(96403), o = n(538769), s = n(360518), l = i('Symbol'), u = l.isWellKnownSymbol, c = i('Object', 'getOwnPropertyNames'), d = a(l.prototype.valueOf), _ = r('wks'), E = 0, f = c(l), h = f.length; E < h; E++)
    try {
        var p = f[E];
        o(l[p]) && s(p);
    } catch (e) {}
e.exports = function (e) {
    if (u && u(e)) return !0;
    try {
        for (var t = d(e), n = 0, r = c(_), i = r.length; n < i; n++) if (_[r[n]] == t) return !0;
    } catch (e) {}
    return !1;
};
