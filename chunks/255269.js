n.d(t, {
    Z: function () {
        return o;
    },
    _: function () {
        return l;
    }
});
var r = n(399606),
    i = n(695346),
    a = n(496675),
    s = n(981631);
function o(e, t) {
    switch (e) {
        case s.A2N.ALWAYS:
            return !0;
        case s.A2N.IF_MODERATOR:
            return t;
        case s.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.MANAGE_MESSAGES, e));
    return !o(i.cC.useSetting(), t);
}
