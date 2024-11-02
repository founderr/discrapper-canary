n.d(t, {
    b: function () {
        return o;
    },
    e: function () {
        return a;
    }
});
var i = n(399606),
    r = n(594174),
    l = n(918505);
let a = () => s(r.default.getCurrentUser(), (0, l.JH)()),
    o = () =>
        s(
            (0, i.e7)([r.default], () => r.default.getCurrentUser()),
            (0, l.o9)()
        );
function s(e, t) {
    return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0;
}
