n.d(t, {
    BA: function () {
        return c;
    },
    DX: function () {
        return d;
    },
    _j: function () {
        return l;
    },
    aK: function () {
        return u;
    },
    dq: function () {
        return o;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(699516),
    s = n(823379);
function o(e, t) {
    return e.filter((e) => (0, s.lm)(e)).filter((e) => !(null != t ? t.includes(e.id) : a.Z.isBlockedOrIgnored(e.id)));
}
function l(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function u(e) {
    return e.filter((e) => !a.Z.isBlockedOrIgnored(e.ownerId));
}
function c(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : a.Z.isBlockedOrIgnored(e)));
}
function d(e) {
    return i()(e)
        .filter((e) => {
            var t;
            return (t = e), !a.Z.isBlockedOrIgnored(t.userId);
        })
        .keyBy('userId')
        .value();
}
