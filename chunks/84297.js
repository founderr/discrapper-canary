var n,
    a,
    o,
    i = r(936940),
    _ = r(354848),
    E = r(622281),
    s = r(803938),
    c = r(144748),
    I = r(859209),
    u = r(641236),
    l = r(992051),
    R = u('iterator'),
    A = !1;
[].keys && ('next' in (o = [].keys()) ? (a = c(c(o))) !== Object.prototype && (n = a) : (A = !0)),
    !E(n) ||
    i(function () {
        var e = {};
        return n[R].call(e) !== e;
    })
        ? (n = {})
        : l && (n = s(n)),
    !_(n[R]) &&
        I(n, R, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: A
    });
