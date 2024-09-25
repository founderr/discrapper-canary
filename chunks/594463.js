var r,
    i,
    a,
    o = n(821819),
    s = n(735471),
    l = n(982665),
    u = n(224106),
    c = n(646948),
    d = n(691244),
    _ = n(360518),
    E = n(414629),
    f = _('iterator'),
    h = !1;
[].keys && ('next' in (a = [].keys()) ? (i = c(c(a))) !== Object.prototype && (r = i) : (h = !0)),
    !l(r) ||
    o(function () {
        var e = {};
        return r[f].call(e) !== e;
    })
        ? (r = {})
        : E && (r = u(r)),
    !s(r[f]) &&
        d(r, f, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h
    });
