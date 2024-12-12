var n,
    r = 'function' == typeof Map && Map.prototype ? Map : null,
    i = 'function' == typeof Set && Set.prototype ? Set : null;
!r &&
    (n = function (e) {
        return !1;
    });
var a = r ? Map.prototype.has : null,
    s = i ? Set.prototype.has : null;
!n &&
    !a &&
    (n = function (e) {
        return !1;
    }),
    (e.exports =
        n ||
        function (e) {
            if (!e || 'object' != typeof e) return !1;
            try {
                if ((a.call(e), s))
                    try {
                        s.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof r;
            } catch (e) {}
            return !1;
        });
