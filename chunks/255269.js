r.d(n, {
    Z: function () {
        return l;
    },
    _: function () {
        return u;
    }
});
var i = r(399606),
    a = r(695346),
    s = r(496675),
    o = r(981631);
function l(e, n) {
    switch (e) {
        case o.A2N.ALWAYS:
            return !0;
        case o.A2N.IF_MODERATOR:
            return n;
        case o.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function u(e) {
    let n = (0, i.e7)([s.Z], () => s.Z.can(o.Plq.MANAGE_MESSAGES, e));
    return !l(a.cC.useSetting(), n);
}
