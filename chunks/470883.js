r.d(n, {
    BA: function () {
        return d;
    },
    DX: function () {
        return _;
    },
    _j: function () {
        return u;
    },
    aK: function () {
        return c;
    },
    dq: function () {
        return l;
    }
});
var i = r(392711),
    a = r.n(i),
    s = r(699516),
    o = r(823379);
function l(e, n) {
    return e.filter((e) => (0, o.lm)(e)).filter((e) => !(null != n ? n.includes(e.id) : s.Z.isBlockedOrIgnored(e.id)));
}
function u(e, n) {
    return e.filter((e) => !(null != n ? n.includes(e) : s.Z.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !s.Z.isBlockedOrIgnored(e.ownerId));
}
function d(e, n) {
    return e.some((e) => (null != n ? n.includes(e) : s.Z.isBlockedOrIgnored(e)));
}
function f(e) {
    return s.Z.isBlockedOrIgnored(e.userId);
}
function _(e) {
    return a()(e)
        .filter((e) => !f(e))
        .keyBy('userId')
        .value();
}
